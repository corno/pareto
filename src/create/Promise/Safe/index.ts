
import { ISafePromise, IUnsafePromise } from "pareto-api"
import { ExecutionType } from "../../../ExecutionType"
import { UnsafePromise} from "../Unsafe/wrap"

export type SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => void

// class SafePromiseInterface<ResultType> implements ISafePromise<ResultType> {
//     private isCalled = false
//     private readonly callerFunction: SafeCallerFunction<ResultType>
//     constructor(callerFunction: SafeCallerFunction<ResultType>) {
//         this.callerFunction = callerFunction
//     }
//     public handle(onResult: (result: ResultType) => void) {
//         if (this.isCalled) { throw new Error("already called") }
//         this.isCalled = true
//         this.callerFunction(onResult)
//     }
// }

// class ConvertibleSafePromise<ResultType> {
//     constructor()
// }

export function mapSafePromisesObject<ResultType>(
    execution: ExecutionType,
    promises: { [key: string]: ISafePromise<ResultType> }
): ISafePromise<{ [key: string]: ResultType }> {
    let isExecuted = false
    function execute(onResult: (results: { [key: string]: ResultType }) => void) {
        if (isExecuted === true) {
            throw new Error("all promise is already executed")
        }
        isExecuted = true
        let resolvedCount = 0
        const results: { [key: string]: ResultType } = {}
        const keys = Object.keys(promises)

        function wrapup() {

            if (resolvedCount > keys.length) {
                const err = new Error("promises are called back more than once")
                throw err
            }
            if (resolvedCount === keys.length) {
                onResult(results)
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
    return new SafePromise(execute)
}


export function aggregateSafePromisesArray<ResultType>(execution: ExecutionType, promises: Array<ISafePromise<ResultType>>): ISafePromise<ResultType[]> {
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
    return new SafePromise(execute)
}

// tslint:disable-next-line: max-classes-per-file
export class SafePromise<T> implements ISafePromise<T> {
    private readonly callerFunction: SafeCallerFunction<T>
    private isCalled = false
    constructor(callerFunction: SafeCallerFunction<T>) {
        this.callerFunction = callerFunction
    }
    public handle(onResult: (result: T) => void): void {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        this.callerFunction(onResult)
    }
    public map<NewType>(onResult: (result: T) => SafePromise<NewType>): SafePromise<NewType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        return wrapSafeFunction(newOnResult => {
            this.handle(res => {
                onResult(res).handle(newOnResult)
            })

        })
    }
    public try<NewType, ErrorType>(onResult: (result: T) => UnsafePromise<NewType, ErrorType>): UnsafePromise<NewType, ErrorType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        return new UnsafePromise((onError, onSuccess) => {
            this.handle(res => {
                onResult(res).handle(onError, onSuccess)
            })

        })
    }
}


export function wrapSafeFunction<ResultType>(
    callerFunction: SafeCallerFunction<ResultType>
) {
    return new SafePromise(callerFunction)
}

export const createSafePromise = {
    result: <ResultType>(result: ResultType): SafePromise<ResultType> => {
        const handler: SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => {
            onResult(result)
        }
        return wrapSafeFunction<ResultType>(handler)
    },
    from: {
        UnsafePromise: <ResultType, ErrorType>(unsafePromise: IUnsafePromise<ResultType, ErrorType>) => {
            return {
                catch: <NewResultType>(onError: (error: ErrorType) => ISafePromise<NewResultType>, onSuccess: (result: ResultType) => ISafePromise<NewResultType>) => {
                    return wrapSafeFunction<NewResultType>(onResult => {
                        unsafePromise.handle(
                            error => {
                                onError(error).handle(res => onResult(res))
                            },
                            success => {
                                onSuccess(success).handle(res => onResult(res))
                            },
                        )
                    })
                },
            }
        },
    },
}
