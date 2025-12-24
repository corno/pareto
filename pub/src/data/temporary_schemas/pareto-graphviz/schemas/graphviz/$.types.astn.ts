import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    text,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
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
