import * as p_ from 'pareto-core/schema'

import * as i_schema_reference from "../schema_reference/schema.js"
export type Root = {
    'development mode': boolean
    'target schema': Root.target_schema
    'parameters schema': Root.parameters_schema
    'declarations': p_.Dictionary<Root.declarations_D>
    'dependencies': p_.Dictionary<Root.dependencies_D>
    'implementations': Root.implementations
}

export namespace Root {
    export type target_schema = i_schema_reference.Schema_Reference

    export type parameters_schema = p_.Optional_Value<i_schema_reference.Schema_Reference>


    export type declarations_D = {
        'target value': i_schema_reference.Value_Reference
        'parameter': p_.Optional_Value<i_schema_reference.Type_Reference>
    }

    export type dependencies_D = {
        'location':
        | ['this module', null]
        | ['external module', {
            'module': string
        }]
        'source schema': string
        'target schema': string
    }
    export type implementations = p_.Dictionary<Root.implementations_D>


    export type implementations_D = {
        'expression': Expression
    }
}

export type Expression =
    | ['implement me', {
        'remark': string
    }]



