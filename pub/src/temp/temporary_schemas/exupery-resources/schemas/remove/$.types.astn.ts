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
            "path": prop(t.component_external("path", "Node Path Parameter")),
            "error if not exists": prop(t.boolean()),
        })),

        "Error": type(t.state_group({
            "node does not exist": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
        })),
    }
)


