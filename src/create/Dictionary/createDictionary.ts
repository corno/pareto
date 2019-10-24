//import { ISafePromise, IStream } from "pareto-api"
import { Dictionary} from "../../classes/Dictionary"

export const createDictionary = {
    from: {

        // Stream: {
        //     process: <DataType, TargetType>(stream: IStream<DataType>, promisify: (entry: DataType) => ISafePromise<{ key: string, value: TargetType }>) => {
        //         return new UnsafePromise<>((onError, onSuccess) => {
        //             const dictionary: { [key: string]: TargetType } = {}
        //             stream.process(
        //                 data => {
        //                     promisify(data).handle(

        //                     )
        //                     if (dictionary[kvPair.])
        //                 },
        //                 () => {
        //                     onSuccess(dictionary)
        //                 }
        //             )
        //         })
        //     },
        // },
    },
    wrap: <PropertyType>(source: { [key: string]: PropertyType }) => {
        return new Dictionary<PropertyType>(source)
    },
}
