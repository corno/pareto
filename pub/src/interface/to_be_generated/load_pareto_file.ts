import * as d_lpd from "./load_pareto_document"
import * as d_path from "pareto-resources/dist/interface/generated/pareto/schemas/path/data_types/source"
import * as d_unmarshall_result from "./temp_unmashall_result"

export type Result = d_unmarshall_result.Node

export type Error =
    | ['no file', null]
    | ['document', d_lpd.Error]

export type Parameters = {
    'file path': d_path.Node_Path,
}