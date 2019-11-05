//api interfaces and types
export * from "pareto-api"

//the interfaces
export { IKeyValueStream } from "./interfaces/IKeyValueStream"
export { ISafePromise } from "./interfaces/ISafePromise"
export { FilterResult, IStream } from "./interfaces/IStream"
export { IUnsafePromise } from "./interfaces/IUnsafePromise"
export { ILookup } from "./interfaces/ILookup"
export { IUnsafeOnOpenResource } from "./interfaces/IUnsafeOnOpenResource"
export { IUnsafeResource } from "./interfaces/IUnsafeResource"
export { IUnsafeOpenedResource } from "./interfaces/IUnsafeOpenedResource"
export { ISafeOpenedResource } from "./interfaces/ISafeOpenedResource"

//the classes
export { SafeInMemoryDictionary } from "./classes/heap/SafeInMemoryDictionary"
export { UnsafeInMemoryDictionary } from "./classes/heap/UnsafeInMemoryDictionary"
export { ReadOnlyDictionary as IOutReadOnlyDictionary } from "./classes/volatile/ReadOnlyDictionary"
export { WrappedLookup } from "./classes/WrappedLookup"

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

import { UnsafePromise} from "./classes/volatile/UnsafePromise"
import { IUnsafePromise} from "./interfaces/IUnsafePromise"

export function assertNotNull<InputType, ResultType, ErrorType>(
    value: null | InputType,
    onNull: () => ErrorType,
    onNotNull: (value: InputType
) => ResultType): IUnsafePromise<ResultType, ErrorType> {
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


export function assertTrue<ResultType, ErrorType>(value: boolean, onFalse: () => ErrorType, onTrue: () => ResultType): IUnsafePromise<ResultType, ErrorType> {
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
