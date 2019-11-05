//api interfaces and types
export * from "pareto-api"

export {
    error,

    EmptyStream,

    IKeyValueStream,
    ISafePromise,
    FilterResult,
    IStream,
    IUnsafePromise,
    ILookup,
    IUnsafeOnOpenResource,
    IUnsafeResource,
    IUnsafeOpenedResource,
    ISafeOpenedResource,

    result,

    SafeInMemoryDictionary,

    StaticLookup,
    StaticStream,

    success,

    UnsafeInMemoryDictionary,

    wrap
} from "pareto-20"

//the create object
import { createSafePromise } from "./create/Promise/Safe/createSafePromise"
import { createUnsafePromise } from "./create/Promise/Unsafe/createUnsafePromise"
import { createUnsafeResource } from "./create/Resource/Unsafe/createUnsafeResource"
import { createUnsafeOnOpenResource } from "./create/Resource/UnsafeOnOpen/createUnsafeOnOpenResource"

export const create = {
    Promise: {
        safe: createSafePromise,
        unsafe: createUnsafePromise,
    },
    Resource: {
        unsafeOnOpen: createUnsafeOnOpenResource,
        unsafe: createUnsafeResource,
    },
}
