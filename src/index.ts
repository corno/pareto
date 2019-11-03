//api interfaces and types
export * from "pareto-api"

//the classes
export { SafeInMemoryDictionary } from "./classes/SafeInMemoryDictionary"
export { UnsafeInMemoryDictionary } from "./classes/UnsafeInMemoryDictionary"
export { InMemoryReadOnlyDictionary } from "./classes/InMemoryReadOnlyDictionary"
export { ReadOnlyDictionary } from "./classes/ReadOnlyDictionary"
export { KeyValueStream } from "./classes/KeyValueStream"
export { Lookup } from "./classes/Lookup"
export { SafePromise } from "./classes/SafePromise"
export { Stream } from "./classes/Stream"
export { BuildableKeyValueStream } from "./classes/BuildableKeyValueStream"
export { BuildableStream } from "./classes/BuildableStream"
export { UnsafeOnOpenResource } from "./classes/UnsafeOnOpenResource"
export { UnsafePromise } from "./classes/UnsafePromise"
export { UnsafeResource } from "./classes/UnsafeResource"

//the create object
import { createArray } from "./create/Array/createArray"
import { createSafePromise } from "./create/Promise/Safe/createSafePromise"
import { createUnsafePromise } from "./create/Promise/Unsafe/createUnsafePromise"
import { createUnsafeResource } from "./create/Resource/Unsafe/createUnsafeResource"
import { createUnsafeOnOpenResource } from "./create/Resource/UnsafeOnOpen/createUnsafeOnOpenResource"
import { createStream } from "./create/Stream/createStream"

export const create = {
    Array: createArray,
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

export * from "./wrap"

export function assertUnreachable(_never: never) {
   throw new Error("Didn't expect to get here")
}
