import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as definition from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"

import * as d_in from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as _in_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/target"

import * as t_ast_to_range from "astn/dist/implementation/manual/schemas/authoring_parse_tree/transformers/token"

import * as d_out from "../../../../../interface/to_be_generated/temp_unmashall_result"

import { $$ as op_expect_exactly_one_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

const op_group = <T>(
    $: _pi.List<_pi.Deprecated_Key_Value_Pair<T>>,
): _pi.Dictionary<_pi.List<T>> => {
    return _pt.group_list($, ($) => $.key).map(($) => $.map(($) => $.value))
}

export const Optional_Node = (
    $: _pi.Optional_Value<d_in.Value>,
    $p: {
        'definition': definition.Type_Node,
    }
): d_out.Optional_Node => {
    return $.map(
        ($) => Node($, $p),
    )
}

export const Node_Type = (
    $: d_in.Concrete_Value,
    $p: {
        'definition': definition.Type_Node,
        'range': _in_token.Range,
        'temp value': d_in.Value,
    }
): d_out.Node_Type => {
    const data = $
    return _pt.cc($p.definition, ($): d_out.Node_Type => {
        switch ($[0]) {
            case 'number': return _pt.ss($, ($): d_out.Node_Type => {
                return ['number', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'string': return _pt.ss($, ($) => ['valid', {
                                'value': $,
                                'range': $.range,
                                'correct string type': _pt.cc($.type, ($) => {
                                    switch ($[0]) {
                                        case 'quoted': return true
                                        case 'apostrophed': return false
                                        case 'undelimited': return true
                                        case 'backticked': return false
                                        default: return _pt.au($[0])
                                    }
                                })
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'boolean': return _pt.ss($, ($): d_out.Node_Type => {
                return ['boolean', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'string': return _pt.ss($, ($) => ['valid', {
                                'value': $,
                                'range': $.range,
                                'correct string type': _pt.cc($.type, ($) => {
                                    switch ($[0]) {
                                        case 'quoted': return false
                                        case 'apostrophed': return false
                                        case 'undelimited': return true
                                        case 'backticked': return false
                                        default: return _pt.au($[0])
                                    }
                                })
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'list': return _pt.ss($, ($) => {
                const prop_def = $.node
                return ['list', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'ordered collection': return _pt.ss($, ($) => {
                                return ['valid', {
                                    'value': $,
                                    'elements': _pdev.implement_me("list elements deserialization") //TODO
                                }]
                            })
                            default: return ['invalid', $p.range]

                        }
                    })
                }]
            })
            case 'nothing': return _pt.ss($, ($): d_out.Node_Type => {
                return ['nothing', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'not set': return _pt.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'reference': return _pt.ss($, ($): d_out.Node_Type => {
                return ['reference', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'string': return _pt.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'component': return _pt.ss($, ($): d_out.Node_Type => {
                return ['component', {
                    'definition': $,
                    'node': Node(
                        $p['temp value'],
                        {
                            'definition': _pt.cc($, ($) => {
                                switch ($[0]) {
                                    case 'external': return _pt.ss($, ($) => $.type.entry.node)
                                    case 'internal': return _pt.ss($, ($) => $.entry.node)
                                    case 'internal cyclic': return _pt.ss($, ($) => $.entry['get circular dependent']().node)
                                    default: return _pt.au($[0])
                                }
                            }),
                        }
                    )
                }]
            })
            case 'dictionary': return _pt.ss($, ($): d_out.Node_Type => {
                const prop_def = $.node
                return ['dictionary', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'indexed collection': return _pt.ss($, ($) => {
                                return ['valid', {
                                    'value': $,
                                    'entries': op_group(_pt.cc($, ($): d_in.Key_Value_Pairs => {
                                        switch ($[0]) {
                                            case 'dictionary': return _pt.ss($, ($) => $.entries)
                                            case 'verbose group': return _pt.ss($, ($) => $.entries)
                                            default: return _pt.au($[0])
                                        }
                                    }).map(($) => {
                                        return {
                                            'key': $.key.value,
                                            'value': $
                                        }
                                    })).map<d_out.Entry>(($) => op_expect_exactly_one_element($).transform(
                                        ($): d_out.Entry => ['unique', Optional_Node(
                                            $.value.map(
                                                ($) => $.value,
                                            ),
                                            {
                                                'definition': prop_def,
                                            },
                                        )],
                                        (): d_out.Entry => ['multiple', $.map(($): d_out.Entry_Data => ({
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
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'group': return _pt.ss($, ($): d_out.Node_Type => {
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
                // //                 _pdev.log_debug_message(`clashing key: ${key}`)
                // //             })
                // //             const properties = impure.list['to dictionary, overwrite clashing keys']($.entries.map(($) => {
                // //                 return {
                // //                     'key': $.key.value,
                // //                     'value': $
                // //                 }
                // //             }))
                // //             group_def.map(($, key) => {
                // //                 properties.get_entry(key).transform(
                // //                     ($) => {
                // //                         _pdev.log_debug_message(`property ${key} found in data`)
                // //                         // do_node(
                // //                         //     $.type,
                // //                         //     $.value
                // //                         // )
                // //                     },
                // //                     () => {
                // //                         _pdev.log_debug_message(`property ${key} not found in data`)
                // //                     }
                // //                 )

                // //             })

                // //         })
                // //         default: return _pdev.implement_me("xx")
                // //     }
                // // })
                return ['group', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        const value = $
                        return _pt.cc($, ($) => {
                            switch ($[0]) {
                                case 'indexed collection': return _pt.ss($, ($): d_out.Group_Found_Value_Type => {
                                    const entries = op_group(_pt.cc($, ($): d_in.Key_Value_Pairs => {
                                        switch ($[0]) {
                                            case 'dictionary': return _pt.ss($, ($) => $.entries)
                                            case 'verbose group': return _pt.ss($, ($) => $.entries)
                                            default: return _pt.au($[0])
                                        }
                                    }).map(($) => {
                                        return {
                                            'key': $.key.value,
                                            'value': $
                                        }
                                    }))
                                    const range: _in_token.Range = _pt.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'dictionary': return _pt.ss($, ($) => $['{'].range)
                                            case 'verbose group': return _pt.ss($, ($) => $['('].range)
                                            default: return _pt.au($[0])
                                        }
                                    })
                                    const op_dictionary_merge = <Main, Supporting>(
                                        $: _pi.Dictionary<Main>,
                                        $p: { 'supporting dictionary': _pi.Dictionary<Supporting> }
                                    ): _pi.Dictionary<{
                                        'context': Main
                                        'supporting': _pi.Optional_Value<Supporting>
                                    }> => $.map(($, key) => ({
                                        'context': $,
                                        'supporting': $p['supporting dictionary'].get_entry(
                                            key,
                                        ),
                                    }))
                                    return ['valid', ['indexed', {
                                        'value': $,
                                        'content': {
                                            'superfluous entries': op_dictionary_merge(
                                                entries,
                                                {
                                                    'supporting dictionary': group_def.dictionary
                                                }
                                            ).filter(($) => {
                                                return $.supporting.transform( //drop all the ones for which there is a definition
                                                    ($) => _pt.not_set(),
                                                    () => _pt.set($.context)
                                                )
                                            }).map(($) => $.map(($) => $.key.range)), //select the locations
                                            'properties': op_dictionary_merge(
                                                group_def.dictionary,
                                                {
                                                    'supporting dictionary': entries
                                                }
                                            ).map<d_out.Property>(($) => {
                                                const prop_def = $.context
                                                return $.supporting.transform(
                                                    ($): d_out.Property => op_expect_exactly_one_element($).transform(
                                                        ($): d_out.Property => ['unique', {
                                                            'node': Optional_Node(
                                                                $.value.map(
                                                                    ($) => $.value,
                                                                ),
                                                                {
                                                                    'definition': prop_def.node,
                                                                },
                                                            ),
                                                            'key': $.key
                                                        }],
                                                        (): d_out.Property => ['multiple', $.map(($): d_out.Entry_Data => ({
                                                            'node': Optional_Node(
                                                                $.value.map(
                                                                    ($) => $.value,
                                                                ),
                                                                {
                                                                    'definition': prop_def.node,
                                                                },
                                                            ),
                                                            'key': $.key,
                                                        }))]
                                                    ),
                                                    (): d_out.Property => ['missing', range]
                                                )
                                            })
                                        }
                                    }]]
                                })
                                default: return ['invalid', $p.range]
                            }
                        })
                    })
                }]
            })
            case 'optional': return _pt.ss($, ($): d_out.Node_Type => {
                const def = $
                return ['optional', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'not set': return _pt.ss($, ($) => ['valid', ['not set', {
                                'value': $,
                            }]])
                            case 'set optional value': return _pt.ss($, ($) => ['valid', ['set', {
                                'value': $,
                                'child node': Node(
                                    $.value,
                                    {
                                        'definition': def,
                                    }
                                )
                            }]])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'state group': return _pt.ss($, ($): d_out.Node_Type => {
                const def = $
                return ['state', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($): d_out.Node_Type_SG_State_found_value_type => {
                        switch ($[0]) {
                            case 'tagged value': return _pt.ss($, ($): d_out.Node_Type_SG_State_found_value_type => {
                                const tv = $
                                return ['valid', {
                                    'value type': ['state', {
                                        'value substatus': _pt.cc($.status, ($): d_out.Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus => {
                                            switch ($[0]) {
                                                case 'missing data': return _pt.ss($, ($) => ['missing data', $['#']])
                                                case 'set': return _pt.ss($, ($): d_out.Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus => {
                                                    const state = $.state
                                                    const value = $.value
                                                    return ['set', {
                                                        'value': $,
                                                        'found state definition': def.get_entry($.state.value).map(
                                                            ($) => ({
                                                                'definition': $,
                                                                'node': Node(
                                                                    value,
                                                                    {
                                                                        'definition': $.node,
                                                                    }
                                                                )
                                                            })
                                                        ),
                                                    }]
                                                })
                                                default: return _pt.au($[0])
                                            }
                                        })
                                    }]
                                }]
                            })
                            // case 'ordered collection': return _pt.ss($, ($) => {
                            //     const elements = _pt.cc($, ($): d_in.Elements => {
                            //         switch ($[0]) {
                            //             case 'list': return _pt.ss($, ($) => $.elements)
                            //             case 'concise group': return _pt.ss($, ($) => $.elements)
                            //             default: return _pt.au($[0])
                            //         }
                            //     })
                            //     const range = _pt.cc($, ($): _in_token.Range => {
                            //         switch ($[0]) {
                            //             case 'list': return _pt.ss($, ($) => $['['].range)
                            //             case 'concise group': return _pt.ss($, ($) => $['<'].range)
                            //             default: return _pt.au($[0])
                            //         }
                            //     })
                            //     if (elements.__get_length() > 2) {
                            //         return ['more than 2 elements', range]
                            //     }
                            //     const first = elements.__get_element_at(0)
                            //     return first.transform<d_out.State_Status>(
                            //         ($) => {
                            //             if ($.value.type[0] !== 'string') {
                            //                 return ['state is not a string', t_ast_to_range.Value(data)]
                            //             }
                            //             const state_name = $.value.type[1].value
                            //             const state_name_range = $.value.type[1].range
                            //             return elements.__get_element_at(1).transform<d_out.State_Status>(
                            //                 ($) => {
                            //                     const value = $.value
                            //                     return def.get_entry(state_name).transform<d_out.State_Status>(
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
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'text': return _pt.ss($, ($) => {
                return ['text', {
                    'definition': $,
                    'found value type': _pt.cc(data, ($) => {
                        switch ($[0]) {
                            case 'string': return _pt.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            // case 'type parameter': return _pt.ss($, ($) => _pdev.implement_me("xx"))
            default: return _pt.au($[0])
        }
    })
}

export const Node = (
    $: d_in.Value,
    $p: {
        'definition': definition.Type_Node,
    }
): d_out.Node => {
    const datax = $
    return {
        'definition': $p.definition,
        'value': datax,
        'type': _pt.cc(datax.type, ($) => {
            switch ($[0]) {
                case 'concrete': return _pt.ss($, ($) => {
                    const data = $
                    return Node_Type(data, {
                        'definition': $p.definition,
                        'range': t_ast_to_range.Value(datax),
                        'temp value': datax,
                    })
                })
                case 'include': return _pt.ss($, ($) => _pdev.implement_me("include node deserialization")) //TODO
                case 'missing data': return _pt.ss($, ($) => _pdev.implement_me("missing data node deserialization")) //TODO
                default: return _pt.au($[0])
            }
        })
    }
}
