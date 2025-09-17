import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../temp_unmashall_result_types"
import * as _in_token from "astn/dist/generated/interface/schemas/token/data_types/unconstrained"
import * as _out from "../../generated/interface/schemas/unmarshall_errors/data_types/unconstrained"

import { impure, pure } from "pareto-standard-operations"

const op = {
    'flatten': pure.list.flatten,
}

export const Optional_Node = (
    $: _in.Optional_Node,
    $p: null
): _out.Errors => {
    return $.transform(
        ($) => Node($, $p),
        () => _ea.array_literal([]), //FIXME! optional node not set is often an error
    )
}

export const Group_Content = (
    $: _in.Group_Content,
    $p: {
        'group range': _in_token.Range
    }
): _out.Errors => {
    return op.flatten(_ea.array_literal([
        impure.dictionary['dictionary of lists to list']($.properties.map(($, key) => _ea.cc($, ($): _out.Errors => {
            switch ($[0]) {
                case 'multiple': return _ea.ss($, ($) => pure.list.flatten($.map(($) => pure.list.flatten(_ea.array_literal([
                    _ea.array_literal<_out.Errors.L>([
                        {
                            'range': $.key.range,
                            'type': ['error', ['duplicate property', {
                                name: key
                            }]]
                        }
                    ]),
                    Optional_Node($.node, null)
                ])))))
                case 'missing': return _ea.ss($, ($) => _ea.array_literal([
                    {
                        'range': $p['group range'],
                        'type': ['error', ['missing property', {
                            name: key
                        }]]
                    }
                ]))
                case 'unique': return _ea.ss($, ($) => Optional_Node($.node, null))
                default: return _ea.au($[0])
            }
        }))),
        impure.dictionary['dictionary of lists to list']($['superfluous entries'].map(($, key): _out.Errors => op.flatten($.map(($) => _ea.array_literal([
            {
                'range': $,
                'type': ['error', ['superfluous property', {
                    name: key
                }]]
            }
        ])))))
    ]))
}

export const Node = (
    $: _in.Node,
    $p: null
): _out.Errors => {
    return _ea.cc($.type, ($): _out.Errors => {
        switch ($[0]) {
            case 'group': return _ea.ss($, ($) => _ea.cc($['found value type'], ($): _out.Errors => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'ordered': return _ea.ss($, ($) => {
                                return Group_Content($.content, {
                                    'group range': _ea.cc($.value, ($) => {
                                        switch ($[0]) {
                                            case 'concise group': return _ea.ss($, ($) => $['<'].range)
                                            case 'list': return _ea.ss($, ($) => $['['].range)
                                            default: return _ea.au($[0])
                                        }
                                    })
                                })
                            })
                            case 'indexed': return _ea.ss($, ($) => {
                                return Group_Content($.content, {
                                    'group range': _ea.cc($.value, ($) => {
                                        switch ($[0]) {
                                            case 'verbose group': return _ea.ss($, ($) => $['('].range)
                                            case 'dictionary': return _ea.ss($, ($) => $['{'].range)
                                            default: return _ea.au($[0])
                                        }
                                    })
                                })
                            })

                            default: return _ea.au($[0])
                        }
                    }))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['verbose group', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'dictionary': return _ea.ss($, ($) => _ea.cc($['found value type'], ($): _out.Errors => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($) => {
                        return impure.dictionary['dictionary of lists to list']($.entries.map(($, key) => {
                            return _ea.cc($, ($): _out.Errors => {
                                switch ($[0]) {
                                    case 'unique': return _ea.ss($, ($) => Optional_Node($, $p))
                                    case 'multiple': return _ea.ss($, ($) => pure.list.flatten($.map(($) => pure.list.flatten(_ea.array_literal([
                                        _ea.array_literal([
                                            {
                                                'range': $.key.range,
                                                'type': ['error', ['duplicate property', {
                                                    name: key
                                                }]]
                                            }
                                        ]),
                                        Optional_Node($.node, $p)
                                    ])))))
                                    default: return _ea.au($[0])
                                }
                            })
                        }))
                    })
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['dictionary', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'number': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => $['correct string type']
                        ? _ea.array_literal([])
                        : _ea.array_literal<_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'boolean': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => $['correct string type']
                        ? _ea.array_literal([])
                        : _ea.array_literal<_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'list': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => op.flatten($.elements.map(($) => Node($, $p))))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['list', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'nothing': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => _ea.array_literal([]))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'reference': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => _ea.array_literal([]))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'component': return _ea.ss($, ($) => {
                return Node($.node, $p)
            })
            case 'identifier value pair': return _ea.ss($, ($) => _edev.implement_me())
            case 'type parameter': return _ea.ss($, ($) => _edev.implement_me())
            case 'optional': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'set': return _ea.ss($, ($) => Node($['child node'], $p))
                            case 'not set': return _ea.ss($, ($) => _ea.array_literal([]))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['set', null], ['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'state': return _ea.ss($, ($) => {
                const sg_def = $.definition
                return _ea.cc($['found value type'], ($): _out.Errors => {
                    switch ($[0]) {
                        case 'valid': return _ea.ss($, ($) => {
                            return _ea.cc($['value type'], ($) => {
                                switch ($[0]) {
                                    case 'state': return _ea.ss($, ($) => {
                                        const xx = $.value
                                        return $['found state definition'].transform(
                                            ($) => Node($.node, $p),
                                            (): _out.Errors => _ea.array_literal([
                                                {
                                                    'range': xx.state.range,
                                                    'type': ['error', ['state', ['unknown state', {
                                                        'found': xx.state.value,
                                                        'expected': sg_def.map(($) => null)
                                                    }]]]
                                                }
                                            ])
                                        )
                                    })
                                    default: return _ea.au($[0])
                                }
                            })
                        })
                        case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                            {
                                'range': $,
                                'type': ['error', ['invalid value type', {
                                    'expected': _ea.array_literal([['state', null]]),
                                }]]
                            }
                        ]))
                        // case 'more than 2 elements': return _ea.ss($, ($) => _ea.array_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['more than 2 elements', null]]]
                        // }]))
                        // case 'missing state name': return _ea.ss($, ($) => _ea.array_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing state name', null]]]
                        // }]))
                        // case 'state is not a string': return _ea.ss($, ($) => _ea.array_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['state is not a string', null]]]
                        // }]))
                        // case 'missing value': return _ea.ss($, ($) => _ea.array_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing value', null]]]
                        // }]))
                        // case 'unknown state': return _ea.ss($, ($) => _ea.array_literal([{
                        //     'range': $.range,
                        //     'type': ['error', ['state', ['unknown state', {
                        //         'found': $.found,
                        //         'expected': $.expected
                        //     }]]]
                        // }]))
                        default: return _ea.au($[0])
                    }
                })
            })
            case 'text': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.array_literal([])
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.array_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            default: return _ea.au($[0])
        }
    })
}