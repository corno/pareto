import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"
import type * as s_vr from "../../value_reference/schema.js"


export const root = (
    error_schema: null | string,
    parameters_schema: null | string,
    declarations: p_.Normal_Dictionary<s_out.Root.declarations.types_D>,
    dependencies: p_.Normal_Dictionary<s_out.Root.implementation.dependencies_D>,
    implementations: p_.Normal_Dictionary<s_out.Root.implementation.types_D>,
): s_out.Root => ({
    'error schema': error_schema === null ? p_.optional.not_set() : p_.optional.set(error_schema),
    'parameters schema': parameters_schema === null ? p_.optional.not_set() : p_.optional.set(parameters_schema),
    'declarations': {
        'types': p_.dictionary(declarations)
    },
    'implementation': {
        'dependencies': p_.dictionary(dependencies),
        'types': p_.dictionary(implementations),
    },
})

// export const schema = (
//     source_schemas: p_.Normal_Dictionary<s_out.Root.schemas_D.source_schemas_D>,
// ): s_out.Root.schemas_D => ({
//     'source schemas': p_.dictionary(source_schemas),
// })

// export const source_schema = (
//     error_schema: string,
//     parameters_schema: s_out.Root.schemas_D.source_schemas_D['parameters schema'],
//     types: p_.Normal_Dictionary<s_out.Root.schemas_D.source_schemas_D.types_D>,
// ): s_out.Root.schemas_D.source_schemas_D => ({
//     'error schema': error_schema,
//     'parameters schema': parameters_schema,
//     'types': p_.dictionary(types),
// })

// export const type_value_source = (
//     source: s_vr.Value_Reference,
//     error: s_out.Root.schemas_D.source_schemas_D.types_D['error'],
//     parameter: s_out.Root.schemas_D.source_schemas_D.types_D['parameter'],
// ): s_out.Root.schemas_D.source_schemas_D.types_D => ({
//     'source': ['value', source],
//     'error': error,
//     'parameter': parameter,
// })

// export const type_iterator_source = (
//     source: s_vr.Value_Reference,
//     error: s_out.Root.schemas_D.source_schemas_D.types_D['error'],
//     parameter: s_out.Root.schemas_D.source_schemas_D.types_D['parameter'],
// ): s_out.Root.schemas_D.source_schemas_D.types_D => ({
//     'source': ['iterator', source],
//     'error': error,
//     'parameter': parameter,
// })
