
import { IStream } from "pareto-api"
import { Stream } from "../../classes/Stream"
import { streamifyArray} from "./streamifyArray"

export const createStream = {
    empty: <DataType>() => {
        return new Stream<DataType>((_limiter, _onData, onEnd) => {
            onEnd(false)
        })
    },
    from: {
        Array: {
            stream: streamifyArray,
        },
        Dictionary: {
            stream: <RawElementType, ElementType>(dictionary: { [key: string]: RawElementType }, preparer: (entry: RawElementType, entryName: string) => ElementType) => {
                return streamifyArray(Object.keys(dictionary), entryName => preparer(dictionary[entryName], entryName))
            },
        },
    },
    wrap: <DataType>(stream: IStream<DataType>) => {
        return new Stream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
}
