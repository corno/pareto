//import { ISafePromise, IStream } from "pareto-api"

export const createDictionary = {
    from: {
        Dictionary: {
            map: <SourcePropertyType, TargetPropertyType>(source: { [key: string]: SourcePropertyType }, callback: (property: SourcePropertyType) => TargetPropertyType) => {
                const result: { [key: string]: TargetPropertyType } = {}
                Object.keys(source).forEach(propName => {
                    result[propName] = callback(source[propName])
                })
                return result
            },
        },
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
}
