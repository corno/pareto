import {
    convertStreamIntoDictionary,
    error,
    IKeyValueStream,
    InMemoryReadOnlyDictionary,
    KeyValueStream,
    mergeArrayOfUnsafePromises,
    mergeStreamOfUnsafePromises,
    ReadOnlyDictionary,
    Stream,
    streamifyDictionary,
    success,
    UnsafeCallerFunction,
    UnsafePromise
} from "pareto-20"

import {
    IInKeyValueStream,
    IInSafeLookup,
    IInSafePromise,
    IInStream,
    IInUnsafeOnOpenResource,
    IInUnsafePromise,
    StreamLimiter
} from "pareto-api"

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
                        return error<ElementType, ErrorType>(doesNotExistEntryCreator())
                    }
                    return success<ElementType, ErrorType>(value)
                },
                tryAll: <TargetType, ErrorType>(promisify: (entry: ElementType, index: number) => IInUnsafePromise<TargetType, ErrorType>) => {
                    return mergeArrayOfUnsafePromises(array.map((element, index) => promisify(element, index)))
                },
            }
        },
        Dictionary: <StoredData, OpenData>(dictionary: InMemoryReadOnlyDictionary<StoredData, OpenData>) => {
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
                //     assigner: () => IInUnsafePromise<EntryType, ErrorType>
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
                tryAll: <TargetType, NewErrorType>(promisify: (entry: OpenData, entryName: string) => IInUnsafePromise<TargetType, NewErrorType>) => {
                    return dictionary.mergeUnsafePromises_x(promisify)
                },
                match: <SupportType, NewErrorType>(
                    lookup: IInSafeLookup<SupportType>,
                    missingEntriesErrorCreator: (errors: ReadOnlyDictionary<OpenData>) => NewErrorType
                ) => {
                    return new UnsafePromise<ReadOnlyDictionary<{ main: OpenData, support: SupportType }>, NewErrorType>((onError, onSuccess) => {
                        const resultDictionary: { [key: string]: { main: OpenData, support: SupportType } } = {}
                        const errorDictionary: { [key: string]: OpenData } = {}
                        let hasErrors = false
                        //FIX make this work asynchronously
                        dictionary.forEach((entry, key) => {
                            lookup.getEntry(key).handle(
                                _err => {
                                    hasErrors = true
                                    errorDictionary[key] = entry
                                },
                                supportEntry => {
                                    resultDictionary[key] = {
                                        main: entry,
                                        support: supportEntry,
                                    }
                                }
                            )
                        })
                        if (hasErrors) {
                            onError(missingEntriesErrorCreator(new ReadOnlyDictionary(errorDictionary)))
                        } else {
                            onSuccess(new ReadOnlyDictionary(resultDictionary))
                        }
                    })
                },
            }
        },
        KeyValueStream: <DataType>(stream: IInKeyValueStream<DataType>) => {
            return {
                assertNoDuplicates: <ErrorType>(
                    limiter: StreamLimiter,
                    keyConflictErrorCreator: (aborted: boolean, errors: ReadOnlyDictionary<DataType[]>) => ErrorType
                ) => {
                    return convertStreamIntoDictionary(stream, limiter, keyConflictErrorCreator)
                },
                match: <SupportType, ErrorType>(
                    limiter: StreamLimiter,
                    lookup: IInSafeLookup<SupportType>,
                    missingEntriesErrorCreator: (errors: IKeyValueStream<DataType>) => ErrorType
                ) => {
                    return new UnsafePromise<IKeyValueStream<{ main: DataType, support: SupportType }>, ErrorType>((onError, onSuccess) => {
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
                                    onError(missingEntriesErrorCreator(new KeyValueStream(streamifyDictionary(errorDictionary))))
                                } else {
                                    onSuccess(new KeyValueStream(streamifyDictionary(resultDictionary)))
                                }
                            }
                        )
                    })
                },
            }
        },
        SafeLookup: <EntryType>(lookup: IInSafeLookup<EntryType>) => {
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
        SafePromise: <Type>(source: IInSafePromise<Type>) => {
            return {
                try: <ResultType, ErrorType>(
                    onResult: (result: Type) => IInUnsafePromise<ResultType, ErrorType>
                ) => {
                    return new UnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
                        source.handle(res => {
                            onResult(res).handle(onError, onSuccess)
                        })
                    })
                },
            }
        },
        Stream: <DataType>(stream: IInStream<DataType>, ) => {
            return {
                tryAll: <TargetType, IntermediateErrorType, ErrorType>(
                    limiter: StreamLimiter,
                    promisify: (entry: DataType) => IInUnsafePromise<TargetType, IntermediateErrorType>,
                    createError: (aborted: boolean, errors: Stream<IntermediateErrorType>) => ErrorType
                ) => {
                    return mergeStreamOfUnsafePromises(stream, limiter, promisify, createError)
                },
            }
        },
        UnsafeOnOpenResource: <ResourceType, OpenErrorType>(resource: IInUnsafeOnOpenResource<ResourceType, OpenErrorType>) => {
            return {
                with: <ResultType, PromiseErrorType>(
                    onOpenError: (error: OpenErrorType) => IInUnsafePromise<ResultType, PromiseErrorType>,
                    onOpenSuccess: (openReource: ResourceType) => IInUnsafePromise<ResultType, PromiseErrorType>
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
}

