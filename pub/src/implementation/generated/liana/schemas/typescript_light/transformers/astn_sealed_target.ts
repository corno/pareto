    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/typescript_light/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
    export const Directory: t_signatures.Directory = ($) => ['dictionary', _p.dictionary.map(
        $,
        ($, id) => ['state', _p.decide.state(
            $,
            ($): t_out.Value.state => {
                switch ($[0]) {
                    case 'file':
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'file',
                                'value': ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "statements": _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'directory',
                                'value': Directory(
                                    $,
                                ),
                            }),
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        )],
    )]
    
    export const Block: t_signatures.Block = ($) => Statements(
        $,
    )
    
    export const Statements: t_signatures.Statements = ($) => ['list', _p.list.map(
        $,
        ($) => ['state', _p.decide.state(
            $,
            ($): t_out.Value.state => {
                switch ($[0]) {
                    case 'block':
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'block',
                                'value': Block(
                                    $,
                                ),
                            }),
                        )
                    case 'export':
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'export',
                                'value': ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "type": _p_change_context(
                                            $['type'],
                                            ($) => ['state', _p.decide.state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'named exports':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'named exports',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "specifiers": _p_change_context(
                                                                                $['specifiers'],
                                                                                ($) => ['list', _p.list.map(
                                                                                    $,
                                                                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            "name": _p_change_context(
                                                                                                $['name'],
                                                                                                ($) => Identifier(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            "as": _p_change_context(
                                                                                                $['as'],
                                                                                                ($) => ['optional', _p.decide.optional(
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
                                                                            "from": _p_change_context(
                                                                                $['from'],
                                                                                ($) => ['optional', _p.decide.optional(
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
                                                            return _p.au(
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
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'expression',
                                'value': Expression(
                                    $,
                                ),
                            }),
                        )
                    case 'import':
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'import',
                                'value': ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "type": _p_change_context(
                                            $['type'],
                                            ($) => ['state', _p.decide.state(
                                                $,
                                                ($): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'default':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'default',
                                                                    'value': Identifier(
                                                                        $,
                                                                    ),
                                                                }),
                                                            )
                                                        case 'namespace':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'namespace',
                                                                    'value': Identifier(
                                                                        $,
                                                                    ),
                                                                }),
                                                            )
                                                        case 'named':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ({
                                                                    'option': 'named',
                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                        {
                                                                            "specifiers": _p_change_context(
                                                                                $['specifiers'],
                                                                                ($) => ['list', _p.list.map(
                                                                                    $,
                                                                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            "name": _p_change_context(
                                                                                                $['name'],
                                                                                                ($) => Identifier(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            "as": _p_change_context(
                                                                                                $['as'],
                                                                                                ($) => ['optional', _p.decide.optional(
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
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            )],
                                        ),
                                        "from": _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'module declaration',
                                'value': ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "export": _p_change_context(
                                            $['export'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': _p_text_from_list(
                                                    v_serialize_boolean.serialize(
                                                        $,
                                                    ),
                                                    ($) => $,
                                                ),
                                            }],
                                        ),
                                        "name": _p_change_context(
                                            $['name'],
                                            ($) => Identifier(
                                                $,
                                            ),
                                        ),
                                        "block": _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'return',
                                'value': ['optional', _p.decide.optional(
                                    $,
                                    ($): t_out.Value.optional => ['set', Expression(
                                        $,
                                    )],
                                    () => ['not set', null],
                                )],
                            }),
                        )
                    case 'switch':
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'switch',
                                'value': ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "expression": _p_change_context(
                                            $['expression'],
                                            ($) => Expression(
                                                $,
                                            ),
                                        ),
                                        "clauses": _p_change_context(
                                            $['clauses'],
                                            ($) => ['list', _p.list.map(
                                                $,
                                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        "type": _p_change_context(
                                                            $['type'],
                                                            ($) => ['state', _p.decide.state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'case':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'case',
                                                                                    'value': Expression(
                                                                                        $,
                                                                                    ),
                                                                                }),
                                                                            )
                                                                        case 'default':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'default',
                                                                                    'value': ['nothing', null],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        ),
                                                        "statements": _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'type alias declaration',
                                'value': ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "export": _p_change_context(
                                            $['export'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': _p_text_from_list(
                                                    v_serialize_boolean.serialize(
                                                        $,
                                                    ),
                                                    ($) => $,
                                                ),
                                            }],
                                        ),
                                        "name": _p_change_context(
                                            $['name'],
                                            ($) => Identifier(
                                                $,
                                            ),
                                        ),
                                        "parameters": _p_change_context(
                                            $['parameters'],
                                            ($) => ['list', _p.list.map(
                                                $,
                                                ($) => Identifier(
                                                    $,
                                                ),
                                            )],
                                        ),
                                        "type": _p_change_context(
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
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'variable',
                                'value': ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "export": _p_change_context(
                                            $['export'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': _p_text_from_list(
                                                    v_serialize_boolean.serialize(
                                                        $,
                                                    ),
                                                    ($) => $,
                                                ),
                                            }],
                                        ),
                                        "const": _p_change_context(
                                            $['const'],
                                            ($) => ['text', {
                                                'delimiter': ['none', null],
                                                'value': _p_text_from_list(
                                                    v_serialize_boolean.serialize(
                                                        $,
                                                    ),
                                                    ($) => $,
                                                ),
                                            }],
                                        ),
                                        "name": _p_change_context(
                                            $['name'],
                                            ($) => Identifier(
                                                $,
                                            ),
                                        ),
                                        "type": _p_change_context(
                                            $['type'],
                                            ($) => ['optional', _p.decide.optional(
                                                $,
                                                ($): t_out.Value.optional => ['set', Type(
                                                    $,
                                                )],
                                                () => ['not set', null],
                                            )],
                                        ),
                                        "expression": _p_change_context(
                                            $['expression'],
                                            ($) => ['optional', _p.decide.optional(
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
                        return _p.au(
                            $[0],
                        )
                }
            },
        )],
    )]
    
    export const Type: t_signatures.Type = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'boolean':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'boolean',
                            'value': ['nothing', null],
                        }),
                    )
                case 'function':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'function',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "type parameters": _p_change_context(
                                        $['type parameters'],
                                        ($) => ['list', _p.list.map(
                                            $,
                                            ($) => Type(
                                                $,
                                            ),
                                        )],
                                    ),
                                    "parameters": _p_change_context(
                                        $['parameters'],
                                        ($) => Function_Parameters(
                                            $,
                                        ),
                                    ),
                                    "return": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'literal type',
                            'value': String_Literal(
                                $,
                            ),
                        }),
                    )
                case 'never':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'never',
                            'value': ['nothing', null],
                        }),
                    )
                case 'null':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'null',
                            'value': ['nothing', null],
                        }),
                    )
                case 'number':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'number',
                            'value': ['nothing', null],
                        }),
                    )
                case 'string':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'string',
                            'value': ['nothing', null],
                        }),
                    )
                case 'tuple':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'tuple',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "readonly": _p_change_context(
                                        $['readonly'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': _p_text_from_list(
                                                v_serialize_boolean.serialize(
                                                    $,
                                                ),
                                                ($) => $,
                                            ),
                                        }],
                                    ),
                                    "elements": _p_change_context(
                                        $['elements'],
                                        ($) => ['list', _p.list.map(
                                            $,
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'type literal',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "properties": _p_change_context(
                                        $['properties'],
                                        ($) => ['list', _p.list.map(
                                            $,
                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    "key": _p_change_context(
                                                        $['key'],
                                                        ($) => ['state', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.state => {
                                                                switch ($[0]) {
                                                                    case 'identifier':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'identifier',
                                                                                'value': Identifier(
                                                                                    $,
                                                                                ),
                                                                            }),
                                                                        )
                                                                    case 'string literal':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'string literal',
                                                                                'value': String_Literal(
                                                                                    $,
                                                                                ),
                                                                            }),
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        )],
                                                    ),
                                                    "readonly": _p_change_context(
                                                        $['readonly'],
                                                        ($) => ['text', {
                                                            'delimiter': ['none', null],
                                                            'value': _p_text_from_list(
                                                                v_serialize_boolean.serialize(
                                                                    $,
                                                                ),
                                                                ($) => $,
                                                            ),
                                                        }],
                                                    ),
                                                    "type": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'type reference',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "start": _p_change_context(
                                        $['start'],
                                        ($) => Identifier(
                                            $,
                                        ),
                                    ),
                                    "tail": _p_change_context(
                                        $['tail'],
                                        ($) => ['list', _p.list.map(
                                            $,
                                            ($) => Identifier(
                                                $,
                                            ),
                                        )],
                                    ),
                                    "type arguments": _p_change_context(
                                        $['type arguments'],
                                        ($) => ['list', _p.list.map(
                                            $,
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'union',
                            'value': ['list', _p.list.map(
                                $,
                                ($) => Type(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'void':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'void',
                            'value': ['nothing', null],
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
    
    export const Function_Parameters: t_signatures.Function_Parameters = ($) => ['list', _p.list.map(
        $,
        ($) => ['group', ['verbose', _p.dictionary.literal(
            {
                "name": _p_change_context(
                    $['name'],
                    ($) => Identifier(
                        $,
                    ),
                ),
                "type": _p_change_context(
                    $['type'],
                    ($) => ['optional', _p.decide.optional(
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
    
    export const Expression: t_signatures.Expression = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'array literal':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'array literal',
                            'value': ['list', _p.list.map(
                                $,
                                ($) => Expression(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'arrow function':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'arrow function',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "parameters": _p_change_context(
                                        $['parameters'],
                                        ($) => Function_Parameters(
                                            $,
                                        ),
                                    ),
                                    "return type": _p_change_context(
                                        $['return type'],
                                        ($) => ['optional', _p.decide.optional(
                                            $,
                                            ($): t_out.Value.optional => ['set', Type(
                                                $,
                                            )],
                                            () => ['not set', null],
                                        )],
                                    ),
                                    "body": _p_change_context(
                                        $['body'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'block':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'block',
                                                                'value': Block(
                                                                    $,
                                                                ),
                                                            }),
                                                        )
                                                    case 'expression':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'expression',
                                                                'value': Expression(
                                                                    $,
                                                                ),
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'assignment',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "left": _p_change_context(
                                        $['left'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "right": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'call',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "function selection": _p_change_context(
                                        $['function selection'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "arguments": _p_change_context(
                                        $['arguments'],
                                        ($) => ['list', _p.list.map(
                                            $,
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'compare',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "left": _p_change_context(
                                        $['left'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "operator": _p_change_context(
                                        $['operator'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'loosely equal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'loosely equal',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'strictly equal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'strictly equal',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'loosely not equal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'loosely not equal',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'strictly not equal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'strictly not equal',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'smaller than':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'smaller than',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'smaller than or equal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'smaller than or equal',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'greater than':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'greater than',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'greater than or equal':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'greater than or equal',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                    "right": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'conditional',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "condition": _p_change_context(
                                        $['condition'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "if true": _p_change_context(
                                        $['if true'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "if false": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'element access',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "collection": _p_change_context(
                                        $['collection'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "index": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'identifier',
                            'value': Identifier(
                                $,
                            ),
                        }),
                    )
                case 'false':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'false',
                            'value': ['nothing', null],
                        }),
                    )
                case 'null':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'null',
                            'value': ['nothing', null],
                        }),
                    )
                case 'number literal':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'number literal',
                            'value': ['text', {
                                'delimiter': ['none', null],
                                'value': _p_text_from_list(
                                    v_serialize_number.serialize(
                                        $,
                                    ),
                                    ($) => $,
                                ),
                            }],
                        }),
                    )
                case 'object literal':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'object literal',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "properties": _p_change_context(
                                        $['properties'],
                                        ($) => ['list', _p.list.map(
                                            $,
                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    "key": _p_change_context(
                                                        $['key'],
                                                        ($) => ['state', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.state => {
                                                                switch ($[0]) {
                                                                    case 'identifier':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'identifier',
                                                                                'value': Identifier(
                                                                                    $,
                                                                                ),
                                                                            }),
                                                                        )
                                                                    case 'string literal':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'string literal',
                                                                                'value': String_Literal(
                                                                                    $,
                                                                                ),
                                                                            }),
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        )],
                                                    ),
                                                    "value": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'parenthesized',
                            'value': Expression(
                                $,
                            ),
                        }),
                    )
                case 'property access':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'property access',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "object": _p_change_context(
                                        $['object'],
                                        ($) => Expression(
                                            $,
                                        ),
                                    ),
                                    "property": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'string literal',
                            'value': String_Literal(
                                $,
                            ),
                        }),
                    )
                case 'true':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'true',
                            'value': ['nothing', null],
                        }),
                    )
                case 'unary operation':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'unary operation',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "operator": _p_change_context(
                                        $['operator'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'negation':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'negation',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'logical not':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'logical not',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                    "operand": _p_change_context(
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
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
    
    export const String_Literal: t_signatures.String_Literal = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "delimiter": _p_change_context(
                $['delimiter'],
                ($) => ['state', _p.decide.state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'quote':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'quote',
                                        'value': ['nothing', null],
                                    }),
                                )
                            case 'apostrophe':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'apostrophe',
                                        'value': ['nothing', null],
                                    }),
                                )
                            default:
                                return _p.au(
                                    $[0],
                                )
                        }
                    },
                )],
            ),
            "value": _p_change_context(
                $['value'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]
    
    export const Identifier: t_signatures.Identifier = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "value": _p_change_context(
                $['value'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]
