//api interfaces and types
export * from "pareto-api"

//the classes
export { SafeInMemoryDictionary as IOutSafeInMemoryDictionary } from "./classes/heap/SafeInMemoryDictionary"
export { UnsafeInMemoryDictionary as IOutUnsafeInMemoryDictionary } from "./classes/heap/UnsafeInMemoryDictionary"
export { InMemoryReadOnlyDictionary as IOutInMemoryReadOnlyDictionary } from "./classes/volatile/InMemoryReadOnlyDictionary"
export { ReadOnlyDictionary as IOutReadOnlyDictionary } from "./classes/volatile/ReadOnlyDictionary"
export { KeyValueStream as IOutKeyValueStream } from "./classes/volatile/KeyValueStream"
export { IOutSafePromise } from "./classes/volatile/SafePromise"
export { FilterResult, Stream as IOutStream } from "./classes/volatile/Stream"
export { UnsafeOnOpenResource as IOutUnsafeOnOpenResource } from "./classes/UnsafeOnOpenResource"
export { IOutUnsafePromise } from "./classes/volatile/UnsafePromise"
export { UnsafeResource as IOutUnsafeResource } from "./classes/UnsafeResource"
export { WrappedLookup } from "./classes/WrappedLookup"
export { Lookup as IOutLookup } from "./classes/Lookup"


//the builders
export { BuildableKeyValueStream } from "./classes/builders/BuildableKeyValueStream"
export { BuildableLookup } from "./classes/builders/BuildableLookup"
export { BuildableStream } from "./classes/builders/BuildableStream"
export { EmptyStream } from "./classes/builders/EmptyStream"
export { StaticStream } from "./classes/builders/StaticStream"

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

export const error = create.Promise.unsafe.error
export const success = create.Promise.unsafe.success
export const result = create.Promise.safe.result

import { IOutUnsafePromise} from "./classes/volatile/UnsafePromise"

export function assertNotNull<InputType, ResultType, ErrorType>(value: null | InputType, onNull: () => ErrorType, onNotNull: (value: InputType) => ResultType): IOutUnsafePromise<ResultType, ErrorType> {
    return new IOutUnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
        if (value === null) {
            onError(onNull())
        } else {
            onSuccess(onNotNull(value))
        }
    })
}

export function onNullableValue<InputType, ResultType>(value: null | InputType, onNull: () => ResultType, onNotNull: (value: InputType) => ResultType): ResultType {
    if (value === null) {
        return onNull()
    } else {
        return onNotNull(value)
    }
}


export function assertTrue<ResultType, ErrorType>(value: boolean, onFalse: () => ErrorType, onTrue: () => ResultType): IOutUnsafePromise<ResultType, ErrorType> {
    return new IOutUnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
        if (value) {
            onSuccess(onTrue())
        } else {
            onError(onFalse())
        }
    })
}

export function onBoolean<ResultType>(value: boolean, onFalse: () => ResultType, onTrue: () => ResultType): ResultType {
    if (value) {
        return onTrue()
    } else {
        return onFalse()
    }
}

export * from "./wrap"

export function assertUnreachable(_never: never) {
    throw new Error("Didn't expect to get here")
}
