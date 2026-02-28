
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/signatures/unresolved/refiners/astn_parse_tree"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/implementation/data/unresolved"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_interface from "../../../interface/unresolved/refiners/astn_parse_tree"

export const Package_Set: t_signatures.Package_Set = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            $,
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
                                            'type': ['state', ['unknown option', $['option']['value']]],
                                            'range': v_parse_tree_to_location.Value(
                                                $['value'],
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
                    "specials": null,
                    "type imports": null,
                    "variable imports": null,
                    "functions": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'specials': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'specials',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.dictionary.literal(
                                    {
                                        "abort": null,
                                        "change context": null,
                                        "implement me": null,
                                        "iterate": null,
                                        "lookups": null,
                                        "list from text": null,
                                        "text from list": null,
                                        "unreachable code path": null,
                                        "variables": null,
                                    },
                                ),
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return {
                                    'abort': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'abort',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'change context': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'change context',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'implement me': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'implement me',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'iterate': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'iterate',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
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
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'list from text': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'list from text',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'text from list': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'text from list',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'unreachable code path': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'unreachable code path',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'variables': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'variables',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
                'type imports': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type imports',
                        },
                    ),
                    ($) => v_external_interface.Imports(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'variable imports': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'variable imports',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
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
                                                        "tail": null,
                                                        "type": null,
                                                    },
                                                ),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                )
                                                return {
                                                    'tail': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'tail',
                                                            },
                                                        ),
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            ),
                                                            'l list': _p.list.from.list(
                                                                v_unmarshalled_from_parse_tree.List(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )['items'],
                                                            ).map(
                                                                ($) => _p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
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
                                                    'type': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'type',
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
                                                                $['option']['value'],
                                                                ($t): t_out.Package.variable_imports.l_dictionary.D.l_entry.type_ => {
                                                                    switch ($t) {
                                                                        case 'ancestor':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
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
                                                                                                        "dependency": null,
                                                                                                        "number of steps": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'dependency': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'dependency',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'number of steps': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'number of steps',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'external':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['external', v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
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
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
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
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
                'functions': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'functions',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
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
                                                        "expression": null,
                                                        "temp has abort": null,
                                                        "temp has lookups": null,
                                                        "temp has parameters": null,
                                                    },
                                                ),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
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
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
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
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
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
                                                        ),
                                                    ),
                                                    'expression': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'expression',
                                                            },
                                                        ),
                                                        ($) => Assign(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'temp has abort': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'temp has abort',
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['true/false', null],
                                                            },
                                                        ),
                                                    ),
                                                    'temp has lookups': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'temp has lookups',
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['true/false', null],
                                                            },
                                                        ),
                                                    ),
                                                    'temp has parameters': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'temp has parameters',
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['true/false', null],
                                                            },
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "type": null,
                    "sub selection": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
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
                        },
                    ),
                    ($) => _p_change_context(
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
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
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
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        ),
                        'l list': _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l item': _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
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
                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                'range': v_parse_tree_to_location.Value(
                                                                    $['value'],
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
            }
        },
    ),
)

