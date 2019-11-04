import { IInKeyValueStream, IInSafePromise, IInStream, IInUnsafeOnOpenResource, IInUnsafePromise, IInUnsafeResource } from "pareto-api"
import { UnsafeOnOpenResource } from "./classes/UnsafeOnOpenResource"
import { UnsafeResource } from "./classes/UnsafeResource"
import { KeyValueStream } from "./classes/volatile/KeyValueStream"
import { IOutSafePromise } from "./classes/volatile/SafePromise"
import { Stream } from "./classes/volatile/Stream"
import { IOutUnsafePromise } from "./classes/volatile/UnsafePromise"

export const wrap = {
    KeyValueStream: <DataType>(stream: IInKeyValueStream<DataType>) => {
        return new KeyValueStream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
    SafePromise: <SourceResultType>(promise: IInSafePromise<SourceResultType>) => {
        return new IOutSafePromise<SourceResultType>(onResult => {
            promise.handle(onResult)
        })
    },
    UnsafePromise: <SourceResultType, SourceErrorType>(promise: IInUnsafePromise<SourceResultType, SourceErrorType>) => {
        return new IOutUnsafePromise<SourceResultType, SourceErrorType>((onError, onSucces) => {
            promise.handle(onError, onSucces)
        })
    },
    UnsafeResource: <T, OpenError, CloseError>(unsafeResource: IInUnsafeResource<T, OpenError, CloseError>) => {
        return new UnsafeResource<T, OpenError, CloseError>((onError, onOpened) => {
            unsafeResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
    UnsafeOnOpenResource: <T, OpenError>(unsafeOnOpenResource: IInUnsafeOnOpenResource<T, OpenError>) => {
        return new UnsafeOnOpenResource<T, OpenError>((onError, onOpened) => {
            unsafeOnOpenResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
    Stream: <DataType>(stream: IInStream<DataType>) => {
        return new Stream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
}
