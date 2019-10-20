import { IUnsafePromise } from "pareto-api"
import {
    UnsafePromise
} from "../../../classes/UnsafePromise"
import { mapUnsafePromisesArray } from "./mapUnsafePromisesArray"

function arrayToDictionary<Type>(array: Type[], keys: string[]) {
    const dictionary: { [key: string]: Type } = {}
    array.forEach((element, index) => dictionary[keys[index]] = element)
    return dictionary
}

export function mapUnsafePromisesDictionary<SourceType, ResultType, ErrorType>(
    dictionary: { [key: string]: SourceType },
    promisify: (entry: SourceType, entryName: string) => IUnsafePromise<ResultType, ErrorType>
): UnsafePromise<{ [key: string]: ResultType }, { [key: string]: ErrorType }> {
    const keys = Object.keys(dictionary)
    const array = keys.map(key => ({
        key: key,
        value: dictionary[key],
    }))
    return mapUnsafePromisesArray(array, element => {
        return promisify(element.value, element.key)
    }).mapError(errors =>
        arrayToDictionary(errors, keys)
    ).mapResult(results =>
        arrayToDictionary(results, keys)
    )
}
