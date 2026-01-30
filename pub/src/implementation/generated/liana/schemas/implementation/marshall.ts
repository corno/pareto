
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_interface from "../interface/marshall"

export const Module: t_signatures.Module = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'type': _p_cc(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'serializer':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'serializer',
                                    'value': ['nothing', null],
                                })
                            )
                        case 'deserializer':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'deserializer',
                                    'value': ['nothing', null],
                                })
                            )
                        case 'transformer':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'transformer',
                                    'value': ['nothing', null],
                                })
                            )
                        case 'refiner':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'refiner',
                                    'value': ['nothing', null],
                                })
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )]
        ),
        'specials': _p_cc(
            $['specials'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    'abort': _p_cc(
                        $['abort'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_serialize_boolean.serialize(
                                $
                            ),
                        }]
                    ),
                    'change context': _p_cc(
                        $['change context'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_serialize_boolean.serialize(
                                $
                            ),
                        }]
                    ),
                    'implement me': _p_cc(
                        $['implement me'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_serialize_boolean.serialize(
                                $
                            ),
                        }]
                    ),
                    'iterate': _p_cc(
                        $['iterate'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_serialize_boolean.serialize(
                                $
                            ),
                        }]
                    ),
                    'unreachable code path': _p_cc(
                        $['unreachable code path'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_serialize_boolean.serialize(
                                $
                            ),
                        }]
                    ),
                }
            )]]
        ),
        'type imports': _p_cc(
            $['type imports'],
            ($) => v_external_interface.Imports(
                $
            )
        ),
        'variable imports': _p_cc(
            $['variable imports'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'tail': _p_cc(
                            $['tail'],
                            ($) => ['list', _p.list.map(
                                $,
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]
                            )]
                        ),
                        'type': _p_cc(
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
                                                            'dependency': _p_cc(
                                                                $['dependency'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }]
                                                            ),
                                                            'number of steps': _p_cc(
                                                                $['number of steps'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['none', null],
                                                                    'value': v_serialize_number.serialize(
                                                                        $
                                                                    ),
                                                                }]
                                                            ),
                                                        }
                                                    )]],
                                                })
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
                                                })
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
                                                })
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )]
                        ),
                    }
                )]]
            )]
        ),
        'algorithms': _p_cc(
            $['algorithms'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'type': _p_cc(
                            $['type'],
                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'import': _p_cc(
                                        $['import'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                    'type': _p_cc(
                                        $['type'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                }
                            )]]
                        ),
                        'expression': _p_cc(
                            $['expression'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'temp has abort': _p_cc(
                            $['temp has abort'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_boolean.serialize(
                                    $
                                ),
                            }]
                        ),
                        'temp has lookups': _p_cc(
                            $['temp has lookups'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_boolean.serialize(
                                    $
                                ),
                            }]
                        ),
                        'temp has parameters': _p_cc(
                            $['temp has parameters'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_boolean.serialize(
                                    $
                                ),
                            }]
                        ),
                    }
                )]]
            )]
        ),
    }
)]]

export const Module_Set: t_signatures.Module_Set = ($) => ['dictionary', _p.dictionary.map(
    $,
    ($, id) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'module':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'module',
                            'value': Module(
                                $
                            ),
                        })
                    )
                case 'set':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'set',
                            'value': Module_Set(
                                $
                            ),
                        })
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )]
)]

export const Temp_Type_Node_Reference: t_signatures.Temp_Type_Node_Reference = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'type': _p_cc(
            $['type'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    'import': _p_cc(
                        $['import'],
                        ($) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }]
                    ),
                    'type': _p_cc(
                        $['type'],
                        ($) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }]
                    ),
                }
            )]]
        ),
        'sub selection': _p_cc(
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
                                    })
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
                                    })
                                )
                            case 'list':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'list',
                                        'value': ['nothing', null],
                                    })
                                )
                            case 'optional':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'optional',
                                        'value': ['nothing', null],
                                    })
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
                                    })
                                )
                            default:
                                return _p.au(
                                    $[0]
                                )
                        }
                    }
                )]
            )]
        ),
    }
)]]

