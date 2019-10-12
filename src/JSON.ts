import * as core from "steroid-promise-api"
import { wrapUnsafeFunction } from "./Promises/UnsafePromise"

export function parse(data: string, reviver?: (this: any, key: string, value: any) => any): core.IUnsafePromise<any, SyntaxError> {
    return wrapUnsafeFunction(
        (onError, onSucces) => {
            try {
                onSucces(JSON.parse(data, reviver))
            } catch (e) {
                onError(e)
            }
        }
    )
}

export function stringify(value: any, replacer?: Array<number | string> | null, space?: string | number): core.IUnsafePromise<string, TypeError> {
    return wrapUnsafeFunction(
        (onError, onSucces) => {
            try {
                onSucces(JSON.stringify(value, replacer, space))
            } catch (e) {
                onError(e)
            }
        }
    )
}

