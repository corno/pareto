//core
import * as _pt from 'pareto-core-transformer'
import * as _pq from 'pareto-core-query'
import * as _pinternals from 'pareto-core-internals'

//interface
import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/to_be_generated/load_pareto_document"

//depencencies

import { $$ as r_unmarshall_result } from "../schemas/unmarshall_result/deserializers"
import { create_node_path } from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as s_path from "exupery-resources/dist/implementation/serializers/schemas/path"

export const $$: signatures.queries.load_pareto_document = _pq.create_query_function(($p, $qr) => {

    const schema_path = create_node_path($p['file path'].context, "astn-schema")

    const schema_path_text = s_path.Node_Path(schema_path)

    return $qr['read file'](
        schema_path,
        (): d.Error => ['no schema file', {
            'file location': schema_path_text,
        }]
    ).refine_without_error_transformation(
        ($, abort) => r_unmarshall_result(
            $p.content,
            {
                'schema content': $,
                'schema path': schema_path_text,
            },
            ($) => abort(['schema error', {
                'file location': schema_path_text,
            }]),
        ),

    )
}
)
