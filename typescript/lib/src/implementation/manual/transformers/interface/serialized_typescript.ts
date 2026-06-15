import * as pt from 'pareto-core/dist/transformer/implementation'
import p_unreachable_code_path from 'pareto-core/dist/specials/unreachable_code_path'

import * as d_in from "../../../../interface/generated/liana/schemas/interface/data/resolved"
import * as d_out from "pareto-fountain-pen-file-structure/dist/interface/to_be_generated/file-system"

//transformations
import * as t_typescript from "./typescript"
import * as t_typescript_light_to_fountain_pen_block from "../../../../modules/typescript_light/implementation/manual/transformers/typescript_light/fountain_pen"

//resolvers
// import * as r_pareto_interface from "pareto/dist/implementation/generated/liana/schemas/interface/resolve"


export const Package_Set = ($: d_in.Package_Set): d_out.Directory => {
    return t_typescript_light_to_fountain_pen_block.Directory(
        t_typescript.Package_Set(
            $,
            ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'directory name ending with ts': return pt.ss($, () => p_unreachable_code_path("I think this needs proper implementation"))
                    default: return pt.au($[0])
                }
            })
        )
    )
}