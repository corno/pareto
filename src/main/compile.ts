//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'

//data
import { $ as poormans_modules } from "../temp/temporary_schemas/all"

import * as r_pareto_module from "../resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformations/module/temp_typescript"

import { Directory as cmd_fs_write_directory_to_filesystem } from "pareto-fountain-pen/dist/commands/write_to_file_system"
import { $$ as cmd_log_error } from "exupery-resources/dist/commands/log_error"
import { $$ as cmd_copy_file } from "exupery-resources/dist/commands/copy"

const copy = (source: string, target: string,) => {
    return cmd_copy_file(
        source,
        target,
        true,
        {
        }
    ).process_exception(
        ($) => cmd_log_error(_ea.array_literal([`Could not copy static file: ${source}`])),
        ($) => null
    )
}

export const $$ = (
) => _easync.command.unsafe['do nothing']<number>(

).then_dictionary(
    poormans_modules.map(($, key) => {
        const path = "./out/source_code/src/generated"

        const module_path = `${path}/${key}`
        return _easync.command.unsafe['do nothing']<null>().then_multiple(
            _ea.array_literal([
                copy("./src/generated/implementation/generic/resolve.ts", module_path + "/implementation/generic/resolve.ts"),
                copy("./src/generated/implementation/generic/unmarshall.ts", module_path + "/implementation/generic/unmarshall.ts"),
                copy("./src/generated/interface/core/resolve.ts", module_path + "/interface/core/resolve.ts"),
                copy("./src/generated/interface/core/astn_target.ts", module_path + "/interface/core/astn_target.ts"),
                copy("./src/generated/interface/core/astn_source.ts", module_path + "/interface/core/astn_source.ts"),
                cmd_fs_write_directory_to_filesystem(
                    t_pareto_module_to_fountain_pen_block.Module(
                        r_pareto_module.Module(
                            $,
                            {
                                'parameters': {
                                    'lookups': null,
                                    'values': null,
                                },
                                'location 2 string': _ed.location_to_string
                            }
                        ),
                    ),
                    {
                        'path': module_path,
                        'indentation': "    ",
                        'newline': "\n",
                        'remove before creating': true,
                    }
                ).process_exception(
                    ($) => cmd_log_error(_ea.array_literal([`Could not write generated files`])),
                    ($) => 1
                )
            ]),
            () => null,
        )

    }),
    ($) => 1
)