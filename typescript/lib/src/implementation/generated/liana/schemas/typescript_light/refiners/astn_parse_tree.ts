
import * as p_ from 'pareto-core/implementation/refiner'
import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/signatures/refiners/astn_parse_tree.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/typescript_light/data.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/implementation/manual/transformers/parse_tree/start_token_range"

export const Directory: t_signatures.Directory = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_.from.dictionary($['entries'],
    ).map(
        ($, id) => p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => p_decide_text(
                $['option']['token']['value'],
                ($t): t_out.Directory.D => {
                    switch ($t) {
                        case 'file':
                            return p_change_context(
                                $['value'],
                                ($) => ['file', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
                                                    "statements": null,
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
                                                'statements': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'statements',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Statements(
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
                            )
                        case 'directory':
                            return p_change_context(
                                $['value'],
                                ($) => ['directory', Directory(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
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
)

export const Block: t_signatures.Block = ($, abort) => Statements(
    $,
    ($) => abort(
        $,
    ),
)

export const Statements: t_signatures.Statements = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
        ($) => p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => p_decide_text(
                $['option']['token']['value'],
                ($t): t_out.Statements.L => {
                    switch ($t) {
                        case 'block':
                            return p_change_context(
                                $['value'],
                                ($) => ['block', Block(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'export':
                            return p_change_context(
                                $['value'],
                                ($) => ['export', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
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
                                                            ($t): t_out.Statements.L.export_.type_ => {
                                                                switch ($t) {
                                                                    case 'named exports':
                                                                        return p_change_context(
                                                                            $['value'],
                                                                            ($) => ['named exports', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "specifiers": null,
                                                                                                "from": null,
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
                                                                                            'specifiers': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'specifiers',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                        {
                                                                                                                            "name": null,
                                                                                                                            "as": null,
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
                                                                                                                        'name': p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'name',
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => Identifier(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'as': p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'as',
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                )['optional'],
                                                                                                                            ).map(
                                                                                                                                ($) => Identifier(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'from': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'from',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    )['optional'],
                                                                                                ).map(
                                                                                                    ($) => String_Literal(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
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
                            )
                        case 'expression':
                            return p_change_context(
                                $['value'],
                                ($) => ['expression', Expression(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'import':
                            return p_change_context(
                                $['value'],
                                ($) => ['import', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
                                                    "type": null,
                                                    "from": null,
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
                                                            ($t): t_out.Statements.L.import_.type_ => {
                                                                switch ($t) {
                                                                    case 'default':
                                                                        return p_change_context(
                                                                            $['value'],
                                                                            ($) => ['default', Identifier(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'namespace':
                                                                        return p_change_context(
                                                                            $['value'],
                                                                            ($) => ['namespace', Identifier(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'named':
                                                                        return p_change_context(
                                                                            $['value'],
                                                                            ($) => ['named', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "specifiers": null,
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
                                                                                            'specifiers': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'specifiers',
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                                                                        ($) => p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                        {
                                                                                                                            "name": null,
                                                                                                                            "as": null,
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
                                                                                                                        'name': p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'name',
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => Identifier(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'as': p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'as',
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                )['optional'],
                                                                                                                            ).map(
                                                                                                                                ($) => Identifier(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
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
                                                'from': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'from',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => String_Literal(
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
                            )
                        case 'module declaration':
                            return p_change_context(
                                $['value'],
                                ($) => ['module declaration', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
                                                    "export": null,
                                                    "name": null,
                                                    "block": null,
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
                                                'export': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'export',
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
                                                'name': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'name',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Identifier(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'block': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'block',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Block(
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
                            )
                        case 'return':
                            return p_change_context(
                                $['value'],
                                ($) => ['return', p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    )['optional'],
                                ).map(
                                    ($) => Expression(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                )],
                            )
                        case 'switch':
                            return p_change_context(
                                $['value'],
                                ($) => ['switch', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
                                                    "expression": null,
                                                    "clauses": null,
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
                                                    ($) => Expression(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'clauses': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'clauses',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                            ($) => p_change_context(
                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'expected properties': p_.literal.dictionary(
                                                                            {
                                                                                "type": null,
                                                                                "statements": null,
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
                                                                                        ($t): t_out.Statements.L.switch_.clauses.L.type_ => {
                                                                                            switch ($t) {
                                                                                                case 'case':
                                                                                                    return p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['case', Expression(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'default':
                                                                                                    return p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['default', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
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
                                                                            'statements': p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'id': 'statements',
                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => Statements(
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
                                                    ),
                                                ),
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'type alias declaration':
                            return p_change_context(
                                $['value'],
                                ($) => ['type alias declaration', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
                                                    "export": null,
                                                    "name": null,
                                                    "parameters": null,
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
                                                'export': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'export',
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
                                                'name': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'name',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Identifier(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'parameters': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'parameters',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                            ($) => Identifier(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
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
                                                    ($) => Type(
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
                            )
                        case 'variable':
                            return p_change_context(
                                $['value'],
                                ($) => ['variable', p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': p_.literal.dictionary(
                                                {
                                                    "export": null,
                                                    "const": null,
                                                    "name": null,
                                                    "type": null,
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
                                                'export': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'export',
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
                                                'const': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'const',
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
                                                'name': p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'name',
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Identifier(
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
                                                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )['optional'],
                                                    ).map(
                                                        ($) => Type(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
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
                                                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )['optional'],
                                                    ).map(
                                                        ($) => Expression(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            }
                                        },
                                    ),
                                )],
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
)

export const Type: t_signatures.Type = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): t_out.Type => {
            switch ($t) {
                case 'boolean':
                    return p_change_context(
                        $['value'],
                        ($) => ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'function':
                    return p_change_context(
                        $['value'],
                        ($) => ['function', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "type parameters": null,
                                            "parameters": null,
                                            "return": null,
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
                                        'type parameters': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'type parameters',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                    ($) => Type(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'parameters': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'parameters',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Function_Parameters(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'return': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'return',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Type(
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
                    )
                case 'literal type':
                    return p_change_context(
                        $['value'],
                        ($) => ['literal type', String_Literal(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'never':
                    return p_change_context(
                        $['value'],
                        ($) => ['never', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'null':
                    return p_change_context(
                        $['value'],
                        ($) => ['null', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'number':
                    return p_change_context(
                        $['value'],
                        ($) => ['number', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'string':
                    return p_change_context(
                        $['value'],
                        ($) => ['string', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'tuple':
                    return p_change_context(
                        $['value'],
                        ($) => ['tuple', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "readonly": null,
                                            "elements": null,
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
                                        'readonly': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'readonly',
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
                                        'elements': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'elements',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                    ($) => Type(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'type literal':
                    return p_change_context(
                        $['value'],
                        ($) => ['type literal', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "properties": null,
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
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                    ($) => p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': p_.literal.dictionary(
                                                                    {
                                                                        "key": null,
                                                                        "readonly": null,
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
                                                                    'key': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'key',
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
                                                                                ($t): t_out.Type.type_literal.properties.L.key => {
                                                                                    switch ($t) {
                                                                                        case 'identifier':
                                                                                            return p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['identifier', Identifier(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'string literal':
                                                                                            return p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['string literal', String_Literal(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
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
                                                                    'readonly': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'readonly',
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
                                                                        ($) => Type(
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
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'type reference':
                    return p_change_context(
                        $['value'],
                        ($) => ['type reference', p_change_context(
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
                                            "type arguments": null,
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
                                            ($) => Identifier(
                                                $,
                                                ($) => abort(
                                                    $,
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
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                    ($) => Identifier(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'type arguments': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'type arguments',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                    ($) => Type(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'union':
                    return p_change_context(
                        $['value'],
                        ($) => ['union', p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                ($) => Type(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'void':
                    return p_change_context(
                        $['value'],
                        ($) => ['void', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
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

export const Function_Parameters: t_signatures.Function_Parameters = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
        ($) => p_change_context(
            v_unmarshalled_from_parse_tree.Verbose_Group(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'expected properties': p_.literal.dictionary(
                        {
                            "name": null,
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
                        'name': p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'name',
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => Identifier(
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
                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )['optional'],
                            ).map(
                                ($) => Type(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        ),
                    }
                },
            ),
        ),
    ),
)

export const Expression: t_signatures.Expression = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): t_out.Expression => {
            switch ($t) {
                case 'array literal':
                    return p_change_context(
                        $['value'],
                        ($) => ['array literal', p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                ($) => Expression(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'arrow function':
                    return p_change_context(
                        $['value'],
                        ($) => ['arrow function', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "parameters": null,
                                            "return type": null,
                                            "body": null,
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
                                        'parameters': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'parameters',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Function_Parameters(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'return type': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'return type',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => Type(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'body': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'body',
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
                                                    ($t): t_out.Expression.arrow_function.body => {
                                                        switch ($t) {
                                                            case 'block':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['block', Block(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'expression':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['expression', Expression(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
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
                    )
                case 'assignment':
                    return p_change_context(
                        $['value'],
                        ($) => ['assignment', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "left": null,
                                            "right": null,
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
                                        'left': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'left',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'right': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'right',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
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
                    )
                case 'call':
                    return p_change_context(
                        $['value'],
                        ($) => ['call', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "function selection": null,
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
                                        'function selection': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'function selection',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
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
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                    ($) => Expression(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'compare':
                    return p_change_context(
                        $['value'],
                        ($) => ['compare', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "left": null,
                                            "operator": null,
                                            "right": null,
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
                                        'left': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'left',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'operator': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'operator',
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
                                                    ($t): t_out.Expression.compare.operator => {
                                                        switch ($t) {
                                                            case 'loosely equal':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['loosely equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'strictly equal':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['strictly equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'loosely not equal':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['loosely not equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'strictly not equal':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['strictly not equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'smaller than':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['smaller than', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'smaller than or equal':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['smaller than or equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'greater than':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['greater than', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'greater than or equal':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['greater than or equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
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
                                        'right': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'right',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
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
                    )
                case 'conditional':
                    return p_change_context(
                        $['value'],
                        ($) => ['conditional', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "condition": null,
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
                                        'condition': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'condition',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
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
                                            ($) => Expression(
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
                                            ($) => Expression(
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
                    )
                case 'element access':
                    return p_change_context(
                        $['value'],
                        ($) => ['element access', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "collection": null,
                                            "index": null,
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
                                        'collection': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'collection',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'index': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'index',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
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
                    )
                case 'identifier':
                    return p_change_context(
                        $['value'],
                        ($) => ['identifier', Identifier(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'false':
                    return p_change_context(
                        $['value'],
                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'null':
                    return p_change_context(
                        $['value'],
                        ($) => ['null', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'number literal':
                    return p_change_context(
                        $['value'],
                        ($) => ['number literal', v_unmarshalled_from_parse_tree.Number(
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
                    )
                case 'object literal':
                    return p_change_context(
                        $['value'],
                        ($) => ['object literal', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "properties": null,
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
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
                                                    ($) => p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': p_.literal.dictionary(
                                                                    {
                                                                        "key": null,
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
                                                                    'key': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'key',
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
                                                                                ($t): t_out.Expression.object_literal.properties.L.key => {
                                                                                    switch ($t) {
                                                                                        case 'identifier':
                                                                                            return p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['identifier', Identifier(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'string literal':
                                                                                            return p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['string literal', String_Literal(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
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
                                                                        ($) => Expression(
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
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'parenthesized':
                    return p_change_context(
                        $['value'],
                        ($) => ['parenthesized', Expression(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'property access':
                    return p_change_context(
                        $['value'],
                        ($) => ['property access', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "object": null,
                                            "property": null,
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
                                        'object': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'object',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'property': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'property',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Identifier(
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
                    )
                case 'string literal':
                    return p_change_context(
                        $['value'],
                        ($) => ['string literal', String_Literal(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'true':
                    return p_change_context(
                        $['value'],
                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'unary operation':
                    return p_change_context(
                        $['value'],
                        ($) => ['unary operation', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "operator": null,
                                            "operand": null,
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
                                        'operator': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'operator',
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
                                                    ($t): t_out.Expression.unary_operation.operator => {
                                                        switch ($t) {
                                                            case 'negation':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['negation', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'logical not':
                                                                return p_change_context(
                                                                    $['value'],
                                                                    ($) => ['logical not', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
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
                                        'operand': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'operand',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
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

export const String_Literal: t_signatures.String_Literal = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "delimiter": null,
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
                'delimiter': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'delimiter',
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
                            ($t): t_out.String_Literal.delimiter => {
                                switch ($t) {
                                    case 'quote':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['quote', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'apostrophe':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['apostrophe', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
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
)

export const Identifier: t_signatures.Identifier = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
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
)
