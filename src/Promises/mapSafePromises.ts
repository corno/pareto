
import { ISafePromise } from "steroid-promise-api"
import { ExecutionType } from "./ExecutionType"
import { wrapSafeFunction } from "./SafePromise"

export function mapSafePromises<ResultType>(execution: ExecutionType, promises: Array<ISafePromise<ResultType>>): ISafePromise<ResultType[]> {
    let isExecuted = false
    function execute(onResult: (results: ResultType[]) => void) {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        let resolvedCount = 0
        const results: ResultType[] = []

        function wrapup() {

            if (resolvedCount > promises.length) {
                throw new Error("promises are called back more than once")
            }
            if (resolvedCount === promises.length) {
                onResult(results)
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
    return wrapSafeFunction(execute)
}
