import * as p_di from 'pareto-core/schema'
import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"

export const root = (
    development_mode: boolean,
    target_schema: s_out.Root.target_schema,
    parameters_schema: s_out.Root.parameters_schema,
    declarations: p_.Normal_Dictionary<s_out.Root.declarations_D>,
    dependencies: p_.Normal_Dictionary<s_out.Root.dependencies_D>,
    implementations: p_.Normal_Dictionary<s_out.Root.implementations_D>,
): s_out.Root => ({
    'development mode': development_mode,
    'target schema': target_schema,
    'parameters schema': parameters_schema,
    'declarations': p_.dictionary(declarations),
    'dependencies': p_.dictionary(dependencies),
    'implementations': p_.dictionary(implementations),
})

// export const source_schema = (
//     target_schemas: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D>,
// ): s_out.Root.schemas_D => ({
//     'target schemas': p_.dictionary(target_schemas),
// })

// export namespace decl {

export const declaration = (
    target_value: s_out.Root.declarations_D['target value'],
    parameter: s_out.Root.declarations_D['parameter'],
): s_out.Root.declarations_D => ({
    'target value': target_value,
    'parameter': parameter,
})



// export const target_schema = (
//     parameters_schema: s_out.Root.schemas_D.target_schemas_D.parameters_schema,
//     types: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D.types_D>,
// ): s_out.Root.schemas_D.target_schemas_D => ({
//     'parameters schema': parameters_schema,
//     'types': p_.dictionary(types),
// })




// export const target_schema = (
//     dependencies: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D.dependencies_D>,
//     types: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D.types_D>,
// ): s_out.Root.schemas_D.target_schemas_D => ({
//     'dependencies': p_.dictionary(dependencies),
//     'types': p_.dictionary(types),
// })

export const implementation = (
    expression: s_out.Expression,
): s_out.Root.implementations_D => ({
    'expression': expression,
})

// export const dependency_this_module = (
//     source_schema: string,
//     target_schema: string,
// ): s_out.Root.schemas_D.target_schemas_D.dependencies_D => ({
//     'location': ['this module', null],
//     'source schema': source_schema,
//     'target schema': target_schema,
// })

// export const dependency_external_module = (
//     module: string,
//     source_schema: string,
//     target_schema: string,
// ): s_out.Root.schemas_D.target_schemas_D.dependencies_D => ({
//     'location': ['external module', {
//         'module': module,
//     }],
//     'source schema': source_schema,
//     'target schema': target_schema,
// })

export namespace expr {

    export const implement_me = (
        remark: string,
    ): s_out.Expression => ['implement me', {
        'remark': remark,
    }]

}
