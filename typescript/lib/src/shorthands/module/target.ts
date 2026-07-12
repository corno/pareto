import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../../submodules/pareto_new/interface/schemas/module.js"

export const module = (
    schemas: s_out.Module['interface']['schemas'],
    interface_commands: s_out.Module['interface']['commands'],
    interface_queries: s_out.Module['interface']['queries'],
    declarations_transformers: s_out.Module['declarations']['transformers'],
    declarations_refiners: s_out.Module['declarations']['refiners'],
    declarations_queries: s_out.Module['declarations']['queries'],
    declarations_commands: s_out.Module['declarations']['commands'],
    implementation_transformers: s_out.Module['implementation']['transformers'],
    implementation_refiners: s_out.Module['implementation']['refiners'],
    implementation_queries: s_out.Module['implementation']['queries'],
    implementation_commands: s_out.Module['implementation']['commands'],
    submodules: s_out.Module['submodules'],
): s_out.Module => ({
    'submodules': submodules,
    'interface': {
        'schemas': schemas,
        'commands': interface_commands,
        'queries': interface_queries,
    },
    'declarations': {
        'transformers': declarations_transformers,
        'refiners': declarations_refiners,
        'queries': declarations_queries,
        'commands': declarations_commands,
    },
    'implementation': {
        'transformers': implementation_transformers,
        'refiners': implementation_refiners,
        'queries': implementation_queries,
        'commands': implementation_commands,
    },
})