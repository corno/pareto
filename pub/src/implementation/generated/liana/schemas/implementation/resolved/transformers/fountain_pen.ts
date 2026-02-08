
import * as _p from 'pareto-core/dist/assign'

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

export const Assign: t_signatures.Assign = ($) => v_serialize.Document(
    v_marshall.Assign(
        $,
    ),
)

export const Select_Value: t_signatures.Select_Value = ($) => v_serialize.Document(
    v_marshall.Select_Value(
        $,
    ),
)

export const Select_Lookup: t_signatures.Select_Lookup = ($) => v_serialize.Document(
    v_marshall.Select_Lookup(
        $,
    ),
)
