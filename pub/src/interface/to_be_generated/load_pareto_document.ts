import * as _et from 'exupery-core-types'

import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/source"
import * as d_unmarshall_result from "./temp_unmashall_result"

export type Result = d_unmarshall_result.Node

export type Error =
    | ['no schema file', {
        'file location': string
    }]
    | ['schema error', {
        // 'message': string,
        'file location': string
    }]
    | ['parse error', d_parse_result.Parse_Error]
    | ['unmarshall error', null]

export type Parameters = {
    'content': string,
    'file path': d_path.Node_Path,
}