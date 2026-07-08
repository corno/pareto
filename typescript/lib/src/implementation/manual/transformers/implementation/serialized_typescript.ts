import * as p_ from 'pareto-core/implementation/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//FIXME, this one should be moved to pareto-targets

import * as d_in from "../../../../interface/generated/liana/schemas/implementation/data/resolved.js"
import * as d_out from "pareto-fountain-pen-file-structure/interface/data/file-system"

//transformations
import * as t_typescript from "./typescript.js"
import * as t_typescript_light_to_prose_block from "../../../../modules/typescript_light/implementation/manual/transformers/typescript_light/prose.js"

//resolvers
// import * as r_pareto_implementation from "pareto/implementation/generated/liana/schemas/implementation/resolve"


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