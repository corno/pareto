
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

import * as v_r_interface from "../interface/serialize"
export const Type_Reference: t_signatures.Type_Reference = ($,) => v_serialize.Document(v_marshall.Type_Reference($))
export const Module: t_signatures.Module = ($,) => v_serialize.Document(v_marshall.Module($))
export const Module_Set: t_signatures.Module_Set = ($,) => v_serialize.Document(v_marshall.Module_Set($))
export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($,) => v_serialize.Document(v_marshall.Type_Node_Reference($))
export const Expression: t_signatures.Expression = ($,) => v_serialize.Document(v_marshall.Expression($))
export const Abort_Expression: t_signatures.Abort_Expression = ($,) => v_serialize.Document(v_marshall.Abort_Expression($))
export const Selection: t_signatures.Selection = ($,) => v_serialize.Document(v_marshall.Selection($))
