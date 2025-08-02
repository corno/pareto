import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Value": type(t.state_group({
            "array": t.list(t.component_cyclic("Value")),
            "false": t.nothing(),
            "null": t.nothing(),
            "number": t.number_local(n.approximation(10)),
            "object": t.dictionary(t.component_cyclic("Value")),
            "string": t.text_global("Text Value"),
            "true": t.nothing(),
        })),

        "Document": type(t.component("Value")),
    }
)


