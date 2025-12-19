import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

//data

import { $ as poormans_modules } from "../../temp/temporary_schemas/all"

//interface

export type Package_Error =
    | ['could not log', null]
    | ['could not remove interface', null]
    | ['could not remove implementation', null]
    | ['could not write interface', null]
    | ['could not write implementation', null]
    | ['could not copy generic implementation', null]
    | ['could not copy core interface', null]

import { Signature } from "../../interface/algorithms/procedures/compile"

export type Query_Resources = null

export type Command_Resources = {
    'copy': _et.Command<d_copy.Error, d_copy.Parameters>
    'log': _et.Command<null, d_log.Parameters>
    'log error': _et.Command<null, d_log_error.Parameters>
    'make directory': _et.Command<d_make_directory.Error, d_make_directory.Parameters>
    'remove': _et.Command<d_remove.Error, d_remove.Parameters>
    'write to directory': _et.Command<d_write_to_directory.Directory_Error, d_write_to_directory.Directory_Parameters>
}

//dependencies

import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/target"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/target"
import * as d_main from "exupery-resources/dist/interface/temp_main"

import * as d_remove from "exupery-resources/dist/interface/generated/pareto/schemas/remove/data_types/source"
import * as d_copy from "exupery-resources/dist/interface/generated/pareto/schemas/copy/data_types/source"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_to_directory from "../../modules/pareto-fountain-pen-directory/interface/temp_types"

import * as r_pareto_module from "../../temp/resolvers/module"

import * as t_pareto_module_to_fountain_pen_block__implementation from "../transformations/module/temp_typescript_implementation"
import * as t_pareto_module_to_fountain_pen_block__interface from "../transformations/module/temp_typescript_interface"

import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/path/path"

import * as r_context_path from "exupery-resources/dist/implementation/refiners/context_path/text"


export const $$: _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr, $qr) => [

        $cr.log.execute(
            {
                'lines': _ea.list_literal([`generating...`])
            },
            ($) => ({
                'exit code': 1
            })
        ),

        _easync.p.dictionary.parallel(
            poormans_modules,
            ($, key) => {

                const interface_module_path = t_path_to_path.create_node_path(r_context_path.Context_Path(`./out/source_code/${key}`), `interface`)
                const implementation_module_path = t_path_to_path.create_node_path(r_context_path.Context_Path(`./out/source_code/${key}`), `implementation`)

                return [

                    //remove old implementation files
                    $cr.remove.execute(
                        {
                            'path': implementation_module_path,
                            'error if not exists': false,
                        },
                        ($) => ['could not remove implementation', null]
                    ),

                    //remove old interface files
                    $cr.remove.execute(
                        {
                            'path': interface_module_path,
                            'error if not exists': false,
                        },
                        ($) => ['could not remove interface', null]
                    ),

                    //write new interface files
                    $cr['write to directory'].execute(
                        {
                            'path': interface_module_path,
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
                            'indentation': "    ",
                            'newline': "\n",
                            'remove before creating': true,
                        },
                        ($) => ['could not write interface', null]
                    ),

                    //write new implementation files
                    $cr['write to directory'].execute(
                        {
                            'path': implementation_module_path,
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
                            'indentation': "    ",
                            'newline': "\n",
                            'remove before creating': true,
                        },
                        ($) => ['could not write implementation', null]
                    ),

                    //copy generic implementation files
                    $cr.copy.execute(
                        {
                            'source': t_path_to_path.create_node_path(r_context_path.Context_Path(`./pub/src/implementation/generated/pareto`), `generic`),
                            'target': t_path_to_path.create_node_path(t_path_to_path.node_path_to_context_path(implementation_module_path), `generic`),
                            'options': {
                                'recursive': _ea.set(true),
                                'force': _ea.not_set(),
                                'errorOnExist': _ea.not_set(),
                            }
                        },
                        ($) => ['could not copy generic implementation', null]
                    ),

                    //copy core interface files
                    $cr.copy.execute(
                        {
                            'source': t_path_to_path.create_node_path(r_context_path.Context_Path(`./pub/src/interface/generated/pareto`), `core`),
                            'target': t_path_to_path.create_node_path(t_path_to_path.node_path_to_context_path(interface_module_path), `core`),
                            'options': {
                                'recursive': _ea.set(true),
                                'force': _ea.not_set(),
                                'errorOnExist': _ea.not_set(),
                            }
                        },
                        ($) => ['could not copy core interface', null]
                    ),


                    //log
                    $cr.log.execute(
                        {
                            'lines': _ea.list_literal([`generated package: ${key}`])
                        },
                        ($): Package_Error => ['could not log', null]
                    ),
                ]
            },
            ($) => ({
                'exit code': 1
            })
        )
    ]
)