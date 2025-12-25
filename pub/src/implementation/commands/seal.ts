import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Query_Resources = null

export type Command_Resources = {
    'log error': resources_exupery.commands.log_error
}

export const $$: _et.Command_Procedure<resources_exupery.commands.main, Command_Resources, Query_Resources> = _easync.create_command_procedure(
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