import { IUnsafePromise } from "pareto-api"
import { ExecutionType } from "../../../ExecutionType"
import { mapUnsafePromisesArray } from "./mapUnsafePromisesArray"
import { mapUnsafePromisesDictionary } from "./mapUnsafePromisesDictionary"
import {
    UnsafeCallerFunction,
    UnsafePromise,
} from "./wrap"

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
                tryAll: <Type, ErrorType>(execution: ExecutionType, promisify: (element: ElementType) => UnsafePromise<Type, ErrorType>) => {
                    return mapUnsafePromisesArray(execution, array, (element, _id) => promisify(element))
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
                tryAll: <Type, ErrorType>(execution: ExecutionType, promisify: (entry: EntryType, entryName: string) => IUnsafePromise<Type, ErrorType>) => {
                    return mapUnsafePromisesDictionary(execution, obj, promisify)
                },
                merge: <SupportType>(supportDictionary: { [key: string]: SupportType }) => {
                    return mapUnsafePromisesDictionary(ExecutionType.parallel, obj, (entry, entryName) => {
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
        Function: <ResultType, ErrorType>(func: UnsafeCallerFunction<ResultType, ErrorType>) => {
            return new UnsafePromise(func)
        },
        NonNullValue: <ResultType>(value: null | ResultType) => {
            if (value === null) { return createUnsafePromise.error<ResultType, null>(null) }
            return createUnsafePromise.success<ResultType, null>(value)
        },
        NullValue: <ResultType>(value: null | ResultType) => {
            if (value === null) { return createUnsafePromise.success<null, ResultType>(null) }
            return createUnsafePromise.error<null, ResultType>(value)
        },
        UnsafePromiseInterface: <SourceResultType, SourceErrorType>(promise: IUnsafePromise<SourceResultType, SourceErrorType>) => {
            return new UnsafePromise<SourceResultType, SourceErrorType>((onError, onSucces) => {
                promise.handle(onError, onSucces)
            })
        },
    },
}
