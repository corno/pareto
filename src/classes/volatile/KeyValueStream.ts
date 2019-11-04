import { IInKeyValueStream, KeyValuePair, StreamLimiter } from "pareto-api"
import { Stream } from "./Stream"

type OnData<DataType> = (data: KeyValuePair<DataType>, abort: () => void) => void

export type KeyValueStreamGetter<DataType> = (limiter: StreamLimiter, onData: OnData<DataType>, onEnd: (aborted: boolean) => void) => void

// tslint:disable-next-line: max-classes-per-file
export class KeyValueStream<DataType> implements IInKeyValueStream<DataType> {
    public readonly process: (limiter: StreamLimiter, onData: OnData<DataType>, onEnd: (aborted: boolean) => void) => void
    constructor(
        streamGetter: KeyValueStreamGetter<DataType>,
    ) {
        this.process = streamGetter
    }
    public mapData<NewDataType>(onData: (data: DataType, key: string) => NewDataType): KeyValueStream<NewDataType> {
        return new KeyValueStream<NewDataType>((newLimiter, newOnData, newOnEnd) => {
            this.process(
                newLimiter,
                (data, abort) => newOnData({ key: data.key, value: onData(data.value, data.key) }, abort),
                aborted => newOnEnd(aborted)
            )
        })
    }
    public filter<NewDataType>(
        onData: (data: DataType, key: string) => [false] | [true, NewDataType],
    ): KeyValueStream<NewDataType> {
        return new KeyValueStream<NewDataType>((newLimiter, newOnData, newOnEnd) => {
            this.process(
                newLimiter,
                (data, abort) => {
                    const filterResult = onData(data.value, data.key)
                    if (filterResult[0]) {
                        newOnData({ key: data.key, value: filterResult[1] }, abort)
                    }
                },
                aborted => newOnEnd(aborted)
            )
        })
    }
    public toKeysStream() {
        return new Stream<string>((limiter, onData, onEnd) => {
            this.process(limiter, (data, abort) => onData(data.key, abort), onEnd)
        })
    }
}
