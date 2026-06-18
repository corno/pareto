
import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

import p_variables from 'pareto-core/dist/implementation/specials/variables'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/signatures/unresolved/refiners/astn_parse_tree"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/implementation/data/unresolved"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_interface from "../../../interface/unresolved/refiners/astn_parse_tree"

export const Package_Set: t_signatures.Package_Set = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': p_.literal.not_set(),
            },
        ),
        'l dictionary': p_.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': p_.literal.not_set(),
                    },
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                    ($) => p_decide_text(
                        $['option']['token']['value'],
                        ($t): t_out.Package_Set.l_dictionary.D.l_entry => {
                            switch ($t) {
                                case 'package':
                                    return p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
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
                                    return p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': p_.literal.not_set(),
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
                                                    'subdocument context': p_.literal.not_set(),
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

export const Package: t_signatures.Package = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "specials": null,
                    "type imports": null,
                    "variable imports": null,
                    "functions": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'specials': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'specials',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
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
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )
                                return {
                                    'abort': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'abort',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'change context': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'change context',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'implement me': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'implement me',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'iterate': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'iterate',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'lookups': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'lookups',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'list from text': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'list from text',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'text from list': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'text from list',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'unreachable code path': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'unreachable code path',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                    'variables': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'variables',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
                'type imports': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type imports',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_external_interface.Imports(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'variable imports': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'variable imports',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "tail": null,
                                                        "type": null,
                                                    },
                                                ),
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'tail': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'tail',
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => ({
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            'l list': p_.from.list(
                                                                v_unmarshalled_from_parse_tree.List(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                )['items'],
                                                            ).map(
                                                                ($) => p_change_context(
                                                                    $['value'],
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': p_.literal.not_set(),
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
                                                    'type': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'type',
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Package.variable_imports.l_dictionary.D.l_entry.type_ => {
                                                                    switch ($t) {
                                                                        case 'ancestor':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['ancestor', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "dependency": null,
                                                                                                        "number of steps": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'dependency': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'dependency',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'number of steps': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'number of steps',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['decimal', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
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
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                        case 'sibling':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
                'functions': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'functions',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l dictionary': p_.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "type": null,
                                                        "expression": null,
                                                        "temp has abort": null,
                                                        "temp has lookups": null,
                                                        "temp has parameters": null,
                                                    },
                                                ),
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                )
                                                return {
                                                    'type': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'type',
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "import": null,
                                                                            "type": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'import': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'import',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'type': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'type',
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                    'expression': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'expression',
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => Assign(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'temp has abort': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'temp has abort',
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['true/false', null],
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                    ),
                                                    'temp has lookups': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'temp has lookups',
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['true/false', null],
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                    ),
                                                    'temp has parameters': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'temp has parameters',
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'type': ['true/false', null],
                                                                'subdocument context': p_.literal.not_set(),
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

export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "type": null,
                    "sub selection": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
                                    {
                                        "import": null,
                                        "type": null,
                                    },
                                ),
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                )
                                return {
                                    'import': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'import',
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'type': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'type',
                                                'subdocument context': p_.literal.not_set(),
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
                'sub selection': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'sub selection',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        'l list': p_.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    ),
                                    'l item': p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => p_decide_text(
                                            $['option']['token']['value'],
                                            ($t): t_out.Temp_Value_Type_Specification.sub_selection.l_list.L.l_item => {
                                                switch ($t) {
                                                    case 'dictionary':
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
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
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
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
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
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
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
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
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                        'subdocument context': p_.literal.not_set(),
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
            }
        },
    ),
)

export const Assign: t_signatures.Assign = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): t_out.Assign => {
            switch ($t) {
                case 'decide':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l state': ['decide', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "source": null,
                                                "type": null,
                                            },
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'source': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'source',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Select_Value(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'type': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Assign.l_state.decide.type_ => {
                                                            switch ($t) {
                                                                case 'boolean':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['boolean', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "if false": null,
                                                                                                "if true": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(
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
                                                                                            'if false': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if false',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'if true': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if true',
                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['optional', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "if not set": null,
                                                                                                "if set": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(
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
                                                                                            'if not set': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if not set',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'if set': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'if set',
                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['state', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "type": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(
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
                                                                                            'type': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'type',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => p_decide_text(
                                                                                                        $['option']['token']['value'],
                                                                                                        ($t): t_out.Assign.l_state.decide.type_.l_state.state.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'partial':
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l state': ['partial', p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "options": null,
                                                                                                                                                "default": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'options': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'options',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $['value'],
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        'l dictionary': p_.from.dictionary(
                                                                                                                                                            $['entries'],
                                                                                                                                                        ).map(
                                                                                                                                                            ($, id) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                            'default': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'default',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l state': ['full', p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "options": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'options': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'options',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => ({
                                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                                            $['value'],
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        'l dictionary': p_.from.dictionary(
                                                                                                                                                            $['entries'],
                                                                                                                                                        ).map(
                                                                                                                                                            ($, id) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l state': ['single', p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "option": null,
                                                                                                                                                "if true": null,
                                                                                                                                                "if false": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'option': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'option',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            'if true': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'if true',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            'if false': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'if false',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'text':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['text', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "temp resulting node": null,
                                                                                                "cases": null,
                                                                                                "default": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'temp resulting node': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'temp resulting node',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(
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
                                                                                            'cases': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'cases',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        'l dictionary': p_.from.dictionary(
                                                                                                            $['entries'],
                                                                                                        ).map(
                                                                                                            ($, id) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                            'default': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'default',
                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
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
                            )],
                        }),
                    )
                case 'construct':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l state': ['construct', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Assign.l_state.construct => {
                                        switch ($t) {
                                            case 'boolean':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['boolean', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.boolean_ => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['literal', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        ($) => p_decide_text(
                                                                                            $['option']['token']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'false':
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                        case 'from':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['from', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'selection': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'boolean':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['boolean', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.boolean_ => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'not':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        case 'dictionary':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['dictionary', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.dictionary => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'is empty':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        case 'list':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['list', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.list => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'is empty':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                            case 'dictionary':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['dictionary', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.dictionary => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['literal', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $['value'],
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l dictionary': p_.from.dictionary(
                                                                                                $['entries'],
                                                                                            ).map(
                                                                                                ($, id) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
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
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['from', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'selection': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'dictionary':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['dictionary', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_.l_state.dictionary => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'filter':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['filter', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['resolve', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                    "temp resulting entry node": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'temp resulting entry node': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'temp resulting entry node',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        case 'list':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['list', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_.l_state.list => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'convert':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['convert', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign id": null,
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                    "abort": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign id': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign id',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'assign entry': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'abort': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'abort',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                            case 'group':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['group', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.group => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['literal', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "properties": null,
                                                                                                        "have dependencies": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'properties': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'properties',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l dictionary': p_.from.dictionary(
                                                                                                                    $['entries'],
                                                                                                                ).map(
                                                                                                                    ($, id) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
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
                                                                                                    'have dependencies': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'have dependencies',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'type': ['true/false', null],
                                                                                                                'subdocument context': p_.literal.not_set(),
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
                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                            case 'list':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['list', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.list => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['literal', {
                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                            $,
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        'l list': p_.from.list(
                                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
                                                                                            )['items'],
                                                                                        ).map(
                                                                                            ($) => p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
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
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['from', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'selection': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'dictionary':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['dictionary', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_.l_state.dictionary => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'convert':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['convert', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign entry": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign entry': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign entry',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        case 'list':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['list', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_.l_state.list => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'filter':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['filter', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign item': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign item': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map with state', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "initialize state": null,
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                    "update state": null,
                                                                                                                                                                                    "wrap up": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'initialize state': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'initialize state',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'assign item': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'update state': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'update state',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'wrap up': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'wrap up',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['reduce', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "initialize state": null,
                                                                                                                                                                                    "assign item": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'initialize state': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'initialize state',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                        },
                                                                                                                                                                                    ),
                                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                                'assign item': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign item',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                            case 'nothing':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['number', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.number_ => {
                                                                    switch ($t) {
                                                                        case 'approximation':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['approximation', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        ($) => p_decide_text(
                                                                                            $['option']['token']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.number_.l_state.approximation => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['literal', v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['scientific notation', {
                                                                                                                            'precision': 10,
                                                                                                                        }],
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                        case 'integer':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['integer', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        ($) => p_decide_text(
                                                                                            $['option']['token']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.number_.l_state.integer => {
                                                                                                switch ($t) {
                                                                                                    case 'copy':
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['divide', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {
                                                                                                                                    "assign dividend": null,
                                                                                                                                    "assign divisor": null,
                                                                                                                                    "abort": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'assign dividend': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'assign dividend',
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Select_Value(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                'assign divisor': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'assign divisor',
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Select_Value(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                'abort': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'abort',
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['literal', v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                        case 'natural':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['natural', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        ($) => p_decide_text(
                                                                                            $['option']['token']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.number_.l_state.natural => {
                                                                                                switch ($t) {
                                                                                                    case 'literal':
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['literal', v_unmarshalled_from_parse_tree.Number(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'type': ['decimal', null],
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                )],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'copy':
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['number of dictionary entries', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {
                                                                                                                                    "dictionary": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'dictionary': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'dictionary',
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
                                                                                                                ),
                                                                                                                'l state': ['number of list items', p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {
                                                                                                                                    "list": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'list': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'list',
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['optional', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.optional => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['literal', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        ($) => p_decide_text(
                                                                                            $['option']['token']['value'],
                                                                                            ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.literal => {
                                                                                                switch ($t) {
                                                                                                    case 'not set':
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                        return p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ({
                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                    $,
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                    },
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
                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                    $['value'],
                                                                                                                    {
                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                        case 'from':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['from', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'selection': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'boolean':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['boolean', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_.l_state.boolean_ => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'convert':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['convert', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign set": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign set': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign set',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['optional', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_.l_state.optional => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'map':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'l state': ['map', p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "assign set": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'assign set': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'assign set',
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                            case 'state':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['state', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.state => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['literal', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "option": null,
                                                                                                        "assign option": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'option': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'option',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'assign option': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'assign option',
                                                                                                                'subdocument context': p_.literal.not_set(),
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
                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                            case 'text':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['text', p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Assign.l_state.construct.l_state.text => {
                                                                    switch ($t) {
                                                                        case 'literal':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['literal', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "type": null,
                                                                                                        "value": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.text.l_state.literal.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'identifier':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
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
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
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
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'value': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'value',
                                                                                                                'subdocument context': p_.literal.not_set(),
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
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l state': ['from', p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                            {
                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                    {
                                                                                                        "selection": null,
                                                                                                        "type": null,
                                                                                                    },
                                                                                                ),
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        ),
                                                                                        ($) => p_variables(
                                                                                            () => {
                                                                                                
                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                )
                                                                                                return {
                                                                                                    'selection': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'selection',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => Select_Value(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'type': p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                            {
                                                                                                                'id': 'type',
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
                                                                                                        ),
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => p_decide_text(
                                                                                                                $['option']['token']['value'],
                                                                                                                ($t): t_out.Assign.l_state.construct.l_state.text.l_state.from_.type_ => {
                                                                                                                    switch ($t) {
                                                                                                                        case 'text':
                                                                                                                            return p_change_context(
                                                                                                                                $['value'],
                                                                                                                                ($) => ({
                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                        $,
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    'l state': ['text', p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_decide_text(
                                                                                                                                            $['option']['token']['value'],
                                                                                                                                            ($t): t_out.Assign.l_state.construct.l_state.text.l_state.from_.type_.l_state.text => {
                                                                                                                                                switch ($t) {
                                                                                                                                                    case 'copy':
                                                                                                                                                        return p_change_context(
                                                                                                                                                            $['value'],
                                                                                                                                                            ($) => ({
                                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                                    $,
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                        default:
                                                                                                                            return abort(
                                                                                                                                ['liana', {
                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                        $['value'],
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'source document':
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                            return p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
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
                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
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
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
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
                case 'select':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l state': ['special', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Assign.l_state.special => {
                                        switch ($t) {
                                            case 'abort':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['assert', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "tester": null,
                                                                            "normal flow": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'tester': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'tester',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Assign(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'normal flow': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'normal flow',
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['change context', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "new context": null,
                                                                            "expression": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'new context': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'new context',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Select_Value(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'expression': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'expression',
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['variables', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "variables": null,
                                                                            "assign": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'variables': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'variables',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': p_.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                },
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
                                                                        'assign': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'assign',
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['iterate', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "list": null,
                                                                            "assign": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'list': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'list',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Select_Value(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'assign': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'assign',
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['unreachable', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "explanation": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'explanation': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'explanation',
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
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
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Select_Value: t_signatures.Select_Value = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): t_out.Select_Value => {
            switch ($t) {
                case 'implement me':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l state': ['regular', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "start": null,
                                                "tail": null,
                                            },
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'start': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'start',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Select_Value.l_state.regular.start => {
                                                            switch ($t) {
                                                                case 'call':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['call', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "source": null,
                                                                                                "context": null,
                                                                                                "abort": null,
                                                                                                "lookups": null,
                                                                                                "arguments": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'source': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'source',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => p_decide_text(
                                                                                                        $['option']['token']['value'],
                                                                                                        ($t): t_out.Select_Value.l_state.regular.start.l_state.call.source => {
                                                                                                            switch ($t) {
                                                                                                                case 'local':
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                case 'imported':
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l state': ['imported', p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "import": null,
                                                                                                                                                "variable": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'import': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'import',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            'variable': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'variable',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        }],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'context': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'context',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'abort': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'abort',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(
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
                                                                                            'lookups': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'lookups',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(
                                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    )['optional'],
                                                                                                ).map(
                                                                                                    ($) => p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => p_decide_text(
                                                                                                            $['option']['token']['value'],
                                                                                                            ($t): t_out.Select_Value.l_state.regular.start.l_state.call.lookups.O => {
                                                                                                                switch ($t) {
                                                                                                                    case 'initialize':
                                                                                                                        return p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                    {
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                'l state': ['initialize', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'l dictionary': p_.from.dictionary(
                                                                                                                                            $['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                        return p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                    {
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
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
                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                    $['value'],
                                                                                                                                    {
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                            }],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'arguments': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'arguments',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(
                                                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    )['optional'],
                                                                                                ).map(
                                                                                                    ($) => p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => p_decide_text(
                                                                                                            $['option']['token']['value'],
                                                                                                            ($t): t_out.Select_Value.l_state.regular.start.l_state.call.arguments_.O => {
                                                                                                                switch ($t) {
                                                                                                                    case 'initialize':
                                                                                                                        return p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                    {
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                'l state': ['initialize', p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => ({
                                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'l dictionary': p_.from.dictionary(
                                                                                                                                            $['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                        return p_change_context(
                                                                                                                            $['value'],
                                                                                                                            ($) => ({
                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                    $,
                                                                                                                                    {
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
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
                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                    $['value'],
                                                                                                                                    {
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['dictionary entry', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "dictionary": null,
                                                                                                "id": null,
                                                                                                "no such entry handler": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'dictionary': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'dictionary',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'id': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'id',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'no such entry handler': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'no such entry handler',
                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['list from text', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "source": null,
                                                                                                "assign item": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'source': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'source',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'assign item': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'assign item',
                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['lookup entry', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "lookup": null,
                                                                                                "id": null,
                                                                                                "type": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'lookup': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'lookup',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Lookup(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'id': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'id',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'type': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'type',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => p_decide_text(
                                                                                                        $['option']['token']['value'],
                                                                                                        ($t): t_out.Select_Value.l_state.regular.start.l_state.lookup_entry.type_ => {
                                                                                                            switch ($t) {
                                                                                                                case 'acyclic':
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l state': ['acyclic', p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "abort handlers": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'abort handlers': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'abort handlers',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                {
                                                                                                                                                                    "no such entry": null,
                                                                                                                                                                    "no context lookup": null,
                                                                                                                                                                    "cycle detected": null,
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => p_variables(
                                                                                                                                                        () => {
                                                                                                                                                            
                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                $['value'],
                                                                                                                                                                {
                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                },
                                                                                                                                                            )
                                                                                                                                                            return {
                                                                                                                                                                'no such entry': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no such entry',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'no context lookup': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no context lookup',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'cycle detected': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'cycle detected',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l state': ['cyclic', p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "abort handlers": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'abort handlers': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'abort handlers',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                {
                                                                                                                                                                    "no such entry": null,
                                                                                                                                                                    "no context lookup": null,
                                                                                                                                                                    "accessing cyclic sibling before it is resolved": null,
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => p_variables(
                                                                                                                                                        () => {
                                                                                                                                                            
                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                $['value'],
                                                                                                                                                                {
                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                },
                                                                                                                                                            )
                                                                                                                                                            return {
                                                                                                                                                                'no such entry': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no such entry',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'no context lookup': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no context lookup',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'accessing cyclic sibling before it is resolved': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'accessing cyclic sibling before it is resolved',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                    return p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'l state': ['stack', p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "abort handlers": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'abort handlers': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'abort handlers',
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => p_change_context(
                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                        {
                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                {
                                                                                                                                                                    "no such entry": null,
                                                                                                                                                                    "no context lookup": null,
                                                                                                                                                                    "cycle detected": null,
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    ($) => p_variables(
                                                                                                                                                        () => {
                                                                                                                                                            
                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                $['value'],
                                                                                                                                                                {
                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                },
                                                                                                                                                            )
                                                                                                                                                            return {
                                                                                                                                                                'no such entry': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no such entry',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'no context lookup': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'no context lookup',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => Assign(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                                'cycle detected': p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'id': 'cycle detected',
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'lookup entry depth':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['lookup entry depth', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "lookup": null,
                                                                                                "id": null,
                                                                                                "abort handlers": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'lookup': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'lookup',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Lookup(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'id': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'id',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'abort handlers': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'abort handlers',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "no such entry": null,
                                                                                                                    "no context lookup": null,
                                                                                                                    "cycle detected": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                },
                                                                                                            )
                                                                                                            return {
                                                                                                                'no such entry': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'no such entry',
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => Assign(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'no context lookup': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'no context lookup',
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => Assign(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'cycle detected': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'cycle detected',
                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                case 'state':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['text from list', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "source": null,
                                                                                                "assign character": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                            },
                                                                                        )
                                                                                        return {
                                                                                            'source': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'source',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Select_Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'assign character': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'assign character',
                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'tail': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'tail',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    'l list': p_.from.list(
                                                        v_unmarshalled_from_parse_tree.List(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        )['items'],
                                                    ).map(
                                                        ($) => p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': p_.literal.not_set(),
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
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Select_Lookup: t_signatures.Select_Lookup = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): t_out.Select_Lookup => {
            switch ($t) {
                case 'implement me':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l state': ['stack', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Select_Lookup.l_state.stack => {
                                        switch ($t) {
                                            case 'empty':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['push', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "stack": null,
                                                                            "acyclic": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    )
                                                                    return {
                                                                        'stack': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'stack',
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Select_Lookup(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'acyclic': p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'acyclic',
                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
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
                case 'acyclic':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l state': ['acyclic', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Select_Lookup.l_state.acyclic => {
                                        switch ($t) {
                                            case 'not set':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
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
                case 'cyclic':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            'l state': ['cyclic', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Select_Lookup.l_state.cyclic => {
                                        switch ($t) {
                                            case 'not set':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
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
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
