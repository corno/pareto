import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../temp_unmashall_result_types"
import * as _out from "../../generated/interface/schemas/unmarshall_errors/data_types/unconstrained"

import { impure, pure } from "pareto-standard-operations"


export const Node = (
    $: _in.Node,
    $p: {
        'document path': string,
    }
): _out.Errors => {
    const make_range = (
        range: _out.Range,
    ): _out.Document_Range => {
        return {
            'document': $p['document path'],
            'range': range
        }
    }
    return _ea.cc($.type, ($): _out.Errors => {
        switch ($[0]) {
            case 'group': return _ea.ss($, ($) => _ea.cc($['found value type'], ($): _out.Errors => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'ordered': return _ea.ss($, ($) => _edev.implement_me())
                            case 'indexed': return _ea.ss($, ($) => {
                                const foo = $
                                return impure.dictionary['dictionary of lists to list']($.properties.map(($, key) => _ea.cc($, ($): _out.Errors => {
                                    switch ($[0]) {
                                        case 'multiple': return _ea.ss($, ($) => pure.list.flatten($.map(($) => pure.list.flatten(_ea.array_literal([
                                            _ea.array_literal<_out.Errors.L>([
                                                {
                                                    'range': make_range($.key.range),
                                                    'type': ['error', ['duplicate property', {
                                                        name: key
                                                    }]]
                                                }
                                            ]),
                                            Node($.node, $p)
                                        ])))))
                                        case 'missing': return _ea.ss($, ($) => _ea.array_literal([
                                            {
                                                'range': make_range(_ea.cc(foo.value, ($) => {
                                                    switch ($[0]) {
                                                        case 'dictionary': return _ea.ss($, ($) => $['{'].range) //curlies are not correct for groups, but we handle it
                                                        case 'verbose group': return _ea.ss($, ($) => $['('].range)
                                                        default: return _ea.au($[0])
                                                    }
                                                })),
                                                'type': ['error', ['missing property', {
                                                    name: key
                                                }]]
                                            }
                                        ]))
                                        case 'unique': return _ea.ss($, ($) => Node($.node, $p))
                                        default: return _ea.au($[0])
                                    }
                                })))
                            })

                            default: return _ea.au($[0])
                        }
                    }))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['group', null],
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
                                    case 'unique': return _ea.ss($, ($) => Node($, $p))
                                    case 'multiple': return _ea.ss($, ($) => pure.list.flatten($.map(($) => pure.list.flatten(_ea.array_literal([
                                        _ea.array_literal([
                                            {
                                                'range': make_range($.key.range),
                                                'type': ['error', ['duplicate property', {
                                                    name: key
                                                }]]
                                            }
                                        ]),
                                        Node($.node, $p)
                                    ])))))
                                    default: return _ea.au($[0])
                                }
                            })
                        }))
                    })
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['dictionary', null],
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
                            'range': make_range($.range),
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],
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
                            'range': make_range($.range),
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'list': return _ea.ss($, ($) => _edev.implement_me())
            case 'nothing': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($): _out.Errors => _ea.array_literal([]))
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],//FIXME -> ['nothing', null]
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
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],
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
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],//FIXME -> ['set or not set', null]
                            }]]
                        }
                    ]))
                    default: return _ea.au($[0])
                }
            }))
            case 'state': return _ea.ss($, ($) => _ea.cc($.status, ($): _out.Errors => {
                switch ($[0]) {
                    case 'valid': return _ea.ss($, ($) => Node($.node, $p))
                    case 'more than 2 elements': return _ea.ss($, ($) => _ea.array_literal([{
                        'range': make_range($),
                        'type': ['error', ['state', ['more than 2 elements', null]]]
                    }]))
                    case 'missing state name': return _ea.ss($, ($) => _ea.array_literal([{
                        'range': make_range($),
                        'type': ['error', ['state', ['missing state name', null]]]
                    }]))
                    case 'state is not a string': return _ea.ss($, ($) => _ea.array_literal([{
                        'range': make_range($),
                        'type': ['error', ['state', ['state is not a string', null]]]
                    }]))
                    case 'missing value': return _ea.ss($, ($) => _ea.array_literal([{
                        'range': make_range($),
                        'type': ['error', ['state', ['missing value', null]]]
                    }]))
                    case 'unknown state': return _ea.ss($, ($) => _ea.array_literal([{
                        'range': make_range($.range),
                        'type': ['error', ['state', ['unknown state', {
                            'found': $.found,
                            'expected': $.expected
                        }]]]
                    }]))
                    default: return _ea.au($[0])
                }
            }))
            case 'text': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _ea.array_literal([])
                    case 'invalid': return _ea.ss($, ($) => _ea.array_literal([
                        {
                            'range': make_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],
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