
import { Stream } from "../../classes/Stream"

export function streamifyArray<RawElementType, ElementType>(array: RawElementType[], preparer: (element: RawElementType, index: number) => ElementType) {
    return new Stream<ElementType>(
        (limiter, onData, onEnd) => {
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
    )
}
