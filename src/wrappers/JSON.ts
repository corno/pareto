import { UnsafePromise } from "../classes/UnsafePromise"

export const functions = {
    parse: (data: string, reviver?: (this: any, key: string, value: any) => any) => {
        return new UnsafePromise<any, SyntaxError>((onError, onSuccess) => {
            try {
                onSuccess(JSON.parse(data, reviver))
            } catch (e) {
                onError(e)
            }
        })
    },
    stringify: (value: any, replacer?: Array<number | string> | null, space?: string | number) => {
        return new UnsafePromise<string, TypeError>(
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
