import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"
import type * as s_vr from "../../schema_reference/schema.js"


export const root = (
    development_mode: boolean,
    source_schema: s_out.Root['source schema'],
    error_schema: s_out.Root['error schema'],
    parameters_schema: s_out.Root['parameters schema'],
    declarations: p_.Normal_Dictionary<s_out.Root.declarations_D>,
    dependencies: p_.Normal_Dictionary<s_out.Root.dependencies_D>,
    implementations: p_.Normal_Dictionary<s_out.Root.implementations_D>,
): s_out.Root => ({
    'development mode': development_mode,
    'source schema': source_schema,
    'error schema': error_schema,
    'parameters schema': parameters_schema,
    'declarations': p_.dictionary(declarations),
    'dependencies': p_.dictionary(dependencies),
    'implementations': p_.dictionary(implementations),
})

export namespace declaration {

    export const production = (
        source: s_vr.Value_Reference,
        error: s_out.Root.declarations_D['error'],
        parameter: s_out.Root.declarations_D['parameter'],
    ): s_out.Root.declarations_D => ({
        'source': ['iterator', source],
        'error': error,
        'parameter': parameter,
    })
    export const refiner = (
        source: s_vr.Value_Reference,
        error: s_out.Root.declarations_D['error'],
        parameter: s_out.Root.declarations_D['parameter'],
    ): s_out.Root.declarations_D => ({
        'source': ['value', source],
        'error': error,
        'parameter': parameter,
    })

}

export const implementation = (
    expression: s_out.Expression,
): s_out.Root.implementations_D => ({
    'expression': expression,
})

export namespace expr {

    export const implement_me = (
        remark: string,
    ): s_out.Expression => ['implement me', {
        'remark': remark,
    }]

}
