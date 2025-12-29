//core
import * as _pc from 'pareto-core-command'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'

import * as resources_exupery from "exupery-resources/dist/interface/resources"


export type Query_Resources = null

export type Command_Resources = {
    'write file': resources_exupery.commands.write_file
}


//data types
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"

//data
import { $ as poormans_modules } from "../../data/temporary_schemas/all"

//dependencies
import * as r_module from "../temp/resolvers/module"
import * as m_module from "../generated/pareto/schemas/module/marshall"
import * as serialize from "../generated/pareto/generic/serialize"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"

export const $$: _pi.Command_Procedure<resources_exupery.commands.main, Command_Resources, Query_Resources> = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        _pc.dictionary.parallel(
            poormans_modules,
            ($, key) => [

                $cr['write file'].execute(
                    {
                        'path': t_path_to_path.create_node_path(ds_path.Context_Path($['target path']), `module.astn`),
                        'data': serialize.Document(
                            m_module.Module(
                                r_module.Module(
                                    $.module,
                                    {
                                        'parameters': {
                                            'lookups': null,
                                            'values': null,
                                        },
                                        'location 2 string': _pinternals.location_to_string
                                    }
                                ),
                                {
                                    'value serializers': {
                                        'boolean': ($) => $ ? "true" : "false",
                                        'default number': () => "FIXME NUMBER",
                                        'custom numbers': null
                                    }
                                }
                            )
                        ),
                    },
                    ($) => $
                )
            ],
            ($) => ({
                'exit code': 1
            })

        )
    ]
)