import * as p_ from 'pareto-core/transformer'

// schemas
import * as s_source from "../schema.js"
import * as s_target from "astn-core/modules/serialization/schemas/sealed_target/schema"

// serializer dependencies
import * as t_primitives from "liana-core/modules/serialization/schemas/primitives/serializers"

export namespace declarations {
    
    export type Value_Selection_Tail = p_.Transformer<
        s_source.Value_Selection_Tail,
        s_target.Value
    >
    
    export type Value_Selection = p_.Transformer<
        s_source.Value_Selection,
        s_target.Value
    >
    
    export type Value_Reference = p_.Transformer<
        s_source.Value_Reference,
        s_target.Value
    >
    
    export type Expression = p_.Transformer<
        s_source.Expression,
        s_target.Value
    >
    
    export type Schema_Reference = p_.Transformer<
        s_source.Schema_Reference,
        s_target.Value
    >
    
    export type Type_Reference = p_.Transformer<
        s_source.Type_Reference,
        s_target.Value
    >
    
    export type Root = p_.Transformer<
        s_source.Root,
        s_target.Value
    >
}

// implementations

export const Value_Selection_Tail: declarations.Value_Selection_Tail = ($) => ['list', p_.from.list($).map(
    ($) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }],
)]

export const Value_Selection: declarations.Value_Selection = ($) => ['state', p_.from.state($).decide(
    ($): s_target.Value.state => {
        switch ($[0]) {
            case 'call': return p_.option($, ($) => ({
                'option': 'call',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "scope": p_.change_context($['scope'], ($) => ['state', p_.from.state($).decide(
                        ($): s_target.Value.state => {
                            switch ($[0]) {
                                case 'external': return p_.option($, ($) => ({
                                    'option': 'external',
                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                        "transformer": p_.change_context($['transformer'], ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]),
                                        "function": p_.change_context($['function'], ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]),
                                    })]],
                                }))
                                case 'local': return p_.option($, ($) => ({
                                    'option': 'local',
                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                        "function": p_.change_context($['function'], ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]),
                                    })]],
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        },
                    )]),
                    "context": p_.change_context($['context'], ($) => Value_Selection(
                        $,
                    )),
                    "arguments": p_.change_context($['arguments'], ($) => ['state', p_.from.state($).decide(
                        ($): s_target.Value.state => {
                            switch ($[0]) {
                                case 'omitted': return p_.option($, ($) => ({
                                    'option': 'omitted',
                                    'value': ['nothing', null],
                                }))
                                case 'pass through': return p_.option($, ($) => ({
                                    'option': 'pass through',
                                    'value': ['nothing', null],
                                }))
                                case 'handler': return p_.option($, ($) => ({
                                    'option': 'handler',
                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                        "expression": p_.change_context($['expression'], ($) => Expression(
                                            $,
                                        )),
                                    })]],
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        },
                    )]),
                    "tail": p_.change_context($['tail'], ($) => Value_Selection_Tail(
                        $,
                    )),
                })]],
            }))
            case 'context value': return p_.option($, ($) => ({
                'option': 'context value',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "tail": p_.change_context($['tail'], ($) => Value_Selection_Tail(
                        $,
                    )),
                })]],
            }))
            default: return p_.exhaustive($[0])
        }
    },
)]

export const Value_Reference: declarations.Value_Reference = ($) => ['group', ['verbose', p_.literal.dictionary({
    "type": p_.change_context($['type'], ($) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }]),
    "subselection": p_.change_context($['subselection'], ($) => ['list', p_.from.list($).map(
        ($) => ['state', p_.from.state($).decide(
            ($): s_target.Value.state => {
                switch ($[0]) {
                    case 'dictionary': return p_.option($, ($) => ({
                        'option': 'dictionary',
                        'value': ['nothing', null],
                    }))
                    case 'group': return p_.option($, ($) => ({
                        'option': 'group',
                        'value': ['group', ['verbose', p_.literal.dictionary({
                            "property": p_.change_context($['property'], ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]),
                        })]],
                    }))
                    case 'list': return p_.option($, ($) => ({
                        'option': 'list',
                        'value': ['nothing', null],
                    }))
                    case 'optional': return p_.option($, ($) => ({
                        'option': 'optional',
                        'value': ['nothing', null],
                    }))
                    case 'state': return p_.option($, ($) => ({
                        'option': 'state',
                        'value': ['group', ['verbose', p_.literal.dictionary({
                            "option": p_.change_context($['option'], ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]),
                        })]],
                    }))
                    default: return p_.exhaustive($[0])
                }
            },
        )],
    )]),
})]]

