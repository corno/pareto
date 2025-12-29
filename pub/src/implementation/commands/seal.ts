import * as _pc from 'pareto-core-command'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Query_Resources = null

export type Command_Resources = {
    'log error': resources_exupery.commands.log_error
}

export const $$: _pi.Command_Procedure<resources_exupery.commands.main, Command_Resources, Query_Resources> = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        $cr['log error'].execute(
            {
                'lines': _pinternals.list_literal([`IMPLEMENT ME: seal`])
            },
            ($) => {
                return {
                    'exit code': 1
                }
            }
        )
    ]
)