import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/resolved.js"
import * as s_out from "../../../schemas/to_be_written_directory_content.js"
import * as s_parameters from "../../../../typescript_light/schemas/directory_content_writing.js"

//dependencies
import * as t_to_typescript from "./typescript.js"
import * as t_typescript_to_directory_content from "../../../../typescript_light/implementation/transformers/typescript_light/to_be_written_directory_content.js"

export const Package_Set: p_.Transformer_With_Parameter<
    s_in.Package_Set,
    s_out.Directory,
    s_parameters.Parameters
> = ($, $p) => t_typescript_to_directory_content.Directory(
    t_to_typescript.Package_Set(
        $,
    ),
    $p
)