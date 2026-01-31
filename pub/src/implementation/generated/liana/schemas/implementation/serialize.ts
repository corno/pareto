
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Package_Set: t_signatures.Package_Set = ($) => v_serialize.Document(
    v_marshall.Package_Set(
        $
    )
)

export const Package: t_signatures.Package = ($) => v_serialize.Document(
    v_marshall.Package(
        $
    )
)

export const Temp_Type_Node_Reference: t_signatures.Temp_Type_Node_Reference = ($) => v_serialize.Document(
    v_marshall.Temp_Type_Node_Reference(
        $
    )
)

export const Expression: t_signatures.Expression = ($) => v_serialize.Document(
    v_marshall.Expression(
        $
    )
)

export const Selection: t_signatures.Selection = ($) => v_serialize.Document(
    v_marshall.Selection(
        $
    )
)

export const Lookup_Selection: t_signatures.Lookup_Selection = ($) => v_serialize.Document(
    v_marshall.Lookup_Selection(
        $
    )
)
