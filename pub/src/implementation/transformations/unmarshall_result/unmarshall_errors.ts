import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../temp/temp_unmashall_result_types"
import * as _in_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/target"
import * as _out from "../../../interface/generated/pareto/schemas/unmarshall_errors/data_types/target"

import { $$ as op_flatten } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/flatten"
import { $$ as op_dicionary_of_lists_to_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/directory_of_lists_to_list"
import { Signature } from "../../../interface/algorithms/transformations/unmarshall_result/unmarshall_errors"


export const Optional_Node = (
    $: _in.Optional_Node,
    $p: null
): _out.Errors => {
    return $.transform(
        ($) => Node($, $p),
        () => _ea.list_literal([]), //FIXME! optional node not set is often an error
    )
}

export const Group_Content = (
    $: _in.Group_Content,
    $p: {
        'group range': _in_token.Range
    }
): _out.Errors => {
    return op_flatten(_ea.list_literal([
        op_dicionary_of_lists_to_list($.properties.map(($, key) => _ea.cc($, ($): _out.Errors => {
            switch ($[0]) {
                case 'multiple': return _ea.ss($, ($) => op_flatten($.map(($) => op_flatten(_ea.list_literal([
                    _ea.list_literal<_out.Errors.L>([
                        {
                            'range': $.key.range,
                            'type': ['error', ['duplicate property', {
                                name: key
                            }]]
                        }
                    ]),
                    Optional_Node($.node, null)
                ])))))
                case 'missing': return _ea.ss($, ($) => _ea.list_literal([
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
        op_dicionary_of_lists_to_list($['superfluous entries'].map(($, key): _out.Errors => op_flatten($.map(($) => _ea.list_literal([
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
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['verbose group', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'dictionary': return _ea.ss($, ($) => _ea.cc($['found value type'], ($): _out.Errors => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($) => {
                        return op_dicionary_of_lists_to_list($.entries.map(($, key) => {
                            return _ea.cc($, ($): _out.Errors => {
                                switch ($[0]) {
                                    case 'unique': return _ea.ss($, ($) => Optional_Node($, $p))
                                    case 'multiple': return _ea.ss($, ($) => op_flatten($.map(($) => op_flatten(_ea.list_literal([
                                        _ea.list_literal([
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
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['dictionary', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'number': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => $['correct string type']
                        ? _ea.list_literal([])
                        : _ea.list_literal<_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'boolean': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => $['correct string type']
                        ? _ea.list_literal([])
                        : _ea.list_literal<_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'list': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => op_flatten($.elements.map(($) => Node($, $p))))
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['list', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'nothing': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => _ea.list_literal([]))
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'reference': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => _ea.list_literal([]))
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'component': return _ea.ss($, ($) => {
                return Node($.node, $p)
            })
            case 'type parameter': return _ea.ss($, ($) => _edev.implement_me())
            case 'optional': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'set': return _ea.ss($, ($) => Node($['child node'], $p))
                            case 'not set': return _ea.ss($, ($) => _ea.list_literal([]))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['set', null], ['not set', null]]),
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
                                    case 'state': return _ea.ss($, ($) => _ea.cc($['value substatus'], ($) => {
                                        switch ($[0]) {
                                            case 'missing data': return _ea.ss($, ($) => _ea.list_literal([
                                                {
                                                    'range': $.range,
                                                    'type': ['error', ['state', ['state is not a string', null]]] //FIXME wrong error
                                                }
                                            ]))
                                            case 'set': return _ea.ss($, ($) => {
                                                {
                                                    const xx = $.value
                                                    return $['found state definition'].transform(
                                                        ($) => Node($.node, $p),
                                                        (): _out.Errors => _ea.list_literal([
                                                            {
                                                                'range': xx.state.range,
                                                                'type': ['error', ['state', ['unknown state', {
                                                                    'found': xx.state.value,
                                                                    'expected': sg_def.map(($) => null)
                                                                }]]]
                                                            }
                                                        ])
                                                    )
                                                }
                                            })
                                            default: return _ea.au($[0])
                                        }
                                    }))
                                    default: return _ea.au($[0])
                                }
                            })
                        })
                        case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                            {
                                'range': $,
                                'type': ['error', ['invalid value type', {
                                    'expected': _ea.list_literal([['state', null]]),
                                }]]
                            }
                        ]))
                        // case 'more than 2 elements': return _ea.ss($, ($) => _ea.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['more than 2 elements', null]]]
                        // }]))
                        // case 'missing state name': return _ea.ss($, ($) => _ea.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing state name', null]]]
                        // }]))
                        // case 'state is not a string': return _ea.ss($, ($) => _ea.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['state is not a string', null]]]
                        // }]))
                        // case 'missing value': return _ea.ss($, ($) => _ea.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing value', null]]]
                        // }]))
                        // case 'unknown state': return _ea.ss($, ($) => _ea.list_literal([{
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
                    case 'valid': return _ea.list_literal([])
                    case 'invalid': return _ea.ss($, ($) => _ea.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _ea.list_literal([['text', null]]),
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