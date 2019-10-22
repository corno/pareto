import { ISafePromise, IStream } from "pareto-api"
import {
    SafePromise,
} from "../../../classes/SafePromise"

export function processStreamOfSafePromises<DataType>(
    stream: IStream<DataType>,
    promisify: (entry: DataType) => ISafePromise<null>
) {
    let isExecuted = false

    return new SafePromise<null>(onFinished => {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        stream.process(
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
