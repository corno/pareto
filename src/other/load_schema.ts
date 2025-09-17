//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _er from 'exupery-core-resources'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'

import * as pso from "pareto-standard-operations"

//data

import * as d_schema from "../generated/interface/schemas/schema/data_types/resolved"
import * as d_parse_result from "astn/dist/generated/interface/schemas/parse_result/data_types/unconstrained"

import * as r_pareto_schema from "../resolvers/schema"

import * as u_pareto_schema from "../generated/implementation/schemas/schema/unmarshall"

import * as tu_dynamic_unmarshall from "./unmarshall_astn_ast"

import * as parse from "astn/dist/parse/parse"

import * as _out from "../temp_unmashall_result_types"


import { impure, pure } from "pareto-standard-operations"
import { get_directory_path } from './path'

const op = {
    'remove first element': impure.list['remove first element'],
    'remove last element': impure.list['remove last element'],
}

type Do_Schema_Result =
    | ['success', d_schema.Type]
    | ['file not found', null]
    | ['parse error', d_parse_result.Parse_Error]
    // ['resolve error', FIXME resolve errors will now panic!

export const $ = (
    $: string,
): Do_Schema_Result => {

    return _ea.cc(
        parse.parse(
            $,
            {
                'tab size': 4,
            }
        ),
        ($): Do_Schema_Result => {
            switch ($[0]) {
                case 'failure': return _ea.ss($, ($) => {
                    return ['parse error', $]
                })
                case 'success': return _ea.ss($, ($): Do_Schema_Result => {

                    const resolved_schema_schema = r_pareto_schema.Type_Specification(
                        u_pareto_schema.Type_Specification(
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
                            'location 2 string': ($) => `${$.start.relative.line}:${$.start.relative.column}`,
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

                                        case 'schema': return _ea.ss($, ($) => _ea.panic(`(FIXME: make this a reference) the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                                        case 'set': return _ea.ss($, ($) => $.dictionary.__get_entry(split.element).transform(
                                            ($) => temp_find_schema($, split.array),
                                            () => _ea.panic(`(FIXME: make this a reference) schema not found: ${split.element}`)
                                        ))
                                        default: return _ea.au($[0])
                                    }
                                })
                            },
                            () => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'schema': return _ea.ss($, ($) => $)
                                    case 'set': return _ea.ss($, ($) => _ea.panic(`(FIXME: make this a reference) the selected tree is a set, not a schema`))
                                    default: return _ea.au($[0])
                                }
                            })
                        )
                    }
                    const schema = temp_find_schema(resolved_schema_schema.schema, resolved_schema_schema['schema path'])

                    const type = schema.types.dictionary.__get_entry(resolved_schema_schema.type).transform(
                        ($) => $,
                        () => {
                            schema.types.dictionary.map(($, key) => {
                                _ed.log_debug_message(`available type: ${key}`)
                            })
                            _ea.panic(`(FIXME: make this a reference) root type ${resolved_schema_schema.type} not found`)
                        }
                    )
                    return ['success', type]
                })
                default: return _ea.au($[0])
            }
        }
    )
}