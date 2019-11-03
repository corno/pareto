import { IKeyValueStream, ISafePromise, IStream, IUnsafeOnOpenResource, IUnsafePromise, IUnsafeResource } from "pareto-api"
import { KeyValueStream } from "./classes/KeyValueStream"
import { SafePromise } from "./classes/SafePromise"
import { Stream } from "./classes/Stream"
import { UnsafeOnOpenResource } from "./classes/UnsafeOnOpenResource"
import { UnsafePromise } from "./classes/UnsafePromise"
import { UnsafeResource } from "./classes/UnsafeResource"

export const wrap = {
    KeyValueStream: <DataType>(stream: IKeyValueStream<DataType>) => {
        return new KeyValueStream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
    SafePromise: <SourceResultType>(promise: ISafePromise<SourceResultType>) => {
        return new SafePromise<SourceResultType>(onResult => {
            promise.handle(onResult)
        })
    },
    UnsafePromise: <SourceResultType, SourceErrorType>(promise: IUnsafePromise<SourceResultType, SourceErrorType>) => {
        return new UnsafePromise<SourceResultType, SourceErrorType>((onError, onSucces) => {
            promise.handle(onError, onSucces)
        })
    },
    UnsafeResource: <T, OpenError, CloseError>(unsafeResource: IUnsafeResource<T, OpenError, CloseError>) => {
        return new UnsafeResource<T, OpenError, CloseError>((onError, onOpened) => {
            unsafeResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
    UnsafeOnOpenResource: <T, OpenError>(unsafeOnOpenResource: IUnsafeOnOpenResource<T, OpenError>) => {
        return new UnsafeOnOpenResource<T, OpenError>((onError, onOpened) => {
            unsafeOnOpenResource.open(onError, openedResource => {
                onOpened(openedResource.resource, openedResource.close)
            })
        })
    },
    Stream: <DataType>(stream: IStream<DataType>) => {
        return new Stream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
}
