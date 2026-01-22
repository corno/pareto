import * as _p from 'pareto-core/dist/transformer'

import * as s_in_inf from "../../../../../interface/generated/liana/schemas/interface/data/resolved"
import * as s_in_imp from "../../../../../interface/generated/liana/schemas/implementation/data/resolved"

import * as d_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"

import * as t_interface_to_typescript_temp from "../../interface/transformers/typescript_light"
import * as t_implementation_to_typescript_temp from "../../implementation/transformers/typescript_light"

import * as sh from "../../../../../modules/typescript_light/shorthands/typescript_light"

// import * as signatures from "../interface/signatures"

export type Temp_Library = {
    'interface': s_in_inf.Module_Set
    'implementation': s_in_imp.Module_Set
}

export const Temp_Library = (
    $: Temp_Library,
    $p: {
        'phase': 'development' | 'production'
    }
): d_out.Directory => {
    return _p.dictionary.literal<d_out.Directory.D>({
        "interface": sh.n.directory(t_interface_to_typescript_temp.Module_Set($.interface)),
        "implementation": sh.n.directory(t_implementation_to_typescript_temp.Module_Set(
            $.implementation,
            {
                'phase': $p.phase,
            }
        )),
        //FIX: "generic"
    })
}