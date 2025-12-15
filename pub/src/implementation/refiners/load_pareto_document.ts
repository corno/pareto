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

import * as tu_dynamic_unmarshall from "../transformations/temp/unmarshall_astn_ast"

import * as parse from "astn/dist/implementation/algorithms/refiners/authoring_parse_tree/text/refiners"

import { $ as load_schema } from "./load_schema"

//implementation

export type Parameters = {
    'schema content': string
    'schema path': string
    'content': string
}

export const $$: _et.Refiner<d.Node, d.Error, Parameters> = ($p) => load_schema(
    $p['schema content'],
).deprecated_transform_error(
    ($): d.Error => ['schema error', {
        'file location': $p['schema path'],
    }],
).refine(
    ($) => {
        const type = $
        return parse.parse(
            $p.content,
            {
                'tab size': 4,
            }
        ).transform_result(($): d.Schema_And_Instance => ({
            'schema type': type,
            'instance': $,
        }))
    },
    ($): d.Error => ['parse error', $]
).refine<d.Node, never>( //FIXME; unmarshaller should produce proper errors
    ($) => {

        return _ei.__create_success_refinement_result(tu_dynamic_unmarshall.Node(
            $.instance.content,
            {
                'definition': $['schema type'].node,
            }
        ))
    },
    ($): d.Error => ['unmarshall error', null]
)