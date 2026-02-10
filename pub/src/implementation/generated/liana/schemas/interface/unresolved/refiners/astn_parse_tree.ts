
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/unmarshall"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/interface/data/unresolved"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

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
        'imports': _p_change_context(
            $.__get_entry_deprecated(
                'imports',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "imports"],
                    ),
                },
            ),
            ($) => Imports(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "content"],
                    ),
                },
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
                    ($t): t_out.Package.content => {
                        switch ($t) {
                            case 'data modules':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['data modules', {
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
                                                    'l entry': Value(
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
                            case 'functions':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['functions', {
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
                                                            'result': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'result',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "result"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => Value(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'context': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'context',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "context"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => Value(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'type': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'type',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "type"],
                                                                        ),
                                                                    },
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
                                                                        ($t): t_out.Package.content.l_state.functions.l_dictionary.D.l_entry.type_ => {
                                                                            switch ($t) {
                                                                                case 'transformer':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l state': ['transformer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a nothing', null],
                                                                                                ),
                                                                                            )],
                                                                                        }),
                                                                                    )
                                                                                case 'refiner':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            )['start']['relative'],
                                                                                            'l state': ['refiner', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'error': _p_change_context(
                                                                                                        $.__get_entry_deprecated(
                                                                                                            'error',
                                                                                                            {
                                                                                                                no_such_entry: ($) => abort(
                                                                                                                    ['no such entry', "error"],
                                                                                                                ),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p.optional.from.optional(
                                                                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected an optional', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                        ).map(
                                                                                                            ($) => Value(
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
                                                                                                            {
                                                                                                                no_such_entry: ($) => abort(
                                                                                                                    ['no such entry', "lookups"],
                                                                                                                ),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p.optional.from.optional(
                                                                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected an optional', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                        ).map(
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
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a state', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['value'],
                                                                                                                                ($t): t_out.Package.content.l_state.functions.l_dictionary.D.l_entry.type_.l_state.refiner.lookups.O.l_dictionary.D.l_entry => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'acyclic':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    )['start']['relative'],
                                                                                                                                                    'l state': ['acyclic', Value(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
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
                                                                                                                                                    'l state': ['cyclic', Value(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
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
                                                                                                                                                    'l state': ['stack', Value(
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
                                                                                                            }),
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
                                                            'parameters': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'parameters',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "parameters"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => _p.optional.from.optional(
                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected an optional', null],
                                                                        ),
                                                                    ),
                                                                ).map(
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
                                                                                'l entry': Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        }],
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
)

export const Imports: t_signatures.Imports = ($, abort) => ({
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
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "type"],
                                ),
                            },
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
                                ($t): t_out.Imports.l_dictionary.D.l_entry.type_ => {
                                    switch ($t) {
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
                                                            'number of steps': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'number of steps',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "number of steps"],
                                                                        ),
                                                                    },
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
                                                            'dependency': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'dependency',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "dependency"],
                                                                        ),
                                                                    },
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
                    'tail': _p_change_context(
                        $.__get_entry_deprecated(
                            'tail',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "tail"],
                                ),
                            },
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
            ),
        }),
    ),
})

export const Value: t_signatures.Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Value => {
            switch ($t) {
                case 'boolean':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        }),
                    )
                case 'component':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'location': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'location',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "location"],
                                                ),
                                            },
                                        ),
                                        ($) => Module_Reference(
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
                case 'dictionary':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['dictionary', Value(
                                $,
                                ($) => abort(
                                    $,
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
                            'l state': ['group', {
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
                                        'l entry': Value(
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
                case 'list':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['list', Value(
                                $,
                                ($) => abort(
                                    $,
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
                                    ($t): t_out.Value.l_state.number_ => {
                                        switch ($t) {
                                            case 'exact':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['exact', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Value.l_state.number_.l_state.exact => {
                                                                    switch ($t) {
                                                                        case 'natural':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l state': ['natural', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a nothing', null],
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
                                                                                    'l state': ['integer', v_unmarshalled_from_parse_tree.Nothing(
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
                                            case 'approximation':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['approximation', v_unmarshalled_from_parse_tree.Nothing(
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
                case 'optional':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['optional', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'reference':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'location': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'location',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "location"],
                                                ),
                                            },
                                        ),
                                        ($) => Module_Reference(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'sub selection': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'sub selection',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "sub selection"],
                                                ),
                                            },
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
                                                            ($t): t_out.Value.l_state.reference.sub_selection.l_list.L.l_item => {
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
                                    'cyclic': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'cyclic',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "cyclic"],
                                                ),
                                            },
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
                case 'state':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['state', {
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
                                        'l entry': Value(
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
                case 'text':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['text', v_unmarshalled_from_parse_tree.Nothing(
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
)

export const Module_Reference: t_signatures.Module_Reference = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Module_Reference => {
            switch ($t) {
                case 'import':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['import', _p_change_context(
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
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "import"],
                                                ),
                                            },
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
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "type"],
                                                ),
                                            },
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
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)
