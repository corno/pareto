import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_ri from 'pareto-core/interface/refiner'

//data types
import type * as d_in_inf from "../../../../interface/generated/liana/schemas/interface/data/resolved.js"
import type * as d_in_imp from "../../../../interface/generated/liana/schemas/implementation/data/resolved.js"
export namespace d_in {

    export type Temp_Library = {
        'interface': d_in_inf.Package_Set
        'implementation': d_in_imp.Package_Set
    }

}
import type * as d_out from "../../../../interface/generated/liana/schemas/typescript_light/data.js"
import type * as d_function from "../../../../interface/data/pareto_to_typescript.js"

//dependencies
import * as t_interface_to_typescript_temp from "../interface/typescript.js"
import * as t_implementation_to_typescript_temp from "../implementation/typescript.js"

//shorthands
import * as sh from "../../../../modules/typescript_light/shorthands/typescript_light/target.js"

// import type * as interface_ from "../interface/signatures.js"


export const Temp_Library: p_ri.Refiner<
    d_out.Directory,
    d_function.Error,
    d_in.Temp_Library
> = (
    $,
    abort
) => p_.literal.dictionary<d_out.Directory.D>({
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