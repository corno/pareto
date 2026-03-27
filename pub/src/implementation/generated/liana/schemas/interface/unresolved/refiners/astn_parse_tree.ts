
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/signatures/unresolved/refiners/astn_parse_tree"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/interface/data/unresolved"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Package_Set: t_signatures.Package_Set = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.optional.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.optional.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['token']['value'],
                        ($t): t_out.Package_Set.l_dictionary.D.l_entry => {
                            switch ($t) {
                                case 'package':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
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
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
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
                                        ['liana', {
                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                            'range': v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                        }],
                                    )
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Package: t_signatures.Package = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "imports": null,
                    "content": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'imports': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'imports',
                            'subdocument context': _p.optional.literal.not_set(),
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
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'content',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['token']['value'],
                            ($t): t_out.Package.content => {
                                switch ($t) {
                                    case 'data modules':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['data modules', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        ),
                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                            $['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l entry': Value(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                )],
                                            }),
                                        )
                                    case 'functions':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['functions', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        ),
                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                            $['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l entry': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.dictionary.literal(
                                                                                {
                                                                                    "result": null,
                                                                                    "context": null,
                                                                                    "type": null,
                                                                                    "parameters": null,
                                                                                },
                                                                            ),
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            )
                                                                            return {
                                                                                'result': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'result',
                                                                                            'subdocument context': _p.optional.literal.not_set(),
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
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'context',
                                                                                            'subdocument context': _p.optional.literal.not_set(),
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
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'type',
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['token']['value'],
                                                                                            ($t): t_out.Package.content.l_state.functions.l_dictionary.D.l_entry.type_ => {
                                                                                                switch ($t) {
                                                                                                    case 'transformer':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['transformer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
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
                                                                                                                    {
                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['refiner', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "error": null,
                                                                                                                                    "lookups": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'error': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'error',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p.optional.from.optional(
                                                                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        )['optional'],
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
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'lookups',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p.optional.from.optional(
                                                                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        )['optional'],
                                                                                                                                    ).map(
                                                                                                                                        ($) => _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $['value'],
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                                    $['entries'],
                                                                                                                                                ).map(
                                                                                                                                                    ($, id) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $,
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        'l entry': _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            ($) => _p.decide.text(
                                                                                                                                                                $['option']['token']['value'],
                                                                                                                                                                ($t): t_out.Package.content.l_state.functions.l_dictionary.D.l_entry.type_.l_state.refiner.lookups.O.l_dictionary.D.l_entry => {
                                                                                                                                                                    switch ($t) {
                                                                                                                                                                        case 'acyclic':
                                                                                                                                                                            return _p_change_context(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                ($) => ({
                                                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                                        $,
                                                                                                                                                                                        {
                                                                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
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
                                                                                                                                                                                        {
                                                                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
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
                                                                                                                                                                                        {
                                                                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
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
                                                                                                                                                                                ['liana', {
                                                                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                                                                        $['value'],
                                                                                                                                                                                        {
                                                                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                }],
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
                                                                                                                                ),
                                                                                                                            }
                                                                                                                        },
                                                                                                                    ),
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['liana', {
                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                            }],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'parameters': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'parameters',
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => _p.optional.from.optional(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )['optional'],
                                                                                    ).map(
                                                                                        ($) => _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                                                    $['entries'],
                                                                                                ).map(
                                                                                                    ($, id) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                            {
                                                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                                                            },
                                                                                                        ),
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
                                                                                ),
                                                                            }
                                                                        },
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Imports: t_signatures.Imports = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.optional.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.optional.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.dictionary.literal(
                                {
                                    "type": null,
                                    "tail": null,
                                },
                            ),
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            )
                            return {
                                'type': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'type',
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['token']['value'],
                                            ($t): t_out.Imports.l_dictionary.D.l_entry.type_ => {
                                                switch ($t) {
                                                    case 'external':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l state': ['external', v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
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
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l state': ['ancestor', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.dictionary.literal(
                                                                                {
                                                                                    "number of steps": null,
                                                                                    "dependency": null,
                                                                                },
                                                                            ),
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            )
                                                                            return {
                                                                                'number of steps': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'number of steps',
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'type': ['decimal', null],
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                                'dependency': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'dependency',
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }
                                                                        },
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
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l state': ['sibling', v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['liana', {
                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                'range': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                            }],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'tail': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'tail',
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                            {
                                                'subdocument context': _p.optional.literal.not_set(),
                                            },
                                        ),
                                        'l list': _p.list.from.list(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            )['items'],
                                        ).map(
                                            ($) => _p_change_context(
                                                $['value'],
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    'l item': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    }),
                                ),
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Value: t_signatures.Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Value => {
            switch ($t) {
                case 'boolean':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "location": null,
                                            },
                                        ),
                                        'subdocument context': _p.optional.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.optional.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'location': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'location',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Module_Reference(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['group', _p_change_context(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'subdocument context': _p.optional.literal.not_set(),
                                    },
                                ),
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    'l dictionary': _p.dictionary.from.dictionary(
                                        $['entries'],
                                    ).map(
                                        ($, id) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            'l entry': Value(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'list':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['number', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Value.l_state.number_ => {
                                        switch ($t) {
                                            case 'exact':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['exact', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Value.l_state.number_.l_state.exact => {
                                                                    switch ($t) {
                                                                        case 'natural':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['natural', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
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
                                                                                        {
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['integer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                }],
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
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['approximation', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        ),
                                                    }],
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "location": null,
                                                "sub selection": null,
                                                "cyclic": null,
                                            },
                                        ),
                                        'subdocument context': _p.optional.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.optional.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'location': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'location',
                                                        'subdocument context': _p.optional.literal.not_set(),
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
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'sub selection',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    'l list': _p.list.from.list(
                                                        v_unmarshalled_from_parse_tree.List(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        )['items'],
                                                    ).map(
                                                        ($) => _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l item': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.State(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    ($) => _p.decide.text(
                                                                        $['option']['token']['value'],
                                                                        ($t): t_out.Value.l_state.reference.sub_selection.l_list.L.l_item => {
                                                                            switch ($t) {
                                                                                case 'dictionary':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l state': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l state': ['group', v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
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
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l state': ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
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
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
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
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l state': ['state', v_unmarshalled_from_parse_tree.Text(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            )],
                                                                                        }),
                                                                                    )
                                                                                default:
                                                                                    return abort(
                                                                                        ['liana', {
                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                $['value'],
                                                                                                {
                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                        }],
                                                                                    )
                                                                            }
                                                                        },
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                }),
                                            ),
                                            'cyclic': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'cyclic',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['true/false', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                            ),
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['state', _p_change_context(
                                v_unmarshalled_from_parse_tree.Dictionary(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'subdocument context': _p.optional.literal.not_set(),
                                    },
                                ),
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    'l dictionary': _p.dictionary.from.dictionary(
                                        $['entries'],
                                    ).map(
                                        ($, id) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            'l entry': Value(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        }),
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
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['text', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Module_Reference: t_signatures.Module_Reference = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Module_Reference => {
            switch ($t) {
                case 'import':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['import', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "import": null,
                                                "type": null,
                                            },
                                        ),
                                        'subdocument context': _p.optional.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.optional.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'import': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'import',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'type': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'local':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            'l state': ['local', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
