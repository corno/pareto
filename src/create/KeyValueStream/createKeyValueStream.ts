import { Dictionary} from "../../classes/Dictionary"
import { streamifyDictionary } from "./streamifyDictionary"

export const createKeyValueStream = {
    from: {
        Dictionary: <EntryType>(dictionary: Dictionary<EntryType>) => {
            return {
                stream: <ElementType>(preparer: (element: EntryType, key: string) => ElementType) => {
                    return streamifyDictionary(dictionary.raw, preparer)
                },
            }
        },
    },
}
