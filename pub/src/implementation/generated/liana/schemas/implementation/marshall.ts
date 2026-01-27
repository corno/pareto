
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_interface from "../interface/marshall"
export const Type_Reference: t_signatures.Type_Reference = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'import': _p.deprecated_cc($['import'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'type': _p.deprecated_cc($['type'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]
export const Module: t_signatures.Module = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'serializer':
                return _p.ss($, ($,) => ({
                    'option': 'serializer',
                    'value': ['nothing', null],
                }))
            case 'deserializer':
                return _p.ss($, ($,) => ({
                    'option': 'deserializer',
                    'value': ['nothing', null],
                }))
            case 'transformer':
                return _p.ss($, ($,) => ({
                    'option': 'transformer',
                    'value': ['nothing', null],
                }))
            case 'refiner':
                return _p.ss($, ($,) => ({
                    'option': 'refiner',
                    'value': ['nothing', null],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'type imports': _p.deprecated_cc($['type imports'], ($,) => v_external_interface.Imports($)),
    'variable imports': _p.deprecated_cc($['variable imports'], ($,) => ['dictionary', $.__d_map(($,id,) => ['group', ['verbose', _p.dictionary.literal(({
        'tail': _p.deprecated_cc($['tail'], ($,) => ['list', $.__l_map(($,) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
            switch ($[0]) {
                case 'ancestor':
                    return _p.ss($, ($,) => ({
                        'option': 'ancestor',
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                            'dependency': _p.deprecated_cc($['dependency'], ($,) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'number of steps': _p.deprecated_cc($['number of steps'], ($,) => ['text', ({
                                'delimiter': ['none', null],
                                'value': v_serialize_number.serialize($),
                            })]),
                        }))]],
                    }))
                case 'external':
                    return _p.ss($, ($,) => ({
                        'option': 'external',
                        'value': ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })],
                    }))
                case 'sibling':
                    return _p.ss($, ($,) => ({
                        'option': 'sibling',
                        'value': ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })],
                    }))
                default:
                    return _p.au($[0])
            }
        })]),
    }))]])]),
    'algorithms': _p.deprecated_cc($['algorithms'], ($,) => ['dictionary', $.__d_map(($,id,) => ['group', ['verbose', _p.dictionary.literal(({
        'type': _p.deprecated_cc($['type'], ($,) => Type_Reference($)),
        'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
        'temp has abort': _p.deprecated_cc($['temp has abort'], ($,) => ['text', ({
            'delimiter': ['none', null],
            'value': v_serialize_boolean.serialize($),
        })]),
        'temp has lookups': _p.deprecated_cc($['temp has lookups'], ($,) => ['text', ({
            'delimiter': ['none', null],
            'value': v_serialize_boolean.serialize($),
        })]),
        'temp has parameters': _p.deprecated_cc($['temp has parameters'], ($,) => ['text', ({
            'delimiter': ['none', null],
            'value': v_serialize_boolean.serialize($),
        })]),
    }))]])]),
}))]]
export const Module_Set: t_signatures.Module_Set = ($,) => ['dictionary', $.__d_map(($,id,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'module':
            return _p.ss($, ($,) => ({
                'option': 'module',
                'value': Module($),
            }))
        case 'set':
            return _p.ss($, ($,) => ({
                'option': 'set',
                'value': Module_Set($),
            }))
        default:
            return _p.au($[0])
    }
})])]
export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'type': _p.deprecated_cc($['type'], ($,) => Type_Reference($)),
    'sub selection': _p.deprecated_cc($['sub selection'], ($,) => ['list', $.__l_map(($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'dictionary':
                return _p.ss($, ($,) => ({
                    'option': 'dictionary',
                    'value': ['nothing', null],
                }))
            case 'group':
                return _p.ss($, ($,) => ({
                    'option': 'group',
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
            case 'list':
                return _p.ss($, ($,) => ({
                    'option': 'list',
                    'value': ['nothing', null],
                }))
            case 'optional':
                return _p.ss($, ($,) => ({
                    'option': 'optional',
                    'value': ['nothing', null],
                }))
            case 'state':
                return _p.ss($, ($,) => ({
                    'option': 'state',
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
            default:
                return _p.au($[0])
        }
    })])]),
}))]]
export const Expression: t_signatures.Expression = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'special':
            return _p.ss($, ($,) => ({
                'option': 'special',
                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'abort':
                            return _p.ss($, ($,) => ({
                                'option': 'abort',
                                'value': Expression($),
                            }))
                        case 'block':
                            return _p.ss($, ($,) => ({
                                'option': 'block',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'variables': _p.deprecated_cc($['variables'], ($,) => ['dictionary', $.__d_map(($,id,) => ['group', ['verbose', _p.dictionary.literal(({
                                        'type': _p.deprecated_cc($['type'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Type_Node_Reference($)], () => ['not set', null])]),
                                        'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                    }))]])]),
                                    'temp ordered variables': _p.deprecated_cc($['temp ordered variables'], ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
                                        'name': _p.deprecated_cc($['name'], ($,) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                        'type': _p.deprecated_cc($['type'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Type_Node_Reference($)], () => ['not set', null])]),
                                        'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                    }))]])]),
                                    'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                }))]],
                            }))
                        case 'change context':
                            return _p.ss($, ($,) => ({
                                'option': 'change context',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'new context': _p.deprecated_cc($['new context'], ($,) => Selection($)),
                                    'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                }))]],
                            }))
                        case 'implement me':
                            return _p.ss($, ($,) => ({
                                'option': 'implement me',
                                'value': ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })],
                            }))
                        case 'selection deprecated':
                            return _p.ss($, ($,) => ({
                                'option': 'selection deprecated',
                                'value': Selection($),
                            }))
                        case 'unreachable':
                            return _p.ss($, ($,) => ({
                                'option': 'unreachable',
                                'value': ['nothing', null],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })],
            }))
        case 'initialize':
            return _p.ss($, ($,) => ({
                'option': 'initialize',
                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'boolean':
                            return _p.ss($, ($,) => ({
                                'option': 'boolean',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'literal':
                                            return _p.ss($, ($,) => ({
                                                'option': 'literal',
                                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'false':
                                                            return _p.ss($, ($,) => ({
                                                                'option': 'false',
                                                                'value': ['nothing', null],
                                                            }))
                                                        case 'true':
                                                            return _p.ss($, ($,) => ({
                                                                'option': 'true',
                                                                'value': ['nothing', null],
                                                            }))
                                                        default:
                                                            return _p.au($[0])
                                                    }
                                                })],
                                            }))
                                        case 'not':
                                            return _p.ss($, ($,) => ({
                                                'option': 'not',
                                                'value': Selection($),
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        case 'component':
                            return _p.ss($, ($,) => ({
                                'option': 'component',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'call':
                                            return _p.ss($, ($,) => ({
                                                'option': 'call',
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'context': _p.deprecated_cc($['context'], ($,) => Expression($)),
                                                    'arguments': _p.deprecated_cc($['arguments'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['dictionary', $.__d_map(($,id,) => Expression($))]], () => ['not set', null])]),
                                                    'abort': _p.deprecated_cc($['abort'], ($,) => ['text', ({
                                                        'delimiter': ['none', null],
                                                        'value': v_serialize_boolean.serialize($),
                                                    })]),
                                                }))]],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        case 'dictionary':
                            return _p.ss($, ($,) => ({
                                'option': 'dictionary',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'literal':
                                            return _p.ss($, ($,) => ({
                                                'option': 'literal',
                                                'value': ['dictionary', $.__d_map(($,id,) => Expression($))],
                                            }))
                                        case 'map':
                                            return _p.ss($, ($,) => ({
                                                'option': 'map',
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'entry handler': _p.deprecated_cc($['entry handler'], ($,) => Expression($)),
                                                }))]],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        case 'group':
                            return _p.ss($, ($,) => ({
                                'option': 'group',
                                'value': ['dictionary', $.__d_map(($,id,) => Expression($))],
                            }))
                        case 'list':
                            return _p.ss($, ($,) => ({
                                'option': 'list',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'literal':
                                            return _p.ss($, ($,) => ({
                                                'option': 'literal',
                                                'value': ['list', $.__l_map(($,) => Expression($))],
                                            }))
                                        case 'map':
                                            return _p.ss($, ($,) => ({
                                                'option': 'map',
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'item handler': _p.deprecated_cc($['item handler'], ($,) => Expression($)),
                                                }))]],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        case 'nothing':
                            return _p.ss($, ($,) => ({
                                'option': 'nothing',
                                'value': ['nothing', null],
                            }))
                        case 'number':
                            return _p.ss($, ($,) => ({
                                'option': 'number',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'approximation':
                                            return _p.ss($, ($,) => ({
                                                'option': 'approximation',
                                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'literal':
                                                            return _p.ss($, ($,) => ({
                                                                'option': 'literal',
                                                                'value': ['text', ({
                                                                    'delimiter': ['none', null],
                                                                    'value': v_serialize_number.serialize($),
                                                                })],
                                                            }))
                                                        default:
                                                            return _p.au($[0])
                                                    }
                                                })],
                                            }))
                                        case 'integer':
                                            return _p.ss($, ($,) => ({
                                                'option': 'integer',
                                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'literal':
                                                            return _p.ss($, ($,) => ({
                                                                'option': 'literal',
                                                                'value': ['text', ({
                                                                    'delimiter': ['none', null],
                                                                    'value': v_serialize_number.serialize($),
                                                                })],
                                                            }))
                                                        default:
                                                            return _p.au($[0])
                                                    }
                                                })],
                                            }))
                                        case 'natural':
                                            return _p.ss($, ($,) => ({
                                                'option': 'natural',
                                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'literal':
                                                            return _p.ss($, ($,) => ({
                                                                'option': 'literal',
                                                                'value': ['text', ({
                                                                    'delimiter': ['none', null],
                                                                    'value': v_serialize_number.serialize($),
                                                                })],
                                                            }))
                                                        default:
                                                            return _p.au($[0])
                                                    }
                                                })],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        case 'optional':
                            return _p.ss($, ($,) => ({
                                'option': 'optional',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'literal':
                                            return _p.ss($, ($,) => ({
                                                'option': 'literal',
                                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                                    switch ($[0]) {
                                                        case 'not set':
                                                            return _p.ss($, ($,) => ({
                                                                'option': 'not set',
                                                                'value': ['nothing', null],
                                                            }))
                                                        case 'set':
                                                            return _p.ss($, ($,) => ({
                                                                'option': 'set',
                                                                'value': Expression($),
                                                            }))
                                                        default:
                                                            return _p.au($[0])
                                                    }
                                                })],
                                            }))
                                        case 'map':
                                            return _p.ss($, ($,) => ({
                                                'option': 'map',
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'set handler': _p.deprecated_cc($['set handler'], ($,) => Expression($)),
                                                }))]],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        case 'state':
                            return _p.ss($, ($,) => ({
                                'option': 'state',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'literal':
                                            return _p.ss($, ($,) => ({
                                                'option': 'literal',
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'option': _p.deprecated_cc($['option'], ($,) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                    'value': _p.deprecated_cc($['value'], ($,) => Expression($)),
                                                }))]],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        case 'text':
                            return _p.ss($, ($,) => ({
                                'option': 'text',
                                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'literal':
                                            return _p.ss($, ($,) => ({
                                                'option': 'literal',
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'identifier':
                                                                return _p.ss($, ($,) => ({
                                                                    'option': 'identifier',
                                                                    'value': ['nothing', null],
                                                                }))
                                                            case 'freeform':
                                                                return _p.ss($, ($,) => ({
                                                                    'option': 'freeform',
                                                                    'value': ['nothing', null],
                                                                }))
                                                            default:
                                                                return _p.au($[0])
                                                        }
                                                    })]),
                                                    'value': _p.deprecated_cc($['value'], ($,) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                }))]],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })],
            }))
        case 'decide':
            return _p.ss($, ($,) => ({
                'option': 'decide',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'boolean':
                                return _p.ss($, ($,) => ({
                                    'option': 'boolean',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                        'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Type_Node_Reference($)], () => ['not set', null])]),
                                        'if false': _p.deprecated_cc($['if false'], ($,) => Expression($)),
                                        'if true': _p.deprecated_cc($['if true'], ($,) => Expression($)),
                                    }))]],
                                }))
                            case 'optional':
                                return _p.ss($, ($,) => ({
                                    'option': 'optional',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                        'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Type_Node_Reference($)], () => ['not set', null])]),
                                        'if not set': _p.deprecated_cc($['if not set'], ($,) => Expression($)),
                                        'if set': _p.deprecated_cc($['if set'], ($,) => Expression($)),
                                    }))]],
                                }))
                            case 'state':
                                return _p.ss($, ($,) => ({
                                    'option': 'state',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                        'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Type_Node_Reference($)], () => ['not set', null])]),
                                        'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'partial':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'partial',
                                                        'value': ['group', ['verbose', _p.dictionary.literal(({
                                                            'cases': _p.deprecated_cc($['cases'], ($,) => ['dictionary', $.__d_map(($,id,) => Expression($))]),
                                                            'default': _p.deprecated_cc($['default'], ($,) => Expression($)),
                                                        }))]],
                                                    }))
                                                case 'full':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'full',
                                                        'value': ['group', ['verbose', _p.dictionary.literal(({
                                                            'cases': _p.deprecated_cc($['cases'], ($,) => ['dictionary', $.__d_map(($,id,) => Expression($))]),
                                                        }))]],
                                                    }))
                                                default:
                                                    return _p.au($[0])
                                            }
                                        })]),
                                    }))]],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })]),
                }))]],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Abort_Expression: t_signatures.Abort_Expression = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'current':
            return _p.ss($, ($,) => ({
                'option': 'current',
                'value': ['nothing', null],
            }))
        case 'new':
            return _p.ss($, ($,) => ({
                'option': 'new',
                'value': Expression($),
            }))
        default:
            return _p.au($[0])
    }
})]
export const Selection: t_signatures.Selection = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'start': _p.deprecated_cc($['start'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'implement me':
                return _p.ss($, ($,) => ({
                    'option': 'implement me',
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
            case 'abort deprecated':
                return _p.ss($, ($,) => ({
                    'option': 'abort deprecated',
                    'value': ['nothing', null],
                }))
            case 'argument':
                return _p.ss($, ($,) => ({
                    'option': 'argument',
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
            case 'call':
                return _p.ss($, ($,) => ({
                    'option': 'call',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                        'context': _p.deprecated_cc($['context'], ($,) => Selection($)),
                        'arguments': _p.deprecated_cc($['arguments'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['dictionary', $.__d_map(($,id,) => Expression($))]], () => ['not set', null])]),
                    }))]],
                }))
            case 'context':
                return _p.ss($, ($,) => ({
                    'option': 'context',
                    'value': ['nothing', null],
                }))
            case 'entry':
                return _p.ss($, ($,) => ({
                    'option': 'entry',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'dictionary': _p.deprecated_cc($['dictionary'], ($,) => Selection($)),
                        'id': _p.deprecated_cc($['id'], ($,) => Selection($)),
                        'abort handler': _p.deprecated_cc($['abort handler'], ($,) => Abort_Expression($)),
                    }))]],
                }))
            case 'variable':
                return _p.ss($, ($,) => ({
                    'option': 'variable',
                    'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'local':
                                return _p.ss($, ($,) => ({
                                    'option': 'local',
                                    'value': ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })],
                                }))
                            case 'imported':
                                return _p.ss($, ($,) => ({
                                    'option': 'imported',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'import': _p.deprecated_cc($['import'], ($,) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                        'variable': _p.deprecated_cc($['variable'], ($,) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    }))]],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })],
                }))
            case 'parameter':
                return _p.ss($, ($,) => ({
                    'option': 'parameter',
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'tail': _p.deprecated_cc($['tail'], ($,) => ['list', $.__l_map(($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
}))]]
