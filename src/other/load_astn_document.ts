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

import * as _out from "../temp/temp_unmashall_result_types"


import { get_directory_path } from "./path"

import { $ as load_schema } from "./load_schema"

export type Parse_Success =
    | ['no schema file', null]
    | ['schema error', {
        // 'message': string,
        'file location': string
    }]
    | ['unmarshalled', _out.Node]
// | ['invalid', _et.Array<string>]

export type Validation_Result =
    | ['parse error', d_parse_result.Parse_Error]
    | ['parse success', Parse_Success]


export const $ = (
    $: string,
    $p: {
        'file path': string,
    }
): Validation_Result => {
    const instance_path = $p['file path']
    const schema_path = pso.impure.text['join list of texts with separator'](
        get_directory_path($p['file path']).transform(
            ($) => $,
            () => _ea.panic("could not get directory path"),
        ),
        {
            'separator': "/",
        }
    ) + "/astn-schema"
    return _ea.cc(
        parse.parse(
            $,
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


                    return ['parse success', _ea.cc(
                        _er.temp_resources.fs['read file sync'](schema_path, true),
                        ($): Parse_Success => {
                            switch ($[0]) {
                                case 'success': return _ea.ss($, ($) => _ea.cc(
                                    load_schema(
                                        $,
                                    ),
                                    ($) => {
                                        switch ($[0]) {
                                            case 'parse error': return _ea.ss($, ($) => ['schema error', {
                                                // 'message': $.,
                                                'file location': schema_path,
                                            }])
                                            case 'file not found': return _ea.ss($, ($) => ['no schema file', null])
                                            case 'success': return _ea.ss($, ($): Parse_Success => {
                                                //the schema was loaded successfully

                                                const type = $

                                                return ['unmarshalled', tu_dynamic_unmarshall.Node(
                                                    content,
                                                    {
                                                        'definition': type.node,
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
                        }
                    )]

                })
                default: return _ea.au($[0])
            }
        }
    )
}