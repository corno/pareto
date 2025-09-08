import * as _ea from 'exupery-core-alg'
import * as pt from 'exupery-core-types'
import * as pdev from 'exupery-core-dev'

import { impure, pure } from "pareto-standard-operations"

import * as definition from "../generated/interface/schemas/schema/data_types/resolved"

import * as _in from "astn/dist/generated/interface/schemas/ast/unconstrained"
import * as _in_token from "astn/dist/generated/interface/schemas/token/unconstrained"

import * as _out from "../temp_unmashall_result_types"

export const Document = (
    $: _in.Document,
    $p: {
        'root type': string
        'definition': definition.Schemas.D.SG.schema,
        'document path': string,
    }
): _out.Document => {

    return {
        'content': Node(
            $.content,
            {
                'definition': $p.definition.types.dictionary.__get_entry($p['root type']).transform(
                    ($) => $,
                    () => {
                        $p.definition.types.dictionary.map(($, key) => {
                            pdev.log_debug_message(`available type: ${key}`)
                        })
                        _ea.panic(`root type ${$p['root type']} not found`)
                    }
                ).node,
                'document path': $p['document path'],
            },
        )
    }

}

export const Optional_Node = (
    $: pt.Optional_Value<_in.Value>,
    $p: {
        'definition': definition.Type_Node,
        'document path': string,
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
        'definition': definition.Type_Node,
        'document path': string,
    }
): _out.Node => {
    const data = $
    return _ea.cc($p.definition, ($): _out.Node => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($): _out.Node => {
                return ['number', {
                    'definition': $,
                    'status': _ea.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'string': return _ea.ss($, ($) => ['valid', {
                                'range': {
                                    'document': $p['document path'],
                                    'range': $.range,
                                },
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
                            default: return pdev.implement_me()
                        }
                    })
                }]
            })
            case 'boolean': return _ea.ss($, ($): _out.Node => {
                return ['boolean', {
                    'definition': $,
                    'status': _ea.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'string': return _ea.ss($, ($) => ['valid', {
                                'range': {
                                    'document': $p['document path'],
                                    'range': $.range,
                                },
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
                            default: return pdev.implement_me()
                        }
                    })
                }]
            })
            case 'list': return _ea.ss($, ($) => pdev.implement_me())
            case 'nothing': return _ea.ss($, ($): _out.Node => {
                return ['nothing', {
                    'definition': $,
                    'status': _ea.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'not set': return _ea.ss($, ($) => ['valid', null])
                            default: return ['invalid value type', {
                                'document': $p['document path'],
                                'range': data.range,
                            }]
                        }
                    })
                }]
            })
            case 'reference': return _ea.ss($, ($): _out.Node => {
                return ['reference', {
                    'definition': $,
                    'status': _ea.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'string': return _ea.ss($, ($) => ['valid', null])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return pdev.implement_me()
                        }
                    })
                }]
            })
            case 'component': return _ea.ss($, ($): _out.Node => {
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
                            'document path': $p['document path'],
                        }
                    )
                }]
                // return pdev.implement_me()
            })
            case 'dictionary': return _ea.ss($, ($): _out.Node => {
                const prop_def = $.node
                return ['dictionary', {
                    'definition': $,
                    'status': _ea.cc(data.type, ($) => {
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
                                return ['valid', entries.map<_out.Entry>(($) => impure.list['expect exactly one element']($).transform(
                                    ($): _out.Entry => ['unique', Optional_Node(
                                        $.value.map(
                                            ($) => $.value,
                                        ),
                                        {
                                            'definition': prop_def,
                                            'document path': $p['document path'],
                                        },
                                    )],
                                    (): _out.Entry => ['multiple', $.map(($): _out.Duplicate_Entry => ({
                                        'node': Optional_Node(
                                            $.value.map(
                                                ($) => $.value,
                                            ),
                                            {
                                                'definition': prop_def,
                                                'document path': $p['document path'],
                                            },
                                        ),
                                        'range': {
                                            'document': $p['document path'],
                                            'range': $.key.range
                                        }
                                    }))]
                                ))]
                            })
                            default: return ['invalid', {
                                'document': $p['document path'],
                                'range': data.range,
                            }]
                        }
                    })
                }]
            })
            case 'group': return _ea.ss($, ($): _out.Node => {
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
                    'type': _ea.cc(data, ($) => {
                        const value = $
                        return _ea.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'indexed collection': return _ea.ss($, ($): _out.Group_Type => {
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
                                    return ['indexed', {
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
                                        })).map(($) => $.map(($) => ({
                                            'document': $p['document path'],
                                            'range': $.key.range,
                                        }))), //select the locations
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
                                                            'document path': $p['document path'],
                                                        },
                                                    )],
                                                    (): _out.Property => ['multiple', $.map(($): _out.Duplicate_Entry => ({
                                                        'node': Optional_Node(
                                                            $.value.map(
                                                                ($) => $.value,
                                                            ),
                                                            {
                                                                'definition': prop_def,
                                                                'document path': $p['document path'],
                                                            },
                                                        ),
                                                        'range': {
                                                            'document': $p['document path'],
                                                            'range': $.key.range,
                                                        }
                                                    }))]
                                                ),
                                                (): _out.Property => ['missing', {
                                                    'document': $p['document path'],
                                                    'range': range,
                                                }]
                                            )
                                        })
                                    }]
                                })
                                //case 'ordered collection': return pdev.implement_me()
                                default: return ['invalid', {
                                    'document': $p['document path'],
                                    'range': value.range,
                                }]
                            }
                        })
                    })
                }]
            })
            case 'identifier value pair': return _ea.ss($, ($) => pdev.implement_me())
            case 'optional': return _ea.ss($, ($): _out.Node => {
                const def = $
                return ['optional', {
                    'definition': $,
                    'status': _ea.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'not set': return _ea.ss($, ($) => ['valid', ['not set', null]])
                            case 'set optional value': return _ea.ss($, ($) => ['valid', ['set', Node(
                                $.value,
                                {
                                    'definition': def,
                                    'document path': $p['document path'],
                                }
                            )]])
                            default: return ['invalid value type', {
                                'document': $p['document path'],
                                'range': data.range,
                            }]
                        }
                    })
                }]
            })
            case 'state group': return _ea.ss($, ($) => {
                const def = $
                return ['state', {
                    'status': _ea.cc(data.type, ($): _out.State_Status => {
                        switch ($[0]) {
                            case 'tagged value': return _ea.ss($, ($) => {
                                const state = $.state
                                const value = $.value
                                return def.__get_entry($.state.value).transform<_out.State_Status>(
                                    ($) => ['valid', {
                                        'node': Node(
                                            value,
                                            {
                                                'definition': $,
                                                'document path': $p['document path'],
                                            },
                                        )
                                    }],
                                    () => ['unknown state', {
                                        'range': {
                                            'document': $p['document path'],
                                            'range': state.range,
                                        },
                                        'found': $.state.value,
                                        'expected': def.map(($) => null)
                                    }]
                                )
                            })
                            case 'ordered collection': return _ea.ss($, ($) => {
                                const elements = _ea.cc($, ($): _in.Elements => {
                                    switch ($[0]) {
                                        case 'list': return _ea.ss($, ($) => $.elements)
                                        case 'concise group': return _ea.ss($, ($) => $.elements)
                                        default: return _ea.au($[0])
                                    }
                                })
                                const range = _ea.cc($, ($): _in_token.Range => {
                                    switch ($[0]) {
                                        case 'list': return _ea.ss($, ($) => $['['].range)
                                        case 'concise group': return _ea.ss($, ($) => $['<'].range)
                                        default: return _ea.au($[0])
                                    }
                                })
                                if (elements.__get_length() > 2) {
                                    return ['more than 2 elements', {
                                        'document': $p['document path'],
                                        'range': range,
                                    }]
                                }
                                const first = elements.__get_element_at(0)
                                return first.transform<_out.State_Status>(
                                    ($) => {
                                        if ($.value.type[0] !== 'string') {
                                            return ['state is not a string', {
                                                'document': $p['document path'],
                                                'range': $.value.range,
                                            }]
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
                                                                'document path': $p['document path'],
                                                            },
                                                        )
                                                    }],
                                                    () => ['unknown state', {
                                                        'range': {
                                                            'document': $p['document path'],
                                                            'range': state_name_range,
                                                        },
                                                        'found': state_name,
                                                        'expected': def.map(($) => null)
                                                    }]
                                                )
                                            },
                                            () => ['missing value', {
                                                'document': $p['document path'],
                                                'range': $.value.range
                                            }]
                                        )
                                    },
                                    () => ['missing state name', {
                                        'document': $p['document path'],
                                        'range': range
                                    }]
                                )

                            })
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return pdev.implement_me()
                        }
                    })
                }]
            })
            case 'text': return _ea.ss($, ($) => {
                return ['text', {
                    'definition': $,
                    'status': _ea.cc(data.type, ($) => {
                        switch ($[0]) {
                            case 'string': return _ea.ss($, ($) => ['valid', null])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid value type', {
                                'document': $p['document path'],
                                'range': data.range,
                            }]
                        }
                    })
                }]
            })
            case 'type parameter': return _ea.ss($, ($) => pdev.implement_me())
            default: return _ea.au($[0])
        }
    })
}
