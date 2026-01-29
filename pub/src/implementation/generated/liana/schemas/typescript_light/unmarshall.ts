
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/typescript_light/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Identifier: t_signatures.Identifier = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'value': _p_cc(
            $.__get_entry(
                'value',
                ($) => abort(
                    ['no such entry', "value"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
    })
)

export const Function_Parameters: t_signatures.Function_Parameters = ($, abort) => v_unmarshalled_from_parse_tree.List(
    $,
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null]
            )
        ),
        ($) => ({
            'name': _p_cc(
                $.__get_entry(
                    'name',
                    ($) => abort(
                        ['no such entry', "name"]
                    )
                ),
                ($) => Identifier(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
            'type': _p_cc(
                $.__get_entry(
                    'type',
                    ($) => abort(
                        ['no such entry', "type"]
                    )
                ),
                ($) => v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ).__o_map(
                    ($) => Type(
                        $,
                        ($) => abort(
                            $
                        )
                    )
                )
            ),
        })
    )
)

export const String_Literal: t_signatures.String_Literal = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'delimiter': _p_cc(
            $.__get_entry(
                'delimiter',
                ($) => abort(
                    ['no such entry', "delimiter"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'value': _p_cc(
            $.__get_entry(
                'value',
                ($) => abort(
                    ['no such entry', "value"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
    })
)

export const Type: t_signatures.Type = ($, abort) => _p_unreachable_code_path(
)

export const Expression: t_signatures.Expression = ($, abort) => _p_unreachable_code_path(
)

export const Statements: t_signatures.Statements = ($, abort) => v_unmarshalled_from_parse_tree.List(
    $,
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)

export const Directory: t_signatures.Directory = ($, abort) => v_unmarshalled_from_parse_tree.Dictionary(
    $,
    ($) => abort(
        ['expected a dictionary', null]
    )
).__d_map(
    ($, id) => _p_unreachable_code_path(
    )
)
