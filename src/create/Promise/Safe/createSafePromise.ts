import { ISafePromise, IStream, IUnsafeOnOpenResource, IUnsafePromise, StreamLimiter } from "pareto-api"
import { SafeCallerFunction, SafePromise } from "../../../classes/SafePromise"
import { arrayToDictionary } from "../../../utils"
import { mergeArrayOfSafePromises } from "./mergeArrayOfSafePromises"
import { processStreamOfSafePromises } from "./processStreamOfSafePromises"



export function mapSafePromisesDictionary<ResultType>(
    dictionary: { [key: string]: ISafePromise<ResultType> }
): SafePromise<{ [key: string]: ResultType }> {
    const keys = Object.keys(dictionary)
    const array = keys.map(key => dictionary[key])
    return mergeArrayOfSafePromises(array).mapRaw(results =>
        arrayToDictionary(results, keys).raw
    )
}

export const createSafePromise = {
    from: {
        Stream: {
            aggregateX: <DataType>(limiter: StreamLimiter, stream: IStream<DataType>, onData: (data: DataType) => void) => {
                return new SafePromise<null>(onResult => {
                    stream.process(limiter, data => onData(data), () => onResult(null))
                })
            },
            process: <DataType>(stream: IStream<DataType>, limiter: StreamLimiter, promisify: (entry: DataType) => ISafePromise<null>) => {
                return processStreamOfSafePromises(stream, limiter, promisify)
            },
        },
        UnsafeOnOpenResource: {
            with: <ResourceType, OpenErrorType, ResultType>(
                resource: IUnsafeOnOpenResource<ResourceType, OpenErrorType>,
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
        },
        UnsafePromise: {
            catch: <ResultType, ErrorType, NewResultType>(
                unsafePromise: IUnsafePromise<ResultType, ErrorType>,
                onError: (error: ErrorType) => ISafePromise<NewResultType>,
                onSuccess: (result: ResultType) => ISafePromise<NewResultType>
            ) => {
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
        },
    },
    //If a Safe Promise is required, but the result is already known
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
}
