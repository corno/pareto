import * as p_ from 'pareto-core/interface/transformer'

import * as s_in from "../../../interface/schemas/implementation_transformer.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

export type Root = p_.Transformer<
    s_in.Root,
    s_out.Directory.D
>
