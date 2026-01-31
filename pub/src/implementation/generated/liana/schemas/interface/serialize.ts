
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/serialize"

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

export const Imports: t_signatures.Imports = ($) => v_serialize.Document(
    v_marshall.Imports(
        $
    )
)

export const Value: t_signatures.Value = ($) => v_serialize.Document(
    v_marshall.Value(
        $
    )
)

export const Module_Reference: t_signatures.Module_Reference = ($) => v_serialize.Document(
    v_marshall.Module_Reference(
        $
    )
)
