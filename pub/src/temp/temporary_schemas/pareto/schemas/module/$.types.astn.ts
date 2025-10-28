import * as pd from 'exupery-core-data'

import {
    types,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Operations": type(t.dictionary(t.state_group({
            "operation": tstate(t.group({
                "type parameters": prop(t.component_external("schema", "Type Parameters")),
                "context": prop(t.component_external("schema", "Type Node")),
                "parameters": prop(t.dictionary(t.component_external("schema", "Type Node"))),
                "result": prop(t.component_external("schema", "Type Node")),
            })),
            "set": tstate(t.component_cyclic("Operations")),
        }))),
        "Module": type(t.group({
            "schema tree": prop(t.component_external("schema", "Schema Tree")),
            "operations": prop(t.component("Operations")),
        })),
    }
)