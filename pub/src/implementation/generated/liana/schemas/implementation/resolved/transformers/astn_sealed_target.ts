
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_interface from "../../../interface/resolved/transformers/astn_sealed_target"

export const Package_Set: t_signatures.Package_Set = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
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
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "tail": _p_change_context(
                            $['tail'],
                            ($) => ['list', _p.list.from.list(
                                $,
                            ).map(
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
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
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
                            ($) => Assign(
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
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
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

export const Assign: t_signatures.Assign = ($) => ['state', _p.decide.state(
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
                                "source": _p_change_context(
                                    $['source'],
                                    ($) => Select_Value(
                                        $,
                                    ),
                                ),
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
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "if true": _p_change_context(
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
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'optional',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
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
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "if set": _p_change_context(
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
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'state',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
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
                                                                                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                                                                $,
                                                                                                            ).map(
                                                                                                                ($, id) => Assign(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            )],
                                                                                                        ),
                                                                                                        "default": _p_change_context(
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
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'full',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        "options": _p_change_context(
                                                                                                            $['options'],
                                                                                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                                                                $,
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
                                                                                                            ($) => Assign(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "if false": _p_change_context(
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
                                                                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                            $,
                                                                        ).map(
                                                                            ($, id) => Assign(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    ),
                                                                    "default": _p_change_context(
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
            case 'construct':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'construct',
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
                                                            case 'from':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "selection": _p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
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
                                                                                                            'value': ['state', _p.decide.state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'not':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'not',
                                                                                                                                    'value': ['nothing', null],
                                                                                                                                }),
                                                                                                                            )
                                                                                                                        case 'copy':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'copy',
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
                                                                                                case 'dictionary':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'dictionary',
                                                                                                            'value': ['state', _p.decide.state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'is empty':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'is empty',
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
                                                                                                case 'list':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'list',
                                                                                                            'value': ['state', _p.decide.state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'is empty':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'is empty',
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
                                    case 'dictionary':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'dictionary',
                                                'value': ['state', _p.decide.state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['dictionary', _p.dictionary.from.dictionary(
                                                                            $,
                                                                        ).map(
                                                                            ($, id) => Assign(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'from':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "selection": _p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": _p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
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
                                                                                                                                            "assign entry": _p_change_context(
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
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "assign entry": _p_change_context(
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
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'resolve',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "assign entry": _p_change_context(
                                                                                                                                                $['assign entry'],
                                                                                                                                                ($) => Assign(
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
                                                                                                case 'list':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'list',
                                                                                                            'value': ['state', _p.decide.state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'convert',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "assign id": _p_change_context(
                                                                                                                                                $['assign id'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "assign entry": _p_change_context(
                                                                                                                                                $['assign entry'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "abort": _p_change_context(
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
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "properties": _p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                                        $,
                                                                                    ).map(
                                                                                        ($, id) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                ),
                                                                                "have dependencies": _p_change_context(
                                                                                    $['have dependencies'],
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
                                                            case 'literal':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'literal',
                                                                        'value': ['list', _p.list.from.list(
                                                                            $,
                                                                        ).map(
                                                                            ($) => Assign(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'from':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "selection": _p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": _p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'dictionary':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'dictionary',
                                                                                                            'value': ['state', _p.decide.state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'convert',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "assign entry": _p_change_context(
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
                                                                                                                                            "assign item": _p_change_context(
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
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "assign item": _p_change_context(
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
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map with state',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "initialize state": _p_change_context(
                                                                                                                                                $['initialize state'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "assign item": _p_change_context(
                                                                                                                                                $['assign item'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "update state": _p_change_context(
                                                                                                                                                $['update state'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "wrap up": _p_change_context(
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
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'reduce',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "initialize state": _p_change_context(
                                                                                                                                                $['initialize state'],
                                                                                                                                                ($) => Assign(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                            "assign item": _p_change_context(
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
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'reverse',
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
                                                                                                'value': Select_Value(
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
                                                                                                'value': Select_Value(
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
                                                                                                        "assign dividend": _p_change_context(
                                                                                                            $['assign dividend'],
                                                                                                            ($) => Select_Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "assign divisor": _p_change_context(
                                                                                                            $['assign divisor'],
                                                                                                            ($) => Select_Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "abort": _p_change_context(
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
                                                                                                'value': Select_Value(
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
                                                                                                            ($) => Select_Value(
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
                                                                                                            ($) => Select_Value(
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
                                                                                                'value': Assign(
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
                                                            case 'from':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "selection": _p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
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
                                                                                                            'value': ['state', _p.decide.state(
                                                                                                                $,
                                                                                                                ($): t_out.Value.state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'convert',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "assign set": _p_change_context(
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
                                                                                                                        case 'map':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ({
                                                                                                                                    'option': 'map',
                                                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                        {
                                                                                                                                            "assign set": _p_change_context(
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
                                                                                "assign option": _p_change_context(
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
                                                            case 'from':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'from',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "selection": _p_change_context(
                                                                                    $['selection'],
                                                                                    ($) => Select_Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "type": _p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
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
                        'value': Select_Value(
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
                                                'value': Assign(
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
                                                            ($) => Assign(
                                                                $,
                                                            ),
                                                        ),
                                                        "normal flow": _p_change_context(
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
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'change context',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        "new context": _p_change_context(
                                                            $['new context'],
                                                            ($) => Select_Value(
                                                                $,
                                                            ),
                                                        ),
                                                        "expression": _p_change_context(
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
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'variables',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        "variables": _p_change_context(
                                                            $['variables'],
                                                            ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                $,
                                                            ).map(
                                                                ($, id) => Assign(
                                                                    $,
                                                                ),
                                                            )],
                                                        ),
                                                        "assign": _p_change_context(
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
                                                            ($) => Select_Value(
                                                                $,
                                                            ),
                                                        ),
                                                        "assign": _p_change_context(
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

export const Select_Value: t_signatures.Select_Value = ($) => ['state', _p.decide.state(
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
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "abort": _p_change_context(
                                                                        $['abort'],
                                                                        ($) => ['optional', _p.decide.optional(
                                                                            $,
                                                                            ($): t_out.Value.optional => ['set', Assign(
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
                                                                                                    'value': ['dictionary', _p.dictionary.from.dictionary(
                                                                                                        $,
                                                                                                    ).map(
                                                                                                        ($, id) => Select_Lookup(
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
                                                                                                    'value': ['dictionary', _p.dictionary.from.dictionary(
                                                                                                        $,
                                                                                                    ).map(
                                                                                                        ($, id) => Assign(
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
                                                                        ($) => Select_Value(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "id": _p_change_context(
                                                                        $['id'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "no such entry handler": _p_change_context(
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
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'list from text',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "source": _p_change_context(
                                                                        $['source'],
                                                                        ($) => Select_Value(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "assign item": _p_change_context(
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
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'lookup entry',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "lookup": _p_change_context(
                                                                        $['lookup'],
                                                                        ($) => Select_Lookup(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "id": _p_change_context(
                                                                        $['id'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "abort handlers": _p_change_context(
                                                                        $['abort handlers'],
                                                                        ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "no such entry": _p_change_context(
                                                                                    $['no such entry'],
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "no context lookup": _p_change_context(
                                                                                    $['no context lookup'],
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "cycle detected": _p_change_context(
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
                                                case 'lookup entry depth':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'lookup entry depth',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "lookup": _p_change_context(
                                                                        $['lookup'],
                                                                        ($) => Select_Lookup(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "id": _p_change_context(
                                                                        $['id'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "abort handlers": _p_change_context(
                                                                        $['abort handlers'],
                                                                        ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "no such entry": _p_change_context(
                                                                                    $['no such entry'],
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "no context lookup": _p_change_context(
                                                                                    $['no context lookup'],
                                                                                    ($) => Assign(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "cycle detected": _p_change_context(
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
                                                                        ($) => Select_Value(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "assign character": _p_change_context(
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
                                    ($) => ['list', _p.list.from.list(
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
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Select_Lookup: t_signatures.Select_Lookup = ($) => ['state', _p.decide.state(
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
                                                            ($) => Select_Lookup(
                                                                $,
                                                            ),
                                                        ),
                                                        "acyclic": _p_change_context(
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
                                                'value': Select_Value(
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
