// import * as p_ from 'pareto-core/implementation/transformer'
// import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

// //schemas
// import type * as s_in from "../../../submodules/interface/schemas/resolved.js"
// import type * as s_out from "pareto-filesystem-unrestricted-api/interface/schemas/directory_content"

// //dependencies
// import * as t_typescript from "./typescript.js"
// import * as t_typescript_light_to_directory_content from "../../../submodules/typescript_light/implementation/transformers/typescript_light/directory_content.js"

// //resolvers
// // import * as r_pareto_interface from "pareto/implementation/generated/liana/schemas/interface/resolve"


// export const Package_Set = ($: s_in.Package_Set): s_out.Directory => {
//     return t_typescript_light_to_directory_content.Directory(
//         t_typescript.Package_Set(
//             $,
//             ($) => p_.from.state($).decide(
//                 ($) => {
//                     switch ($[0]) {
//                         case 'directory name ending with ts': return p_.option($, () => p_unreachable_code_path("I think this needs proper implementation"))
//                         default: return p_.exhaustive($[0])
//                     }
//                 }
//             )
//         )
//     )
// }