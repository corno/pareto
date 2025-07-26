import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'
import * as pdev from 'exupery-core-dev'

import { impure, pure } from "pareto-standard-operations"

import * as x from "../../generated/interface/schemas/schema/resolved"

import * as astn from "astn"

import * as out from "./post_parse_types"

export const Document = (
    definition: x.Schemas.D.SG.schema,
    data: astn.d_ast.Document
): out.Document => {

    return {
        'content': Node(
            definition.types.dictionary.__get_entry("Root").transform(
                ($) => $,
                () => pa.panic(`boekhouding schema Root type not found`)
            ).node,
            data.content
        )
    }

}

export const Optional_Node = (
    definition: x.Type_Node,
    data: pt.Optional_Value<astn.d_ast.Value>
): out.Node => {
    return data.transform(
        ($) => Node(definition, $),
        () => pdev.implement_me()
    )
}

export const Node = (
    definition: x.Type_Node,
    data: astn.d_ast.Value
): out.Node => {
    return pa.cc(definition, ($): out.Node => {
        switch ($[0]) {
            case 'number': return pa.ss($, ($): out.Node => {
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
            case 'dictionary': return pa.ss($, ($): out.Node => {
                const prop_def = $.node
                return ['dictionary', {
                    'definition': $,
                    'status': pa.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'indexed collection': return pa.ss($, ($) => {
                                const entries = impure.list.group(pa.cc($, ($): astn.d_ast.Key_Value_Pairs => {
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
                                return ['valid', entries.map<out.Entry>(($) => impure.list['expect exactly one element']($).transform(
                                    ($): out.Entry => ['unique', Optional_Node(
                                        prop_def,
                                        $.value.map(
                                            ($) => $.value,
                                        )
                                    )],
                                    (): out.Entry => ['multiple', $.map(($): out.Duplicate_Entry => ({
                                        'node': Optional_Node(
                                            prop_def,
                                            $.value.map(
                                                ($) => $.value,
                                            )
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
            case 'group': return pa.ss($, ($): out.Node => {
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
                                    case 'indexed collection': return pa.ss($, ($): out.Group_Type => {
                                        const entries = impure.list.group(pa.cc($, ($): astn.d_ast.Key_Value_Pairs => {
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
                                        const range: astn.d_ast.Range = pa.cc($, ($) => {
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
                                            ).map<out.Property>(($) => {
                                                const prop_def = $.context
                                                return $.supporting.transform(
                                                    ($): out.Property => impure.list['expect exactly one element']($).transform(
                                                        ($): out.Property => ['unique', Optional_Node(
                                                            prop_def,
                                                            $.value.map(
                                                                ($) => $.value,
                                                            )
                                                        )],
                                                        (): out.Property => ['multiple', $.map(($): out.Duplicate_Entry => ({
                                                            'node': Optional_Node(
                                                                prop_def,
                                                                $.value.map(
                                                                    ($) => $.value,
                                                                )
                                                            ),
                                                            'range': $.key.range
                                                        }))]
                                                    ),
                                                    (): out.Property => ['missing', range]
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
                    'status': pa.cc(data.type, ($): out.State_Status => {
                        switch ($[0]) {
                            case 'tagged value': return pa.ss($, ($) => {
                                const state = $.state
                                const value = $.value
                                return def.__get_entry($.state.value).transform<out.State_Status>(
                                    ($) => ['valid', {
                                        'node': Node(
                                            $,
                                            value
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
                                const elements = pa.cc($, ($): astn.d_ast.Elements => {
                                    switch ($[0]) {
                                        case 'list': return pa.ss($, ($) => $.elements)
                                        case 'concise group': return pa.ss($, ($) => $.elements)
                                        default: return pa.au($[0])
                                    }
                                })
                                const range = pa.cc($, ($): astn.d_ast.Range => {
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
                                return first.transform<out.State_Status>(
                                    ($) => {
                                        if ($.value.type[0] !== 'string') {
                                            return ['state is not a string', $.value.range]
                                        }
                                        const state_name = $.value.type[1].value
                                        const state_name_range = $.value.type[1].range
                                        return elements.__get_element_at(1).transform<out.State_Status>(
                                            ($) => {
                                                const value = $.value
                                                return def.__get_entry(state_name).transform<out.State_Status>(
                                                    ($) => ['valid', {
                                                        'node': Node(
                                                            $,
                                                            value
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
