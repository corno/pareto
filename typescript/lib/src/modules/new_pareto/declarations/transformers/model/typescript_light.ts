import * as p_ from 'pareto-core/interface/transformer'

import * as d_in from "../../../interface/data/model.js"
import * as d_out from "../../../../typescript_light/interface/data/typescript_light.js"

export type Module = p_.Transformer<
    d_in.Module,
    d_out.Directory
>

export type Type = p_.Transformer<
    d_in.Type,
    d_out.Type
>