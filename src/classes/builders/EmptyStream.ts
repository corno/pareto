import { createArrayStreamifier } from "../../create/Stream/streamifyArray"
import { Stream } from "../volatile/Stream"

export class EmptyStream<DataType> extends Stream<DataType> {
    constructor() {
        super(createArrayStreamifier([], (x => x)))
    }
}
