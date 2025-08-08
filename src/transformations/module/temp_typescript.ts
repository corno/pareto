import * as _ed from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

//FIXME, this one should be moved to pareto-targets

import * as _in_s from "../../generated/interface/schemas/schema/data_types/resolved"
import * as _in from "../../generated/interface/schemas/module/data_types/resolved"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"

//transformations
import * as t_exupery_library_to_typescript_temp from "exupery/dist/transformations/library/typescript_temp"
import * as t_pareto_to_exupery_interface from "../../transformations/module/exupery_interface"
import * as t_pareto_to_exupery_implementation from "../../transformations/module/exupery_implementation"

//resolvers
import * as r_exupery_interface from "exupery/dist/generated/implementation/schemas/interface/resolve"
import * as r_exupery_implementation from "exupery/dist/generated/implementation/schemas/implementation/resolve"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Module = ($: _in.Module): _out.Directory => {

    return t_exupery_library_to_typescript_temp.Temp_Library(
        {
            'interface': r_exupery_interface.r_Module_Set(
                t_pareto_to_exupery_interface.Module($),
                {
                    'parameters': {
                        'lookups': null,
                        'values': null,
                    },
                    'location 2 string': _ed.location_to_string
                }
            ),
            'implementation': r_exupery_implementation.r_Module_Set(
                t_pareto_to_exupery_implementation.Module($),
                {
                    'parameters': {
                        'lookups': null,
                        'values': null,
                    },
                    'location 2 string': _ed.location_to_string
                }
            ),
        },
        {
            'phase': 'development',
        },
    )
}