import * as p_ from 'pareto-core/schema'

export type Schema_Reference =
    | ['sibling', string]
    | ['external', {
        'package': string
        'schema': string
    }]
    | ['child', {
        'module': string
        'schema': string
    }]

