import * as fs_raw from "./fs"
import * as JSON_raw from "./JSON"

export const JSON = {
    parse: JSON_raw.parse,
}
export const fs = {
    access: fs_raw.access,
}

export * from "steroid-promise-core"

export * from "./Promises/mapSafePromises"
export * from "./Promises/mapUnsafePromises"
export * from "./Promises/SafePromise"
export * from "./Promises/SafePromiseBuilder"
export * from "./Promises/UnsafePromise"
export * from "./Promises/UnsafePromiseBuilder"
