import { IStream } from "pareto-api"


type EndCallback<End> = (end: End) => void
type DataCallback<Data> = (data: Data) => void
type StreamGetter<DataType, EndType> = (onData: DataCallback<DataType>, onEnd: EndCallback<EndType>) => void

export class Stream<DataType, EndType> implements IStream<DataType> {
    public readonly process: StreamGetter<DataType, EndType>
    constructor(
        streamGetter: StreamGetter<DataType, EndType>,
    ) {
        this.process = streamGetter
    }
    public mapData<NewDataType>(onData: (data: DataType) => NewDataType): Stream<NewDataType, EndType> {
        return new Stream<NewDataType, EndType>((newOnData, newOnEnd) => {
            this.process(
                data => newOnData(onData(data)),
                end => newOnEnd(end)
            )
        })
    }
    public filter<NewDataType>(
        onData: (data: DataType) => [false] | [true, NewDataType],
    ): Stream<NewDataType, EndType> {
        return new Stream<NewDataType, EndType>((newOnData, newOnEnd) => {
            this.process(
                data => {
                    const newData = onData(data)
                    if (newData[0]) {
                        newOnData(newData[1])
                    }
                },
                end => newOnEnd(end)
            )
        })
    }
}

export const createStream = {
    from: {
        Array: <RawElementType, ElementType>(array: RawElementType[], preparer: (element: RawElementType, index: number) => ElementType) => {
            return new Stream<ElementType, null>(
                (onData, onEnd) => {
                    array.forEach((element, index) => onData(preparer(element, index)))
                    onEnd(null)
                }
            )
        },
    },
}
