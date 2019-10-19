import { IUnsafePromise } from "pareto-api"

// tslint:disable-next-line: max-classes-per-file
export class UnsafePromise<ResultType, ErrorType> {
    private isCalled: boolean
    private readonly callerFunction: UnsafeCallerFunction<ResultType, ErrorType>
    constructor(callerFunction: UnsafeCallerFunction<ResultType, ErrorType>) {
        this.isCalled = false
        this.callerFunction = callerFunction
    }
    public handle(onError: (error: ErrorType) => void, onSuccess: (result: ResultType) => void): void {
        if (this.isCalled) { throw new Error("already called") }
        this.isCalled = true
        this.callerFunction(onError, onSuccess)
    }
    public reworkDeprecated<NewResultType, NewErrorType>(
        onError: (error: ErrorType) => IUnsafePromise<NewResultType, NewErrorType>,
        onSuccess: (result: ResultType) => IUnsafePromise<NewResultType, NewErrorType>
    ) {
        const newFunc: UnsafeCallerFunction<NewResultType, NewErrorType> = (newOnError, newOnSuccess) => {
            this.handle(
                err => {
                    onError(err).handle(newOnError, newOnSuccess)
                },
                result => {
                    onSuccess(result).handle(newOnError, newOnSuccess)
                }
            )
        }
        return new UnsafePromise<NewResultType, NewErrorType>(newFunc)
    }
    public tryToCatch<NewErrorType>(
        onError: (error: ErrorType) => IUnsafePromise<ResultType, NewErrorType>,
    ) {
        const newFunc: UnsafeCallerFunction<ResultType, NewErrorType> = (newOnError, newOnSuccess) => {
            this.handle(
                err => {
                    onError(err).handle(newOnError, newOnSuccess)
                },
                result => {
                    newOnSuccess(result)
                }
            )
        }
        return new UnsafePromise<ResultType, NewErrorType>(newFunc)
    }
    public invert() {
        const newFunc: UnsafeCallerFunction<ErrorType, ResultType> = (newOnError, newOnSuccess) => {
            this.handle(
                err => {
                    newOnSuccess(err)
                },
                result => {
                    newOnError(result)
                }
            )
        }
        return new UnsafePromise<ErrorType, ResultType>(newFunc)
    }
    public try<NewResultType>(
        onSuccess: (result: ResultType) => IUnsafePromise<NewResultType, ErrorType>
    ) {
        const newFunc: UnsafeCallerFunction<NewResultType, ErrorType> = (newOnError, newOnSuccess) => {
            this.handle(
                err => {
                    newOnError(err)
                },
                result => {
                    onSuccess(result).handle(newOnError, newOnSuccess)
                }
            )
        }
        return new UnsafePromise<NewResultType, ErrorType>(newFunc)
    }
    public mapError<NewErrorType>(
        onError: (error: ErrorType) => NewErrorType,
    ) {
        const newFunc: UnsafeCallerFunction<ResultType, NewErrorType> = (newOnError, newOnSuccess) => {
            this.handle(
                err => {
                    newOnError(onError(err))
                },
                result => {
                    newOnSuccess(result)
                }
            )
        }
        return new UnsafePromise<ResultType, NewErrorType>(newFunc)
    }
    public mapOld<NewResultType>(
        onSuccess: (result: ResultType) => IUnsafePromise<NewResultType, ErrorType>
    ) {
        const newFunc: UnsafeCallerFunction<NewResultType, ErrorType> = (newOnError, newOnSuccess) => {
            this.handle(
                err => {
                    newOnError(err)
                },
                result => {
                    onSuccess(result).handle(newOnError, newOnSuccess)
                }
            )
        }
        return new UnsafePromise<NewResultType, ErrorType>(newFunc)
    }
    public mapNew<NewResultType>(
        onSuccess: (result: ResultType) => NewResultType
    ) {
        const newFunc: UnsafeCallerFunction<NewResultType, ErrorType> = (newOnError, newOnSuccess) => {
            this.handle(
                err => {
                    newOnError(err)
                },
                result => {
                    newOnSuccess(onSuccess(result))
                }
            )
        }
        return new UnsafePromise<NewResultType, ErrorType>(newFunc)
    }
}

export type UnsafeCallerFunction<ResultType, ErrorType = DefaultError> = (onError: (error: ErrorType) => void, onResult: (result: ResultType) => void) => void

export type DefaultError = {
    "message": string
}
