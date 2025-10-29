//core
import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'

import { $$ as p_write_to_file } from "pareto-fountain-pen/dist/implementation/procedures/unguaranteed/write_to_file"
import * as temp_astn_to_fp from "astn/dist/implementation/transformations/sealed_target/fountain_pen_block"

//data
import { $ as poormans_modules } from "../../../temp/temporary_schemas/all"

//data types
import * as d_fp_temp_types from "pareto-fountain-pen/dist/temp/temp_types"

//resolvers
import * as r_module from "../../../temp/resolvers/module"

//marshall
import * as m_module from "../../../implementation/generated/pareto/schemas/module/marshall"
import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/serialize_schemas"


const path = "../out/serialized"

export const $$: _eb.Unguaranteed_Main_Initializer = ($) => {
    return _easync.up.dictionary<_eb.Error, d_fp_temp_types.File_Error>(
        poormans_modules.map(($, key) => p_write_to_file(
            {
                'group': temp_astn_to_fp.Document(
                    _ea.panic("SDFSDF"),
                    // m_module.Module(
                    //     r_module.Module(
                    //         $,
                    //         {
                    //             'parameters': {
                    //                 'lookups': null,
                    //                 'values': null,
                    //             },
                    //             'location 2 string': _ed.location_to_string
                    //         }
                    //     ),
                    //     {
                    //         'value serializers': {
                    //             'boolean': ($) => $ ? "true" : "false",
                    //             'default number': () => "FIXME NUMBER",
                    //             'custom numbers': null
                    //         }
                    //     }
                    // ),
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