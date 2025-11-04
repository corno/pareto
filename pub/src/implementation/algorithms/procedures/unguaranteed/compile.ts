//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'

//data
import { $ as poormans_modules } from "../../../../temp/temporary_schemas/all"

import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/target"

import * as r_pareto_module from "../../../../temp/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block__implementation from "../../transformations/module/temp_typescript_implementation"
import * as t_pareto_module_to_fountain_pen_block__interface from "../../transformations/module/temp_typescript_interface"



import { $$ as p_fp_write_to_directory } from "pareto-fountain-pen/dist/implementation/procedures/unguaranteed/write_to_directory"
import { $$ as p_log } from "exupery-resources/dist/implementation/procedures/guaranteed/log"
import { $$ as p_log_error } from "exupery-resources/dist/implementation/procedures/guaranteed/log_error"
import { $$ as p_copy_file } from "exupery-resources/dist/implementation/procedures/unguaranteed/copy"
import { $$ as p_remove_node } from "exupery-resources/dist/implementation/procedures/unguaranteed/remove"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/compile"



const p_copy_interface_file_and_log_error: _easync.Unguaranteed_Procedure_Initializer<Copy_Parameters, null> = ($p) => _easync.upi.u(
    p_copy_file,
    () => null,
    _easync.eh(
        p_log_error,
        ($) => ({
            'lines': _ea.array_literal([`Could not copy interface file: ${$p.file}`])
        })
    )
)({
    'source': {
        'path': "./pub/src/interface/generated/pareto/core/" + $p.file,
        'escape spaces in path': true,
    },
    'target': {
        'path': $p['module path'] + "/core/"+ $p.file,
        'escape spaces in path': true,
    },
    'options': {
        'recursive': _ea.not_set(),
        'force': _ea.not_set(),
        'errorOnExist': _ea.not_set(),
    }
})


type Copy_Parameters = {
    'file': string,
    'module path': string,
}

const p_copy_implementation_file_and_log_error: _easync.Unguaranteed_Procedure_Initializer<Copy_Parameters, null> = ($p) => _easync.upi.u(
    p_copy_file,
    () => null,
    _easync.eh(
        p_log_error,
        ($) => ({
            'lines': _ea.array_literal([`Could not copy implementation file: ${$p.file}`])
        })
    )
)({
    'source': {
        'path': "./pub/src/implementation/generated/pareto/generic/" + $p.file,
        'escape spaces in path': true,
    },
    'target': {
        'path': $p['module path'] + "/generic/" + $p.file,
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

                const interface_module_path = `./out/source_code/${key}/interface/`
                const implementation_module_path = `./out/source_code/${key}/implementation/`

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
                                'path': `${implementation_module_path}`,
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
                                'path': `${interface_module_path}`,
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
                            'directory': t_pareto_module_to_fountain_pen_block__interface.Module(
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
                            'path': interface_module_path,
                            'indentation': "    ",
                            'newline': "\n",
                            'remove before creating': true,
                        }),
                        _easync.upi.u(
                            p_fp_write_to_directory,
                            ($) => null,
                        )({
                            'directory': t_pareto_module_to_fountain_pen_block__implementation.Module(
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
                            'path': implementation_module_path,
                            'indentation': "    ",
                            'newline': "\n",
                            'remove before creating': true,
                        }),


                        p_copy_implementation_file_and_log_error({
                            'module path': implementation_module_path,
                            'file': "resolve.ts"
                        }),
                        p_copy_implementation_file_and_log_error({
                            'module path': implementation_module_path,
                            'file': "unmarshall.ts"
                        }),
                        p_copy_implementation_file_and_log_error({
                            'module path': implementation_module_path,
                            'file': "serialize.ts"
                        }),


                        p_copy_interface_file_and_log_error({
                            'module path': interface_module_path,
                            'file': "resolve.ts"
                        }),
                        p_copy_interface_file_and_log_error({
                            'module path': interface_module_path,
                            'file': "astn_target.ts"
                        }),
                        p_copy_interface_file_and_log_error({
                            'module path': interface_module_path,
                            'file': "astn_source.ts"
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