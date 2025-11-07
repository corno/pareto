//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

//data
import { $ as poormans_modules } from "../../../../temp/temporary_schemas/all"

import * as r_pareto_module from "../../../../temp/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../../transformations/module/temp_typescript_implementation"

import { $$ as p_fp_write_to_directory } from "pareto-fountain-pen/dist/implementation/algorithms/procedures/unguaranteed/write_to_directory"
import { $$ as p_log } from "exupery-resources/dist/implementation/algorithms/procedures/guaranteed/log"
import { $$ as p_log_error } from "exupery-resources/dist/implementation/algorithms/procedures/guaranteed/log_error"
import { $$ as p_remove_node } from "exupery-resources/dist/implementation/algorithms/procedures/unguaranteed/remove"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/validate"


export const $$: _easync.Unguaranteed_Procedure_Initializer<_eb.Parameters, _eb.Error> = (
    $p
) => _easync.up.dictionary(
    poormans_modules.map(($, key) => {
        const path = "../../out/source_code/src/generated"

        const module_path = `${path}/${key}`
        return _easync.up.sequence([
            p_log_error({
                'lines': _ea.array_literal(["IMPLEMENT ME"])
            })
        ])
        

    }),
    ($) => ({
        'exit code': 1
    })
)