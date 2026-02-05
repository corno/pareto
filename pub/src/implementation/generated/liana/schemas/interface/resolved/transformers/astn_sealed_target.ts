    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import _p_text_from_list from "pareto-core/dist/_p_text_from_list"
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
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
            'imports': _p_change_context(
                $['imports'],
                ($) => Imports(
                    $,
                ),
            ),
            'content': _p_change_context(
                $['content'],
                ($) => ['state', _p.decide.state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'data modules':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'data modules',
                                        'value': ['dictionary', _p.dictionary.map(
                                            $,
                                            ($, id) => Value(
                                                $,
                                            ),
                                        )],
                                    }),
                                )
                            case 'functions':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'functions',
                                        'value': ['dictionary', _p.dictionary.map(
                                            $,
                                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    'result': _p_change_context(
                                                        $['result'],
                                                        ($) => Value(
                                                            $,
                                                        ),
                                                    ),
                                                    'context': _p_change_context(
                                                        $['context'],
                                                        ($) => Value(
                                                            $,
                                                        ),
                                                    ),
                                                    'type': _p_change_context(
                                                        $['type'],
                                                        ($) => ['state', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.state => {
                                                                switch ($[0]) {
                                                                    case 'transformer':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'transformer',
                                                                                'value': ['nothing', null],
                                                                            }),
                                                                        )
                                                                    case 'refiner':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'refiner',
                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                    {
                                                                                        'error': _p_change_context(
                                                                                            $['error'],
                                                                                            ($) => ['optional', _p.decide.optional(
                                                                                                $,
                                                                                                ($): t_out.Value.optional => ['set', Value(
                                                                                                    $,
                                                                                                )],
                                                                                                () => ['not set', null],
                                                                                            )],
                                                                                        ),
                                                                                        'lookups': _p_change_context(
                                                                                            $['lookups'],
                                                                                            ($) => ['optional', _p.decide.optional(
                                                                                                $,
                                                                                                ($): t_out.Value.optional => ['set', ['dictionary', _p.dictionary.map(
                                                                                                    $,
                                                                                                    ($, id) => ['state', _p.decide.state(
                                                                                                        $,
                                                                                                        ($): t_out.Value.state => {
                                                                                                            switch ($[0]) {
                                                                                                                case 'acyclic':
                                                                                                                    return _p.ss(
                                                                                                                        $,
                                                                                                                        ($) => ({
                                                                                                                            'option': 'acyclic',
                                                                                                                            'value': Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'cyclic':
                                                                                                                    return _p.ss(
                                                                                                                        $,
                                                                                                                        ($) => ({
                                                                                                                            'option': 'cyclic',
                                                                                                                            'value': Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'stack':
                                                                                                                    return _p.ss(
                                                                                                                        $,
                                                                                                                        ($) => ({
                                                                                                                            'option': 'stack',
                                                                                                                            'value': Value(
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
                                                                                                )]],
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
                                                    'parameters': _p_change_context(
                                                        $['parameters'],
                                                        ($) => ['optional', _p.decide.optional(
                                                            $,
                                                            ($): t_out.Value.optional => ['set', ['dictionary', _p.dictionary.map(
                                                                $,
                                                                ($, id) => Value(
                                                                    $,
                                                                ),
                                                            )]],
                                                            () => ['not set', null],
                                                        )],
                                                    ),
                                                },
                                            )]],
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
            ),
        },
    )]]
    
    export const Imports: t_signatures.Imports = ($) => ['dictionary', _p.dictionary.map(
        $,
        ($, id) => ['group', ['verbose', _p.dictionary.literal(
            {
                'type': _p_change_context(
                    $['type'],
                    ($) => ['state', _p.decide.state(
                        $,
                        ($): t_out.Value.state => {
                            switch ($[0]) {
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
                                case 'ancestor':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'ancestor',
                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    'number of steps': _p_change_context(
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
                                                    'dependency': _p_change_context(
                                                        $['dependency'],
                                                        ($) => ['text', {
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        }],
                                                    ),
                                                },
                                            )]],
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
                'tail': _p_change_context(
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
    )]
    
    export const Value: t_signatures.Value = ($) => ['state', _p.decide.state(
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
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'component',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'location': _p_change_context(
                                        $['location'],
                                        ($) => Module_Reference(
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
                            'value': Value(
                                $,
                            ),
                        }),
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'group',
                            'value': ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => Value(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'list',
                            'value': Value(
                                $,
                            ),
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
                                        case 'exact':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'exact',
                                                    'value': ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'natural':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'natural',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'integer':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'integer',
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
                                        case 'approximation':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'approximation',
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
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'optional',
                            'value': Value(
                                $,
                            ),
                        }),
                    )
                case 'reference':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'reference',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'location': _p_change_context(
                                        $['location'],
                                        ($) => Module_Reference(
                                            $,
                                        ),
                                    ),
                                    'sub selection': _p_change_context(
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
                                    'cyclic': _p_change_context(
                                        $['cyclic'],
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
                        }),
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'state',
                            'value': ['dictionary', _p.dictionary.map(
                                $,
                                ($, id) => Value(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'text',
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
    
    export const Module_Reference: t_signatures.Module_Reference = ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'import':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'import',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'import': _p_change_context(
                                        $['import'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                    'type': _p_change_context(
                                        $['type'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        }),
                    )
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
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )]
