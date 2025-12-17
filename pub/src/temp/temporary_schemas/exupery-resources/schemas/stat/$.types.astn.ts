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
        "Parameters": type(t.component_external("path", "Node Path Parameter")),

        "Error": type(t.state_group({
            "node does not exist": tstate(t.nothing()),
        })),

        "Result": type(t.component("Node Type")),

        "Node Type": type(t.state_group({
            "file": tstate(t.nothing()),
            "directory": tstate(t.nothing()),
        })),
    }
)


