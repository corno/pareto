import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as signatures from "../../interface/signatures"

//data types
import * as d from "../../interface/to_be_generated/load_pareto_file"

//depencencies
import { $$ as q_load_pareto_document } from "./load_pareto_document"

export const $$: signatures.queries.load_pareto_file = _easync.create_query_function(
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