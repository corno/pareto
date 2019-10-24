
import { KeyValuePair } from "pareto-api"
import { streamifyArray } from "../Stream/streamifyArray"

export function streamifyDictionary<RawElementType, ElementType>(dictionary: { [key: string]: RawElementType }, preparer: (element: RawElementType, key: string) => ElementType) {
    return streamifyArray<string, KeyValuePair<ElementType>>(Object.keys(dictionary), entryName => ({ key: entryName, value: preparer(dictionary[entryName], entryName) }))
}
