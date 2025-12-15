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

import { deprecated_get_directory_path } from "../operations/impure/tbd/path"

import { $$ as r_load_pareto_document } from "../refiners/load_pareto_document"

//implementation

export const $$: api.Signature = _easync.create_query_function(
    ($p, $qr) => {

        const schema_path = op_join_with_separator(
            deprecated_get_directory_path($p['file path']).transform(
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
            (): d.Error => ['no schema file', {
                'file location': schema_path,
            }]
        ).refine(
            ($) => r_load_pareto_document({
                'schema content': $,
                'schema path': schema_path,
                'content': $p.content,
            })
            ,
            ($) => ['schema error', {
                'file location': schema_path,
            }]
        )
    }
)
