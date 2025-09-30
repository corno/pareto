//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

import { $$ as read_file } from "exupery-resources/dist/queries/read_file"

//data
import * as t_ur_ue from "../transformations/unmarshall_result/unmarshall_errors"
import * as t_ue_fp from "../transformations/unmarshall_errors/fountain_pen"

import { Block as cmd_fp_to_error_log } from "pareto-fountain-pen/dist/commands/console_error"
import { $$ as cmd_console_log } from "exupery-resources/dist/commands/log"

import * as _out from "../temp/temp_unmashall_result_types"

import { $$ as load_astn_file } from "../queries/load_pareto_file"

import { $$ as op_remove_first_element } from "pareto-standard-operations/dist/impure/list/remove_first_element"
import { $$ as op_remove_last_element } from "pareto-standard-operations/dist/impure/list/remove_last_element"


export const $$: _eb.Run_Unsafe_Program_Main = (
) => {
    const instance_path = "./data/test/pareto_modules/pareto-json.astn"

    return load_astn_file(
        {
            'file path': instance_path,
        }
    ).process(
        ($) => _ea.cc($, ($) => {
            switch ($[0]) {
                case 'no file': return _ea.ss($, ($) => cmd_console_log(_ea.array_literal(["SDFSFD"])))
                case 'document': return _ea.ss($, ($) => cmd_console_log(_ea.array_literal(["SDFSFD"])))
                default: return _ea.au($[0])
            }
        }),
        ($) => ({
            'exit code': 1,
        }),
        ($) => cmd_fp_to_error_log(
            t_ue_fp.Errors(
                t_ur_ue.Node($, null),
                {
                    'document path': instance_path,
                    'line offset': 1,
                    'column offset': 1,
                }
            ),
            {
                'indentation': '  ',
            }
        ).cast_to_unsafe()
    )






    // q_read_file(
    //     instance_path, true
    // ).map_exception(($) => 1
    // ).execute_unsafe_command($ => _ea.cc(
    //     ,
    //     ($): _easync.Unsafe_Command_Result<number> => {
    //         switch ($[0]) {
    //             case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
    //                 switch ($[0]) {
    //                     case 'no schema file': return _ea.ss($, ($) => {
    //                         _ed.log_debug_message(`No schema file found: ${$}`)
    //                     })
    //                     case 'schema error': return _ea.ss($, ($) => {
    //                         _ed.log_debug_message(`Schema error: ${$}`)
    //                     })
    //                     case 'parse error': return _ea.ss($, ($) => {
    //                         _ed.log_debug_message(`Instance parse error: ${$.type[0]}`)
    //                     })

    //                     default: return _ea.au($[0])
    //                 }
    //             }))
    //             case 'unmarshalled': return _ea.ss($, ($) => {

    //                 write_to_console.Block(
    //                     t_ue_fp.Errors(
    //                         t_ur_ue.Node($, null),
    //                         {
    //                             'document path': instance_path,
    //                             'line offset': 1,
    //                             'column offset': 1,
    //                         }
    //                     ),
    //                     {
    //                         'indentation': '  ',
    //                         'channel': 'error'
    //                     }
    //                 )
    //             })
    //             default: return _ea.au($[0])
    //         }
    //     }
    // ))



}