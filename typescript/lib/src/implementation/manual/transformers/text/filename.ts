import p_list_build_deprecated from 'pareto-core/dist/implementation/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"


export type Signature = p_i.Transformer<string, d_out.List_of_Characters>

export const $$: Signature = ($) => {
    return p_list_build_deprecated(($i) => {
        p_list_from_text(
            $,
            ($) => $
        ).__l_map(($) => {
            if ($ === 36) { // $
                $i['add item'](36) //dollar
                $i['add item'](36) //dollar
            } else if ($ === 95) { // _
                $i['add item'](36) //dollar
                $i['add item'](95) //underscore    
            } else if ($ === 32) { // space
                $i['add item'](95) //underscore    
            } else {
                $i['add item']($)
            }
            return null
        })
    })
}