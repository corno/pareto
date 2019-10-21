import { IStream } from "pareto-api"

export const createArray = {
    from: {
        Array: {
            flatten: <ElementType>(array: ElementType[][]) => {
                const result: ElementType[] = []
                array.forEach(elementSet => {
                    result.concat(elementSet)
                })
                return result
            },
        },
        Stream: <DataType, ElementType>(stream: IStream<DataType>, preparer: (element: DataType) => ElementType, endHandler: () => void) => {
            const array: ElementType[] = []
            stream.process(data => array.push(preparer(data)), () => endHandler())
            return array
        },
    },
}
