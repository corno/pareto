import * as p_ from 'pareto-core/interface/schema'

import * as i_type_reference from "./type_reference.js"

export type Value_Reference = {
    'type': string
    'sub selection': p_.List<Value_Reference.sub_selectionL>
}

export namespace Value_Reference {
    export type sub_selectionL =
        | ['dictionary', null]
        | ['group', {
            'property': string
        }]
        | ['list', null]
        | ['optional', null]
        | ['state', {
            'option': string
        }]
}