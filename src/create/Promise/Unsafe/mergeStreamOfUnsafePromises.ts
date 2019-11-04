import { IInStream, IInUnsafePromise, StreamLimiter } from "pareto-api"
import { BuildableStream } from "../../../classes/builders/BuildableStream"
import { Stream } from "../../../classes/volatile/Stream"
import { IUnsafePromise } from "../../../classes/volatile/UnsafePromise"

export function mergeStreamOfUnsafePromises<DataType, TargetType, IntermediateErrorType, ErrorType>(
    stream: IInStream<DataType>,
    limiter: StreamLimiter,
    promisify: (entry: DataType) => IInUnsafePromise<TargetType, IntermediateErrorType>,
    createError: (aborted: boolean, errors: Stream<IntermediateErrorType>) => ErrorType
) {
    return new IUnsafePromise<Stream<TargetType>, ErrorType>((onError, onSuccess) => {
        let hasErrors = false
        const errors = new BuildableStream<IntermediateErrorType>()
        const results = new BuildableStream<TargetType>()
        stream.process(
            limiter,
            data => {
                promisify(data).handle(
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
                    onError(createError(aborted, errors))
                } else {
                    onSuccess(results)
                }
            }
        )
    })
}
