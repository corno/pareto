import { IUnsafePromise } from "pareto-api"
import { ExecutionType } from "../../../ExecutionType"
import {
    UnsafePromise,
} from "./wrap"

export function mapUnsafePromisesArray<SourceType, ResultType, ErrorType>(
    execution: ExecutionType,
    array: SourceType[],
    promisify: (entry: SourceType, index: number) => IUnsafePromise<ResultType, ErrorType>
): UnsafePromise<ResultType[], ErrorType[]> {
    let isExecuted = false
    function execute(onErrors: (errors: ErrorType[]) => void, onSuccess: (results: ResultType[]) => void) {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        let resolvedCount = 0
        const results: ResultType[] = []
        const errors: ErrorType[] = []

        function wrapup() {

            if (resolvedCount > array.length) {
                const err = new Error("promises are called back more than once")
                throw err
            }
            if (resolvedCount === array.length) {
                if (errors.length > 0) {
                    onErrors(errors)
                } else {
                    onSuccess(results)
                }
            }
        }
        if (array.length === 0) {
            wrapup()
        } else {
            switch (execution) {
                case ExecutionType.parallel: {
                    array.forEach((element, index) => {
                        (() => {
                            promisify(element, index).handle(
                                error => {
                                    errors.push(error)
                                    resolvedCount += 1
                                    wrapup()
                                },
                                result => {
                                    results[index] = result
                                    resolvedCount += 1
                                    wrapup()
                                }
                            )
                        })()
                    })
                    break
                }
                case ExecutionType.serial: {
                    function processNext() {
                        if (resolvedCount < array.length) {
                            promisify(array[resolvedCount], resolvedCount).handle(
                                error => {
                                    errors.push(error)
                                    resolvedCount += 1
                                    wrapup()
                                    processNext()
                                },
                                output => {
                                    results.push(output)
                                    resolvedCount += 1
                                    wrapup()
                                    processNext()
                                }
                            )
                        }
                    }
                    processNext()
                    break
                }
            }
        }
    }
    return new UnsafePromise(execute)
}
