import * as p_ from 'pareto-core/interface/data'

export type Type_Reference =
    | ['local', {
        'name': string
    }]
    | ['imported', {
        'path': Path
    }]
    | ['module', {
        'name': string
        'dataset name': string
    }]



export type Path = {
    //FIXME
}