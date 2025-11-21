//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

//data

import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_schema from "../../interface/generated/pareto/schemas/schema/data_types/source"

import * as tu_dynamic_unmarshall from "../transformations/temp/unmarshall_astn_ast"

import * as parse from "astn/dist/exceptional/authoring_parse/parse"

import * as _out from "../../temp/temp_unmashall_result_types"

import { $$ as op_join_with_separator } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/join_list_of_texts_with_separator"

import { get_directory_path } from "../operations/impure/tbd/path"

import { $, $ as load_schema } from "../refiners/load_schema"

import { Signature } from "../../interface/algorithms/queries/load_pareto_document"

export type Error =
    | ['no schema file', {
        'file location': string
    }]
    | ['schema error', {
        // 'message': string,
        'file location': string
    }]
    | ['parse error', d_parse_result.Parse_Error]
    | ['unmashall error', null]

export type Parameters = {
    'content': string,
    'file path': string,
}

export type Resources = {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

type Schema_And_Instance = {
    'schema type': d_schema.Type
    'instance': d_parse_tree.Document
}

export const $$: _et.Query_Procedure<_out.Node, Error, Parameters, Resources> = _easync.create_query_procedure(
    ($p, $qr) => {

        const schema_path = op_join_with_separator(
            get_directory_path($p['file path']).transform(
                ($) => $,
                () => _ea.deprecated_panic("could not get directory path"),
            ),
            {
                'separator': "/",
            }
        ) + "/astn-schema"

        return $qr['read file'](
            {
                'path': schema_path,
                'escape spaces in path': true,
            },
            (): Error => ['no schema file', {
                'file location': schema_path,
            }]
        ).refine(
            ($) => {
                const type = $
                return load_schema(
                    $,
                )
            },
            ($) => ['schema error', {
                'file location': schema_path,
            }]
        ).refine(
            ($) => {
                const type = $
                return parse.parse(
                    $p.content,
                    {
                        'tab size': 4,
                    }
                ).transform_result(($): Schema_And_Instance => ({
                    'schema type': type,
                    'instance': $,
                }))
            },
            ($): Error => ['parse error', $]
        ).refine<_out.Node, never>( //FIXME; unmarshaller should produce proper errors
            ($) => {

                return _ei.__create_success_refinement_result(tu_dynamic_unmarshall.Node(
                    $.instance.content,
                    {
                        'definition': $['schema type'].node,
                    }
                ))
            },
            ($): Error => ['unmashall error', null]
        )
    }
)
