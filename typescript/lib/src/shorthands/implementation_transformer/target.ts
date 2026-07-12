import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../../submodules/pareto_new/interface/schemas/implementation_transformer.js"

export const root = (
    schemas: p_.Normal_Dictionary<s_out.Root.schemas_D>,
): s_out.Root => ({
    'schemas': p_.dictionary(schemas),
})

export const schema = (
    target_schemas: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D>,
): s_out.Root.schemas_D => ({
    'target schemas': p_.dictionary(target_schemas),
})

export const target_schema = (
    dependencies: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D.dependencies_D>,
    types: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D.types_D>,
): s_out.Root.schemas_D.target_schemas_D => ({
    'dependencies': p_.dictionary(dependencies),
    'types': p_.dictionary(types),
})

export const type_ = (
    expression: s_out.Expression,
): s_out.Root.schemas_D.target_schemas_D.types_D => ({
    'expression': expression,
})

export const dependency_this_module = (
    source_schema: string,
    target_schema: string,
): s_out.Root.schemas_D.target_schemas_D.dependencies_D => ({
    'location': ['this module', null],
    'source schema': source_schema,
    'target schema': target_schema,
})

export const dependency_external_module = (
    module: string,
    source_schema: string,
    target_schema: string,
): s_out.Root.schemas_D.target_schemas_D.dependencies_D => ({
    'location': ['external module', {
        'module': module,
    }],
    'source schema': source_schema,
    'target schema': target_schema,
})

export namespace expr {

    export const implement_me = (
        remark: string,
    ): s_out.Expression => ['implement me', {
        'remark': remark,
    }]

}
