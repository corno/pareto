import * as core from "steroid-promise-core"
import {
    SafeCallerFunction,
    SafePromise,
    wrapSafeFunction,
} from "./SafePromise"
import {
    SafePromiseBuilder,
    safePromiseBuilder
} from "./SafePromiseBuilder"
import {
    UnsafePromiseBuilder,
    unsafePromiseBuilder
} from "./UnsafePromiseBuilder"

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
        onError: (error: ErrorType, pBuilder: UnsafePromiseBuilder) => core.IUnsafePromise<NewResultType, NewErrorType>,
        onSuccess: (result: ResultType, pBuilder: UnsafePromiseBuilder) => core.IUnsafePromise<NewResultType, NewErrorType>
    ): UnsafePromise<NewResultType, NewErrorType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: UnsafeCallerFunction<NewResultType, NewErrorType> = (newOnError, newOnSuccess) => {
            this.callerFunction(
                err => {
                    onError(err, unsafePromiseBuilder).handle(newOnError, newOnSuccess)
                },
                res => {
                    onSuccess(res, unsafePromiseBuilder).handle(newOnError, newOnSuccess)

                }
            )
        }
        return wrapUnsafeFunction(newFunc)
    }
    public catch<NewResultType>(
        onError: (error: ErrorType, pBuilder: SafePromiseBuilder) => core.ISafePromise<NewResultType>,
        onSuccess: (result: ResultType, pBuilder: SafePromiseBuilder) => core.ISafePromise<NewResultType>
    ): SafePromise<NewResultType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: SafeCallerFunction<NewResultType> = onResult => {
            this.callerFunction(
                err => {
                    onError(err, safePromiseBuilder).handle(onResult)
                },
                res => {
                    onSuccess(res, safePromiseBuilder).handle(onResult)

                }
            )
        }
        return wrapSafeFunction(newFunc)
    }
    public map<NewResultType>(onSuccess: (result: ResultType, pBuilder: UnsafePromiseBuilder) => core.IUnsafePromise<NewResultType, ErrorType>): UnsafePromise<NewResultType, ErrorType> {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        const newFunc: UnsafeCallerFunction<NewResultType, ErrorType> = (newOnError, newOnSuccess) => {
            this.callerFunction(
                err => {
                    newOnError(err)
                },
                res => {
                    onSuccess(res, unsafePromiseBuilder).handle(newOnError, newOnSuccess)

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
