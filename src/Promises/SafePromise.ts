import * as SL from "steroid-language-utils"
import * as core from "steroid-promise-api"
import { parseUnsafeWrappedOrUnwrapped, UnsafeCallerFunction, wrapUnsafeFunction } from "./UnsafePromise"

//don't export this class, it should not be used as a type. there is core.ISafePromise for that
class SafePromise<ResultType> implements core.ISafePromise<ResultType> {
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
                result => {
                    parseSafeWrappedOrUnwrapped(onResult(result), newOnResult)
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
                result => {
                    parseUnsafeWrappedOrUnwrapped(onResult(result), onError, onSuccess)
                }
            )
        }
        return wrapUnsafeFunction(newFunc)
    }
}

export function parseSafeWrappedOrUnwrapped<ResultType>(
    data: core.SafeWrappedOrUnwrapped<ResultType>,
    onResult: (result: ResultType) => void
) {
    if (data instanceof Array) {
        switch (data[0]) {
            case "result":
                onResult(data[1])
                break
            default: SL.assertUnreachable(data[0])
        }
    } else {
        data.handle(onResult)
    }
}

export function wrapSafeFunction<ResultType>(callerFunction: SafeCallerFunction<ResultType>): core.ISafePromise<ResultType> {
    return new SafePromise(callerFunction)
}

export type SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => void

// tslint:disable-next-line: max-classes-per-file
export class SafePromiseBuilder {
    public result<ResultType>(result: ResultType): core.ISafePromise<ResultType> {
        const handler: SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => {
            onResult(result)
        }
        return wrapSafeFunction<ResultType>(handler)
    }
}

export const safePromiseBuilder = new SafePromiseBuilder()