export const Selection: t_signatures.Selection = ($) => ['state', _p.decide.state(
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
                    })
                )
            case 'regular':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'regular',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'start': _p_cc(
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
                                                                    'source': _p_cc(
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
                                                                                            })
                                                                                        )
                                                                                    case 'imported':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'imported',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        'import': _p_cc(
                                                                                                            $['import'],
                                                                                                            ($) => ['text', {
                                                                                                                'delimiter': ['quote', null],
                                                                                                                'value': $,
                                                                                                            }]
                                                                                                        ),
                                                                                                        'variable': _p_cc(
                                                                                                            $['variable'],
                                                                                                            ($) => ['text', {
                                                                                                                'delimiter': ['quote', null],
                                                                                                                'value': $,
                                                                                                            }]
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )]
                                                                    ),
                                                                    'context': _p_cc(
                                                                        $['context'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'abort': _p_cc(
                                                                        $['abort'],
                                                                        ($) => ['optional', _p.decide.optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Expression(
                                                                                $
                                                                            )],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                    'lookups': _p_cc(
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
                                                                                                            $
                                                                                                        )
                                                                                                    )],
                                                                                                })
                                                                                            )
                                                                                        case 'pass through':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'pass through',
                                                                                                    'value': ['nothing', null],
                                                                                                })
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )]],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                    'arguments': _p_cc(
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
                                                                                                            $
                                                                                                        )
                                                                                                    )],
                                                                                                })
                                                                                            )
                                                                                        case 'pass through':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'pass through',
                                                                                                    'value': ['nothing', null],
                                                                                                })
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )]],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                }
                                                            )]],
                                                        })
                                                    )
                                                case 'context':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'context',
                                                            'value': ['nothing', null],
                                                        })
                                                    )
                                                case 'entry':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'entry',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    'dictionary': _p_cc(
                                                                        $['dictionary'],
                                                                        ($) => Selection(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'id': _p_cc(
                                                                        $['id'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'abort handler': _p_cc(
                                                                        $['abort handler'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                }
                                                            )]],
                                                        })
                                                    )
                                                case 'variable':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'variable',
                                                            'value': ['state', _p.decide.state(
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
                                                                                })
                                                                            )
                                                                        case 'imported':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'imported',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'import': _p_cc(
                                                                                                $['import'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                            'variable': _p_cc(
                                                                                                $['variable'],
                                                                                                ($) => ['text', {
                                                                                                    'delimiter': ['quote', null],
                                                                                                    'value': $,
                                                                                                }]
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )],
                                                        })
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
                                                        })
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    )]
                                ),
                                'tail': _p_cc(
                                    $['tail'],
                                    ($) => ['list', _p.list.map(
                                        $,
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    )]
                                ),
                            }
                        )]],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]

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
                                'type': _p_cc(
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
                                                                    'source': _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'temp resulting node': _p_cc(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', _p.decide.optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Type_Node_Reference(
                                                                                $
                                                                            )],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                    'if false': _p_cc(
                                                                        $['if false'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'if true': _p_cc(
                                                                        $['if true'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                }
                                                            )]],
                                                        })
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
                                                                                            'dictionary': _p_cc(
                                                                                                $['dictionary'],
                                                                                                ($) => Selection(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if true': _p_cc(
                                                                                                $['if true'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if false': _p_cc(
                                                                                                $['if false'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )],
                                                        })
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
                                                                                            'list': _p_cc(
                                                                                                $['list'],
                                                                                                ($) => Selection(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if true': _p_cc(
                                                                                                $['if true'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if false': _p_cc(
                                                                                                $['if false'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'has last item':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'has last item',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'list': _p_cc(
                                                                                                $['list'],
                                                                                                ($) => Selection(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if true': _p_cc(
                                                                                                $['if true'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if false': _p_cc(
                                                                                                $['if false'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'has items':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'has items',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            'list': _p_cc(
                                                                                                $['list'],
                                                                                                ($) => Selection(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if true': _p_cc(
                                                                                                $['if true'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'if false': _p_cc(
                                                                                                $['if false'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )],
                                                        })
                                                    )
                                                case 'optional':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'optional',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    'source': _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'temp resulting node': _p_cc(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', _p.decide.optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Type_Node_Reference(
                                                                                $
                                                                            )],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                    'if not set': _p_cc(
                                                                        $['if not set'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'if set': _p_cc(
                                                                        $['if set'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                }
                                                            )]],
                                                        })
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'state',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    'source': _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'temp resulting node': _p_cc(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', _p.decide.optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Type_Node_Reference(
                                                                                $
                                                                            )],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                    'type': _p_cc(
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
                                                                                                        'options': _p_cc(
                                                                                                            $['options'],
                                                                                                            ($) => ['dictionary', _p.dictionary.map(
                                                                                                                $,
                                                                                                                ($, id) => Expression(
                                                                                                                    $
                                                                                                                )
                                                                                                            )]
                                                                                                        ),
                                                                                                        'default': _p_cc(
                                                                                                            $['default'],
                                                                                                            ($) => Expression(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    case 'full':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'full',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        'options': _p_cc(
                                                                                                            $['options'],
                                                                                                            ($) => ['dictionary', _p.dictionary.map(
                                                                                                                $,
                                                                                                                ($, id) => Expression(
                                                                                                                    $
                                                                                                                )
                                                                                                            )]
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )]
                                                                    ),
                                                                }
                                                            )]],
                                                        })
                                                    )
                                                case 'text':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'text',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    'source': _p_cc(
                                                                        $['source'],
                                                                        ($) => Selection(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'temp resulting node': _p_cc(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', _p.decide.optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Type_Node_Reference(
                                                                                $
                                                                            )],
                                                                            () => ['not set', null]
                                                                        )]
                                                                    ),
                                                                    'cases': _p_cc(
                                                                        $['cases'],
                                                                        ($) => ['dictionary', _p.dictionary.map(
                                                                            $,
                                                                            ($, id) => Expression(
                                                                                $
                                                                            )
                                                                        )]
                                                                    ),
                                                                    'default': _p_cc(
                                                                        $['default'],
                                                                        ($) => Expression(
                                                                            $
                                                                        )
                                                                    ),
                                                                }
                                                            )]],
                                                        })
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    )]
                                ),
                            }
                        )]],
                    })
                )
            case 'initialize':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'initialize',
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
                                                                                            })
                                                                                        )
                                                                                    case 'true':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'true',
                                                                                                'value': ['nothing', null],
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )],
                                                                    })
                                                                )
                                                            case 'not':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'not',
                                                                        'value': Selection(
                                                                            $
                                                                        ),
                                                                    })
                                                                )
                                                            case 'copy':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'copy',
                                                                        'value': Selection(
                                                                            $
                                                                        ),
                                                                    })
                                                                )
                                                            case 'dictionary is empty':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'dictionary is empty',
                                                                        'value': Selection(
                                                                            $
                                                                        ),
                                                                    })
                                                                )
                                                            case 'list is empty':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'list is empty',
                                                                        'value': Selection(
                                                                            $
                                                                        ),
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
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
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'entry handler': _p_cc(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'from list':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from list',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'get id': _p_cc(
                                                                                    $['get id'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'get entry': _p_cc(
                                                                                    $['get entry'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'abort': _p_cc(
                                                                                    $['abort'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'literal':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['dictionary', _p.dictionary.map(
                                                                            $,
                                                                            ($, id) => Expression(
                                                                                $
                                                                            )
                                                                        )],
                                                                    })
                                                                )
                                                            case 'map':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'map',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'entry handler': _p_cc(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'resolve':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'resolve',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'entry handler': _p_cc(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'temp resulting entry node': _p_cc(
                                                                                    $['temp resulting entry node'],
                                                                                    ($) => Temp_Type_Node_Reference(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
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
                                                                                $
                                                                            )
                                                                        )],
                                                                    })
                                                                )
                                                            case 'resolve':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'resolve',
                                                                        'value': ['dictionary', _p.dictionary.map(
                                                                            $,
                                                                            ($, id) => Expression(
                                                                                $
                                                                            )
                                                                        )],
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
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
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'entry handler': _p_cc(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'from dictionary':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from dictionary',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'get item': _p_cc(
                                                                                    $['get item'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'literal':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['list', _p.list.map(
                                                                            $,
                                                                            ($) => Expression(
                                                                                $
                                                                            )
                                                                        )],
                                                                    })
                                                                )
                                                            case 'map':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'map',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'item handler': _p_cc(
                                                                                    $['item handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'map with state':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'map with state',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'initial state': _p_cc(
                                                                                    $['initial state'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'item handler': _p_cc(
                                                                                    $['item handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'update state': _p_cc(
                                                                                    $['update state'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'wrap up': _p_cc(
                                                                                    $['wrap up'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'reduce':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'reduce',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'initial state': _p_cc(
                                                                                    $['initial state'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'item handler': _p_cc(
                                                                                    $['item handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'reverse':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'reverse',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
                                        )
                                    case 'nothing':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'nothing',
                                                'value': ['nothing', null],
                                            })
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
                                                                                                    'value': v_serialize_number.serialize(
                                                                                                        $
                                                                                                    ),
                                                                                                }],
                                                                                            })
                                                                                        )
                                                                                    case 'copy':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'copy',
                                                                                                'value': Selection(
                                                                                                    $
                                                                                                ),
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )],
                                                                    })
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
                                                                                                'value': Selection(
                                                                                                    $
                                                                                                ),
                                                                                            })
                                                                                        )
                                                                                    case 'divide':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'divide',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        'divident': _p_cc(
                                                                                                            $['divident'],
                                                                                                            ($) => Selection(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                        'divisor': _p_cc(
                                                                                                            $['divisor'],
                                                                                                            ($) => Selection(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                        'abort': _p_cc(
                                                                                                            $['abort'],
                                                                                                            ($) => Expression(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    case 'literal':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'literal',
                                                                                                'value': ['text', {
                                                                                                    'delimiter': ['none', null],
                                                                                                    'value': v_serialize_number.serialize(
                                                                                                        $
                                                                                                    ),
                                                                                                }],
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )],
                                                                    })
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
                                                                                                    'value': v_serialize_number.serialize(
                                                                                                        $
                                                                                                    ),
                                                                                                }],
                                                                                            })
                                                                                        )
                                                                                    case 'copy':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'copy',
                                                                                                'value': Selection(
                                                                                                    $
                                                                                                ),
                                                                                            })
                                                                                        )
                                                                                    case 'number of dictionary entries':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'number of dictionary entries',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        'dictionary': _p_cc(
                                                                                                            $['dictionary'],
                                                                                                            ($) => Selection(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    case 'number of list items':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'number of list items',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        'list': _p_cc(
                                                                                                            $['list'],
                                                                                                            ($) => Selection(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    case 'source column':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'source column',
                                                                                                'value': ['nothing', null],
                                                                                            })
                                                                                        )
                                                                                    case 'source line':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'source line',
                                                                                                'value': ['nothing', null],
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )],
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
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
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'get set': _p_cc(
                                                                                    $['get set'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
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
                                                                                            })
                                                                                        )
                                                                                    case 'set':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'set',
                                                                                                'value': Expression(
                                                                                                    $
                                                                                                ),
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )],
                                                                    })
                                                                )
                                                            case 'map':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'map',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'source': _p_cc(
                                                                                    $['source'],
                                                                                    ($) => Selection(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                                'set handler': _p_cc(
                                                                                    $['set handler'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
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
                                                                                'option': _p_cc(
                                                                                    $['option'],
                                                                                    ($) => ['text', {
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    }]
                                                                                ),
                                                                                'value': _p_cc(
                                                                                    $['value'],
                                                                                    ($) => Expression(
                                                                                        $
                                                                                    )
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
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
                                                                        'value': Selection(
                                                                            $
                                                                        ),
                                                                    })
                                                                )
                                                            case 'literal':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'type': _p_cc(
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
                                                                                                        })
                                                                                                    )
                                                                                                case 'freeform':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'freeform',
                                                                                                            'value': ['nothing', null],
                                                                                                        })
                                                                                                    )
                                                                                                default:
                                                                                                    return _p.au(
                                                                                                        $[0]
                                                                                                    )
                                                                                            }
                                                                                        }
                                                                                    )]
                                                                                ),
                                                                                'value': _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ['text', {
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    }]
                                                                                ),
                                                                            }
                                                                        )]],
                                                                    })
                                                                )
                                                            case 'source document':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'source document',
                                                                        'value': ['nothing', null],
                                                                    })
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )],
                                            })
                                        )
                                    default:
                                        return _p.au(
                                            $[0]
                                        )
                                }
                            }
                        )],
                    })
                )
            case 'select':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'select',
                        'value': Selection(
                            $
                        ),
                    })
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
                                                    $
                                                ),
                                            })
                                        )
                                    case 'assert':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'assert',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'tester': _p_cc(
                                                            $['tester'],
                                                            ($) => Expression(
                                                                $
                                                            )
                                                        ),
                                                        'normal flow': _p_cc(
                                                            $['normal flow'],
                                                            ($) => Expression(
                                                                $
                                                            )
                                                        ),
                                                    }
                                                )]],
                                            })
                                        )
                                    case 'change context':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'change context',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'new context': _p_cc(
                                                            $['new context'],
                                                            ($) => Selection(
                                                                $
                                                            )
                                                        ),
                                                        'expression': _p_cc(
                                                            $['expression'],
                                                            ($) => Expression(
                                                                $
                                                            )
                                                        ),
                                                    }
                                                )]],
                                            })
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
                                            })
                                        )
                                    case 'iterate':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'iterate',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'list': _p_cc(
                                                            $['list'],
                                                            ($) => Selection(
                                                                $
                                                            )
                                                        ),
                                                        'handler': _p_cc(
                                                            $['handler'],
                                                            ($) => Expression(
                                                                $
                                                            )
                                                        ),
                                                    }
                                                )]],
                                            })
                                        )
                                    case 'unreachable':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'unreachable',
                                                'value': ['nothing', null],
                                            })
                                        )
                                    default:
                                        return _p.au(
                                            $[0]
                                        )
                                }
                            }
                        )],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
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
                    })
                )
            case 'from resolved dictionary':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'from resolved dictionary',
                        'value': Selection(
                            $
                        ),
                    })
                )
            case 'from siblings':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'from siblings',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'cycles allowed': _p_cc(
                                    $['cycles allowed'],
                                    ($) => ['text', {
                                        'delimiter': ['none', null],
                                        'value': v_serialize_boolean.serialize(
                                            $
                                        ),
                                    }]
                                ),
                            }
                        )]],
                    })
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
                    })
                )
            case 'not set':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'not set',
                        'value': ['nothing', null],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]
