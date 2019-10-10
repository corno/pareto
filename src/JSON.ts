import * as core from "steroid-promise-core"
import { wrapUnsafeFunction } from "./Promises/UnsafePromise"

export function parse(data: string, ): core.IUnsafePromise<any, SyntaxError> {
    return wrapUnsafeFunction(
        (onError, onSucces) => {
            try {
                onSucces(JSON.parse(data))
            } catch (e) {
                onError(e)
            }
        }
    )
}

