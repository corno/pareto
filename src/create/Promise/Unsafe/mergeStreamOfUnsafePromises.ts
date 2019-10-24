import { IStream, IUnsafePromise } from "pareto-api"
import { Stream } from "../../../classes/Stream"

export function mergeStreamOfUnsafePromises<DataType, TargetType, ErrorType>(stream: IStream<DataType>, promisify: (entry: DataType) => IUnsafePromise<TargetType, ErrorType>) {
    return new Stream<IUnsafePromise<TargetType, ErrorType>>((limiter, onData, onEnd) => {
        stream.process(
            limiter,
            (data, abort) => onData(promisify(data), abort),
            onEnd
        )
    })
}
