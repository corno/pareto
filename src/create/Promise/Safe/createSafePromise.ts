import { ISafePromise, IStream, IUnsafeOnOpenResource, IUnsafePromise, StreamLimiter } from "pareto-api"
import { SafeCallerFunction, SafePromise } from "../../../classes/SafePromise"
import { processStreamOfSafePromises } from "./processStreamOfSafePromises"

export const createSafePromise = {
    from: {
        Stream: <DataType>(stream: IStream<DataType>) => {
            return {
                aggregateX: (limiter: StreamLimiter, onData: (data: DataType) => void) => {
                    return new SafePromise<null>(onResult => {
                        stream.process(limiter, data => onData(data), () => onResult(null))
                    })
                },
                process: (limiter: StreamLimiter, promisify: (entry: DataType) => ISafePromise<null>) => {
                    return processStreamOfSafePromises(stream, limiter, promisify)
                },
            }
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
                catch: (
                    onError: (error: ErrorType) => ResultType,
                ) => {
                    return new SafePromise<ResultType>(onResult => {
                        unsafePromise.handle(
                            error => {
                                onResult(onError(error))
                            },
                            success => {
                                onResult(success)
                            },
                        )
                    })
                },
                rework: <NewResultType>(
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
            }
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
