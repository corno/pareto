export * from "steroid-promise-api"
export * from "./ExecutionType"
export { UnsafePromise } from "./create/Promise/Unsafe/wrap"
export { functions as fs } from "./generated/fsErrors"

import { createArray } from "./create/Array"
import { createDictionary } from "./create/Dictionary"
import { createUnsafePromise } from "./create/Promise/Unsafe"
import { createUnsafeResource } from "./create/Resource/Unsafe"
import { createUnsafeOnOpenResource } from "./create/Resource/UnsafeOnOpen"
import { createStream } from "./create/Stream"

export const create = {
    Array: createArray,
    Dictionary: createDictionary,
    Promise: {
        unsafe: createUnsafePromise,
    },
    Resource: {
        unsafeOnOpen: createUnsafeOnOpenResource,
        unsafe: createUnsafeResource,
    },
    Stream: createStream,
}
