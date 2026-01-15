import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'


import * as d_load_pareto_document from "../../../../interface/to_be_generated/load_pareto_document"
import * as d_parse_tree from "astn/dist/interface/generated/pareto/schemas/parse_tree/data_types/target"

import * as d_schema from "../../../../interface/generated/pareto/schemas/schema/data_types/source"


export type Schema_And_Instance = {
    'schema type': d_schema.Type
    'instance': d_parse_tree.Document
}

export type Parameters = {
    'schema content': string
    'schema path': string
}


import * as d_unmarshall_result_types from "../../../../interface/to_be_generated/temp_unmashall_result"
import * as d_deserialize_unmarshall_result from "../../../../interface/to_be_generated/deserialize_unmarshall_result"


import * as api from "../../../../interface/to_be_generated/load_pareto_document"

//depencencies

import * as tu_dynamic_unmarshall from "./refiners/astn_parse_tree"

import * as r_parse from "astn/dist/implementation/manual/schemas/authoring_parse_tree/deserializers"

import { $ as load_schema } from "../schema/deserializers"

//implementation

export const $$: _pi.Deserializer_With_Parameters<d_unmarshall_result_types.Node, d_deserialize_unmarshall_result.Error, Parameters> = ($, abort, $p) => {
    const x = load_schema(
        $p['schema content'],
        ($) => abort(['schema error', {
            'error': $,
            'file location': $p['schema path'],
        }]),
        {
            'uri': $p['schema path'],
        }
    )

    const x2 = r_parse.Document(
        $,
        ($) => abort(['parse error', $]),
        {
            'tab size': 4,
        },
    )

    const x3 = tu_dynamic_unmarshall.Node(
        x2.content,
        {
            'definition': x.node,
        }
    )
    return x3


}