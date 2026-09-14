import * as p_ from 'pareto-core/schema'

import * as i_value_reference from "../value_reference/schema.js"
import * as i_type_reference from "../type_reference/schema.js"
import * as i_schema_reference from "../schema_reference/schema.js"

export type Root = {
    'development mode': boolean
    'source schema': i_schema_reference.Schema_Reference
    'error schema': p_.Optional_Value<i_schema_reference.Schema_Reference>
    'parameters schema': p_.Optional_Value<i_schema_reference.Schema_Reference>
    'declarations': p_.Dictionary<Root.declarations_D>
    'dependencies': p_.Dictionary<Root.dependencies_D>
    'implementations': p_.Dictionary<Root.implementations_D>
}

export namespace Root {
    export type declarations_D = {
        'source':
        | ['value', i_value_reference.Value_Reference]
        | ['iterator', i_value_reference.Value_Reference]
        'error': p_.Optional_Value<i_type_reference.Type_Reference>
        'parameter': p_.Optional_Value<i_type_reference.Type_Reference>
    }
    export type dependencies_D = {
    }


    export type implementations_D = {
        'expression': Expression
    }
}

export type Expression =
    | ['from', Expression.from]
    | ['implement me', {
        'remark': string
    }]

export namespace Expression {

    export type from = {
        'selection': Value_Selection
        'type':
        | ['dictionary map', null]
    }

    export namespace from {

    }
}

export type Value_Selection = {
    'start':
    | ['context value', null]
    'tail': p_.List<Value_Selection.tail.L>
}
export namespace Value_Selection {
    export namespace tail {
        export type L = string
    }
}
