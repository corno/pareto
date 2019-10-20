//the interfaces
export * from "pareto-api"

//the classes
export { UnsafePromise } from "./classes/UnsafePromise"
export { SafePromise } from "./classes/SafePromise"
export { UnsafeOnOpenResource } from "./classes/UnsafeOnOpenResource"
export { Stream } from "./classes/Stream"

//the create object
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

//fs wrappers
export { functions as fs } from "./wrappers/fs/generated/fsErrors"

//json wrappers
export { functions as json } from "./wrappers/JSON"
