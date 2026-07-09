import * as p_ from 'pareto-core/implementation/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

import type * as d_in from "../../../interface/generated/liana/schemas/interface/data/resolved.js"
import type * as d_out from "pareto-fountain-pen-file-structure/interface/data/file-system"

//transformations
import * as t_typescript from "./typescript.js"
import * as t_typescript_light_to_prose_block from "../../../modules/typescript_light/implementation/transformers/typescript_light/prose.js"

//resolvers
// import * as r_pareto_interface from "pareto/implementation/generated/liana/schemas/interface/resolve"


export const Package_Set = ($: d_in.Package_Set): d_out.Directory => {
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