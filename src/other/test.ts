//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _er from 'exupery-core-resources'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'

//data

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

import { impure, pure } from "pareto-standard-operations"

const op = {
    'remove first element': impure.list['remove first element'],
    'remove last element': impure.list['remove last element'],
}

export const $: (
    $: null,
    $p: {
        // 'path': string,
    }
) => void = ($, $p) => {


    const validate_instance_against_schema = (
        schema_path: string, //the file path
        schema_name_path: _et.Array<string>,
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

                    const resolved_schema_schema = r_pareto_module.Module(
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
                    const temp_find_schema = (
                        $: d_schema.Schema_Tree,
                        schema_path: _et.Array<string>,
                    ): d_schema.Schema => {
                        const st = $
                        return op['remove first element'](schema_path).transform(
                            ($) => {
                                const split = $
                                return _ea.cc(st, ($) => {
                                    switch ($[0]) {

                                        case 'schema': return _ea.ss($, ($) => _ea.panic(`the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                                        case 'set': return _ea.ss($, ($) => $.dictionary.__get_entry(split.element).transform(
                                            ($) => temp_find_schema($, split.array),
                                            () => _ea.panic(`schema not found: ${split.element}`)
                                        ))
                                        default: return _ea.au($[0])
                                    }
                                })
                            },
                            () => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'schema': return _ea.ss($, ($) => $)
                                    case 'set': return _ea.ss($, ($) => _ea.panic("the selected tree is a set, not a schema"))
                                    default: return _ea.au($[0])
                                }
                            })
                        )
                    }
                    const schema = temp_find_schema(resolved_schema_schema['schema tree'], schema_name_path)


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
                                        'definition': schema.types.dictionary.__get_entry(root_type).transform(
                                            ($) => $,
                                            () => {
                                                schema.types.dictionary.map(($, key) => {
                                                    _ed.log_debug_message(`available type: ${key}`)
                                                })
                                                _ea.panic(`root type ${root_type} not found`)
                                            }
                                        ),
                                        'document path': instance_path,
                                    }
                                )
                                write_to_console.Block(
                                    t_ue_fp.Errors(
                                        t_ur_ue.Document(du_result),
                                        {
                                            'line offset': 1,
                                            'column offset': 1,
                                        }
                                    ),
                                    {
                                        'indentation': '  ',
                                        'channel': 'error'
                                    }
                                )
                            })
                            default: return _ea.au($[0])
                        }
                    })


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

    validate_instance_against_schema(
        "./out/serialized/pareto.astn",
        _ea.array_literal(["module"]),
        "Module",
        "./out/serialized/pareto-json.astn",
    )

}