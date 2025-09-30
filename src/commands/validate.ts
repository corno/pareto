//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

//data
import { $ as poormans_modules } from "../temp/temporary_schemas/all"

import * as r_pareto_module from "../resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../transformations/module/temp_typescript"

import { Directory as cmd_fs_write_directory_to_filesystem } from "pareto-fountain-pen/dist/commands/write_to_file_system"
import { $$ as cmd_log } from "exupery-resources/dist/commands/log"
import { $$ as cmd_log_error } from "exupery-resources/dist/commands/log_error"
import { $$ as cmd_remove_node } from "exupery-resources/dist/commands/remove"

export const $$: _eb.Run_Unsafe_Program_Main = (
    $
) => _easync.command.unsafe.initialize<_eb.Error>(

).then_dictionary(
    poormans_modules.map(($, key) => {
        const path = "./out/source_code/src/generated"

        const module_path = `${path}/${key}`
        return _easync.command.unsafe.initialize<null>(
        ).then_multiple(
            _ea.array_literal([
                cmd_log(_ea.array_literal([`cleaning: ${key}`])).cast_to_unsafe(),
                cmd_remove_node(
                    `${module_path}/implementation`,
                    true,
                    {}
                ).process_exception(
                    ($) => {
                        return cmd_log_error(_ea.array_literal([`Could not remove old generated implementation files`]))
                    },
                    ($) => null
                ),
                cmd_remove_node(
                    `${module_path}/interface`,
                    true,
                    {}
                ).process_exception(
                    ($) => {
                        return cmd_log_error(_ea.array_literal([`Could not remove old generated interface files`]))
                    },
                    ($) => null
                )
            ]),
            () => null,
        ).then_multiple(
            _ea.array_literal([
                cmd_log(_ea.array_literal([`generating: ${key}`])).cast_to_unsafe(),
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
                    ($) => ({
                        'exit code': 1
                    })
                )
            ]),
            () => null,
        )

    }),
    ($) => ({
        'exit code': 1
    })
)