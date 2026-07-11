
import type * as p_ from 'pareto-core/interface/transformer'
import type * as p_ri from 'pareto-core/interface/refiner'
import type * as s_in from "../../../submodules/interface/interface/schemas/resolved.js"
import type * as s_out from "../../../submodules/typescript_light/interface/schemas/typescript_light.js"
import type * as s_function from "../../../interface/schemas/pareto_to_typescript.js"


export type Package_Set = p_ri.Refiner<
    s_out.Directory,
    s_function.Error,
    s_in.Package_Set
>
export type Value = p_.Transformer_With_Parameter<
    s_in.Value,
    s_out.Statements,
    { 'name': string }
>

