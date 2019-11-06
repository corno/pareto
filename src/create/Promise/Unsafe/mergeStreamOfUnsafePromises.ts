import {
    IStream,
    IUnsafePromise,
    StaticStream,
    Stream,
    UnsafePromise,
} from "pareto-20"
import { IInStream, IInUnsafePromise, StreamLimiter } from "pareto-api"

export function mergeStreamOfUnsafePromises<DataType, TargetType, IntermediateErrorType, ErrorType>(
    stream: IInStream<DataType>,
    limiter: StreamLimiter,
    promisify: (entry: DataType) => IInUnsafePromise<TargetType, IntermediateErrorType>,
    createError: (aborted: boolean, errors: Stream<IntermediateErrorType>) => ErrorType
): IUnsafePromise<IStream<TargetType>, ErrorType> {
    return new UnsafePromise<IStream<TargetType>, ErrorType>((onError, onSuccess) => {
        let hasErrors = false
        const errors: IntermediateErrorType[] = []
        const results: TargetType[] = []
        stream.processStream(
            limiter,
            data => {
                promisify(data).handleUnsafePromise(
                    error => {
                        hasErrors = true
                        errors.push(error)
                    },
                    result => {
                        results.push(result)
                    }
                )
            },
            aborted => {
                if (hasErrors) {
                    onError(createError(aborted, new StaticStream(errors)))
                } else {
                    onSuccess(new StaticStream(results))
                }
            }
        )
    })
}
