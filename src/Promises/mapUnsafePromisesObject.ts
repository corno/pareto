
import * as SP from "steroid-promise-core"
import { ExecutionType } from "./ExecutionType"
import { wrapUnsafeFunction } from "./UnsafePromise"

export function mapUnsafePromisesObject<ResultType, ErrorType>(
    execution: ExecutionType,
    promises: { [key: string]: SP.IUnsafePromise<ResultType, ErrorType> }
): SP.IUnsafePromise<{ [key: string]: ResultType }, { [key: string]: ErrorType }> {
    let isExecuted = false
    function execute(onErrors: (errors: { [key: string]: ErrorType }) => void, onSuccess: (results: { [key: string]: ResultType }) => void) {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        let resolvedCount = 0
        const results: { [key: string]: ResultType } = {}
        const errors: { [key: string]: ErrorType } = {}
        const keys = Object.keys(promises)

        function wrapup() {

            if (resolvedCount > keys.length) {
                const err = new Error("promises are called back more than once")
                throw err
            }
            if (resolvedCount === keys.length) {
                if (Object.keys(errors).length > 0) {
                    onErrors(errors)
                } else {
                    onSuccess(results)
                }
            }
        }
        if (keys.length === 0) {
            wrapup()
        } else {
            switch (execution) {
                case ExecutionType.parallel: {
                    keys.forEach(promiseName => {
                        (() => {
                            const promise = promises[promiseName]
                            promise.handle(
                                error => {
                                    errors[promiseName] = error
                                    resolvedCount += 1
                                    wrapup()
                                },
                                result => {
                                    results[promiseName] = result
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
                        if (resolvedCount < keys.length) {
                            const promiseName = keys[resolvedCount]
                            const promise = promises[promiseName]
                            promise.handle(
                                error => {
                                    errors[promiseName] = error
                                    resolvedCount += 1
                                    wrapup()
                                    processNext()
                                },
                                output => {
                                    results[promiseName] = output
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
