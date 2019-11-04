import { createArrayStreamifier } from "../create/Stream/streamifyArray"
import { Stream } from "./volatile/Stream"

export class NumberDictionary<DataType> extends Stream<DataType> {
    private readonly array: Array<DataType>
    constructor() {
        const array: Array<DataType> = []

        super(createArrayStreamifier(array, (x => x)))
        this.array = array
    }
    public push(element: DataType) {
        this.array.push(element)
    }
    public getEntry(element: DataType) {
        this.array.push(element)
    }
}
