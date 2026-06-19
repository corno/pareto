import * as p_ from 'pareto-core/dist/implementation/transformer'
import p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'

//FIXME, this one should be moved to pareto-targets

import * as d_in from "../../../../interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out from "pareto-fountain-pen-file-structure/dist/interface/data/file-system"

//transformations
import * as t_typescript from "./typescript"
import * as t_typescript_light_to_fountain_pen_block from "../../../../modules/typescript_light/implementation/manual/transformers/typescript_light/fountain_pen"

//resolvers
// import * as r_pareto_implementation from "pareto/dist/implementation/generated/liana/schemas/implementation/resolve"


export const Package_Set = ($: d_in.Package_Set): d_out.Directory => {
    return t_typescript_light_to_fountain_pen_block.Directory(
        t_typescript.Package_Set(
            $,
            ($) => p_.from.state($).decide(($) => {
                switch ($[0]) {
                    case 'directory name ending with ts': return p_.ss($, () => p_unreachable_code_path("I think this needs proper implementation"))
                    default: return p_.au($[0])
                }
            })
            // r_pareto_implementation.r_Module_Set(
            //     t_pareto_to_pareto_implementation.Module($),
            //     {
            //         'parameters': {
            //             'lookups': null,
            //             'values': null,
            //         },
            //         'location 2 string': location_to_string
            //     }
            // ),
            // {
            //     'phase': 'development',
            // }
        )
    )
}