import {
    SafePromise,
} from "pareto-20"
import { IInSafePromise, IInStream, StreamLimiter } from "pareto-api"


export function processStreamOfSafePromises<DataType>(
    stream: IInStream<DataType>,
    limiter: StreamLimiter,
    promisify: (entry: DataType) => IInSafePromise<null>
) {
    let isExecuted = false

    return new SafePromise<null>(onFinished => {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        stream.process(
            limiter,
            data => {
                promisify(data).handle(
                    _success => {}
                )
            },
            () => {
                onFinished(null)
            }
        )
    })
}
