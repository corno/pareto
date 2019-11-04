import { IStream, IUnsafePromise, StreamLimiter } from "pareto-api"
import { BuildableStream } from "../../../builders/BuildableStream"
import { Stream } from "../../../classes/Stream"
import { UnsafePromise } from "../../../classes/UnsafePromise"

export function mergeStreamOfUnsafePromises<DataType, TargetType, IntermediateErrorType, ErrorType>(
    stream: IStream<DataType>,
    limiter: StreamLimiter,
    promisify: (entry: DataType) => IUnsafePromise<TargetType, IntermediateErrorType>,
    createError: (aborted: boolean, errors: Stream<IntermediateErrorType>) => ErrorType
) {
    return new UnsafePromise<Stream<TargetType>, ErrorType>((onError, onSuccess) => {
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
