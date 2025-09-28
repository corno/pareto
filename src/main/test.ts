// //core
// import * as _ea from 'exupery-core-alg'
// import * as _et from 'exupery-core-types'
// import * as _edata from 'exupery-core-data'
// import * as _ed from 'exupery-core-dev'

// import { $$ as read_file } from "exupery-resources/dist/queries/read_file"

// //data
// import * as t_ur_ue from "../transformations/unmarshall_result/unmarshall_errors"
// import * as t_ue_fp from "../transformations/unmarshall_errors/fountain_pen"

// import * as write_to_console from "./fp_write_to_console"

// import { $$ as write_to_console_log } from "pareto-fountain-pen/dist/commands/write_to_console"

// import * as _out from "../temp/temp_unmashall_result_types"

// import { $ as load_astn_document } from "../queries/load_astn_document"

// import { $$ as op_remove_first_element } from "pareto-standard-operations/dist/impure/list/remove_first_element"
// import { $$ as op_remove_last_element } from "pareto-standard-operations/dist/impure/list/remove_last_element"

// import { $$ as q_read_file } from "exupery-resources/dist/queries/read_file"


// export const $: (
//     $: null,
//     $p: {
//         // 'path': string,
//     }
// ) => void = ($, $p) => {

//     const instance_path = "./data/test/pareto_modules/pareto-json.astn"

//     _ea.cc(
//         _er.temp_resources.fs['read file sync'](instance_path, true),
//         ($) => {
//             switch ($[0]) {
//                 case 'success': return _ea.ss($, ($) => {
//                     _ea.cc(
//                         load_astn_document(
//                             $,
//                             {
//                                 'file path': instance_path,
//                             }
//                         ),
//                         ($) => {
//                             switch ($[0]) {
//                                 case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
//                                     switch ($[0]) {
//                                         case 'no schema file': return _ea.ss($, ($) => {
//                                             _ed.log_debug_message(`No schema file found: ${$}`)
//                                         })
//                                         case 'schema error': return _ea.ss($, ($) => {
//                                             _ed.log_debug_message(`Schema error: ${$}`)
//                                         })
//                                         case 'parse error': return _ea.ss($, ($) => {
//                                             _ed.log_debug_message(`Instance parse error: ${$.type[0]}`)
//                                         })

//                                         default: return _ea.au($[0])
//                                     }
//                                 }))
//                                 case 'unmarshalled': return _ea.ss($, ($) => {

//                                     write_to_console.Block(
//                                         t_ue_fp.Errors(
//                                             t_ur_ue.Node($, null),
//                                             {
//                                                 'document path': instance_path,
//                                                 'line offset': 1,
//                                                 'column offset': 1,
//                                             }
//                                         ),
//                                         {
//                                             'indentation': '  ',
//                                             'channel': 'error'
//                                         }
//                                     )
//                                 })
//                                 default: return _ea.au($[0])
//                             }
//                         }
//                     )
//                 })
//                 case 'error': return _ea.ss($, ($) => _ea.panic(`could not read file: ${instance_path}`))
//                 default: return _ea.au($[0])

//             }
//         })


// }