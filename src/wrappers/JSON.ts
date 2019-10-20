import { IUnsafePromise } from "pareto-api"
import { UnsafePromise } from "../classes/UnsafePromise"

export const functions = {
    parse: (data: string, reviver?: (this: any, key: string, value: any) => any): IUnsafePromise<any, SyntaxError> => {
        return new UnsafePromise((onError, onSuccess) => {
            try {
                onSuccess(JSON.parse(data, reviver))
            } catch (e) {
                onError(e)
            }
        })
    },
    stringify: (value: any, replacer?: Array<number | string> | null, space?: string | number): IUnsafePromise<string, TypeError> => {
        return new UnsafePromise(
            (onError, onSucces) => {
                try {
                    onSucces(JSON.stringify(value, replacer, space))
                } catch (e) {
                    onError(e)
                }
            }
        )
    },
}