export const Expression: declarations.Expression = ($) => ['state', p_.from.state($).decide(
    ($): s_target.Value.state => {
        switch ($[0]) {
            case 'call': return p_.option($, ($) => ({
                'option': 'call',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "scope": p_.change_context($['scope'], ($) => ['state', p_.from.state($).decide(
                        ($): s_target.Value.state => {
                            switch ($[0]) {
                                case 'external': return p_.option($, ($) => ({
                                    'option': 'external',
                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                        "transformer": p_.change_context($['transformer'], ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]),
                                        "function": p_.change_context($['function'], ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]),
                                    })]],
                                }))
                                case 'local': return p_.option($, ($) => ({
                                    'option': 'local',
                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                        "function": p_.change_context($['function'], ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]),
                                    })]],
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        },
                    )]),
                    "context": p_.change_context($['context'], ($) => Value_Selection(
                        $,
                    )),
                    "arguments": p_.change_context($['arguments'], ($) => ['state', p_.from.state($).decide(
                        ($): s_target.Value.state => {
                            switch ($[0]) {
                                case 'omitted': return p_.option($, ($) => ({
                                    'option': 'omitted',
                                    'value': ['nothing', null],
                                }))
                                case 'pass through': return p_.option($, ($) => ({
                                    'option': 'pass through',
                                    'value': ['nothing', null],
                                }))
                                case 'handler': return p_.option($, ($) => ({
                                    'option': 'handler',
                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                        "expression": p_.change_context($['expression'], ($) => Expression(
                                            $,
                                        )),
                                    })]],
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        },
                    )]),
                })]],
            }))
            case 'change context': return p_.option($, ($) => ({
                'option': 'change context',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "selection": p_.change_context($['selection'], ($) => Value_Selection(
                        $,
                    )),
                    "callback": p_.change_context($['callback'], ($) => Expression(
                        $,
                    )),
                })]],
            }))
            case 'from source': return p_.option($, ($) => ({
                'option': 'from source',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "selection": p_.change_context($['selection'], ($) => Value_Selection(
                        $,
                    )),
                    "type": p_.change_context($['type'], ($) => ['state', p_.from.state($).decide(
                        ($): s_target.Value.state => {
                            switch ($[0]) {
                                case 'dictionary': return p_.option($, ($) => ({
                                    'option': 'dictionary',
                                    'value': ['state', p_.from.state($).decide(
                                        ($): s_target.Value.state => {
                                            switch ($[0]) {
                                                case 'map': return p_.option($, ($) => ({
                                                    'option': 'map',
                                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                                        "on entry": p_.change_context($['on entry'], ($) => Expression(
                                                            $,
                                                        )),
                                                    })]],
                                                }))
                                                default: return p_.exhaustive($[0])
                                            }
                                        },
                                    )],
                                }))
                                case 'list': return p_.option($, ($) => ({
                                    'option': 'list',
                                    'value': ['state', p_.from.state($).decide(
                                        ($): s_target.Value.state => {
                                            switch ($[0]) {
                                                case 'map': return p_.option($, ($) => ({
                                                    'option': 'map',
                                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                                        "on item": p_.change_context($['on item'], ($) => Expression(
                                                            $,
                                                        )),
                                                    })]],
                                                }))
                                                default: return p_.exhaustive($[0])
                                            }
                                        },
                                    )],
                                }))
                                case 'optional': return p_.option($, ($) => ({
                                    'option': 'optional',
                                    'value': ['state', p_.from.state($).decide(
                                        ($): s_target.Value.state => {
                                            switch ($[0]) {
                                                case 'decide': return p_.option($, ($) => ({
                                                    'option': 'decide',
                                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                                        "temp return type": p_.change_context($['temp return type'], ($) => ['optional', p_.from.optional($).decide(
                                                            ($): s_target.Value.optional => ['set', Value_Reference(
                                                                $,
                                                            )],
                                                            (): s_target.Value.optional => ['not set', null],
                                                        )]),
                                                        "on set": p_.change_context($['on set'], ($) => Expression(
                                                            $,
                                                        )),
                                                        "on not set": p_.change_context($['on not set'], ($) => Expression(
                                                            $,
                                                        )),
                                                    })]],
                                                }))
                                                case 'map': return p_.option($, ($) => ({
                                                    'option': 'map',
                                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                                        "on set": p_.change_context($['on set'], ($) => Expression(
                                                            $,
                                                        )),
                                                    })]],
                                                }))
                                                default: return p_.exhaustive($[0])
                                            }
                                        },
                                    )],
                                }))
                                case 'state': return p_.option($, ($) => ({
                                    'option': 'state',
                                    'value': ['state', p_.from.state($).decide(
                                        ($): s_target.Value.state => {
                                            switch ($[0]) {
                                                case 'decide': return p_.option($, ($) => ({
                                                    'option': 'decide',
                                                    'value': ['group', ['verbose', p_.literal.dictionary({
                                                        "temp return type": p_.change_context($['temp return type'], ($) => ['optional', p_.from.optional($).decide(
                                                            ($): s_target.Value.optional => ['set', Value_Reference(
                                                                $,
                                                            )],
                                                            (): s_target.Value.optional => ['not set', null],
                                                        )]),
                                                        "options": p_.change_context($['options'], ($) => ['dictionary', p_.from.dictionary($).map(
                                                            ($, id) => Expression(
                                                                $,
                                                            ),
                                                        )]),
                                                    })]],
                                                }))
                                                default: return p_.exhaustive($[0])
                                            }
                                        },
                                    )],
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        },
                    )]),
                })]],
            }))
            case 'implement me': return p_.option($, ($) => ({
                'option': 'implement me',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "remark": p_.change_context($['remark'], ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]),
                })]],
            }))
            case 'literal': return p_.option($, ($) => ({
                'option': 'literal',
                'value': ['state', p_.from.state($).decide(
                    ($): s_target.Value.state => {
                        switch ($[0]) {
                            case 'boolean': return p_.option($, ($) => ({
                                'option': 'boolean',
                                'value': ['state', p_.from.state($).decide(
                                    ($): s_target.Value.state => {
                                        switch ($[0]) {
                                            case 'false': return p_.option($, ($) => ({
                                                'option': 'false',
                                                'value': ['nothing', null],
                                            }))
                                            case 'true': return p_.option($, ($) => ({
                                                'option': 'true',
                                                'value': ['nothing', null],
                                            }))
                                            default: return p_.exhaustive($[0])
                                        }
                                    },
                                )],
                            }))
                            case 'dictionary': return p_.option($, ($) => ({
                                'option': 'dictionary',
                                'value': ['dictionary', p_.from.dictionary($).map(
                                    ($, id) => Expression(
                                        $,
                                    ),
                                )],
                            }))
                            case 'group': return p_.option($, ($) => ({
                                'option': 'group',
                                'value': ['dictionary', p_.from.dictionary($).map(
                                    ($, id) => Expression(
                                        $,
                                    ),
                                )],
                            }))
                            case 'list': return p_.option($, ($) => ({
                                'option': 'list',
                                'value': ['list', p_.from.list($).map(
                                    ($) => Expression(
                                        $,
                                    ),
                                )],
                            }))
                            case 'nothing': return p_.option($, ($) => ({
                                'option': 'nothing',
                                'value': ['nothing', null],
                            }))
                            case 'number': return p_.option($, ($) => ({
                                'option': 'number',
                                'value': ['state', p_.from.state($).decide(
                                    ($): s_target.Value.state => {
                                        switch ($[0]) {
                                            case 'zero': return p_.option($, ($) => ({
                                                'option': 'zero',
                                                'value': ['nothing', null],
                                            }))
                                            default: return p_.exhaustive($[0])
                                        }
                                    },
                                )],
                            }))
                            case 'optional': return p_.option($, ($) => ({
                                'option': 'optional',
                                'value': ['state', p_.from.state($).decide(
                                    ($): s_target.Value.state => {
                                        switch ($[0]) {
                                            case 'not set': return p_.option($, ($) => ({
                                                'option': 'not set',
                                                'value': ['nothing', null],
                                            }))
                                            case 'set': return p_.option($, ($) => ({
                                                'option': 'set',
                                                'value': Expression(
                                                    $,
                                                ),
                                            }))
                                            default: return p_.exhaustive($[0])
                                        }
                                    },
                                )],
                            }))
                            case 'reference': return p_.option($, ($) => ({
                                'option': 'reference',
                                'value': ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            }))
                            case 'state': return p_.option($, ($) => ({
                                'option': 'state',
                                'value': ['group', ['verbose', p_.literal.dictionary({
                                    "option": p_.change_context($['option'], ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }]),
                                    "data": p_.change_context($['data'], ($) => Expression(
                                        $,
                                    )),
                                })]],
                            }))
                            case 'text': return p_.option($, ($) => ({
                                'option': 'text',
                                'value': ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            }))
                            default: return p_.exhaustive($[0])
                        }
                    },
                )],
            }))
            case 'selection': return p_.option($, ($) => ({
                'option': 'selection',
                'value': Value_Selection(
                    $,
                ),
            }))
            default: return p_.exhaustive($[0])
        }
    },
)]

