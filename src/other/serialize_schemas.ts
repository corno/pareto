//core
import * as _ea from 'exupery-core-alg'
import * as _er from 'exupery-core-resources'
import * as _ed from 'exupery-core-data'

import * as wtd from "pareto-fountain-pen/dist/other/write_to_disk"
import * as temp_astn_to_fp from "astn/dist/transformations/target/fountain_pen_block"

//data
import { $ as poormans_modules } from "../temporary_schemas/all"

//data types
import * as d_module from "../generated/interface/schemas/module/data_types/unresolved"

//resolvers
import * as r_module from "../resolvers/module"


//marshall
import * as m_module from "../generated/implementation/schemas/module/marshall"

export const generate_and_write_to_disk = (
    $: d_module.Module<_ed.Source_Location>,
    $p: {
        'path': string,
        'key': string,
    }
) => {
    wtd.File(
        temp_astn_to_fp.Document(
            m_module.Module(
                r_module.r_Module(
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

}

export const serialize_schemas: (
    $: null,
    $p: {
        'path': string,
    }
) => void = ($, $p) => {

    poormans_modules.map(($, key) => {
        generate_and_write_to_disk(
            $,
            {
                'path': $p.path,
                'key': key,
            }
        )
    })


}