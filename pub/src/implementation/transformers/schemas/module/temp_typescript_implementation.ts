import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

//FIXME, this one should be moved to pareto-targets

import * as _in_s from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _in from "../../../../interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//transformations
import * as t_pareto_to_exupery_implementation from "./exupery_implementation"
import * as t_implementation_to_typescript_temp from "exupery/dist/implementation/transformers/schemas/implementation/typescript_light"

//resolvers
import * as r_exupery_implementation from "exupery/dist/implementation/generated/pareto/schemas/implementation/resolve"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Module = ($: _in.Module): _out.Directory => {
    return t_implementation_to_typescript_temp.Module_Set(
        r_exupery_implementation.r_Module_Set(
            t_pareto_to_exupery_implementation.Module($),
            {
                'parameters': {
                    'lookups': null,
                    'values': null,
                },
                'location 2 string': _pinternals.location_to_string
            }
        ),
        {
            'phase': 'development',
        }
    )
}