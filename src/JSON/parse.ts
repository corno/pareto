import { UnsafePromise, wrapUnsafeFunction } from "steroid-promise-core"

export function parse(data: string, ): UnsafePromise<any, SyntaxError> {
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

