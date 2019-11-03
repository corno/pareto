import { IStream, StreamLimiter } from "pareto-api"

export const createArray = {
    from: {
        Array: <ElementType>(array: ElementType[]) => {
            return {
                flatten: <NewElementType>(getArray: (element: ElementType) => NewElementType[]) => {
                    const result: NewElementType[] = []
                    array.forEach(oldElement => {
                        result.concat(getArray(oldElement))
                    })
                    return result
                },
            }
        },
        Stream: <DataType>(stream: IStream<DataType>) => {
            return {
                convert: <ElementType>(limiter: StreamLimiter, preparer: (element: DataType) => ElementType, abortHandler: () => void) => {
                    const array: ElementType[] = []
                    stream.process(limiter, data => array.push(preparer(data)), abortHandler)
                    return array
                },
                convertAll: () => {
                    const array: DataType[] = []
                    stream.process(null, data => array.push(data), () => {})
                    return array
                },
            }
        },

    },
}
