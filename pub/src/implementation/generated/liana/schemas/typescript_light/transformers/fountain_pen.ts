
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Directory: t_signatures.Directory = ($) => v_serialize.Document(
    v_marshall.Directory(
        $,
    ),
)

export const Block: t_signatures.Block = ($) => v_serialize.Document(
    v_marshall.Block(
        $,
    ),
)

export const Statements: t_signatures.Statements = ($) => v_serialize.Document(
    v_marshall.Statements(
        $,
    ),
)

export const Type: t_signatures.Type = ($) => v_serialize.Document(
    v_marshall.Type(
        $,
    ),
)

export const Function_Parameters: t_signatures.Function_Parameters = ($) => v_serialize.Document(
    v_marshall.Function_Parameters(
        $,
    ),
)

export const Expression: t_signatures.Expression = ($) => v_serialize.Document(
    v_marshall.Expression(
        $,
    ),
)

export const String_Literal: t_signatures.String_Literal = ($) => v_serialize.Document(
    v_marshall.String_Literal(
        $,
    ),
)

export const Identifier: t_signatures.Identifier = ($) => v_serialize.Document(
    v_marshall.Identifier(
        $,
    ),
)
