//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'

//data

import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"

import * as tu_dynamic_unmarshall from "../transformations/temp/unmarshall_astn_ast"

import * as parse from "astn/dist/exceptional/authoring_parse/parse"

import * as _out from "../../../temp/temp_unmashall_result_types"

import { $$ as op_join_with_separator } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/join_list_of_texts_with_separator"

import { get_directory_path } from "../operations/impure/tbd/path"

import { $, $ as load_schema } from "../../refiners/load_schema"

import { Signature } from "../../../interface/algorithms/queries/load_pareto_document"

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

export type Resources = {
    'queries': {
        'read file': _et.Stager<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
    }
}

export const $$: _et.Query_Procedure<_out.Node, Error, Parameters, Resources> = (
    $qr
) => {
    return ($p) => parse.parse(
        $p.content,
        {
            'tab size': 4,
        }
    ).transform(
        ($) => {


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
            //the instance was parsed successfully

            const content = $.content

            //now first, get the schema

            return $r.queries['read file'](
                {
                    'path': schema_path,
                    'escape spaces in path': true,
                }
            ).transform_error<Error>(
                () => ['no schema file', null]
            ).query_with_result(($) => {
                //the schema file was read successfully
                return _ea.cc(
                    load_schema(
                        $,
                    ),
                    ($): _et.Staging_Result<_out.Node, Error> => {
                        return $.transform(
                            ($) => {
                                //the schema was loaded successfully

                                const type = $

                                return _easync.q.fixed(tu_dynamic_unmarshall.Node(
                                    content,
                                    {
                                        'definition': type.node,
                                    }
                                ))
                            },
                            ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'parse error': return _ea.ss($, ($) => {

                                        return _easync.q.raise_error(['schema error', {
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
        ($) => _easync.q.raise_error(['parse error', $])
    )
}