import { IStream, IUnsafePromise, StreamLimiter } from "pareto-api"
import {
    UnsafePromise,
} from "../../../classes/UnsafePromise"

export function processStreamOfUnsafePromises<DataType, ErrorType>(
    stream: IStream<DataType>,
    limiter: StreamLimiter,
    promisify: (entry: DataType) => IUnsafePromise<null, ErrorType>,
    errorCreator: (aborted: boolean, errors: ErrorType[]) => ErrorType
) {
    let isExecuted = false

    return new UnsafePromise<null, ErrorType>((onErrors, onSuccess) => {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        const errors: ErrorType[] = []
        stream.process(
            limiter,
            data => {
                promisify(data).handle(
                    error => {
                        errors.push(error)
                    },
                    _success => { }
                )
            },
            aborted => {
                if (!errors) {
                    onSuccess(null)
                } else {
                    onErrors(errorCreator(aborted, errors))
                }
            }
        )
    })
}
