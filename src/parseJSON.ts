import { UnsafePromise, wrapUnsafeFunction } from "steroid-promise"

export function parseJSON(data: string, ): UnsafePromise<any, SyntaxError> {
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

