//core
import * as _pc from 'pareto-core-command'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data
import { $ as poormans_modules } from "../../../data/temporary_schemas/all"

//dependencies
import * as ds_path from "pareto-resources/dist/implementation/manual/schemas/context_path/deserializers"
import * as r_module from "../../temp/resolvers/module"
import * as t_m_module from "../../generated/pareto/schemas/module/marshall"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"
import * as s_serialize from "../../generated/pareto/generic/serialize"

export const $$:  signatures.commands.serialize_schemas = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        _pc.dictionary.parallel(
            poormans_modules,
            ($, key) => [

                $cr['write file'].execute(
                    {
                        'path': t_path_to_path.create_node_path(ds_path.Context_Path($['target path']), `module.astn`),
                        'data': s_serialize.Document(
                            t_m_module.Module(
                                r_module.Module(
                                    $.module,
                                    {
                                        'parameters': {
                                            'lookups': null,
                                            'values': null,
                                        },
                                        'location 2 string': _pinternals.location_to_string
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