
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/unmarshall"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/implementation/data/unresolved"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_interface from "../../../interface/unresolved/refiners/astn_parse_tree"

export const Package_Set: t_signatures.Package_Set = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
                    ),
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Package_Set.l_dictionary.D.l_entry => {
                        switch ($t) {
                            case 'package':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['package', Package(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        )],
                                    }),
                                )
                            case 'set':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['set', Package_Set(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        }),
    ),
})

export const Package: t_signatures.Package = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'specials': _p_change_context(
            $.__get_entry_deprecated(
                'specials',
                ($) => abort(
                    ['no such entry', "specials"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'abort': _p_change_context(
                        $.__get_entry_deprecated(
                            'abort',
                            ($) => abort(
                                ['no such entry', "abort"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'change context': _p_change_context(
                        $.__get_entry_deprecated(
                            'change context',
                            ($) => abort(
                                ['no such entry', "change context"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'implement me': _p_change_context(
                        $.__get_entry_deprecated(
                            'implement me',
                            ($) => abort(
                                ['no such entry', "implement me"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'iterate': _p_change_context(
                        $.__get_entry_deprecated(
                            'iterate',
                            ($) => abort(
                                ['no such entry', "iterate"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'lookups': _p_change_context(
                        $.__get_entry_deprecated(
                            'lookups',
                            ($) => abort(
                                ['no such entry', "lookups"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'list from text': _p_change_context(
                        $.__get_entry_deprecated(
                            'list from text',
                            ($) => abort(
                                ['no such entry', "list from text"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'text from list': _p_change_context(
                        $.__get_entry_deprecated(
                            'text from list',
                            ($) => abort(
                                ['no such entry', "text from list"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'unreachable code path': _p_change_context(
                        $.__get_entry_deprecated(
                            'unreachable code path',
                            ($) => abort(
                                ['no such entry', "unreachable code path"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                    'variables': _p_change_context(
                        $.__get_entry_deprecated(
                            'variables',
                            ($) => abort(
                                ['no such entry', "variables"],
                            ),
                        ),
                        ($) => v_deserialize_boolean.deserialize(
                            _p_list_from_text(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                                ($) => $,
                            ),
                            ($) => abort(
                                ['not a valid boolean', null],
                            ),
                        ),
                    ),
                }),
            ),
        ),
        'type imports': _p_change_context(
            $.__get_entry_deprecated(
                'type imports',
                ($) => abort(
                    ['no such entry', "type imports"],
                ),
            ),
            ($) => v_external_interface.Imports(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'variable imports': _p_change_context(
            $.__get_entry_deprecated(
                'variable imports',
                ($) => abort(
                    ['no such entry', "variable imports"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'tail': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'tail',
                                        ($) => abort(
                                            ['no such entry', "tail"],
                                        ),
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l list': _p.list.from.list(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    ['expected a list', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                )['start']['relative'],
                                                'l item': v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            }),
                                        ),
                                    }),
                                ),
                                'type': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'type',
                                        ($) => abort(
                                            ['no such entry', "type"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Package.variable_imports.l_dictionary.D.l_entry.type_ => {
                                                switch ($t) {
                                                    case 'ancestor':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['ancestor', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'dependency': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'dependency',
                                                                                ($) => abort(
                                                                                    ['no such entry', "dependency"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'number of steps': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'number of steps',
                                                                                ($) => abort(
                                                                                    ['no such entry', "number of steps"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_deserialize_number.deserialize(
                                                                                _p_list_from_text(
                                                                                    v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => $,
                                                                                ),
                                                                                ($) => abort(
                                                                                    ['not a valid number', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            }),
                                                        )
                                                    case 'external':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['external', v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'sibling':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l state': ['sibling', v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'functions': _p_change_context(
            $.__get_entry_deprecated(
                'functions',
                ($) => abort(
                    ['no such entry', "functions"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'type': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'type',
                                        ($) => abort(
                                            ['no such entry', "type"],
                                        ),
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'import': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'import',
                                                    ($) => abort(
                                                        ['no such entry', "import"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                            'type': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'type',
                                                    ($) => abort(
                                                        ['no such entry', "type"],
                                                    ),
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                        }),
                                    ),
                                ),
                                'expression': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'expression',
                                        ($) => abort(
                                            ['no such entry', "expression"],
                                        ),
                                    ),
                                    ($) => Assign(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'temp has abort': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'temp has abort',
                                        ($) => abort(
                                            ['no such entry', "temp has abort"],
                                        ),
                                    ),
                                    ($) => v_deserialize_boolean.deserialize(
                                        _p_list_from_text(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                            ($) => $,
                                        ),
                                        ($) => abort(
                                            ['not a valid boolean', null],
                                        ),
                                    ),
                                ),
                                'temp has lookups': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'temp has lookups',
                                        ($) => abort(
                                            ['no such entry', "temp has lookups"],
                                        ),
                                    ),
                                    ($) => v_deserialize_boolean.deserialize(
                                        _p_list_from_text(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                            ($) => $,
                                        ),
                                        ($) => abort(
                                            ['not a valid boolean', null],
                                        ),
                                    ),
                                ),
                                'temp has parameters': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'temp has parameters',
                                        ($) => abort(
                                            ['no such entry', "temp has parameters"],
                                        ),
                                    ),
                                    ($) => v_deserialize_boolean.deserialize(
                                        _p_list_from_text(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                            ($) => $,
                                        ),
                                        ($) => abort(
                                            ['not a valid boolean', null],
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'type': _p_change_context(
            $.__get_entry_deprecated(
                'type',
                ($) => abort(
                    ['no such entry', "type"],
                ),
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'import': _p_change_context(
                        $.__get_entry_deprecated(
                            'import',
                            ($) => abort(
                                ['no such entry', "import"],
                            ),
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null],
                            ),
                        ),
                    ),
                    'type': _p_change_context(
                        $.__get_entry_deprecated(
                            'type',
                            ($) => abort(
                                ['no such entry', "type"],
                            ),
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null],
                            ),
                        ),
                    ),
                }),
            ),
        ),
        'sub selection': _p_change_context(
            $.__get_entry_deprecated(
                'sub selection',
                ($) => abort(
                    ['no such entry', "sub selection"],
                ),
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l list': _p.list.from.list(
                    v_unmarshalled_from_parse_tree.List(
                        $,
                        ($) => abort(
                            ['expected a list', null],
                        ),
                    ),
                ).map(
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l item': _p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null],
                                ),
                            ),
                            ($) => _p.decide.text(
                                $['option']['value'],
                                ($t): t_out.Temp_Value_Type_Specification.sub_selection.l_list.L.l_item => {
                                    switch ($t) {
                                        case 'dictionary':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l state': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                }),
                                            )
                                        case 'group':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l state': ['group', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    )],
                                                }),
                                            )
                                        case 'list':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l state': ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                }),
                                            )
                                        case 'optional':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                }),
                                            )
                                        case 'state':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l state': ['state', v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    )],
                                                }),
                                            )
                                        default:
                                            return abort(
                                                ['unknown option', $['option']['value']],
                                            )
                                    }
                                },
                            ),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Assign: t_signatures.Assign = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Assign => {
            switch ($t) {
                case 'decide':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['decide', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'source': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'source',
                                            ($) => abort(
                                                ['no such entry', "source"],
                                            ),
                                        ),
                                        ($) => Select_Value(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'type': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'type',
                                            ($) => abort(
                                                ['no such entry', "type"],
                                            ),
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
                                                ),
                                            ),
                                            ($) => _p.decide.text(
                                                $['option']['value'],
                                                ($t): t_out.Assign.l_state.decide.type_ => {
                                                    switch ($t) {
                                                        case 'boolean':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['boolean', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'temp resulting node': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.from.optional(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'if false': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'if false',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if false"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'if true': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'if true',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if true"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'optional':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['optional', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'temp resulting node': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.from.optional(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'if not set': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'if not set',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if not set"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'if set': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'if set',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "if set"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'state':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['state', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'temp resulting node': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.from.optional(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'type': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'type',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "type"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a state', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.decide.text(
                                                                                        $['option']['value'],
                                                                                        ($t): t_out.Assign.l_state.decide.type_.l_state.state.type_ => {
                                                                                            switch ($t) {
                                                                                                case 'partial':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['partial', _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'options': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'options',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "options"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a dictionary', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ).map(
                                                                                                                                ($, id) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    )['start']['relative'],
                                                                                                                                    'l entry': Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    ),
                                                                                                                    'default': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'default',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "default"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }),
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'full':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['full', _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'options': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'options',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "options"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a dictionary', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ).map(
                                                                                                                                ($, id) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    )['start']['relative'],
                                                                                                                                    'l entry': Assign(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    ),
                                                                                                                }),
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'single':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['single', _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'option': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'option',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "option"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'if true': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'if true',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "if true"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'if false': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'if false',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "if false"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }),
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return abort(
                                                                                                        ['unknown option', $['option']['value']],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'text':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['text', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'temp resulting node': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'temp resulting node',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "temp resulting node"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.from.optional(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                ).map(
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'cases': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'cases',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "cases"],
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a dictionary', null],
                                                                                            ),
                                                                                        ),
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l entry': Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'default': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'default',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "default"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'construct':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['construct', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Assign.l_state.construct => {
                                        switch ($t) {
                                            case 'boolean':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['boolean', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.boolean_ => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'false':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'true':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['true', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'from':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'selection': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'selection',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "selection"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'type': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'type',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "type"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a state', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.decide.text(
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'boolean':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['boolean', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.boolean_ => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'not':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['not', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a nothing', null],
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'copy':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['copy', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a nothing', null],
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'dictionary':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['dictionary', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.dictionary => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'is empty':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['is empty', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a nothing', null],
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'list':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['list', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.list => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'is empty':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['is empty', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a nothing', null],
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['unknown option', $['option']['value']],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'dictionary':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['dictionary', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.dictionary => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['literal', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a dictionary', null],
                                                                                                ),
                                                                                            ),
                                                                                        ).map(
                                                                                            ($, id) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                )['start']['relative'],
                                                                                                'l entry': Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    }],
                                                                                }),
                                                                            )
                                                                        case 'from':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'selection': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'selection',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "selection"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'type': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'type',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "type"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a state', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.decide.text(
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'dictionary':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['dictionary', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_.l_state.dictionary => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'filter':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['filter', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign entry',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign entry"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'map':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['map', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign entry',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign entry"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'resolve':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['resolve', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign entry',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign entry"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'temp resulting entry node': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'temp resulting entry node',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "temp resulting entry node"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'list':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['list', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_.l_state.list => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'convert':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['convert', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign id': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign id',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign id"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign entry',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign entry"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'abort': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'abort',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "abort"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['unknown option', $['option']['value']],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'group':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['group', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.group => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'properties': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'properties',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "properties"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    )['start']['relative'],
                                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a dictionary', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    ).map(
                                                                                                        ($, id) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l entry': Assign(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'have dependencies': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'have dependencies',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "have dependencies"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => v_deserialize_boolean.deserialize(
                                                                                                    _p_list_from_text(
                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => $,
                                                                                                    ),
                                                                                                    ($) => abort(
                                                                                                        ['not a valid boolean', null],
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'list':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['list', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.list => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['literal', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        )['start']['relative'],
                                                                                        'l list': _p.list.from.list(
                                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a list', null],
                                                                                                ),
                                                                                            ),
                                                                                        ).map(
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                )['start']['relative'],
                                                                                                'l item': Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    }],
                                                                                }),
                                                                            )
                                                                        case 'from':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'selection': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'selection',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "selection"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'type': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'type',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "type"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a state', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.decide.text(
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'dictionary':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['dictionary', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_.l_state.dictionary => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'convert':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['convert', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign entry',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign entry"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'list':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['list', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_.l_state.list => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'filter':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['filter', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign item',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign item"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'map':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['map', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign item',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign item"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'map with state':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['map with state', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'initialize state': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'initialize state',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "initialize state"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign item',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign item"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'update state': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'update state',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "update state"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'wrap up': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'wrap up',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "wrap up"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'reduce':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['reduce', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'initialize state': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'initialize state',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "initialize state"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign item',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign item"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            case 'reverse':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['reverse', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a nothing', null],
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['unknown option', $['option']['value']],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'nothing':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'number':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['number', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.number_ => {
                                                                    switch ($t) {
                                                                        case 'approximation':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['approximation', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.number_.l_state.approximation => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['literal', v_deserialize_number.deserialize(
                                                                                                                    _p_list_from_text(
                                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => $,
                                                                                                                    ),
                                                                                                                    ($) => abort(
                                                                                                                        ['not a valid number', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['copy', Select_Value(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'integer':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['integer', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.number_.l_state.integer => {
                                                                                                switch ($t) {
                                                                                                    case 'copy':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['copy', Select_Value(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'divide':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['divide', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'assign dividend': _p_change_context(
                                                                                                                            $.__get_entry_deprecated(
                                                                                                                                'assign dividend',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "assign dividend"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'assign divisor': _p_change_context(
                                                                                                                            $.__get_entry_deprecated(
                                                                                                                                'assign divisor',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "assign divisor"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'abort': _p_change_context(
                                                                                                                            $.__get_entry_deprecated(
                                                                                                                                'abort',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "abort"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Assign(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'literal':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['literal', v_deserialize_number.deserialize(
                                                                                                                    _p_list_from_text(
                                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => $,
                                                                                                                    ),
                                                                                                                    ($) => abort(
                                                                                                                        ['not a valid number', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'natural':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['natural', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.number_.l_state.natural => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['literal', v_deserialize_number.deserialize(
                                                                                                                    _p_list_from_text(
                                                                                                                        v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => $,
                                                                                                                    ),
                                                                                                                    ($) => abort(
                                                                                                                        ['not a valid number', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['copy', Select_Value(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'number of dictionary entries':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['number of dictionary entries', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'dictionary': _p_change_context(
                                                                                                                            $.__get_entry_deprecated(
                                                                                                                                'dictionary',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "dictionary"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'number of list items':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['number of list items', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            ['expected a group', null],
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => ({
                                                                                                                        'list': _p_change_context(
                                                                                                                            $.__get_entry_deprecated(
                                                                                                                                'list',
                                                                                                                                ($) => abort(
                                                                                                                                    ['no such entry', "list"],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => Select_Value(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'source column':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['source column', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'source line':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['source line', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'optional':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['optional', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.optional => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'not set':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'set':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['set', Assign(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'from':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'selection': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'selection',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "selection"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'type': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'type',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "type"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a state', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.decide.text(
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'boolean':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['boolean', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_.l_state.boolean_ => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'convert':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['convert', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign set': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign set',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign set"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'optional':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['optional', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_.l_state.optional => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'map':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['map', _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    ['expected a group', null],
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => ({
                                                                                                                                                                'assign set': _p_change_context(
                                                                                                                                                                    $.__get_entry_deprecated(
                                                                                                                                                                        'assign set',
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            ['no such entry', "assign set"],
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['unknown option', $['option']['value']],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'state':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['state', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.state => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'option': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'option',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "option"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a text', null],
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'assign option': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'assign option',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "assign option"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'text':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['text', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.text => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'type': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'type',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "type"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a state', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.decide.text(
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Assign.l_state.construct.l_state.text.l_state.literal.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'identifier':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['identifier', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a nothing', null],
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'freeform':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['freeform', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a nothing', null],
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['unknown option', $['option']['value']],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'value': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'value',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "value"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a text', null],
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'from':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'selection': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'selection',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "selection"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'type': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'type',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "type"],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a state', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.decide.text(
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Assign.l_state.construct.l_state.text.l_state.from_.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'text':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l state': ['text', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a state', null],
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ($) => _p.decide.text(
                                                                                                                                    $['option']['value'],
                                                                                                                                    ($t): t_out.Assign.l_state.construct.l_state.text.l_state.from_.type_.l_state.text => {
                                                                                                                                        switch ($t) {
                                                                                                                                            case 'copy':
                                                                                                                                                return _p_change_context(
                                                                                                                                                    $['value'],
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                        )['start']['relative'],
                                                                                                                                                        'l state': ['copy', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                ['expected a nothing', null],
                                                                                                                                                            ),
                                                                                                                                                        )],
                                                                                                                                                    }),
                                                                                                                                                )
                                                                                                                                            default:
                                                                                                                                                return abort(
                                                                                                                                                    ['unknown option', $['option']['value']],
                                                                                                                                                )
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['unknown option', $['option']['value']],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'source document':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['source document', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a nothing', null],
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'select':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['select', Select_Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'special':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['special', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Assign.l_state.special => {
                                        switch ($t) {
                                            case 'abort':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['abort', Assign(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'assert':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['assert', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'tester': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'tester',
                                                                        ($) => abort(
                                                                            ['no such entry', "tester"],
                                                                        ),
                                                                    ),
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'normal flow': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'normal flow',
                                                                        ($) => abort(
                                                                            ['no such entry', "normal flow"],
                                                                        ),
                                                                    ),
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            case 'change context':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['change context', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'new context': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'new context',
                                                                        ($) => abort(
                                                                            ['no such entry', "new context"],
                                                                        ),
                                                                    ),
                                                                    ($) => Select_Value(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'expression': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'expression',
                                                                        ($) => abort(
                                                                            ['no such entry', "expression"],
                                                                        ),
                                                                    ),
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            case 'variables':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['variables', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'variables': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'variables',
                                                                        ($) => abort(
                                                                            ['no such entry', "variables"],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a dictionary', null],
                                                                                ),
                                                                            ),
                                                                        ).map(
                                                                            ($, id) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                )['start']['relative'],
                                                                                'l entry': Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                ),
                                                                'assign': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'assign',
                                                                        ($) => abort(
                                                                            ['no such entry', "assign"],
                                                                        ),
                                                                    ),
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            case 'implement me':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'iterate':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['iterate', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'list': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'list',
                                                                        ($) => abort(
                                                                            ['no such entry', "list"],
                                                                        ),
                                                                    ),
                                                                    ($) => Select_Value(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'assign': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'assign',
                                                                        ($) => abort(
                                                                            ['no such entry', "assign"],
                                                                        ),
                                                                    ),
                                                                    ($) => Assign(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            case 'unreachable':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['unreachable', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'explanation': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'explanation',
                                                                        ($) => abort(
                                                                            ['no such entry', "explanation"],
                                                                        ),
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Select_Value: t_signatures.Select_Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Select_Value => {
            switch ($t) {
                case 'implement me':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        }),
                    )
                case 'regular':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['regular', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'start': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'start',
                                            ($) => abort(
                                                ['no such entry', "start"],
                                            ),
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
                                                ),
                                            ),
                                            ($) => _p.decide.text(
                                                $['option']['value'],
                                                ($t): t_out.Select_Value.l_state.regular.start => {
                                                    switch ($t) {
                                                        case 'call':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['call', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a state', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.decide.text(
                                                                                        $['option']['value'],
                                                                                        ($t): t_out.Select_Value.l_state.regular.start.l_state.call.source => {
                                                                                            switch ($t) {
                                                                                                case 'local':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['local', v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null],
                                                                                                                ),
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'imported':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ({
                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                $,
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['imported', _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'import': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'import',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "import"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'variable': _p_change_context(
                                                                                                                        $.__get_entry_deprecated(
                                                                                                                            'variable',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "variable"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }),
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return abort(
                                                                                                        ['unknown option', $['option']['value']],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'context': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'context',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "context"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'abort': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'abort',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "abort"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.from.optional(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                ).map(
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'lookups': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'lookups',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "lookups"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.from.optional(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                ).map(
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Select_Value.l_state.regular.start.l_state.call.lookups.O => {
                                                                                                switch ($t) {
                                                                                                    case 'initialize':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['initialize', {
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a dictionary', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ).map(
                                                                                                                        ($, id) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l entry': Select_Lookup(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    ),
                                                                                                                }],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'pass through':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'arguments': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'arguments',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "arguments"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p.optional.from.optional(
                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected an optional', null],
                                                                                        ),
                                                                                    ),
                                                                                ).map(
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Select_Value.l_state.regular.start.l_state.call.arguments_.O => {
                                                                                                switch ($t) {
                                                                                                    case 'initialize':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['initialize', {
                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                        $,
                                                                                                                    )['start']['relative'],
                                                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a dictionary', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ).map(
                                                                                                                        ($, id) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            )['start']['relative'],
                                                                                                                            'l entry': Assign(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    ),
                                                                                                                }],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'pass through':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                )['start']['relative'],
                                                                                                                'l state': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a nothing', null],
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'context':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['context', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'dictionary entry':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['dictionary entry', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'dictionary': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'dictionary',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "dictionary"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Select_Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'id': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'id',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "id"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'abort handler': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'abort handler',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "abort handler"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'list from text':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['list from text', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Select_Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'assign item': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'assign item',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "assign item"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'lookup entry':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['lookup entry', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'lookup': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'lookup',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "lookup"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Select_Lookup(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'id': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'id',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "id"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'abort handlers': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'abort handlers',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "abort handlers"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => ({
                                                                                        'no such entry': _p_change_context(
                                                                                            $.__get_entry_deprecated(
                                                                                                'no such entry',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "no such entry"],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'no context lookup': _p_change_context(
                                                                                            $.__get_entry_deprecated(
                                                                                                'no context lookup',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "no context lookup"],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'cycle detected': _p_change_context(
                                                                                            $.__get_entry_deprecated(
                                                                                                'cycle detected',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "cycle detected"],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'lookup entry depth':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['lookup entry depth', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'lookup': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'lookup',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "lookup"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Select_Lookup(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'id': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'id',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "id"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'abort handlers': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'abort handlers',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "abort handlers"],
                                                                                    ),
                                                                                ),
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a group', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => ({
                                                                                        'no such entry': _p_change_context(
                                                                                            $.__get_entry_deprecated(
                                                                                                'no such entry',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "no such entry"],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'no context lookup': _p_change_context(
                                                                                            $.__get_entry_deprecated(
                                                                                                'no context lookup',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "no context lookup"],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                        'cycle detected': _p_change_context(
                                                                                            $.__get_entry_deprecated(
                                                                                                'cycle detected',
                                                                                                ($) => abort(
                                                                                                    ['no such entry', "cycle detected"],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => Assign(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'parameter':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['parameter', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'parent sibling':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['parent sibling', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'sibling':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['sibling', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'state':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['state', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'text from list':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['text from list', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'source': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'source',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "source"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Select_Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'assign character': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'assign character',
                                                                                    ($) => abort(
                                                                                        ['no such entry', "assign character"],
                                                                                    ),
                                                                                ),
                                                                                ($) => Assign(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'variable':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['variable', v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                    'tail': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'tail',
                                            ($) => abort(
                                                ['no such entry', "tail"],
                                            ),
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l list': _p.list.from.list(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null],
                                                    ),
                                                ),
                                            ).map(
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l item': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a text', null],
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        }),
                                    ),
                                }),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Select_Lookup: t_signatures.Select_Lookup = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Select_Lookup => {
            switch ($t) {
                case 'implement me':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        }),
                    )
                case 'from parameter':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['from parameter', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            )],
                        }),
                    )
                case 'stack':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['stack', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Select_Lookup.l_state.stack => {
                                        switch ($t) {
                                            case 'empty':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'push':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['push', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'stack': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'stack',
                                                                        ($) => abort(
                                                                            ['no such entry', "stack"],
                                                                        ),
                                                                    ),
                                                                    ($) => Select_Lookup(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'acyclic': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'acyclic',
                                                                        ($) => abort(
                                                                            ['no such entry', "acyclic"],
                                                                        ),
                                                                    ),
                                                                    ($) => Select_Lookup(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'acyclic':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['acyclic', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Select_Lookup.l_state.acyclic => {
                                        switch ($t) {
                                            case 'not set':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'siblings':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'resolved dictionary':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['resolved dictionary', Select_Value(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'cyclic':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['cyclic', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Select_Lookup.l_state.cyclic => {
                                        switch ($t) {
                                            case 'not set':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'siblings':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a nothing', null],
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)
