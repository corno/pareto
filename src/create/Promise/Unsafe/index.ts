import { ISafePromise, IUnsafeOnOpenResource, IUnsafePromise } from "pareto-api"
import {
    UnsafeCallerFunction,
    UnsafePromise,
} from "../../../classes/UnsafePromise"
import { mapUnsafePromisesArray } from "./mapUnsafePromisesArray"
import { mapUnsafePromisesDictionary } from "./mapUnsafePromisesDictionary"

export const createUnsafePromise = {
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
    from: {
        Array: <ElementType>(array: ElementType[]) => {
            return {
                getElementAt: (index: number) => {
                    const value = array[index]
                    if (value === undefined) {
                        return createUnsafePromise.error<ElementType, null>(null)

                    }
                    return createUnsafePromise.success<ElementType, null>(value)
                },
                tryAll: <Type, ErrorType>(promisify: (element: ElementType) => UnsafePromise<Type, ErrorType>) => {
                    return mapUnsafePromisesArray(array, (element, _id) => promisify(element))
                },
            }
        },
        Dictionary: <EntryType>(obj: { [key: string]: EntryType }) => {
            return {
                getEntry: (name: string) => {
                    const value = obj[name]
                    if (value === undefined) {
                        return createUnsafePromise.error<EntryType, null>(null)

                    }
                    return createUnsafePromise.success<EntryType, null>(value)
                },
                assertEntryDoesNotExist: (name: string) => {
                    const value = obj[name]
                    if (value === undefined) {
                        return createUnsafePromise.success<null, EntryType>(null)

                    }
                    return createUnsafePromise.error<null, EntryType>(value)
                },
                tryAll: <Type, ErrorType>(promisify: (entry: EntryType, entryName: string) => IUnsafePromise<Type, ErrorType>) => {
                    return mapUnsafePromisesDictionary(obj, promisify)
                },
                merge: <SupportType>(supportDictionary: { [key: string]: SupportType }) => {
                    return mapUnsafePromisesDictionary(obj, (entry, entryName) => {
                        const handler: UnsafeCallerFunction<{ main: EntryType, support: SupportType }, EntryType> = (
                            onError: (error: EntryType) => void,
                            onSuccess: (result: { main: EntryType, support: SupportType }) => void
                        ) => {
                            const supportEntry = supportDictionary[entryName]
                            if (supportEntry === undefined) {
                                onError(entry)
                            } else {
                                onSuccess({ main: entry, support: supportEntry })
                            }
                        }
                        return new UnsafePromise<{ main: EntryType, support: SupportType }, EntryType>(handler)
                    })
                },
            }
        },
        Value: {
            isNotNull: <ResultType>(value: ResultType) => {
                if (value === null) { return createUnsafePromise.error<ResultType, null>(null) }
                return createUnsafePromise.success<ResultType, null>(value)
            },
            isNull: <ResultType>(value: ResultType) => {
                if (value === null) { return createUnsafePromise.success<null, ResultType>(null) }
                return createUnsafePromise.error<null, ResultType>(value)
            },
        },
        SafePromise: <SourceType>(
            source: ISafePromise<SourceType>,
        ) => {
            return {
                try: <ResultType, ErrorType>(
                    onResult: (result: SourceType) => UnsafePromise<ResultType, ErrorType>
                ): UnsafePromise<ResultType, ErrorType> => {
                    return new UnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
                        source.handle(res => {
                            onResult(res).handle(onError, onSuccess)
                        })

                    })
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
}
