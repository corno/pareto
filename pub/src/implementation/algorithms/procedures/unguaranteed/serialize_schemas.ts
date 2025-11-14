//core
import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-data'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

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

export type Resources = {
    'procedures': {
        'write file': _et.Unguaranteed_Procedure<d_write_file.Parameters, d_write_file.Error, null>
    }
}

export const $$: _et.Unguaranteed_Procedure<_eb.Parameters, _eb.Error, Resources> = ($p, $r) => {
    return _easync.up.dictionary<_eb.Error, d_write_file.Error>(
        poormans_modules.map(($, key) => $r.procedures['write file'](
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
            null,
        )),
        ($) => ({
            'exit code': 1
        })

    )


}