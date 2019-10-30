import { Dictionary} from "./classes/Dictionary"
import { Lookup} from "./classes/Lookup"

export function arrayToDictionary<Type>(array: Type[], keys: string[]) {
    const dictionary: { [key: string]: Type } = {}
    array.forEach((element, index) => dictionary[keys[index]] = element)
    return new Dictionary<Type>(dictionary)
}

export function arrayToLookup<Type>(array: Type[], keys: string[]) {
    const dictionary: { [key: string]: Type } = {}
    array.forEach((element, index) => dictionary[keys[index]] = element)
    return new Lookup<Type>(dictionary)
}
