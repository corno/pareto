import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'
import * as pdev from 'exupery-core-dev'

import * as astn from "astn"
import * as ppt from "./post_parse_types"

export type Errors = pt.Array<Error>

import { impure, pure } from "pareto-standard-operations"

export type State_Error =
    | ['more than 2 elements', null]
    | ['missing state name', null]
    | ['state is not a string', null]
    | ['missing value', null]
    | ['unknown state', {
        'found': string
        'expected': pt.Dictionary<null>
    }]

export type Error = {
    'range': astn.d_ast.Range
    'type':
    | ['error',
        | ['invalid value type', {
            'expected':
            | ['text', null]
            | ['group', null]
            | ['dictionary', null]
        }]
        | ['duplicate property', {
            name: string
        }]
        | ['missing property', {
            name: string
        }]
        | ['state', State_Error]
    ]
    | ['warning',
        | ['expected apostrophed string', null]
        | ['expected quoted string', null]
        | ['expected backticked string', null]
        | ['expected undelimited string', null]
    ]
}

export const Document = ($: ppt.Document): Errors => {
    return Node($.content)
}

export const Node = ($: ppt.Node): Errors => {
    return pa.cc($, ($): Errors => {
        switch ($[0]) {
            case 'group': return pa.ss($, ($) => pa.cc($.type, ($): Errors => {
                switch ($[0]) {
                    case 'ordered': return pa.ss($, ($) => pdev.implement_me())
                    case 'indexed': return pa.ss($, ($) => impure.dictionary['dictionary of lists to list']($.properties.map(($, key) => pa.cc($, ($): Errors => {
                        switch ($[0]) {
                            case 'multiple': return pa.ss($, ($) => pure.list.flatten($.map(($) => pure.list.flatten(pa.array_literal([
                                pa.array_literal<Error>([
                                    {
                                        'range': $.range,
                                        'type': ['error', ['duplicate property', {
                                            name: key
                                        }]]
                                    }
                                ]),
                                Node($.node)
                            ])))))
                            case 'missing': return pa.ss($, ($) => pa.array_literal([
                                {
                                    'range': $,
                                    'type': ['error', ['missing property', {
                                        name: key
                                    }]]
                                }
                            ]))
                            case 'unique': return pa.ss($, ($) => Node($))
                            default: return pa.au($[0])
                        }
                    }))))
                    case 'invalid': return pa.ss($, ($) => pa.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': ['group', null],
                            }]]
                        }
                    ]))
                    default: return pa.au($[0])
                }
            }))
            case 'dictionary': return pa.ss($, ($) => pa.cc($.status, ($): Errors => {
                switch ($[0]) {
                    case 'valid': return pa.ss($, ($) => {
                        return impure.dictionary['dictionary of lists to list']($.map(($, key) => {
                            return pa.cc($, ($): Errors => {
                                switch ($[0]) {
                                    case 'unique': return pa.ss($, ($) => Node($))
                                    case 'multiple': return pa.ss($, ($) => pure.list.flatten($.map(($) => pure.list.flatten(pa.array_literal([
                                        pa.array_literal([
                                            {
                                                'range': $.range,
                                                'type': ['error', ['duplicate property', {
                                                    name: key
                                                }]]
                                            }
                                        ]),
                                        Node($.node)
                                    ])))))
                                    default: return pa.au($[0])
                                }
                            })
                        }))
                    })
                    case 'invalid': return pa.ss($, ($) => pa.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': ['dictionary', null],
                            }]]
                        }
                    ]))
                    default: return pa.au($[0])
                }
            }))
            case 'number': return pa.ss($, ($) => pa.cc($.status, ($) => {
                switch ($[0]) {
                    case 'valid': return pa.ss($, ($): Errors => $['correct string type']
                        ? pa.array_literal([])
                        : pa.array_literal<Error>([{
                            'range': $.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return pa.ss($, ($) => pa.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],
                            }]]
                        }
                    ]))
                    default: return pa.au($[0])
                }
            }))
            case 'boolean': return pa.ss($, ($) => pdev.implement_me())
            case 'list': return pa.ss($, ($) => pdev.implement_me())
            case 'nothing': return pa.ss($, ($) => pdev.implement_me())
            case 'reference': return pa.ss($, ($) => pdev.implement_me())
            case 'component': return pa.ss($, ($) => pdev.implement_me())
            case 'identifier value pair': return pa.ss($, ($) => pdev.implement_me())
            case 'type parameter': return pa.ss($, ($) => pdev.implement_me())
            case 'optional': return pa.ss($, ($) => pdev.implement_me())
            case 'state': return pa.ss($, ($) => pa.cc($.status, ($): Errors => {
                switch ($[0]) {
                    case 'valid': return pa.ss($, ($) => Node($.node))
                    case 'more than 2 elements': return pa.ss($, ($) => pa.array_literal([{
                        'range': $,
                        'type': ['error', ['state', ['more than 2 elements', null]]]
                    }]))
                    case 'missing state name': return pa.ss($, ($) => pa.array_literal([{
                        'range': $,
                        'type': ['error', ['state', ['missing state name', null]]]
                    }]))
                    case 'state is not a string': return pa.ss($, ($) => pa.array_literal([{
                        'range': $,
                        'type': ['error', ['state', ['state is not a string', null]]]
                    }]))
                    case 'missing value': return pa.ss($, ($) => pa.array_literal([{
                        'range': $,
                        'type': ['error', ['state', ['missing value', null]]]
                    }]))
                    case 'unknown state': return pa.ss($, ($) => pa.array_literal([{
                        'range': $.range,
                        'type': ['error', ['state', ['unknown state', {
                            'found': $.found,
                            'expected': $.expected
                        }]]]
                    }]))
                    default: return pa.au($[0])
                }
            }))
            case 'text': return pa.ss($, ($) => pa.cc($.status, ($) => {
                switch ($[0]) {
                    case 'valid': return pa.array_literal([])
                    case 'invalid value type': return pa.ss($, ($) => pa.array_literal([
                        {
                            'range': $,
                            'type': ['error', ['invalid value type', {
                                'expected': ['text', null],
                            }]]
                        }
                    ]))
                    default: return pa.au($[0])
                }
            }))
            default: return pa.au($[0])
        }
    })
}