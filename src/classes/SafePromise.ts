import { ISafePromise } from "pareto-api"

export type SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => void

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
    public mapRaw<NewType>(onResult: (result: T) => NewType): SafePromise<NewType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        return new SafePromise<NewType>(newOnResult => {
            this.handle(res => {
                newOnResult(onResult(res))
            })

        })
    }
    public mapPromise<NewType>(onResult: (result: T) => SafePromise<NewType>): SafePromise<NewType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        return new SafePromise<NewType>(newOnResult => {
            this.handle(res => {
                onResult(res).handle(newOnResult)
            })

        })
    }
}
