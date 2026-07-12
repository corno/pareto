import * as p_di from 'pareto-core/interface/data'
import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../../submodules/pareto_new/interface/schemas/declarations_transformer.js"

export const root = (
    schemas: s_out.Root['schemas'],
): s_out.Root => ({
    'schemas': p_.dictionary(schemas),
})

export const source_schema = (
    target_schemas: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D>,
): s_out.Root.schemas_D => ({
    'target schemas': p_.dictionary(target_schemas),
})


export const target_schema = (
    parameters_schema: s_out.Root.schemas_D.target_schemas_D.parameters_schema,
    types: p_.Normal_Dictionary<s_out.Root.schemas_D.target_schemas_D.types_D>,
): s_out.Root.schemas_D.target_schemas_D => ({
    'parameters schema': parameters_schema,
    'types': p_.dictionary(types),
})

export const type = (
    target_value: s_out.Root.schemas_D.target_schemas_D.types_D['target value'],
    parameter: s_out.Root.schemas_D.target_schemas_D.types_D['parameter'],
): s_out.Root.schemas_D.target_schemas_D.types_D => ({
    'target value': target_value,
    'parameter': parameter,
})