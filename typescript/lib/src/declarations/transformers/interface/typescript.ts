
import type * as p_ from 'pareto-core/interface/transformer'
import type * as p_ri from 'pareto-core/interface/refiner'
import type * as d_in from "../../../submodules/interface/interface/data/resolved.js"
import type * as d_out from "../../../submodules/typescript_light/interface/data/typescript_light.js"
import type * as d_function from "../../../interface/data/pareto_to_typescript.js"


export type Package_Set = p_ri.Refiner<
    d_out.Directory,
    d_function.Error,
    d_in.Package_Set
>
export type Value = p_.Transformer_With_Parameter<
    d_in.Value,
    d_out.Statements,
    { 'name': string }
>

