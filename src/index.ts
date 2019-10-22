//the classes
export { SafePromise } from "./classes/SafePromise"
export { Stream } from "./classes/Stream"
export { UnsafeOnOpenResource } from "./classes/UnsafeOnOpenResource"
export { UnsafePromise } from "./classes/UnsafePromise"
export { UnsafeResource } from "./classes/UnsafeResource"

//the create object
import { createArray } from "./create/Array/createArray"
import { createDictionary } from "./create/Dictionary/createDictionary"
import { createSafePromise } from "./create/Promise/Safe/createSafePromise"
import { createUnsafePromise } from "./create/Promise/Unsafe/createUnsafePromise"
import { createUnsafeResource } from "./create/Resource/Unsafe/createUnsafeResource"
import { createUnsafeOnOpenResource } from "./create/Resource/UnsafeOnOpen/createUnsafeOnOpenResource"
import { createStream } from "./create/Stream/createStream"

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
export { Dirent } from "./wrappers/fs/generated/fsErrors"

//json wrappers
export { functions as json } from "./wrappers/JSON"
