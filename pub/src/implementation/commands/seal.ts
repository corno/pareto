import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import { Signature } from "../../interface/algorithms/procedures/seal"

import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

export type Query_Resources = null

export type Command_Resources = {
        'log error': _et.Command<null, d_log_error.Parameters>
}

export const $$: _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        $cr['log error'].execute(
            {
                'lines': _ea.list_literal([`IMPLEMENT ME: seal`])
            },
            ($) => {
                return {
                    'exit code': 1
                }
            }
        )
    ]
)