import { IStream, StreamLimiter } from "pareto-api"

type OnData<DataType> = (data: DataType, abort: () => void) => void

export class Stream<DataType> implements IStream<DataType> {
    public readonly process: (limiter: StreamLimiter, onData: OnData<DataType>, onEnd: (aborted: boolean) => void) => void
    constructor(
        streamGetter: (limiter: StreamLimiter, onData: OnData<DataType>, onEnd: (aborted: boolean) => void) => void,
    ) {
        this.process = streamGetter
    }
    public mapData<NewDataType>(onData: (data: DataType) => NewDataType): Stream<NewDataType> {
        return new Stream<NewDataType>((newLimiter, newOnData, newOnEnd) => {
            this.process(
                newLimiter,
                (data, abort) => newOnData(onData(data), abort),
                aborted => newOnEnd(aborted)
            )
        })
    }
    public filter<NewDataType>(
        onData: (data: DataType) => [false] | [true, NewDataType],
    ): Stream<NewDataType> {
        return new Stream<NewDataType>((newLimiter, newOnData, newOnEnd) => {
            this.process(
                newLimiter,
                (data, abort) => {
                    const filterResult = onData(data)
                    if (filterResult[0]) {
                        newOnData(filterResult[1], abort)
                    }
                },
                aborted => newOnEnd(aborted)
            )
        })
    }
}
