
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/signatures/resolved/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_interface from "../../../interface/resolved/transformers/astn_sealed_target"

export const Package_Set: t_signatures.Package_Set = ($) => ['dictionary', p_.from.dictionary($,
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
        "specials": p_change_context(
            $['specials'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "abort": p_change_context(
                        $['abort'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "change context": p_change_context(
                        $['change context'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "implement me": p_change_context(
                        $['implement me'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "iterate": p_change_context(
                        $['iterate'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "lookups": p_change_context(
                        $['lookups'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "list from text": p_change_context(
                        $['list from text'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "text from list": p_change_context(
                        $['text from list'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "unreachable code path": p_change_context(
                        $['unreachable code path'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "variables": p_change_context(
                        $['variables'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                },
            )]],
        ),
        "type imports": p_change_context(
            $['type imports'],
            ($) => v_external_interface.Imports(
                $,
            ),
        ),
        "variable imports": p_change_context(
            $['variable imports'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "tail": p_change_context(
                            $['tail'],
                            ($) => ['list', p_.from.list($,
                            ).map(
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            )],
                        ),
                        "type": p_change_context(
                            $['type'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'ancestor':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'ancestor',
                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                        {
                                                            "dependency": p_change_context(
                                                                $['dependency'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['quote', null],
                                                                    'value': $,
                                                                }],
                                                            ),
                                                            "number of steps": p_change_context(
                                                                $['number of steps'],
                                                                ($) => ['text', {
                                                                    'delimiter': ['none', null],
                                                                    'value': v_primitives_to_text.decimal(
                                                                        $,
                                                                    ),
                                                                }],
                                                            ),
                                                        },
                                                    )]],
                                                }),
                                            )
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
                    },
                )]],
            )],
        ),
        "functions": p_change_context(
            $['functions'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "type": p_change_context(
                            $['type'],
                            ($) => ['group', ['verbose', p_.literal.dictionary(
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
                        ),
                        "expression": p_change_context(
                            $['expression'],
                            ($) => Assign(
                                $,
                            ),
                        ),
                        "temp has abort": p_change_context(
                            $['temp has abort'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        ),
                        "temp has lookups": p_change_context(
                            $['temp has lookups'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        ),
                        "temp has parameters": p_change_context(
                            $['temp has parameters'],
                            ($) => ['text', {
                                'delimiter': ['none', null],
                                'value': v_primitives_to_text.true_false(
                                    $,
                                ),
                            }],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "type": p_change_context(
            $['type'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
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
        ),
        "sub selection": p_change_context(
            $['sub selection'],
            ($) => ['list', p_.from.list($,
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
    },
)]]

export const Assign: t_signatures.Assign = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'decide':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'decide',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "source": p_change_context(
                                    $['source'],
                                    ($) => Select_Value(
                                        $,
                                    ),
                                ),
                                "type": p_change_context(
                                    $['type'],
                                    ($) => ['state', p_decide_state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'boolean':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'boolean',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "temp resulting node": p_change_context(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', p_decide_optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                $,
                                                                            )],
                                                                            () => ['not set', null],
                                                                        )],
                                                                    ),
                                                                    "if false": p_change_context(
                                                                        $['if false'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "if true": p_change_context(
                                                                        $['if true'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'optional':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'optional',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "temp resulting node": p_change_context(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', p_decide_optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                $,
                                                                            )],
                                                                            () => ['not set', null],
                                                                        )],
                                                                    ),
                                                                    "if not set": p_change_context(
                                                                        $['if not set'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "if set": p_change_context(
                                                                        $['if set'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
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
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "temp resulting node": p_change_context(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', p_decide_optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                $,
                                                                            )],
                                                                            () => ['not set', null],
                                                                        )],
                                                                    ),
                                                                    "type": p_change_context(
                                                                        $['type'],
                                                                        ($) => ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'partial':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'partial',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "options": p_change_context(
                                                                                                            $['options'],
                                                                                                            ($) => ['dictionary', p_.from.dictionary($,
                                                                                                            ).map(
                                                                                                                ($, id) => Assign(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            )],
                                                                                                        ),
                                                                                                        "default": p_change_context(
                                                                                                            $['default'],
                                                                                                            ($) => Assign(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'full':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'full',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "options": p_change_context(
                                                                                                            $['options'],
                                                                                                            ($) => ['dictionary', p_.from.dictionary($,
                                                                                                            ).map(
                                                                                                                ($, id) => Assign(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            )],
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'single':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'single',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "option": p_change_context(
                                                                                                            $['option'],
                                                                                                            ($) => ['text', {
                                                                                                                'delimiter': ['quote', null],
                                                                                                                'value': $,
                                                                                                            }],
                                                                                                        ),
                                                                                                        "if true": p_change_context(
                                                                                                            $['if true'],
                                                                                                            ($) => Assign(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "if false": p_change_context(
                                                                                                            $['if false'],
                                                                                                            ($) => Assign(
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
                                                                        )],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'text':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'text',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "temp resulting node": p_change_context(
                                                                        $['temp resulting node'],
                                                                        ($) => ['optional', p_decide_optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Temp_Value_Type_Specification(
                                                                                $,
                                                                            )],
                                                                            () => ['not set', null],
                                                                        )],
                                                                    ),
                                                                    "cases": p_change_context(
                                                                        $['cases'],
                                                                        ($) => ['dictionary', p_.from.dictionary($,
                                                                        ).map(
                                                                            ($, id) => Assign(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    ),
                                                                    "default": p_change_context(
                                                                        $['default'],
                                                                        ($) => Assign(
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
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'construct':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'construct',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'boolean':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'boolean',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'false':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'false',
                                                                                                'value': ['nothing', null],
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
                                                                                    default:
                                                                                        return p_.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'from':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "selection": p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'boolean':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'boolean',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'not':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'not',
                                                                                                                                    'value': ['nothing', null],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'copy':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'copy',
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
                                                                                                case 'dictionary':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'dictionary',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'is empty':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'is empty',
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
                                                                                                case 'list':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'list',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'is empty':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'is empty',
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
                                                            default:
                                                                return p_.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )],
                                            }),
                                        )
                                    case 'dictionary':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'dictionary',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['dictionary', p_.from.dictionary($,
                                                                        ).map(
                                                                            ($, id) => Assign(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'from':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "selection": p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'dictionary':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'dictionary',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'filter':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'filter',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign entry": p_change_context(
                                                                                                                                                $['assign entry'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                    )]],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'map':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign entry": p_change_context(
                                                                                                                                                $['assign entry'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                    )]],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'resolve':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'resolve',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign entry": p_change_context(
                                                                                                                                                $['assign entry'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "temp resulting entry node": p_change_context(
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
                                                                                                                            return p_.au(
                                                                                                                                $[0],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'list':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'list',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'convert',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign id": p_change_context(
                                                                                                                                                $['assign id'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "assign entry": p_change_context(
                                                                                                                                                $['assign entry'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "abort": p_change_context(
                                                                                                                                                $['abort'],
                                                                                                                                                ($) => Assign(
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
                                            }),
                                        )
                                    case 'group':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'group',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "properties": p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => ['dictionary', p_.from.dictionary($,
                                                                                    ).map(
                                                                                        ($, id) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                ),
                                                                                "have dependencies": p_change_context(
                                                                                    $['have dependencies'],
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
                                                            default:
                                                                return p_.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )],
                                            }),
                                        )
                                    case 'list':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'list',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['list', p_.from.list($,
                                                                        ).map(
                                                                            ($) => Assign(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'from':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "selection": p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'dictionary':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'dictionary',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'convert',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign entry": p_change_context(
                                                                                                                                                $['assign entry'],
                                                                                                                                                ($) => Assign(
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
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'list':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'list',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'filter':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'filter',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign item": p_change_context(
                                                                                                                                                $['assign item'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                    )]],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'map':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign item": p_change_context(
                                                                                                                                                $['assign item'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                    )]],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'map with state':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map with state',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "initialize state": p_change_context(
                                                                                                                                                $['initialize state'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "assign item": p_change_context(
                                                                                                                                                $['assign item'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "update state": p_change_context(
                                                                                                                                                $['update state'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "wrap up": p_change_context(
                                                                                                                                                $['wrap up'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                    )]],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'reduce':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'reduce',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "initialize state": p_change_context(
                                                                                                                                                $['initialize state'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "assign item": p_change_context(
                                                                                                                                                $['assign item'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        },
                                                                                                                                    )]],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'reverse':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'reverse',
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
                                                            default:
                                                                return p_.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )],
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
                                                            case 'approximation':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'approximation',
                                                                        'value': ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'literal':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'literal',
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
                                                                                    case 'copy':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'copy',
                                                                                                'value': Select_Value(
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
                                                                    }),
                                                                )
                                                            case 'integer':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'integer',
                                                                        'value': ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'copy':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'copy',
                                                                                                'value': Select_Value(
                                                                                                    $,
                                                                                                ),
                                                                                            }),
                                                                                        )
                                                                                    case 'divide':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'divide',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "assign dividend": p_change_context(
                                                                                                            $['assign dividend'],
                                                                                                            ($) => Select_Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "assign divisor": p_change_context(
                                                                                                            $['assign divisor'],
                                                                                                            ($) => Select_Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "abort": p_change_context(
                                                                                                            $['abort'],
                                                                                                            ($) => Assign(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'literal':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'literal',
                                                                                                'value': ['text', {
                                                                                                    'delimiter': ['none', null],
                                                                                                    'value': v_primitives_to_text.decimal(
                                                                                                        $,
                                                                                                    ),
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
                                                                    }),
                                                                )
                                                            case 'natural':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'natural',
                                                                        'value': ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'literal':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'literal',
                                                                                                'value': ['text', {
                                                                                                    'delimiter': ['none', null],
                                                                                                    'value': v_primitives_to_text.decimal(
                                                                                                        $,
                                                                                                    ),
                                                                                                }],
                                                                                            }),
                                                                                        )
                                                                                    case 'copy':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'copy',
                                                                                                'value': Select_Value(
                                                                                                    $,
                                                                                                ),
                                                                                            }),
                                                                                        )
                                                                                    case 'number of dictionary entries':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'number of dictionary entries',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "dictionary": p_change_context(
                                                                                                            $['dictionary'],
                                                                                                            ($) => Select_Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'number of list items':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'number of list items',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "list": p_change_context(
                                                                                                            $['list'],
                                                                                                            ($) => Select_Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'source column':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'source column',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    case 'source line':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'source line',
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
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'not set':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'not set',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    case 'set':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'set',
                                                                                                'value': Assign(
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
                                                                    }),
                                                                )
                                                            case 'from':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "selection": p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'boolean':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'boolean',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'convert',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign set": p_change_context(
                                                                                                                                                $['assign set'],
                                                                                                                                                ($) => Assign(
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
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'optional':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'optional',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'map':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map',
                                                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                        {
                                                                                                                                            "assign set": p_change_context(
                                                                                                                                                $['assign set'],
                                                                                                                                                ($) => Assign(
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
                                            }),
                                        )
                                    case 'state':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'state',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "option": p_change_context(
                                                                                    $['option'],
                                                                                    ($) => ['text', {
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    }],
                                                                                ),
                                                                                "assign option": p_change_context(
                                                                                    $['assign option'],
                                                                                    ($) => Assign(
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
                                                )],
                                            }),
                                        )
                                    case 'text':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'text',
                                                'value': ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "type": p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'identifier':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'identifier',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'freeform':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'freeform',
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
                                                                        )]],
                                                                    }),
                                                                )
                                                            case 'from':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "selection": p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'text':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'text',
                                                                                                            'value': ['state', p_decide_state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'copy':
                                                                                                                            return p_.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'copy',
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
                                                            case 'source document':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'source document',
                                                                        'value': ['nothing', null],
                                                                    }),
                                                                )
                                                            case 'entry id':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'entry id',
                                                                        'value': ['nothing', null],
                                                                    }),
                                                                )
                                                            case 'option name':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'option name',
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
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            case 'select':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'select',
                        'value': Select_Value(
                            $,
                        ),
                    }),
                )
            case 'special':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'special',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'abort':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'abort',
                                                'value': Assign(
                                                    $,
                                                ),
                                            }),
                                        )
                                    case 'assert':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'assert',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "tester": p_change_context(
                                                            $['tester'],
                                                            ($) => Assign(
                                                                $,
                                                            ),
                                                        ),
                                                        "normal flow": p_change_context(
                                                            $['normal flow'],
                                                            ($) => Assign(
                                                                $,
                                                            ),
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    case 'change context':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'change context',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "new context": p_change_context(
                                                            $['new context'],
                                                            ($) => Select_Value(
                                                                $,
                                                            ),
                                                        ),
                                                        "expression": p_change_context(
                                                            $['expression'],
                                                            ($) => Assign(
                                                                $,
                                                            ),
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    case 'variables':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'variables',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "variables": p_change_context(
                                                            $['variables'],
                                                            ($) => ['dictionary', p_.from.dictionary($,
                                                            ).map(
                                                                ($, id) => Assign(
                                                                    $,
                                                                ),
                                                            )],
                                                        ),
                                                        "assign": p_change_context(
                                                            $['assign'],
                                                            ($) => Assign(
                                                                $,
                                                            ),
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    case 'implement me':
                                        return p_.ss(
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
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'iterate',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "list": p_change_context(
                                                            $['list'],
                                                            ($) => Select_Value(
                                                                $,
                                                            ),
                                                        ),
                                                        "assign": p_change_context(
                                                            $['assign'],
                                                            ($) => Assign(
                                                                $,
                                                            ),
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    case 'unreachable':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'unreachable',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "explanation": p_change_context(
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
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Select_Value: t_signatures.Select_Value = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'implement me':
                return p_.ss(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'regular',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "start": p_change_context(
                                    $['start'],
                                    ($) => ['state', p_decide_state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'call':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'call',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "source": p_change_context(
                                                                        $['source'],
                                                                        ($) => ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
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
                                                                                    case 'imported':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'imported',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "import": p_change_context(
                                                                                                            $['import'],
                                                                                                            ($) => ['text', {
                                                                                                                'delimiter': ['quote', null],
                                                                                                                'value': $,
                                                                                                            }],
                                                                                                        ),
                                                                                                        "variable": p_change_context(
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
                                                                                        return p_.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        )],
                                                                    ),
                                                                    "context": p_change_context(
                                                                        $['context'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "abort": p_change_context(
                                                                        $['abort'],
                                                                        ($) => ['optional', p_decide_optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Assign(
                                                                                $,
                                                                            )],
                                                                            () => ['not set', null],
                                                                        )],
                                                                    ),
                                                                    "lookups": p_change_context(
                                                                        $['lookups'],
                                                                        ($) => ['optional', p_decide_optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', ['state', p_decide_state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'initialize':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'initialize',
                                                                                                    'value': ['dictionary', p_.from.dictionary($,
                                                                                                    ).map(
                                                                                                        ($, id) => Select_Lookup(
                                                                                                            $,
                                                                                                        ),
                                                                                                    )],
                                                                                                }),
                                                                                            )
                                                                                        case 'pass through':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'pass through',
                                                                                                    'value': ['nothing', null],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return p_.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            )]],
                                                                            () => ['not set', null],
                                                                        )],
                                                                    ),
                                                                    "arguments": p_change_context(
                                                                        $['arguments'],
                                                                        ($) => ['optional', p_decide_optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', ['state', p_decide_state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'initialize':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'initialize',
                                                                                                    'value': ['dictionary', p_.from.dictionary($,
                                                                                                    ).map(
                                                                                                        ($, id) => Assign(
                                                                                                            $,
                                                                                                        ),
                                                                                                    )],
                                                                                                }),
                                                                                            )
                                                                                        case 'pass through':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'pass through',
                                                                                                    'value': ['nothing', null],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return p_.au(
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
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'context',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'dictionary entry':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'dictionary entry',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "dictionary": p_change_context(
                                                                        $['dictionary'],
                                                                        ($) => Select_Value(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "id": p_change_context(
                                                                        $['id'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "no such entry handler": p_change_context(
                                                                        $['no such entry handler'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'list from text':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'list from text',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "source": p_change_context(
                                                                        $['source'],
                                                                        ($) => Select_Value(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "assign item": p_change_context(
                                                                        $['assign item'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'lookup entry':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'lookup entry',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "lookup": p_change_context(
                                                                        $['lookup'],
                                                                        ($) => Select_Lookup(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "id": p_change_context(
                                                                        $['id'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "type": p_change_context(
                                                                        $['type'],
                                                                        ($) => ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'acyclic':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'acyclic',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "abort handlers": p_change_context(
                                                                                                            $['abort handlers'],
                                                                                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "no such entry": p_change_context(
                                                                                                                        $['no such entry'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    "no context lookup": p_change_context(
                                                                                                                        $['no context lookup'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    "cycle detected": p_change_context(
                                                                                                                        $['cycle detected'],
                                                                                                                        ($) => Assign(
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
                                                                                    case 'cyclic':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'cyclic',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "abort handlers": p_change_context(
                                                                                                            $['abort handlers'],
                                                                                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "no such entry": p_change_context(
                                                                                                                        $['no such entry'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    "no context lookup": p_change_context(
                                                                                                                        $['no context lookup'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    "accessing cyclic sibling before it is resolved": p_change_context(
                                                                                                                        $['accessing cyclic sibling before it is resolved'],
                                                                                                                        ($) => Assign(
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
                                                                                    case 'stack':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'stack',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "abort handlers": p_change_context(
                                                                                                            $['abort handlers'],
                                                                                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "no such entry": p_change_context(
                                                                                                                        $['no such entry'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    "no context lookup": p_change_context(
                                                                                                                        $['no context lookup'],
                                                                                                                        ($) => Assign(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    "cycle detected": p_change_context(
                                                                                                                        $['cycle detected'],
                                                                                                                        ($) => Assign(
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
                                                case 'lookup entry depth':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'lookup entry depth',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "lookup": p_change_context(
                                                                        $['lookup'],
                                                                        ($) => Select_Lookup(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "id": p_change_context(
                                                                        $['id'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "abort handlers": p_change_context(
                                                                        $['abort handlers'],
                                                                        ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "no such entry": p_change_context(
                                                                                    $['no such entry'],
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "no context lookup": p_change_context(
                                                                                    $['no context lookup'],
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "cycle detected": p_change_context(
                                                                                    $['cycle detected'],
                                                                                    ($) => Assign(
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
                                                    return p_.ss(
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
                                                    return p_.ss(
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
                                                case 'state':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'state',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'text from list':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'text from list',
                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                {
                                                                    "source": p_change_context(
                                                                        $['source'],
                                                                        ($) => Select_Value(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "assign character": p_change_context(
                                                                        $['assign character'],
                                                                        ($) => Assign(
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
                                    ($) => ['list', p_.from.list($,
                                    ).map(
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
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Select_Lookup: t_signatures.Select_Lookup = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'implement me':
                return p_.ss(
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
                return p_.ss(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'stack',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'empty':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'empty',
                                                'value': ['nothing', null],
                                            }),
                                        )
                                    case 'push':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'push',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "stack": p_change_context(
                                                            $['stack'],
                                                            ($) => Select_Lookup(
                                                                $,
                                                            ),
                                                        ),
                                                        "acyclic": p_change_context(
                                                            $['acyclic'],
                                                            ($) => Select_Lookup(
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
                        )],
                    }),
                )
            case 'acyclic':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'acyclic',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'not set':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'not set',
                                                'value': ['nothing', null],
                                            }),
                                        )
                                    case 'siblings':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'siblings',
                                                'value': ['nothing', null],
                                            }),
                                        )
                                    case 'resolved dictionary':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'resolved dictionary',
                                                'value': Select_Value(
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
                    }),
                )
            case 'cyclic':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'cyclic',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'not set':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'not set',
                                                'value': ['nothing', null],
                                            }),
                                        )
                                    case 'siblings':
                                        return p_.ss(
                                            $,
                                            ($) => ({
                                                'option': 'siblings',
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
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]
