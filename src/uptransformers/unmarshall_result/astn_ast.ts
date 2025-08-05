import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'
import * as pdev from 'exupery-core-dev'

import { impure, pure } from "pareto-standard-operations"

import * as definition from "../../generated/interface/schemas/schema/resolved"

import * as _in from "astn/dist/generated/interface/schemas/ast/unconstrained"
import * as _in_token from "astn/dist/generated/interface/schemas/token/unconstrained"

import * as _out from "../../temp_unmashall_result_types"

export const Document = (
    $: _in.Document,
    $p: {
        definition: definition.Schemas.D.SG.schema,
    }
): _out.Document => {

    return {
        'content': Node(
            $.content,
            {
                'definition': $p.definition.types.dictionary.__get_entry("Root").transform(
                    ($) => $,
                    () => pa.panic(`boekhouding schema Root type not found`)
                ).node
            },
        )
    }

}

export const Optional_Node = (
    $: pt.Optional_Value<_in.Value>,
    $p: {
        definition: definition.Type_Node,
    }
): _out.Node => {
    return $.transform(
        ($) => Node($, $p),
        () => pdev.implement_me()
    )
}

export const Node = (
    $: _in.Value,
    $p: {
        definition: definition.Type_Node,
    }
): _out.Node => {
    const data = $
    return pa.cc($p.definition, ($): _out.Node => {
        switch ($[0]) {
            case 'number': return pa.ss($, ($): _out.Node => {
                return ['number', {
                    'definition': $,
                    'status': pa.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'string': return pa.ss($, ($) => ['valid', {
                                'range': $.range,
                                'correct string type': pa.cc($.type, ($) => {
                                    switch ($[0]) {
                                        case 'quoted': return true
                                        case 'apostrophed': return false
                                        case 'undelimited': return true
                                        case 'backticked': return false
                                        default: return pa.au($[0])
                                    }
                                })
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return pdev.implement_me()
                        }
                    })
                }]
            })
            case 'boolean': return pa.ss($, ($) => pdev.implement_me())
            case 'list': return pa.ss($, ($) => pdev.implement_me())
            case 'nothing': return pa.ss($, ($) => pdev.implement_me())
            case 'reference': return pa.ss($, ($) => pdev.implement_me())
            case 'component': return pa.ss($, ($) => pdev.implement_me())
            case 'dictionary': return pa.ss($, ($): _out.Node => {
                const prop_def = $.node
                return ['dictionary', {
                    'definition': $,
                    'status': pa.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'indexed collection': return pa.ss($, ($) => {
                                const entries = impure.list.group(pa.cc($, ($): _in.Key_Value_Pairs => {
                                    switch ($[0]) {
                                        case 'dictionary': return pa.ss($, ($) => $.entries)
                                        case 'verbose group': return pa.ss($, ($) => $.entries)
                                        default: return pa.au($[0])
                                    }
                                }).map(($) => {
                                    return {
                                        'key': $.key.value,
                                        'value': $
                                    }
                                }))
                                return ['valid', entries.map<_out.Entry>(($) => impure.list['expect exactly one element']($).transform(
                                    ($): _out.Entry => ['unique', Optional_Node(
                                        $.value.map(
                                            ($) => $.value,
                                        ),
                                        {
                                            'definition': prop_def,
                                        },
                                    )],
                                    (): _out.Entry => ['multiple', $.map(($): _out.Duplicate_Entry => ({
                                        'node': Optional_Node(
                                            $.value.map(
                                                ($) => $.value,
                                            ),
                                            {
                                                'definition': prop_def,
                                            },
                                        ),
                                        'range': $.key.range
                                    }))]
                                ))]
                            })
                            default: return ['invalid', data.range]
                        }
                    })
                }]
            })
            case 'group': return pa.ss($, ($): _out.Node => {
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
                    'type': pa.cc(data, ($) => {
                        const value = $
                        return pa.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'indexed collection': return pa.ss($, ($): _out.Group_Type => {
                                    const entries = impure.list.group(pa.cc($, ($): _in.Key_Value_Pairs => {
                                        switch ($[0]) {
                                            case 'dictionary': return pa.ss($, ($) => $.entries)
                                            case 'verbose group': return pa.ss($, ($) => $.entries)
                                            default: return pa.au($[0])
                                        }
                                    }).map(($) => {
                                        return {
                                            'key': $.key.value,
                                            'value': $
                                        }
                                    }))
                                    const range: _in_token.Range = pa.cc($, ($) => {
                                        switch ($[0]) {
                                            case 'dictionary': return pa.ss($, ($) => $['{'].range)
                                            case 'verbose group': return pa.ss($, ($) => $['('].range)
                                            default: return pa.au($[0])
                                        }
                                    })
                                    return ['indexed', {
                                        'superfluous entries': pure.dictionary.filter(impure.dictionary.merge(
                                            entries,
                                            {
                                                'supporting dictionary': group_def
                                            }
                                        ).map(($) => {
                                            return $.supporting.transform( //drop all the ones for which there is a definition
                                                ($) => pa.not_set(),
                                                () => pa.set($.context)
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
                                                    ($): _out.Property => ['unique', Optional_Node(
                                                        $.value.map(
                                                            ($) => $.value,
                                                        ),
                                                        {
                                                            'definition': prop_def,
                                                        },
                                                    )],
                                                    (): _out.Property => ['multiple', $.map(($): _out.Duplicate_Entry => ({
                                                        'node': Optional_Node(
                                                            $.value.map(
                                                                ($) => $.value,
                                                            ),
                                                            {
                                                                'definition': prop_def,
                                                            },
                                                        ),
                                                        'range': $.key.range
                                                    }))]
                                                ),
                                                (): _out.Property => ['missing', range]
                                            )
                                        })
                                    }]
                                })
                                //case 'ordered collection': return pdev.implement_me()
                                default: return ['invalid', value.range]
                            }
                        })
                    })
                }]
            })
            case 'identifier value pair': return pa.ss($, ($) => pdev.implement_me())
            case 'optional': return pa.ss($, ($) => pdev.implement_me())
            case 'state group': return pa.ss($, ($) => {
                const def = $
                return ['state', {
                    'status': pa.cc(data.type, ($): _out.State_Status => {
                        switch ($[0]) {
                            case 'tagged value': return pa.ss($, ($) => {
                                const state = $.state
                                const value = $.value
                                return def.__get_entry($.state.value).transform<_out.State_Status>(
                                    ($) => ['valid', {
                                        'node': Node(
                                            value,
                                            {
                                                'definition': $,
                                            },
                                        )
                                    }],
                                    () => ['unknown state', {
                                        'range': $.state.range,
                                        'found': $.state.value,
                                        'expected': def.map(($) => null)
                                    }]
                                )
                            })
                            case 'ordered collection': return pa.ss($, ($) => {
                                const elements = pa.cc($, ($): _in.Elements => {
                                    switch ($[0]) {
                                        case 'list': return pa.ss($, ($) => $.elements)
                                        case 'concise group': return pa.ss($, ($) => $.elements)
                                        default: return pa.au($[0])
                                    }
                                })
                                const range = pa.cc($, ($): _in_token.Range => {
                                    switch ($[0]) {
                                        case 'list': return pa.ss($, ($) => $['['].range)
                                        case 'concise group': return pa.ss($, ($) => $['<'].range)
                                        default: return pa.au($[0])
                                    }
                                })
                                if (elements.__get_length() > 2) {
                                    return ['more than 2 elements', range]
                                }
                                const first = elements.__get_element_at(0)
                                return first.transform<_out.State_Status>(
                                    ($) => {
                                        if ($.value.type[0] !== 'string') {
                                            return ['state is not a string', $.value.range]
                                        }
                                        const state_name = $.value.type[1].value
                                        const state_name_range = $.value.type[1].range
                                        return elements.__get_element_at(1).transform<_out.State_Status>(
                                            ($) => {
                                                const value = $.value
                                                return def.__get_entry(state_name).transform<_out.State_Status>(
                                                    ($) => ['valid', {
                                                        'node': Node(
                                                            value,
                                                            {
                                                                'definition': $,
                                                            },
                                                        )
                                                    }],
                                                    () => ['unknown state', {
                                                        'range': state_name_range,
                                                        'found': state_name,
                                                        'expected': def.map(($) => null)
                                                    }]
                                                )
                                            },
                                            () => ['missing value', $.value.range]
                                        )
                                    },
                                    () => ['missing state name', range]
                                )

                            })
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return pdev.implement_me()
                        }
                    })
                }]
            })
            case 'text': return pa.ss($, ($) => {
                return ['text', {
                    'definition': $,
                    'status': pa.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'string': return pa.ss($, ($) => ['valid', null])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid value type', data.range]
                        }
                    })
                }]
            })
            case 'type parameter': return pa.ss($, ($) => pdev.implement_me())
            default: return pa.au($[0])
        }
    })
}
