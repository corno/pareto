import * as p_ from 'pareto-core/transformer'

import * as s_in from "../schema.js"
import * as s_out from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/to_be_written_directory_content/schema"
import * as s_parameters from "../../../../typescript_light/schemas/directory_content_writing/schema.js"

//dependencies
import * as t_to_typescript from "./typescript.js"
import * as t_typescript_to_directory_content from "../../../../typescript_light/schemas/typescript_light/transformers/to_be_written_directory_content.js"

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