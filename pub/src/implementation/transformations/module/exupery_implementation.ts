import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'

import * as _out$ from "../../../interface/generated/pareto/core/unresolved"

import * as _in from "../../../interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"

import * as t_exupery_implementation_main from "../schema/exupery_implementation/main"

export const Module = ($: _in.Module): _out.Module_Set<_edata.Source_Location> => {
    return {
        'location': _edata.get_location_info(1),
        'dictionary': _ea.dictionary_literal<_out.Module_Set.D<_edata.Source_Location>>({
            'schemas': t_exupery_implementation_main.Schema_Tree(
                $['schema tree'],
                {
                    'path': _ea.array_literal([]),
                }
            )
        }).map(($) => ({
            'location': _edata.get_location_info(1),
            'entry': $
        }))
    }
}