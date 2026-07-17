import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../schemas/typescript_light.js"
import type * as s_out from "../../../schemas/serialized.js"
import type * as s_parameters from "../../../schemas/serialization.js"

//dependencies
import * as t_to_paragraph from "./paragraph.js"
import * as t_paragraph_to_serialized from "pareto-fountain-pen/_implementation/transformers/paragraph/serialized"


export const Source_File: p_.Transformer_With_Parameter<
    s_in.Source_File,
    s_out.Lines,
    s_parameters.Source_File_Parameters
> = ($, $p) => {
    return t_paragraph_to_serialized.Paragraph(
        t_to_paragraph.Source_File($, $p.typescript),
        {
            'indentation': $p['indentation'],
        }
    )
}