import { createArrayStreamifier } from "../create/Stream/streamifyArray"
import { Stream } from "./Stream"

export class BuildableStream<DataType> extends Stream<DataType> {
    private readonly array: Array<DataType>
    constructor() {
        const array: Array<DataType> = []

        super(createArrayStreamifier(array, (x => x)))
        this.array = array
    }
    public push(element: DataType) {
        this.array.push(element)
    }
}
