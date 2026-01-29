
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Imports: t_signatures.Imports = ($) => v_serialize.Document(
    v_marshall.Imports(
        $
    )
)

export const Module: t_signatures.Module = ($) => v_serialize.Document(
    v_marshall.Module(
        $
    )
)

export const Module_Set: t_signatures.Module_Set = ($) => v_serialize.Document(
    v_marshall.Module_Set(
        $
    )
)

export const Type_Reference: t_signatures.Type_Reference = ($) => v_serialize.Document(
    v_marshall.Type_Reference(
        $
    )
)

export const Type_Node: t_signatures.Type_Node = ($) => v_serialize.Document(
    v_marshall.Type_Node(
        $
    )
)
