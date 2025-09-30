// //core
import * as _ea from 'exupery-core-alg'
// import * as _et from 'exupery-core-types'
// import * as _er from 'exupery-core-resources'
// import * as _edata from 'exupery-core-data'
// import * as _ed from 'exupery-core-dev'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { $$ as cmd_log_error } from "exupery-resources/dist/actions/log_error"

export const $$ = (
): _easync.Unguaranteed_Procedure_Context<_eb.Error> => {
    return _easync.command.unguaranteed.initialize(

    ).execute(() => cmd_log_error(
        _ea.array_literal([
            "The 'seal' command needs to be implemented"
        ]),
    )).throw_exception({
        'exit code': 1,
    })
}


// import * as _out from "../temp/temp_unmashall_result_types"

// import { impure } from "pareto-standard-operations"
// import { $ as load_astn_document } from "../queries/load_astn_document"

// const op = {
// }

// export const $: (
//     $: null,
//     $p: {
//         // 'path': string,
//     }
// ) => void = ($, $p) => {


//     _eb.run_program(() => {
//         return ($i) => {
//             return ($) => {
//                 $.arguments.__get_element_at(0).transform(
//                     ($) => {
//                         const instance_path = $
//                         _ea.cc(
//                             _er.temp_resources.fs['read file sync'](instance_path, true),
//                             ($) => {
//                                 switch ($[0]) {
//                                     case 'success': return _ea.ss($, ($) => {
//                                         _ea.cc(
//                                             load_astn_document(
//                                                 $,
//                                                 {
//                                                     'file path': instance_path,
//                                                 }
//                                             ),
//                                             ($) => {
//                                                 switch ($[0]) {
//                                                     case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
//                                                         switch ($[0]) {
//                                                             case 'no schema file': return _ea.ss($, ($) => {
//                                                                 $i.stdout.data(`No schema file found: ${$}\n`)
//                                                             })
//                                                             case 'schema error': return _ea.ss($, ($) => {
//                                                                 $i.stdout.data(`Schema error: ${$}\n`)
//                                                             })
//                                                             case 'parse error': return _ea.ss($, ($) => {
//                                                                 $i.stdout.data(`Parse error: ${$}\n`)
//                                                             })

//                                                             default: return _ea.au($[0])
//                                                         }
//                                                     }))
//                                                     case 'unmarshalled': return _ea.ss($, ($) => {

//                                                         $i.stdout.data(`Sealed\n`)
//                                                     })
//                                                 }
//                                             }
//                                         )
//                                     })
//                                     case 'error': return _ea.ss($, ($) => {
//                                         $i.stderr.data(`Could not read file: ${$}\n`)
//                                     })
//                                 }
//                             }
//                         )
//                     },
//                     () => {
//                         $i.stderr.data("Please provide the path to the ASTN file to be sealed.\n")
//                     }
//                 )
//             }

//         }
//     })
// }