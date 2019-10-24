import { streamifyDictionary } from "./streamifyDictionary"

export const createKeyValueStream = {
    from: {
        Dictionary: {
            stream: streamifyDictionary,
        },
    },
}
