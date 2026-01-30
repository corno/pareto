
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/implementation/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/implementation/data/unresolved"

import * as v_interface from "../interface/migrate_boilerplate"

export const Module: t_signatures.Module = ($) => ({
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
                ($): t_out.Module.type_.l_state => {
                    switch ($[0]) {
                        case 'serializer':
                            return _p.ss(
                                $,
                                ($) => ['serializer', null]
                            )
                        case 'deserializer':
                            return _p.ss(
                                $,
                                ($) => ['deserializer', null]
                            )
                        case 'transformer':
                            return _p.ss(
                                $,
                                ($) => ['transformer', null]
                            )
                        case 'refiner':
                            return _p.ss(
                                $,
                                ($) => ['refiner', null]
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
    'specials': _p_cc(
        $['specials'],
        ($) => ({
            'abort': _p_cc(
                $['abort'],
                ($) => $
            ),
            'change context': _p_cc(
                $['change context'],
                ($) => $
            ),
            'implement me': _p_cc(
                $['implement me'],
                ($) => $
            ),
            'iterate': _p_cc(
                $['iterate'],
                ($) => $
            ),
            'unreachable code path': _p_cc(
                $['unreachable code path'],
                ($) => $
            ),
        })
    ),
    'type imports': _p_cc(
        $['type imports'],
        ($) => v_interface.Imports(
            $
        )
    ),
    'variable imports': _p_cc(
        $['variable imports'],
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
                                    ($): t_out.Module.variable_imports.l_dictionary.D.l_entry.type_.l_state => {
                                        switch ($[0]) {
                                            case 'ancestor':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['ancestor', {
                                                        'dependency': _p_cc(
                                                            $['dependency'],
                                                            ($) => $
                                                        ),
                                                        'number of steps': _p_cc(
                                                            $['number of steps'],
                                                            ($) => $
                                                        ),
                                                    }]
                                                )
                                            case 'external':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['external', $]
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
    'algorithms': _p_cc(
        $['algorithms'],
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
                        'type': _p_cc(
                            $['type'],
                            ($) => ({
                                'import': _p_cc(
                                    $['import'],
                                    ($) => $
                                ),
                                'type': _p_cc(
                                    $['type'],
                                    ($) => $
                                ),
                            })
                        ),
                        'expression': _p_cc(
                            $['expression'],
                            ($) => Expression(
                                $
                            )
                        ),
                        'temp has abort': _p_cc(
                            $['temp has abort'],
                            ($) => $
                        ),
                        'temp has lookups': _p_cc(
                            $['temp has lookups'],
                            ($) => $
                        ),
                        'temp has parameters': _p_cc(
                            $['temp has parameters'],
                            ($) => $
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

export const Temp_Type_Node_Reference: t_signatures.Temp_Type_Node_Reference = ($) => ({
    'type': _p_cc(
        $['type'],
        ($) => ({
            'import': _p_cc(
                $['import'],
                ($) => $
            ),
            'type': _p_cc(
                $['type'],
                ($) => $
            ),
        })
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
                            ($): t_out.Temp_Type_Node_Reference.sub_selection.l_list.L.l_item.l_state => {
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
})

export const Selection: t_signatures.Selection = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Selection.l_state => {
            switch ($[0]) {
                case 'implement me':
                    return _p.ss(
                        $,
                        ($) => ['implement me', $]
                    )
                case 'regular':
                    return _p.ss(
                        $,
                        ($) => ['regular', {
                            'start': _p_cc(
                                $['start'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Selection.l_state.regular.start.l_state => {
                                            switch ($[0]) {
                                                case 'call':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['call', {
                                                            'source': _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $
                                                                )
                                                            ),
                                                            'context': _p_cc(
                                                                $['context'],
                                                                ($) => Expression(
                                                                    $
                                                                )
                                                            ),
                                                            'abort': _p_cc(
                                                                $['abort'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Expression(
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
                                                                        'l state': _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Selection.l_state.regular.start.l_state.call.lookups.O.l_state => {
                                                                                switch ($[0]) {
                                                                                    case 'initialize':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['initialize', {
                                                                                                'l location': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                                'l dictionary': _p.dictionary.map(
                                                                                                    $,
                                                                                                    ($, id) => ({
                                                                                                        'l entry': Lookup_Selection(
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
                                                                                    case 'pass through':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['pass through', null]
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        ),
                                                                    })
                                                                )
                                                            ),
                                                            'arguments': _p_cc(
                                                                $['arguments'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => ({
                                                                        'l location': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                        'l state': _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Selection.l_state.regular.start.l_state.call.arguments_.O.l_state => {
                                                                                switch ($[0]) {
                                                                                    case 'initialize':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['initialize', {
                                                                                                'l location': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                                'l dictionary': _p.dictionary.map(
                                                                                                    $,
                                                                                                    ($, id) => ({
                                                                                                        'l entry': Expression(
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
                                                                                    case 'pass through':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['pass through', null]
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        ),
                                                                    })
                                                                )
                                                            ),
                                                        }]
                                                    )
                                                case 'context':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['context', null]
                                                    )
                                                case 'entry':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['entry', {
                                                            'dictionary': _p_cc(
                                                                $['dictionary'],
                                                                ($) => Selection(
                                                                    $
                                                                )
                                                            ),
                                                            'id': _p_cc(
                                                                $['id'],
                                                                ($) => Expression(
                                                                    $
                                                                )
                                                            ),
                                                            'abort handler': _p_cc(
                                                                $['abort handler'],
                                                                ($) => Expression(
                                                                    $
                                                                )
                                                            ),
                                                        }]
                                                    )
                                                case 'variable':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['variable', {
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l state': _p.decide.state(
                                                                $,
                                                                ($): t_out.Selection.l_state.regular.start.l_state.variable.l_state => {
                                                                    switch ($[0]) {
                                                                        case 'local':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['local', $]
                                                                            )
                                                                        case 'imported':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['imported', {
                                                                                    'import': _p_cc(
                                                                                        $['import'],
                                                                                        ($) => $
                                                                                    ),
                                                                                    'variable': _p_cc(
                                                                                        $['variable'],
                                                                                        ($) => $
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
                                                        }]
                                                    )
                                                case 'parameter':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['parameter', $]
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

export const Expression: t_signatures.Expression = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Expression.l_state => {
            switch ($[0]) {
                case 'decide':
                    return _p.ss(
                        $,
                        ($) => ['decide', {
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
                                        ($): t_out.Expression.l_state.decide.type_.l_state => {
                                            switch ($[0]) {
                                                case 'boolean':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['boolean', {
                                                            'source': _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $
                                                                )
                                                            ),
                                                            'temp resulting node': _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'if false': _p_cc(
                                                                $['if false'],
                                                                ($) => Expression(
                                                                    $
                                                                )
                                                            ),
                                                            'if true': _p_cc(
                                                                $['if true'],
                                                                ($) => Expression(
                                                                    $
                                                                )
                                                            ),
                                                        }]
                                                    )
                                                case 'dictionary':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['dictionary', {
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l state': _p.decide.state(
                                                                $,
                                                                ($): t_out.Expression.l_state.decide.type_.l_state.dictionary.l_state => {
                                                                    switch ($[0]) {
                                                                        case 'has entries':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has entries', {
                                                                                    'dictionary': _p_cc(
                                                                                        $['dictionary'],
                                                                                        ($) => Selection(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if true': _p_cc(
                                                                                        $['if true'],
                                                                                        ($) => Expression(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if false': _p_cc(
                                                                                        $['if false'],
                                                                                        ($) => Expression(
                                                                                            $
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
                                                        }]
                                                    )
                                                case 'list':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['list', {
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l state': _p.decide.state(
                                                                $,
                                                                ($): t_out.Expression.l_state.decide.type_.l_state.list.l_state => {
                                                                    switch ($[0]) {
                                                                        case 'has first item':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has first item', {
                                                                                    'list': _p_cc(
                                                                                        $['list'],
                                                                                        ($) => Selection(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if true': _p_cc(
                                                                                        $['if true'],
                                                                                        ($) => Expression(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if false': _p_cc(
                                                                                        $['if false'],
                                                                                        ($) => Expression(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                }]
                                                                            )
                                                                        case 'has last item':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has last item', {
                                                                                    'list': _p_cc(
                                                                                        $['list'],
                                                                                        ($) => Selection(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if true': _p_cc(
                                                                                        $['if true'],
                                                                                        ($) => Expression(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if false': _p_cc(
                                                                                        $['if false'],
                                                                                        ($) => Expression(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                }]
                                                                            )
                                                                        case 'has items':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has items', {
                                                                                    'list': _p_cc(
                                                                                        $['list'],
                                                                                        ($) => Selection(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if true': _p_cc(
                                                                                        $['if true'],
                                                                                        ($) => Expression(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'if false': _p_cc(
                                                                                        $['if false'],
                                                                                        ($) => Expression(
                                                                                            $
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
                                                        }]
                                                    )
                                                case 'optional':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['optional', {
                                                            'source': _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $
                                                                )
                                                            ),
                                                            'temp resulting node': _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'if not set': _p_cc(
                                                                $['if not set'],
                                                                ($) => Expression(
                                                                    $
                                                                )
                                                            ),
                                                            'if set': _p_cc(
                                                                $['if set'],
                                                                ($) => Expression(
                                                                    $
                                                                )
                                                            ),
                                                        }]
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['state', {
                                                            'source': _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $
                                                                )
                                                            ),
                                                            'temp resulting node': _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $
                                                                    )
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
                                                                        ($): t_out.Expression.l_state.decide.type_.l_state.state.type_.l_state => {
                                                                            switch ($[0]) {
                                                                                case 'partial':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['partial', {
                                                                                            'options': _p_cc(
                                                                                                $['options'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l dictionary': _p.dictionary.map(
                                                                                                        $,
                                                                                                        ($, id) => ({
                                                                                                            'l entry': Expression(
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
                                                                                            ),
                                                                                            'default': _p_cc(
                                                                                                $['default'],
                                                                                                ($) => Expression(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }]
                                                                                    )
                                                                                case 'full':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['full', {
                                                                                            'options': _p_cc(
                                                                                                $['options'],
                                                                                                ($) => ({
                                                                                                    'l location': {
                                                                                                        'document resource identifier': "implement me",
                                                                                                        'line': 42,
                                                                                                        'column': 42,
                                                                                                    },
                                                                                                    'l dictionary': _p.dictionary.map(
                                                                                                        $,
                                                                                                        ($, id) => ({
                                                                                                            'l entry': Expression(
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
                                                        }]
                                                    )
                                                case 'text':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['text', {
                                                            'source': _p_cc(
                                                                $['source'],
                                                                ($) => Selection(
                                                                    $
                                                                )
                                                            ),
                                                            'temp resulting node': _p_cc(
                                                                $['temp resulting node'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Temp_Type_Node_Reference(
                                                                        $
                                                                    )
                                                                )
                                                            ),
                                                            'cases': _p_cc(
                                                                $['cases'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l dictionary': _p.dictionary.map(
                                                                        $,
                                                                        ($, id) => ({
                                                                            'l entry': Expression(
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
                                                            ),
                                                            'default': _p_cc(
                                                                $['default'],
                                                                ($) => Expression(
                                                                    $
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
                        }]
                    )
                case 'initialize':
                    return _p.ss(
                        $,
                        ($) => ['initialize', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Expression.l_state.initialize.l_state => {
                                    switch ($[0]) {
                                        case 'boolean':
                                            return _p.ss(
                                                $,
                                                ($) => ['boolean', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Expression.l_state.initialize.l_state.boolean_.l_state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l state': _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Expression.l_state.initialize.l_state.boolean_.l_state.literal.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'false':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['false', null]
                                                                                            )
                                                                                        case 'true':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['true', null]
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
                                                                case 'not':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['not', Selection(
                                                                            $
                                                                        )]
                                                                    )
                                                                case 'copy':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['copy', Selection(
                                                                            $
                                                                        )]
                                                                    )
                                                                case 'dictionary is empty':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['dictionary is empty', Selection(
                                                                            $
                                                                        )]
                                                                    )
                                                                case 'list is empty':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['list is empty', Selection(
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
                                                }]
                                            )
                                        case 'dictionary':
                                            return _p.ss(
                                                $,
                                                ($) => ['dictionary', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Expression.l_state.initialize.l_state.dictionary.l_state => {
                                                            switch ($[0]) {
                                                                case 'filter':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['filter', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'entry handler': _p_cc(
                                                                                $['entry handler'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'from list':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from list', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'get id': _p_cc(
                                                                                $['get id'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'get entry': _p_cc(
                                                                                $['get entry'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'abort': _p_cc(
                                                                                $['abort'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l dictionary': _p.dictionary.map(
                                                                                $,
                                                                                ($, id) => ({
                                                                                    'l entry': Expression(
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
                                                                case 'map':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['map', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'entry handler': _p_cc(
                                                                                $['entry handler'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'resolve':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['resolve', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'entry handler': _p_cc(
                                                                                $['entry handler'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'temp resulting entry node': _p_cc(
                                                                                $['temp resulting entry node'],
                                                                                ($) => Temp_Type_Node_Reference(
                                                                                    $
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
                                                }]
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
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Expression.l_state.initialize.l_state.group.l_state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l dictionary': _p.dictionary.map(
                                                                                $,
                                                                                ($, id) => ({
                                                                                    'l entry': Expression(
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
                                                                case 'resolve':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['resolve', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l dictionary': _p.dictionary.map(
                                                                                $,
                                                                                ($, id) => ({
                                                                                    'l entry': Expression(
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
                                                                default:
                                                                    return _p.au(
                                                                        $[0]
                                                                    )
                                                            }
                                                        }
                                                    ),
                                                }]
                                            )
                                        case 'list':
                                            return _p.ss(
                                                $,
                                                ($) => ['list', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Expression.l_state.initialize.l_state.list.l_state => {
                                                            switch ($[0]) {
                                                                case 'filter':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['filter', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'entry handler': _p_cc(
                                                                                $['entry handler'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'from dictionary':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from dictionary', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'get item': _p_cc(
                                                                                $['get item'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l list': _p.list.map(
                                                                                $,
                                                                                ($) => ({
                                                                                    'l item': Expression(
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
                                                                case 'map':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['map', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'item handler': _p_cc(
                                                                                $['item handler'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'map with state':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['map with state', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'initial state': _p_cc(
                                                                                $['initial state'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'item handler': _p_cc(
                                                                                $['item handler'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'update state': _p_cc(
                                                                                $['update state'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'wrap up': _p_cc(
                                                                                $['wrap up'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'reduce':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['reduce', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'initial state': _p_cc(
                                                                                $['initial state'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'item handler': _p_cc(
                                                                                $['item handler'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'reverse':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['reverse', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
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
                                                }]
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
                                                        ($): t_out.Expression.l_state.initialize.l_state.number_.l_state => {
                                                            switch ($[0]) {
                                                                case 'approximation':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['approximation', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l state': _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Expression.l_state.initialize.l_state.number_.l_state.approximation.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['literal', $]
                                                                                            )
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['copy', Selection(
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
                                                                        }]
                                                                    )
                                                                case 'integer':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['integer', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l state': _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Expression.l_state.initialize.l_state.number_.l_state.integer.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['copy', Selection(
                                                                                                    $
                                                                                                )]
                                                                                            )
                                                                                        case 'divide':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['divide', {
                                                                                                    'divident': _p_cc(
                                                                                                        $['divident'],
                                                                                                        ($) => Selection(
                                                                                                            $
                                                                                                        )
                                                                                                    ),
                                                                                                    'divisor': _p_cc(
                                                                                                        $['divisor'],
                                                                                                        ($) => Selection(
                                                                                                            $
                                                                                                        )
                                                                                                    ),
                                                                                                    'abort': _p_cc(
                                                                                                        $['abort'],
                                                                                                        ($) => Expression(
                                                                                                            $
                                                                                                        )
                                                                                                    ),
                                                                                                }]
                                                                                            )
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['literal', $]
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
                                                                case 'natural':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['natural', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l state': _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Expression.l_state.initialize.l_state.number_.l_state.natural.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['literal', $]
                                                                                            )
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['copy', Selection(
                                                                                                    $
                                                                                                )]
                                                                                            )
                                                                                        case 'number of dictionary entries':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['number of dictionary entries', {
                                                                                                    'dictionary': _p_cc(
                                                                                                        $['dictionary'],
                                                                                                        ($) => Selection(
                                                                                                            $
                                                                                                        )
                                                                                                    ),
                                                                                                }]
                                                                                            )
                                                                                        case 'number of list items':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['number of list items', {
                                                                                                    'list': _p_cc(
                                                                                                        $['list'],
                                                                                                        ($) => Selection(
                                                                                                            $
                                                                                                        )
                                                                                                    ),
                                                                                                }]
                                                                                            )
                                                                                        case 'source column':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['source column', null]
                                                                                            )
                                                                                        case 'source line':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['source line', null]
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
                                                ($) => ['optional', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Expression.l_state.initialize.l_state.optional.l_state => {
                                                            switch ($[0]) {
                                                                case 'from boolean':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from boolean', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'get set': _p_cc(
                                                                                $['get set'],
                                                                                ($) => Expression(
                                                                                    $
                                                                                )
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'l location': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                            'l state': _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Expression.l_state.initialize.l_state.optional.l_state.literal.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'not set':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['not set', null]
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['set', Expression(
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
                                                                        }]
                                                                    )
                                                                case 'map':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['map', {
                                                                            'source': _p_cc(
                                                                                $['source'],
                                                                                ($) => Selection(
                                                                                    $
                                                                                )
                                                                            ),
                                                                            'set handler': _p_cc(
                                                                                $['set handler'],
                                                                                ($) => Expression(
                                                                                    $
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
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Expression.l_state.initialize.l_state.state.l_state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'option': _p_cc(
                                                                                $['option'],
                                                                                ($) => $
                                                                            ),
                                                                            'value': _p_cc(
                                                                                $['value'],
                                                                                ($) => Expression(
                                                                                    $
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
                                                }]
                                            )
                                        case 'text':
                                            return _p.ss(
                                                $,
                                                ($) => ['text', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l state': _p.decide.state(
                                                        $,
                                                        ($): t_out.Expression.l_state.initialize.l_state.text.l_state => {
                                                            switch ($[0]) {
                                                                case 'copy':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['copy', Selection(
                                                                            $
                                                                        )]
                                                                    )
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
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
                                                                                        ($): t_out.Expression.l_state.initialize.l_state.text.l_state.literal.type_.l_state => {
                                                                                            switch ($[0]) {
                                                                                                case 'identifier':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ['identifier', null]
                                                                                                    )
                                                                                                case 'freeform':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ['freeform', null]
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
                                                                            'value': _p_cc(
                                                                                $['value'],
                                                                                ($) => $
                                                                            ),
                                                                        }]
                                                                    )
                                                                case 'source document':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['source document', null]
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
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
                        }]
                    )
                case 'select':
                    return _p.ss(
                        $,
                        ($) => ['select', Selection(
                            $
                        )]
                    )
                case 'special':
                    return _p.ss(
                        $,
                        ($) => ['special', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Expression.l_state.special.l_state => {
                                    switch ($[0]) {
                                        case 'abort':
                                            return _p.ss(
                                                $,
                                                ($) => ['abort', Expression(
                                                    $
                                                )]
                                            )
                                        case 'assert':
                                            return _p.ss(
                                                $,
                                                ($) => ['assert', {
                                                    'tester': _p_cc(
                                                        $['tester'],
                                                        ($) => Expression(
                                                            $
                                                        )
                                                    ),
                                                    'normal flow': _p_cc(
                                                        $['normal flow'],
                                                        ($) => Expression(
                                                            $
                                                        )
                                                    ),
                                                }]
                                            )
                                        case 'block':
                                            return _p.ss(
                                                $,
                                                ($) => ['block', {
                                                    'variables': _p_cc(
                                                        $['variables'],
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
                                                                        'type': _p_cc(
                                                                            $['type'],
                                                                            ($) => _p.optional.map(
                                                                                $,
                                                                                ($) => Temp_Type_Node_Reference(
                                                                                    $
                                                                                )
                                                                            )
                                                                        ),
                                                                        'expression': _p_cc(
                                                                            $['expression'],
                                                                            ($) => Expression(
                                                                                $
                                                                            )
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
                                                    'temp ordered variables': _p_cc(
                                                        $['temp ordered variables'],
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
                                                                        'name': _p_cc(
                                                                            $['name'],
                                                                            ($) => $
                                                                        ),
                                                                        'type': _p_cc(
                                                                            $['type'],
                                                                            ($) => _p.optional.map(
                                                                                $,
                                                                                ($) => Temp_Type_Node_Reference(
                                                                                    $
                                                                                )
                                                                            )
                                                                        ),
                                                                        'expression': _p_cc(
                                                                            $['expression'],
                                                                            ($) => Expression(
                                                                                $
                                                                            )
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
                                                    'expression': _p_cc(
                                                        $['expression'],
                                                        ($) => Expression(
                                                            $
                                                        )
                                                    ),
                                                }]
                                            )
                                        case 'change context':
                                            return _p.ss(
                                                $,
                                                ($) => ['change context', {
                                                    'new context': _p_cc(
                                                        $['new context'],
                                                        ($) => Selection(
                                                            $
                                                        )
                                                    ),
                                                    'expression': _p_cc(
                                                        $['expression'],
                                                        ($) => Expression(
                                                            $
                                                        )
                                                    ),
                                                }]
                                            )
                                        case 'implement me':
                                            return _p.ss(
                                                $,
                                                ($) => ['implement me', $]
                                            )
                                        case 'iterate':
                                            return _p.ss(
                                                $,
                                                ($) => ['iterate', {
                                                    'list': _p_cc(
                                                        $['list'],
                                                        ($) => Selection(
                                                            $
                                                        )
                                                    ),
                                                    'handler': _p_cc(
                                                        $['handler'],
                                                        ($) => Expression(
                                                            $
                                                        )
                                                    ),
                                                }]
                                            )
                                        case 'unreachable':
                                            return _p.ss(
                                                $,
                                                ($) => ['unreachable', null]
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
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})

export const Lookup_Selection: t_signatures.Lookup_Selection = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Lookup_Selection.l_state => {
            switch ($[0]) {
                case 'implement me':
                    return _p.ss(
                        $,
                        ($) => ['implement me', $]
                    )
                case 'from resolved dictionary':
                    return _p.ss(
                        $,
                        ($) => ['from resolved dictionary', Selection(
                            $
                        )]
                    )
                case 'from siblings':
                    return _p.ss(
                        $,
                        ($) => ['from siblings', {
                            'cycles allowed': _p_cc(
                                $['cycles allowed'],
                                ($) => $
                            ),
                        }]
                    )
                case 'from parameter':
                    return _p.ss(
                        $,
                        ($) => ['from parameter', $]
                    )
                case 'not set':
                    return _p.ss(
                        $,
                        ($) => ['not set', null]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})
