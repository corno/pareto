
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/interface/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/interface/data/unresolved"

export const Imports: t_signatures.Imports = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'type': _p_cc(
                    $['type'],
                    ($) => ({
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l value': _p.decide.state(
                            $,
                            ($): t_out.Imports.l_value.D.l_entry.type_.l_value => {
                                switch ($[0]) {
                                    case 'external':
                                        return _p.ss(
                                            $,
                                            ($) => ['external', $]
                                        )
                                    case 'ancestor':
                                        return _p.ss(
                                            $,
                                            ($) => ['ancestor', {
                                                'number of steps': _p_cc(
                                                    $['number of steps'],
                                                    ($) => $
                                                ),
                                                'dependency': _p_cc(
                                                    $['dependency'],
                                                    ($) => $
                                                ),
                                            }]
                                        )
                                    case 'sibling':
                                        return _p.ss(
                                            $,
                                            ($) => ['sibling', $]
                                        )
                                    default:
                                        return _p.au(
                                            $[0]
                                        )
                                }
                            }
                        ),
                    })
                ),
                'tail': _p_cc(
                    $['tail'],
                    ($) => ({
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l value': _p.list.map(
                            $,
                            ($) => ({
                                'l item': $,
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            })
                        ),
                    })
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Module: t_signatures.Module = ($) => ({
    'imports': _p_cc(
        $['imports'],
        ($) => Imports(
            $
        )
    ),
    'types': _p_cc(
        $['types'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l value': _p.dictionary.map(
                $,
                ($, id) => ({
                    'l entry': {
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l value': _p.decide.state(
                            $,
                            ($): t_out.Module.types.l_value.D.l_entry.l_value => {
                                switch ($[0]) {
                                    case 'data':
                                        return _p.ss(
                                            $,
                                            ($) => ['data', Type_Node(
                                                $
                                            )]
                                        )
                                    case 'algorithm':
                                        return _p.ss(
                                            $,
                                            ($) => ['algorithm', {
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
                                                    ($) => ({
                                                        'l location': {
                                                            'document resource identifier': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                        'l value': _p.decide.state(
                                                            $,
                                                            ($): t_out.Module.types.l_value.D.l_entry.l_value.algorithm.type_.l_value => {
                                                                switch ($[0]) {
                                                                    case 'transformer':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['transformer', null]
                                                                        )
                                                                    case 'refiner':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['refiner', {
                                                                                'error': _p_cc(
                                                                                    $['error'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => Type_Node(
                                                                                            $
                                                                                        )
                                                                                    )
                                                                                ),
                                                                                'lookups': _p_cc(
                                                                                    $['lookups'],
                                                                                    ($) => _p.optional.map(
                                                                                        $,
                                                                                        ($) => ({
                                                                                            'l location': {
                                                                                                'document resource identifier': "implement me",
                                                                                                'line': 42,
                                                                                                'column': 42,
                                                                                            },
                                                                                            'l value': _p.dictionary.map(
                                                                                                $,
                                                                                                ($, id) => ({
                                                                                                    'l entry': {
                                                                                                        'l location': {
                                                                                                            'document resource identifier': "implement me",
                                                                                                            'line': 42,
                                                                                                            'column': 42,
                                                                                                        },
                                                                                                        'l value': _p.decide.state(
                                                                                                            $,
                                                                                                            ($): t_out.Module.types.l_value.D.l_entry.l_value.algorithm.type_.l_value.refiner.lookups.O.l_value.D.l_entry.l_value => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'acyclic':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['acyclic', Type_Node(
                                                                                                                                $
                                                                                                                            )]
                                                                                                                        )
                                                                                                                    case 'cyclic':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['cyclic', Type_Node(
                                                                                                                                $
                                                                                                                            )]
                                                                                                                        )
                                                                                                                    case 'stack':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['stack', Type_Node(
                                                                                                                                $
                                                                                                                            )]
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return _p.au(
                                                                                                                            $[0]
                                                                                                                        )
                                                                                                                }
                                                                                                            }
                                                                                                        ),
                                                                                                    },
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                })
                                                                                            ),
                                                                                        })
                                                                                    )
                                                                                ),
                                                                            }]
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0]
                                                                        )
                                                                }
                                                            }
                                                        ),
                                                    })
                                                ),
                                                'parameters': _p_cc(
                                                    $['parameters'],
                                                    ($) => _p.optional.map(
                                                        $,
                                                        ($) => ({
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l value': _p.dictionary.map(
                                                                $,
                                                                ($, id) => ({
                                                                    'l entry': Type_Node(
                                                                        $
                                                                    ),
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                })
                                                            ),
                                                        })
                                                    )
                                                ),
                                            }]
                                        )
                                    default:
                                        return _p.au(
                                            $[0]
                                        )
                                }
                            }
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Module_Set: t_signatures.Module_Set = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l value': _p.decide.state(
                    $,
                    ($): t_out.Module_Set.l_value.D.l_entry.l_value => {
                        switch ($[0]) {
                            case 'module':
                                return _p.ss(
                                    $,
                                    ($) => ['module', Module(
                                        $
                                    )]
                                )
                            case 'set':
                                return _p.ss(
                                    $,
                                    ($) => ['set', Module_Set(
                                        $
                                    )]
                                )
                            default:
                                return _p.au(
                                    $[0]
                                )
                        }
                    }
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Type_Reference: t_signatures.Type_Reference = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': _p.decide.state(
        $,
        ($): t_out.Type_Reference.l_value => {
            switch ($[0]) {
                case 'import':
                    return _p.ss(
                        $,
                        ($) => ['import', {
                            'import': _p_cc(
                                $['import'],
                                ($) => $
                            ),
                            'type': _p_cc(
                                $['type'],
                                ($) => $
                            ),
                        }]
                    )
                case 'local':
                    return _p.ss(
                        $,
                        ($) => ['local', $]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})

export const Type_Node: t_signatures.Type_Node = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l value': _p.decide.state(
        $,
        ($): t_out.Type_Node.l_value => {
            switch ($[0]) {
                case 'boolean':
                    return _p.ss(
                        $,
                        ($) => ['boolean', null]
                    )
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ['component', {
                            'location': _p_cc(
                                $['location'],
                                ($) => Type_Reference(
                                    $
                                )
                            ),
                        }]
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', Type_Node(
                            $
                        )]
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': Type_Node(
                                        $
                                    ),
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                })
                            ),
                        }]
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ['list', Type_Node(
                            $
                        )]
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null]
                    )
                case 'number':
                    return _p.ss(
                        $,
                        ($) => ['number', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.decide.state(
                                $,
                                ($): t_out.Type_Node.l_value.number_.l_value => {
                                    switch ($[0]) {
                                        case 'exact':
                                            return _p.ss(
                                                $,
                                                ($) => ['exact', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l value': _p.decide.state(
                                                        $,
                                                        ($): t_out.Type_Node.l_value.number_.l_value.exact.l_value => {
                                                            switch ($[0]) {
                                                                case 'natural':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['natural', null]
                                                                    )
                                                                case 'integer':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['integer', null]
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    ),
                                                }]
                                            )
                                        case 'approximation':
                                            return _p.ss(
                                                $,
                                                ($) => ['approximation', null]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
                        }]
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', Type_Node(
                            $
                        )]
                    )
                case 'reference':
                    return _p.ss(
                        $,
                        ($) => ['reference', {
                            'location': _p_cc(
                                $['location'],
                                ($) => Type_Reference(
                                    $
                                )
                            ),
                            'sub selection': _p_cc(
                                $['sub selection'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l value': _p.list.map(
                                        $,
                                        ($) => ({
                                            'l item': {
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                                'l value': _p.decide.state(
                                                    $,
                                                    ($): t_out.Type_Node.l_value.reference.sub_selection.l_value.L.l_item.l_value => {
                                                        switch ($[0]) {
                                                            case 'dictionary':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['dictionary', null]
                                                                )
                                                            case 'group':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['group', $]
                                                                )
                                                            case 'list':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['list', null]
                                                                )
                                                            case 'optional':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['optional', null]
                                                                )
                                                            case 'state':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['state', $]
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                ),
                                            },
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        })
                                    ),
                                })
                            ),
                            'cyclic': _p_cc(
                                $['cyclic'],
                                ($) => $
                            ),
                        }]
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ['state', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l value': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': Type_Node(
                                        $
                                    ),
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                })
                            ),
                        }]
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ['text', null]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})
