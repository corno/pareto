//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'

//data

import * as d_out from "../../temp/temp_unmashall_result_types"
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

import { $$ as q_load_pareto_document } from "./load_pareto_document"

export type Resources = {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

import { Signature } from "../../interface/algorithms/queries/load_pareto_file"

export const $$: _et.Query_Procedure<d_out.Node, d.Error, d.Parameters, Resources> = _easync.create_query_procedure(
    ($p, $qr) => $qr['read file'](
        {
            'path': $p['file path'],
            'escape spaces in path': true,
        },
        (): d.Error => ['no file', null]
    ).query(
        ($) => {
            return q_load_pareto_document(
                {
                    'read file': $qr['read file'],
                },
            )(
                {
                    'content': $,
                    'file path': $p['file path'],
                },
                ($): d.Error => ['document', $]
            )
        },
        ($): d.Error => $
    )
)