export const Assign: t_signatures.Assign = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
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
                            ),
                            'l state': ['decide', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "source": null,
                                                "type": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'source': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'source',
                                                    },
                                                ),
                                                ($) => Select_Value(
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
                                                        $['option']['value'],
                                                        ($t): t_out.Assign.l_state.decide.type_ => {
                                                            switch ($t) {
                                                                case 'boolean':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['boolean', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "if false": null,
                                                                                                "if true": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
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
                                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'if false': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if false',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'if true': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if true',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
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
                                                                case 'optional':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['optional', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "if not set": null,
                                                                                                "if set": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
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
                                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'if not set': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if not set',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'if set': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if set',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
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
                                                                case 'state':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['state', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "type": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
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
                                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
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
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Assign.l_state.decide.type_.l_state.state.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'partial':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['partial', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "options": null,
                                                                                                                                                "default": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'options': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'options',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $['value'],
                                                                                                                                                        ),
                                                                                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                                            $['entries'],
                                                                                                                                                        ).map(
                                                                                                                                                            ($, id) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
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
                                                                                                                                            ),
                                                                                                                                            'default': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'default',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => Assign(
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
                                                                                                                case 'full':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['full', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "options": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'options': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'options',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $['value'],
                                                                                                                                                        ),
                                                                                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                                            $['entries'],
                                                                                                                                                        ).map(
                                                                                                                                                            ($, id) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
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
                                                                                                                                            ),
                                                                                                                                        }
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'single':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['single', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "option": null,
                                                                                                                                                "if true": null,
                                                                                                                                                "if false": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'option': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'option',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            'if true': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'if true',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            'if false': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'if false',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => Assign(
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
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['liana', {
                                                                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'text':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['text', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "cases": null,
                                                                                                "default": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
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
                                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'cases': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'cases',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                        ),
                                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                                            $['entries'],
                                                                                                        ).map(
                                                                                                            ($, id) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                ),
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
                                                                                            ),
                                                                                            'default': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'default',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
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
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
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
                            )],
                        }),
                    )
                case 'construct':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['construct', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
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
                                                        ),
                                                        'l state': ['boolean', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
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
                                                                                                                ),
                                                                                                                'l state': ['false', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
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
                                                                                                                ),
                                                                                                                'l state': ['true', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                ),
                                                                                                            }],
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
                                                                                    ),
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'selection': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
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
                                                                                                                $['option']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'boolean':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    'l state': ['boolean', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['not', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['copy', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
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
                                                                                                                                    ),
                                                                                                                                    'l state': ['dictionary', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['is empty', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
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
                                                                                                                                    ),
                                                                                                                                    'l state': ['list', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['is empty', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
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
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
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
                                                        ),
                                                        'l state': ['dictionary', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $['value'],
                                                                                            ),
                                                                                            'l dictionary': _p.dictionary.from.dictionary(
                                                                                                $['entries'],
                                                                                            ).map(
                                                                                                ($, id) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l entry': Assign(
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
                                                                        case 'from':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'selection': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
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
                                                                                                                $['option']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'dictionary':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    'l state': ['dictionary', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['filter', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    case 'map':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    case 'resolve':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['resolve', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                    "temp resulting entry node": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'temp resulting entry node': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'temp resulting entry node',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Temp_Value_Type_Specification(
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
                                                                                                                                                    default:
                                                                                                                                                        return abort(
                                                                                                                                                            ['liana', {
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
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
                                                                                                                                    ),
                                                                                                                                    'l state': ['list', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['convert', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign id": null,
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                    "abort": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign id': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign id',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'abort': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'abort',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    default:
                                                                                                                                                        return abort(
                                                                                                                                                            ['liana', {
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
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
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
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
                                                        ),
                                                        'l state': ['group', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "properties": null,
                                                                                                        "have dependencies": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'properties': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'properties',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                ),
                                                                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                    $['entries'],
                                                                                                                ).map(
                                                                                                                    ($, id) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
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
                                                                                                    ),
                                                                                                    'have dependencies': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'have dependencies',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['true/false', null],
                                                                                                            },
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
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
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
                                                        ),
                                                        'l state': ['list', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['literal', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                        ),
                                                                                        'l list': _p.list.from.list(
                                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            )['items'],
                                                                                        ).map(
                                                                                            ($) => _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l item': Assign(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
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
                                                                                    ),
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'selection': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
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
                                                                                                                $['option']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'dictionary':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    'l state': ['dictionary', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['convert', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    default:
                                                                                                                                                        return abort(
                                                                                                                                                            ['liana', {
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
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
                                                                                                                                    ),
                                                                                                                                    'l state': ['list', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['filter', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    case 'map':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    case 'map with state':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map with state', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "initialize state": null,
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                    "update state": null,
                                                                                                                                                                                    "wrap up": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'initialize state': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'initialize state',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'update state': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'update state',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'wrap up': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'wrap up',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    case 'reduce':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['reduce', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "initialize state": null,
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'initialize state': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'initialize state',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'assign item': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    case 'reverse':
                                                                                                                                                        return _p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['reverse', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
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
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
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
                                                        ),
                                                        'l state': ['number', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['approximation', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
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
                                                                                                                ),
                                                                                                                'l state': ['literal', v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                    },
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                ),
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
                                                                                                            ['liana', {
                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                ),
                                                                                                            }],
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
                                                                                    ),
                                                                                    'l state': ['integer', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
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
                                                                                                                ),
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
                                                                                                                ),
                                                                                                                'l state': ['divide', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "assign dividend": null,
                                                                                                                                    "assign divisor": null,
                                                                                                                                    "abort": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'assign dividend': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'assign dividend',
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Select_Value(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                'assign divisor': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'assign divisor',
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Select_Value(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                'abort': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'abort',
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Assign(
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
                                                                                                    case 'literal':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                'l state': ['literal', v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                    },
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['liana', {
                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                ),
                                                                                                            }],
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
                                                                                    ),
                                                                                    'l state': ['natural', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
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
                                                                                                                ),
                                                                                                                'l state': ['literal', v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                    },
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                ),
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
                                                                                                                ),
                                                                                                                'l state': ['number of dictionary entries', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "dictionary": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'dictionary': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'dictionary',
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Select_Value(
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
                                                                                                    case 'number of list items':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                'l state': ['number of list items', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "list": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'list': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'list',
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Select_Value(
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
                                                                                                    case 'source column':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                'l state': ['source column', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
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
                                                                                                                ),
                                                                                                                'l state': ['source line', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                ),
                                                                                                            }],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
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
                                                        ),
                                                        'l state': ['optional', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
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
                                                                                                                ),
                                                                                                                'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                ),
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
                                                                                                            ['liana', {
                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                ),
                                                                                                            }],
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
                                                                                    ),
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'selection': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
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
                                                                                                                $['option']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'boolean':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    'l state': ['boolean', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['convert', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign set": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign set': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign set',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    default:
                                                                                                                                                        return abort(
                                                                                                                                                            ['liana', {
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
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
                                                                                                                                    ),
                                                                                                                                    'l state': ['optional', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map', _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign set": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign set': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign set',
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
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
                                                                                                                                                    default:
                                                                                                                                                        return abort(
                                                                                                                                                            ['liana', {
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
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
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
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
                                                        ),
                                                        'l state': ['state', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "option": null,
                                                                                                        "assign option": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'option': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'option',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'assign option': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'assign option',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Assign(
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
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
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
                                                        ),
                                                        'l state': ['text', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                                                                                    ),
                                                                                    'l state': ['literal', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "type": null,
                                                                                                        "value": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
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
                                                                                                                $['option']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.text.l_state.literal.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'identifier':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    'l state': ['identifier', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
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
                                                                                                                                    ),
                                                                                                                                    'l state': ['freeform', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'value': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'value',
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
                                                                        case 'from':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['from', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                            },
                                                                                        ),
                                                                                        ($) => _p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                )
                                                                                                return {
                                                                                                    'selection': _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
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
                                                                                                                $['option']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.text.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'text':
                                                                                                                            return _p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    'l state': ['text', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
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
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['copy', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                ),
                                                                                                                                                            }],
                                                                                                                                                        )
                                                                                                                                                }
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
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
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'source document':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['source document', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'entry id':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['entry id', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'option name':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['option name', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
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
                            ),
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
                            ),
                            'l state': ['special', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
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
                                                        ),
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
                                                        ),
                                                        'l state': ['assert', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "tester": null,
                                                                            "normal flow": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'tester': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'tester',
                                                                                },
                                                                            ),
                                                                            ($) => Assign(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'normal flow': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'normal flow',
                                                                                },
                                                                            ),
                                                                            ($) => Assign(
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
                                            case 'change context':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['change context', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "new context": null,
                                                                            "expression": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'new context': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'new context',
                                                                                },
                                                                            ),
                                                                            ($) => Select_Value(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'expression': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'expression',
                                                                                },
                                                                            ),
                                                                            ($) => Assign(
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
                                            case 'variables':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['variables', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "variables": null,
                                                                            "assign": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'variables': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'variables',
                                                                                },
                                                                            ),
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
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
                                                                        ),
                                                                        'assign': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'assign',
                                                                                },
                                                                            ),
                                                                            ($) => Assign(
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
                                            case 'implement me':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                $,
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
                                                        ),
                                                        'l state': ['iterate', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "list": null,
                                                                            "assign": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'list': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'list',
                                                                                },
                                                                            ),
                                                                            ($) => Select_Value(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'assign': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'assign',
                                                                                },
                                                                            ),
                                                                            ($) => Assign(
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
                                            case 'unreachable':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['unreachable', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "explanation": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'explanation': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'explanation',
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
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Select_Value: t_signatures.Select_Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
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
                            ),
                            'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
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
                            ),
                            'l state': ['regular', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "start": null,
                                                "tail": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'start': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'start',
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
                                                        $['option']['value'],
                                                        ($t): t_out.Select_Value.l_state.regular.start => {
                                                            switch ($t) {
                                                                case 'call':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['call', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "source": null,
                                                                                                "context": null,
                                                                                                "abort": null,
                                                                                                "lookups": null,
                                                                                                "arguments": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'source': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'source',
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
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Select_Value.l_state.regular.start.l_state.call.source => {
                                                                                                            switch ($t) {
                                                                                                                case 'local':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['local', v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
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
                                                                                                                            ),
                                                                                                                            'l state': ['imported', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "import": null,
                                                                                                                                                "variable": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
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
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            'variable': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'variable',
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
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['liana', {
                                                                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                            ),
                                                                                                                        }],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
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
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'abort': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'abort',
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
                                                                                                    ($) => Assign(
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
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
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
                                                                                                                                ),
                                                                                                                                'l state': ['initialize', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        ),
                                                                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                            $['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l entry': Select_Lookup(
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
                                                                                                                    case 'pass through':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                'l state': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                    $['value'],
                                                                                                                                ),
                                                                                                                            }],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'arguments': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'arguments',
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
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
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
                                                                                                                                ),
                                                                                                                                'l state': ['initialize', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        ),
                                                                                                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                                                                                                            $['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                'l entry': Assign(
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
                                                                                                                    case 'pass through':
                                                                                                                        return _p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                'l state': ['pass through', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                    $['value'],
                                                                                                                                ),
                                                                                                                            }],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'context':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['context', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
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
                                                                            ),
                                                                            'l state': ['dictionary entry', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "dictionary": null,
                                                                                                "id": null,
                                                                                                "no such entry handler": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'dictionary': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'dictionary',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'id': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'id',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'no such entry handler': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'no such entry handler',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
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
                                                                case 'list from text':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['list from text', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "source": null,
                                                                                                "assign item": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'source': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'source',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'assign item': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'assign item',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
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
                                                                case 'lookup entry':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['lookup entry', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "lookup": null,
                                                                                                "id": null,
                                                                                                "type": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'lookup': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'lookup',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Lookup(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'id': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'id',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
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
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Select_Value.l_state.regular.start.l_state.lookup_entry.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'acyclic':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['acyclic', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "abort handlers": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'abort handlers': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'abort handlers',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                {
                                                                                                                                                                    "no such entry": null,
                                                                                                                                                                    "no context lookup": null,
                                                                                                                                                                    "cycle detected": null,
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                        () => {
                                                                                                                                                            
                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                $['value'],
                                                                                                                                                            )
                                                                                                                                                            return {
                                                                                                                                                                'no such entry': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no such entry',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'no context lookup': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no context lookup',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'cycle detected': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'cycle detected',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
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
                                                                                                                            ),
                                                                                                                            'l state': ['cyclic', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "abort handlers": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'abort handlers': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'abort handlers',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                {
                                                                                                                                                                    "no such entry": null,
                                                                                                                                                                    "no context lookup": null,
                                                                                                                                                                    "accessing cyclic sibling before it is resolved": null,
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                        () => {
                                                                                                                                                            
                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                $['value'],
                                                                                                                                                            )
                                                                                                                                                            return {
                                                                                                                                                                'no such entry': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no such entry',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'no context lookup': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no context lookup',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'accessing cyclic sibling before it is resolved': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'accessing cyclic sibling before it is resolved',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        }
                                                                                                                                    },
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
                                                                                                                            ),
                                                                                                                            'l state': ['stack', _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "abort handlers": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'abort handlers': _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'abort handlers',
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => _p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                {
                                                                                                                                                                    "no such entry": null,
                                                                                                                                                                    "no context lookup": null,
                                                                                                                                                                    "cycle detected": null,
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                        () => {
                                                                                                                                                            
                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                $['value'],
                                                                                                                                                            )
                                                                                                                                                            return {
                                                                                                                                                                'no such entry': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no such entry',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'no context lookup': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no context lookup',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'cycle detected': _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'cycle detected',
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            }
                                                                                                                                                        },
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
                                                                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'lookup entry depth':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['lookup entry depth', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "lookup": null,
                                                                                                "id": null,
                                                                                                "abort handlers": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'lookup': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'lookup',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Lookup(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'id': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'id',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'abort handlers': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'abort handlers',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                {
                                                                                                                    "no such entry": null,
                                                                                                                    "no context lookup": null,
                                                                                                                    "cycle detected": null,
                                                                                                                },
                                                                                                            ),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                            )
                                                                                                            return {
                                                                                                                'no such entry': _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'no such entry',
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => Assign(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'no context lookup': _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'no context lookup',
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => Assign(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'cycle detected': _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'cycle detected',
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => Assign(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'parameter':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['parameter', v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
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
                                                                            ),
                                                                            'l state': ['parent sibling', v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
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
                                                                            ),
                                                                            'l state': ['sibling', v_unmarshalled_from_parse_tree.Text(
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
                                                                            ),
                                                                            'l state': ['state', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
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
                                                                            ),
                                                                            'l state': ['text from list', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "source": null,
                                                                                                "assign character": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'source': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'source',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'assign character': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'assign character',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
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
                                                                case 'variable':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['variable', v_unmarshalled_from_parse_tree.Text(
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
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
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
                                                    },
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l list': _p.list.from.list(
                                                        v_unmarshalled_from_parse_tree.List(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )['items'],
                                                    ).map(
                                                        ($) => _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
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
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Select_Lookup: t_signatures.Select_Lookup = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
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
                            ),
                            'l state': ['implement me', v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
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
                            ),
                            'l state': ['from parameter', v_unmarshalled_from_parse_tree.Text(
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
                            ),
                            'l state': ['stack', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
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
                                                        ),
                                                        'l state': ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
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
                                                        ),
                                                        'l state': ['push', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "stack": null,
                                                                            "acyclic": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'stack': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'stack',
                                                                                },
                                                                            ),
                                                                            ($) => Select_Lookup(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'acyclic': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'acyclic',
                                                                                },
                                                                            ),
                                                                            ($) => Select_Lookup(
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
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
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
                            ),
                            'l state': ['acyclic', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
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
                                                        ),
                                                        'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
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
                                                        ),
                                                        'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
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
                                                        ),
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
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
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
                            ),
                            'l state': ['cyclic', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
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
                                                        ),
                                                        'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
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
                                                        ),
                                                        'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
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
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)
