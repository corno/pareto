import { Dictionary} from "./classes/Dictionary"

export function arrayToDictionary<Type>(array: Type[], keys: string[]) {
    const dictionary: { [key: string]: Type } = {}
    array.forEach((element, index) => dictionary[keys[index]] = element)
    return new Dictionary<Type>(dictionary)
}
