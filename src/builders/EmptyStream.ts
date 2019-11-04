import { Stream } from "../classes/Stream"
import { createArrayStreamifier } from "../create/Stream/streamifyArray"

export class EmptyStream<DataType> extends Stream<DataType> {
    constructor() {
        super(createArrayStreamifier([], (x => x)))
    }
}
