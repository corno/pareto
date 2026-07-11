import * as p_ from 'pareto-core/interface/data'

export type Type__Set_Reference =
    | ['local', {
        'path': Path
    }]
    | ['submodule', {
        'module': string
        'type set': string
    }]



export type Path = {
    //FIXME
}