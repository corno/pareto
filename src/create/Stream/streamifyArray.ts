
import { Stream, StreamGetter } from "../../classes/Stream"

export function createArrayStreamifier<RawElementType, ElementType>(array: RawElementType[], preparer: (element: RawElementType, index: number) => ElementType): StreamGetter<ElementType> {
    return (limiter, onData, onEnd) => {
        function pushData(theArray: RawElementType[], limited: boolean) {
            let abort = false
            theArray.forEach((element, index) => {
                if (!abort) {
                    onData(
                        preparer(element, index),
                        () => {
                            abort = true
                        }
                    )
                }
            })
            onEnd(limited || abort)
        }
        if (limiter !== null && limiter.maximum < array.length) {
            if (limiter.abortEarly) {
                onEnd(true)
            } else {
                pushData(array.slice(0, limiter.maximum), true)
            }
        } else {
            pushData(array, false)
        }
    }
}

export function streamifyArray<RawElementType, ElementType>(array: RawElementType[], preparer: (element: RawElementType, index: number) => ElementType) {
    return new Stream<ElementType>(createArrayStreamifier(array, preparer))
}
