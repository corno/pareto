
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
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l value': ['serializer', v_unmarshalled_from_parse_tree.Nothing(
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
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l value': ['deserializer', v_unmarshalled_from_parse_tree.Nothing(
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
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l value': ['transformer', v_unmarshalled_from_parse_tree.Nothing(
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
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l value': ['refiner', v_unmarshalled_from_parse_tree.Nothing(
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
                'l location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'l value': _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null]
                        )
                    ),
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
                                        'l value': _p.list.map(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null]
                                                )
                                            ),
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
                                            ($t): t_out.Module.variable_imports.l_value.D.l_entry.type_ => {
                                                switch ($t) {
                                                    case 'ancestor':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'l value': ['ancestor', _p_cc(
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
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'l value': ['external', v_unmarshalled_from_parse_tree.Text(
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
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $
                                                                )['start']['relative'],
                                                                'l value': ['sibling', v_unmarshalled_from_parse_tree.Text(
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
                'l location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'l value': _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null]
                        )
                    ),
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
    'l location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'l value': _p.dictionary.map(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null]
            )
        ),
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
                    ($t): t_out.Module_Set.l_value.D.l_entry => {
                        switch ($t) {
                            case 'module':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l value': ['module', Module(
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
                                        'l value': ['set', Module_Set(
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
                'l location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'l value': _p.list.map(
                    v_unmarshalled_from_parse_tree.List(
                        $,
                        ($) => abort(
                            ['expected a list', null]
                        )
                    ),
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
                                ($t): t_out.Temp_Type_Node_Reference.sub_selection.l_value.L.l_item => {
                                    switch ($t) {
                                        case 'dictionary':
                                            return _p_cc(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $
                                                    )['start']['relative'],
                                                    'l value': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
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
                                                    'l value': ['group', v_unmarshalled_from_parse_tree.Text(
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
                                                    'l value': ['list', v_unmarshalled_from_parse_tree.Nothing(
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
                                                    'l value': ['optional', v_unmarshalled_from_parse_tree.Nothing(
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
                                                    'l value': ['state', v_unmarshalled_from_parse_tree.Text(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['implement me', v_unmarshalled_from_parse_tree.Text(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['regular', _p_cc(
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
                                                ($t): t_out.Selection.l_value.regular.start => {
                                                    switch ($t) {
                                                        case 'call':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['call', _p_cc(
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
                                                                                ($) => _p_cc(
                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a state', null]
                                                                                        )
                                                                                    ),
                                                                                    ($) => _p.decide.text(
                                                                                        $['option']['value'],
                                                                                        ($t): t_out.Selection.l_value.regular.start.l_value.call.source => {
                                                                                            switch ($t) {
                                                                                                case 'local':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'l value': ['local', v_unmarshalled_from_parse_tree.Text(
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
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'l value': ['imported', _p_cc(
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
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null]
                                                                                        )
                                                                                    ),
                                                                                    ($) => Expression(
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
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null]
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
                                                                                            ($t): t_out.Selection.l_value.regular.start.l_value.call.lookups.O => {
                                                                                                switch ($t) {
                                                                                                    case 'initialize':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['initialize', {
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $
                                                                                                                    )['start']['relative'],
                                                                                                                    'l value': _p.dictionary.map(
                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a dictionary', null]
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        ($, id) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'l entry': Lookup_Selection(
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
                                                                                                    case 'pass through':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                )
                                                                            ),
                                                                            'arguments': _p_cc(
                                                                                $.__get_entry(
                                                                                    'arguments',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "arguments"]
                                                                                    )
                                                                                ),
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null]
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
                                                                                            ($t): t_out.Selection.l_value.regular.start.l_value.call.arguments_.O => {
                                                                                                switch ($t) {
                                                                                                    case 'initialize':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['initialize', {
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $
                                                                                                                    )['start']['relative'],
                                                                                                                    'l value': _p.dictionary.map(
                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a dictionary', null]
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        ($, id) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'l entry': Expression(
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
                                                                                                    case 'pass through':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['context', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null]
                                                                        )
                                                                    )],
                                                                })
                                                            )
                                                        case 'dictionary entry':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['dictionary entry', _p_cc(
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
                                                        case 'lookup entry':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['lookup entry', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null]
                                                                            )
                                                                        ),
                                                                        ($) => ({
                                                                            'lookup': _p_cc(
                                                                                $.__get_entry(
                                                                                    'lookup',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "lookup"]
                                                                                    )
                                                                                ),
                                                                                ($) => Lookup_Selection(
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
                                                        case 'parameter':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['parameter', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null]
                                                                        )
                                                                    )],
                                                                })
                                                            )
                                                        case 'parent sibling':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['parent sibling', v_unmarshalled_from_parse_tree.Text(
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
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['sibling', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null]
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
                                                                    'l value': ['state', v_unmarshalled_from_parse_tree.Nothing(
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
                                            'l value': _p.list.map(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null]
                                                    )
                                                ),
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['decide', _p_cc(
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
                                                ($t): t_out.Expression.l_value.decide.type_ => {
                                                    switch ($t) {
                                                        case 'boolean':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['boolean', _p_cc(
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
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null]
                                                                                        )
                                                                                    ),
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
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['dictionary', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a state', null]
                                                                            )
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['value'],
                                                                            ($t): t_out.Expression.l_value.decide.type_.l_value.dictionary => {
                                                                                switch ($t) {
                                                                                    case 'has entries':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l value': ['has entries', _p_cc(
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
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['list', _p_cc(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a state', null]
                                                                            )
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['value'],
                                                                            ($t): t_out.Expression.l_value.decide.type_.l_value.list => {
                                                                                switch ($t) {
                                                                                    case 'has first item':
                                                                                        return _p_cc(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l value': ['has first item', _p_cc(
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
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l value': ['has last item', _p_cc(
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
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l value': ['has items', _p_cc(
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
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['optional', _p_cc(
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
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null]
                                                                                        )
                                                                                    ),
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
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['state', _p_cc(
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
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null]
                                                                                        )
                                                                                    ),
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
                                                                                        ($t): t_out.Expression.l_value.decide.type_.l_value.state.type_ => {
                                                                                            switch ($t) {
                                                                                                case 'partial':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'l value': ['partial', _p_cc(
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
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'l value': _p.dictionary.map(
                                                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a dictionary', null]
                                                                                                                                    )
                                                                                                                                ),
                                                                                                                                ($, id) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $
                                                                                                                                    )['start']['relative'],
                                                                                                                                    'l entry': Expression(
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
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $
                                                                                                            )['start']['relative'],
                                                                                                            'l value': ['full', _p_cc(
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
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'l value': _p.dictionary.map(
                                                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a dictionary', null]
                                                                                                                                    )
                                                                                                                                ),
                                                                                                                                ($, id) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $
                                                                                                                                    )['start']['relative'],
                                                                                                                                    'l entry': Expression(
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
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $
                                                                    )['start']['relative'],
                                                                    'l value': ['text', _p_cc(
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
                                                                                ($) => _p.optional.map(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null]
                                                                                        )
                                                                                    ),
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': _p.dictionary.map(
                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a dictionary', null]
                                                                                            )
                                                                                        ),
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $
                                                                                            )['start']['relative'],
                                                                                            'l entry': Expression(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['initialize', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Expression.l_value.initialize => {
                                        switch ($t) {
                                            case 'boolean':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['boolean', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.boolean_ => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['literal', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.l_value.initialize.l_value.boolean_.l_value.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'false':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['false', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['true', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['not', Selection(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['copy', Selection(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['dictionary is empty', Selection(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['list is empty', Selection(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['dictionary', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.dictionary => {
                                                                    switch ($t) {
                                                                        case 'filter':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['filter', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['from list', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['literal', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'l value': _p.dictionary.map(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a dictionary', null]
                                                                                                )
                                                                                            ),
                                                                                            ($, id) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l entry': Expression(
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
                                                                        case 'map':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['map', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['resolve', _p_cc(
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
                                                                                            'temp resulting entry node': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'temp resulting entry node',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "temp resulting entry node"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Temp_Type_Node_Reference(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['group', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.group => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['literal', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'l value': _p.dictionary.map(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a dictionary', null]
                                                                                                )
                                                                                            ),
                                                                                            ($, id) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l entry': Expression(
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
                                                                        case 'resolve':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['resolve', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'l value': _p.dictionary.map(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a dictionary', null]
                                                                                                )
                                                                                            ),
                                                                                            ($, id) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l entry': Expression(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['list', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.list => {
                                                                    switch ($t) {
                                                                        case 'filter':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['filter', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['from dictionary', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['literal', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $
                                                                                        )['start']['relative'],
                                                                                        'l value': _p.list.map(
                                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a list', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $
                                                                                                )['start']['relative'],
                                                                                                'l item': Expression(
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
                                                                        case 'map':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['map', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['map with state', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['reduce', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['reverse', _p_cc(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
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
                                                        'l value': ['number', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.number_ => {
                                                                    switch ($t) {
                                                                        case 'approximation':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['approximation', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.l_value.initialize.l_value.number_.l_value.approximation => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['literal', v_deserialize_number.deserialize(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['copy', Selection(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['integer', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.l_value.initialize.l_value.number_.l_value.integer => {
                                                                                                switch ($t) {
                                                                                                    case 'copy':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['copy', Selection(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['divide', _p_cc(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['literal', v_deserialize_number.deserialize(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['natural', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.l_value.initialize.l_value.number_.l_value.natural => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['literal', v_deserialize_number.deserialize(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['copy', Selection(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['number of dictionary entries', _p_cc(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['number of list items', _p_cc(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['source column', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['source line', v_unmarshalled_from_parse_tree.Nothing(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['optional', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.optional => {
                                                                    switch ($t) {
                                                                        case 'from boolean':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['from boolean', _p_cc(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['literal', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Expression.l_value.initialize.l_value.optional.l_value.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'not set':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['not set', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $
                                                                                                                )['start']['relative'],
                                                                                                                'l value': ['set', Expression(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['map', _p_cc(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['state', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.state => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['literal', _p_cc(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['text', _p_cc(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null]
                                                                )
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Expression.l_value.initialize.l_value.text => {
                                                                    switch ($t) {
                                                                        case 'copy':
                                                                            return _p_cc(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['copy', Selection(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['literal', _p_cc(
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
                                                                                                        ($t): t_out.Expression.l_value.initialize.l_value.text.l_value.literal.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'identifier':
                                                                                                                    return _p_cc(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'l value': ['identifier', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $
                                                                                                                            )['start']['relative'],
                                                                                                                            'l value': ['freeform', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $
                                                                                    )['start']['relative'],
                                                                                    'l value': ['source document', v_unmarshalled_from_parse_tree.Nothing(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['select', Selection(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['special', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Expression.l_value.special => {
                                        switch ($t) {
                                            case 'abort':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['abort', Expression(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['assert', _p_cc(
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
                                            case 'change context':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['change context', _p_cc(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['implement me', v_unmarshalled_from_parse_tree.Text(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['iterate', _p_cc(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l value': ['unreachable', v_unmarshalled_from_parse_tree.Nothing(
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

export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Lookup_Selection => {
            switch ($t) {
                case 'implement me':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )],
                        })
                    )
                case 'from resolved dictionary':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['from resolved dictionary', Selection(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'from siblings':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['from siblings', _p_cc(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null]
                                    )
                                ),
                                ($) => ({
                                    'cycles allowed': _p_cc(
                                        $.__get_entry(
                                            'cycles allowed',
                                            ($) => abort(
                                                ['no such entry', "cycles allowed"]
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
                case 'from parameter':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['from parameter', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )],
                        })
                    )
                case 'not set':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l value': ['not set', v_unmarshalled_from_parse_tree.Nothing(
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
