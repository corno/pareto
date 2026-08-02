import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../schema.js"

export const module = (
    submodules: s_out.Module['modules'],
    schema_packages: s_out.Module['schemas'],
    query_interfaces: s_out.Module['queries']['interfaces'],
    query_implementations: s_out.Module['queries']['implementations'],
    command_interfaces: s_out.Module['commands']['interfaces'],
    command_implementations: s_out.Module['commands']['implementations'],
): s_out.Module => ({
    'modules': submodules,
    'schemas': schema_packages,
    'queries': {
        'implementations': query_implementations,
        'interfaces': query_interfaces,
    },
    'commands': {
        'implementations': command_implementations,
        'interfaces': command_interfaces,
    },
})

export const schema_package = (
    schema: s_out.Schema_Package['schema'],
    transformers: s_out.Schema_Package['transformers'],
    serializers: s_out.Schema_Package['serializers'],
    refiners: s_out.Schema_Package['refiners'],
    deserializers: s_out.Schema_Package['deserializers'],
): s_out.Schema_Package => ({
    'schema': schema,
    'transformers': transformers,
    'serializers': serializers,
    'refiners': refiners,
    'deserializers': deserializers,
})