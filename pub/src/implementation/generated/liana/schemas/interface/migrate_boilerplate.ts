
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/interface/data/unresolved"
export const Imports: t_signatures.Imports = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,key,) => ({
        'entry': ({
            'type': _p.deprecated_cc($['type'], ($,) => ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'state': _p.decide.state($, ($,): t_out.Imports.dictionary.D.entry.type_.state => {
                    switch ($[0]) {
                        case 'external':
                            return _p.ss($, ($,) => ['external', $])
                        case 'ancestor':
                            return _p.ss($, ($,) => ['ancestor', ({
                                'number of steps': _p.deprecated_cc($['number of steps'], ($,) => $),
                                'dependency': _p.deprecated_cc($['dependency'], ($,) => $),
                            })])
                        case 'sibling':
                            return _p.ss($, ($,) => ['sibling', $])
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
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Module: t_signatures.Module = ($,) => ({
    'imports': _p.deprecated_cc($['imports'], ($,) => Imports($)),
    'types': _p.deprecated_cc($['types'], ($,) => ({
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
                'state': _p.decide.state($, ($,): t_out.Module.types.dictionary.D.entry.state => {
                    switch ($[0]) {
                        case 'data':
                            return _p.ss($, ($,) => ['data', Type_Node($)])
                        case 'algorithm':
                            return _p.ss($, ($,) => ['algorithm', ({
                                'result': _p.deprecated_cc($['result'], ($,) => Type_Node($)),
                                'context': _p.deprecated_cc($['context'], ($,) => Type_Node($)),
                                'type': _p.deprecated_cc($['type'], ($,) => ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Module.types.dictionary.D.entry.state.algorithm.type_.state => {
                                        switch ($[0]) {
                                            case 'transformer':
                                                return _p.ss($, ($,) => ['transformer', null])
                                            case 'refiner':
                                                return _p.ss($, ($,) => ['refiner', ({
                                                    'error': _p.deprecated_cc($['error'], ($,) => $.__o_map(($,) => Type_Node($))),
                                                    'lookups': _p.deprecated_cc($['lookups'], ($,) => $.__o_map(($,) => ({
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
                                                                'state': _p.decide.state($, ($,): t_out.Module.types.dictionary.D.entry.state.algorithm.type_.state.refiner.lookups.O.dictionary.D.entry.state => {
                                                                    switch ($[0]) {
                                                                        case 'acyclic':
                                                                            return _p.ss($, ($,) => ['acyclic', Type_Node($)])
                                                                        case 'cyclic':
                                                                            return _p.ss($, ($,) => ['cyclic', Type_Node($)])
                                                                        case 'stack':
                                                                            return _p.ss($, ($,) => ['stack', Type_Node($)])
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
                                                    }))),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })),
                                'parameters': _p.deprecated_cc($['parameters'], ($,) => $.__o_map(($,) => ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'dictionary': $.__d_map(($,key,) => ({
                                        'entry': Type_Node($),
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                    })),
                                }))),
                            })])
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
export const Type_Reference: t_signatures.Type_Reference = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Type_Reference.state => {
        switch ($[0]) {
            case 'import':
                return _p.ss($, ($,) => ['import', ({
                    'import': _p.deprecated_cc($['import'], ($,) => $),
                    'type': _p.deprecated_cc($['type'], ($,) => $),
                })])
            case 'local':
                return _p.ss($, ($,) => ['local', $])
            default:
                return _p.au($[0])
        }
    }),
})
export const Type_Node: t_signatures.Type_Node = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Type_Node.state => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss($, ($,) => ['boolean', null])
            case 'component':
                return _p.ss($, ($,) => ['component', ({
                    'location': _p.deprecated_cc($['location'], ($,) => Type_Reference($)),
                })])
            case 'dictionary':
                return _p.ss($, ($,) => ['dictionary', Type_Node($)])
            case 'group':
                return _p.ss($, ($,) => ['group', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': Type_Node($),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })])
            case 'list':
                return _p.ss($, ($,) => ['list', Type_Node($)])
            case 'nothing':
                return _p.ss($, ($,) => ['nothing', null])
            case 'number':
                return _p.ss($, ($,) => ['number', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Type_Node.state.number_.state => {
                        switch ($[0]) {
                            case 'exact':
                                return _p.ss($, ($,) => ['exact', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Type_Node.state.number_.state.exact.state => {
                                        switch ($[0]) {
                                            case 'natural':
                                                return _p.ss($, ($,) => ['natural', null])
                                            case 'integer':
                                                return _p.ss($, ($,) => ['integer', null])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                })])
                            case 'approximation':
                                return _p.ss($, ($,) => ['approximation', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })])
            case 'optional':
                return _p.ss($, ($,) => ['optional', Type_Node($)])
            case 'reference':
                return _p.ss($, ($,) => ['reference', ({
                    'location': _p.deprecated_cc($['location'], ($,) => Type_Reference($)),
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
                                'state': _p.decide.state($, ($,): t_out.Type_Node.state.reference.sub_selection.list.L.item.state => {
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
                    'cyclic': _p.deprecated_cc($['cyclic'], ($,) => $),
                })])
            case 'state':
                return _p.ss($, ($,) => ['state', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,key,) => ({
                        'entry': Type_Node($),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })])
            case 'text':
                return _p.ss($, ($,) => ['text', null])
            default:
                return _p.au($[0])
        }
    }),
})
