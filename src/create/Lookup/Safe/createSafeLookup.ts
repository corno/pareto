import { arrayToLookup } from "../../../utils"

export const createSafeLookup = {
    from: {
        Dictionary: <EntryType>(dictionary: { [key: string]: EntryType}) => {
            return {
                create: <ElementType>(preparer: (element: EntryType, key: string) => ElementType) => {
                    const keys = Object.keys(dictionary)
                    const values = keys.map(key => {
                        return preparer(dictionary[key], key)
                    })
                    return arrayToLookup(values, keys)
                },
            }
        },
    },
}
