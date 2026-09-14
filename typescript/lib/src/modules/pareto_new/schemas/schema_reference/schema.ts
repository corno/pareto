import * as p_ from 'pareto-core/schema'

export type Schema_Reference =
    | ['sibling', string]
    | ['external', {
        'package': string
        'module': string
        'schema': string
    }]
    | ['child', {
        'module': string
        'schema': string
    }]

export type Type_Reference = {
    'type': string
}

export type Value_Reference = {
    'type': string
    'sub selection': p_.List<Value_Selection_Path>
}



export type Value_Selection_Path =
    | ['dictionary', null]
    | ['group', {
        'property': string
    }]
    | ['list', null]
    | ['optional', null]
    | ['state', {
        'option': string
    }]