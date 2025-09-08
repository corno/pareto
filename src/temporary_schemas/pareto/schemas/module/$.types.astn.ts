import * as pd from 'exupery-core-data'

import {
    types,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"

import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Operations": type(t.dictionary(t.state_group({
            "operation": t.group({
                "type parameters": t.component_external("schema", "Type Parameters"),
                "context": t.component_external("schema", "Type Node"),
                "parameters": t.dictionary(t.component_external("schema", "Type Node")),
                "result": t.component_external("schema", "Type Node"),
            }),
            "set": t.component_cyclic("Operations")
        }))),
        "Module": type(t.group({
            "schema tree": t.component_external("schema", "Schema Tree"),
            "operations": t.component("Operations"),
        })),
    }
)