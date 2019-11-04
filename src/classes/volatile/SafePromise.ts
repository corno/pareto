import { IInSafePromise } from "pareto-api"
import { IOutUnsafePromise } from "./UnsafePromise"

export type SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => void

export class IOutSafePromise<T> implements IInSafePromise<T> {
    private readonly callerFunction: SafeCallerFunction<T>
    private isCalled = false
    constructor(callerFunction: SafeCallerFunction<T>) {
        this.callerFunction = callerFunction
    }
    public handle(onResult: (result: T) => void): void {
        if (this.isCalled) {
            // console.log("callerFunction")
            // console.log(this.callerFunction.toString())
            // console.log("onResult")
            // console.log(onResult.toString())
            throw new Error("already called")
        }
        this.isCalled = true
        this.callerFunction(onResult)
    }
    public mapResultRaw<NewType>(onResult: (result: T) => NewType): IOutSafePromise<NewType> {
        return new IOutSafePromise<NewType>(newOnResult => {
            this.handle(res => {
                newOnResult(onResult(res))
            })

        })
    }
    public mapResult<NewType>(onResult: (result: T) => IOutSafePromise<NewType>): IOutSafePromise<NewType> {
        return new IOutSafePromise<NewType>(newOnResult => {
            this.handle(res => {
                onResult(res).handle(newOnResult)
            })

        })
    }
    public try<ResultType, ErrorType>(callback: (result: T) => IOutUnsafePromise<ResultType, ErrorType>): IOutUnsafePromise<ResultType, ErrorType> {
        return new IOutUnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
            this.handle(res => {
                callback(res).handle(onError, onSuccess)
            })

        })
    }
}
