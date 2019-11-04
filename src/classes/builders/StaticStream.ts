import { createArrayStreamifier } from "../../create/Stream/streamifyArray"
import { Stream } from "../volatile/Stream"

export class StaticStream<DataType> extends Stream<DataType> {
    constructor(array: Array<DataType>) {
        super(createArrayStreamifier(array, (x => x)))
    }
}
