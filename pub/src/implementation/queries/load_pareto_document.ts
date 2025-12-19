//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'


import * as api from "../../interface/algorithms/queries/load_pareto_document"
import * as d from "../../interface/algorithms/queries/load_pareto_document"





//depencencies

import { $$ as op_join_with_separator } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/join_list_of_texts_with_separator"

import { $$ as r_load_pareto_document } from "../refiners/load_pareto_document"
import { create_node_path } from "exupery-resources/dist/implementation/transformers/path/path"

import * as r_path_from_text from "exupery-resources/dist/implementation/refiners/node_path/text"

import * as t_path_to_text from "exupery-resources/dist/implementation/transformers/path/text"


//implementation

export const $$: api.Signature = _easync.create_query_function(
    ($p, $qr) => {

        const schema_path = create_node_path($p['file path'].context, "astn-schema")

        const schema_path_text = t_path_to_text.Node_Path(schema_path)


        return $qr['read file'](
            schema_path,
            (): d.Error => ['no schema file', {
                'file location': schema_path_text,
            }]
        ).refine(
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
