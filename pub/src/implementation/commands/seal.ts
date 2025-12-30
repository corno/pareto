import * as _pc from 'pareto-core-command'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../interface/signatures"

export const $$: signatures.commands.seal = _pc.create_command_procedure(
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