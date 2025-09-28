//core
import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'

import * as wtfs from "pareto-fountain-pen/dist/commands/write_to_file_system"
import * as temp_astn_to_fp from "astn/dist/transformations/target/fountain_pen_block"

//data
import { $ as poormans_modules } from "../temp/temporary_schemas/all"

//data types
import * as d_module from "../generated/interface/schemas/module/data_types/target"

//resolvers
import * as r_module from "../resolvers/module"

//marshall
import * as m_module from "../generated/implementation/schemas/module/marshall"

export const $$: _eb.Unsafe_Program_Main = ($) => {
    const path = "./out/serialized"

    return _easync.command.unsafe['create result']<number>(

    ).do_dictionary(
        poormans_modules.map(($, key) => {
            const generate_and_write_to_disk = (
                $: d_module.Module<_ed.Source_Location>,
                $p: {
                    'path': string,
                    'key': string,
                }
            ) => wtfs.File(
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
                    'directory path': $p.path,
                    'filename': `${$p.key}.astn`,
                    'indentation': "    ",
                    'newline': "\n"
                }
            )


            return generate_and_write_to_disk(
                $,
                {
                    'path': path,
                    'key': key,
                }
            )
        }),
        ($) => 1
    )


}