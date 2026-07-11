import * as p_ from 'pareto-core/interface/data'


export type Root = {
    'type sets': p_.Dictionary<Root.type_setsD>
}

export namespace Root {

    export type type_setsD = {
        'imports': p_.Dictionary<data_set.importsD>
        'types': p_.Dictionary<data_set.typesD>
    }

    export namespace data_set {

        export type typesD = {
            'root': Value
        }

        export type importsD =
            | ['module', {
                'module': string
                'type': string
            }]
            | ['external', {
                'path': string
                'type': string
            }]
    }
}

type Value =
    | ['boolean', null]
    | ['component', Value.component]
    | ['dictionary', Value]
    | ['group', p_.Dictionary<Value>]
    | ['list', Value]
    | ['nothing', null]
    | ['number', null]
    | ['optional', Value]
    | ['reference', Value.reference]
    | ['state', {
        'options': p_.Dictionary<Value>
    }]
    | ['text', null]

export namespace Value {

    export type component = {
        'type set':
        | ['local', {
            'type': string //can be circular
        }]
        | ['import', {
            'type set': string
            'type': string
        }]
    }

    export type reference = {
        'type set':
        | ['local', null] //cannot be circularyly dependent
        | ['import', string]
        'type': string
        'sub selection': p_.List<reference.sub_selectionL>
        'cyclic': boolean //not sure if this one is used
    }

    export namespace reference {
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

}