
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/specials/change_context'

import _p_list_from_text from 'pareto-core/dist/specials/list_from_text'

import _p_variables from 'pareto-core/dist/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/typescript_light/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Directory: t_signatures.Directory = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p.dictionary.from.dictionary(
        $['entries'],
    ).map(
        ($, id) => _p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => _p.decide.text(
                $['option']['token']['value'],
                ($t): t_out.Directory.D => {
                    switch ($t) {
                        case 'file':
                            return _p_change_context(
                                $['value'],
                                ($) => ['file', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "statements": null,
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
                                                'statements': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'statements',
                                                            'subdocument context': _p.optional.literal.not_set(),
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
                            return _p_change_context(
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
)

export const Block: t_signatures.Block = ($, abort) => Statements(
    $,
    ($) => abort(
        $,
    ),
)

export const Statements: t_signatures.Statements = ($, abort) => _p.list.from.list(
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
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => _p.decide.text(
                $['option']['token']['value'],
                ($t): t_out.Statements.L => {
                    switch ($t) {
                        case 'block':
                            return _p_change_context(
                                $['value'],
                                ($) => ['block', Block(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'export':
                            return _p_change_context(
                                $['value'],
                                ($) => ['export', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
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
                                                            ($t): t_out.Statements.L.export_.type_ => {
                                                                switch ($t) {
                                                                    case 'named exports':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['named exports', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "specifiers": null,
                                                                                                "from": null,
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
                                                                                            'specifiers': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'specifiers',
                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p.list.from.list(
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
                                                                                                        ($) => _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                                        {
                                                                                                                            "name": null,
                                                                                                                            "as": null,
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
                                                                                                                        'name': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'name',
                                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => Identifier(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'as': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'as',
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
                                                                                            'from': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'from',
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
                                )],
                            )
                        case 'expression':
                            return _p_change_context(
                                $['value'],
                                ($) => ['expression', Expression(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )],
                            )
                        case 'import':
                            return _p_change_context(
                                $['value'],
                                ($) => ['import', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "type": null,
                                                    "from": null,
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
                                                            ($t): t_out.Statements.L.import_.type_ => {
                                                                switch ($t) {
                                                                    case 'default':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['default', Identifier(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'namespace':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['namespace', Identifier(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'named':
                                                                        return _p_change_context(
                                                                            $['value'],
                                                                            ($) => ['named', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "specifiers": null,
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
                                                                                            'specifiers': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'specifiers',
                                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p.list.from.list(
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
                                                                                                        ($) => _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                                        {
                                                                                                                            "name": null,
                                                                                                                            "as": null,
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
                                                                                                                        'name': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'name',
                                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            ($) => Identifier(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        'as': _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                                {
                                                                                                                                    'id': 'as',
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
                                                'from': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'from',
                                                            'subdocument context': _p.optional.literal.not_set(),
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
                            return _p_change_context(
                                $['value'],
                                ($) => ['module declaration', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "export": null,
                                                    "name": null,
                                                    "block": null,
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
                                                'export': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'export',
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
                                                'name': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'name',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Identifier(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'block': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'block',
                                                            'subdocument context': _p.optional.literal.not_set(),
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
                            return _p_change_context(
                                $['value'],
                                ($) => ['return', _p.optional.from.optional(
                                    v_unmarshalled_from_parse_tree.Optional(
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
                            return _p_change_context(
                                $['value'],
                                ($) => ['switch', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "expression": null,
                                                    "clauses": null,
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
                                                'expression': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'expression',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Expression(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                                'clauses': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'clauses',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p.list.from.list(
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
                                                            ($) => _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'expected properties': _p.dictionary.literal(
                                                                            {
                                                                                "type": null,
                                                                                "statements": null,
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
                                                                                        ($t): t_out.Statements.L.switch_.clauses.L.type_ => {
                                                                                            switch ($t) {
                                                                                                case 'case':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['case', Expression(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'default':
                                                                                                    return _p_change_context(
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
                                                                            'statements': _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'id': 'statements',
                                                                                        'subdocument context': _p.optional.literal.not_set(),
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
                            return _p_change_context(
                                $['value'],
                                ($) => ['type alias declaration', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "export": null,
                                                    "name": null,
                                                    "parameters": null,
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
                                                'export': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'export',
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
                                                'name': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'name',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Identifier(
                                                        $,
                                                        ($) => abort(
                                                            $,
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
                                                    ($) => _p.list.from.list(
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
                                                            ($) => Identifier(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
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
                                                            'subdocument context': _p.optional.literal.not_set(),
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
                            return _p_change_context(
                                $['value'],
                                ($) => ['variable', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "export": null,
                                                    "const": null,
                                                    "name": null,
                                                    "type": null,
                                                    "expression": null,
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
                                                'export': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'export',
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
                                                'const': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'const',
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
                                                'name': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'name',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Identifier(
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
                                                    ($) => _p.optional.from.optional(
                                                        v_unmarshalled_from_parse_tree.Optional(
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
                                                'expression': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'expression',
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
)

export const Type: t_signatures.Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Type => {
            switch ($t) {
                case 'boolean':
                    return _p_change_context(
                        $['value'],
                        ($) => ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'function':
                    return _p_change_context(
                        $['value'],
                        ($) => ['function', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "type parameters": null,
                                            "parameters": null,
                                            "return": null,
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
                                        'type parameters': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'type parameters',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
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
                                                    ($) => Type(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
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
                                            ($) => Function_Parameters(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'return': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'return',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['literal type', String_Literal(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'never':
                    return _p_change_context(
                        $['value'],
                        ($) => ['never', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'null':
                    return _p_change_context(
                        $['value'],
                        ($) => ['null', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'number':
                    return _p_change_context(
                        $['value'],
                        ($) => ['number', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'string':
                    return _p_change_context(
                        $['value'],
                        ($) => ['string', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'tuple':
                    return _p_change_context(
                        $['value'],
                        ($) => ['tuple', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "readonly": null,
                                            "elements": null,
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
                                        'readonly': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'readonly',
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
                                        'elements': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'elements',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['type literal', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "properties": null,
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
                                        'properties': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'properties',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
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
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': _p.dictionary.literal(
                                                                    {
                                                                        "key": null,
                                                                        "readonly": null,
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
                                                                    'key': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'key',
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
                                                                                ($t): t_out.Type.type_literal.properties.L.key => {
                                                                                    switch ($t) {
                                                                                        case 'identifier':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['identifier', Identifier(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'string literal':
                                                                                            return _p_change_context(
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
                                                                    'readonly': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'readonly',
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['type reference', _p_change_context(
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
                                            "type arguments": null,
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
                                        'start': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'start',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Identifier(
                                                $,
                                                ($) => abort(
                                                    $,
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
                                            ($) => _p.list.from.list(
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
                                                    ($) => Identifier(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'type arguments': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'type arguments',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['union', _p.list.from.list(
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
                    return _p_change_context(
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
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Function_Parameters: t_signatures.Function_Parameters = ($, abort) => _p.list.from.list(
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
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.Verbose_Group(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'expected properties': _p.dictionary.literal(
                        {
                            "name": null,
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
                        'name': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'name',
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => Identifier(
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
                            ($) => _p.optional.from.optional(
                                v_unmarshalled_from_parse_tree.Optional(
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

export const Expression: t_signatures.Expression = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Expression => {
            switch ($t) {
                case 'array literal':
                    return _p_change_context(
                        $['value'],
                        ($) => ['array literal', _p.list.from.list(
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['arrow function', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "parameters": null,
                                            "return type": null,
                                            "body": null,
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
                                            ($) => Function_Parameters(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'return type': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'return type',
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
                                                ($) => Type(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'body': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'body',
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
                                                    ($t): t_out.Expression.arrow_function.body => {
                                                        switch ($t) {
                                                            case 'block':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['block', Block(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'expression':
                                                                return _p_change_context(
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
                        )],
                    )
                case 'assignment':
                    return _p_change_context(
                        $['value'],
                        ($) => ['assignment', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "left": null,
                                            "right": null,
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
                                        'left': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'left',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'right': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'right',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['call', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "function selection": null,
                                            "arguments": null,
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
                                        'function selection': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'function selection',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
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
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['compare', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "left": null,
                                            "operator": null,
                                            "right": null,
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
                                        'left': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'left',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'operator': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'operator',
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
                                                    ($t): t_out.Expression.compare.operator => {
                                                        switch ($t) {
                                                            case 'loosely equal':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['loosely equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'strictly equal':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['strictly equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'loosely not equal':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['loosely not equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'strictly not equal':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['strictly not equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'smaller than':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['smaller than', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'smaller than or equal':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['smaller than or equal', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'greater than':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['greater than', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'greater than or equal':
                                                                return _p_change_context(
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
                                        'right': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'right',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['conditional', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "condition": null,
                                            "if true": null,
                                            "if false": null,
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
                                        'condition': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'condition',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
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
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
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
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['element access', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "collection": null,
                                            "index": null,
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
                                        'collection': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'collection',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'index': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'index',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['identifier', Identifier(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'false':
                    return _p_change_context(
                        $['value'],
                        ($) => ['false', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'null':
                    return _p_change_context(
                        $['value'],
                        ($) => ['null', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'number literal':
                    return _p_change_context(
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
                                'subdocument context': _p.optional.literal.not_set(),
                            },
                        )],
                    )
                case 'object literal':
                    return _p_change_context(
                        $['value'],
                        ($) => ['object literal', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "properties": null,
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
                                        'properties': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'properties',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
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
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': _p.dictionary.literal(
                                                                    {
                                                                        "key": null,
                                                                        "value": null,
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
                                                                    'key': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'key',
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
                                                                                ($t): t_out.Expression.object_literal.properties.L.key => {
                                                                                    switch ($t) {
                                                                                        case 'identifier':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['identifier', Identifier(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'string literal':
                                                                                            return _p_change_context(
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
                                                                    'value': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'value',
                                                                                'subdocument context': _p.optional.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['parenthesized', Expression(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'property access':
                    return _p_change_context(
                        $['value'],
                        ($) => ['property access', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "object": null,
                                            "property": null,
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
                                        'object': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'object',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => Expression(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'property': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'property',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                    return _p_change_context(
                        $['value'],
                        ($) => ['string literal', String_Literal(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'true':
                    return _p_change_context(
                        $['value'],
                        ($) => ['true', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'unary operation':
                    return _p_change_context(
                        $['value'],
                        ($) => ['unary operation', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "operator": null,
                                            "operand": null,
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
                                        'operator': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'operator',
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
                                                    ($t): t_out.Expression.unary_operation.operator => {
                                                        switch ($t) {
                                                            case 'negation':
                                                                return _p_change_context(
                                                                    $['value'],
                                                                    ($) => ['negation', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )],
                                                                )
                                                            case 'logical not':
                                                                return _p_change_context(
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
                                        'operand': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'operand',
                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const String_Literal: t_signatures.String_Literal = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "delimiter": null,
                    "value": null,
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
                'delimiter': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'delimiter',
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
                            ($t): t_out.String_Literal.delimiter => {
                                switch ($t) {
                                    case 'quote':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['quote', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'apostrophe':
                                        return _p_change_context(
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
                'value': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'value',
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
)

export const Identifier: t_signatures.Identifier = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "value": null,
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
                'value': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'value',
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
)
