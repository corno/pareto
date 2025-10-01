//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

//data
import { $ as poormans_modules } from "../temp/temporary_schemas/all"

import * as r_pareto_module from "../resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformations/module/temp_typescript"

import { Directory as cmd_fs_write_directory_to_filesystem } from "pareto-fountain-pen/dist/actions/write_to_file_system"
import { $$ as cmd_log } from "exupery-resources/dist/actions/log"
import { $$ as cmd_log_error } from "exupery-resources/dist/actions/log_error"
import { $$ as cmd_remove_node } from "exupery-resources/dist/actions/remove"

export const $$: _eb.Unguaranteed_Main = (
    $
) => _easync.command.unguaranteed.initialize<_eb.Error>(

).execute_dictionary_unguaranteed(
    poormans_modules.map(($, key) => {
        const path = "./out/source_code/src/generated"

        const module_path = `${path}/${key}`
        return _easync.command.unguaranteed.initialize<null>(
        ).execute_multiple_unguaranteed(
            _ea.array_literal([
            ]),
            () => null,
        ).execute_multiple_unguaranteed(
            _ea.array_literal([
            ]),
            () => null,
        )

    }),
    ($) => ({
        'exit code': 1
    })
)