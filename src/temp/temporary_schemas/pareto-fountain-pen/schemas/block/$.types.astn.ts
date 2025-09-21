import * as pd from 'exupery-core-data'

import {
    types,
    text,
    n,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location>  = types(
    {

        "Directory": type(t.dictionary(
            t.component("Node")
        )),

        "Node": type(t.state_group({
            "file": t.component("Block"),
            "directory": t.component_cyclic("Directory"),
        })),

        "Block": type(t.list(t.component("Block Part"))),

        "Block Part": type(t.state_group({
            "nested line": t.component("Line"),
            "line": t.text_global("Output"),
            "sub block": t.component_cyclic("Block"),
            "nothing": t.nothing(),
        })),

        "Line": type(t.list(t.component("Line Part"))),

        "Line Part": type(t.state_group({
            "snippet": t.text_global("Output"),
            "indent": t.component_cyclic("Block"),
            "sub line": t.component_cyclic("Line"),
            "nothing": t.nothing(),
        })),
    }
)


