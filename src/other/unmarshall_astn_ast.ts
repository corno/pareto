import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edev from 'exupery-core-dev'

import { impure, pure } from "pareto-standard-operations"

import * as definition from "../generated/interface/schemas/schema/data_types/resolved"

import * as _in from "astn/dist/generated/interface/schemas/ast/data_types/unconstrained"
import * as _in_token from "astn/dist/generated/interface/schemas/token/data_types/unconstrained"

import * as t_ast_to_range from "astn/dist/transformations/ast/temp_value_range"

import * as _out from "../temp_unmashall_result_types"

// export const Document = (
//     $: _in.Document,
//     $p: {
//         'definition': definition.Type,
//         'document path': string,
//     }
// ): _out.Document => {

//     return {
//         'content': Node(
//             $.content,
//             {
//                 'definition': $p.definition.node,
//                 'document path': $p['document path'],
//             },
//         )
//     }

// }

export const Optional_Node = (
    $: _et.Optional_Value<_in.Value>,
    $p: {
        'definition': definition.Type_Node,
    }
): _out.Optional_Node => {
    return $.map(
        ($) => Node($, $p),
    )
}

export const Node = (
    $: _in.Value,
    $p: {
        'definition': definition.Type_Node,
    }
): _out.Node => {
    const data = $
    return {
        'value': data,
        'type': _ea.cc($p.definition, ($): _out.Node_Type => {
            switch ($[0]) {
                case 'number': return _ea.ss($, ($): _out.Node_Type => {
                    return ['number', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'string': return _ea.ss($, ($) => ['valid', {
                                    'value': $,
                                    'range': $.range,
                                    'correct string type': _ea.cc($.type, ($) => {
                                        switch ($[0]) {
                                            case 'quoted': return true
                                            case 'apostrophed': return false
                                            case 'undelimited': return true
                                            case 'backticked': return false
                                            default: return _ea.au($[0])
                                        }
                                    })
                                }])
                                // case 'not set': return pa.ss($, () => ['invalid', data.location])
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'boolean': return _ea.ss($, ($): _out.Node_Type => {
                    return ['boolean', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'string': return _ea.ss($, ($) => ['valid', {
                                    'value': $,
                                    'range': $.range,
                                    'correct string type': _ea.cc($.type, ($) => {
                                        switch ($[0]) {
                                            case 'quoted': return false
                                            case 'apostrophed': return false
                                            case 'undelimited': return true
                                            case 'backticked': return false
                                            default: return _ea.au($[0])
                                        }
                                    })
                                }])
                                // case 'not set': return pa.ss($, () => ['invalid', data.location])
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'list': return _ea.ss($, ($) => {
                    const prop_def = $.node
                    return ['list', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'ordered collection': return _ea.ss($, ($) => {
                                    return ['valid', {
                                        'value': $,
                                        'elements': _edev.implement_me()
                                    }]
                                })
                                default: return ['invalid', t_ast_to_range.Value(data)]

                            }
                        })
                    }]
                })
                case 'nothing': return _ea.ss($, ($): _out.Node_Type => {
                    return ['nothing', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'not set': return _ea.ss($, ($) => ['valid', {
                                    'value': $,
                                }])
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'reference': return _ea.ss($, ($): _out.Node_Type => {
                    return ['reference', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'string': return _ea.ss($, ($) => ['valid', {
                                    'value': $,
                                }])
                                // case 'not set': return pa.ss($, () => ['invalid', data.location])
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'component': return _ea.ss($, ($): _out.Node_Type => {
                    return ['component', {
                        'definition': $,
                        'node': Node(
                            data,
                            {
                                'definition': _ea.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'external': return _ea.ss($, ($) => $.type.entry.node)
                                        case 'internal': return _ea.ss($, ($) => $.entry.node)
                                        case 'internal cyclic': return _ea.ss($, ($) => $.entry.compute().node)
                                        default: return _ea.au($[0])
                                    }
                                }),
                            }
                        )
                    }]
                    // return pdev.implement_me()
                })
                case 'dictionary': return _ea.ss($, ($): _out.Node_Type => {
                    const prop_def = $.node
                    return ['dictionary', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'indexed collection': return _ea.ss($, ($) => {
                                    const entries = impure.list.group(_ea.cc($, ($): _in.Key_Value_Pairs => {
                                        switch ($[0]) {
                                            case 'dictionary': return _ea.ss($, ($) => $.entries)
                                            case 'verbose group': return _ea.ss($, ($) => $.entries)
                                            default: return _ea.au($[0])
                                        }
                                    }).map(($) => {
                                        return {
                                            'key': $.key.value,
                                            'value': $
                                        }
                                    }))
                                    return ['valid', {
                                        'value': $,
                                        'entries': entries.map<_out.Entry>(($) => impure.list['expect exactly one element']($).transform(
                                            ($): _out.Entry => ['unique', Optional_Node(
                                                $.value.map(
                                                    ($) => $.value,
                                                ),
                                                {
                                                    'definition': prop_def,
                                                },
                                            )],
                                            (): _out.Entry => ['multiple', $.map(($): _out.Entry_Data => ({
                                                'node': Optional_Node(
                                                    $.value.map(
                                                        ($) => $.value,
                                                    ),
                                                    {
                                                        'definition': prop_def,
                                                    },
                                                ),
                                                'key': $.key
                                            }))]
                                        ))
                                    }]
                                })
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'group': return _ea.ss($, ($): _out.Node_Type => {
                    const group_def = $
                    // pa.cc(data.type, ($) => {
                    // //     switch ($[0]) {
                    // //         case 'verbose group': return pa.ss($, ($) => {
                    // //             impure.list['select clashing keys']($.entries.map(($) => {
                    // //                 return {
                    // //                     'key': $.key.value,
                    // //                     'value': $
                    // //                 }
                    // //             })).map(($, key) => {
                    // //                 pdev.log_debug_message(`clashing key: ${key}`)
                    // //             })
                    // //             const properties = impure.list['to dictionary, overwrite clashing keys']($.entries.map(($) => {
                    // //                 return {
                    // //                     'key': $.key.value,
                    // //                     'value': $
                    // //                 }
                    // //             }))
                    // //             group_def.map(($, key) => {
                    // //                 properties.__get_entry(key).transform(
                    // //                     ($) => {
                    // //                         pdev.log_debug_message(`property ${key} found in data`)
                    // //                         // do_node(
                    // //                         //     $.type,
                    // //                         //     $.value
                    // //                         // )
                    // //                     },
                    // //                     () => {
                    // //                         pdev.log_debug_message(`property ${key} not found in data`)
                    // //                     }
                    // //                 )

                    // //             })

                    // //         })
                    // //         default: return pdev.implement_me()
                    // //     }
                    // // })
                    return ['group', {
                        'definition': $,
                        'found value type': _ea.cc(data, ($) => {
                            const value = $
                            return _ea.cc($.type, ($) => {
                                switch ($[0]) {
                                    case 'indexed collection': return _ea.ss($, ($): _out.Group_Found_Value_Type => {
                                        const entries = impure.list.group(_ea.cc($, ($): _in.Key_Value_Pairs => {
                                            switch ($[0]) {
                                                case 'dictionary': return _ea.ss($, ($) => $.entries)
                                                case 'verbose group': return _ea.ss($, ($) => $.entries)
                                                default: return _ea.au($[0])
                                            }
                                        }).map(($) => {
                                            return {
                                                'key': $.key.value,
                                                'value': $
                                            }
                                        }))
                                        const range: _in_token.Range = _ea.cc($, ($) => {
                                            switch ($[0]) {
                                                case 'dictionary': return _ea.ss($, ($) => $['{'].range)
                                                case 'verbose group': return _ea.ss($, ($) => $['('].range)
                                                default: return _ea.au($[0])
                                            }
                                        })
                                        return ['valid', ['indexed', {
                                            'value': $,
                                            'superfluous entries': pure.dictionary.filter(impure.dictionary.merge(
                                                entries,
                                                {
                                                    'supporting dictionary': group_def
                                                }
                                            ).map(($) => {
                                                return $.supporting.transform( //drop all the ones for which there is a definition
                                                    ($) => _ea.not_set(),
                                                    () => _ea.set($.context)
                                                )
                                            })).map(($) => $.map(($) => $.key.range)), //select the locations
                                            'properties': impure.dictionary.merge(
                                                group_def,
                                                {
                                                    'supporting dictionary': entries
                                                }
                                            ).map<_out.Property>(($) => {
                                                const prop_def = $.context
                                                return $.supporting.transform(
                                                    ($): _out.Property => impure.list['expect exactly one element']($).transform(
                                                        ($): _out.Property => ['unique', {
                                                            'node': Optional_Node(
                                                                $.value.map(
                                                                    ($) => $.value,
                                                                ),
                                                                {
                                                                    'definition': prop_def,
                                                                },
                                                            ),
                                                            'key': $.key
                                                        }],
                                                        (): _out.Property => ['multiple', $.map(($): _out.Entry_Data => ({
                                                            'node': Optional_Node(
                                                                $.value.map(
                                                                    ($) => $.value,
                                                                ),
                                                                {
                                                                    'definition': prop_def,
                                                                },
                                                            ),
                                                            'key': $.key,
                                                        }))]
                                                    ),
                                                    (): _out.Property => ['missing', range]
                                                )
                                            })
                                        }]]
                                    })
                                    //case 'ordered collection': return pdev.implement_me()
                                    default: return ['invalid', t_ast_to_range.Value(data)]
                                }
                            })
                        })
                    }]
                })
                case 'identifier value pair': return _ea.ss($, ($) => _edev.implement_me())
                case 'optional': return _ea.ss($, ($): _out.Node_Type => {
                    const def = $
                    return ['optional', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'not set': return _ea.ss($, ($) => ['valid', ['not set', {
                                    'value': $,
                                }]])
                                case 'set optional value': return _ea.ss($, ($) => ['valid', ['set', {
                                    'value': $,
                                    'child node': Node(
                                        $.value,
                                        {
                                            'definition': def,
                                        }
                                    )
                                }]])
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'state group': return _ea.ss($, ($): _out.Node_Type => {
                    const def = $
                    return ['state', {
                        'found value type': _ea.cc(data.type, ($): _out.State_Found_Value_Type => {
                            switch ($[0]) {
                                case 'tagged value': return _ea.ss($, ($) => {
                                    const tv = $
                                    const state = $.state
                                    const value = $.value
                                    return ['valid', {
                                        'value type': ['state', {
                                            'value': tv,
                                        }],
                                        'state definition': def.__get_entry($.state.value).map(
                                            ($) => ({
                                                'definition': $,
                                                'node': Node(
                                                    value,
                                                    {
                                                        'definition': $,
                                                    }
                                                )
                                            })
                                        ),
                                    }]
                                })
                                // case 'ordered collection': return _ea.ss($, ($) => {
                                //     const elements = _ea.cc($, ($): _in.Elements => {
                                //         switch ($[0]) {
                                //             case 'list': return _ea.ss($, ($) => $.elements)
                                //             case 'concise group': return _ea.ss($, ($) => $.elements)
                                //             default: return _ea.au($[0])
                                //         }
                                //     })
                                //     const range = _ea.cc($, ($): _in_token.Range => {
                                //         switch ($[0]) {
                                //             case 'list': return _ea.ss($, ($) => $['['].range)
                                //             case 'concise group': return _ea.ss($, ($) => $['<'].range)
                                //             default: return _ea.au($[0])
                                //         }
                                //     })
                                //     if (elements.__get_length() > 2) {
                                //         return ['more than 2 elements', range]
                                //     }
                                //     const first = elements.__get_element_at(0)
                                //     return first.transform<_out.State_Status>(
                                //         ($) => {
                                //             if ($.value.type[0] !== 'string') {
                                //                 return ['state is not a string', t_ast_to_range.Value(data)]
                                //             }
                                //             const state_name = $.value.type[1].value
                                //             const state_name_range = $.value.type[1].range
                                //             return elements.__get_element_at(1).transform<_out.State_Status>(
                                //                 ($) => {
                                //                     const value = $.value
                                //                     return def.__get_entry(state_name).transform<_out.State_Status>(
                                //                         ($) => ['valid', {
                                //                             'node': Node(
                                //                                 value,
                                //                                 {
                                //                                     'definition': $,
                                //                                 },
                                //                             )
                                //                         }],
                                //                         () => ['invalid', ['unknown state', {
                                //                             'range': state_name_range,
                                //                             'found': state_name,
                                //                             'expected': def.map(($) => null)
                                //                         }]]
                                //                     )
                                //                 },
                                //                 () => ['invalid', ['missing value', t_ast_to_range.Value(data)]]
                                //             )
                                //         },
                                //         () => ['invalid', ['missing state name', range]]
                                //     )

                                // })
                                // case 'not set': return pa.ss($, () => ['invalid', data.location])
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'text': return _ea.ss($, ($) => {
                    return ['text', {
                        'definition': $,
                        'found value type': _ea.cc(data.type, ($) => {
                            switch ($[0]) {
                                case 'string': return _ea.ss($, ($) => ['valid', {
                                    'value': $,
                                }])
                                // case 'not set': return pa.ss($, () => ['invalid', data.location])
                                default: return ['invalid', t_ast_to_range.Value(data)]
                            }
                        })
                    }]
                })
                case 'type parameter': return _ea.ss($, ($) => _edev.implement_me())
                default: return _ea.au($[0])
            }
        })
    }
}
