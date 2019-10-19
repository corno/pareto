export * from "pareto-api"
export * from "./ExecutionType"
export { UnsafePromise } from "./create/Promise/Unsafe/wrap"
export { SafePromise } from "./create/Promise/Safe/index"
export { functions as fs } from "./generated/fsErrors"

import { createArray } from "./create/Array"
import { createDictionary } from "./create/Dictionary"
import { createSafePromise } from "./create/Promise/Safe"
import { createUnsafePromise } from "./create/Promise/Unsafe"
import { createUnsafeResource } from "./create/Resource/Unsafe"
import { createUnsafeOnOpenResource } from "./create/Resource/UnsafeOnOpen"
import { createStream } from "./create/Stream"

export const create = {
    Array: createArray,
    Dictionary: createDictionary,
    Promise: {
        safe: createSafePromise,
        unsafe: createUnsafePromise,
    },
    Resource: {
        unsafeOnOpen: createUnsafeOnOpenResource,
        unsafe: createUnsafeResource,
    },
    Stream: createStream,
}
