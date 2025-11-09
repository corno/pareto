//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'

//data

import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"

import * as tu_dynamic_unmarshall from "../../transformations/temp/unmarshall_astn_ast"

import * as parse from "astn/dist/exceptional/authoring_parse/parse"

import * as _out from "../../../../temp/temp_unmashall_result_types"

import { $$ as op_join_with_separator } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/join_list_of_texts_with_separator"

import { $$ as q_read_file } from "exupery-resources/dist/implementation/algorithms/queries/unguaranteed/read_file"


import { get_directory_path } from "../../operations/impure/tbd/path"

import { $, $ as load_schema } from "../../../../exceptional/deserializers/load_schema"
import { Signature } from "../../../../interface/algorithms/queries/unguaranteed/load_pareto_document"


export type Error =
    | ['parse error', d_parse_result.Parse_Error]
    | ['no schema file', null]
    | ['schema error', {
        // 'message': string,
        'file location': string
    }]

export type Parameters = {
    'content': string,
    'file path': string,
}

export const $$: _easync.Unguaranteed_Query<Parameters, _out.Node, Error, null> = (
    $p,
) => {
    const instance_path = $p['file path']
    const schema_path = op_join_with_separator(
        get_directory_path($p['file path']).transform(
            ($) => $,
            () => _ea.deprecated_panic("could not get directory path"),
        ),
        {
            'separator': "/",
        }
    ) + "/astn-schema"
    return parse.parse(
        $p.content,
        {
            'tab size': 4,
        }
    ).transform(
        ($) => {
            //the instance was parsed successfully

            const content = $.content

            //now first, get the schema

            return q_read_file(
                {
                    'path': schema_path,
                    'escape spaces in path': true,
                },
                null,
            ).map_exception_<Error>(
                () => ['no schema file', null] as Error
            ).then_unguaranteed(($) => {
                //the schema file was read successfully
                return _ea.cc(
                    load_schema(
                        $,
                    ),
                    ($): _easync.Unguaranteed_Query_Promise<_out.Node, Error> => {
                        return $.transform(
                            ($) => {
                                //the schema was loaded successfully

                                const type = $

                                return _easync.query.unguaranteed['create result'](tu_dynamic_unmarshall.Node(
                                    content,
                                    {
                                        'definition': type.node,
                                    }
                                ))
                            },
                            ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'parse error': return _ea.ss($, ($) => {

                                        return _easync.query.unguaranteed['raise exception'](['schema error', {
                                            // 'message': $.,
                                            'file location': schema_path,
                                        }])
                                    })
                                    default: return _ea.au($[0])
                                }
                            }),
                        )
                    }
                )
            })


        },
        ($) => _easync.query.unguaranteed['raise exception'](['parse error', $])
    )
}