import * as SP from "steroid-promise-core"
import * as USP from "./Promises/UnsafePromise"

export function assertIsEmpty<ElementType>(array: ElementType[]): SP.IUnsafePromise<null, null> {
    if (array.length === 0) {
        return USP.unsafePromiseBuilder.error(null)
    } else {
        return USP.unsafePromiseBuilder.success(null)
    }
}

export function getElement<ElementType>(array: ElementType[], index: number): SP.IUnsafePromise<ElementType, undefined> {
    const element = array[index]
    if (element === undefined) {
        return USP.unsafePromiseBuilder.error(undefined)
    }
    return USP.unsafePromiseBuilder.success(element)
}
