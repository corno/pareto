//core
import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'

import * as wtfs from "pareto-fountain-pen/dist/actions/write_to_file_system"
import * as temp_astn_to_fp from "astn/dist/transformations/target/fountain_pen_block"

//data
import { $ as poormans_modules } from "../temp/temporary_schemas/all"

//data types
import * as d_module from "../generated/interface/schemas/module/data_types/target"

//resolvers
import * as r_module from "../resolvers/module"

//marshall
import * as m_module from "../generated/implementation/schemas/module/marshall"

export const $$: _eb.Run_Unsafe_Program_Main = ($) => {
    const path = "./out/serialized"

    return _easync.command.unsafe.initialize<_eb.Error>(
    ).execute_dictionary_unsafe(
        poormans_modules.map(($, key) => wtfs.File(
            temp_astn_to_fp.Document(
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
            {
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