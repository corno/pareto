//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

import * as d_unmarshall_result from "../temp/temp_unmashall_result_types"

//transformations
import * as t_unmarshall_result_2_unmarshall_errors from "../transformations/unmarshall_result/unmarshall_errors"
import * as t_unmarshall_errors_to_fp from "../transformations/unmarshall_errors/fountain_pen"

import { $$ as p_fp_to_error_log } from "pareto-fountain-pen/dist/procedures/console_error"
import { $$ as p_console_log } from "exupery-resources/dist/procedures/log"


import { $$ as q_read_file } from "exupery-resources/dist/queries/read_file"
import { $$ as q_load_astn_file } from "../queries/load_pareto_file"

//operations
import { $$ as op_remove_first_element } from "pareto-standard-operations/dist/impure/list/remove_first_element"
import { $$ as op_remove_last_element } from "pareto-standard-operations/dist/impure/list/remove_last_element"


export const $$: _eb.Unguaranteed_Main_Initializer = (
    $p
) => {
    const instance_path = "./data/test/pareto_modules/pareto-json.astn"

    return _easync.up.action(
        p_fp_to_error_log,
        _easync.uq.u(
            q_load_astn_file,
            _easync.uq.fixed({
                'file path': instance_path,
            }),
            _easync.ut.g(($) => ({
                'block': t_unmarshall_errors_to_fp.Errors(
                    t_unmarshall_result_2_unmarshall_errors.Node($, null),
                    {
                        'document path': instance_path,
                        'line offset': 1,
                        'column offset': 1,
                    }
                ),
                'indentation': '  ',
            })),
            ($) => ({
                'exit code': 1
            }),
            _easync.eh(
                p_console_log,
                ($) => ({
                    'lines': _ea.array_literal([
                        _ea.cc($, ($): string => {
                            switch ($[0]) {
                                case 'no file': return _ea.ss($, ($) => "no file")
                                case 'document': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'no schema file': return _ea.ss($, ($) => "no schema file")
                                        case 'schema error': return _ea.ss($, ($) => "schema error")
                                        case 'parse error': return _ea.ss($, ($) => "parse error")
                                        default: return _ea.au($[0])
                                    }
                                }))
                                default: return _ea.au($[0])
                            }
                        })
                    ])
                })
            )
        )
    )
}