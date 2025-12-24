//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

//interface
import * as signatures from "../../interface/signatures"
//data types
import * as d from "../../interface/to_be_generated/load_pareto_document"

//depencencies

import { $$ as r_load_pareto_document } from "../refiners/load_pareto_document"
import { create_node_path } from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as s_path from "exupery-resources/dist/implementation/serializers/schemas/path"

export const $$: signatures.queries.load_pareto_document = _easync.create_query_function(($p, $qr) => {

    const schema_path = create_node_path($p['file path'].context, "astn-schema")

    const schema_path_text = s_path.Node_Path(schema_path)

    return $qr['read file'](
        schema_path,
        (): d.Error => ['no schema file', {
            'file location': schema_path_text,
        }]
    ).deprecated_refine_old(
        ($) => r_load_pareto_document({
            'schema content': $,
            'schema path': schema_path_text,
            'content': $p.content,
        })
        ,
        ($) => ['schema error', {
            'file location': schema_path_text,
        }]
    )
}
)
