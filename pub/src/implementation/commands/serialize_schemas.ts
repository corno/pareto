//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

//data types
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"

export type Query_Resources = null

export type Command_Resources = {
    'write file': _et.Command<d_write_file.Error, d_write_file.Parameters>
}

//data
import { $ as poormans_modules } from "../../data/temporary_schemas/all"



//dependencies
import * as r_module from "../temp/resolvers/module"
import * as m_module from "../generated/pareto/schemas/module/marshall"
import * as serialize from "../generated/pareto/generic/serialize"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"

export const $$: _et.Command_Procedure<_et.Command<d_main.Error, d_main.Parameters>, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.dictionary.parallel(
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
                                        'location 2 string': _ed.location_to_string
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