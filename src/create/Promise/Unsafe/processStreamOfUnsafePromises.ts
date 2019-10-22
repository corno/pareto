import { IStream, IUnsafePromise } from "pareto-api"
import {
    UnsafePromise,
} from "../../../classes/UnsafePromise"

export function processStreamOfUnsafePromises<DataType, ErrorType>(
    stream: IStream<DataType>,
    promisify: (entry: DataType) => IUnsafePromise<null, ErrorType>,
    maxErrorCount: number | null
) {
    let isExecuted = false

    return new UnsafePromise<null, { aborted: boolean, errors: ErrorType[]}>((onErrors, onSuccess) => {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        const errors: ErrorType[] = []
        let aborted = false
        stream.process(
            data => {
                promisify(data).handle(
                    error => {
                        if (!aborted) {
                            errors.push(error)
                            if (maxErrorCount !== null && errors.length >= maxErrorCount) {
                                aborted = true
                                onErrors({
                                    aborted: true,
                                    errors: errors,
                                })
                            }
                        }
                    },
                    _success => {}
                )
            },
            () => {
                if (!aborted) {
                    if (!errors) {
                        onSuccess(null)
                    } else {
                        onErrors({
                            aborted: false,
                            errors: errors,
                        })
                    }
                }

            }
        )
    })
}
