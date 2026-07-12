import * as p_ from 'pareto-core/implementation/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//schemas
import type * as s_in from "../../../submodules/interface/interface/schemas/resolved.js"
import type * as s_out from "../../../submodules/typescript_light/interface/schemas/filesystem.js"

//dependencies
import * as t_typescript from "./typescript.js"
import * as t_typescript_light_to_prose_block from "../../../submodules/typescript_light/implementation/transformers/typescript_light/prose.js"

//resolvers
// import * as r_pareto_interface from "pareto/implementation/generated/liana/schemas/interface/resolve"


export const Package_Set = ($: s_in.Package_Set): s_out.Directory => {
    return t_typescript_light_to_prose_block.Directory(
        t_typescript.Package_Set(
            $,
            ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'directory name ending with ts': return p_.option($, () => p_unreachable_code_path("I think this needs proper implementation"))
                        default: return p_.exhaustive($[0])
                    }
                })
        )
    )
}