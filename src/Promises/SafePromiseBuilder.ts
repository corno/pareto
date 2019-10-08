import * as core from "steroid-promise-core"
import { SafeCallerFunction, SafePromise, wrapSafeFunction } from "./SafePromise"

export class SafePromiseBuilder implements core.ISafePromiseBuilder {
    public result<ResultType>(result: ResultType): SafePromise<ResultType> {
        const handler: SafeCallerFunction<ResultType> = (onResult: (result: ResultType) => void) => {
            onResult(result)
        }
        return wrapSafeFunction<ResultType>(handler)
    }
}

export const safePromiseBuilder = new SafePromiseBuilder()
