import {
    error,
    IKeyValueStream,
    KeyValueStream,
    mergeStreamOfUnsafePromises,
    Stream,
    streamifyDictionary,
    success,
    UnsafeCallerFunction,
    UnsafePromise,
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
                // tryAll: <TargetType, ErrorType>(promisify: (entry: ElementType, index: number) => IInUnsafePromise<TargetType, ErrorType>) => {
                //     return mergeArrayOfUnsafePromises(array.map((element, index) => promisify(element, index)))
                // },
            }
        },
        KeyValueStream: <DataType>(stream: IInKeyValueStream<DataType>) => {
            return {
                // assertNoDuplicates: <ErrorType>(
                //     limiter: StreamLimiter,
                //     keyConflictErrorCreator: (aborted: boolean, errors: ReadOnlyDictionary<DataType[]>) => ErrorType
                // ) => {
                //     return convertStreamIntoDictionary(stream, limiter, keyConflictErrorCreator)
                // },
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
                        stream.processStream(
                            limiter,
                            data => {
                                lookup.getEntry(data.key).handleUnsafePromise(
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
                        lookup.getEntry(entryName).handleUnsafePromise(_err => onError(doesNotExistEntryCreator()), onSuccess)
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
                        source.handleSafePromise(res => {
                            onResult(res).handleUnsafePromise(onError, onSuccess)
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
                        resource.openUnsafeOpenableResource(
                            err => {
                                onOpenError(err).handleUnsafePromise(newOnError, newOnSuccess)
                            },
                            result => {
                                onOpenSuccess(result.resource).handleUnsafePromise(newOnError, newOnSuccess)
                                result.closeSafeOpenedResource()
                            }
                        )
                    }
                    return new UnsafePromise<ResultType, PromiseErrorType>(newFunc)
                },
            }
        },
    },
}

