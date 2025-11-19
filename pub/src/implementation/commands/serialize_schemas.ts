//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

//data types
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

export type Query_Resources = null

export type Command_Resources = {
    'write file': _et.Command<d_write_file.Error, d_write_file.Parameters>
}


import { Signature } from "../../interface/algorithms/procedures/serialize_schemas"

//data
import { $ as poormans_modules } from "../../temp/temporary_schemas/all"

import * as serialize from "../generated/pareto/generic/serialize"


//resolvers
import * as r_module from "../../temp/resolvers/module"

//marshall
import * as m_module from "../generated/pareto/schemas/module/marshall"

export const $$: _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.dictionary.parallel(
            poormans_modules,
            ($, key) => [

                $cr['write file'].execute(
                    {
                        'path': {
                            'escape spaces in path': true,
                            'path': `${$['target path']}/module.astn`
                        },
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