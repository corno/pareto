import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Parameters": type(t.group({
            "path": prop(t.component("Path")),
            "data": prop(t.text_local(text('multi line'))),
        })),

        "Errors": type(t.state_group({
            "permission denied": tstate(t.nothing()),
        })),

        "Path": type(t.group({
            "path": prop(t.text_local(text('single line'))),
            "escape spaces in path": prop(t.boolean()),
        })),
    }
)


