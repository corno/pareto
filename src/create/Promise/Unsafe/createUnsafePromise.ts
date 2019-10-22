import { ISafePromise, IStream, IUnsafeOnOpenResource, IUnsafePromise } from "pareto-api"
import {
    UnsafeCallerFunction,
    UnsafePromise,
} from "../../../classes/UnsafePromise"
import { arrayToDictionary } from "../../../utils"
import { mergeArrayOfUnsafePromises } from "./mergeArrayOfUnsafePromises"
import { mergeDictionaryOfUnsafePromises } from "./mergeDictionaryOfUnsafePromises"
import {processStreamOfUnsafePromises } from "./processStreamOfUnsafePromises"

const maxErrorCount = 100

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
            getEntry: <EntryType>(obj: { [key: string]: EntryType }, name: string) => {
                const value = obj[name]
                if (value === undefined) {
                    return createUnsafePromise.error<EntryType, null>(null)

                }
                return createUnsafePromise.success<EntryType, null>(value)
            },
            assertEntryDoesNotExist: <EntryType>(obj: { [key: string]: EntryType }, name: string) => {
                const value = obj[name]
                if (value === undefined) {
                    return createUnsafePromise.success<null, EntryType>(null)

                }
                return createUnsafePromise.error<null, EntryType>(value)
            },
            merge: <SourceType, TargetType, ErrorType>(obj: { [key: string]: SourceType }, promisify: (entry: SourceType, entryName: string) => IUnsafePromise<TargetType, ErrorType>) => {
                const keys = Object.keys(obj)
                const array = keys.map(key => promisify(obj[key], key))
                return mergeDictionaryOfUnsafePromises(arrayToDictionary(array, keys))
            },
            match: <MainType, SupportType>(mainDictionary: { [key: string]: MainType }, supportDictionary: { [key: string]: SupportType }) => {
                const keys = Object.keys(mainDictionary)
                const resultDictionary: { [key: string]: { main: MainType, support: SupportType } } = {}
                const errorDictionary: { [key: string]: MainType } = {}
                let hasErrors = false
                keys.forEach(key => {
                    const supportEntry = supportDictionary[key]
                    if (supportEntry === undefined) {
                        hasErrors = true
                        errorDictionary[key] = mainDictionary[key]
                    } else {
                        resultDictionary[key] = {
                            main: mainDictionary[key],
                            support: supportEntry,
                        }
                    }
                })
                return new UnsafePromise<{ [key: string]: { main: MainType, support: SupportType } }, { [key: string]: MainType }>((onError, onSuccess) => {
                    if (hasErrors) {
                        onError(errorDictionary)
                    } else {
                        onSuccess(resultDictionary)
                    }
                })
            },
        },
        SafePromise: {
            try: <SourceType, ResultType, ErrorType>(
                source: ISafePromise<SourceType>,
                onResult: (result: SourceType) => UnsafePromise<ResultType, ErrorType>
            ): UnsafePromise<ResultType, ErrorType> => {
                return new UnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
                    source.handle(res => {
                        onResult(res).handle(onError, onSuccess)
                    })

                })
            },
        },
        Stream: {
            process: <DataType>(stream: IStream<DataType>, promisify: (entry: DataType) => IUnsafePromise<null, null>) => {
                return processStreamOfUnsafePromises(stream, promisify, maxErrorCount)
            },
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
