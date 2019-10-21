import { IUnsafePromise } from "pareto-api"
import {
    UnsafePromise
} from "../../../classes/UnsafePromise"
import { mergeArrayOfUnsafePromises } from "./mergeArrayOfUnsafePromises"

function arrayToDictionary<Type>(array: Type[], keys: string[]) {
    const dictionary: { [key: string]: Type } = {}
    array.forEach((element, index) => dictionary[keys[index]] = element)
    return dictionary
}

export function mergeDictionaryOfUnsafePromises<ResultType, ErrorType>(
    dictionary: { [key: string]: IUnsafePromise<ResultType, ErrorType> }
): UnsafePromise<{ [key: string]: ResultType }, { [key: string]: ErrorType }> {
    const keys = Object.keys(dictionary)
    const array = keys.map(key => dictionary[key])
    return mergeArrayOfUnsafePromises(array).mapError(errors =>
        arrayToDictionary(errors, keys)
    ).mapResult(results =>
        arrayToDictionary(results, keys)
    )
}
