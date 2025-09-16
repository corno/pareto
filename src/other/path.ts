import * as _ea from "exupery-core-alg"
import * as _et from "exupery-core-types"

import * as pso from "pareto-standard-operations"

export const get_base_name = (path: string): _et.Optional_Value<string> => {
    const temp = _ea.impure.text.split(path, "/")
    
    return temp.__get_element_at(temp.__get_length() - 1)
}

export const get_directory_path = (path: string): _et.Optional_Value<_et.Array<string>> => {
    const temp = _ea.impure.text.split(path, "/")
    
    return pso.impure.list['remove last element'](temp).map(($) => $.array)
    
}