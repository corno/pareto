    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
    import * as v_external_interface from "../../../interface/resolved/transformers/astn_sealed_target"
    
    export const Package_Set: t_signatures.Package_Set = ($) => ['dictionary', _p.dictionary.map(
        $,
        ($, id) => ['state', _p.decide.state(
            $,
            ($): t_out.Value.state => {
                switch ($[0]) {
                    case 'package':
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'package',
                                'value': Package(
                                    $,
                                ),
                            }),
                        )
                    case 'set':
                        return _p.ss(
                            $,
                            ($) => ({
                                'option': 'set',
                                'value': Package_Set(
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
    
    export const Package: t_signatures.Package = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "specials": _p_change_context(
                $['specials'],
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "abort": _p_change_context(
                            $['abort'],
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
                        "change context": _p_change_context(
                            $['change context'],
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
                        "implement me": _p_change_context(
                            $['implement me'],
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
                        "iterate": _p_change_context(
                            $['iterate'],
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
                        "lookups": _p_change_context(
                            $['lookups'],
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
                        "list from text": _p_change_context(
                            $['list from text'],
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
                        "text from list": _p_change_context(
                            $['text from list'],
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
                        "unreachable code path": _p_change_context(
                            $['unreachable code path'],
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
                        "variables": _p_change_context(
                            $['variables'],
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
                    },
                )]],
            ),
            "type imports": _p_change_context(
                $['type imports'],
                ($) => v_external_interface.Imports(
                    $,
                ),
            ),
            "variable imports": _p_change_context(
                $['variable imports'],
                ($) => ['dictionary', _p.dictionary.map(
                    $,
                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            "tail": _p_change_context(
                                $['tail'],
                                ($) => ['list', _p.list.map(
                                    $,
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                )],
                            ),
                            "type": _p_change_context(
                                $['type'],
                                ($) => ['state', _p.decide.state(
                                    $,
                                    ($): t_out.Value.state => {
                                        switch ($[0]) {
                                            case 'ancestor':
                                                return _p.ss(
                                                    $,
                                                    ($) => ({
                                                        'option': 'ancestor',
                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                            {
                                                                "dependency": _p_change_context(
                                                                    $['dependency'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['quote', null],
                                                                        'value': $,
                                                                    }],
                                                                ),
                                                                "number of steps": _p_change_context(
                                                                    $['number of steps'],
                                                                    ($) => ['text', {
                                                                        'delimiter': ['none', null],
                                                                        'value': _p_text_from_list(
                                                                            v_serialize_number.serialize(
                                                                                $,
                                                                            ),
                                                                            ($) => $,
                                                                        ),
                                                                    }],
                                                                ),
                                                            },
                                                        )]],
                                                    }),
                                                )
                                            case 'external':
                                                return _p.ss(
                                                    $,
                                                    ($) => ({
                                                        'option': 'external',
                                                        'value': ['text', {
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        }],
                                                    }),
                                                )
                                            case 'sibling':
                                                return _p.ss(
                                                    $,
                                                    ($) => ({
                                                        'option': 'sibling',
                                                        'value': ['text', {
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        }],
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
                )],
            ),
            "functions": _p_change_context(
                $['functions'],
                ($) => ['dictionary', _p.dictionary.map(
                    $,
                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            "type": _p_change_context(
                                $['type'],
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        "import": _p_change_context(
                                            $['import'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                        "type": _p_change_context(
                                            $['type'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        ),
                                    },
                                )]],
                            ),
                            "expression": _p_change_context(
                                $['expression'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            "temp has abort": _p_change_context(
                                $['temp has abort'],
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
                            "temp has lookups": _p_change_context(
                                $['temp has lookups'],
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
                            "temp has parameters": _p_change_context(
                                $['temp has parameters'],
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
                        },
                    )]],
                )],
            ),
        },
    )]]
    
    export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "type": _p_change_context(
                $['type'],
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "import": _p_change_context(
                            $['import'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "type": _p_change_context(
                            $['type'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                    },
                )]],
            ),
            "sub selection": _p_change_context(
                $['sub selection'],
                ($) => ['list', _p.list.map(
                    $,
                    ($) => ['state', _p.decide.state(
                        $,
                        ($): t_out.Value.state => {
                            switch ($[0]) {
                                case 'dictionary':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'dictionary',
                                            'value': ['nothing', null],
                                        }),
                                    )
                                case 'group':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'group',
                                            'value': ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        }),
                                    )
                                case 'list':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'list',
                                            'value': ['nothing', null],
                                        }),
                                    )
                                case 'optional':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'optional',
                                            'value': ['nothing', null],
                                        }),
                                    )
                                case 'state':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'state',
                                            'value': ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
                                        }),
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                )],
            ),
        },
    )]]
    
    export const Expression: t_signatures.Expression = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'decide':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'decide',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "type": _p_change_context(
                                        $['type'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'boolean':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'boolean',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "source": _p_change_context(
                                                                            $['source'],
                                                                            ($) => Value_Selection(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "temp resulting node": _p_change_context(
                                                                            $['temp resulting node'],
                                                                            ($) => ['optional', _p.decide.optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                    $,
                                                                                )],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                        "if false": _p_change_context(
                                                                            $['if false'],
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
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'dictionary':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'dictionary',
                                                                'value': ['state', _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Value.state => {
                                                                        switch ($[0]) {
                                                                            case 'has entries':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ({
                                                                                        'option': 'has entries',
                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                            {
                                                                                                "dictionary": _p_change_context(
                                                                                                    $['dictionary'],
                                                                                                    ($) => Value_Selection(
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
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )],
                                                            }),
                                                        )
                                                    case 'list':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'list',
                                                                'value': ['state', _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Value.state => {
                                                                        switch ($[0]) {
                                                                            case 'has first item':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ({
                                                                                        'option': 'has first item',
                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                            {
                                                                                                "list": _p_change_context(
                                                                                                    $['list'],
                                                                                                    ($) => Value_Selection(
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
                                                                            case 'has last item':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ({
                                                                                        'option': 'has last item',
                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                            {
                                                                                                "list": _p_change_context(
                                                                                                    $['list'],
                                                                                                    ($) => Value_Selection(
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
                                                                            case 'has items':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ({
                                                                                        'option': 'has items',
                                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                            {
                                                                                                "list": _p_change_context(
                                                                                                    $['list'],
                                                                                                    ($) => Value_Selection(
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
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )],
                                                            }),
                                                        )
                                                    case 'optional':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'optional',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "source": _p_change_context(
                                                                            $['source'],
                                                                            ($) => Value_Selection(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "temp resulting node": _p_change_context(
                                                                            $['temp resulting node'],
                                                                            ($) => ['optional', _p.decide.optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                    $,
                                                                                )],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                        "if not set": _p_change_context(
                                                                            $['if not set'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "if set": _p_change_context(
                                                                            $['if set'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'state':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'state',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "source": _p_change_context(
                                                                            $['source'],
                                                                            ($) => Value_Selection(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "temp resulting node": _p_change_context(
                                                                            $['temp resulting node'],
                                                                            ($) => ['optional', _p.decide.optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                    $,
                                                                                )],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                        "type": _p_change_context(
                                                                            $['type'],
                                                                            ($) => ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'partial':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'partial',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "options": _p_change_context(
                                                                                                                $['options'],
                                                                                                                ($) => ['dictionary', _p.dictionary.map(
                                                                                                                    $,
                                                                                                                    ($, id) => Expression(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                )],
                                                                                                            ),
                                                                                                            "default": _p_change_context(
                                                                                                                $['default'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        case 'full':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'full',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "options": _p_change_context(
                                                                                                                $['options'],
                                                                                                                ($) => ['dictionary', _p.dictionary.map(
                                                                                                                    $,
                                                                                                                    ($, id) => Expression(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                )],
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        case 'single':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'single',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "option": _p_change_context(
                                                                                                                $['option'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['quote', null],
                                                                                                                    'value': $,
                                                                                                                }],
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
                                                    case 'text':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'text',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "source": _p_change_context(
                                                                            $['source'],
                                                                            ($) => Value_Selection(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "temp resulting node": _p_change_context(
                                                                            $['temp resulting node'],
                                                                            ($) => ['optional', _p.decide.optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                    $,
                                                                                )],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                        "cases": _p_change_context(
                                                                            $['cases'],
                                                                            ($) => ['dictionary', _p.dictionary.map(
                                                                                $,
                                                                                ($, id) => Expression(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        ),
                                                                        "default": _p_change_context(
                                                                            $['default'],
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
                                        )],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'assign':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'assign',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'boolean':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'boolean',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'literal',
                                                                            'value': ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'false':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'false',
                                                                                                    'value': ['nothing', null],
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
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'not':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'not',
                                                                            'value': Value_Selection(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                case 'copy':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'copy',
                                                                            'value': Value_Selection(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                case 'dictionary is empty':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'dictionary is empty',
                                                                            'value': Value_Selection(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                case 'list is empty':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'list is empty',
                                                                            'value': Value_Selection(
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
                                                }),
                                            )
                                        case 'dictionary':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'dictionary',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'filter':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'filter',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "entry handler": _p_change_context(
                                                                                        $['entry handler'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'from list':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'from list',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "get id": _p_change_context(
                                                                                        $['get id'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "get entry": _p_change_context(
                                                                                        $['get entry'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "abort": _p_change_context(
                                                                                        $['abort'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'literal',
                                                                            'value': ['dictionary', _p.dictionary.map(
                                                                                $,
                                                                                ($, id) => Expression(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'map':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'map',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "entry handler": _p_change_context(
                                                                                        $['entry handler'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'resolve':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'resolve',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "entry handler": _p_change_context(
                                                                                        $['entry handler'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "temp resulting entry node": _p_change_context(
                                                                                        $['temp resulting entry node'],
                                                                                        ($) => Temp_Value_Type_Specification(
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
                                                    )],
                                                }),
                                            )
                                        case 'group':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'group',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'literal',
                                                                            'value': ['dictionary', _p.dictionary.map(
                                                                                $,
                                                                                ($, id) => Expression(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'resolve':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'resolve',
                                                                            'value': ['dictionary', _p.dictionary.map(
                                                                                $,
                                                                                ($, id) => Expression(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                }),
                                            )
                                        case 'list':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'list',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'filter':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'filter',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "entry handler": _p_change_context(
                                                                                        $['entry handler'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'from dictionary':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'from dictionary',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "get item": _p_change_context(
                                                                                        $['get item'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'literal',
                                                                            'value': ['list', _p.list.map(
                                                                                $,
                                                                                ($) => Expression(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'map':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'map',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "item handler": _p_change_context(
                                                                                        $['item handler'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'map with state':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'map with state',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "initial state": _p_change_context(
                                                                                        $['initial state'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "item handler": _p_change_context(
                                                                                        $['item handler'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "update state": _p_change_context(
                                                                                        $['update state'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "wrap up": _p_change_context(
                                                                                        $['wrap up'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'reduce':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'reduce',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "initial state": _p_change_context(
                                                                                        $['initial state'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "item handler": _p_change_context(
                                                                                        $['item handler'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'reverse':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'reverse',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
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
                                                    )],
                                                }),
                                            )
                                        case 'nothing':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'nothing',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'number':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'number',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'approximation':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'approximation',
                                                                            'value': ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'literal',
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
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'copy',
                                                                                                    'value': Value_Selection(
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
                                                                        }),
                                                                    )
                                                                case 'integer':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'integer',
                                                                            'value': ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'copy',
                                                                                                    'value': Value_Selection(
                                                                                                        $,
                                                                                                    ),
                                                                                                }),
                                                                                            )
                                                                                        case 'divide':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'divide',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "divident": _p_change_context(
                                                                                                                $['divident'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            "divisor": _p_change_context(
                                                                                                                $['divisor'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                            "abort": _p_change_context(
                                                                                                                $['abort'],
                                                                                                                ($) => Expression(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'literal',
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
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'natural':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'natural',
                                                                            'value': ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'literal',
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
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'copy',
                                                                                                    'value': Value_Selection(
                                                                                                        $,
                                                                                                    ),
                                                                                                }),
                                                                                            )
                                                                                        case 'number of dictionary entries':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'number of dictionary entries',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "dictionary": _p_change_context(
                                                                                                                $['dictionary'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        case 'number of list items':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'number of list items',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "list": _p_change_context(
                                                                                                                $['list'],
                                                                                                                ($) => Value_Selection(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        case 'source column':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'source column',
                                                                                                    'value': ['nothing', null],
                                                                                                }),
                                                                                            )
                                                                                        case 'source line':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'source line',
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
                                                                        }),
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                }),
                                            )
                                        case 'optional':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'optional',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'from boolean':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'from boolean',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "get set": _p_change_context(
                                                                                        $['get set'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'literal',
                                                                            'value': ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'not set':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'not set',
                                                                                                    'value': ['nothing', null],
                                                                                                }),
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'set',
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
                                                                        }),
                                                                    )
                                                                case 'map':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'map',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "source": _p_change_context(
                                                                                        $['source'],
                                                                                        ($) => Value_Selection(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "set handler": _p_change_context(
                                                                                        $['set handler'],
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
                                                    )],
                                                }),
                                            )
                                        case 'state':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'state',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'literal',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "option": _p_change_context(
                                                                                        $['option'],
                                                                                        ($) => ['text', {
                                                                                            'delimiter': ['quote', null],
                                                                                            'value': $,
                                                                                        }],
                                                                                    ),
                                                                                    "value": _p_change_context(
                                                                                        $['value'],
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
                                                    )],
                                                }),
                                            )
                                        case 'text':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'text',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'copy':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'copy',
                                                                            'value': Value_Selection(
                                                                                $,
                                                                            ),
                                                                        }),
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'literal',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "type": _p_change_context(
                                                                                        $['type'],
                                                                                        ($) => ['state', _p.decide.state(
                                                                                            $,
                                                                                            ($): t_out.Value.state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'identifier':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ({
                                                                                                                'option': 'identifier',
                                                                                                                'value': ['nothing', null],
                                                                                                            }),
                                                                                                        )
                                                                                                    case 'freeform':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ({
                                                                                                                'option': 'freeform',
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
                                                                            )]],
                                                                        }),
                                                                    )
                                                                case 'source document':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'source document',
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
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        }),
                    )
                case 'select':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'select',
                            'value': Value_Selection(
                                $,
                            ),
                        }),
                    )
                case 'special':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'special',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'abort':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'abort',
                                                    'value': Expression(
                                                        $,
                                                    ),
                                                }),
                                            )
                                        case 'assert':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'assert',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "tester": _p_change_context(
                                                                $['tester'],
                                                                ($) => Expression(
                                                                    $,
                                                                ),
                                                            ),
                                                            "normal flow": _p_change_context(
                                                                $['normal flow'],
                                                                ($) => Expression(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'change context':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'change context',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "new context": _p_change_context(
                                                                $['new context'],
                                                                ($) => Value_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                            "expression": _p_change_context(
                                                                $['expression'],
                                                                ($) => Expression(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'variables':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'variables',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "variables": _p_change_context(
                                                                $['variables'],
                                                                ($) => ['dictionary', _p.dictionary.map(
                                                                    $,
                                                                    ($, id) => Expression(
                                                                        $,
                                                                    ),
                                                                )],
                                                            ),
                                                            "callback": _p_change_context(
                                                                $['callback'],
                                                                ($) => Expression(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'implement me':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'implement me',
                                                    'value': ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                }),
                                            )
                                        case 'iterate':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'iterate',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "list": _p_change_context(
                                                                $['list'],
                                                                ($) => Value_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                            "handler": _p_change_context(
                                                                $['handler'],
                                                                ($) => Expression(
                                                                    $,
                                                                ),
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
                                        case 'unreachable':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'unreachable',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "explanation": _p_change_context(
                                                                $['explanation'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
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
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
    
    export const Value_Selection: t_signatures.Value_Selection = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'implement me':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'implement me',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'regular':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'regular',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "start": _p_change_context(
                                        $['start'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'call':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'call',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "source": _p_change_context(
                                                                            $['source'],
                                                                            ($) => ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'local':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'local',
                                                                                                    'value': ['text', {
                                                                                                        'delimiter': ['quote', null],
                                                                                                        'value': $,
                                                                                                    }],
                                                                                                }),
                                                                                            )
                                                                                        case 'imported':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'imported',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "import": _p_change_context(
                                                                                                                $['import'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['quote', null],
                                                                                                                    'value': $,
                                                                                                                }],
                                                                                                            ),
                                                                                                            "variable": _p_change_context(
                                                                                                                $['variable'],
                                                                                                                ($) => ['text', {
                                                                                                                    'delimiter': ['quote', null],
                                                                                                                    'value': $,
                                                                                                                }],
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
                                                                        "context": _p_change_context(
                                                                            $['context'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "abort": _p_change_context(
                                                                            $['abort'],
                                                                            ($) => ['optional', _p.decide.optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', Expression(
                                                                                    $,
                                                                                )],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                        "lookups": _p_change_context(
                                                                            $['lookups'],
                                                                            ($) => ['optional', _p.decide.optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', ['state', _p.decide.state(
                                                                                    $,
                                                                                    ($): t_out.Value.state => {
                                                                                        switch ($[0]) {
                                                                                            case 'initialize':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ({
                                                                                                        'option': 'initialize',
                                                                                                        'value': ['dictionary', _p.dictionary.map(
                                                                                                            $,
                                                                                                            ($, id) => Lookup_Selection(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
                                                                                                )
                                                                                            case 'pass through':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ({
                                                                                                        'option': 'pass through',
                                                                                                        'value': ['nothing', null],
                                                                                                    }),
                                                                                                )
                                                                                            default:
                                                                                                return _p.au(
                                                                                                    $[0],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )]],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                        "arguments": _p_change_context(
                                                                            $['arguments'],
                                                                            ($) => ['optional', _p.decide.optional(
                                                                                $,
                                                                                ($): t_out.Value.optional => ['set', ['state', _p.decide.state(
                                                                                    $,
                                                                                    ($): t_out.Value.state => {
                                                                                        switch ($[0]) {
                                                                                            case 'initialize':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ({
                                                                                                        'option': 'initialize',
                                                                                                        'value': ['dictionary', _p.dictionary.map(
                                                                                                            $,
                                                                                                            ($, id) => Expression(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    }),
                                                                                                )
                                                                                            case 'pass through':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ({
                                                                                                        'option': 'pass through',
                                                                                                        'value': ['nothing', null],
                                                                                                    }),
                                                                                                )
                                                                                            default:
                                                                                                return _p.au(
                                                                                                    $[0],
                                                                                                )
                                                                                        }
                                                                                    },
                                                                                )]],
                                                                                () => ['not set', null],
                                                                            )],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'context':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'context',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'dictionary entry':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'dictionary entry',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "dictionary": _p_change_context(
                                                                            $['dictionary'],
                                                                            ($) => Value_Selection(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "id": _p_change_context(
                                                                            $['id'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "abort handler": _p_change_context(
                                                                            $['abort handler'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'list from text':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'list from text',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "source": _p_change_context(
                                                                            $['source'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "character handler": _p_change_context(
                                                                            $['character handler'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'lookup entry':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'lookup entry',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "lookup": _p_change_context(
                                                                            $['lookup'],
                                                                            ($) => Lookup_Selection(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "id": _p_change_context(
                                                                            $['id'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "abort handlers": _p_change_context(
                                                                            $['abort handlers'],
                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "no such entry": _p_change_context(
                                                                                        $['no such entry'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "no context lookup": _p_change_context(
                                                                                        $['no context lookup'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "cycle detected": _p_change_context(
                                                                                        $['cycle detected'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'lookup entry depth':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'lookup entry depth',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "lookup": _p_change_context(
                                                                            $['lookup'],
                                                                            ($) => Lookup_Selection(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "id": _p_change_context(
                                                                            $['id'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "abort handlers": _p_change_context(
                                                                            $['abort handlers'],
                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "no such entry": _p_change_context(
                                                                                        $['no such entry'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "no context lookup": _p_change_context(
                                                                                        $['no context lookup'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    "cycle detected": _p_change_context(
                                                                                        $['cycle detected'],
                                                                                        ($) => Expression(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'parameter':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'parameter',
                                                                'value': ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
                                                            }),
                                                        )
                                                    case 'parent sibling':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'parent sibling',
                                                                'value': ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
                                                            }),
                                                        )
                                                    case 'sibling':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'sibling',
                                                                'value': ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
                                                            }),
                                                        )
                                                    case 'state':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'state',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'text from list':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'text from list',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "source": _p_change_context(
                                                                            $['source'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        "item handler": _p_change_context(
                                                                            $['item handler'],
                                                                            ($) => Expression(
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
                                                                'value': ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
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
                                    "tail": _p_change_context(
                                        $['tail'],
                                        ($) => ['list', _p.list.map(
                                            $,
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }],
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
    )]
    
    export const Lookup_Selection: t_signatures.Lookup_Selection = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'implement me':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'implement me',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'from parameter':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'from parameter',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'stack':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'stack',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'empty':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'empty',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'push':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'push',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                        {
                                                            "stack": _p_change_context(
                                                                $['stack'],
                                                                ($) => Lookup_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                            "acyclic": _p_change_context(
                                                                $['acyclic'],
                                                                ($) => Lookup_Selection(
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
                            )],
                        }),
                    )
                case 'acyclic':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'acyclic',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'not set':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'not set',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'siblings':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'siblings',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'resolved dictionary':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'resolved dictionary',
                                                    'value': Value_Selection(
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
                        }),
                    )
                case 'cyclic':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'cyclic',
                            'value': ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'not set':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'not set',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'siblings':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'siblings',
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
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
