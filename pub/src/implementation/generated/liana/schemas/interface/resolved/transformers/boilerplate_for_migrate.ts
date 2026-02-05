    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/interface/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../../interface/generated/liana/schemas/interface/data/unresolved"
    
    export const Package_Set: t_signatures.Package_Set = ($) => ({
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
                        ($): t_out.Package_Set.l_dictionary.D.l_entry.l_state => {
                            switch ($[0]) {
                                case 'package':
                                    return _p.ss(
                                        $,
                                        ($) => ['package', Package(
                                            $,
                                        )],
                                    )
                                case 'set':
                                    return _p.ss(
                                        $,
                                        ($) => ['set', Package_Set(
                                            $,
                                        )],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    ),
                },
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
            }),
        ),
    })
    
    export const Package: t_signatures.Package = ($) => ({
        'imports': _p_change_context(
            $['imports'],
            ($) => Imports(
                $,
            ),
        ),
        'content': _p_change_context(
            $['content'],
            ($) => ({
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l state': _p.decide.state(
                    $,
                    ($): t_out.Package.content.l_state => {
                        switch ($[0]) {
                            case 'data modules':
                                return _p.ss(
                                    $,
                                    ($) => ['data modules', {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l dictionary': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': Value(
                                                    $,
                                                ),
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            }),
                                        ),
                                    }],
                                )
                            case 'functions':
                                return _p.ss(
                                    $,
                                    ($) => ['functions', {
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l dictionary': _p.dictionary.map(
                                            $,
                                            ($, id) => ({
                                                'l entry': {
                                                    'result': _p_change_context(
                                                        $['result'],
                                                        ($) => Value(
                                                            $,
                                                        ),
                                                    ),
                                                    'context': _p_change_context(
                                                        $['context'],
                                                        ($) => Value(
                                                            $,
                                                        ),
                                                    ),
                                                    'type': _p_change_context(
                                                        $['type'],
                                                        ($) => ({
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l state': _p.decide.state(
                                                                $,
                                                                ($): t_out.Package.content.l_state.functions.l_dictionary.D.l_entry.type_.l_state => {
                                                                    switch ($[0]) {
                                                                        case 'transformer':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['transformer', null],
                                                                            )
                                                                        case 'refiner':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['refiner', {
                                                                                    'error': _p_change_context(
                                                                                        $['error'],
                                                                                        ($) => _p.optional.map(
                                                                                            $,
                                                                                            ($) => Value(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                    'lookups': _p_change_context(
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
                                                                                                                ($): t_out.Package.content.l_state.functions.l_dictionary.D.l_entry.type_.l_state.refiner.lookups.O.l_dictionary.D.l_entry.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'acyclic':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['acyclic', Value(
                                                                                                                                    $,
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'cyclic':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['cyclic', Value(
                                                                                                                                    $,
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        case 'stack':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['stack', Value(
                                                                                                                                    $,
                                                                                                                                )],
                                                                                                                            )
                                                                                                                        default:
                                                                                                                            return _p.au(
                                                                                                                                $[0],
                                                                                                                            )
                                                                                                                    }
                                                                                                                },
                                                                                                            ),
                                                                                                        },
                                                                                                        'l location': {
                                                                                                            'document resource identifier': "implement me",
                                                                                                            'line': 42,
                                                                                                            'column': 42,
                                                                                                        },
                                                                                                    }),
                                                                                                ),
                                                                                            }),
                                                                                        ),
                                                                                    ),
                                                                                }],
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        }),
                                                    ),
                                                    'parameters': _p_change_context(
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
                                                                            $,
                                                                        ),
                                                                        'l location': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    }),
                                                                ),
                                                            }),
                                                        ),
                                                    ),
                                                },
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            }),
                                        ),
                                    }],
                                )
                            default:
                                return _p.au(
                                    $[0],
                                )
                        }
                    },
                ),
            }),
        ),
    })
    
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
                    'type': _p_change_context(
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
                                                ($) => ['external', $],
                                            )
                                        case 'ancestor':
                                            return _p.ss(
                                                $,
                                                ($) => ['ancestor', {
                                                    'number of steps': _p_change_context(
                                                        $['number of steps'],
                                                        ($) => $,
                                                    ),
                                                    'dependency': _p_change_context(
                                                        $['dependency'],
                                                        ($) => $,
                                                    ),
                                                }],
                                            )
                                        case 'sibling':
                                            return _p.ss(
                                                $,
                                                ($) => ['sibling', $],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }),
                    ),
                    'tail': _p_change_context(
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
                                }),
                            ),
                        }),
                    ),
                },
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
            }),
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
                            ($) => ['boolean', null],
                        )
                    case 'component':
                        return _p.ss(
                            $,
                            ($) => ['component', {
                                'location': _p_change_context(
                                    $['location'],
                                    ($) => Module_Reference(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'dictionary':
                        return _p.ss(
                            $,
                            ($) => ['dictionary', Value(
                                $,
                            )],
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
                                            $,
                                        ),
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    }),
                                ),
                            }],
                        )
                    case 'list':
                        return _p.ss(
                            $,
                            ($) => ['list', Value(
                                $,
                            )],
                        )
                    case 'nothing':
                        return _p.ss(
                            $,
                            ($) => ['nothing', null],
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
                                                                            ($) => ['natural', null],
                                                                        )
                                                                    case 'integer':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['integer', null],
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        ),
                                                    }],
                                                )
                                            case 'approximation':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['approximation', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }],
                        )
                    case 'optional':
                        return _p.ss(
                            $,
                            ($) => ['optional', Value(
                                $,
                            )],
                        )
                    case 'reference':
                        return _p.ss(
                            $,
                            ($) => ['reference', {
                                'location': _p_change_context(
                                    $['location'],
                                    ($) => Module_Reference(
                                        $,
                                    ),
                                ),
                                'sub selection': _p_change_context(
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
                                                                        ($) => ['dictionary', null],
                                                                    )
                                                                case 'group':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['group', $],
                                                                    )
                                                                case 'list':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['list', null],
                                                                    )
                                                                case 'optional':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['optional', null],
                                                                    )
                                                                case 'state':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['state', $],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                },
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                            }),
                                        ),
                                    }),
                                ),
                                'cyclic': _p_change_context(
                                    $['cyclic'],
                                    ($) => $,
                                ),
                            }],
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
                                            $,
                                        ),
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    }),
                                ),
                            }],
                        )
                    case 'text':
                        return _p.ss(
                            $,
                            ($) => ['text', null],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
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
                                'import': _p_change_context(
                                    $['import'],
                                    ($) => $,
                                ),
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'local':
                        return _p.ss(
                            $,
                            ($) => ['local', $],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    })
