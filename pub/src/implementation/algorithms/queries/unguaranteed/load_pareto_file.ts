//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'

//data

import * as _out from "../../../../temp/temp_unmashall_result_types"

import { $$ as op_join_with_separator } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/join_list_of_texts_with_separator"

import { get_directory_path } from "../../operations/impure/tbd/path"

import { $ as load_schema } from "../../../../exceptional/deserializers/load_schema"

import { $$ as q_load_astn_document, Error as Document_Error } from "./load_pareto_document"
import { Signature } from "../../../../interface/algorithms/queries/unguaranteed/load_pareto_file"

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"

export type Error =
    | ['no file', null]
    | ['document', Document_Error]

export type Parameters = {
    'file path': string,
}

export type Resources = {
    'queries': {
        'read file': _easync.Unguaranteed_Query<d_read_file.Parameters, d_read_file.Result, d_read_file.Error, null>
    }
}

export const $$: _easync.Unguaranteed_Query<Parameters, _out.Node, Error, Resources> = (
    $p, $r
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
    return $r.queries['read file'](
        {
            'path': instance_path,
            'escape spaces in path': true,
        },
        null,
    ).map_exception_(($): Error => ['no file', null])
        .then_unguaranteed(($) => q_load_astn_document(
            {
                'content': $,
                'file path': instance_path,
            },
            $r,
        ).map_exception_(($) => ['document', $]))
}