
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/interface/data/unresolved"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Imports: t_signatures.Imports = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'l dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'l entry': _p_cc(
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
                        ($) => _p_cc(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null]
                                )
                            ),
                            ($) => _p.decide.text(
                                $['option']['value'],
                                ($t): t_out.Imports.l_dictionary.D.l_entry.type_ => {
                                    switch ($t) {
                                        case 'external':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'l state': ['external', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )],
                                                })
                                            )
                                        case 'ancestor':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'l state': ['ancestor', _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'number of steps': _p_cc(
                                                                $.__get_entry(
                                                                    'number of steps',
                                                                    ($) => abort(
                                                                        ['no such entry', "number of steps"]
                                                                    )
                                                                ),
                                                                ($) => v_deserialize_number.deserialize(
                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null]
                                                                        )
                                                                    ),
                                                                    ($) => abort(
                                                                        ['not a valid number', null]
                                                                    )
                                                                )
                                                            ),
                                                            'dependency': _p_cc(
                                                                $.__get_entry(
                                                                    'dependency',
                                                                    ($) => abort(
                                                                        ['no such entry', "dependency"]
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
                                                    )],
                                                })
                                            )
                                        case 'sibling':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'l state': ['sibling', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null]
                                                        )
                                                    )],
                                                })
                                            )
                                        default:
                                            return abort(
                                                ['unknown option', $['option']['value']]
                                            )
                                    }
                                }
                            )
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l list': v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    ['expected a list', null]
                                )
                            ).__l_map(
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $
                                    )['start']['relative'],
                                    'l item': v_unmarshalled_from_parse_tree.Text(
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
                'l location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'l dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'l entry': _p_cc(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null]
                                )
                            ),
                            ($) => _p.decide.text(
                                $['option']['value'],
                                ($t): t_out.Module.types.l_dictionary.D.l_entry => {
                                    switch ($t) {
                                        case 'data':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'l state': ['data', Type_Node(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        )
                                                    )],
                                                })
                                            )
                                        case 'algorithm':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'l state': ['algorithm', _p_cc(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null]
                                                            )
                                                        ),
                                                        ($) => ({
                                                            'result': _p_cc(
                                                                $.__get_entry(
                                                                    'result',
                                                                    ($) => abort(
                                                                        ['no such entry', "result"]
                                                                    )
                                                                ),
                                                                ($) => Type_Node(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'context': _p_cc(
                                                                $.__get_entry(
                                                                    'context',
                                                                    ($) => abort(
                                                                        ['no such entry', "context"]
                                                                    )
                                                                ),
                                                                ($) => Type_Node(
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
                                                                ($) => _p_cc(
                                                                    v_unmarshalled_from_parse_tree.State(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a state', null]
                                                                        )
                                                                    ),
                                                                    ($) => _p.decide.text(
                                                                        $['option']['value'],
                                                                        ($t): t_out.Module.types.l_dictionary.D.l_entry.l_state.algorithm.type_ => {
                                                                            switch ($t) {
                                                                                case 'transformer':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $
                                                                                            )['start']['relative'],
                                                                                            'l state': ['transformer', _p_cc(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => null
                                                                                            )],
                                                                                        })
                                                                                    )
                                                                                case 'refiner':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $
                                                                                            )['start']['relative'],
                                                                                            'l state': ['refiner', _p_cc(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'error': _p_cc(
                                                                                                        $.__get_entry(
                                                                                                            'error',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "error"]
                                                                                                            )
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected an optional', null]
                                                                                                            )
                                                                                                        ).__o_map(
                                                                                                            ($) => Type_Node(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        )
                                                                                                    ),
                                                                                                    'lookups': _p_cc(
                                                                                                        $.__get_entry(
                                                                                                            'lookups',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "lookups"]
                                                                                                            )
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected an optional', null]
                                                                                                            )
                                                                                                        ).__o_map(
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a dictionary', null]
                                                                                                                    )
                                                                                                                ).__d_map(
                                                                                                                    ($, id) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $
                                                                                                                        )['start']['relative'],
                                                                                                                        'l entry': _p_cc(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a state', null]
                                                                                                                                )
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['value'],
                                                                                                                                ($t): t_out.Module.types.l_dictionary.D.l_entry.l_state.algorithm.type_.l_state.refiner.lookups.O.l_dictionary.D.l_entry => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'acyclic':
                                                                                                                                            return _p_cc(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $
                                                                                                                                                    )['start']['relative'],
                                                                                                                                                    'l state': ['acyclic', Type_Node(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $
                                                                                                                                                        )
                                                                                                                                                    )],
                                                                                                                                                })
                                                                                                                                            )
                                                                                                                                        case 'cyclic':
                                                                                                                                            return _p_cc(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $
                                                                                                                                                    )['start']['relative'],
                                                                                                                                                    'l state': ['cyclic', Type_Node(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $
                                                                                                                                                        )
                                                                                                                                                    )],
                                                                                                                                                })
                                                                                                                                            )
                                                                                                                                        case 'stack':
                                                                                                                                            return _p_cc(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $
                                                                                                                                                    )['start']['relative'],
                                                                                                                                                    'l state': ['stack', Type_Node(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $
                                                                                                                                                        )
                                                                                                                                                    )],
                                                                                                                                                })
                                                                                                                                            )
                                                                                                                                        default:
                                                                                                                                            return abort(
                                                                                                                                                ['unknown option', $['option']['value']]
                                                                                                                                            )
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            )
                                                                                                                        ),
                                                                                                                    })
                                                                                                                ),
                                                                                                            })
                                                                                                        )
                                                                                                    ),
                                                                                                })
                                                                                            )],
                                                                                        })
                                                                                    )
                                                                                default:
                                                                                    return abort(
                                                                                        ['unknown option', $['option']['value']]
                                                                                    )
                                                                            }
                                                                        }
                                                                    )
                                                                )
                                                            ),
                                                            'parameters': _p_cc(
                                                                $.__get_entry(
                                                                    'parameters',
                                                                    ($) => abort(
                                                                        ['no such entry', "parameters"]
                                                                    )
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected an optional', null]
                                                                    )
                                                                ).__o_map(
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $
                                                                        )['start']['relative'],
                                                                        'l dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a dictionary', null]
                                                                            )
                                                                        ).__d_map(
                                                                            ($, id) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'l entry': Type_Node(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                )
                                                            ),
                                                        })
                                                    )],
                                                })
                                            )
                                        default:
                                            return abort(
                                                ['unknown option', $['option']['value']]
                                            )
                                    }
                                }
                            )
                        ),
                    })
                ),
            })
        ),
    })
)

