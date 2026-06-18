
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Directory: t_signatures.Directory = ($) => ['dictionary', p_.from.dictionary(
    $,
).map(
    ($, id) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'file':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'file',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "statements": p_change_context(
                                        $['statements'],
                                        ($) => Statements(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'directory':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'directory',
                            'value': Directory(
                                $,
                            ),
                        }),
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Block: t_signatures.Block = ($) => Statements(
    $,
)

export const Statements: t_signatures.Statements = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'block':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'block',
                            'value': Block(
                                $,
                            ),
                        }),
                    )
                case 'export':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'export',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "type": p_change_context(
                                        $['type'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'named exports':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'named exports',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "specifiers": p_change_context(
                                                                            $['specifiers'],
                                                                            ($) => ['list', p_.from.list(
                                                                                $,
                                                                            ).map(
                                                                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                    {
                                                                                        "name": p_change_context(
                                                                                            $['name'],
                                                                                            ($) => Identifier(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        "as": p_change_context(
                                                                                            $['as'],
                                                                                            ($) => ['optional', p_decide_optional(
                                                                                                $,
                                                                                                ($): t_out.Value.optional => ['set', Identifier(
                                                                                                    $,
                                                                                                )],
                                                                                                () => ['not set', null],
                                                                                            )],
                                                                                        ),
                                                                                    },
                                                                                )]],
                                                                            )],
                                                                        ),
                                                                        "from": p_change_context(
                                                                            $['from'],
                                                                            ($) => ['optional', p_decide_optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', String_Literal(
                                                                                    $,
                                                                                )],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'expression':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'expression',
                            'value': Expression(
                                $,
                            ),
                        }),
                    )
                case 'import':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'import',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "type": p_change_context(
                                        $['type'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'default':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'default',
                                                                'value': Identifier(
                                                                    $,
                                                                ),
                                                            }),
                                                        )
                                                    case 'namespace':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'namespace',
                                                                'value': Identifier(
                                                                    $,
                                                                ),
                                                            }),
                                                        )
                                                    case 'named':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'named',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "specifiers": p_change_context(
                                                                            $['specifiers'],
                                                                            ($) => ['list', p_.from.list(
                                                                                $,
                                                                            ).map(
                                                                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                    {
                                                                                        "name": p_change_context(
                                                                                            $['name'],
                                                                                            ($) => Identifier(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        "as": p_change_context(
                                                                                            $['as'],
                                                                                            ($) => ['optional', p_decide_optional(
                                                                                                $,
                                                                                                ($): t_out.Value.optional => ['set', Identifier(
                                                                                                    $,
                                                                                                )],
                                                                                                () => ['not set', null],
                                                                                            )],
                                                                                        ),
                                                                                    },
                                                                                )]],
                                                                            )],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                    "from": p_change_context(
                                        $['from'],
                                        ($) => String_Literal(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'module declaration':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'module declaration',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "export": p_change_context(
                                        $['export'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "name": p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                    "block": p_change_context(
                                        $['block'],
                                        ($) => Block(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'return':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'return',
                            'value': ['optional', p_decide_optional(
                                $,
                                ($): t_out.Value.optional => ['set', Expression(
                                    $,
                                )],
                                () => ['not set', null],
                            )],
                        }),
                    )
                case 'switch':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'switch',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "expression": p_change_context(
                                        $['expression'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "clauses": p_change_context(
                                        $['clauses'],
                                        ($) => ['list', p_.from.list(
                                            $,
                                        ).map(
                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                {
                                                    "type": p_change_context(
                                                        $['type'],
                                                        ($) => ['state', p_decide_state(
                                                            $,
                                                            ($): t_out.Value.state => {
                                                                switch ($[0]) {
                                                                    case 'case':
                                                                        return p_.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'case',
                                                                                'value': Expression(
                                                                                    $,
                                                                                ),
                                                                            }),
                                                                        )
                                                                    case 'default':
                                                                        return p_.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'default',
                                                                                'value': ['nothing', null],
                                                                            }),
                                                                        )
                                                                    default:
                                                                        return p_.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        )],
                                                    ),
                                                    "statements": p_change_context(
                                                        $['statements'],
                                                        ($) => Statements(
                                                            $,
                                                        ),
                                                    ),
                                                },
                                            )]],
                                        )],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'type alias declaration':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'type alias declaration',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "export": p_change_context(
                                        $['export'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "name": p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                    "parameters": p_change_context(
                                        $['parameters'],
                                        ($) => ['list', p_.from.list(
                                            $,
                                        ).map(
                                            ($) => Identifier(
                                                $,
                                            ),
                                        )],
                                    ),
                                    "type": p_change_context(
                                        $['type'],
                                        ($) => Type(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'variable':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'variable',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "export": p_change_context(
                                        $['export'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "const": p_change_context(
                                        $['const'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "name": p_change_context(
                                        $['name'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                    "type": p_change_context(
                                        $['type'],
                                        ($) => ['optional', p_decide_optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', Type(
                                                $,
                                            )],
                                            () => ['not set', null],
                                        )],
                                    ),
                                    "expression": p_change_context(
                                        $['expression'],
                                        ($) => ['optional', p_decide_optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', Expression(
                                                $,
                                            )],
                                            () => ['not set', null],
                                        )],
                                    ),
                                },
                            )]],
                        }),
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Type: t_signatures.Type = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'boolean':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'boolean',
                        'value': ['nothing', null],
                    }),
                )
            case 'function':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'function',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "type parameters": p_change_context(
                                    $['type parameters'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => Type(
                                            $,
                                        ),
                                    )],
                                ),
                                "parameters": p_change_context(
                                    $['parameters'],
                                    ($) => Function_Parameters(
                                        $,
                                    ),
                                ),
                                "return": p_change_context(
                                    $['return'],
                                    ($) => Type(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'literal type':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'literal type',
                        'value': String_Literal(
                            $,
                        ),
                    }),
                )
            case 'never':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'never',
                        'value': ['nothing', null],
                    }),
                )
            case 'null':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'null',
                        'value': ['nothing', null],
                    }),
                )
            case 'number':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['nothing', null],
                    }),
                )
            case 'string':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'string',
                        'value': ['nothing', null],
                    }),
                )
            case 'tuple':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'tuple',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "readonly": p_change_context(
                                    $['readonly'],
                                    ($) => ['text', {
                                        'delimiter': ['none', null],
                                        'value': v_primitives_to_text.true_false(
                                            $,
                                        ),
                                    }],
                                ),
                                "elements": p_change_context(
                                    $['elements'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => Type(
                                            $,
                                        ),
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'type literal':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'type literal',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "properties": p_change_context(
                                    $['properties'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "key": p_change_context(
                                                    $['key'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'identifier':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'identifier',
                                                                            'value': Identifier(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                case 'string literal':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'string literal',
                                                                            'value': String_Literal(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                ),
                                                "readonly": p_change_context(
                                                    $['readonly'],
                                                    ($) => ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': v_primitives_to_text.true_false(
                                                            $,
                                                        ),
                                                    }],
                                                ),
                                                "type": p_change_context(
                                                    $['type'],
                                                    ($) => Type(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'type reference':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'type reference',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "start": p_change_context(
                                    $['start'],
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                                "tail": p_change_context(
                                    $['tail'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => Identifier(
                                            $,
                                        ),
                                    )],
                                ),
                                "type arguments": p_change_context(
                                    $['type arguments'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => Type(
                                            $,
                                        ),
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'union':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'union',
                        'value': ['list', p_.from.list(
                            $,
                        ).map(
                            ($) => Type(
                                $,
                            ),
                        )],
                    }),
                )
            case 'void':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'void',
                        'value': ['nothing', null],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Function_Parameters: t_signatures.Function_Parameters = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => ['group', ['verbose', p_.literal.dictionary(
        {
            "name": p_change_context(
                $['name'],
                ($) => Identifier(
                    $,
                ),
            ),
            "type": p_change_context(
                $['type'],
                ($) => ['optional', p_decide_optional(
                    $,
                    ($): t_out.Value.optional => ['set', Type(
                        $,
                    )],
                    () => ['not set', null],
                )],
            ),
        },
    )]],
)]

export const Expression: t_signatures.Expression = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'array literal':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'array literal',
                        'value': ['list', p_.from.list(
                            $,
                        ).map(
                            ($) => Expression(
                                $,
                            ),
                        )],
                    }),
                )
            case 'arrow function':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'arrow function',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "parameters": p_change_context(
                                    $['parameters'],
                                    ($) => Function_Parameters(
                                        $,
                                    ),
                                ),
                                "return type": p_change_context(
                                    $['return type'],
                                    ($) => ['optional', p_decide_optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Type(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "body": p_change_context(
                                    $['body'],
                                    ($) => ['state', p_decide_state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'block':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'block',
                                                            'value': Block(
                                                                $,
                                                            ),
                                                        }),
                                                    )
                                                case 'expression':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'expression',
                                                            'value': Expression(
                                                                $,
                                                            ),
                                                        }),
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'assignment':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'assignment',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "left": p_change_context(
                                    $['left'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                "right": p_change_context(
                                    $['right'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'call':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'call',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "function selection": p_change_context(
                                    $['function selection'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                "arguments": p_change_context(
                                    $['arguments'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => Expression(
                                            $,
                                        ),
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'compare':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'compare',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "left": p_change_context(
                                    $['left'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                "operator": p_change_context(
                                    $['operator'],
                                    ($) => ['state', p_decide_state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'loosely equal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'loosely equal',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'strictly equal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'strictly equal',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'loosely not equal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'loosely not equal',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'strictly not equal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'strictly not equal',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'smaller than':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'smaller than',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'smaller than or equal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'smaller than or equal',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'greater than':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'greater than',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'greater than or equal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'greater than or equal',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                ),
                                "right": p_change_context(
                                    $['right'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'conditional':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'conditional',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "condition": p_change_context(
                                    $['condition'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                "if true": p_change_context(
                                    $['if true'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                "if false": p_change_context(
                                    $['if false'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'element access':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'element access',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "collection": p_change_context(
                                    $['collection'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                "index": p_change_context(
                                    $['index'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'identifier':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'identifier',
                        'value': Identifier(
                            $,
                        ),
                    }),
                )
            case 'false':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'false',
                        'value': ['nothing', null],
                    }),
                )
            case 'null':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'null',
                        'value': ['nothing', null],
                    }),
                )
            case 'number literal':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'number literal',
                        'value': ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.scientific_notation(
                                $,
                                {
                                    'digits': 10,
                                },
                            ),
                        }],
                    }),
                )
            case 'object literal':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'object literal',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "properties": p_change_context(
                                    $['properties'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "key": p_change_context(
                                                    $['key'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'identifier':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'identifier',
                                                                            'value': Identifier(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                case 'string literal':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'string literal',
                                                                            'value': String_Literal(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                default:
                                                                    return p_.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                ),
                                                "value": p_change_context(
                                                    $['value'],
                                                    ($) => Expression(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'parenthesized':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'parenthesized',
                        'value': Expression(
                            $,
                        ),
                    }),
                )
            case 'property access':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'property access',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "object": p_change_context(
                                    $['object'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                                "property": p_change_context(
                                    $['property'],
                                    ($) => Identifier(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'string literal':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'string literal',
                        'value': String_Literal(
                            $,
                        ),
                    }),
                )
            case 'true':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'true',
                        'value': ['nothing', null],
                    }),
                )
            case 'unary operation':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'unary operation',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "operator": p_change_context(
                                    $['operator'],
                                    ($) => ['state', p_decide_state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'negation':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'negation',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'logical not':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'logical not',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                ),
                                "operand": p_change_context(
                                    $['operand'],
                                    ($) => Expression(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const String_Literal: t_signatures.String_Literal = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "delimiter": p_change_context(
            $['delimiter'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'quote':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'quote',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'apostrophe':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'apostrophe',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "value": p_change_context(
            $['value'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]

export const Identifier: t_signatures.Identifier = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "value": p_change_context(
            $['value'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]
