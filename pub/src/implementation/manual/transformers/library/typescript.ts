import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in_inf from "../../../../interface/generated/liana/schemas/interface/data/resolved"
import * as d_in_imp from "../../../../interface/generated/liana/schemas/implementation/data/resolved"
export namespace d_in {

    export type Temp_Library = {
        'interface': d_in_inf.Package_Set
        'implementation': d_in_imp.Package_Set
    }

}
import * as d_out from "../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_function from "../../../../interface/to_be_generated/pareto_to_typescript"

//dependencies
import * as t_interface_to_typescript_temp from "../interface/typescript"
import * as t_implementation_to_typescript_temp from "../implementation/typescript"

//shorthands
import * as sh from "../../../../modules/typescript_light/shorthands/typescript_light"

// import * as signatures from "../interface/signatures"


export const Temp_Library = (
    $: d_in.Temp_Library,
    abort: _pi.Abort<d_function.Error>
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