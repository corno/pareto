//core
import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'

import { $$ as p_write_to_file } from "pareto-fountain-pen/dist/procedures/write_to_file"
import * as temp_astn_to_fp from "../temp_serialize_target_ast"

//data
import { $ as poormans_modules } from "../temp/temporary_schemas/all"

//data types
import * as d_module from "../generated/interface/schemas/module/data_types/target"
import * as d_fp_temp_types from "pareto-fountain-pen/dist/procedures/temp_types"

//resolvers
import * as r_module from "../resolvers/module"

//marshall
import * as m_module from "../generated/implementation/schemas/module/marshall"

const path = "./out/serialized"

export const $$: _eb.Unguaranteed_Main_Initializer = ($) => {
    return _easync.up.dictionary<_eb.Error, d_fp_temp_types.File_Error>(
        poormans_modules.map(($, key) => p_write_to_file(
            {
                'block': temp_astn_to_fp.Document(
                    m_module.Module(
                        r_module.Module(
                            $,
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
                    ),
                    {
                        'style': ['verbose', null]
                    }
                ),
                'directory path': path,
                'filename': `${key}.astn`,
                'indentation': "    ",
                'newline': "\n"
            }
        )),
        ($) => ({
            'exit code': 1
        })

    )


}