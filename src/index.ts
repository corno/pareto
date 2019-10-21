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
import { createSafePromise } from "./create/Promise/Safe/createSafePromise"
import { createUnsafePromise } from "./create/Promise/Unsafe/createUnsafePromise"
import { createUnsafeResource } from "./create/Resource/Unsafe/createUnsafeResource"
import { createUnsafeOnOpenResource } from "./create/Resource/UnsafeOnOpen/createUnsafeOnOpenResource"
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
