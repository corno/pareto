import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    text,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Graph": type(t.group({
            "nodes": prop(t.dictionary(t.nothing())),
            "edges": prop(t.list(t.group({
                "from": prop(t.text_local(text('single line'))),
                "to": prop(t.text_local(text('single line'))),
            }))),

        }))
    }
)
