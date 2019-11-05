import { IInSafePromise, IInStream, IInUnsafeOnOpenResource, IInUnsafePromise, StreamLimiter } from "pareto-api"
import { InMemoryReadOnlyDictionary } from "../../../classes/volatile/InMemoryReadOnlyDictionary"
import {
    SafeCallerFunction,
    SafePromise,
} from "../../../classes/volatile/SafePromise"
import { processStreamOfSafePromises } from "./processStreamOfSafePromises"

export const createSafePromise = {
    from: {
        Dictionary: <StoredData, OpenData>(dictionary: InMemoryReadOnlyDictionary<StoredData, OpenData>) => {
            return {
                merge: <TargetType>(promisify: (entry: OpenData, entryName: string) => IInSafePromise<TargetType>) => {
                    return dictionary.mergeSafePromises_x(promisify)
                },
            }
        },
        Stream: <DataType>(stream: IInStream<DataType>) => {
            return {
                aggregateX: (limiter: StreamLimiter, onData: (data: DataType) => void) => {
                    return new SafePromise<null>(onResult => {
                        stream.process(limiter, data => onData(data), () => onResult(null))
                    })
                },
                process: (limiter: StreamLimiter, promisify: (entry: DataType) => IInSafePromise<null>) => {
                    return processStreamOfSafePromises(stream, limiter, promisify)
                },
            }
        },
        UnsafeOnOpenResource: <ResourceType, OpenErrorType>(resource: IInUnsafeOnOpenResource<ResourceType, OpenErrorType>) => {
            return {
                with: <ResultType>(
                    onOpenError: (error: OpenErrorType) => IInSafePromise<ResultType>,
                    onOpenSuccess: (openReource: ResourceType) => IInSafePromise<ResultType>
                ) => {
                    const newFunc: SafeCallerFunction<ResultType> = onResult => {
                        resource.open(
                            err => {
                                onOpenError(err).handle(onResult)
                            },
                            res => {
                                onOpenSuccess(res.resource).handle(onResult)
                                res.close()
                            }
                        )
                    }
                    return new SafePromise<ResultType>(newFunc)
                },
            }
        },
        UnsafePromise: <ResultType, ErrorType>(unsafePromise: IInUnsafePromise<ResultType, ErrorType>) => {
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
                    onError: (error: ErrorType) => IInSafePromise<NewResultType>,
                    onSuccess: (result: ResultType) => IInSafePromise<NewResultType>
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
}

//If a Safe Promise is required, but the result is already known
export const result = <ResultType>(res: ResultType): SafePromise<ResultType> => {
    const handler: SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => {
        onResult(res)
    }
    return new SafePromise<ResultType>(handler)
}
