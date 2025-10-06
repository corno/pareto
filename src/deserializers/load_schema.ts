//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'

//data

import * as d_schema from "../generated/interface/schemas/schema/data_types/source"
import * as d_parse_result from "astn/dist/generated/interface/schemas/sealed_parse_result/data_types/target"

import * as r_pareto_schema from "../resolvers/schema"

import * as u_pareto_schema from "../generated/implementation/schemas/schema/unmarshall"

import * as tu_dynamic_unmarshall from "../transformations/unmarshall_astn_ast"

import * as parse from "astn/dist/sealed_parse/parse"

import * as _out from "../temp/temp_unmashall_result_types"


import { get_directory_path } from '../operations/path'

import { $$ as op_remove_first_element } from "pareto-standard-operations/dist/impure/list/remove_first_element"
import { $$ as op_remove_last_element } from "pareto-standard-operations/dist/impure/list/remove_last_element"

type Error =
    | ['parse error', d_parse_result.Parse_Error]
// ['resolve error', FIXME resolve errors will now panic!

type Unsafe_Transformation_Result<T, E> =
    | ['success', T]
    | ['error', E]

export const $ = (
    $: string,
): Unsafe_Transformation_Result<d_schema.Type, Error> => {

    return parse.parse(
        $,
        {
            'tab size': 4,
        }
    ).transform(
        ($): Unsafe_Transformation_Result<d_schema.Type, Error> => {

            const resolved_schema_schema = r_pareto_schema.Type_Specification(
                u_pareto_schema.Type_Specification(
                    _ed.implement_me(), //$.content, //if this goes wrong, the ast schema for astn and in 'generated' differ. Copy the astn one to generated
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
                return op_remove_first_element(schema_path).transform(
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
                        _ed.log_debug_message(`available type: ${key}`, () => { })
                    })
                    _ea.panic(`(FIXME: make this a reference) root type ${resolved_schema_schema.type} not found`)
                }
            )
            return ['success', type]
        },
        ($) => ['error', ['parse error', $]],

    )
}