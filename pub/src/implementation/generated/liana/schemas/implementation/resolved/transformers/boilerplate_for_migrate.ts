
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

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
                            ($) => Assign(
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

export const Assign: t_signatures.Assign = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Assign.l_state => {
            switch ($[0]) {
                case 'decide':
                    return _p.ss(
                        $,
                        ($) => ['decide', {
                            'source': _p_change_context(
                                $['source'],
                                ($) => Select_Value(
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
                                        ($): t_out.Assign.l_state.decide.type_.l_state => {
                                            switch ($[0]) {
                                                case 'boolean':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['boolean', {
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
                                                                ($) => Assign(
                                                                    $,
                                                                ),
                                                            ),
                                                            'if true': _p_change_context(
                                                                $['if true'],
                                                                ($) => Assign(
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
                                                                ($): t_out.Assign.l_state.decide.type_.l_state.dictionary.l_state => {
                                                                    switch ($[0]) {
                                                                        case 'has entries':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has entries', {
                                                                                    'if true': _p_change_context(
                                                                                        $['if true'],
                                                                                        ($) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    'if false': _p_change_context(
                                                                                        $['if false'],
                                                                                        ($) => Assign(
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
                                                                ($): t_out.Assign.l_state.decide.type_.l_state.list.l_state => {
                                                                    switch ($[0]) {
                                                                        case 'has first item':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has first item', {
                                                                                    'if true': _p_change_context(
                                                                                        $['if true'],
                                                                                        ($) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    'if false': _p_change_context(
                                                                                        $['if false'],
                                                                                        ($) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                }],
                                                                            )
                                                                        case 'has last item':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has last item', {
                                                                                    'if true': _p_change_context(
                                                                                        $['if true'],
                                                                                        ($) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    'if false': _p_change_context(
                                                                                        $['if false'],
                                                                                        ($) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                }],
                                                                            )
                                                                        case 'has items':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['has items', {
                                                                                    'if true': _p_change_context(
                                                                                        $['if true'],
                                                                                        ($) => Assign(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    'if false': _p_change_context(
                                                                                        $['if false'],
                                                                                        ($) => Assign(
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
                                                                ($) => Assign(
                                                                    $,
                                                                ),
                                                            ),
                                                            'if set': _p_change_context(
                                                                $['if set'],
                                                                ($) => Assign(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['state', {
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
                                                                        ($): t_out.Assign.l_state.decide.type_.l_state.state.type_.l_state => {
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
                                                                                                            'l entry': Assign(
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
                                                                                                ($) => Assign(
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
                                                                                                            'l entry': Assign(
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
                                                                                                ($) => Assign(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            'if false': _p_change_context(
                                                                                                $['if false'],
                                                                                                ($) => Assign(
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
                                                                            'l entry': Assign(
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
                                                                ($) => Assign(
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
                case 'construct':
                    return _p.ss(
                        $,
                        ($) => ['construct', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Assign.l_state.construct.l_state => {
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
                                                        ($): t_out.Assign.l_state.construct.l_state.boolean_.l_state => {
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
                                                                                ($): t_out.Assign.l_state.construct.l_state.boolean_.l_state.literal.l_state => {
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
                                                                case 'from':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from', {
                                                                            'selection': _p_change_context(
                                                                                $['selection'],
                                                                                ($) => Select_Value(
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
                                                                                        ($): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state => {
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.boolean_.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'not':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['not', null],
                                                                                                                            )
                                                                                                                        case 'copy':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['copy', null],
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.dictionary.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'is empty':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['is empty', null],
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.boolean_.l_state.from_.type_.l_state.list.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'is empty':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['is empty', null],
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
                                                        ($): t_out.Assign.l_state.construct.l_state.dictionary.l_state => {
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
                                                                                    'l entry': Assign(
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
                                                                case 'from':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from', {
                                                                            'selection': _p_change_context(
                                                                                $['selection'],
                                                                                ($) => Select_Value(
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
                                                                                        ($): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_.l_state => {
                                                                                            switch ($[0]) {
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_.l_state.dictionary.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'filter':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['filter', {
                                                                                                                                    'assign entry': _p_change_context(
                                                                                                                                        $['assign entry'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                        case 'map':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['map', {
                                                                                                                                    'assign entry': _p_change_context(
                                                                                                                                        $['assign entry'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                        case 'resolve':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['resolve', {
                                                                                                                                    'assign entry': _p_change_context(
                                                                                                                                        $['assign entry'],
                                                                                                                                        ($) => Assign(
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.dictionary.l_state.from_.type_.l_state.list.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['convert', {
                                                                                                                                    'assign id': _p_change_context(
                                                                                                                                        $['assign id'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'assign entry': _p_change_context(
                                                                                                                                        $['assign entry'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'abort': _p_change_context(
                                                                                                                                        $['abort'],
                                                                                                                                        ($) => Assign(
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
                                                        ($): t_out.Assign.l_state.construct.l_state.group.l_state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'properties': _p_change_context(
                                                                                $['properties'],
                                                                                ($) => ({
                                                                                    'l location': {
                                                                                        'document resource identifier': "implement me",
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                    'l dictionary': _p.dictionary.map(
                                                                                        $,
                                                                                        ($, id) => ({
                                                                                            'l entry': Assign(
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
                                                                            'have dependencies': _p_change_context(
                                                                                $['have dependencies'],
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
                                                        ($): t_out.Assign.l_state.construct.l_state.list.l_state => {
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
                                                                            'l list': _p.list.map(
                                                                                $,
                                                                                ($) => ({
                                                                                    'l item': Assign(
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
                                                                case 'from':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from', {
                                                                            'selection': _p_change_context(
                                                                                $['selection'],
                                                                                ($) => Select_Value(
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
                                                                                        ($): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_.l_state => {
                                                                                            switch ($[0]) {
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_.l_state.dictionary.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['convert', {
                                                                                                                                    'assign entry': _p_change_context(
                                                                                                                                        $['assign entry'],
                                                                                                                                        ($) => Assign(
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.list.l_state.from_.type_.l_state.list.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'filter':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['filter', {
                                                                                                                                    'assign item': _p_change_context(
                                                                                                                                        $['assign item'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                        case 'map':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['map', {
                                                                                                                                    'assign item': _p_change_context(
                                                                                                                                        $['assign item'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                        case 'map with state':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['map with state', {
                                                                                                                                    'initialize state': _p_change_context(
                                                                                                                                        $['initialize state'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'assign item': _p_change_context(
                                                                                                                                        $['assign item'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'update state': _p_change_context(
                                                                                                                                        $['update state'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'wrap up': _p_change_context(
                                                                                                                                        $['wrap up'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                        case 'reduce':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['reduce', {
                                                                                                                                    'initialize state': _p_change_context(
                                                                                                                                        $['initialize state'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    'assign item': _p_change_context(
                                                                                                                                        $['assign item'],
                                                                                                                                        ($) => Assign(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                }],
                                                                                                                            )
                                                                                                                        case 'reverse':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['reverse', null],
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
                                                        ($): t_out.Assign.l_state.construct.l_state.number_.l_state => {
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
                                                                                ($): t_out.Assign.l_state.construct.l_state.number_.l_state.approximation.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['literal', $],
                                                                                            )
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['copy', Select_Value(
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
                                                                                ($): t_out.Assign.l_state.construct.l_state.number_.l_state.integer.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['copy', Select_Value(
                                                                                                    $,
                                                                                                )],
                                                                                            )
                                                                                        case 'divide':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['divide', {
                                                                                                    'assign dividend': _p_change_context(
                                                                                                        $['assign dividend'],
                                                                                                        ($) => Select_Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    'assign divisor': _p_change_context(
                                                                                                        $['assign divisor'],
                                                                                                        ($) => Select_Value(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    'abort': _p_change_context(
                                                                                                        $['abort'],
                                                                                                        ($) => Assign(
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
                                                                                ($): t_out.Assign.l_state.construct.l_state.number_.l_state.natural.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'literal':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['literal', $],
                                                                                            )
                                                                                        case 'copy':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['copy', Select_Value(
                                                                                                    $,
                                                                                                )],
                                                                                            )
                                                                                        case 'number of dictionary entries':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['number of dictionary entries', {
                                                                                                    'dictionary': _p_change_context(
                                                                                                        $['dictionary'],
                                                                                                        ($) => Select_Value(
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
                                                                                                        ($) => Select_Value(
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
                                                        ($): t_out.Assign.l_state.construct.l_state.optional.l_state => {
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
                                                                                ($): t_out.Assign.l_state.construct.l_state.optional.l_state.literal.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'not set':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['not set', null],
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['set', Assign(
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
                                                                case 'from':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from', {
                                                                            'selection': _p_change_context(
                                                                                $['selection'],
                                                                                ($) => Select_Value(
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
                                                                                        ($): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_.l_state => {
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_.l_state.boolean_.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'convert':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['convert', {
                                                                                                                                    'assign set': _p_change_context(
                                                                                                                                        $['assign set'],
                                                                                                                                        ($) => Assign(
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
                                                                                                            'l location': {
                                                                                                                'document resource identifier': "implement me",
                                                                                                                'line': 42,
                                                                                                                'column': 42,
                                                                                                            },
                                                                                                            'l state': _p.decide.state(
                                                                                                                $,
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.optional.l_state.from_.type_.l_state.optional.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'map':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['map', {
                                                                                                                                    'assign set': _p_change_context(
                                                                                                                                        $['assign set'],
                                                                                                                                        ($) => Assign(
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
                                                        ($): t_out.Assign.l_state.construct.l_state.state.l_state => {
                                                            switch ($[0]) {
                                                                case 'literal':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['literal', {
                                                                            'option': _p_change_context(
                                                                                $['option'],
                                                                                ($) => $,
                                                                            ),
                                                                            'assign option': _p_change_context(
                                                                                $['assign option'],
                                                                                ($) => Assign(
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
                                                        ($): t_out.Assign.l_state.construct.l_state.text.l_state => {
                                                            switch ($[0]) {
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
                                                                                        ($): t_out.Assign.l_state.construct.l_state.text.l_state.literal.type_.l_state => {
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
                                                                case 'from':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['from', {
                                                                            'selection': _p_change_context(
                                                                                $['selection'],
                                                                                ($) => Select_Value(
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
                                                                                        ($): t_out.Assign.l_state.construct.l_state.text.l_state.from_.type_.l_state => {
                                                                                            switch ($[0]) {
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
                                                                                                                ($): t_out.Assign.l_state.construct.l_state.text.l_state.from_.type_.l_state.text.l_state => {
                                                                                                                    switch ($[0]) {
                                                                                                                        case 'copy':
                                                                                                                            return _p.ss(
                                                                                                                                $,
                                                                                                                                ($) => ['copy', null],
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
                                                                                }),
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
                        ($) => ['select', Select_Value(
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
                                ($): t_out.Assign.l_state.special.l_state => {
                                    switch ($[0]) {
                                        case 'abort':
                                            return _p.ss(
                                                $,
                                                ($) => ['abort', Assign(
                                                    $,
                                                )],
                                            )
                                        case 'assert':
                                            return _p.ss(
                                                $,
                                                ($) => ['assert', {
                                                    'tester': _p_change_context(
                                                        $['tester'],
                                                        ($) => Assign(
                                                            $,
                                                        ),
                                                    ),
                                                    'normal flow': _p_change_context(
                                                        $['normal flow'],
                                                        ($) => Assign(
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
                                                        ($) => Select_Value(
                                                            $,
                                                        ),
                                                    ),
                                                    'expression': _p_change_context(
                                                        $['expression'],
                                                        ($) => Assign(
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
                                                                    'l entry': Assign(
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
                                                    'assign': _p_change_context(
                                                        $['assign'],
                                                        ($) => Assign(
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
                                                        ($) => Select_Value(
                                                            $,
                                                        ),
                                                    ),
                                                    'assign': _p_change_context(
                                                        $['assign'],
                                                        ($) => Assign(
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

export const Select_Value: t_signatures.Select_Value = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Select_Value.l_state => {
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
                                        ($): t_out.Select_Value.l_state.regular.start.l_state => {
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
                                                                        ($): t_out.Select_Value.l_state.regular.start.l_state.call.source.l_state => {
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
                                                                ($) => Assign(
                                                                    $,
                                                                ),
                                                            ),
                                                            'abort': _p_change_context(
                                                                $['abort'],
                                                                ($) => _p.optional.map(
                                                                    $,
                                                                    ($) => Assign(
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
                                                                            ($): t_out.Select_Value.l_state.regular.start.l_state.call.lookups.O.l_state => {
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
                                                                                                        'l entry': Select_Lookup(
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
                                                                            ($): t_out.Select_Value.l_state.regular.start.l_state.call.arguments_.O.l_state => {
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
                                                                                                        'l entry': Assign(
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
                                                                ($) => Select_Value(
                                                                    $,
                                                                ),
                                                            ),
                                                            'id': _p_change_context(
                                                                $['id'],
                                                                ($) => Assign(
                                                                    $,
                                                                ),
                                                            ),
                                                            'abort handler': _p_change_context(
                                                                $['abort handler'],
                                                                ($) => Assign(
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
                                                                ($) => Select_Value(
                                                                    $,
                                                                ),
                                                            ),
                                                            'assign item': _p_change_context(
                                                                $['assign item'],
                                                                ($) => Assign(
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
                                                                ($) => Select_Lookup(
                                                                    $,
                                                                ),
                                                            ),
                                                            'id': _p_change_context(
                                                                $['id'],
                                                                ($) => Assign(
                                                                    $,
                                                                ),
                                                            ),
                                                            'abort handlers': _p_change_context(
                                                                $['abort handlers'],
                                                                ($) => ({
                                                                    'no such entry': _p_change_context(
                                                                        $['no such entry'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    'no context lookup': _p_change_context(
                                                                        $['no context lookup'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    'cycle detected': _p_change_context(
                                                                        $['cycle detected'],
                                                                        ($) => Assign(
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
                                                                ($) => Select_Lookup(
                                                                    $,
                                                                ),
                                                            ),
                                                            'id': _p_change_context(
                                                                $['id'],
                                                                ($) => Assign(
                                                                    $,
                                                                ),
                                                            ),
                                                            'abort handlers': _p_change_context(
                                                                $['abort handlers'],
                                                                ($) => ({
                                                                    'no such entry': _p_change_context(
                                                                        $['no such entry'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    'no context lookup': _p_change_context(
                                                                        $['no context lookup'],
                                                                        ($) => Assign(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    'cycle detected': _p_change_context(
                                                                        $['cycle detected'],
                                                                        ($) => Assign(
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
                                                                ($) => Select_Value(
                                                                    $,
                                                                ),
                                                            ),
                                                            'assign character': _p_change_context(
                                                                $['assign character'],
                                                                ($) => Assign(
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

export const Select_Lookup: t_signatures.Select_Lookup = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Select_Lookup.l_state => {
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
                                ($): t_out.Select_Lookup.l_state.stack.l_state => {
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
                                                        ($) => Select_Lookup(
                                                            $,
                                                        ),
                                                    ),
                                                    'acyclic': _p_change_context(
                                                        $['acyclic'],
                                                        ($) => Select_Lookup(
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
                                ($): t_out.Select_Lookup.l_state.acyclic.l_state => {
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
                                                ($) => ['resolved dictionary', Select_Value(
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
                                ($): t_out.Select_Lookup.l_state.cyclic.l_state => {
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
