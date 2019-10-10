import { UnsafePromise, wrapUnsafeFunction } from "./Promises/UnsafePromise"

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

