
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/implementation/data/unresolved"

import * as t_external_interface from "../interface/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_interface from "../interface/unmarshall"

export const Module: t_signatures.Module = ($, abort) => _p_cc(
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
                    ($t): t_out.Module.type_ => {
                        switch ($t) {
                            case 'serializer':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['serializer', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )],
                                    })
                                )
                            case 'deserializer':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['deserializer', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )],
                                    })
                                )
                            case 'transformer':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['transformer', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )],
                                    })
                                )
                            case 'refiner':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['refiner', v_unmarshalled_from_parse_tree.Nothing(
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
        ),
        'specials': _p_cc(
            $.__get_entry(
                'specials',
                ($) => abort(
                    ['no such entry', "specials"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'abort': _p_cc(
                        $.__get_entry(
                            'abort',
                            ($) => abort(
                                ['no such entry', "abort"]
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
                    'change context': _p_cc(
                        $.__get_entry(
                            'change context',
                            ($) => abort(
                                ['no such entry', "change context"]
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
                    'implement me': _p_cc(
                        $.__get_entry(
                            'implement me',
                            ($) => abort(
                                ['no such entry', "implement me"]
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
                    'iterate': _p_cc(
                        $.__get_entry(
                            'iterate',
                            ($) => abort(
                                ['no such entry', "iterate"]
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
                    'unreachable code path': _p_cc(
                        $.__get_entry(
                            'unreachable code path',
                            ($) => abort(
                                ['no such entry', "unreachable code path"]
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
            )
        ),
        'type imports': _p_cc(
            $.__get_entry(
                'type imports',
                ($) => abort(
                    ['no such entry', "type imports"]
                )
            ),
            ($) => v_external_interface.Imports(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'variable imports': _p_cc(
            $.__get_entry(
                'variable imports',
                ($) => abort(
                    ['no such entry', "variable imports"]
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
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
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
                                            ($t): t_out.Module.variable_imports.dictionary.D.entry.type_ => {
                                                switch ($t) {
                                                    case 'ancestor':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['ancestor', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
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
                                                                    })
                                                                )],
                                                            })
                                                        )
                                                    case 'external':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['external', v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null]
                                                                    )
                                                                )],
                                                            })
                                                        )
                                                    case 'sibling':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'state': ['sibling', v_unmarshalled_from_parse_tree.Text(
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
                            })
                        ),
                    })
                ),
            })
        ),
        'algorithms': _p_cc(
            $.__get_entry(
                'algorithms',
                ($) => abort(
                    ['no such entry', "algorithms"]
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
                                    ($) => _p_cc(
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
                                    )
                                ),
                                'expression': _p_cc(
                                    $.__get_entry(
                                        'expression',
                                        ($) => abort(
                                            ['no such entry', "expression"]
                                        )
                                    ),
                                    ($) => Expression(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                                'temp has abort': _p_cc(
                                    $.__get_entry(
                                        'temp has abort',
                                        ($) => abort(
                                            ['no such entry', "temp has abort"]
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
                                'temp has lookups': _p_cc(
                                    $.__get_entry(
                                        'temp has lookups',
                                        ($) => abort(
                                            ['no such entry', "temp has lookups"]
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
                                'temp has parameters': _p_cc(
                                    $.__get_entry(
                                        'temp has parameters',
                                        ($) => abort(
                                            ['no such entry', "temp has parameters"]
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
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Module_Set.dictionary.D.entry => {
                        switch ($t) {
                            case 'module':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['module', Module(
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
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['set', Module_Set(
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

export const Temp_Type_Node_Reference: t_signatures.Temp_Type_Node_Reference = ($, abort) => _p_cc(
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
                        'item': _p_cc(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null]
                                )
                            ),
                            ($) => _p.decide.text(
                                $['option']['value'],
                                ($t): t_out.Temp_Type_Node_Reference.sub_selection.list.L.item => {
                                    switch ($t) {
                                        case 'dictionary':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'state': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
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
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'state': ['group', v_unmarshalled_from_parse_tree.Text(
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
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'state': ['list', v_unmarshalled_from_parse_tree.Nothing(
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
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
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
                                                    'location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'state': ['state', v_unmarshalled_from_parse_tree.Text(
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
    })
)

export const Selection: t_signatures.Selection = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Selection => {
            switch ($t) {
                case 'implement me':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )],
                        })
                    )
                case 'regular':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['regular', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'start': _p_cc(
                                        $.__get_entry(
                                            'start',
                                            ($) => abort(
                                                ['no such entry', "start"]
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
                                                ($t): t_out.Selection.state.regular.start => {
                                                    switch ($t) {
                                                        case 'call':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['call', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_cc(
                                                                                $.__get_entry(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"]
                                                                                    )
                                                                                ),
                                                                                ($) => Selection(
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
                                                                                ($) => Expression(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'abort': _p_cc(
                                                                                $.__get_entry(
                                                                                    'abort',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "abort"]
                                                                                    )
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected an optional', null]
                                                                                    )
                                                                                ).__o_map(
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'arguments': _p_cc(
                                                                                $.__get_entry(
                                                                                    'arguments',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "arguments"]
                                                                                    )
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected an optional', null]
                                                                                    )
                                                                                ).__o_map(
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
                                                                                                'entry': Expression(
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
                                                        case 'context':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['context', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null]
                                                                        )
                                                                    )],
                                                                })
                                                            )
                                                        case 'entry':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['entry', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'dictionary': _p_cc(
                                                                                $.__get_entry(
                                                                                    'dictionary',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "dictionary"]
                                                                                    )
                                                                                ),
                                                                                ($) => Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'id': _p_cc(
                                                                                $.__get_entry(
                                                                                    'id',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "id"]
                                                                                    )
                                                                                ),
                                                                                ($) => Expression(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'abort handler': _p_cc(
                                                                                $.__get_entry(
                                                                                    'abort handler',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "abort handler"]
                                                                                    )
                                                                                ),
                                                                                ($) => Expression(
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
                                                        case 'variable':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['variable', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a state', null]
                                                                            )
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['value'],
                                                                            ($t): t_out.Selection.state.regular.start.state.variable => {
                                                                                switch ($t) {
                                                                                    case 'local':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'state': ['local', v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a text', null]
                                                                                                    )
                                                                                                )],
                                                                                            })
                                                                                        )
                                                                                    case 'imported':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'state': ['imported', _p_cc(
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
                                                                                                        'variable': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'variable',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "variable"]
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
                                                        case 'parameter':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['parameter', v_unmarshalled_from_parse_tree.Text(
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

export const Expression: t_signatures.Expression = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Expression => {
            switch ($t) {
                case 'decide':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['decide', _p_cc(
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
                                                ($t): t_out.Expression.state.decide.type_ => {
                                                    switch ($t) {
                                                        case 'boolean':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['boolean', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_cc(
                                                                                $.__get_entry(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"]
                                                                                    )
                                                                                ),
                                                                                ($) => Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'temp resulting node': _p_cc(
                                                                                $.__get_entry(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"]
                                                                                    )
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected an optional', null]
                                                                                    )
                                                                                ).__o_map(
                                                                                    ($) => Temp_Type_Node_Reference(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'if false': _p_cc(
                                                                                $.__get_entry(
                                                                                    'if false',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if false"]
                                                                                    )
                                                                                ),
                                                                                ($) => Expression(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'if true': _p_cc(
                                                                                $.__get_entry(
                                                                                    'if true',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if true"]
                                                                                    )
                                                                                ),
                                                                                ($) => Expression(
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
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['dictionary', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a state', null]
                                                                            )
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['value'],
                                                                            ($t): t_out.Expression.state.decide.type_.state.dictionary => {
                                                                                switch ($t) {
                                                                                    case 'has entries':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'state': ['has entries', _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'dictionary': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'dictionary',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "dictionary"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Selection(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if true': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if true',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if true"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if false': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if false',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if false"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
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
                                                        case 'list':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['list', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a state', null]
                                                                            )
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['value'],
                                                                            ($t): t_out.Expression.state.decide.type_.state.list => {
                                                                                switch ($t) {
                                                                                    case 'has first item':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'state': ['has first item', _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'list': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'list',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "list"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Selection(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if true': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if true',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if true"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if false': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if false',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if false"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
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
                                                                                    case 'has last item':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'state': ['has last item', _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'list': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'list',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "list"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Selection(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if true': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if true',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if true"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if false': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if false',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if false"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
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
                                                                                    case 'has items':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'state': ['has items', _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'list': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'list',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "list"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Selection(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if true': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if true',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if true"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'if false': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'if false',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "if false"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Expression(
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
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['optional', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_cc(
                                                                                $.__get_entry(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"]
                                                                                    )
                                                                                ),
                                                                                ($) => Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'temp resulting node': _p_cc(
                                                                                $.__get_entry(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"]
                                                                                    )
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected an optional', null]
                                                                                    )
                                                                                ).__o_map(
                                                                                    ($) => Temp_Type_Node_Reference(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'if not set': _p_cc(
                                                                                $.__get_entry(
                                                                                    'if not set',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if not set"]
                                                                                    )
                                                                                ),
                                                                                ($) => Expression(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'if set': _p_cc(
                                                                                $.__get_entry(
                                                                                    'if set',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if set"]
                                                                                    )
                                                                                ),
                                                                                ($) => Expression(
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
                                                        case 'state':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['state', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_cc(
                                                                                $.__get_entry(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"]
                                                                                    )
                                                                                ),
                                                                                ($) => Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'temp resulting node': _p_cc(
                                                                                $.__get_entry(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"]
                                                                                    )
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected an optional', null]
                                                                                    )
                                                                                ).__o_map(
                                                                                    ($) => Temp_Type_Node_Reference(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
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
                                                                                        ($t): t_out.Expression.state.decide.type_.state.state.type_ => {
                                                                                            switch ($t) {
                                                                                                case 'partial':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'state': ['partial', _p_cc(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null]
                                                                                                                    )
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'options': _p_cc(
                                                                                                                        $.__get_entry(
                                                                                                                            'options',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "options"]
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
                                                                                                                                    'entry': Expression(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                })
                                                                                                                            ),
                                                                                                                        })
                                                                                                                    ),
                                                                                                                    'default': _p_cc(
                                                                                                                        $.__get_entry(
                                                                                                                            'default',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "default"]
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        ($) => Expression(
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
                                                                                                case 'full':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'state': ['full', _p_cc(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null]
                                                                                                                    )
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'options': _p_cc(
                                                                                                                        $.__get_entry(
                                                                                                                            'options',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "options"]
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
                                                                                                                                    'entry': Expression(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                })
                                                                                                                            ),
                                                                                                                        })
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
                                                                        })
                                                                    )],
                                                                })
                                                            )
                                                        case 'text':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'state': ['text', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_cc(
                                                                                $.__get_entry(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"]
                                                                                    )
                                                                                ),
                                                                                ($) => Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'temp resulting node': _p_cc(
                                                                                $.__get_entry(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"]
                                                                                    )
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected an optional', null]
                                                                                    )
                                                                                ).__o_map(
                                                                                    ($) => Temp_Type_Node_Reference(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )
                                                                                )
                                                                            ),
                                                                            'cases': _p_cc(
                                                                                $.__get_entry(
                                                                                    'cases',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "cases"]
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
                                                                                            'entry': Expression(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        })
                                                                                    ),
                                                                                })
                                                                            ),
                                                                            'default': _p_cc(
                                                                                $.__get_entry(
                                                                                    'default',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "default"]
                                                                                    )
                                                                                ),
                                                                                ($) => Expression(
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
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']]
                                                            )
                                                    }
                                                }
                                            )
                                        )
                                    ),
                                })
                            )],
                        })
                    )
                case 'initialize':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['initialize', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Expression.state.initialize => {
                                        switch ($t) {
                                            case 'boolean':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['boolean', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.state.initialize.state.boolean_ => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['literal', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.state.initialize.state.boolean_.state.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'false':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null]
                                                                                                                    )
                                                                                                                )],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'true':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['true', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                        case 'not':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['not', Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'copy':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['copy', Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'dictionary is empty':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['dictionary is empty', Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'list is empty':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['list is empty', Selection(
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
                                                        )],
                                                    })
                                                )
                                            case 'dictionary':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['dictionary', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.state.initialize.state.dictionary => {
                                                                    switch ($t) {
                                                                        case 'filter':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['filter', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'entry handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'entry handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "entry handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'from list':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['from list', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'get id': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'get id',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "get id"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'get entry': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'get entry',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "get entry"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'abort': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'abort',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "abort"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['literal', ({
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
                                                                                                'entry': Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                ),
                                                                                            })
                                                                                        ),
                                                                                    })],
                                                                                })
                                                                            )
                                                                        case 'map':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['map', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'entry handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'entry handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "entry handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'resolve':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['resolve', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'entry handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'entry handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "entry handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                            case 'group':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['group', ({
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
                                                                    'entry': Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        )
                                                                    ),
                                                                })
                                                            ),
                                                        })],
                                                    })
                                                )
                                            case 'list':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['list', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.state.initialize.state.list => {
                                                                    switch ($t) {
                                                                        case 'filter':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['filter', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'entry handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'entry handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "entry handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'from dictionary':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['from dictionary', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'get item': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'get item',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "get item"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['literal', ({
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
                                                                                                'item': Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                ),
                                                                                            })
                                                                                        ),
                                                                                    })],
                                                                                })
                                                                            )
                                                                        case 'map':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['map', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'item handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'item handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "item handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'map with state':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['map with state', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'initial state': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'initial state',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "initial state"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'item handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'item handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "item handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'update state': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'update state',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "update state"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'wrap up': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'wrap up',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "wrap up"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'reduce':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['reduce', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'initial state': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'initial state',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "initial state"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'item handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'item handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "item handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'reverse':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['reverse', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
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
                                            case 'nothing':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
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
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['number', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.state.initialize.state.number_ => {
                                                                    switch ($t) {
                                                                        case 'approximation':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['approximation', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.state.initialize.state.number_.state.approximation => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['literal', v_deserialize_number.deserialize(
                                                                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a text', null]
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    ($) => abort(
                                                                                                                        ['not a valid number', null]
                                                                                                                    )
                                                                                                                )],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['copy', Selection(
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
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'integer':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['integer', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.state.initialize.state.number_.state.integer => {
                                                                                                switch ($t) {
                                                                                                    case 'copy':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['copy', Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $
                                                                                                                    )
                                                                                                                )],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'divide':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['divide', _p_cc(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null]
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'divident': _p_cc(
                                                                                                                            $.__get_entry(
                                                                                                                                'divident',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "divident"]
                                                                                                                                )
                                                                                                                            ),
                                                                                                                            ($) => Selection(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $
                                                                                                                                )
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        'divisor': _p_cc(
                                                                                                                            $.__get_entry(
                                                                                                                                'divisor',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "divisor"]
                                                                                                                                )
                                                                                                                            ),
                                                                                                                            ($) => Selection(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $
                                                                                                                                )
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        'abort': _p_cc(
                                                                                                                            $.__get_entry(
                                                                                                                                'abort',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "abort"]
                                                                                                                                )
                                                                                                                            ),
                                                                                                                            ($) => Expression(
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
                                                                                                    case 'literal':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['literal', v_deserialize_number.deserialize(
                                                                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a text', null]
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    ($) => abort(
                                                                                                                        ['not a valid number', null]
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
                                                                        case 'natural':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['natural', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.state.initialize.state.number_.state.natural => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['literal', v_deserialize_number.deserialize(
                                                                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a text', null]
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    ($) => abort(
                                                                                                                        ['not a valid number', null]
                                                                                                                    )
                                                                                                                )],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['copy', Selection(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $
                                                                                                                    )
                                                                                                                )],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'number of dictionary entries':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['number of dictionary entries', _p_cc(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null]
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'dictionary': _p_cc(
                                                                                                                            $.__get_entry(
                                                                                                                                'dictionary',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "dictionary"]
                                                                                                                                )
                                                                                                                            ),
                                                                                                                            ($) => Selection(
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
                                                                                                    case 'number of list items':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['number of list items', _p_cc(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null]
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'list': _p_cc(
                                                                                                                            $.__get_entry(
                                                                                                                                'list',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "list"]
                                                                                                                                )
                                                                                                                            ),
                                                                                                                            ($) => Selection(
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
                                                                                                    case 'source column':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['source column', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null]
                                                                                                                    )
                                                                                                                )],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'source line':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['source line', v_unmarshalled_from_parse_tree.Nothing(
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
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['optional', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.state.initialize.state.optional => {
                                                                    switch ($t) {
                                                                        case 'from boolean':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['from boolean', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'get set': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'get set',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "get set"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['literal', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.state.initialize.state.optional.state.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'not set':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null]
                                                                                                                    )
                                                                                                                )],
                                                                                                            })
                                                                                                        )
                                                                                                    case 'set':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'state': ['set', Expression(
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
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'map':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['map', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'source': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'source',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "source"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'set handler': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'set handler',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "set handler"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                            case 'state':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['state', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.state.initialize.state.state => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['literal', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'option': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'option',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "option"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a text', null]
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'value': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'value',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "value"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Expression(
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
                                            case 'text':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['text', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.state.initialize.state.text => {
                                                                    switch ($t) {
                                                                        case 'copy':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['copy', Selection(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $
                                                                                        )
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['literal', _p_cc(
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
                                                                                                        ($t): t_out.Expression.state.initialize.state.text.state.literal.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'identifier':
                                                                                                                    return _p_cc(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'state': ['identifier', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a nothing', null]
                                                                                                                                )
                                                                                                                            )],
                                                                                                                        })
                                                                                                                    )
                                                                                                                case 'freeform':
                                                                                                                    return _p_cc(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'state': ['freeform', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                    )],
                                                                                })
                                                                            )
                                                                        case 'source document':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'state': ['source document', v_unmarshalled_from_parse_tree.Nothing(
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
                case 'select':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['select', Selection(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'special':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['special', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Expression.state.special => {
                                        switch ($t) {
                                            case 'abort':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['abort', Expression(
                                                            $,
                                                            ($) => abort(
                                                                $
                                                            )
                                                        )],
                                                    })
                                                )
                                            case 'assert':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['assert', _p_cc(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'tester': _p_cc(
                                                                    $.__get_entry(
                                                                        'tester',
                                                                        ($) => abort(
                                                                            ['no such entry', "tester"]
                                                                        )
                                                                    ),
                                                                    ($) => Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        )
                                                                    )
                                                                ),
                                                                'normal flow': _p_cc(
                                                                    $.__get_entry(
                                                                        'normal flow',
                                                                        ($) => abort(
                                                                            ['no such entry', "normal flow"]
                                                                        )
                                                                    ),
                                                                    ($) => Expression(
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
                                            case 'block':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['block', _p_cc(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'variables': _p_cc(
                                                                    $.__get_entry(
                                                                        'variables',
                                                                        ($) => abort(
                                                                            ['no such entry', "variables"]
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
                                                                                            ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected an optional', null]
                                                                                                )
                                                                                            ).__o_map(
                                                                                                ($) => Temp_Type_Node_Reference(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        ),
                                                                                        'expression': _p_cc(
                                                                                            $.__get_entry(
                                                                                                'expression',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "expression"]
                                                                                                )
                                                                                            ),
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                )
                                                                                            )
                                                                                        ),
                                                                                    })
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                ),
                                                                'temp ordered variables': _p_cc(
                                                                    $.__get_entry(
                                                                        'temp ordered variables',
                                                                        ($) => abort(
                                                                            ['no such entry', "temp ordered variables"]
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
                                                                                'item': _p_cc(
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
                                                                                            ($) => v_unmarshalled_from_parse_tree.Optional(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected an optional', null]
                                                                                                )
                                                                                            ).__o_map(
                                                                                                ($) => Temp_Type_Node_Reference(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        ),
                                                                                        'expression': _p_cc(
                                                                                            $.__get_entry(
                                                                                                'expression',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "expression"]
                                                                                                )
                                                                                            ),
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                )
                                                                                            )
                                                                                        ),
                                                                                    })
                                                                                ),
                                                                            })
                                                                        ),
                                                                    })
                                                                ),
                                                                'expression': _p_cc(
                                                                    $.__get_entry(
                                                                        'expression',
                                                                        ($) => abort(
                                                                            ['no such entry', "expression"]
                                                                        )
                                                                    ),
                                                                    ($) => Expression(
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
                                            case 'change context':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['change context', _p_cc(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'new context': _p_cc(
                                                                    $.__get_entry(
                                                                        'new context',
                                                                        ($) => abort(
                                                                            ['no such entry', "new context"]
                                                                        )
                                                                    ),
                                                                    ($) => Selection(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        )
                                                                    )
                                                                ),
                                                                'expression': _p_cc(
                                                                    $.__get_entry(
                                                                        'expression',
                                                                        ($) => abort(
                                                                            ['no such entry', "expression"]
                                                                        )
                                                                    ),
                                                                    ($) => Expression(
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
                                            case 'implement me':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null]
                                                            )
                                                        )],
                                                    })
                                                )
                                            case 'iterate':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['iterate', _p_cc(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'list': _p_cc(
                                                                    $.__get_entry(
                                                                        'list',
                                                                        ($) => abort(
                                                                            ['no such entry', "list"]
                                                                        )
                                                                    ),
                                                                    ($) => Selection(
                                                                        $,
                                                                        ($) => abort(
                                                                            $
                                                                        )
                                                                    )
                                                                ),
                                                                'handler': _p_cc(
                                                                    $.__get_entry(
                                                                        'handler',
                                                                        ($) => abort(
                                                                            ['no such entry', "handler"]
                                                                        )
                                                                    ),
                                                                    ($) => Expression(
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
                                            case 'unreachable':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['unreachable', v_unmarshalled_from_parse_tree.Nothing(
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
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
)
