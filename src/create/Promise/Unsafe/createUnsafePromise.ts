import { ISafeLookup, ISafePromise, IStream, IUnsafeOnOpenResource, IUnsafePromise, StreamLimiter } from "pareto-api"
import { Dictionary} from "../../../classes/Dictionary"
import {
    UnsafeCallerFunction,
    UnsafePromise,
} from "../../../classes/UnsafePromise"
import { arrayToDictionary } from "../../../utils"
import { convertStreamIntoDictionary } from "./convertStreamIntoDictionary"
import { mergeArrayOfUnsafePromises } from "./mergeArrayOfUnsafePromises"
import { mergeDictionaryOfUnsafePromises } from "./mergeDictionaryOfUnsafePromises"
import { mergeStreamOfUnsafePromises } from "./mergeStreamOfUnsafePromises"
import { processStreamOfUnsafePromises } from "./processStreamOfUnsafePromises"

export const createUnsafePromise = {
    from: {
        Array: {
            getElementAt: <ElementType>(array: ElementType[], index: number) => {
                const value = array[index]
                if (value === undefined) {
                    return createUnsafePromise.error<ElementType, null>(null)

                }
                return createUnsafePromise.success<ElementType, null>(value)
            },
            merge: <SourceType, TargetType, ErrorType>(array: SourceType[], promisify: (entry: SourceType, index: number) => IUnsafePromise<TargetType, ErrorType>) => {
                return mergeArrayOfUnsafePromises(array.map((element, index) => promisify(element, index)))
            },
        },
        Dictionary: {
            assertEntryDoesNotExistX: <EntryType>(obj: { [key: string]: EntryType }, name: string) => {
                const value = obj[name]
                if (value === undefined) {
                    return createUnsafePromise.success<null, EntryType>(null)

                }
                return createUnsafePromise.error<null, EntryType>(value)
            },
            assign: <EntryType, ErrorType>(
                obj: { [key: string]: EntryType },
                name: string,
                createError: () => ErrorType,
                assigner: () => IUnsafePromise<EntryType, ErrorType>
            ) => {
                const value = obj[name]
                if (value === undefined) {
                    return new UnsafePromise((onError, onSuccess) => {
                        assigner().handle(onError, onSuccess)
                    })
                }
                return createUnsafePromise.error<EntryType, ErrorType>(createError())
            },
            rename: <EntryType, ErrorType>(
                obj: { [key: string]: EntryType },
                oldName: string,
                newName: string,
                createExistsError: () => ErrorType,
                createDoesNotExistError: () => ErrorType
            ) => {
                const value = obj[oldName]
                if (value === undefined) {
                    return createDoesNotExistError()
                }
                if (obj[newName] !== undefined) {
                    return createExistsError()
                }
                return createUnsafePromise.success<null, ErrorType>(null)
            },
            merge: <SourceType, TargetType, ErrorType>(dictionary: Dictionary<SourceType>, promisify: (entry: SourceType, entryName: string) => IUnsafePromise<TargetType, ErrorType>) => {
                const keys = Object.keys(dictionary.raw)
                const array = keys.map(key => promisify(dictionary.raw[key], key))
                return mergeDictionaryOfUnsafePromises(arrayToDictionary(array, keys).raw)
            },
            match: <MainType, SupportType>(mainDictionary: { [key: string]: MainType }, lookup: ISafeLookup<SupportType>) => {

                return new UnsafePromise<Dictionary<{ main: MainType, support: SupportType }>, Dictionary<MainType>>((onError, onSuccess) => {
                    const keys = Object.keys(mainDictionary)
                    const resultDictionary: { [key: string]: { main: MainType, support: SupportType } } = {}
                    const errorDictionary: { [key: string]: MainType } = {}
                    let hasErrors = false
                    //FIX make this work asynchronously
                    keys.forEach(key => {
                        lookup.getEntry(key).handle(
                            _err => {
                                hasErrors = true,
                                    errorDictionary[key] = mainDictionary[key]
                            },
                            supportEntry => {
                                resultDictionary[key] = {
                                    main: mainDictionary[key],
                                    support: supportEntry,
                                }
                            }
                        )
                    })
                    if (hasErrors) {
                        onError(new Dictionary(errorDictionary))
                    } else {
                        onSuccess(new Dictionary(resultDictionary))
                    }
                })
            },
        },
        KeyValueStream: {
            createDictionary: convertStreamIntoDictionary,
        },
        SafeLookup: {
            getEntry: <EntryType>(lookup: ISafeLookup<EntryType>, entryName: string) => {
                return createUnsafePromise.wrap( lookup.getEntry(entryName))
            },
        },
        SafePromise: {
            try: <SourceType, ResultType, ErrorType>(
                source: ISafePromise<SourceType>,
                onResult: (result: SourceType) => UnsafePromise<ResultType, ErrorType>
            ) => {
                return new UnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
                    source.handle(res => {
                        onResult(res).handle(onError, onSuccess)
                    })

                })
            },
        },
        Stream: {
            processX: <DataType>(stream: IStream<DataType>, limiter: StreamLimiter, promisify: (entry: DataType) => IUnsafePromise<null, null>) => {
                return processStreamOfUnsafePromises(stream, limiter, promisify)
            },
            merge: mergeStreamOfUnsafePromises,
        },
        UnsafeOnOpenResource: {
            with: <ResourceType, OpenErrorType, ResultType, PromiseErrorType>(
                resource: IUnsafeOnOpenResource<ResourceType, OpenErrorType>,
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
        },
        Value: {
            isNotNull: <ResultType>(value: null | ResultType) => {
                if (value === null) { return createUnsafePromise.error<ResultType, null>(null) }
                return createUnsafePromise.success<ResultType, null>(value)
            },
            isNull: <ResultType>(value: null | ResultType) => {
                if (value === null) { return createUnsafePromise.success<null, ResultType>(null) }
                return createUnsafePromise.error<null, ResultType>(value)
            },
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
