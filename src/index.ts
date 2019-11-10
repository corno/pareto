//api interfaces and types
export * from "pareto-api"

export {
    assertUnreachable,

    assertNotNull,
    onNullableValue,

    assertTrue,
    onBoolean,

    result,

    success,
    error,

    wrap,

    buildStream,
    FilterResult,
    IKeyValueStream,
    IStream,


    ISafePromise,
    IUnsafePromise,

    ILookup,
    ReadOnlyDictionary,
    SafeMutableDictionary,
    UnsafeMutableDictionary,


    IUnsafeOnOpenResource,
    IUnsafeResource,
    IUnsafeOpenedResource,
    ISafeOpenedResource,


} from "pareto-20"

//the create object
import { createSafePromise } from "./create/Promise/Safe/createSafePromise"
import { createUnsafePromise } from "./create/Promise/Unsafe/createUnsafePromise"
import { createUnsafeOnOpenResource } from "./create/Resource/UnsafeOnOpen/createUnsafeOnOpenResource"

export const create = {
    Promise: {
        safe: createSafePromise,
        unsafe: createUnsafePromise,
    },
    Resource: {
        unsafeOnOpen: createUnsafeOnOpenResource,
    },
}
