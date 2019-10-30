import {
    IKeyValueStream,
    ISafeLookup,
    ISafePromise,
    IStream,
    IUnsafeOnOpenResource,
    IUnsafePromise,
    StreamLimiter
} from "pareto-api"
import { Dictionary } from "../../../classes/Dictionary"
import { Stream } from "../../../classes/Stream"
import {
    UnsafeCallerFunction,
    UnsafePromise,
} from "../../../classes/UnsafePromise"
//import { arrayToDictionary } from "../../../utils"
import { convertStreamIntoDictionary } from "./convertStreamIntoDictionary"
import { mergeArrayOfUnsafePromises } from "./mergeArrayOfUnsafePromises"
import { mergeDictionaryOfUnsafePromises } from "./mergeDictionaryOfUnsafePromises"
import { mergeStreamOfUnsafePromises } from "./mergeStreamOfUnsafePromises"
import { processStreamOfUnsafePromises } from "./processStreamOfUnsafePromises"

export const createUnsafePromise = {
    from: {
        Array: <ElementType>(array: ElementType[]) => {
            return {
                getElementAt: <ErrorType>(
                    index: number,
                    doesNotExistEntryCreator: () => ErrorType
                ) => {
                    const value = array[index]
                    if (value === undefined) {
                        return createUnsafePromise.error<ElementType, ErrorType>(doesNotExistEntryCreator())
                    }
                    return createUnsafePromise.success<ElementType, ErrorType>(value)
                },
                merge: <TargetType, ErrorType>(promisify: (entry: ElementType, index: number) => IUnsafePromise<TargetType, ErrorType>) => {
                    return mergeArrayOfUnsafePromises(array.map((element, index) => promisify(element, index)))
                },
            }
        },
        Dictionary: <EntryType>(dictionary: Dictionary<EntryType>) => {
            return {
                // assertEntryDoesNotExistX: (name: string) => {
                //     const value = dictionary[name]
                //     if (value === undefined) {
                //         return createUnsafePromise.success<null, EntryType>(null)

                //     }
                //     return createUnsafePromise.error<null, EntryType>(value)
                // },
                // assign: <ErrorType>(
                //     name: string,
                //     createError: () => ErrorType,
                //     assigner: () => IUnsafePromise<EntryType, ErrorType>
                // ) => {
                //     const value = dictionary[name]
                //     if (value === undefined) {
                //         return new UnsafePromise((onError, onSuccess) => {
                //             assigner().handle(onError, onSuccess)
                //         })
                //     }
                //     return createUnsafePromise.error<EntryType, ErrorType>(createError())
                // },
                // rename: <ErrorType>(
                //     oldName: string,
                //     newName: string,
                //     createExistsError: () => ErrorType,
                //     createDoesNotExistError: () => ErrorType
                // ) => {
                //     const value = dictionary[oldName]
                //     if (value === undefined) {
                //         return createDoesNotExistError()
                //     }
                //     if (dictionary[newName] !== undefined) {
                //         return createExistsError()
                //     }
                //     return createUnsafePromise.success<null, ErrorType>(null)
                // },
                merge: <TargetType, ErrorType>(promisify: (entry: EntryType, entryName: string) => IUnsafePromise<TargetType, ErrorType>) => {
                    return mergeDictionaryOfUnsafePromises(dictionary.map((entry, entryName) => {
                        return promisify(entry, entryName)
                    }))
                },
                match: <SupportType, ErrorType>(
                    lookup: ISafeLookup<SupportType>,
                    missingEntriesErrorCreator: (errors: Dictionary<EntryType>) => ErrorType
                ) => {
                    return new UnsafePromise<Dictionary<{ main: EntryType, support: SupportType }>, ErrorType>((onError, onSuccess) => {
                        const keys = Object.keys(dictionary)
                        const resultDictionary: { [key: string]: { main: EntryType, support: SupportType } } = {}
                        const errorDictionary: { [key: string]: EntryType } = {}
                        let hasErrors = false
                        //FIX make this work asynchronously
                        keys.forEach(key => {
                            lookup.getEntry(key).handle(
                                _err => {
                                    hasErrors = true,
                                        errorDictionary[key] = dictionary.raw[key]
                                },
                                supportEntry => {
                                    resultDictionary[key] = {
                                        main: dictionary.raw[key],
                                        support: supportEntry,
                                    }
                                }
                            )
                        })
                        if (hasErrors) {
                            onError(missingEntriesErrorCreator(new Dictionary(errorDictionary)))
                        } else {
                            onSuccess(new Dictionary(resultDictionary))
                        }
                    })
                },
            }
        },
        KeyValueStream: <DataType>(stream: IKeyValueStream<DataType>) => {
            return {
                createDictionary: <ErrorType>(
                    limiter: StreamLimiter,
                    keyConflictErrorCreator: (aborted: boolean, errors: Dictionary<DataType[]>) => ErrorType
                ) => {
                    return convertStreamIntoDictionary(stream, limiter, keyConflictErrorCreator)
                },
                match: <SupportType, ErrorType>(
                    limiter: StreamLimiter,
                    lookup: ISafeLookup<SupportType>,
                    missingEntriesErrorCreator: (errors: Dictionary<DataType>) => ErrorType
                ) => {
                    return new UnsafePromise<Dictionary<{ main: DataType, support: SupportType }>, ErrorType>((onError, onSuccess) => {
                        //const keys = Object.keys(dictionary)
                        const resultDictionary: { [key: string]: { main: DataType, support: SupportType } } = {}
                        const errorDictionary: { [key: string]: DataType } = {}
                        let hasErrors = false
                        //FIX make this work asynchronously
                        stream.process(
                            limiter,
                            data => {
                                lookup.getEntry(data.key).handle(
                                    _err => {
                                        hasErrors = true,
                                            errorDictionary[data.key] = data.value
                                    },
                                    supportEntry => {
                                        resultDictionary[data.key] = {
                                            main: data.value,
                                            support: supportEntry,
                                        }
                                    }
                                )
                            },
                            _aborted => {
                                if (hasErrors) {
                                    onError(missingEntriesErrorCreator(new Dictionary(errorDictionary)))
                                } else {
                                    onSuccess(new Dictionary(resultDictionary))
                                }
                            }
                        )
                    })
                },
            }
        },
        SafeLookup: <EntryType>(lookup: ISafeLookup<EntryType>) => {
            return {
                getEntry: <ErrorType>(
                    entryName: string,
                    doesNotExistEntryCreator: () => ErrorType
                ) => {
                    return new UnsafePromise<EntryType, ErrorType>((onError, onSuccess) => {
                        lookup.getEntry(entryName).handle(_err => onError(doesNotExistEntryCreator()), onSuccess)
                    })
                },
            }
        },
        SafePromise: <Type>(source: ISafePromise<Type>) => {
            return {
                try: <ResultType, ErrorType>(
                    onResult: (result: Type) => UnsafePromise<ResultType, ErrorType>
                ) => {
                    return new UnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
                        source.handle(res => {
                            onResult(res).handle(onError, onSuccess)
                        })
                    })
                },
            }
        },
        Stream: <DataType>(stream: IStream<DataType>, ) => {
            return {
                processX: <ErrorType>(limiter: StreamLimiter, promisify: (entry: DataType) => IUnsafePromise<null, ErrorType>, errorCreator: (aborted: boolean, errors: ErrorType[]) => ErrorType) => {
                    return processStreamOfUnsafePromises(stream, limiter, promisify, errorCreator)
                },
                merge: <TargetType, IntermediateErrorType, ErrorType>(
                    limiter: StreamLimiter,
                    promisify: (entry: DataType) => IUnsafePromise<TargetType, IntermediateErrorType>,
                    createError: (aborted: boolean, errors: Stream<IntermediateErrorType>) => ErrorType
                ) => {
                    return mergeStreamOfUnsafePromises(stream, limiter, promisify, createError)
                },
            }
        },
        UnsafeOnOpenResource: <ResourceType, OpenErrorType>(resource: IUnsafeOnOpenResource<ResourceType, OpenErrorType>) => {
            return {
                with: <ResultType, PromiseErrorType>(
                    onOpenError: (error: OpenErrorType) => UnsafePromise<ResultType, PromiseErrorType>,
                    onOpenSuccess: (openReource: ResourceType) => UnsafePromise<ResultType, PromiseErrorType>
                ) => {
                    const newFunc: UnsafeCallerFunction<ResultType, PromiseErrorType> = (newOnError, newOnSuccess) => {
                        resource.open(
                            err => {
                                onOpenError(err).handle(newOnError, newOnSuccess)
                            },
                            result => {
                                onOpenSuccess(result.resource).handle(newOnError, newOnSuccess)
                                result.close()
                            }
                        )
                    }
                    return new UnsafePromise<ResultType, PromiseErrorType>(newFunc)
                },
            }
        },
    },
    success: <ResultType, ErrorType>(result: ResultType): UnsafePromise<ResultType, ErrorType> => {
        const handler: UnsafeCallerFunction<ResultType, ErrorType> = (_onError: (error: ErrorType) => void, onSuccess: (result: ResultType) => void) => {
            onSuccess(result)
        }
        return new UnsafePromise<ResultType, ErrorType>(handler)
    },
    error: <ResultType, ErrorType>(error: ErrorType): UnsafePromise<ResultType, ErrorType> => {
        const handler: UnsafeCallerFunction<ResultType, ErrorType> = (onError: (error: ErrorType) => void, _onSuccess: (result: ResultType) => void) => {
            onError(error)
        }
        return new UnsafePromise<ResultType, ErrorType>(handler)
    },
    wrap: <SourceResultType, SourceErrorType>(promise: IUnsafePromise<SourceResultType, SourceErrorType>) => {
        return new UnsafePromise<SourceResultType, SourceErrorType>((onError, onSucces) => {
            promise.handle(onError, onSucces)
        })
    },
}
