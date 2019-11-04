import { Stream } from "../classes/Stream"
import { createArrayStreamifier } from "../create/Stream/streamifyArray"

export class StaticStream<DataType> extends Stream<DataType> {
    constructor(array: Array<DataType>) {
        super(createArrayStreamifier(array, (x => x)))
    }
}
