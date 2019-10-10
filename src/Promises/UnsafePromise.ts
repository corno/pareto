import * as SL from "steroid-language-extensions"
import * as core from "steroid-promise-core"
import {
    parseSafeWrappedOrUnwrapped,
    SafeCallerFunction,
    wrapSafeFunction,
} from "./SafePromise"

export function parseUnsafeWrappedOrUnwrapped<ResultType, ErrorType>(
    data: core.UnsafeWrappedOrUnwrapped<ResultType, ErrorType>,
    onError: (error: ErrorType) => void,
    onSuccess: (result: ResultType) => void
) {
    if (data instanceof Array) {
        switch (data[0]) {
            case "error":
                onError(data[1])
                break
            case "success":
                onSuccess(data[1])
                break
            default: SL.assertUnreachable(data[0])
        }
    } else {
        data.handle(onError, onSuccess)
    }
}


//don't export this class, it should not be used as a type. there is core.ISafePromise for that
class UnsafePromise<ResultType, ErrorType = DefaultError> implements core.IUnsafePromise<ResultType, ErrorType> {
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
                    parseUnsafeWrappedOrUnwrapped(onError(err), newOnError, newOnSuccess)
                },
                result => {
                    parseUnsafeWrappedOrUnwrapped(onSuccess(result), newOnError, newOnSuccess)
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
                    parseSafeWrappedOrUnwrapped(onError(err), onResult)
                },
                res => {
                    parseSafeWrappedOrUnwrapped(onSuccess(res), onResult)
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
                result => {
                    parseUnsafeWrappedOrUnwrapped(onSuccess(result), newOnError, newOnSuccess)
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


export type DefaultError = {
    "message": string
}

export type UnsafeCallerFunction<ResultType, ErrorType = DefaultError> = (onError: (error: ErrorType) => void, onResult: (result: ResultType) => void) => void


export function wrapUnsafeFunction<ResultType, ErrorType = DefaultError>(
    callerFunction: (onError: (error: ErrorType) => void, onResult: (result: ResultType) => void) => void
): core.IUnsafePromise<ResultType, ErrorType> {
    return new UnsafePromise(callerFunction)
}

// tslint:disable-next-line: max-classes-per-file
export class UnsafePromiseBuilder {
    public success<ResultType, ErrorType>(result: ResultType): core.IUnsafePromise<ResultType, ErrorType> {
        const handler: UnsafeCallerFunction<ResultType, ErrorType> = (_onError: (error: ErrorType) => void, onSuccess: (result: ResultType) => void) => {
            onSuccess(result)
        }
        return wrapUnsafeFunction<ResultType, ErrorType>(handler)
    }
    public error<ResultType, ErrorType>(error: ErrorType): core.IUnsafePromise<ResultType, ErrorType> {
        const handler: UnsafeCallerFunction<ResultType, ErrorType> = (onError: (error: ErrorType) => void, _onSuccess: (result: ResultType) => void) => {
            onError(error)
        }
        return wrapUnsafeFunction<ResultType, ErrorType>(handler)
    }
}


export function cleanup<ResultType, ErrorType>(unsafePromise: core.IUnsafePromise<ResultType, ErrorType>, onError: (error: ErrorType) => void): core.ISafePromise<ResultType> {
    return wrapSafeFunction(onResult => {
        unsafePromise.handle(
            error => onError(error),
            result => onResult(result)
        )
    })
}

export const unsafePromiseBuilder = new UnsafePromiseBuilder()
