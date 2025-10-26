import * as _ea from "exupery-core-alg"
import * as _et from "exupery-core-types"

import { $$ as op_remove_last_element } from "pareto-standard-operations/dist/operations/impure/list/remove_last_element"
import { $$ as op_split } from "exupery-standard-library/dist/operations/impure/text/split"

export const get_base_name = (path: string): _et.Optional_Value<string> => {
    const temp = op_split(path, "/")
    
    return temp.__get_element_at(temp.__get_length() - 1)
}

export const get_directory_path = (path: string): _et.Optional_Value<_et.Array<string>> => {
    const temp = op_split(path, "/")

    return op_remove_last_element(temp).map(($) => $.array)

}