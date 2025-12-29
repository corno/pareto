import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _in from "../../../../interface/to_be_generated/temp_unmashall_result"
import * as _in_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/target"
import * as _out from "../../../../interface/generated/pareto/schemas/unmarshall_errors/data_types/target"

export const Optional_Node = (
    $: _in.Optional_Node,
    $p: null
): _out.Errors => {
    return $.transform(
        ($) => Node($, $p),
        () => _pt.list_literal([]), //FIXME! optional node not set is often an error
    )
}

export const Group_Content = (
    $: _in.Group_Content,
    $p: {
        'group range': _in_token.Range
    }
): _out.Errors => {
    return _pt.list_literal([
        $.properties.to_list(($, key) => _pt.cc($, ($): _out.Errors => {
            switch ($[0]) {
                case 'multiple': return _pt.ss($, ($) => $.flatten(($) => _pt.list_literal([
                    _pt.list_literal<_out.Errors.L>([
                        {
                            'range': $.key.range,
                            'type': ['error', ['duplicate property', {
                                name: key
                            }]]
                        }
                    ]),
                    Optional_Node($.node, null)
                ]).flatten(($) => $)))
                case 'missing': return _pt.ss($, ($) => _pt.list_literal([
                    {
                        'range': $p['group range'],
                        'type': ['error', ['missing property', {
                            name: key
                        }]]
                    }
                ]))
                case 'unique': return _pt.ss($, ($) => Optional_Node($.node, null))
                default: return _pt.au($[0])
            }
        })).flatten(($) => $),
        $['superfluous entries'].to_list(($, key): _out.Errors => $.flatten(($) => _pt.list_literal([
            {
                'range': $,
                'type': ['error', ['superfluous property', {
                    name: key
                }]]
            }
        ]))).flatten(($) => $)
    ]).flatten(($) => $)
}

export const Node = (
    $: _in.Node,
    $p: null
): _out.Errors => {
    return _pt.cc($.type, ($): _out.Errors => {
        switch ($[0]) {
            case 'group': return _pt.ss($, ($) => _pt.cc($['found value type'], ($): _out.Errors => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($) => _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'ordered': return _pt.ss($, ($) => {
                                return Group_Content($.content, {
                                    'group range': _pt.cc($.value, ($) => {
                                        switch ($[0]) {
                                            case 'concise group': return _pt.ss($, ($) => $['<'].range)
                                            case 'list': return _pt.ss($, ($) => $['['].range)
                                            default: return _pt.au($[0])
                                        }
                                    })
                                })
                            })
                            case 'indexed': return _pt.ss($, ($) => {
                                return Group_Content($.content, {
                                    'group range': _pt.cc($.value, ($) => {
                                        switch ($[0]) {
                                            case 'verbose group': return _pt.ss($, ($) => $['('].range)
                                            case 'dictionary': return _pt.ss($, ($) => $['{'].range)
                                            default: return _pt.au($[0])
                                        }
                                    })
                                })
                            })

                            default: return _pt.au($[0])
                        }
                    }))
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['verbose group', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'dictionary': return _pt.ss($, ($) => _pt.cc($['found value type'], ($): _out.Errors => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($) => {
                        return $.entries.to_list(($, key) => {
                            return _pt.cc($, ($): _out.Errors => {
                                switch ($[0]) {
                                    case 'unique': return _pt.ss($, ($) => Optional_Node($, $p))
                                    case 'multiple': return _pt.ss($, ($) => $.flatten(($) => _pt.list_literal<_out.Errors>([
                                        _pt.list_literal([
                                            {
                                                'range': $.key.range,
                                                'type': ['error', ['duplicate property', {
                                                    name: key
                                                }]]
                                            }
                                        ]),
                                        Optional_Node($.node, $p)
                                    ]).flatten(($) => $)))
                                    default: return _pt.au($[0])
                                }
                            })
                        }).flatten(($) => $)
                    })
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['dictionary', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'number': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($): _out.Errors => $['correct string type']
                        ? _pt.list_literal([])
                        : _pt.list_literal<_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'boolean': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($): _out.Errors => $['correct string type']
                        ? _pt.list_literal([])
                        : _pt.list_literal<_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'list': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($): _out.Errors => $.elements.flatten(($) => Node($, $p)))
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['list', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'nothing': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($): _out.Errors => _pt.list_literal([]))
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'reference': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($): _out.Errors => _pt.list_literal([]))
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'component': return _pt.ss($, ($) => {
                return Node($.node, $p)
            })
            case 'type parameter': return _pt.ss($, ($) => _pdev.implement_me("xx"))
            case 'optional': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _pt.ss($, ($): _out.Errors => _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'set': return _pt.ss($, ($) => Node($['child node'], $p))
                            case 'not set': return _pt.ss($, ($) => _pt.list_literal([]))
                            default: return _pt.au($[0])
                        }
                    }))
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['set', null], ['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            case 'state': return _pt.ss($, ($) => {
                const sg_def = $.definition
                return _pt.cc($['found value type'], ($): _out.Errors => {
                    switch ($[0]) {
                        case 'valid': return _pt.ss($, ($) => {
                            return _pt.cc($['value type'], ($) => {
                                switch ($[0]) {
                                    case 'state': return _pt.ss($, ($) => _pt.cc($['value substatus'], ($) => {
                                        switch ($[0]) {
                                            case 'missing data': return _pt.ss($, ($) => _pt.list_literal([
                                                {
                                                    'range': $.range,
                                                    'type': ['error', ['state', ['state is not a string', null]]] //FIXME wrong error
                                                }
                                            ]))
                                            case 'set': return _pt.ss($, ($) => {
                                                {
                                                    const xx = $.value
                                                    return $['found state definition'].transform(
                                                        ($) => Node($.node, $p),
                                                        (): _out.Errors => _pt.list_literal([
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
                                            default: return _pt.au($[0])
                                        }
                                    }))
                                    default: return _pt.au($[0])
                                }
                            })
                        })
                        case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                            {
                                'range': $,
                                'type': ['error', ['invalid value type', {
                                    'expected': _pt.list_literal([['state', null]]),
                                }]]
                            }
                        ]))
                        // case 'more than 2 elements': return _pt.ss($, ($) => _pt.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['more than 2 elements', null]]]
                        // }]))
                        // case 'missing state name': return _pt.ss($, ($) => _pt.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing state name', null]]]
                        // }]))
                        // case 'state is not a string': return _pt.ss($, ($) => _pt.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['state is not a string', null]]]
                        // }]))
                        // case 'missing value': return _pt.ss($, ($) => _pt.list_literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing value', null]]]
                        // }]))
                        // case 'unknown state': return _pt.ss($, ($) => _pt.list_literal([{
                        //     'range': $.range,
                        //     'type': ['error', ['state', ['unknown state', {
                        //         'found': $.found,
                        //         'expected': $.expected
                        //     }]]]
                        // }]))
                        default: return _pt.au($[0])
                    }
                })
            })
            case 'text': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _pt.list_literal([])
                    case 'invalid': return _pt.ss($, ($) => _pt.list_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _pt.list_literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _pt.au($[0])
                }
            }))
            default: return _pt.au($[0])
        }
    })
}