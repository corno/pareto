import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/to_be_generated/temp_unmashall_result"
import * as d_in_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/target"
import * as d_out from "../../../../../interface/generated/pareto/schemas/unmarshall_errors/data_types/target"

export const Optional_Node = (
    $: d_in.Optional_Node,
    $p: null
): d_out.Errors => {
    return $.transform(
        ($) => Node($, $p),
        () => _p.list.literal([]), //FIXME! optional node not set is often an error
    )
}

export const Group_Content = (
    $: d_in.Group_Content,
    $p: {
        'group range': d_in_token.Range
    }
): d_out.Errors => {
    return _p.list.literal([
        $.properties.to_list(($, key) => _p.cc($, ($): d_out.Errors => {
            switch ($[0]) {
                case 'multiple': return _p.ss($, ($) => $.flatten(($) => _p.list.literal([
                    _p.list.literal<d_out.Errors.L>([
                        {
                            'range': $.key.range,
                            'type': ['error', ['duplicate property', {
                                name: key
                            }]]
                        }
                    ]),
                    Optional_Node($.node, null)
                ]).flatten(($) => $)))
                case 'missing': return _p.ss($, ($) => _p.list.literal([
                    {
                        'range': $p['group range'],
                        'type': ['error', ['missing property', {
                            name: key
                        }]]
                    }
                ]))
                case 'unique': return _p.ss($, ($) => Optional_Node($.node, null))
                default: return _p.au($[0])
            }
        })).flatten(($) => $),
        $['superfluous entries'].to_list(($, key): d_out.Errors => $.flatten(($) => _p.list.literal([
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
    $: d_in.Node,
    $p: null
): d_out.Errors => {
    return _p.cc($.type, ($): d_out.Errors => {
        switch ($[0]) {
            case 'group': return _p.ss($, ($) => _p.cc($['found value type'], ($): d_out.Errors => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => _p.cc($, ($) => {
                        switch ($[0]) {
                            case 'ordered': return _p.ss($, ($) => Group_Content($.content, {
                                'group range': _p.cc($.value, ($) => {
                                    switch ($[0]) {
                                        case 'concise group': return _p.ss($, ($) => $['<'].range)
                                        case 'list': return _p.ss($, ($) => $['['].range)
                                        default: return _p.au($[0])
                                    }
                                })
                            }))
                            case 'indexed': return _p.ss($, ($) => Group_Content($.content, {
                                'group range': _p.cc($.value, ($) => {
                                    switch ($[0]) {
                                        case 'verbose group': return _p.ss($, ($) => $['('].range)
                                        case 'dictionary': return _p.ss($, ($) => $['{'].range)
                                        default: return _p.au($[0])
                                    }
                                })
                            }))

                            default: return _p.au($[0])
                        }
                    }))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['verbose group', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'dictionary': return _p.ss($, ($) => _p.cc($['found value type'], ($): d_out.Errors => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => {
                        return $.entries.to_list(($, key) => _p.cc($, ($): d_out.Errors => {
                            switch ($[0]) {
                                case 'unique': return _p.ss($, ($) => Optional_Node($, $p))
                                case 'multiple': return _p.ss($, ($) => $.flatten(($) => _p.list.literal<d_out.Errors>([
                                    _p.list.literal([
                                        {
                                            'range': $.key.range,
                                            'type': ['error', ['duplicate property', {
                                                name: key
                                            }]]
                                        }
                                    ]),
                                    Optional_Node($.node, $p)
                                ]).flatten(($) => $)))
                                default: return _p.au($[0])
                            }
                        })).flatten(($) => $)
                    })
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['dictionary', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'number': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => $['correct string type']
                        ? _p.list.literal([])
                        : _p.list.literal<d_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'boolean': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => $['correct string type']
                        ? _p.list.literal([])
                        : _p.list.literal<d_out.Errors.L>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'list': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => $.elements.flatten(($) => Node($, $p)))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['list', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'nothing': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.literal([]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'reference': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.literal([]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'component': return _p.ss($, ($) => {
                return Node($.node, $p)
            })
            case 'type parameter': return _p.ss($, ($) => _pdev.implement_me("xx"))
            case 'optional': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.cc($, ($) => {
                        switch ($[0]) {
                            case 'set': return _p.ss($, ($) => Node($['child node'], $p))
                            case 'not set': return _p.ss($, ($) => _p.list.literal([]))
                            default: return _p.au($[0])
                        }
                    }))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['set', null], ['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => {
                const sg_def = $.definition
                return _p.cc($['found value type'], ($): d_out.Errors => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => {
                            return _p.cc($['value type'], ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => _p.cc($['value substatus'], ($) => {
                                        switch ($[0]) {
                                            case 'missing data': return _p.ss($, ($) => _p.list.literal([
                                                {
                                                    'range': $.range,
                                                    'type': ['error', ['state', ['state is not a string', null]]] //FIXME wrong error
                                                }
                                            ]))
                                            case 'set': return _p.ss($, ($) => {
                                                {
                                                    const xx = $.value
                                                    return $['found state definition'].transform(
                                                        ($) => Node($.node, $p),
                                                        (): d_out.Errors => _p.list.literal([
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
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        })
                        case 'invalid': return _p.ss($, ($) => _p.list.literal([
                            {
                                'range': $,
                                'type': ['error', ['invalid value type', {
                                    'expected': _p.list.literal([['state', null]]),
                                }]]
                            }
                        ]))
                        // case 'more than 2 elements': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['more than 2 elements', null]]]
                        // }]))
                        // case 'missing state name': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing state name', null]]]
                        // }]))
                        // case 'state is not a string': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['state is not a string', null]]]
                        // }]))
                        // case 'missing value': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing value', null]]]
                        // }]))
                        // case 'unknown state': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $.range,
                        //     'type': ['error', ['state', ['unknown state', {
                        //         'found': $.found,
                        //         'expected': $.expected
                        //     }]]]
                        // }]))
                        default: return _p.au($[0])
                    }
                })
            })
            case 'text': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.list.literal([])
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            default: return _p.au($[0])
        }
    })
}