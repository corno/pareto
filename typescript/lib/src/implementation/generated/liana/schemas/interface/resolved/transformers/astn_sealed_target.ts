
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/signatures/resolved/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Package_Set: t_signatures.Package_Set = ($) => ['dictionary', p_.from.dictionary(
    $,
).map(
    ($, id) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'package':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'package',
                            'value': Package(
                                $,
                            ),
                        }),
                    )
                case 'set':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'set',
                            'value': Package_Set(
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

export const Package: t_signatures.Package = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "imports": p_change_context(
            $['imports'],
            ($) => Imports(
                $,
            ),
        ),
        "content": p_change_context(
            $['content'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'data modules':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'data modules',
                                    'value': ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => Value(
                                            $,
                                        ),
                                    )],
                                }),
                            )
                        case 'functions':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'functions',
                                    'value': ['dictionary', p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "result": p_change_context(
                                                    $['result'],
                                                    ($) => Value(
                                                        $,
                                                    ),
                                                ),
                                                "context": p_change_context(
                                                    $['context'],
                                                    ($) => Value(
                                                        $,
                                                    ),
                                                ),
                                                "type": p_change_context(
                                                    $['type'],
                                                    ($) => ['state', p_decide_state(
                                                        $,
                                                        ($): t_out.Value.state => {
                                                            switch ($[0]) {
                                                                case 'transformer':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'transformer',
                                                                            'value': ['nothing', null],
                                                                        }),
                                                                    )
                                                                case 'refiner':
                                                                    return p_.ss(
                                                                        $,
                                                                        ($) => ({
                                                                            'option': 'refiner',
                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                {
                                                                                    "error": p_change_context(
                                                                                        $['error'],
                                                                                        ($) => ['optional', p_decide_optional(
                                                                                            $,
                                                                                            ($): t_out.Value.optional => ['set', Value(
                                                                                                $,
                                                                                            )],
                                                                                            () => ['not set', null],
                                                                                        )],
                                                                                    ),
                                                                                    "lookups": p_change_context(
                                                                                        $['lookups'],
                                                                                        ($) => ['optional', p_decide_optional(
                                                                                            $,
                                                                                            ($): t_out.Value.optional => ['set', ['dictionary', p_.from.dictionary(
                                                                                                $,
                                                                                            ).map(
                                                                                                ($, id) => ['state', p_decide_state(
                                                                                                    $,
                                                                                                    ($): t_out.Value.state => {
                                                                                                        switch ($[0]) {
                                                                                                            case 'acyclic':
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'acyclic',
                                                                                                                        'value': Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'cyclic':
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'cyclic',
                                                                                                                        'value': Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'stack':
                                                                                                                return p_.ss(
                                                                                                                    $,
                                                                                                                    ($) => ({
                                                                                                                        'option': 'stack',
                                                                                                                        'value': Value(
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
                                                                                            )]],
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
                                                "parameters": p_change_context(
                                                    $['parameters'],
                                                    ($) => ['optional', p_decide_optional(
                                                        $,
                                                        ($): t_out.Value.optional => ['set', ['dictionary', p_.from.dictionary(
                                                            $,
                                                        ).map(
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
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Imports: t_signatures.Imports = ($) => ['dictionary', p_.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', p_.literal.dictionary(
        {
            "type": p_change_context(
                $['type'],
                ($) => ['state', p_decide_state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'external':
                                return p_.ss(
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
                                return p_.ss(
                                    $,
                                    ($) => ({
                                        'option': 'ancestor',
                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                            {
                                                "number of steps": p_change_context(
                                                    $['number of steps'],
                                                    ($) => ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': v_primitives_to_text.decimal(
                                                            $,
                                                        ),
                                                    }],
                                                ),
                                                "dependency": p_change_context(
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
                                return p_.ss(
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
                                return p_.au(
                                    $[0],
                                )
                        }
                    },
                )],
            ),
            "tail": p_change_context(
                $['tail'],
                ($) => ['list', p_.from.list(
                    $,
                ).map(
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                )],
            ),
        },
    )]],
)]

export const Value: t_signatures.Value = ($) => ['state', p_decide_state(
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
            case 'component':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'component',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "location": p_change_context(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'dictionary',
                        'value': Value(
                            $,
                        ),
                    }),
                )
            case 'group':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'group',
                        'value': ['dictionary', p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'list':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'list',
                        'value': Value(
                            $,
                        ),
                    }),
                )
            case 'nothing':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    }),
                )
            case 'number':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'exact':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'exact',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'natural':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'natural',
                                                                        'value': ['nothing', null],
                                                                    }),
                                                                )
                                                            case 'integer':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'integer',
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
                                            }),
                                        )
                                    case 'approximation':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'approximation',
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
                    }),
                )
            case 'optional':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': Value(
                            $,
                        ),
                    }),
                )
            case 'reference':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'reference',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "location": p_change_context(
                                    $['location'],
                                    ($) => Module_Reference(
                                        $,
                                    ),
                                ),
                                "sub selection": p_change_context(
                                    $['sub selection'],
                                    ($) => ['list', p_.from.list(
                                        $,
                                    ).map(
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'dictionary':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'dictionary',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'group':
                                                        return p_.ss(
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
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'list',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'optional':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'optional',
                                                                'value': ['nothing', null],
                                                            }),
                                                        )
                                                    case 'state':
                                                        return p_.ss(
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
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    )],
                                ),
                                "cyclic": p_change_context(
                                    $['cyclic'],
                                    ($) => ['text', {
                                        'delimiter': ['none', null],
                                        'value': v_primitives_to_text.true_false(
                                            $,
                                        ),
                                    }],
                                ),
                            },
                        )]],
                    }),
                )
            case 'state':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'state',
                        'value': ['dictionary', p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'text':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'text',
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

export const Module_Reference: t_signatures.Module_Reference = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'import':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'import',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "import": p_change_context(
                                    $['import'],
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                ),
                                "type": p_change_context(
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
                return p_.ss(
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
                return p_.au(
                    $[0],
                )
        }
    },
)]
