//api interfaces and types
export * from "pareto-api"

export {
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

    mergeArrayOfSafePromises,
    mergeStreamOfUnsafePromises,
    mergeArrayOfUnsafePromises,


    IUnsafeOnOpenResource,
    IUnsafeResource,
    IUnsafeOpenedResource,
    ISafeOpenedResource
} from "pareto-20"
