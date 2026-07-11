import * as p_ from 'pareto-core/interface/transformer'

import * as d_in from "../../../interface/schemas/implementation_transformer.js"
import * as d_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

export type Root = p_.Transformer<
    d_in.Root,
    d_out.Directory.D
>
