
import { IStream } from "pareto-api"
import { Stream } from "../../classes/Stream"

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
        Dictionary: {
            stream: <RawElementType, ElementType>(dictionary: { [key: string]: RawElementType}, preparer: (entry: RawElementType, entryName: string) => ElementType) => {
                return new Stream<ElementType>(
                    (onData, onEnd) => {
                        Object.keys(dictionary).forEach(entryName => onData(preparer(dictionary[entryName], entryName)))
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
