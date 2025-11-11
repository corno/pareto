import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/seal"

import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"

export type Resources = {
    'procedures': {
        'log error': _easync.Guaranteed_Procedure<d_log_error.Parameters, null>
    }
}

export const $$: _easync.Unguaranteed_Procedure<_eb.Parameters, _eb.Error, Resources> = ($p, $r) => _easync.up.action(
    _easync.upi.u(
        () => {
            return _easync.__create_unguaranteed_procedure(
                {
                    'execute': (on_success, on_exception) => {
                        on_exception(null)
                    }
                }
            )
        },
        () => ({
            'exit code': 1
        }),
        _easync.eh(
            $r.procedures['log error'],
            ($) => ({
                'lines': _ea.array_literal(["The seal procedure is not implemented yet"])
            }),
            null,
        ),
    ),
    _easync.uq.fixed(null),
    null,
)