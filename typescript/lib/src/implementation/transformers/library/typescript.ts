import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_ri from 'pareto-core/interface/refiner'

//schemas
import type * as s_in_inf from "../../../submodules/interface/interface/schemas/resolved.js"
import type * as s_in_imp from "../../../submodules/implementation/interface/schemas/resolved.js"
import type * as s_out from "../../../interface/schemas/typescript_light.js"
namespace s_in {

    export type Temp_Library = {
        'interface': s_in_inf.Package_Set
        'implementation': s_in_imp.Package_Set
    }

}
import type * as s_parameters from "../../../interface/schemas/pareto_to_typescript.js"

//dependencies
import * as t_interface_to_typescript_temp from "../interface/typescript.js"
import * as t_implementation_to_typescript_temp from "../implementation/typescript.js"

//shorthands
import * as sh from "../../../submodules/typescript_light/shorthands/typescript_light/target.js"

// import type * as declarations from "../interface/signatures.js"


export const Temp_Library: p_ri.Refiner<
    s_out.Directory,
    s_parameters.Error,
    s_in.Temp_Library
> = (
    $,
    abort
) => p_.literal.dictionary<s_out.Directory.D>({
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