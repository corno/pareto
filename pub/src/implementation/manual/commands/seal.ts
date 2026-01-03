import * as _p from 'pareto-core-command'

import * as signatures from "../../../interface/signatures"

export const $$: signatures.commands.seal = _p.command_procedure(
    ($p, $cr, $qr) => [
        $cr['log error'].execute(
            {
                'lines': _p.list.literal([`IMPLEMENT ME: seal`])
            },
            ($) => {
                return {
                    'exit code': 1
                }
            }
        )
    ]
)