import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in_inf from "../../../../interface/schemas/resolved.js"
import type * as s_in_imp from "../../../../implementation/interface/schemas/resolved.js"
import type * as s_out from "../../../interface/schemas/typescript_light.js"
namespace s_in {

    export type Temp_Library = {
        'interface': s_in_inf.Package_Set
        'implementation': s_in_imp.Package_Set
    }

}

//dependencies
import * as t_interface_to_typescript_temp from "../interface/typescript.js"
import * as t_implementation_to_typescript_temp from "../implementation/typescript.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

// import type * as declarations from "../interface/signatures.js"


export const Temp_Library: p_.Transformer<
    s_in.Temp_Library,
    s_out.Directory
> = (
    $,
) => sh.directory_of_directories(
    p_.literal.dictionary({
        "interface": t_interface_to_typescript_temp.Package_Set(
            $.interface,
        ),
        "implementation": t_implementation_to_typescript_temp.Package_Set(
            $.implementation,
        ),
        //FIX: "generic"
    })
)