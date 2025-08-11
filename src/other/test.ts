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

import * as t_xx from "../uptransformers/unmarshall_result/astn_ast"

import * as wtd from "pareto-fountain-pen/dist/other/write_to_disk"

import * as parse from "astn/dist/parse/parse"

export const $: (
    $: null,
    $p: {
        // 'path': string,
    }
) => void = ($, $p) => {
    const schema_path = "./out/serialized/pareto.astn"
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
                resolved_schema_schema.schemas.dictionary.__get_entry("schema").transform(
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
                                    t_xx.Document(
                                        $,
                                        {
                                            'definition': definition,
                                        }
                                    )
                                    u_pareto_module.Module(
                                        $.content,
                                        {
                                            'value deserializers': {
                                                'boolean': ($) => $ === "true",
                                                'default number': () => 0,
                                                'custom numbers': null
                                            }
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
        _er.temp_resources.fs['read file sync']("./out/serialized/pareto-json.astn", true),
        {
            'tab size': 4,
        }
    )
}