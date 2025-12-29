import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _psh from 'pareto-core-transformer/dist/deprecated_shorthands_for_unresolved'

import * as _out$ from "../../../../interface/generated/pareto/core/unresolved"

import * as _in from "../../../../interface/generated/pareto/schemas/module/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"

import * as t_exupery_implementation_main from "../schema/exupery_implementation/main"


export const Module = ($: _in.Module): _out.Module_Set<_pi.Deprecated_Source_Location> => {
    return {
        'location': _psh.location(),
        'dictionary': _pt.dictionary_literal<_out.Module_Set.D<_pi.Deprecated_Source_Location>>({
            'schemas': t_exupery_implementation_main.Schema_Tree(
                $['schema tree'],
                {
                    'path': _pt.list_literal([]),
                }
            )
        }).map(($) => ({
            'location': _psh.location(),
            'entry': $
        }))
    }
}