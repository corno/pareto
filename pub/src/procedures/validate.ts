//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

//data
import { $ as poormans_modules } from "../temp/temporary_schemas/all"

import * as r_pareto_module from "../resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformations/module/temp_typescript"

import { $$ as p_fp_write_to_directory } from "pareto-fountain-pen/dist/procedures/write_to_directory"
import { $$ as p_log } from "exupery-resources/dist/procedures/log"
import { $$ as p_log_error } from "exupery-resources/dist/procedures/log_error"
import { $$ as p_remove_node } from "exupery-resources/dist/procedures/remove"

export const $$: _eb.Unguaranteed_Main_Initializer = (
    $p
) => _easync.up.dictionary(
    poormans_modules.map(($, key) => {
        const path = "./out/source_code/src/generated"

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