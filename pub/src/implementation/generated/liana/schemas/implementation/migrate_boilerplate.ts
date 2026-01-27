
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/implementation/data/unresolved"

import * as v_interface from "../interface/migrate_boilerplate"
export const Type_Reference: t_signatures.Type_Reference = ($,) => ({
    'import': _p.deprecated_cc($['import'], ($,) => $),
    'type': _p.deprecated_cc($['type'], ($,) => $),
})
export const Module: t_signatures.Module = ($,) => ({
    'type': _p.deprecated_cc($['type'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Module.type_.state => {
            switch ($[0]) {
                case 'serializer':
                    return _p.ss($, ($,) => ['serializer', null])
                case 'deserializer':
                    return _p.ss($, ($,) => ['deserializer', null])
                case 'transformer':
                    return _p.ss($, ($,) => ['transformer', null])
                case 'refiner':
                    return _p.ss($, ($,) => ['refiner', null])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'type imports': _p.deprecated_cc($['type imports'], ($,) => v_interface.Imports($)),
    'variable imports': _p.deprecated_cc($['variable imports'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'tail': _p.deprecated_cc($['tail'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'list': $.__l_map(($,) => ({
                        'item': $,
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })),
                'type': _p.deprecated_cc($['type'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Module.variable_imports.dictionary.D.entry.type_.state => {
                        switch ($[0]) {
                            case 'ancestor':
                                return _p.ss($, ($,) => ['ancestor', ({
                                    'dependency': _p.deprecated_cc($['dependency'], ($,) => $),
                                    'number of steps': _p.deprecated_cc($['number of steps'], ($,) => $),
                                })])
                            case 'external':
                                return _p.ss($, ($,) => ['external', $])
                            case 'sibling':
                                return _p.ss($, ($,) => ['sibling', $])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'algorithms': _p.deprecated_cc($['algorithms'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,key,) => ({
            'entry': ({
                'type': _p.deprecated_cc($['type'], ($,) => Type_Reference($)),
                'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                'temp has abort': _p.deprecated_cc($['temp has abort'], ($,) => $),
                'temp has lookups': _p.deprecated_cc($['temp has lookups'], ($,) => $),
                'temp has parameters': _p.deprecated_cc($['temp has parameters'], ($,) => $),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Module_Set: t_signatures.Module_Set = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,key,) => ({
        'entry': ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'state': _p.decide.state($, ($,): t_out.Module_Set.dictionary.D.entry.state => {
                switch ($[0]) {
                    case 'module':
                        return _p.ss($, ($,) => ['module', Module($)])
                    case 'set':
                        return _p.ss($, ($,) => ['set', Module_Set($)])
                    default:
                        return _p.au($[0])
                }
            }),
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($,) => ({
    'type': _p.deprecated_cc($['type'], ($,) => Type_Reference($)),
    'sub selection': _p.deprecated_cc($['sub selection'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'list': $.__l_map(($,) => ({
            'item': ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'state': _p.decide.state($, ($,): t_out.Type_Node_Reference.sub_selection.list.L.item.state => {
                    switch ($[0]) {
                        case 'dictionary':
                            return _p.ss($, ($,) => ['dictionary', null])
                        case 'group':
                            return _p.ss($, ($,) => ['group', $])
                        case 'list':
                            return _p.ss($, ($,) => ['list', null])
                        case 'optional':
                            return _p.ss($, ($,) => ['optional', null])
                        case 'state':
                            return _p.ss($, ($,) => ['state', $])
                        default:
                            return _p.au($[0])
                    }
                }),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Expression: t_signatures.Expression = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Expression.state => {
        switch ($[0]) {
            case 'special':
                return _p.ss($, ($,) => ['special', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Expression.state.special.state => {
                        switch ($[0]) {
                            case 'abort':
                                return _p.ss($, ($,) => ['abort', Expression($)])
                            case 'block':
                                return _p.ss($, ($,) => ['block', ({
                                    'variables': _p.deprecated_cc($['variables'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'dictionary': $.__d_map(($,key,) => ({
                                            'entry': ({
                                                'type': _p.deprecated_cc($['type'], ($,) => $.__o_map(($,) => Type_Node_Reference($))),
                                                'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                            }),
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                        })),
                                    })),
                                    'temp ordered variables': _p.deprecated_cc($['temp ordered variables'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'list': $.__l_map(($,) => ({
                                            'item': ({
                                                'name': _p.deprecated_cc($['name'], ($,) => $),
                                                'type': _p.deprecated_cc($['type'], ($,) => $.__o_map(($,) => Type_Node_Reference($))),
                                                'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                            }),
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                        })),
                                    })),
                                    'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                })])
                            case 'change context':
                                return _p.ss($, ($,) => ['change context', ({
                                    'new context': _p.deprecated_cc($['new context'], ($,) => Selection($)),
                                    'expression': _p.deprecated_cc($['expression'], ($,) => Expression($)),
                                })])
                            case 'implement me':
                                return _p.ss($, ($,) => ['implement me', $])
                            case 'selection deprecated':
                                return _p.ss($, ($,) => ['selection deprecated', Selection($)])
                            case 'unreachable':
                                return _p.ss($, ($,) => ['unreachable', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })])
            case 'initialize':
                return _p.ss($, ($,) => ['initialize', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state => {
                        switch ($[0]) {
                            case 'boolean':
                                return _p.ss($, ($,) => ['boolean', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.boolean_.state => {
                                        switch ($[0]) {
                                            case 'literal':
                                                return _p.ss($, ($,) => ['literal', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.boolean_.state.literal.state => {
                                                        switch ($[0]) {
                                                            case 'false':
                                                                return _p.ss($, ($,) => ['false', null])
                                                            case 'true':
                                                                return _p.ss($, ($,) => ['true', null])
                                                            default:
                                                                return _p.au($[0])
                                                        }
                                                    }),
                                                })])
                                            case 'not':
                                                return _p.ss($, ($,) => ['not', Selection($)])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'component':
                                return _p.ss($, ($,) => ['component', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.component.state => {
                                        switch ($[0]) {
                                            case 'call':
                                                return _p.ss($, ($,) => ['call', ({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'context': _p.deprecated_cc($['context'], ($,) => Expression($)),
                                                    'arguments': _p.deprecated_cc($['arguments'], ($,) => $.__o_map(($,) => ({
                                                        'location': ({
                                                            'file': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        }),
                                                        'dictionary': $.__d_map(($,key,) => ({
                                                            'entry': Expression($),
                                                            'location': ({
                                                                'file': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                        })),
                                                    }))),
                                                    'abort': _p.deprecated_cc($['abort'], ($,) => $),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'dictionary':
                                return _p.ss($, ($,) => ['dictionary', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.dictionary.state => {
                                        switch ($[0]) {
                                            case 'literal':
                                                return _p.ss($, ($,) => ['literal', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'dictionary': $.__d_map(($,key,) => ({
                                                        'entry': Expression($),
                                                        'location': ({
                                                            'file': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        }),
                                                    })),
                                                })])
                                            case 'map':
                                                return _p.ss($, ($,) => ['map', ({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'entry handler': _p.deprecated_cc($['entry handler'], ($,) => Expression($)),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'group':
                                return _p.ss($, ($,) => ['group', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'dictionary': $.__d_map(($,key,) => ({
                                        'entry': Expression($),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })),
                                })])
                            case 'list':
                                return _p.ss($, ($,) => ['list', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.list.state => {
                                        switch ($[0]) {
                                            case 'literal':
                                                return _p.ss($, ($,) => ['literal', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'list': $.__l_map(($,) => ({
                                                        'item': Expression($),
                                                        'location': ({
                                                            'file': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        }),
                                                    })),
                                                })])
                                            case 'map':
                                                return _p.ss($, ($,) => ['map', ({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'item handler': _p.deprecated_cc($['item handler'], ($,) => Expression($)),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'nothing':
                                return _p.ss($, ($,) => ['nothing', null])
                            case 'number':
                                return _p.ss($, ($,) => ['number', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.number_.state => {
                                        switch ($[0]) {
                                            case 'approximation':
                                                return _p.ss($, ($,) => ['approximation', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.number_.state.approximation.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return _p.ss($, ($,) => ['literal', $])
                                                            default:
                                                                return _p.au($[0])
                                                        }
                                                    }),
                                                })])
                                            case 'integer':
                                                return _p.ss($, ($,) => ['integer', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.number_.state.integer.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return _p.ss($, ($,) => ['literal', $])
                                                            default:
                                                                return _p.au($[0])
                                                        }
                                                    }),
                                                })])
                                            case 'natural':
                                                return _p.ss($, ($,) => ['natural', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.number_.state.natural.state => {
                                                        switch ($[0]) {
                                                            case 'literal':
                                                                return _p.ss($, ($,) => ['literal', $])
                                                            default:
                                                                return _p.au($[0])
                                                        }
                                                    }),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'optional':
                                return _p.ss($, ($,) => ['optional', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.optional.state => {
                                        switch ($[0]) {
                                            case 'literal':
                                                return _p.ss($, ($,) => ['literal', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.optional.state.literal.state => {
                                                        switch ($[0]) {
                                                            case 'not set':
                                                                return _p.ss($, ($,) => ['not set', null])
                                                            case 'set':
                                                                return _p.ss($, ($,) => ['set', Expression($)])
                                                            default:
                                                                return _p.au($[0])
                                                        }
                                                    }),
                                                })])
                                            case 'map':
                                                return _p.ss($, ($,) => ['map', ({
                                                    'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                                    'set handler': _p.deprecated_cc($['set handler'], ($,) => Expression($)),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'state':
                                return _p.ss($, ($,) => ['state', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.state.state => {
                                        switch ($[0]) {
                                            case 'literal':
                                                return _p.ss($, ($,) => ['literal', ({
                                                    'option': _p.deprecated_cc($['option'], ($,) => $),
                                                    'value': _p.deprecated_cc($['value'], ($,) => Expression($)),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'text':
                                return _p.ss($, ($,) => ['text', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.text.state => {
                                        switch ($[0]) {
                                            case 'literal':
                                                return _p.ss($, ($,) => ['literal', ({
                                                    'type': _p.deprecated_cc($['type'], ($,) => ({
                                                        'location': ({
                                                            'file': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        }),
                                                        'state': _p.decide.state($, ($,): t_out.Expression.state.initialize.state.text.state.literal.type_.state => {
                                                            switch ($[0]) {
                                                                case 'identifier':
                                                                    return _p.ss($, ($,) => ['identifier', null])
                                                                case 'freeform':
                                                                    return _p.ss($, ($,) => ['freeform', null])
                                                                default:
                                                                    return _p.au($[0])
                                                            }
                                                        }),
                                                    })),
                                                    'value': _p.deprecated_cc($['value'], ($,) => $),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })])
            case 'decide':
                return _p.ss($, ($,) => ['decide', ({
                    'type': _p.deprecated_cc($['type'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Expression.state.decide.type_.state => {
                            switch ($[0]) {
                                case 'boolean':
                                    return _p.ss($, ($,) => ['boolean', ({
                                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                        'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($,) => $.__o_map(($,) => Type_Node_Reference($))),
                                        'if false': _p.deprecated_cc($['if false'], ($,) => Expression($)),
                                        'if true': _p.deprecated_cc($['if true'], ($,) => Expression($)),
                                    })])
                                case 'optional':
                                    return _p.ss($, ($,) => ['optional', ({
                                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                        'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($,) => $.__o_map(($,) => Type_Node_Reference($))),
                                        'if not set': _p.deprecated_cc($['if not set'], ($,) => Expression($)),
                                        'if set': _p.deprecated_cc($['if set'], ($,) => Expression($)),
                                    })])
                                case 'state':
                                    return _p.ss($, ($,) => ['state', ({
                                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                                        'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($,) => $.__o_map(($,) => Type_Node_Reference($))),
                                        'type': _p.deprecated_cc($['type'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'state': _p.decide.state($, ($,): t_out.Expression.state.decide.type_.state.state.type_.state => {
                                                switch ($[0]) {
                                                    case 'partial':
                                                        return _p.ss($, ($,) => ['partial', ({
                                                            'cases': _p.deprecated_cc($['cases'], ($,) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'dictionary': $.__d_map(($,key,) => ({
                                                                    'entry': Expression($),
                                                                    'location': ({
                                                                        'file': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    }),
                                                                })),
                                                            })),
                                                            'default': _p.deprecated_cc($['default'], ($,) => Expression($)),
                                                        })])
                                                    case 'full':
                                                        return _p.ss($, ($,) => ['full', ({
                                                            'cases': _p.deprecated_cc($['cases'], ($,) => ({
                                                                'location': ({
                                                                    'file': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                }),
                                                                'dictionary': $.__d_map(($,key,) => ({
                                                                    'entry': Expression($),
                                                                    'location': ({
                                                                        'file': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    }),
                                                                })),
                                                            })),
                                                        })])
                                                    default:
                                                        return _p.au($[0])
                                                }
                                            }),
                                        })),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                })])
            default:
                return _p.au($[0])
        }
    }),
})
export const Abort_Expression: t_signatures.Abort_Expression = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Abort_Expression.state => {
        switch ($[0]) {
            case 'current':
                return _p.ss($, ($,) => ['current', null])
            case 'new':
                return _p.ss($, ($,) => ['new', Expression($)])
            default:
                return _p.au($[0])
        }
    }),
})
export const Selection: t_signatures.Selection = ($,) => ({
    'start': _p.deprecated_cc($['start'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Selection.start.state => {
            switch ($[0]) {
                case 'implement me':
                    return _p.ss($, ($,) => ['implement me', $])
                case 'abort deprecated':
                    return _p.ss($, ($,) => ['abort deprecated', null])
                case 'argument':
                    return _p.ss($, ($,) => ['argument', $])
                case 'call':
                    return _p.ss($, ($,) => ['call', ({
                        'source': _p.deprecated_cc($['source'], ($,) => Selection($)),
                        'context': _p.deprecated_cc($['context'], ($,) => Selection($)),
                        'arguments': _p.deprecated_cc($['arguments'], ($,) => $.__o_map(($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'dictionary': $.__d_map(($,key,) => ({
                                'entry': Expression($),
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                            })),
                        }))),
                    })])
                case 'context':
                    return _p.ss($, ($,) => ['context', null])
                case 'entry':
                    return _p.ss($, ($,) => ['entry', ({
                        'dictionary': _p.deprecated_cc($['dictionary'], ($,) => Selection($)),
                        'id': _p.deprecated_cc($['id'], ($,) => Selection($)),
                        'abort handler': _p.deprecated_cc($['abort handler'], ($,) => Abort_Expression($)),
                    })])
                case 'variable':
                    return _p.ss($, ($,) => ['variable', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Selection.start.state.variable.state => {
                            switch ($[0]) {
                                case 'local':
                                    return _p.ss($, ($,) => ['local', $])
                                case 'imported':
                                    return _p.ss($, ($,) => ['imported', ({
                                        'import': _p.deprecated_cc($['import'], ($,) => $),
                                        'variable': _p.deprecated_cc($['variable'], ($,) => $),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })])
                case 'parameter':
                    return _p.ss($, ($,) => ['parameter', $])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'tail': _p.deprecated_cc($['tail'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'list': $.__l_map(($,) => ({
            'item': $,
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
