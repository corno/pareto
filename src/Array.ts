import * as SP from "steroid-promise-core"
import * as USP from "./Promises/UnsafePromiseBuilder"

export function assertIsEmpty<ElementType>(array: ElementType[]): SP.IUnsafePromise<null, null> {
    if (array.length === 0) {
        return USP.unsafePromiseBuilder.error(null)
    } else {
        return USP.unsafePromiseBuilder.success(null)
    }
}
