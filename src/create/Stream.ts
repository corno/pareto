
import { IStream } from "pareto-api"
import { Stream } from "../classes/Stream"

export const createStream = {
    from: {
        Array: {
            stream: <RawElementType, ElementType>(array: RawElementType[], preparer: (element: RawElementType, index: number) => ElementType) => {
                return new Stream<ElementType>(
                    (onData, onEnd) => {
                        array.forEach((element, index) => onData(preparer(element, index)))
                        onEnd()
                    }
                )
            },
        },
    },
    wrap: <DataType>(stream: IStream<DataType>) => {
        return new Stream<DataType>((onData, onEnd) => {
            stream.process(onData, onEnd)
        })
    },
}
