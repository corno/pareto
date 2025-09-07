//core
import * as _ea from 'exupery-core-alg'
import * as _er from 'exupery-core-resources'
import * as _ed from 'exupery-core-data'

//data
import { $ as poormans_modules } from "../temporary_schemas/all"

import * as d_module from "../generated/interface/schemas/module/data_types/unresolved"
import * as d_schema from "../generated/interface/schemas/schema/data_types/resolved"

import * as r_pareto_module from "../resolvers/module"

import * as m_pareto_module from "../generated/implementation/schemas/module/marshall"
import * as u_pareto_module from "../generated/implementation/schemas/module/unmarshall"

import * as tu_dynamic_unmarshall from "./unmarshall_astn_ast"
import * as t_ur_ue from "../transformations/unmarshall_result/unmarshall_errors"
import * as t_ue_fp from "../transformations/unmarshall_errors/fountain_pen"

import * as write_to_console from "./fp_write_to_console"

import * as wtd from "pareto-fountain-pen/dist/other/write_to_disk"

import * as parse from "astn/dist/parse/parse"

export const $: (
    $: null,
    $p: {
        // 'path': string,
    }
) => void = ($, $p) => {


    const do_it = (
        schema_path: string,
        schema_name: string,
        root_type: string,
        instance_path: string,
    ) => {

        const x1 = parse.parse(
            _er.temp_resources.fs['read file sync'](schema_path, true),
            {
                'tab size': 4,
            }
        )
        _ea.cc(x1, ($) => {
            switch ($[0]) {
                case 'failure': return _ea.ss($, ($) => {
                    _ea.panic(`Parse error`)
                })
                case 'success': return _ea.ss($, ($) => {

                    const resolved_schema_schema = r_pareto_module.r_Module(
                        u_pareto_module.Module(
                            $.content,
                            {
                                'value deserializers': {
                                    'boolean': ($) => $ === "true",
                                    'default number': () => 0,
                                    'custom numbers': null
                                }
                            }
                        ),
                        {
                            'location 2 string': ($) => `${schema_path}:${$.start.relative.line}:${$.start.relative.column}`,
                            'parameters': {
                                'lookups': null,
                                'values': null,
                            }
                        }
                    )
                    resolved_schema_schema.schemas.dictionary.__get_entry(schema_name).transform(
                        ($) => {
                            const definition: d_schema.Schema = _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'schema': return _ea.ss($, ($) => $)
                                    case 'set': return _ea.ss($, ($) => _ea.panic("expected a schema, not a set"))
                                    default: return _ea.au($[0])
                                }
                            })
                            const instance = parse.parse(
                                _er.temp_resources.fs['read file sync']("./out/serialized/pareto-json.astn", true),
                                {
                                    'tab size': 4,
                                }
                            )
                            _ea.cc(instance, ($) => {
                                switch ($[0]) {
                                    case 'failure': return _ea.ss($, ($) => {
                                        _ea.panic(`Instance parse error`)
                                    })
                                    case 'success': return _ea.ss($, ($) => {
                                        // Handle success case
                                        const du_result = tu_dynamic_unmarshall.Document(
                                            $,
                                            {
                                                'definition': definition,
                                                'root type': root_type
                                            }
                                        )
                                       write_to_console.Block(
                                         t_ue_fp.Errors(t_ur_ue.Document(du_result)),
                                         {
                                            'indentation': '  ',
                                            'channel': 'error'
                                         }
                                       )
                                    })
                                    default: return _ea.au($[0])
                                }
                            })

                        },
                        () => _ea.panic("No schema found")
                    )
                })
                default: return _ea.au($[0])
            }
        })

        parse.parse(
            _er.temp_resources.fs['read file sync'](instance_path, true),
            {
                'tab size': 4,
            }
        )
    }

    do_it(
        "./out/serialized/pareto.astn",
        "Schema",
        "Schema",
        "./out/serialized/pareto-json.astn",
    )

}