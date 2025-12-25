// Generated interface for queries/load_pareto_document.ts
// This file defines the type signature for the implementation


//core
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edata from 'exupery-core-data'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

//data
import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/source"

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