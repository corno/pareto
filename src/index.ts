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
    IStreamConsumer,


    IValue,
    IUnsafeValue,

    ILookup,
    ReadOnlyDictionary,
    SafeMutableDictionary,
    UnsafeMutableDictionary,

    mergeArrayOfSafeValues,
    mergeStreamOfUnsafeValues,
    mergeArrayOfUnsafeValues,


    IUnsafeOnOpenResource,
    IUnsafeResource,
    IUnsafeOpenedResource,
    ISafeOpenedResource
} from "pareto-20"
