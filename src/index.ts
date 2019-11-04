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
export { FilterResult, Stream } from "./classes/Stream"
export { BuildableKeyValueStream } from "./classes/BuildableKeyValueStream"
export { BuildableStream } from "./classes/BuildableStream"
export { UnsafeOnOpenResource } from "./classes/UnsafeOnOpenResource"
export { UnsafePromise } from "./classes/UnsafePromise"
export { UnsafeResource } from "./classes/UnsafeResource"
export { WrappedLookup } from "./classes/WrappedLookup"
export { BuildableLookup } from "./classes/BuildableLookup"

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

import { UnsafePromise} from "./classes/UnsafePromise"

export function assertNotNull<InputType, ResultType, ErrorType>(value: null | InputType, onNull: () => ErrorType, onNotNull: (value: InputType) => ResultType): UnsafePromise<ResultType, ErrorType> {
    return new UnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
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


export function assertTrue<ResultType, ErrorType>(value: boolean, onFalse: () => ErrorType, onTrue: () => ResultType): UnsafePromise<ResultType, ErrorType> {
    return new UnsafePromise<ResultType, ErrorType>((onError, onSuccess) => {
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
