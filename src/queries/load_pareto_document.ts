//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'

//data

import * as d_schema from "../generated/interface/schemas/schema/data_types/source"
import * as d_parse_result from "astn/dist/generated/interface/schemas/parse_result/data_types/target"

import * as r_pareto_schema from "../resolvers/schema"

import * as u_pareto_schema from "../generated/implementation/schemas/schema/unmarshall"

import * as tu_dynamic_unmarshall from "../transformations/unmarshall_astn_ast"

import * as parse from "astn/dist/parse/parse"

import * as _out from "../temp/temp_unmashall_result_types"

import { $$ as op_join_with_separator } from "pareto-standard-operations/dist/impure/text/join_list_of_texts_with_separator"

import { $$ as q_read_file } from "exupery-resources/dist/queries/read_file"


import { get_directory_path } from "../operations/path"

import { $ as load_schema } from "../deserializers/load_schema"

export type Error =
    | ['parse error', d_parse_result.Parse_Error]
    | ['no schema file', null]
    | ['schema error', {
        // 'message': string,
        'file location': string
    }]


export const $$ = (
    $p: {
        'content': string,
        'file path': string,
    }
): _easync.Unsafe_Query_Result<_out.Node, Error> => {
    const instance_path = $p['file path']
    const schema_path = op_join_with_separator(
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
            $p.content,
            {
                'tab size': 4,
            }
        ),
        ($) => {
            switch ($[0]) {
                case 'failure': return _ea.ss($, ($) => {
                    return _easync.query.unsafe['raise exception'](['parse error', $])
                })
                case 'success': return _ea.ss($, ($): _easync.Unsafe_Query_Result<_out.Node, Error> => {
                    //the instance was parsed successfully

                    const content = $.content

                    //now first, get the schema

                    return q_read_file(
                        schema_path,
                        true,
                    ).map_exception<Error>(
                        () => ['no schema file', null] as Error
                    ).then(($) => {
                        //the schema file was read successfully
                        return _ea.cc(
                            load_schema(
                                $,
                            ),
                            ($): _easync.Unsafe_Query_Result<_out.Node, Error> => {
                                switch ($[0]) {
                                    case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'parse error': return _ea.ss($, ($) => _easync.query.unsafe['raise exception'](['schema error', {
                                                // 'message': $.,
                                                'file location': schema_path,
                                            }]))
                                            default: return _ea.au($[0])
                                        }
                                    }))
                                    case 'success': return _ea.ss($, ($) => {
                                        //the schema was loaded successfully

                                        const type = $

                                        return _easync.query.unsafe['create result'](tu_dynamic_unmarshall.Node(
                                            content,
                                            {
                                                'definition': type.node,
                                            }
                                        ))
                                    })
                                    default: return _ea.au($[0])
                                }
                            }
                        )
                    })


                })
                default: return _ea.au($[0])
            }
        }
    )
}