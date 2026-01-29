
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Imports: t_signatures.Imports = ($) => ['dictionary', $.__d_map(
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            'type': _p_cc(
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
                                    })
                                )
                            case 'ancestor':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'ancestor',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'number of steps': _p_cc(
                                                    $['number of steps'],
                                                    ($) => ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': v_serialize_number.serialize(
                                                            $
                                                        ),
                                                    }]
                                                ),
                                                'dependency': _p_cc(
                                                    $['dependency'],
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }]
                                                ),
                                            }
                                        )]],
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
            'tail': _p_cc(
                $['tail'],
                ($) => ['list', $.__l_map(
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]
                )]
            ),
        }
    )]]
)]

export const Module: t_signatures.Module = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'imports': _p_cc(
            $['imports'],
            ($) => Imports(
                $
            )
        ),
        'types': _p_cc(
            $['types'],
            ($) => ['dictionary', $.__d_map(
                ($, id) => ['state', _p.decide.state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'data':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'data',
                                        'value': Type_Node(
                                            $
                                        ),
                                    })
                                )
                            case 'algorithm':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'algorithm',
                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                'result': _p_cc(
                                                    $['result'],
                                                    ($) => Type_Node(
                                                        $
                                                    )
                                                ),
                                                'context': _p_cc(
                                                    $['context'],
                                                    ($) => Type_Node(
                                                        $
                                                    )
                                                ),
                                                'type': _p_cc(
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
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                }
                                                                            )]],
                                                                        })
                                                                    )
                                                                case 'refiner':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'refiner',
                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    'error': _p_cc(
                                                                                        $['error'],
                                                                                        ($) => ['optional', $.__decide(
                                                                                            ($): t_out.Value.optional => ['set', Type_Node(
                                                                                                $
                                                                                            )],
                                                                                            () => ['not set', null]
                                                                                        )]
                                                                                    ),
                                                                                    'lookups': _p_cc(
                                                                                        $['lookups'],
                                                                                        ($) => ['optional', $.__decide(
                                                                                            ($): t_out.Value.optional => ['set', ['dictionary', $.__d_map(
                                                                                                ($, id) => ['state', _p.decide.state(
                                                                                                    $,
                                                                                                    ($): t_out.Value.state => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'acyclic':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'acyclic',
                                                                                                                        'value': Type_Node(
                                                                                                                            $
                                                                                                                        ),
                                                                                                                    })
                                                                                                                )
                                                                                                            case 'cyclic':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'cyclic',
                                                                                                                        'value': Type_Node(
                                                                                                                            $
                                                                                                                        ),
                                                                                                                    })
                                                                                                                )
                                                                                                            case 'stack':
                                                                                                                return _p.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'stack',
                                                                                                                        'value': Type_Node(
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
                                                                                            )]],
                                                                                            () => ['not set', null]
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
                                                'parameters': _p_cc(
                                                    $['parameters'],
                                                    ($) => ['optional', $.__decide(
                                                        ($): t_out.Value.optional => ['set', ['dictionary', $.__d_map(
                                                            ($, id) => Type_Node(
                                                                $
                                                            )
                                                        )]],
                                                        () => ['not set', null]
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
            )]
        ),
    }
)]]

export const Module_Set: t_signatures.Module_Set = ($) => ['dictionary', $.__d_map(
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

export const Type_Reference: t_signatures.Type_Reference = ($) => ['state', _p.decide.state(
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
                        )]],
                    })
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
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]

export const Type_Node: t_signatures.Type_Node = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'boolean',
                        'value': ['nothing', null],
                    })
                )
            case 'component':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'component',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'location': _p_cc(
                                    $['location'],
                                    ($) => Type_Reference(
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
                        'value': Type_Node(
                            $
                        ),
                    })
                )
            case 'group':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'group',
                        'value': ['dictionary', $.__d_map(
                            ($, id) => Type_Node(
                                $
                            )
                        )],
                    })
                )
            case 'list':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'list',
                        'value': Type_Node(
                            $
                        ),
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
                                                                    })
                                                                )
                                                            case 'integer':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'integer',
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
                                    case 'approximation':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'approximation',
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
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': Type_Node(
                            $
                        ),
                    })
                )
            case 'reference':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'reference',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'location': _p_cc(
                                    $['location'],
                                    ($) => Type_Reference(
                                        $
                                    )
                                ),
                                'sub selection': _p_cc(
                                    $['sub selection'],
                                    ($) => ['list', $.__l_map(
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
                                'cyclic': _p_cc(
                                    $['cyclic'],
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
            case 'state':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'state',
                        'value': ['dictionary', $.__d_map(
                            ($, id) => Type_Node(
                                $
                            )
                        )],
                    })
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'text',
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
