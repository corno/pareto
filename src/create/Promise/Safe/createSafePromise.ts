import {
    SafeCallerFunction,
    SafePromise,
} from "pareto-20"
import { IInSafePromise, IInUnsafeOnOpenResource, IInUnsafePromise } from "pareto-api"

export const createSafePromise = {
    from: {
        UnsafeOnOpenResource: <ResourceType, OpenErrorType>(resource: IInUnsafeOnOpenResource<ResourceType, OpenErrorType>) => {
            return {
                with: <ResultType>(
                    onOpenError: (error: OpenErrorType) => IInSafePromise<ResultType>,
                    onOpenSuccess: (openReource: ResourceType) => IInSafePromise<ResultType>
                ) => {
                    const newFunc: SafeCallerFunction<ResultType> = onResult => {
                        resource.openUnsafeOpenableResource(
                            err => {
                                onOpenError(err).handleSafePromise(onResult)
                            },
                            res => {
                                onOpenSuccess(res.resource).handleSafePromise(onResult)
                                res.closeSafeOpenedResource()
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
                        unsafePromise.handleUnsafePromise(
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
                        unsafePromise.handleUnsafePromise(
                            error => {
                                onError(error).handleSafePromise(res => onResult(res))
                            },
                            success => {
                                onSuccess(success).handleSafePromise(res => onResult(res))
                            },
                        )
                    })
                },
            }
        },
    },
}
