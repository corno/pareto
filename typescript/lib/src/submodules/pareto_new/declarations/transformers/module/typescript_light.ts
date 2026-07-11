import * as p_ from 'pareto-core/interface/transformer'

import * as s_in from "../../../interface/schemas/module.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

export type Root = p_.Transformer<
    s_in.Root,
    s_out.Directory.D
>

export type Module = p_.Transformer<
    s_in.Module,
    s_out.Directory.D
>