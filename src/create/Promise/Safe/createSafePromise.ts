import {
    SafePromise,
} from "pareto-20"
import { IInSafePromise, IInUnsafePromise } from "pareto-api"

export const createSafePromise = {
    from: {
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
