//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'


import * as d_load_pareto_document from "../../../interface/to_be_generated/load_pareto_document"
import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"

import * as d_schema from "../../../interface/generated/pareto/schemas/schema/data_types/source"


export type Schema_And_Instance = {
    'schema type': d_schema.Type
    'instance': d_parse_tree.Document
}

export type Parameters = {
    'schema content': string
    'schema path': string
    'content': string
}

import * as d_unmarshall_result_types from "../../../interface/to_be_generated/temp_unmashall_result"



import * as api from "../../../interface/to_be_generated/load_pareto_document"

//depencencies

import * as tu_dynamic_unmarshall from "../../transformers/schemas/temp/unmarshall_astn_ast"

import * as r_parse from "astn/dist/implementation/deserializers/schemas/authoring_parse_tree"

import { $ as load_schema } from "./schema"

//implementation

export const $$: _et.Deprecated_Refiner_Catcher<d_unmarshall_result_types.Node, d_load_pareto_document.Error, Parameters> = ($p) => load_schema(
    $p['schema content'],
).deprecated_transform_error(
    ($): d_load_pareto_document.Error => ['schema error', {
        'file location': $p['schema path'],
    }],
).deprecated_refine_old(
    ($) => {
        const type = $
        return _ea.create_refinement_context<d_parse_tree._T_Document, d_parse_result.Parse_Error>((abort) => r_parse.Document(
            $p.content,
            {
                'tab size': 4,
            },
            abort,
        )).transform_result(($): Schema_And_Instance => ({
            'schema type': type,
            'instance': $,
        }))
    },
    ($): d_load_pareto_document.Error => ['parse error', $]
).deprecated_refine_old<d_unmarshall_result_types.Node, never>( //FIXME; unmarshaller should produce proper errors
    ($) => {

        return _ei.__create_success_refinement_result(tu_dynamic_unmarshall.Node(
            $.instance.content,
            {
                'definition': $['schema type'].node,
            }
        ))
    },
    ($): d_load_pareto_document.Error => ['unmarshall error', null]
)