export const Module_Set: t_signatures.Module_Set = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'l dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'l entry': _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Module_Set.l_dictionary.D.l_entry => {
                        switch ($t) {
                            case 'module':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l state': ['module', Module(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )],
                                    })
                                )
                            case 'set':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l state': ['set', Module_Set(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )],
                                    })
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']]
                                )
                        }
                    }
                )
            ),
        })
    ),
})

export const Type_Reference: t_signatures.Type_Reference = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Type_Reference => {
            switch ($t) {
                case 'import':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['import', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'import': _p_cc(
                                        $.__get_entry(
                                            'import',
                                            ($) => abort(
                                                ['no such entry', "import"]
                                            )
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
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
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null]
                                            )
                                        )
                                    ),
                                })
                            )],
                        })
                    )
                case 'local':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['local', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )],
                        })
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
)

export const Type_Node: t_signatures.Type_Node = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Type_Node => {
            switch ($t) {
                case 'boolean':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null]
                                )
                            )],
                        })
                    )
                case 'component':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['component', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'location': _p_cc(
                                        $.__get_entry(
                                            'location',
                                            ($) => abort(
                                                ['no such entry', "location"]
                                            )
                                        ),
                                        ($) => Type_Reference(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                })
                            )],
                        })
                    )
                case 'dictionary':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['dictionary', Type_Node(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'group':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['group', {
                                'l location': v_parse_tree_to_location.Value(
                                    $
                                )['start']['relative'],
                                'l dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null]
                                    )
                                ).__d_map(
                                    ($, id) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l entry': Type_Node(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        ),
                                    })
                                ),
                            }],
                        })
                    )
                case 'list':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['list', Type_Node(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'nothing':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null]
                                )
                            )],
                        })
                    )
                case 'number':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['number', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Type_Node.l_state.number_ => {
                                        switch ($t) {
                                            case 'exact':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l state': ['exact', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Type_Node.l_state.number_.l_state.exact => {
                                                                    switch ($t) {
                                                                        case 'natural':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l state': ['natural', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a nothing', null]
                                                                                        )
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'integer':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l state': ['integer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a nothing', null]
                                                                                        )
                                                                                    )],
                                                                                })
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']]
                                                                            )
                                                                    }
                                                                }
                                                            )
                                                        )],
                                                    })
                                                )
                                            case 'approximation':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l state': ['approximation', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null]
                                                            )
                                                        )],
                                                    })
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )],
                        })
                    )
                case 'optional':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['optional', Type_Node(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'reference':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['reference', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'location': _p_cc(
                                        $.__get_entry(
                                            'location',
                                            ($) => abort(
                                                ['no such entry', "location"]
                                            )
                                        ),
                                        ($) => Type_Reference(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        )
                                    ),
                                    'sub selection': _p_cc(
                                        $.__get_entry(
                                            'sub selection',
                                            ($) => abort(
                                                ['no such entry', "sub selection"]
                                            )
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $
                                            )['start']['relative'],
                                            'l list': v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null]
                                                )
                                            ).__l_map(
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'l item': _p_cc(
                                                        v_unmarshalled_from_parse_tree.State(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a state', null]
                                                            )
                                                        ),
                                                        ($) => _p.decide.text(
                                                            $['option']['value'],
                                                            ($t): t_out.Type_Node.l_state.reference.sub_selection.l_list.L.l_item => {
                                                                switch ($t) {
                                                                    case 'dictionary':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'l state': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null]
                                                                                    )
                                                                                )],
                                                                            })
                                                                        )
                                                                    case 'group':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'l state': ['group', v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                )],
                                                                            })
                                                                        )
                                                                    case 'list':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'l state': ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null]
                                                                                    )
                                                                                )],
                                                                            })
                                                                        )
                                                                    case 'optional':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null]
                                                                                    )
                                                                                )],
                                                                            })
                                                                        )
                                                                    case 'state':
                                                                        return _p_cc(
                                                                            $['value'],
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $
                                                                                )['start']['relative'],
                                                                                'l state': ['state', v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a text', null]
                                                                                    )
                                                                                )],
                                                                            })
                                                                        )
                                                                    default:
                                                                        return abort(
                                                                            ['unknown option', $['option']['value']]
                                                                        )
                                                                }
                                                            }
                                                        )
                                                    ),
                                                })
                                            ),
                                        })
                                    ),
                                    'cyclic': _p_cc(
                                        $.__get_entry(
                                            'cyclic',
                                            ($) => abort(
                                                ['no such entry', "cyclic"]
                                            )
                                        ),
                                        ($) => v_deserialize_boolean.deserialize(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ),
                                            ($) => abort(
                                                ['not a valid boolean', null]
                                            )
                                        )
                                    ),
                                })
                            )],
                        })
                    )
                case 'state':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['state', {
                                'l location': v_parse_tree_to_location.Value(
                                    $
                                )['start']['relative'],
                                'l dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        ['expected a dictionary', null]
                                    )
                                ).__d_map(
                                    ($, id) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l entry': Type_Node(
                                            $,
                                            ($) => abort(
                                                $
                                            )
                                        ),
                                    })
                                ),
                            }],
                        })
                    )
                case 'text':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['text', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null]
                                )
                            )],
                        })
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
)
