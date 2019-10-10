import * as SL from "steroid-language-extensions"
import * as core from "steroid-promise-core"
import {
    SafeCallerFunction,
    wrapSafeFunction,
} from "./SafePromise"

export type DefaultError = {
    "message": string
}

export type UnsafeCallerFunction<ResultType, ErrorType = DefaultError> = (onError: (error: ErrorType) => void, onResult: (result: ResultType) => void) => void

export class UnsafePromise<ResultType, ErrorType = DefaultError> implements core.IUnsafePromise<ResultType, ErrorType> {
    private isCalled: boolean
    private readonly callerFunction: UnsafeCallerFunction<ResultType, ErrorType>
    constructor(callerFunction: UnsafeCallerFunction<ResultType, ErrorType>) {
        this.isCalled = false
        this.callerFunction = callerFunction
    }
    public rework<NewResultType, NewErrorType = DefaultError>(
        onError: (error: ErrorType) => core.UnsafeWrappedOrUnwrapped<NewResultType, NewErrorType>,
        onSuccess: (result: ResultType) => core.UnsafeWrappedOrUnwrapped<NewResultType, NewErrorType>
    ): core.IUnsafePromise<NewResultType, NewErrorType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: UnsafeCallerFunction<NewResultType, NewErrorType> = (newOnError, newOnSuccess) => {
            this.callerFunction(
                err => {
                    const returnType = onError(err)
                    if (returnType instanceof Array) {
                        switch (returnType[0]) {
                            case "error":
                                newOnError(returnType[1])
                                break
                            case "success":
                                newOnSuccess(returnType[1])
                                break
                            default: SL.assertUnreachable(returnType[0])
                        }
                    } else {
                        returnType.handle(newOnError, newOnSuccess)
                    }
                },
                res => {
                    const returnType = onSuccess(res)
                    if (returnType instanceof Array) {
                        switch (returnType[0]) {
                            case "error":
                                newOnError(returnType[1])
                                break
                            case "success":
                                newOnSuccess(returnType[1])
                                break
                            default: SL.assertUnreachable(returnType[0])
                        }
                    } else {
                        returnType.handle(newOnError, newOnSuccess)
                    }
                }
            )
        }
        return wrapUnsafeFunction(newFunc)
    }
    public catch<NewResultType>(
        onError: (error: ErrorType) => core.SafeWrappedOrUnwrapped<NewResultType>,
        onSuccess: (result: ResultType) => core.SafeWrappedOrUnwrapped<NewResultType>
    ): core.ISafePromise<NewResultType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: SafeCallerFunction<NewResultType> = onResult => {
            this.callerFunction(
                err => {
                    const returnType = onError(err)
                    if (returnType instanceof Array) {
                        onResult(returnType[1])
                    } else {
                        returnType.handle(onResult)
                    }
                },
                res => {
                    const returnType = onSuccess(res)
                    if (returnType instanceof Array) {
                        onResult(returnType[1])
                    } else {
                        returnType.handle(onResult)
                    }
                }
            )
        }
        return wrapSafeFunction(newFunc)
    }
    public map<NewResultType>(onSuccess: (result: ResultType) => core.UnsafeWrappedOrUnwrapped<NewResultType, ErrorType>): core.IUnsafePromise<NewResultType, ErrorType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: UnsafeCallerFunction<NewResultType, ErrorType> = (newOnError, newOnSuccess) => {
            this.callerFunction(
                err => {
                    newOnError(err)
                },
                res => {
                    const returnType = onSuccess(res)
                    if (returnType instanceof Array) {
                        switch (returnType[0]) {
                            case "error":
                                newOnError(returnType[1])
                                break
                            case "success":
                                newOnSuccess(returnType[1])
                                break
                            default: SL.assertUnreachable(returnType[0])
                        }
                    } else {
                        returnType.handle(newOnError, newOnSuccess)
                    }
                }
            )
        }
        return wrapUnsafeFunction(newFunc)
    }
    public handle(onError: (error: ErrorType) => void, onSuccess: (result: ResultType) => void): void {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        this.callerFunction(onError, onSuccess)
    }
}

export function wrapUnsafeFunction<ResultType, ErrorType = DefaultError>(
    callerFunction: (onError: (error: ErrorType) => void, onResult: (result: ResultType) => void) => void
): UnsafePromise<ResultType, ErrorType> {
    return new UnsafePromise(callerFunction)
}
