//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _ei from 'exupery-core-internals'

//data

import * as d_schema from "../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_parse_result from "../../interface/generated/pareto/core/parse_result"

import * as r_pareto_schema from "../../temp/resolvers/schema"

import * as u_pareto_schema from "../generated/pareto/schemas/schema/unmarshall"

import * as parse from "../generated/pareto/generic/parse/parse"

import * as _out from "../../temp/temp_unmashall_result_types"

import { $$ as op_pop_first_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/deprecated_pop_first_element"

type Error =
    | ['parse error', d_parse_result._T_Parse_Error]
    | ['resolve errorx', null]


export const $ = (
    $: string,
): _et.Refinement_Result<d_schema.Type, Error> => {

    return parse.parse(
        $,
        {
            'tab size': 4,
        }
    ).deprecated_transform_error(
        ($): Error => ['parse error', $]
    ).deprecated_refine_old<d_schema.Type, null>(
        ($) => {

            const resolved_schema_schema = r_pareto_schema.Type_Specification(
                u_pareto_schema.Type_Specification(
                    $.content, //if this goes wrong, the ast schema for astn and in 'generated' differ. Copy the astn one to generated
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
                schema_path: _et.List<string>,
            ): d_schema.Schema => {
                const st = $
                return op_pop_first_element(schema_path).transform(
                    ($) => {
                        const split = $
                        return _ea.cc(st, ($) => {
                            switch ($[0]) {

                                case 'schema': return _ea.ss($, ($) => _ea.deprecated_panic(`(FIXME: make this a reference) the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                                case 'set': return _ea.ss($, ($) => $.dictionary.__get_entry(split.element).transform(
                                    ($) => temp_find_schema($, split.rest),
                                    () => _ea.deprecated_panic(`(FIXME: make this a reference) schema not found: ${split.element}`)
                                ))
                                default: return _ea.au($[0])
                            }
                        })
                    },
                    () => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'schema': return _ea.ss($, ($) => $)
                            case 'set': return _ea.ss($, ($) => _ea.deprecated_panic(`(FIXME: make this a reference) the selected tree is a set, not a schema`))
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
                    _ea.deprecated_panic(`(FIXME: make this a reference) root type ${resolved_schema_schema.type} not found`)
                }
            )
            return _ei.__create_success_refinement_result(type)
        },
        ($): Error => ['resolve errorx', null]

    )
}