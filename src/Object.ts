import * as SP from "steroid-promise-core"
import * as USP from "./Promises/UnsafePromiseBuilder"

export function getProperty<PropertyType>(context: { [key: string]: PropertyType }, propertyName: string): SP.IUnsafePromise<PropertyType, null> {
    const property = context[propertyName]
    if (property === undefined) {
        return USP.unsafePromiseBuilder.error(null)
    } else {
        return USP.unsafePromiseBuilder.success(property)
    }
}

export function assertPropertyDoesNotExist<PropertyType>(context: { [key: string]: PropertyType }, propertyName: string): SP.IUnsafePromise<null, null> {
    const property = context[propertyName]
    if (property === undefined) {
        return USP.unsafePromiseBuilder.success(null)
    } else {
        return USP.unsafePromiseBuilder.error(null)
    }
}
