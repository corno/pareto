import * as p_ from 'pareto-core/interface/schema'

export type Schema_Reference =
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