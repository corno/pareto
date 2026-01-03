import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _psh from 'pareto-core-transformer/dist/deprecated_shorthands_for_unresolved'

import * as d_out$ from "../../../../../interface/generated/pareto/core/unresolved"

import * as d_in from "../../../../../interface/generated/pareto/schemas/module/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"

import * as t_exupery_implementation_main from "../../../../manual/schemas/schema/transformers/exupery_implementation_main"


export const Module = ($: d_in.Module): d_out.Module_Set<_pi.Deprecated_Source_Location> => {
    return {
        'location': _psh.location(),
        'dictionary': _p.dictionary.literal<d_out.Module_Set.D<_pi.Deprecated_Source_Location>>({
            'schemas': t_exupery_implementation_main.Schema_Tree(
                $['schema tree'],
                {
                    'path': _p.list.literal([]),
                }
            )
        }).map(($) => ({
            'location': _psh.location(),
            'entry': $
        }))
    }
}