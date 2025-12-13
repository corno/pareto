import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import { $$ as op_pop_last_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/pop_last_element"
import { Signature } from "../../../../interface/algorithms/operations/impure/tbd/path"
import { $$ as op_split } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/split"

export const get_base_name = (path: string): _et.Optional_Value<string> => {
    const temp = op_split(path, { separator: 47 }) // '/'

    return op_pop_last_element(temp).map(($) => $.element)
}

export const get_directory_path = (path: string): _et.Optional_Value<_et.List<string>> => {
    const temp = op_split(path, { separator: 47 }) // '/'

    return op_pop_last_element(temp).map(($) => $.rest)

}