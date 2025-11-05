//core
import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'

import { $$ as p_write_file } from "exupery-resources/dist/implementation/procedures/unguaranteed/write_file"
import * as serialize from "../../../generated/pareto/generic/serialize"
//data
import { $ as poormans_modules } from "../../../../temp/temporary_schemas/all"

//data types
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

//resolvers
import * as r_module from "../../../../temp/resolvers/module"

//marshall
import * as m_module from "../../../../implementation/generated/pareto/schemas/module/marshall"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/serialize_schemas"


const path = "./out/serialized"

export const $$: _eb.Unguaranteed_Main_Initializer = ($) => {
    return _easync.up.dictionary<_eb.Error, d_write_file.Errors>(
        poormans_modules.map(($, key) => p_write_file(
            {
                'path': {
                    'escape spaces in path': true,
                    'path': `${path}/${key}.astn`
                },
                'data': serialize.Document(
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
                    )
                ),
            }
        )),
        ($) => ({
            'exit code': 1
        })

    )


}