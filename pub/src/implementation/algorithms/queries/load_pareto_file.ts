//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'

//data

import * as d_out from "../../../temp/temp_unmashall_result_types"
import * as d_lpd from "./load_pareto_document"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"

export namespace d {
    export type Error =
        | ['no file', null]
        | ['document', d_lpd.Error]

    export type Parameters = {
        'file path': string,
    }
}

import { $$ as q_load_astn_document } from "./load_pareto_document"

export type Resources = {
    'queries': {
        'read file': _et.Data_Preparer<d_read_file.Parameters, d_read_file.Result, d_read_file.Error>
    }
}

import { Signature } from "../../../interface/algorithms/queries/load_pareto_file"

export const $$: _et.Query_Procedure<d.Parameters, d_out.Node, d.Error, Resources> = (
    $r
) => {

    return ($p) => {
        const instance_path = $p['file path']
        return $r.queries['read file'](
            {
                'path': instance_path,
                'escape spaces in path': true,
            },
        ).transform_error(($): d.Error => ['no file', null])
            .query_with_result(($) => q_load_astn_document($r)(
                {
                    'content': $,
                    'file path': instance_path,
                },
            ).transform_error(($): d.Error => ['document', $]))
    }
}