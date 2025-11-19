import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _edev from 'exupery-core-dev'

import * as definition from "../../../interface/generated/pareto/schemas/schema/data_types/source"

import * as _in from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as _in_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/target"

import * as t_ast_to_range from "astn/dist/implementation/algorithms/transformers/authoring_parse_tree/temp_value_range"

import * as _out from "../../../temp/temp_unmashall_result_types"

import { $$ as op_group } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/group"
import { $$ as op_expect_exactly_one_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/expect_exactly_one_element"
import { $$ as op_dictionary_filter } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"
import { $$ as op_dictionary_merge } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/merge"
import { Signature } from "../../../interface/algorithms/transformations/temp/unmarshall_astn_ast"


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

export const Node_Type = (
    $: _in.Concrete_Value,
    $p: {
        'definition': definition.Type_Node,
        'range': _in_token.Range,
        'temp value': _in.Value,
    }
): _out.Node_Type => {
    const data = $
    return _ea.cc($p.definition, ($): _out.Node_Type => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($): _out.Node_Type => {
                return ['number', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
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
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'boolean': return _ea.ss($, ($): _out.Node_Type => {
                return ['boolean', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
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
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'list': return _ea.ss($, ($) => {
                const prop_def = $.node
                return ['list', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
                        switch ($[0]) {
                            case 'ordered collection': return _ea.ss($, ($) => {
                                return ['valid', {
                                    'value': $,
                                    'elements': _edev.implement_me()
                                }]
                            })
                            default: return ['invalid', $p.range]

                        }
                    })
                }]
            })
            case 'nothing': return _ea.ss($, ($): _out.Node_Type => {
                return ['nothing', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
                        switch ($[0]) {
                            case 'not set': return _ea.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'reference': return _ea.ss($, ($): _out.Node_Type => {
                return ['reference', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
                        switch ($[0]) {
                            case 'string': return _ea.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'component': return _ea.ss($, ($): _out.Node_Type => {
                return ['component', {
                    'definition': $,
                    'node': Node(
                        $p['temp value'],
                        {
                            'definition': _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'external': return _ea.ss($, ($) => $.type.entry.node)
                                    case 'internal': return _ea.ss($, ($) => $.entry.node)
                                    case 'internal cyclic': return _ea.ss($, ($) => $.entry['get circular dependent']().node)
                                    default: return _ea.au($[0])
                                }
                            }),
                        }
                    )
                }]
            })
            case 'dictionary': return _ea.ss($, ($): _out.Node_Type => {
                const prop_def = $.node
                return ['dictionary', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
                        switch ($[0]) {
                            case 'indexed collection': return _ea.ss($, ($) => {
                                const entries = op_group(_ea.cc($, ($): _in.Key_Value_Pairs => {
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
                                    'entries': entries.map<_out.Entry>(($) => op_expect_exactly_one_element($).transform(
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
                            default: return ['invalid', $p.range]
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
                // //                 _edev.log_debug_message(`clashing key: ${key}`)
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
                // //                         _edev.log_debug_message(`property ${key} found in data`)
                // //                         // do_node(
                // //                         //     $.type,
                // //                         //     $.value
                // //                         // )
                // //                     },
                // //                     () => {
                // //                         _edev.log_debug_message(`property ${key} not found in data`)
                // //                     }
                // //                 )

                // //             })

                // //         })
                // //         default: return _edev.implement_me()
                // //     }
                // // })
                return ['group', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
                        const value = $
                        return _ea.cc($, ($) => {
                            switch ($[0]) {
                                case 'indexed collection': return _ea.ss($, ($): _out.Group_Found_Value_Type => {
                                    const entries = op_group(_ea.cc($, ($): _in.Key_Value_Pairs => {
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
                                        'content': {
                                            'superfluous entries': op_dictionary_filter(
                                                op_dictionary_merge(
                                                    entries,
                                                    {
                                                        'supporting dictionary': group_def.dictionary
                                                    }
                                                ).map(($) => {
                                                    return $.supporting.transform( //drop all the ones for which there is a definition
                                                        ($) => _ea.not_set(),
                                                        () => _ea.set($.context)
                                                    )
                                                })
                                            ).map(($) => $.map(($) => $.key.range)), //select the locations
                                            'properties': op_dictionary_merge(
                                                group_def.dictionary,
                                                {
                                                    'supporting dictionary': entries
                                                }
                                            ).map<_out.Property>(($) => {
                                                const prop_def = $.context
                                                return $.supporting.transform(
                                                    ($): _out.Property => op_expect_exactly_one_element($).transform(
                                                        ($): _out.Property => ['unique', {
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
                                                        (): _out.Property => ['multiple', $.map(($): _out.Entry_Data => ({
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
                                                    (): _out.Property => ['missing', range]
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
            case 'optional': return _ea.ss($, ($): _out.Node_Type => {
                const def = $
                return ['optional', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
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
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'state group': return _ea.ss($, ($): _out.Node_Type => {
                const def = $
                return ['state', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($): _out.Node_Type_SG_State_found_value_type => {
                        switch ($[0]) {
                            case 'tagged value': return _ea.ss($, ($): _out.Node_Type_SG_State_found_value_type => {
                                const tv = $
                                return ['valid', {
                                    'value type': ['state', {
                                        'value substatus': _ea.cc($.status, ($): _out.Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus => {
                                        switch ($[0]) {
                                            case 'missing data': return _ea.ss($, ($) => ['missing data', $['#']])
                                            case 'set': return _ea.ss($, ($): _out.Node_Type_SG_State_found_value_type_valid_value_type_SG_state_value_substatus => {
                                                const state = $.state
                                                const value = $.value
                                                return ['set', {
                                                        'value': $,
                                                        'found state definition': def.__get_entry($.state.value).map(
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
                                            default: return _ea.au($[0])
                                        }
                                    })
                                    }]
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
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'text': return _ea.ss($, ($) => {
                return ['text', {
                    'definition': $,
                    'found value type': _ea.cc(data, ($) => {
                        switch ($[0]) {
                            case 'string': return _ea.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            // case 'type parameter': return _ea.ss($, ($) => _edev.implement_me())
            default: return _ea.au($[0])
        }
    })
}

export const Node = (
    $: _in.Value,
    $p: {
        'definition': definition.Type_Node,
    }
): _out.Node => {
    const datax = $
    return {
        'definition': $p.definition,
        'value': datax,
        'type': _ea.cc(datax.type, ($) => {
            switch ($[0]) {
                case 'concrete': return _ea.ss($, ($) => {
                    const data = $
                    return Node_Type(data, {
                        'definition': $p.definition,
                        'range': t_ast_to_range.Value(datax),
                        'temp value': datax,
                    })
                })
                case 'include': return _ea.ss($, ($) => _edev.implement_me())
                case 'missing data': return _ea.ss($, ($) => _edev.implement_me())
                default: return _ea.au($[0])
            }
        })
    }
}