export const Schema_Reference: declarations.Schema_Reference = ($) => ['state', p_.from.state($).decide(
    ($): s_target.Value.state => {
        switch ($[0]) {
            case 'sibling': return p_.option($, ($) => ({
                'option': 'sibling',
                'value': ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            }))
            case 'external': return p_.option($, ($) => ({
                'option': 'external',
                'value': ['group', ['verbose', p_.literal.dictionary({
                    "package": p_.change_context($['package'], ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]),
                    "module": p_.change_context($['module'], ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]),
                    "schema": p_.change_context($['schema'], ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]),
                })]],
            }))
            default: return p_.exhaustive($[0])
        }
    },
)]

export const Type_Reference: declarations.Type_Reference = ($) => ['group', ['verbose', p_.literal.dictionary({
    "type": p_.change_context($['type'], ($) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }]),
})]]

export const Root: declarations.Root = ($) => ['group', ['verbose', p_.literal.dictionary({
    "development mode": p_.change_context($['development mode'], ($) => ['text', {
        'delimiter': ['none', null],
        'value': t_primitives.true_false(
            $,
        ),
    }]),
    "target schema": p_.change_context($['target schema'], ($) => Schema_Reference(
        $,
    )),
    "parameters schema": p_.change_context($['parameters schema'], ($) => ['optional', p_.from.optional($).decide(
        ($): s_target.Value.optional => ['set', Schema_Reference(
            $,
        )],
        (): s_target.Value.optional => ['not set', null],
    )]),
    "dependencies": p_.change_context($['dependencies'], ($) => ['group', ['verbose', p_.literal.dictionary({
        "serializers": p_.change_context($['serializers'], ($) => ['dictionary', p_.from.dictionary($).map(
            ($, id) => ['state', p_.from.state($).decide(
                ($): s_target.Value.state => {
                    switch ($[0]) {
                        case 'this schema': return p_.option($, ($) => ({
                            'option': 'this schema',
                            'value': ['nothing', null],
                        }))
                        case 'cousin': return p_.option($, ($) => ({
                            'option': 'cousin',
                            'value': ['group', ['verbose', p_.literal.dictionary({
                                "schema": p_.change_context($['schema'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                            })]],
                        }))
                        case 'external': return p_.option($, ($) => ({
                            'option': 'external',
                            'value': ['group', ['verbose', p_.literal.dictionary({
                                "package": p_.change_context($['package'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                                "module": p_.change_context($['module'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                                "schema": p_.change_context($['schema'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                            })]],
                        }))
                        default: return p_.exhaustive($[0])
                    }
                },
            )],
        )]),
        "transformers": p_.change_context($['transformers'], ($) => ['dictionary', p_.from.dictionary($).map(
            ($, id) => ['state', p_.from.state($).decide(
                ($): s_target.Value.state => {
                    switch ($[0]) {
                        case 'sibling': return p_.option($, ($) => ({
                            'option': 'sibling',
                            'value': ['group', ['verbose', p_.literal.dictionary({
                                "transformer": p_.change_context($['transformer'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                            })]],
                        }))
                        case 'cousin': return p_.option($, ($) => ({
                            'option': 'cousin',
                            'value': ['group', ['verbose', p_.literal.dictionary({
                                "schema": p_.change_context($['schema'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                                "transformer": p_.change_context($['transformer'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                            })]],
                        }))
                        case 'external': return p_.option($, ($) => ({
                            'option': 'external',
                            'value': ['group', ['verbose', p_.literal.dictionary({
                                "package": p_.change_context($['package'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                                "module": p_.change_context($['module'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                                "schema": p_.change_context($['schema'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                                "transformer": p_.change_context($['transformer'], ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]),
                            })]],
                        }))
                        default: return p_.exhaustive($[0])
                    }
                },
            )],
        )]),
    })]]),
    "declarations": p_.change_context($['declarations'], ($) => ['dictionary', p_.from.dictionary($).map(
        ($, id) => ['group', ['verbose', p_.literal.dictionary({
            "target": p_.change_context($['target'], ($) => Value_Reference(
                $,
            )),
            "parameters": p_.change_context($['parameters'], ($) => ['optional', p_.from.optional($).decide(
                ($): s_target.Value.optional => ['set', Type_Reference(
                    $,
                )],
                (): s_target.Value.optional => ['not set', null],
            )]),
        })]],
    )]),
    "implementations": p_.change_context($['implementations'], ($) => ['dictionary', p_.from.dictionary($).map(
        ($, id) => ['group', ['verbose', p_.literal.dictionary({
            "temp has parameters": p_.change_context($['temp has parameters'], ($) => ['text', {
                'delimiter': ['none', null],
                'value': t_primitives.true_false(
                    $,
                ),
            }]),
            "expression": p_.change_context($['expression'], ($) => Expression(
                $,
            )),
        })]],
    )]),
})]]
