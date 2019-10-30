
import { IStream } from "pareto-api"
import { Stream } from "../../classes/Stream"
import { streamifyArray } from "./streamifyArray"

export const createStream = {
    empty: <DataType>() => {
        return new Stream<DataType>((_limiter, _onData, onEnd) => {
            onEnd(false)
        })
    },
    from: {
        Array: <ElementType> (array: ElementType[]) => {
            return {
                stream: <DataType>(preparer: (element: ElementType, index: number) => DataType) => {
                    return streamifyArray(array, preparer)
                },
            }
        },
    },
    wrap: <DataType>(stream: IStream<DataType>) => {
        return new Stream<DataType>((limiter, onData, onEnd) => {
            stream.process(limiter, onData, onEnd)
        })
    },
}
