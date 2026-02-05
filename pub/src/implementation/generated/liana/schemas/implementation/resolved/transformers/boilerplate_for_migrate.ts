    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/implementation/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../../interface/generated/liana/schemas/implementation/data/unresolved"
    
    import * as v_interface from "../../../interface/resolved/transformers/boilerplate_for_migrate"
    
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
        'specials': _p_change_context(
            $['specials'],
            ($) => ({
                'abort': _p_change_context(
                    $['abort'],
                    ($) => $,
                ),
                'change context': _p_change_context(
                    $['change context'],
                    ($) => $,
                ),
                'implement me': _p_change_context(
                    $['implement me'],
                    ($) => $,
                ),
                'iterate': _p_change_context(
                    $['iterate'],
                    ($) => $,
                ),
                'lookups': _p_change_context(
                    $['lookups'],
                    ($) => $,
                ),
                'list from text': _p_change_context(
                    $['list from text'],
                    ($) => $,
                ),
                'text from list': _p_change_context(
                    $['text from list'],
                    ($) => $,
                ),
                'unreachable code path': _p_change_context(
                    $['unreachable code path'],
                    ($) => $,
                ),
                'variables': _p_change_context(
                    $['variables'],
                    ($) => $,
                ),
            }),
        ),
        'type imports': _p_change_context(
            $['type imports'],
            ($) => v_interface.Imports(
                $,
            ),
        ),
        'variable imports': _p_change_context(
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
                                        ($): t_out.Package.variable_imports.l_dictionary.D.l_entry.type_.l_state => {
                                            switch ($[0]) {
                                                case 'ancestor':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['ancestor', {
                                                            'dependency': _p_change_context(
                                                                $['dependency'],
                                                                ($) => $,
                                                            ),
                                                            'number of steps': _p_change_context(
                                                                $['number of steps'],
                                                                ($) => $,
                                                            ),
                                                        }],
                                                    )
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['external', $],
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
        'functions': _p_change_context(
            $['functions'],
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
                            'type': _p_change_context(
                                $['type'],
                                ($) => ({
                                    'import': _p_change_context(
                                        $['import'],
                                        ($) => $,
                                    ),
                                    'type': _p_change_context(
                                        $['type'],
                                        ($) => $,
                                    ),
                                }),
                            ),
                            'expression': _p_change_context(
                                $['expression'],
                                ($) => Expression(
                                    $,
                                ),
                            ),
                            'temp has abort': _p_change_context(
                                $['temp has abort'],
                                ($) => $,
                            ),
                            'temp has lookups': _p_change_context(
                                $['temp has lookups'],
                                ($) => $,
                            ),
                            'temp has parameters': _p_change_context(
                                $['temp has parameters'],
                                ($) => $,
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
    })
    
    export const Temp_Value_Type_Specification: t_signatures.Temp_Value_Type_Specification = ($) => ({
        'type': _p_change_context(
            $['type'],
            ($) => ({
                'import': _p_change_context(
                    $['import'],
                    ($) => $,
                ),
                'type': _p_change_context(
                    $['type'],
                    ($) => $,
                ),
            }),
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
                                ($): t_out.Temp_Value_Type_Specification.sub_selection.l_list.L.l_item.l_state => {
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
                                            ($): t_out.Expression.l_state.decide.type_.l_state => {
                                                switch ($[0]) {
                                                    case 'boolean':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['boolean', {
                                                                'source': _p_change_context(
                                                                    $['source'],
                                                                    ($) => Value_Selection(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'temp resulting node': _p_change_context(
                                                                    $['temp resulting node'],
                                                                    ($) => _p.optional.map(
                                                                        $,
                                                                        ($) => Temp_Value_Type_Specification(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'if false': _p_change_context(
                                                                    $['if false'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'if true': _p_change_context(
                                                                    $['if true'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }],
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
                                                                                        'dictionary': _p_change_context(
                                                                                            $['dictionary'],
                                                                                            ($) => Value_Selection(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if true': _p_change_context(
                                                                                            $['if true'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if false': _p_change_context(
                                                                                            $['if false'],
                                                                                            ($) => Expression(
                                                                                                $,
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
                                                            }],
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
                                                                                        'list': _p_change_context(
                                                                                            $['list'],
                                                                                            ($) => Value_Selection(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if true': _p_change_context(
                                                                                            $['if true'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if false': _p_change_context(
                                                                                            $['if false'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'has last item':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['has last item', {
                                                                                        'list': _p_change_context(
                                                                                            $['list'],
                                                                                            ($) => Value_Selection(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if true': _p_change_context(
                                                                                            $['if true'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if false': _p_change_context(
                                                                                            $['if false'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'has items':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['has items', {
                                                                                        'list': _p_change_context(
                                                                                            $['list'],
                                                                                            ($) => Value_Selection(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if true': _p_change_context(
                                                                                            $['if true'],
                                                                                            ($) => Expression(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'if false': _p_change_context(
                                                                                            $['if false'],
                                                                                            ($) => Expression(
                                                                                                $,
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
                                                            }],
                                                        )
                                                    case 'optional':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['optional', {
                                                                'source': _p_change_context(
                                                                    $['source'],
                                                                    ($) => Value_Selection(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'temp resulting node': _p_change_context(
                                                                    $['temp resulting node'],
                                                                    ($) => _p.optional.map(
                                                                        $,
                                                                        ($) => Temp_Value_Type_Specification(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'if not set': _p_change_context(
                                                                    $['if not set'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'if set': _p_change_context(
                                                                    $['if set'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }],
                                                        )
                                                    case 'state':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['state', {
                                                                'source': _p_change_context(
                                                                    $['source'],
                                                                    ($) => Value_Selection(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'temp resulting node': _p_change_context(
                                                                    $['temp resulting node'],
                                                                    ($) => _p.optional.map(
                                                                        $,
                                                                        ($) => Temp_Value_Type_Specification(
                                                                            $,
                                                                        ),
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
                                                                            ($): t_out.Expression.l_state.decide.type_.l_state.state.type_.l_state => {
                                                                                switch ($[0]) {
                                                                                    case 'partial':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['partial', {
                                                                                                'options': _p_change_context(
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
                                                                                                'default': _p_change_context(
                                                                                                    $['default'],
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                    case 'full':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['full', {
                                                                                                'options': _p_change_context(
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
                                                                                            }],
                                                                                        )
                                                                                    case 'single':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['single', {
                                                                                                'option': _p_change_context(
                                                                                                    $['option'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'if true': _p_change_context(
                                                                                                    $['if true'],
                                                                                                    ($) => Expression(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                'if false': _p_change_context(
                                                                                                    $['if false'],
                                                                                                    ($) => Expression(
                                                                                                        $,
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
                                                            }],
                                                        )
                                                    case 'text':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['text', {
                                                                'source': _p_change_context(
                                                                    $['source'],
                                                                    ($) => Value_Selection(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'temp resulting node': _p_change_context(
                                                                    $['temp resulting node'],
                                                                    ($) => _p.optional.map(
                                                                        $,
                                                                        ($) => Temp_Value_Type_Specification(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'cases': _p_change_context(
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
                                                                'default': _p_change_context(
                                                                    $['default'],
                                                                    ($) => Expression(
                                                                        $,
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
                            }],
                        )
                    case 'assign':
                        return _p.ss(
                            $,
                            ($) => ['assign', {
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Expression.l_state.assign.l_state => {
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
                                                            ($): t_out.Expression.l_state.assign.l_state.boolean_.l_state => {
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
                                                                                    ($): t_out.Expression.l_state.assign.l_state.boolean_.l_state.literal.l_state => {
                                                                                        switch ($[0]) {
                                                                                            case 'false':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['false', null],
                                                                                                )
                                                                                            case 'true':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['true', null],
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
                                                                    case 'not':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['not', Value_Selection(
                                                                                $,
                                                                            )],
                                                                        )
                                                                    case 'copy':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['copy', Value_Selection(
                                                                                $,
                                                                            )],
                                                                        )
                                                                    case 'dictionary is empty':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['dictionary is empty', Value_Selection(
                                                                                $,
                                                                            )],
                                                                        )
                                                                    case 'list is empty':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['list is empty', Value_Selection(
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
                                                    }],
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
                                                            ($): t_out.Expression.l_state.assign.l_state.dictionary.l_state => {
                                                                switch ($[0]) {
                                                                    case 'filter':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['filter', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'entry handler': _p_change_context(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'from list':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['from list', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'get id': _p_change_context(
                                                                                    $['get id'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'get entry': _p_change_context(
                                                                                    $['get entry'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'abort': _p_change_context(
                                                                                    $['abort'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
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
                                                                    case 'map':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['map', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'entry handler': _p_change_context(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'resolve':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['resolve', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'entry handler': _p_change_context(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'temp resulting entry node': _p_change_context(
                                                                                    $['temp resulting entry node'],
                                                                                    ($) => Temp_Value_Type_Specification(
                                                                                        $,
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
                                                    }],
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
                                                            ($): t_out.Expression.l_state.assign.l_state.group.l_state => {
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
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        ),
                                                    }],
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
                                                            ($): t_out.Expression.l_state.assign.l_state.list.l_state => {
                                                                switch ($[0]) {
                                                                    case 'filter':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['filter', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'entry handler': _p_change_context(
                                                                                    $['entry handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'from dictionary':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['from dictionary', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'get item': _p_change_context(
                                                                                    $['get item'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
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
                                                                    case 'map':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['map', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'item handler': _p_change_context(
                                                                                    $['item handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'map with state':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['map with state', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'initial state': _p_change_context(
                                                                                    $['initial state'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'item handler': _p_change_context(
                                                                                    $['item handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'update state': _p_change_context(
                                                                                    $['update state'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'wrap up': _p_change_context(
                                                                                    $['wrap up'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'reduce':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['reduce', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'initial state': _p_change_context(
                                                                                    $['initial state'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'item handler': _p_change_context(
                                                                                    $['item handler'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'reverse':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['reverse', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
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
                                                    }],
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
                                                            ($): t_out.Expression.l_state.assign.l_state.number_.l_state => {
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
                                                                                    ($): t_out.Expression.l_state.assign.l_state.number_.l_state.approximation.l_state => {
                                                                                        switch ($[0]) {
                                                                                            case 'literal':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['literal', $],
                                                                                                )
                                                                                            case 'copy':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['copy', Value_Selection(
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
                                                                            }],
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
                                                                                    ($): t_out.Expression.l_state.assign.l_state.number_.l_state.integer.l_state => {
                                                                                        switch ($[0]) {
                                                                                            case 'copy':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['copy', Value_Selection(
                                                                                                        $,
                                                                                                    )],
                                                                                                )
                                                                                            case 'divide':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['divide', {
                                                                                                        'divident': _p_change_context(
                                                                                                            $['divident'],
                                                                                                            ($) => Value_Selection(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        'divisor': _p_change_context(
                                                                                                            $['divisor'],
                                                                                                            ($) => Value_Selection(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        'abort': _p_change_context(
                                                                                                            $['abort'],
                                                                                                            ($) => Expression(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                            case 'literal':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['literal', $],
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
                                                                                    ($): t_out.Expression.l_state.assign.l_state.number_.l_state.natural.l_state => {
                                                                                        switch ($[0]) {
                                                                                            case 'literal':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['literal', $],
                                                                                                )
                                                                                            case 'copy':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['copy', Value_Selection(
                                                                                                        $,
                                                                                                    )],
                                                                                                )
                                                                                            case 'number of dictionary entries':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['number of dictionary entries', {
                                                                                                        'dictionary': _p_change_context(
                                                                                                            $['dictionary'],
                                                                                                            ($) => Value_Selection(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                            case 'number of list items':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['number of list items', {
                                                                                                        'list': _p_change_context(
                                                                                                            $['list'],
                                                                                                            ($) => Value_Selection(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    }],
                                                                                                )
                                                                                            case 'source column':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['source column', null],
                                                                                                )
                                                                                            case 'source line':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['source line', null],
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
                                                    ($) => ['optional', {
                                                        'l location': {
                                                            'document resource identifier': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                        'l state': _p.decide.state(
                                                            $,
                                                            ($): t_out.Expression.l_state.assign.l_state.optional.l_state => {
                                                                switch ($[0]) {
                                                                    case 'from boolean':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['from boolean', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'get set': _p_change_context(
                                                                                    $['get set'],
                                                                                    ($) => Expression(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
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
                                                                                    ($): t_out.Expression.l_state.assign.l_state.optional.l_state.literal.l_state => {
                                                                                        switch ($[0]) {
                                                                                            case 'not set':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['not set', null],
                                                                                                )
                                                                                            case 'set':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['set', Expression(
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
                                                                            }],
                                                                        )
                                                                    case 'map':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['map', {
                                                                                'source': _p_change_context(
                                                                                    $['source'],
                                                                                    ($) => Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'set handler': _p_change_context(
                                                                                    $['set handler'],
                                                                                    ($) => Expression(
                                                                                        $,
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
                                                        'l state': _p.decide.state(
                                                            $,
                                                            ($): t_out.Expression.l_state.assign.l_state.state.l_state => {
                                                                switch ($[0]) {
                                                                    case 'literal':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['literal', {
                                                                                'option': _p_change_context(
                                                                                    $['option'],
                                                                                    ($) => $,
                                                                                ),
                                                                                'value': _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => Expression(
                                                                                        $,
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
                                                    }],
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
                                                            ($): t_out.Expression.l_state.assign.l_state.text.l_state => {
                                                                switch ($[0]) {
                                                                    case 'copy':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['copy', Value_Selection(
                                                                                $,
                                                                            )],
                                                                        )
                                                                    case 'literal':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['literal', {
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
                                                                                            ($): t_out.Expression.l_state.assign.l_state.text.l_state.literal.type_.l_state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'identifier':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['identifier', null],
                                                                                                        )
                                                                                                    case 'freeform':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['freeform', null],
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
                                                                                'value': _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => $,
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'source document':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['source document', null],
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
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }],
                        )
                    case 'select':
                        return _p.ss(
                            $,
                            ($) => ['select', Value_Selection(
                                $,
                            )],
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
                                                        $,
                                                    )],
                                                )
                                            case 'assert':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['assert', {
                                                        'tester': _p_change_context(
                                                            $['tester'],
                                                            ($) => Expression(
                                                                $,
                                                            ),
                                                        ),
                                                        'normal flow': _p_change_context(
                                                            $['normal flow'],
                                                            ($) => Expression(
                                                                $,
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            case 'change context':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['change context', {
                                                        'new context': _p_change_context(
                                                            $['new context'],
                                                            ($) => Value_Selection(
                                                                $,
                                                            ),
                                                        ),
                                                        'expression': _p_change_context(
                                                            $['expression'],
                                                            ($) => Expression(
                                                                $,
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            case 'variables':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['variables', {
                                                        'variables': _p_change_context(
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
                                                                        'l entry': Expression(
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
                                                        'callback': _p_change_context(
                                                            $['callback'],
                                                            ($) => Expression(
                                                                $,
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            case 'implement me':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['implement me', $],
                                                )
                                            case 'iterate':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['iterate', {
                                                        'list': _p_change_context(
                                                            $['list'],
                                                            ($) => Value_Selection(
                                                                $,
                                                            ),
                                                        ),
                                                        'handler': _p_change_context(
                                                            $['handler'],
                                                            ($) => Expression(
                                                                $,
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            case 'unreachable':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['unreachable', {
                                                        'explanation': _p_change_context(
                                                            $['explanation'],
                                                            ($) => $,
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
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    })
    
    export const Value_Selection: t_signatures.Value_Selection = ($) => ({
        'l location': {
            'document resource identifier': "implement me",
            'line': 42,
            'column': 42,
        },
        'l state': _p.decide.state(
            $,
            ($): t_out.Value_Selection.l_state => {
                switch ($[0]) {
                    case 'implement me':
                        return _p.ss(
                            $,
                            ($) => ['implement me', $],
                        )
                    case 'regular':
                        return _p.ss(
                            $,
                            ($) => ['regular', {
                                'start': _p_change_context(
                                    $['start'],
                                    ($) => ({
                                        'l location': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                        'l state': _p.decide.state(
                                            $,
                                            ($): t_out.Value_Selection.l_state.regular.start.l_state => {
                                                switch ($[0]) {
                                                    case 'call':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['call', {
                                                                'source': _p_change_context(
                                                                    $['source'],
                                                                    ($) => ({
                                                                        'l location': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                        'l state': _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value_Selection.l_state.regular.start.l_state.call.source.l_state => {
                                                                                switch ($[0]) {
                                                                                    case 'local':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['local', $],
                                                                                        )
                                                                                    case 'imported':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ['imported', {
                                                                                                'import': _p_change_context(
                                                                                                    $['import'],
                                                                                                    ($) => $,
                                                                                                ),
                                                                                                'variable': _p_change_context(
                                                                                                    $['variable'],
                                                                                                    ($) => $,
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
                                                                'context': _p_change_context(
                                                                    $['context'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'abort': _p_change_context(
                                                                    $['abort'],
                                                                    ($) => _p.optional.map(
                                                                        $,
                                                                        ($) => Expression(
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
                                                                            'l state': _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value_Selection.l_state.regular.start.l_state.call.lookups.O.l_state => {
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
                                                                                        case 'pass through':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['pass through', null],
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
                                                                ),
                                                                'arguments': _p_change_context(
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
                                                                                ($): t_out.Value_Selection.l_state.regular.start.l_state.call.arguments_.O.l_state => {
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
                                                                                        case 'pass through':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['pass through', null],
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
                                                                ),
                                                            }],
                                                        )
                                                    case 'context':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['context', null],
                                                        )
                                                    case 'dictionary entry':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['dictionary entry', {
                                                                'dictionary': _p_change_context(
                                                                    $['dictionary'],
                                                                    ($) => Value_Selection(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'id': _p_change_context(
                                                                    $['id'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'abort handler': _p_change_context(
                                                                    $['abort handler'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }],
                                                        )
                                                    case 'list from text':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['list from text', {
                                                                'source': _p_change_context(
                                                                    $['source'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'character handler': _p_change_context(
                                                                    $['character handler'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }],
                                                        )
                                                    case 'lookup entry':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['lookup entry', {
                                                                'lookup': _p_change_context(
                                                                    $['lookup'],
                                                                    ($) => Lookup_Selection(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'id': _p_change_context(
                                                                    $['id'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'abort handlers': _p_change_context(
                                                                    $['abort handlers'],
                                                                    ($) => ({
                                                                        'no such entry': _p_change_context(
                                                                            $['no such entry'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'no context lookup': _p_change_context(
                                                                            $['no context lookup'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'cycle detected': _p_change_context(
                                                                            $['cycle detected'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }],
                                                        )
                                                    case 'lookup entry depth':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['lookup entry depth', {
                                                                'lookup': _p_change_context(
                                                                    $['lookup'],
                                                                    ($) => Lookup_Selection(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'id': _p_change_context(
                                                                    $['id'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'abort handlers': _p_change_context(
                                                                    $['abort handlers'],
                                                                    ($) => ({
                                                                        'no such entry': _p_change_context(
                                                                            $['no such entry'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'no context lookup': _p_change_context(
                                                                            $['no context lookup'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'cycle detected': _p_change_context(
                                                                            $['cycle detected'],
                                                                            ($) => Expression(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }],
                                                        )
                                                    case 'parameter':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['parameter', $],
                                                        )
                                                    case 'parent sibling':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['parent sibling', $],
                                                        )
                                                    case 'sibling':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['sibling', $],
                                                        )
                                                    case 'state':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['state', null],
                                                        )
                                                    case 'text from list':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['text from list', {
                                                                'source': _p_change_context(
                                                                    $['source'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                                'item handler': _p_change_context(
                                                                    $['item handler'],
                                                                    ($) => Expression(
                                                                        $,
                                                                    ),
                                                                ),
                                                            }],
                                                        )
                                                    case 'variable':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['variable', $],
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
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
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
                            ($) => ['implement me', $],
                        )
                    case 'from parameter':
                        return _p.ss(
                            $,
                            ($) => ['from parameter', $],
                        )
                    case 'stack':
                        return _p.ss(
                            $,
                            ($) => ['stack', {
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Lookup_Selection.l_state.stack.l_state => {
                                        switch ($[0]) {
                                            case 'empty':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['empty', null],
                                                )
                                            case 'push':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['push', {
                                                        'stack': _p_change_context(
                                                            $['stack'],
                                                            ($) => Lookup_Selection(
                                                                $,
                                                            ),
                                                        ),
                                                        'acyclic': _p_change_context(
                                                            $['acyclic'],
                                                            ($) => Lookup_Selection(
                                                                $,
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
                            }],
                        )
                    case 'acyclic':
                        return _p.ss(
                            $,
                            ($) => ['acyclic', {
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Lookup_Selection.l_state.acyclic.l_state => {
                                        switch ($[0]) {
                                            case 'not set':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['not set', null],
                                                )
                                            case 'siblings':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['siblings', null],
                                                )
                                            case 'resolved dictionary':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['resolved dictionary', Value_Selection(
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
                            }],
                        )
                    case 'cyclic':
                        return _p.ss(
                            $,
                            ($) => ['cyclic', {
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Lookup_Selection.l_state.cyclic.l_state => {
                                        switch ($[0]) {
                                            case 'not set':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['not set', null],
                                                )
                                            case 'siblings':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['siblings', null],
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
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    })
