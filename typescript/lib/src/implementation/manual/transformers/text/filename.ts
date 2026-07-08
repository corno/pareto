import * as p_ from 'pareto-core/implementation/transformer'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import type * as interface_ from "../../../../interface/declarations/transformers/text/filename.js"

export const Text: interface_.Text = ($) => {
    return p_list_build_deprecated(
        ($i) => {
            p_.from.list(p_list_from_text(
                $,
                ($) => $
            )).map(
                ($) => {
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