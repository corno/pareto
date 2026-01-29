
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Imports: t_signatures.Imports = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'type': _p_cc(
                        $.__get_entry(
                            'type',
                            ($) => abort(
                                ['no such entry', "type"]
                            )
                        ),
                        ($) => _p_unreachable_code_path(
                        )
                    ),
                    'tail': _p_cc(
                        $.__get_entry(
                            'tail',
                            ($) => abort(
                                ['no such entry', "tail"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'list': v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    ['expected a list', null]
                                )
                            ).__l_map(
                                ($) => ({
                                    'location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'item': v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            ['expected a text', null]
                                        )
                                    ),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    ),
})

export const Module: t_signatures.Module = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'imports': _p_cc(
            $.__get_entry(
                'imports',
                ($) => abort(
                    ['no such entry', "imports"]
                )
            ),
            ($) => Imports(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'types': _p_cc(
            $.__get_entry(
                'types',
                ($) => abort(
                    ['no such entry', "types"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_unreachable_code_path(
                        ),
                    })
                ),
            })
        ),
    })
)

export const Module_Set: t_signatures.Module_Set = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_unreachable_code_path(
            ),
        })
    ),
})

export const Type_Reference: t_signatures.Type_Reference = ($, abort) => _p_unreachable_code_path(
)

export const Type_Node: t_signatures.Type_Node = ($, abort) => _p_unreachable_code_path(
)
