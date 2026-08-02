import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in_inf from "../../../../interface_old/schemas/resolved/schema.js"
import type * as s_in_imp from "../../../../implementation_old/schemas/resolved/schema.js"
import type * as s_out from "../../../../typescript_light/schemas/typescript_light/schema.js"
namespace s_in {

    export type Temp_Library = {
        'interface': s_in_inf.Package_Set
        'implementation': s_in_imp.Package_Set
    }

}

//dependencies

import * as t_interface_to_typescript_temp from "../../../../interface_old/schemas/resolved/transformers/typescript.js"
import * as t_implementation_to_typescript_temp from "../../../../implementation_old/schemas/resolved/transformers/typescript.js"

//shorthands
import * as sh from "../../../../typescript_light/schemas/typescript_light/shorthands/target.js"

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