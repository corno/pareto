import { IInKeyValueStream } from "pareto-api"
import { IStream } from "./IStream"


// tslint:disable-next-line: max-classes-per-file
export interface IKeyValueStream<DataType> extends IInKeyValueStream<DataType> {
    mapData<NewDataType>(onData: (data: DataType, key: string) => NewDataType): IKeyValueStream<NewDataType>
    filter<NewDataType>( onData: (data: DataType, key: string) => [false] | [true, NewDataType], ): IKeyValueStream<NewDataType>
    toKeysStream(): IStream<string>
}
