import * as p_ from 'pareto-core/schema'

import * as i_schema_reference from "../schema_reference/schema.js"
export type Root = {
    'development mode': boolean
    'target schema': Root.target_schema
    'parameters schema': Root.parameters_schema
    'dependencies': p_.Dictionary<Root.dependencies_D>
    'declarations': p_.Dictionary<Root.declarations_D>
    'implementations': Root.implementations
}

export namespace Root {
    export type target_schema = i_schema_reference.Schema_Reference

    export type parameters_schema = p_.Optional_Value<i_schema_reference.Schema_Reference>


    export type declarations_D = {
        'target value': i_schema_reference.Value_Reference
        'parameter': p_.Optional_Value<i_schema_reference.Type_Reference>
    }

    export type implementations = p_.Dictionary<Root.implementations_D>


    export type implementations_D = {
        'temp has parameters': boolean
        'expression': Expression
    }
    export type dependencies_D =
        | ['sibling', {
            'source': string
        }]
        | ['external', {
            'package': string
            'module': string
            'schema': string
            'transformer': string
        }]
}

export type Expression =
    | ['implement me', {
        'remark': string
    }]



