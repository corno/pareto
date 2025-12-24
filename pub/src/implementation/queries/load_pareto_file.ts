import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

//interface

import * as d_out from "../../interface/to_be_generated/temp_unmashall_result_types"
import * as d_lpd from "../../interface/to_be_generated/load_pareto_document"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/source"

export namespace d {
    export type Error =
        | ['no file', null]
        | ['document', d_lpd.Error]

    export type Parameters = {
        'file path': d_path.Node_Path,
    }
}

export type Signature = _et.Query_Function<_et.Query<d_out.Node, d.Error, d.Parameters>, {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}>

//depencencies

import { $$ as q_load_pareto_document } from "./load_pareto_document"

export const $$: Signature = _easync.create_query_function(
    ($p, $qr) => $qr['read file'](
        $p['file path'],
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