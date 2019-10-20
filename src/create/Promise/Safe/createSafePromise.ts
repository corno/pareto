
import { ISafePromise, IStream, IUnsafeOnOpenResource, IUnsafePromise } from "pareto-api"
import { SafeCallerFunction, SafePromise } from "../../../classes/SafePromise"

export function mapSafePromisesArray<SourceType, ResultType>(
    array: SourceType[],
    promisify: (entry: SourceType, index: number) => ISafePromise<ResultType>
): SafePromise<ResultType[]> {
    let isExecuted = false
    function execute(onResult: (results: ResultType[]) => void) {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        let resolvedCount = 0
        const results: ResultType[] = []

        function wrapup() {

            if (resolvedCount > array.length) {
                throw new Error("promises are called back more than once")
            }
            if (resolvedCount === array.length) {
                onResult(results)
            }
        }
        if (array.length === 0) {
            wrapup()
        } else {
            array.forEach((element, index) => {
                (() => {
                    promisify(element, index).handle(
                        result => {
                            results[index] = result
                            resolvedCount += 1
                            wrapup()
                        }
                    )
                })()
            })
        }
    }
    return new SafePromise(execute)
}


function arrayToDictionary<Type>(array: Type[], keys: string[]) {
    const dictionary: { [key: string]: Type } = {}
    array.forEach((element, index) => dictionary[keys[index]] = element)
    return dictionary
}

export function mapSafePromisesDictionary<SourceType, ResultType>(
    dictionary: { [key: string]: SourceType },
    promisify: (entry: SourceType, entryName: string) => ISafePromise<ResultType>
): SafePromise<{ [key: string]: ResultType }> {
    const keys = Object.keys(dictionary)
    const array = keys.map(key => ({
        key: key,
        value: dictionary[key],
    }))
    return mapSafePromisesArray(array, element =>
        promisify(element.value, element.key)
    ).mapRaw(results =>
        arrayToDictionary(results, keys)
    )
}


export const createSafePromise = {
    result: <ResultType>(result: ResultType): SafePromise<ResultType> => {
        const handler: SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => {
            onResult(result)
        }
        return new SafePromise<ResultType>(handler)
    },
    wrap: <SourceResultType>(promise: ISafePromise<SourceResultType>) => {
        return new SafePromise<SourceResultType>(onResult => {
            promise.handle(onResult)
        })
    },
    from: {
        Function: <ResultType>(func: SafeCallerFunction<ResultType>) => {
            return new SafePromise(func)
        },
        Stream: <DataType>(stream: IStream<DataType>, onData: (data: DataType) => void) => {
            return new SafePromise<null>(onResult => {
                stream.process(data => onData(data), () => onResult(null))
            })
        },
        UnsafeOnOpenResource: <ResourceType, OpenErrorType>(resource: IUnsafeOnOpenResource<ResourceType, OpenErrorType>) => {
            return {
                with: <ResultType>(
                    onOpenError: (error: OpenErrorType) => SafePromise<ResultType>,
                    onOpenSuccess: (openReource: ResourceType) => SafePromise<ResultType>
                ) => {
                    const newFunc: SafeCallerFunction<ResultType> = onResult => {
                        resource.open(
                            err => {
                                onOpenError(err).handle(onResult)
                            },
                            result => {
                                onOpenSuccess(result.resource).handle(onResult)
                                result.close()
                            }
                        )
                    }
                    return new SafePromise<ResultType>(newFunc)
                },
            }
        },
        UnsafePromise: <ResultType, ErrorType>(unsafePromise: IUnsafePromise<ResultType, ErrorType>) => {
            return {
                catch: <NewResultType>(onError: (error: ErrorType) => ISafePromise<NewResultType>, onSuccess: (result: ResultType) => ISafePromise<NewResultType>) => {
                    return new SafePromise<NewResultType>(onResult => {
                        unsafePromise.handle(
                            error => {
                                onError(error).handle(res => onResult(res))
                            },
                            success => {
                                onSuccess(success).handle(res => onResult(res))
                            },
                        )
                    })
                },
            }
        },
    },
}
