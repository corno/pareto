import * as d_parse_result from "astn-sealed/dist/interface/to_be_generated/parse_astn_source"


export type Error =
    | ['parse error', d_parse_result.Error]
    | ['resolve errorx', null]