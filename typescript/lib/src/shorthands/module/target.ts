import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_out from "../../modules/pareto_new/interface/schemas/module.js"

export const module = (
    schemas: s_out.Module['interface']['schemas'],
    interface_commands: s_out.Module['interface']['commands'],
    interface_queries: s_out.Module['interface']['queries'],
    transformers: s_out.Module['implementation']['transformers'],
    refiners: s_out.Module['implementation']['refiners'],
    queries: s_out.Module['implementation']['queries'],
    commands: s_out.Module['implementation']['commands'],
    submodules: s_out.Module['submodules'],
): s_out.Module => ({
    'submodules': submodules,
    'interface': {
        'schemas': schemas,
        'commands': interface_commands,
        'queries': interface_queries,
    },
    'implementation': {
        'transformers': transformers,
        'refiners': refiners,
        'queries': queries,
        'commands': commands,
    },
})