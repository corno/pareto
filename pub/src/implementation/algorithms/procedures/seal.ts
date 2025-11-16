import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import { Signature } from "../../../interface/algorithms/procedures/seal"

import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

export type Resources = {
    'commands': {
        'log error': _et.Command<d_log_error.Parameters, null>
    }
}

export const $$: _et.Command_Procedure<d_main.Parameters, d_main.Error, Resources> = ($r) => ($p) => _easync.p.action(
    _easync.pi.u(
        () => {
            return _easync.__create_procedure_promise(
                {
                    'execute': (on_success, on_error) => {
                        on_error(null)
                    }
                }
            )
        },
        () => ({
            'exit code': 1
        }),
        _easync.eh(
            $r.commands['log error'],
            ($) => ({
                'lines': _ea.array_literal(["The seal procedure is not implemented yet"])
            }),
            null,
        ),
    ),
    _easync.uq.fixed(null),
    null,
)