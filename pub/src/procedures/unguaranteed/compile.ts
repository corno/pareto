//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

//data
import { $ as poormans_modules } from "../../temp/temporary_schemas/all"

import * as d_log from "exupery-resources/dist/generated/interface/schemas/log/data_types/target"

import * as r_pareto_module from "../../temp/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block from "../../transformations/module/temp_typescript"



import { $$ as p_fp_write_to_directory } from "pareto-fountain-pen/dist/procedures/unguaranteed/write_to_directory"
import { $$ as p_log } from "exupery-resources/dist/procedures/guaranteed/log"
import { $$ as p_log_error } from "exupery-resources/dist/procedures/guaranteed/log_error"
import { $$ as p_copy_file } from "exupery-resources/dist/procedures/unguaranteed/copy"
import { $$ as p_remove_node } from "exupery-resources/dist/procedures/unguaranteed/remove"

type Copy_Parameters = {
    'file': string,
    'module path': string,
}

const p_copy_and_log_error: _easync.Unguaranteed_Procedure_Initializer<Copy_Parameters, null> = ($p) => _easync.upi.u(
    p_copy_file,
    () => null,
    _easync.eh(
        p_log_error,
        ($) => ({
            'lines': _ea.array_literal([`Could not copy static file: ${$p.file}`])
        })
    )
)({
    'source': {
        'path': "./pub/src/generated/" + $p.file,
        'escape spaces in path': true,
    },
    'target': {
        'path': $p['module path'] + $p.file,
        'escape spaces in path': true,
    },
    'options': {
        'recursive': _ea.not_set(),
        'force': _ea.not_set(),
        'errorOnExist': _ea.not_set(),
    }
})

export const $$: _eb.Unguaranteed_Main_Initializer = () => {
    return _easync.up.sequence([

        _easync.upi.g<d_log.Parameters, _eb.Error>(
            p_log,
        )({
            'lines': _ea.array_literal([`generating...`])
        }),

        _easync.up.dictionary<_eb.Error, null>(
            poormans_modules.map(($, key) => {
                const path = "./out/source_code/src/generated"

                const module_path = `${path}/${key}`

                return _easync.up.sequence<null>([

                    _easync.upi.g<d_log.Parameters, null>(
                        p_log,
                    )({
                        'lines': _ea.array_literal([`generating: ${key}`])
                    }),

                    //FIX do this in parallel
                    _easync.up.sequence([

                        _easync.upi.u(
                            p_remove_node,
                            ($) => null,
                            _easync.eh(
                                p_log_error,
                                ($) => {
                                    return ({
                                        'lines': _ea.array_literal([`Could not remove old generated implementation files, ${$[0]}`])
                                    })
                                },
                            )
                        )({
                            'path': {
                                'path': `${module_path}/implementation`,
                                'escape spaces in path': true,
                            },
                            'error if not exists': false,
                        }),

                        _easync.upi.u(
                            p_remove_node,
                            ($) => null,
                            _easync.eh(
                                p_log_error,
                                ($) => {
                                    return ({
                                        'lines': _ea.array_literal([`Could not remove old generated ihterface files`])
                                    })
                                },
                            )
                        )({
                            'path': {
                                'path': `${module_path}/interface`,
                                'escape spaces in path': true,
                            },
                            'error if not exists': false,
                        }),

                    ]),

                    //FIX do this in parallel!
                    _easync.up.sequence([
                        //WARNING! first write the generated source files,
                        //then copy the static files, 
                        //otherwise the static files will be deleted again!

                        _easync.upi.u(
                            p_fp_write_to_directory,
                            ($) => null,
                        )({
                            'directory': t_pareto_module_to_fountain_pen_block.Module(
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
                            'path': module_path,
                            'indentation': "    ",
                            'newline': "\n",
                            'remove before creating': true,
                        }),


                        p_copy_and_log_error({
                            'module path': module_path,
                            'file': "/implementation/generic/resolve.ts"
                        }),
                        p_copy_and_log_error({
                            'module path': module_path,
                            'file': "/implementation/generic/unmarsh.b..ts"
                        }),
                        p_copy_and_log_error({
                            'module path': module_path,
                            'file': "/interface/core/resolve.ts"
                        }),
                        p_copy_and_log_error({
                            'module path': module_path,
                            'file': "/interface/core/astn_target.ts"
                        }),
                        p_copy_and_log_error({
                            'module path': module_path,
                            'file': "/interface/core/astn_source.ts"
                        }),
                    ]),


                ])
            }),
            ($) => ({
                'exit code': 1
            })
        )

    ])
}