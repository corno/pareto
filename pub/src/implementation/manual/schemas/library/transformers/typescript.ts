import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in_inf from "../../../../../interface/generated/liana/schemas/interface/data/resolved"
import * as d_in_imp from "../../../../../interface/generated/liana/schemas/implementation/data/resolved"

import * as d_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_pareto_to_typescript from "../../../../../interface/to_be_generated/pareto_to_typescript"

import * as t_interface_to_typescript_temp from "../../interface/transformers/typescript"
import * as t_implementation_to_typescript_temp from "../../implementation/transformers/typescript"

import * as sh from "../../../../../modules/typescript_light/shorthands/typescript_light"

// import * as signatures from "../interface/signatures"

export type Temp_Library = {
    'interface': d_in_inf.Package_Set
    'implementation': d_in_imp.Package_Set
}

export const Temp_Library = (
    $: Temp_Library,
    abort: _pi.Abort<d_pareto_to_typescript.Error>
    // $p: {
    //     'phase': 'development' | 'production'
    // }
): d_out.Directory => {
    return _p.dictionary.literal<d_out.Directory.D>({
        "interface": sh.n.directory(t_interface_to_typescript_temp.Package_Set(
            $.interface,
            abort,
        )),
        "implementation": sh.n.directory(t_implementation_to_typescript_temp.Package_Set(
            $.implementation,
            abort,
            // {
            //     'phase': $p.phase,
            // }
        )),
        //FIX: "generic"
    })
}