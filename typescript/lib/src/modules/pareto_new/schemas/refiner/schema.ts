import * as p_ from 'pareto-core/schema'

import * as i_schema_reference from "../schema_reference/schema.js"

export type Root = {
    'development mode': boolean
    'source schema': i_schema_reference.Schema_Reference
    'error schema': p_.Optional_Value<i_schema_reference.Schema_Reference>
    'parameters schema': p_.Optional_Value<i_schema_reference.Schema_Reference>
    'dependencies': p_.Dictionary<Root.dependencies_D>
    'declarations': p_.Dictionary<Root.declarations_D>
    'implementations': p_.Dictionary<Root.implementations_D>
}

export namespace Root {
    export type declarations_D = {
        'source':
        | ['value', i_schema_reference.Value_Reference]
        | ['iterator', i_schema_reference.Value_Reference]
        'error': p_.Optional_Value<i_schema_reference.Type_Reference>
        'parameter': p_.Optional_Value<i_schema_reference.Type_Reference>
    }
    export type dependencies_D =
        | ['sibling', {
            'source': string
        }]
        | ['cousin', {
            'schema': string
            'source': string
        }]
        | ['external', {
            'package': string
            'module': string
            'schema': string
            'refiner': string
        }]


    export type implementations_D = {
        'temp has parameters': boolean
        'temp has error': boolean
        'expression': Expression
    }
}

export type Expression =
    | ['from', Expression.from]
    | ['implement me', {
        'remark': string
    }]
    | ['literal', Expression.literal]
    | ['selection', Value_Selection]

export namespace Expression {
    export type literal =
        | ['state', {
            'name': string
            'data': Expression
        }]

    export type from = {
        'selection': Value_Selection
        'type':
        | ['dictionary map', null]
    }

    export namespace from {

    }
}

export type Value_Selection =
    | ['context value', {
        'tail': Value_Selection_Tail
    }]
    | ['call', {
        'refiner': string
        'type': string
        'context': Value_Selection
        'error':
        | ['omitted', null]
        | ['pass through', null]
        | ['handler', {
            'expression': Expression
        }]
        'parameters':
        | ['omitted', null]
        | ['pass through', null]
        | ['handler', {
            'expression': Expression
        }]
        'tail': Value_Selection_Tail
    }]

export type Value_Selection_Tail = p_.List<Value_Selection_Tail.L>

export namespace Value_Selection_Tail {
    export type L = string
}

export namespace Value_Selection {
    export type tail = p_.List<Value_Selection.tail.L>
    export namespace tail {
        export type L = string
    }
}
