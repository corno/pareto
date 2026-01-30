
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
    'l dictionary': _p.dictionary.map(
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
                        'l state': _p.decide.state(
                            $,
                            ($): t_out.Imports.l_dictionary.D.l_entry.type_.l_state => {
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
                        'l list': _p.list.map(
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
            'l dictionary': _p.dictionary.map(
                $,
                ($, id) => ({
                    'l entry': {
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l state': _p.decide.state(
                            $,
                            ($): t_out.Module.types.l_dictionary.D.l_entry.l_state => {
                                switch ($[0]) {
                                    case 'data':
                                        return _p.ss(
                                            $,
                                            ($) => ['data', Value(
                                                $
                                            )]
                                        )
                                    case 'algorithm':
                                        return _p.ss(
                                            $,
                                            ($) => ['algorithm', {
                                                'result': _p_cc(
                                                    $['result'],
                                                    ($) => Value(
                                                        $
                                                    )
                                                ),
                                                'context': _p_cc(
                                                    $['context'],
                                                    ($) => Value(
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
                                                        'l state': _p.decide.state(
                                                            $,
                                                            ($): t_out.Module.types.l_dictionary.D.l_entry.l_state.algorithm.type_.l_state => {
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
                                                                                        ($) => Value(
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
                                                                                            'l dictionary': _p.dictionary.map(
                                                                                                $,
                                                                                                ($, id) => ({
                                                                                                    'l entry': {
                                                                                                        'l location': {
                                                                                                            'document resource identifier': "implement me",
                                                                                                            'line': 42,
                                                                                                            'column': 42,
                                                                                                        },
                                                                                                        'l state': _p.decide.state(
                                                                                                            $,
                                                                                                            ($): t_out.Module.types.l_dictionary.D.l_entry.l_state.algorithm.type_.l_state.refiner.lookups.O.l_dictionary.D.l_entry.l_state => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'acyclic':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['acyclic', Value(
                                                                                                                                $
                                                                                                                            )]
                                                                                                                        )
                                                                                                                    case 'cyclic':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['cyclic', Value(
                                                                                                                                $
                                                                                                                            )]
                                                                                                                        )
                                                                                                                    case 'stack':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['stack', Value(
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
                                                            'l dictionary': _p.dictionary.map(
                                                                $,
                                                                ($, id) => ({
                                                                    'l entry': Value(
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
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l state': _p.decide.state(
                    $,
                    ($): t_out.Module_Set.l_dictionary.D.l_entry.l_state => {
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

export const Module_Reference: t_signatures.Module_Reference = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Module_Reference.l_state => {
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

export const Value: t_signatures.Value = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Value.l_state => {
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
                                ($) => Module_Reference(
                                    $
                                )
                            ),
                        }]
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', Value(
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
                            'l dictionary': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': Value(
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
                        ($) => ['list', Value(
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
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Value.l_state.number_.l_state => {
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
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Value.l_state.number_.l_state.exact.l_state => {
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
                        ($) => ['optional', Value(
                            $
                        )]
                    )
                case 'reference':
                    return _p.ss(
                        $,
                        ($) => ['reference', {
                            'location': _p_cc(
                                $['location'],
                                ($) => Module_Reference(
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
                                    'l list': _p.list.map(
                                        $,
                                        ($) => ({
                                            'l item': {
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                                'l state': _p.decide.state(
                                                    $,
                                                    ($): t_out.Value.l_state.reference.sub_selection.l_list.L.l_item.l_state => {
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
                            'l dictionary': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': Value(
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
