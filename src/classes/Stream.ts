import { IStream } from "pareto-api"

type StreamGetter<DataType> = (onData: (data: DataType) => void, onEnd: () => void) => void

export class Stream<DataType> implements IStream<DataType> {
    public readonly process: StreamGetter<DataType>
    constructor(
        streamGetter: StreamGetter<DataType>,
    ) {
        this.process = streamGetter
    }
    public mapData<NewDataType>(onData: (data: DataType) => NewDataType): Stream<NewDataType> {
        return new Stream<NewDataType>((newOnData, newOnEnd) => {
            this.process(
                data => newOnData(onData(data)),
                () => newOnEnd()
            )
        })
    }
    public filter<NewDataType>(
        onData: (data: DataType) => [false] | [true, NewDataType],
    ): Stream<NewDataType> {
        return new Stream<NewDataType>((newOnData, newOnEnd) => {
            this.process(
                data => {
                    const newData = onData(data)
                    if (newData[0]) {
                        newOnData(newData[1])
                    }
                },
                () => newOnEnd()
            )
        })
    }
}
