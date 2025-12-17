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
        })),

        "Error": type(t.state_group({
            "directory does not exist": tstate(t.nothing()),
            "node is not a directory": tstate(t.nothing()),
        })),

        "Result": type(t.dictionary(t.group({
            "node type": prop(t.component("Node Type")),

            /**
             * The context directory is the directory that was read to produce the listing
             * it is provided so that there is no need to store a variable
             */
            "context directory": prop(t.component_external("path", "Context Path")),
            "path": prop(t.component_external("path", "Node Path")),
        }))),

        "Node Type": type(t.state_group({
            "file": tstate(t.nothing()),
            "directory": tstate(t.nothing()),
        })),
    }
)


