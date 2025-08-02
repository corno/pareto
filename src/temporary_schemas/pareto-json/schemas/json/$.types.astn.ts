import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Document": type(t.component("Value")),

        "Value": type(t.state_group({
            "array": t.list(t.component_cyclic("Value")),
            "object": t.state_group({
                "key value array": t.list(t.group({
                    "key": t.text_global("Text Value"),
                    "value": t.component_cyclic("Value")
                })),
                "dictionary": t.dictionary(t.component_cyclic("Value")),
            }),
            "number": t.state_group(({
                "integer": t.number_local(n.integer()),
                "float": t.number_local(n.approximation(16)),
            })),
            "string": t.text_global("Text Value"),
            "boolean": t.boolean(),
            "null": t.nothing(),
        })),
    }
)


