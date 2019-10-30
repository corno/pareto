import { IUnsafePromise } from "pareto-api"
import { Dictionary } from "../../../classes/Dictionary"
import {
    UnsafePromise
} from "../../../classes/UnsafePromise"
import { arrayToDictionary} from "../../../utils"
import { mergeArrayOfUnsafePromises } from "./mergeArrayOfUnsafePromises"

export function mergeDictionaryOfUnsafePromises<ResultType, ErrorType>(
    dictionary: Dictionary<IUnsafePromise<ResultType, ErrorType>>
): UnsafePromise<Dictionary<ResultType>, Dictionary<ErrorType>> {
    const keys = Object.keys(dictionary.raw)
    const array = keys.map(key => dictionary.raw[key])
    return mergeArrayOfUnsafePromises(array).mapError(errors =>
        arrayToDictionary(errors, keys)
    ).mapResult(results =>
        arrayToDictionary(results, keys)
    )
}
