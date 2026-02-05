    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const Package_Set: t_signatures.Package_Set = ($) => v_serialize.Document(
        v_marshall.Package_Set(
            $,
        ),
    )
    
    export const Package: t_signatures.Package = ($) => v_serialize.Document(
        v_marshall.Package(
            $,
        ),
    )
    
    export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($) => v_serialize.Document(
        v_marshall.Temp_Value_Type_Specification(
            $,
        ),
    )
    
    export const Expression: t_signatures.Expression = ($) => v_serialize.Document(
        v_marshall.Expression(
            $,
        ),
    )
    
    export const Value_Selection: t_signatures.Value_Selection = ($) => v_serialize.Document(
        v_marshall.Value_Selection(
            $,
        ),
    )
    
    export const Lookup_Selection: t_signatures.Lookup_Selection = ($) => v_serialize.Document(
        v_marshall.Lookup_Selection(
            $,
        ),
    )
