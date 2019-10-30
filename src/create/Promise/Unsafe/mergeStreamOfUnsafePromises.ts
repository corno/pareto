import { IStream, IUnsafePromise, StreamLimiter } from "pareto-api"
import { Stream } from "../../../classes/Stream"
import { UnsafePromise } from "../../../classes/UnsafePromise"
import { streamifyArray } from "../../Stream/streamifyArray"

export function mergeStreamOfUnsafePromises<DataType, TargetType, IntermediateErrorType, ErrorType>(
    stream: IStream<DataType>,
    limiter: StreamLimiter,
    promisify: (entry: DataType) => IUnsafePromise<TargetType, IntermediateErrorType>,
    createError: (aborted: boolean, errors: Stream<IntermediateErrorType>) => ErrorType
) {
    return new UnsafePromise<Stream<TargetType>, ErrorType>((onError, onSuccess) => {
        const intermediates: TargetType[] = []
        const errors: IntermediateErrorType[] = []
        stream.process(
            limiter,
            data => {
                promisify(data).handle(
                    error => {
                        errors.push(error)
                    },
                    result => {
                        intermediates.push(result)
                    }
                )
            },
            aborted => {
                if (errors.length !== 0) {
                    onError(createError(aborted, streamifyArray(errors, x => x)))
                } else {
                    onSuccess(streamifyArray(intermediates, x => x))
                }
            }
        )
    })
}
