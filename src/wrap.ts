import { IInKeyValueStream, IInSafePromise, IInStream, IInUnsafeOnOpenResource, IInUnsafePromise, IInUnsafeResource } from "pareto-api"
import { UnsafeOnOpenResource } from "../../pareto-20/src/UnsafeOnOpenResource"
import { UnsafeResource } from "../../pareto-20/src/UnsafeResource"
import { KeyValueStream } from "./classes/volatile/KeyValueStream"
import { SafePromise } from "./classes/volatile/SafePromise"
import { Stream } from "./classes/volatile/Stream"
import { UnsafePromise } from "./classes/volatile/UnsafePromise"

import { IKeyValueStream } from "./interfaces/IKeyValueStream"
import { ISafePromise } from "./interfaces/ISafePromise"
import { IStream } from "./interfaces/IStream"
import { IUnsafeOnOpenResource } from "./interfaces/IUnsafeOnOpenResource"
import { IUnsafePromise } from "./interfaces/IUnsafePromise"
import { IUnsafeResource } from "./interfaces/IUnsafeResource"

export const wrap = {
    KeyValueStream: <DataType>(stream: IInKeyValueStream<DataType>): IKeyValueStream<DataType> => {
        return new KeyValueStream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
    SafePromise: <SourceResultType>(promise: IInSafePromise<SourceResultType>): ISafePromise<SourceResultType> => {
        return new SafePromise<SourceResultType>(onResult => {
            promise.handle(onResult)
        })
    },
    UnsafePromise: <SourceResultType, SourceErrorType>(promise: IInUnsafePromise<SourceResultType, SourceErrorType>): IUnsafePromise<SourceResultType, SourceErrorType> => {
        return new UnsafePromise<SourceResultType, SourceErrorType>((onError, onSucces) => {
            promise.handle(onError, onSucces)
        })
    },
    UnsafeResource: <T, OpenError, CloseError>(unsafeResource: IInUnsafeResource<T, OpenError, CloseError>): IUnsafeResource<T, OpenError, CloseError> => {
        return new UnsafeResource<T, OpenError, CloseError>((onError, onOpened) => {
            unsafeResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
    UnsafeOnOpenResource: <T, OpenError>(unsafeOnOpenResource: IInUnsafeOnOpenResource<T, OpenError>): IUnsafeOnOpenResource<T, OpenError> => {
        return new UnsafeOnOpenResource<T, OpenError>((onError, onOpened) => {
            unsafeOnOpenResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
    Stream: <DataType>(stream: IInStream<DataType>): IStream<DataType> => {
        return new Stream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
}
