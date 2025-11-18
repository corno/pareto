import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import { $$ as op_pop_last_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/pop_last_element"
import { Signature } from "../../../../../interface/algorithms/operations/impure/tbd/path"

const op_split: _et.Transformer_With_Parameters<_et.List<string>, string, { 'separator': number }> = (
    $,
    $p,
) => {
    const itermediate_list =  _ea.build_list<string>(($is) => {

        const characters = _ea.text_to_character_list($)

        const length = characters.__get_number_of_elements()

        let current = -1
    
        $is['add element'](_ea.build_text(($i) => {
            while (true) {
                current += 1
                if (current >= length) {
                    break
                }
                const c = characters.__get_element_at(current).transform(
                    ($) => $,
                    () => _ea.deprecated_panic(`index out of bounds`)
                )
                if (c === $p.separator) {
                    break
                } else {
                    $i['add character'](c)
                }
            }
        }))
    })
    //the intermediate list contains an extra element at the end (after the last separator)
    return op_pop_last_element(itermediate_list).transform(
        ($) => $.rest,
        () => _ea.deprecated_panic(`should never happen`)
    )
}


export const get_base_name = (path: string): _et.Optional_Value<string> => {
    const temp = op_split(path, { separator: 47 }) // '/'
    
    return temp.__get_element_at(temp.__get_number_of_elements() - 1)
}

export const get_directory_path = (path: string): _et.Optional_Value<_et.List<string>> => {
    const temp = op_split(path, { separator: 47 }) // '/'

    return op_pop_last_element(temp).map(($) => $.rest)

}