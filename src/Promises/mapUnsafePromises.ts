import { IUnsafePromise } from "steroid-promise-api"
import { ExecutionType } from "./ExecutionType"
import { wrapUnsafeFunction } from "./UnsafePromise"

export function mapUnsafePromises<ResultType, ErrorType>(execution: ExecutionType, promises: Array<IUnsafePromise<ResultType, ErrorType>>): IUnsafePromise<ResultType[], ErrorType[]> {
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

            if (resolvedCount > promises.length) {
                const err = new Error("promises are called back more than once")
                throw err
            }
            if (resolvedCount === promises.length) {
                if (errors.length > 0) {
                    onErrors(errors)
                } else {
                    onSuccess(results)
                }
            }
        }
        if (promises.length === 0) {
            wrapup()
        } else {
            switch (execution) {
                case ExecutionType.parallel: {
                    promises.forEach((promise, index) => {
                        (() => {
                            promise.handle(
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
                        if (resolvedCount < promises.length) {
                            promises[resolvedCount].handle(
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
    return wrapUnsafeFunction(execute)
}
