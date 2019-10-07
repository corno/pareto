import { UnsafePromise, wrapUnsafeFunction } from "steroid-promise"

export function parseJSON(data: string, ): UnsafePromise<any, null> {
    return wrapUnsafeFunction(
        (onError, onSucces) => {
            let json
            try {
                json = JSON.parse(data)
            } catch (e) {
                onError(null)
            }
            onSucces(json)
        }
    )
}

