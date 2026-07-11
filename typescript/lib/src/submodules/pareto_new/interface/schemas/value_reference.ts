import * as p_ from 'pareto-core/interface/data'

import * as i_type_reference from "./type_reference.js"

export type Value_Reference = {
    'type': i_type_reference.Type_Reference
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