import * as pt from 'pareto-core/dist/assign'
import * as p_di from 'pareto-core/dist/data/interface'
import p_list_build_deprecated from 'pareto-core/dist/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/dist/specials/list_from_text'
import * as p_ti from 'pareto-core/dist/transformer/interface'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"


export type Signature = p_ti.Transformer<string, d_out.List_of_Characters>

export const $$: Signature = ($) => {
    return p_list_build_deprecated(($i) => {
        p_list_from_text($, ($) => $).__l_map(($) => {
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