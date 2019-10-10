import * as SL from "steroid-language-extensions"
import * as core from "steroid-promise-core"
import { UnsafeCallerFunction, wrapUnsafeFunction } from "./UnsafePromise"

export type SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => void

export class SafePromise<ResultType> implements core.ISafePromise<ResultType> {
    private isCalled = false
    private readonly callerFunction: SafeCallerFunction<ResultType>
    constructor(callerFunction: SafeCallerFunction<ResultType>) {
        this.callerFunction = callerFunction
    }
    public handle(onResult: (result: ResultType) => void) {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        this.callerFunction(onResult)
    }
    public map<NewResultType>(onResult: (result: ResultType) => core.SafeWrappedOrUnwrapped<NewResultType>): core.ISafePromise<NewResultType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: SafeCallerFunction<NewResultType> = newOnResult => {
            this.callerFunction(
                res => {
                    const returnType = onResult(res)
                    if (returnType instanceof Array) {
                        newOnResult(returnType[1])
                    } else {
                        returnType.handle(newOnResult)
                    }
                }
            )
        }
        return wrapSafeFunction(newFunc)
    }
    public try<NewResultType, ErrorType>(
        onResult: (result: ResultType) => core.UnsafeWrappedOrUnwrapped<NewResultType, ErrorType>
    ): core.IUnsafePromise<NewResultType, ErrorType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: UnsafeCallerFunction<NewResultType, ErrorType> = (onError, onSuccess) => {
            this.callerFunction(
                res => {
                    const returnType = onResult(res)
                    if (returnType instanceof Array) {
                        switch (returnType[0]) {
                            case "error":
                                onError(returnType[1])
                                break
                            case "success":
                                onSuccess(returnType[1])
                                break
                            default: SL.assertUnreachable(returnType[0])
                        }
                    } else {
                        returnType.handle(onError, onSuccess)
                    }
                }
            )
        }
        return wrapUnsafeFunction(newFunc)
    }
}

export function wrapSafeFunction<ResultType>(callerFunction: SafeCallerFunction<ResultType>): SafePromise<ResultType> {
    return new SafePromise(callerFunction)
}
