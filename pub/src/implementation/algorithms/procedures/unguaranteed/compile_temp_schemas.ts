//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _eb from 'exupery-core-bin'
import * as _et from 'exupery-core-types'

//data
import { $ as poormans_modules } from "../../../../temp/temporary_schemas/all"

import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/target"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/target"

import * as d_remove from "exupery-resources/dist/interface/generated/pareto/schemas/remove/data_types/source"
import * as d_copy from "exupery-resources/dist/interface/generated/pareto/schemas/copy/data_types/source"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

import * as r_pareto_module from "../../../../temp/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block__implementation from "../../transformations/module/temp_typescript_implementation"
import * as t_pareto_module_to_fountain_pen_block__interface from "../../transformations/module/temp_typescript_interface"



import { $$ as p_fp_write_to_directory } from "pareto-fountain-pen/dist/implementation/algorithms/procedures/unguaranteed/write_to_directory"


import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/compile"


export type Resources = {
    'procedures': {
        'remove': _et.Unguaranteed_Procedure<d_remove.Parameters, d_remove.Error, null>
        'make directory': _et.Unguaranteed_Procedure<d_make_directory.Parameters, d_make_directory.Error, null>
        'write file': _et.Unguaranteed_Procedure<d_write_file.Parameters, d_write_file.Error, null>
        'log': _et.Guaranteed_Procedure<d_log.Parameters, null>
        'log error': _et.Guaranteed_Procedure<d_log_error.Parameters, null>
        'copy': _et.Unguaranteed_Procedure<d_copy.Parameters, d_copy.Error, null>
    }
}

export const $$: _et.Unguaranteed_Procedure<_eb.Parameters, _eb.Error, Resources> = ($p, $r) => {
    $p.arguments
    return _easync.up.sequence([

        _easync.upi.g<d_log.Parameters, _eb.Error, null>(
            $r.procedures.log,
            null,
        )(
            {
                'lines': _ea.array_literal([`generating...`])
            },
            null,
        ),

        _easync.up.dictionary<_eb.Error, null>(
            poormans_modules.map(($, key) => {

                const interface_module_path = `./out/source_code/${key}/interface/`
                const implementation_module_path = `./out/source_code/${key}/implementation/`

                return _easync.up.sequence<null>([

                    _easync.upi.g<d_log.Parameters, null, null>(
                        $r.procedures['log'],
                        null,
                    )(
                        {
                            'lines': _ea.array_literal([`generating: ${key}`])
                        },
                        null,
                    ),

                    //FIX do this in parallel
                    _easync.up.sequence([

                        _easync.upi.u(
                            $r.procedures.remove,
                            ($) => null,
                            _easync.eh(
                                $r.procedures['log error'],
                                ($) => {
                                    return ({
                                        'lines': _ea.array_literal([`Could not remove old generated implementation files, ${$[0]}`])
                                    })
                                },
                                null,
                            )
                        )(
                            {
                                'path': {
                                    'path': `${implementation_module_path}`,
                                    'escape spaces in path': true,
                                },
                                'error if not exists': false,
                            },
                            null,
                        ),

                        _easync.upi.u(
                            $r.procedures.remove,
                            ($) => null,
                            _easync.eh(
                                $r.procedures['log error'],
                                ($) => {
                                    return ({
                                        'lines': _ea.array_literal([`Could not remove old generated ihterface files`])
                                    })
                                },
                                null,
                            ),
                        )(
                            {
                                'path': {
                                    'path': `${interface_module_path}`,
                                    'escape spaces in path': true,
                                },
                                'error if not exists': false,
                            },
                            null,
                        ),

                    ]),

                    //FIX do this in parallel!
                    _easync.up.sequence([
                        //WARNING! first write the generated source files,
                        //then copy the static files, 
                        //otherwise the static files will be deleted again!

                        _easync.upi.u(
                            p_fp_write_to_directory,
                            ($) => null,
                        )(
                            {
                                'directory': t_pareto_module_to_fountain_pen_block__interface.Module(
                                    r_pareto_module.Module(
                                        $.module,
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
                            },
                            $r,
                        ),
                        _easync.upi.u(
                            p_fp_write_to_directory,
                            ($) => null,
                        )(
                            {
                                'directory': t_pareto_module_to_fountain_pen_block__implementation.Module(
                                    r_pareto_module.Module(
                                        $.module,
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
                            },
                            $r,
                        ),


                        _easync.upi.u(
                            $r.procedures.copy,
                            () => null,
                            _easync.eh(
                                $r.procedures['log error'],
                                ($) => ({
                                    'lines': _ea.array_literal([`Could not copy generic implementation directory`])
                                }),
                                null,
                            )
                        )(
                            {
                                'source': {
                                    'path': "./pub/src/implementation/generated/pareto/generic",
                                    'escape spaces in path': true,
                                },
                                'target': {
                                    'path': implementation_module_path + "/generic",
                                    'escape spaces in path': true,
                                },
                                'options': {
                                    'recursive': _ea.set(true),
                                    'force': _ea.not_set(),
                                    'errorOnExist': _ea.not_set(),
                                }
                            },
                            null,
                        ),


                        _easync.upi.u(
                            $r.procedures.copy,
                            () => null,
                            _easync.eh(
                                $r.procedures['log error'],
                                ($) => ({
                                    'lines': _ea.array_literal([`Could not copy core interface directory`])
                                }),
                                null,
                            )
                        )(
                            {
                                'source': {
                                    'path': "./pub/src/interface/generated/pareto/core",
                                    'escape spaces in path': true,
                                },
                                'target': {
                                    'path': interface_module_path + "/core",
                                    'escape spaces in path': true,
                                },
                                'options': {
                                    'recursive': _ea.set(true),
                                    'force': _ea.not_set(),
                                    'errorOnExist': _ea.not_set(),
                                }
                            },
                            null,
                        ),
                    ]),


                ])
            }),
            ($) => ({
                'exit code': 1
            })
        )

    ])
}