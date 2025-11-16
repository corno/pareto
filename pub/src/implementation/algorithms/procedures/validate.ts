//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'
import * as _et from 'exupery-core-types'

//data
import { $ as poormans_modules } from "../../../temp/temporary_schemas/all"


import { Signature } from "../../../interface/algorithms/procedures/validate"

export type Resources = null

export const $$: _et.Command_Procedure<_eb.Parameters, _eb.Error, Resources> = (
) => ($p) => _easync.p.dictionary(
    poormans_modules.map(($, key) => {
        const path = "../../out/source_code/src/generated"

        const module_path = `${path}/${key}`
        return _easync.p.sequence([
            // p_log_error(
            //     {
            //         'lines': _ea.array_literal(["IMPLEMENT ME"])
            //     },
            //     null,
            // )
        ])


    }),
    ($) => ({
        'exit code': 1
    })
)