//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _er from 'exupery-core-resources'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'

import * as pso from "pareto-standard-operations"

//data

import * as d_schema from "../generated/interface/schemas/schema/data_types/resolved"
import * as d_parse_result from "astn/dist/generated/interface/schemas/parse_result/unconstrained"

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

const do_schema = (
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
                    const schema = temp_find_schema(resolved_schema_schema.schema, resolved_schema_schema['schema path'])

                    const type = schema.types.dictionary.__get_entry(resolved_schema_schema.type).transform(
                        ($) => $,
                        () => {
                            schema.types.dictionary.map(($, key) => {
                                _ed.log_debug_message(`available type: ${key}`)
                            })
                            _ea.panic(`root type ${resolved_schema_schema.type} not found`)
                        }
                    )
                    return ['success', type]
                })
                default: return _ea.au($[0])
            }
        }
    )
}

type Validation_Result =
    | ['parse error', d_parse_result.Parse_Error]
    | ['unmarshalled', _out.Node]
    // | ['invalid', _et.Array<string>]
    | ['schema error', string]
    | ['no schema file', null]

export const validate_instance_against_schema = (
    schema_path: string, //the file path
    instance_path: string,
    instance_data: string,
): Validation_Result => {

    return _ea.cc(
        parse.parse(
            instance_data,
            {
                'tab size': 4,
            }
        ),
        ($) => {
            switch ($[0]) {
                case 'failure': return _ea.ss($, ($) => {
                    return ['parse error', $]
                })
                case 'success': return _ea.ss($, ($): Validation_Result => {
                    //the instance was parsed successfully

                    const content = $.content

                    //now first, get the schema


                    return _ea.cc(
                        _er.temp_resources.fs['read file sync'](schema_path, true),
                        ($) => {
                            switch ($[0]) {
                                case 'success': return _ea.ss($, ($) => _ea.cc(
                                    do_schema(
                                        $,
                                    ),
                                    ($) => {
                                        switch ($[0]) {
                                            case 'parse error': return _ea.ss($, ($) => _ed.implement_me())
                                            case 'file not found': return _ea.ss($, ($) => ['no schema file', null])
                                            case 'success': return _ea.ss($, ($): Validation_Result => {
                                                //the schema was loaded successfully

                                                const type = $

                                                return ['unmarshalled', tu_dynamic_unmarshall.Node(
                                                    content,
                                                    {
                                                        'definition': type.node,
                                                        'document path': instance_path,
                                                    }
                                                )]
                                            })
                                            default: return _ea.au($[0])
                                        }
                                    }
                                ))
                                case 'error': return _ea.ss($, ($) => ['no schema file', null])
                                default: return _ea.au($[0])
                            }
                        })

                })
                default: return _ea.au($[0])
            }
        }
    )
}

export const validate_instance_against_directory_schema = (
    instance_path: string,
    instance_data: string
): Validation_Result => {
    return validate_instance_against_schema(
        pso.impure.text['join list of texts with separator'](
            get_directory_path(instance_path).transform(
                ($) => $,
                () => _ea.panic("could not get directory path"),
            ),
            {
                'separator': "/",
            }
        ) + "/astn-schema",
        instance_path,
        instance_data,
    )
}