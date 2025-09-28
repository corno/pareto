// //core
// import * as _ea from 'exupery-core-alg'
// import * as _ed from 'exupery-core-data'
// import * as _easync from 'exupery-core-async'

// //data
// import { $ as poormans_modules } from "../temp/temporary_schemas/all"

// import * as r_pareto_module from "../resolvers/module"

// import * as t_pareto_module_to_fountain_pen_block from "../transformations/module/temp_typescript"

// import * as wtfs from "pareto-fountain-pen/dist/commands/write_to_file_system"

// import { $$ as q_read_file } from "exupery-resources/dist/queries/read_file"

// export const $: (
//     $: null,
//     $p: {
//         'path': string,
//     }
// ) => _easync.Unsafe_Command_Result<number> = ($, $p) => _easync.command.unsafe['create result']<number>(

// ).do_dictionary(

//     poormans_modules.map(($, key) => {
//         const module_path = `${$p.path}/${key}`
//         wtfs.Directory(
//             t_pareto_module_to_fountain_pen_block.Module(
//                 r_pareto_module.Module(
//                     $,
//                     {
//                         'parameters': {
//                             'lookups': null,
//                             'values': null,
//                         },
//                         'location 2 string': _ed.location_to_string
//                     }
//                 ),
//             ),
//             {
//                 'path': module_path,
//                 'indentation': "    ",
//                 'newline': "\n",
//                 'remove before creating': true,
//             }
//         )

//         const read_file_sync = (path: string): string => {
//             return _ea.cc(_er.temp_resources.fs['read file sync'](path, true), ($) => {
//                 switch ($[0]) {
//                     case 'success': return _ea.ss($, ($) => $)
//                     case 'error': return _ea.ss($, ($) => _ea.panic(`could not read file: ${path}`))
//                     default: return _ea.au($[0])
//                 }
//             })
//         }

//         _er.temp_resources.fs['write file sync'](module_path + "/implementation/generic/resolve.ts", read_file_sync("./src/generated/implementation/generic/resolve.ts"), true)
//         _er.temp_resources.fs['write file sync'](module_path + "/implementation/generic/unmarshall.ts", read_file_sync("./src/generated/implementation/generic/unmarshall.ts"), true)
//         _er.temp_resources.fs['write file sync'](module_path + "/interface/core/resolve.ts", read_file_sync("./src/generated/interface/core/resolve.ts"), true)
//         _er.temp_resources.fs['write file sync'](module_path + "/interface/core/astn_target.ts", read_file_sync("./src/generated/interface/core/astn_target.ts"), true)
//         _er.temp_resources.fs['write file sync'](module_path + "/interface/core/astn_source.ts", read_file_sync("./src/generated/interface/core/astn_source.ts"), true)
//     }),
//     ($) => 1
// )