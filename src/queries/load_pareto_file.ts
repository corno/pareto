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

import { $$ as q_load_astn_document, Error as Document_Error } from "./load_pareto_document"

export type Error =
    | ['no file', null]
    | ['document', Document_Error]

export const $$ = (
    $p: {
        'file path': string,
    }
): _easync.Unguaranteed_Query_Result<_out.Node, Error> => {
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
    return q_read_file(
        instance_path, true
    ).map_exception_(($): Error => ['no file', null])
    .then_unguaranteed(($) => q_load_astn_document({
        'content': $,
        'file path': instance_path,
    }).map_exception_(($) => ['document', $]))
}