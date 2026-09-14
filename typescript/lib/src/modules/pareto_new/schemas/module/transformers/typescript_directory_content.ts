import * as p_ from 'pareto-core/transformer'

import * as s_in from "../schema.js"
import * as s_out from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/to_be_written_directory_content/schema"
import * as s_parameter from "../../../../typescript_light/schemas/directory_content_writing/schema.js"

namespace declarations {
    export type Module = p_.Transformer_With_Parameter<
        s_in.Module,
        s_out.Directory,
        s_parameter.Parameters
    >
}

//dependencies
import * as t_to_typescript_light from "./typescript_light.js"
import * as t_typescript_light_to_directory_content from "../../../../typescript_light/schemas/typescript_light/transformers/to_be_written_directory_content.js"

export const Module: declarations.Module = ($, $p) => t_typescript_light_to_directory_content.Directory(
    t_to_typescript_light.Module($),
    $p
)