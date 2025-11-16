//core
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import * as serialize from "../../generated/pareto/generic/serialize"
//data
import { $ as poormans_modules } from "../../../temp/temporary_schemas/all"

//data types
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

//resolvers
import * as r_module from "../../../temp/resolvers/module"

//marshall
import * as m_module from "../../generated/pareto/schemas/module/marshall"
import { Signature } from "../../../interface/algorithms/procedures/serialize_schemas"

export type Resources = {
    'commands': {
        'write file': _et.Command<d_write_file.Parameters, d_write_file.Error>
    }
}

export const $$: _et.Command_Procedure<d_main.Parameters, d_main.Error, Resources> = ($r) => {
    return ($p) => _easync.p.dictionary.parallel.direct<d_main.Error, d_write_file.Error>(
        poormans_modules.map(($, key) => $r.commands['write file'](
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
        )),
        ($) => ({
            'exit code': 1
        })

    )


}