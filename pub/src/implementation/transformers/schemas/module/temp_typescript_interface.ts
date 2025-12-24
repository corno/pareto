import * as _ed from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

//FIXME, this one should be moved to pareto-targets

import * as _in_s from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _in from "../../../../interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

//transformations

import * as t_interface_to_typescript_temp from "exupery/dist/implementation/algorithms/transformations/interface/typescript_light"

import * as t_pareto_to_exupery_interface from "./exupery_interface"

//resolvers
import * as r_exupery_interface from "exupery/dist/implementation/generated/pareto/schemas/interface/resolve"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Module = ($: _in.Module): _out.Directory => {
    return t_interface_to_typescript_temp.Module_Set(r_exupery_interface.r_Module_Set(
        t_pareto_to_exupery_interface.Module($),
        {
            'parameters': {
                'lookups': null,
                'values': null,
            },
            'location 2 string': _ed.location_to_string
        }
    ))
}