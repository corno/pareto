import * as pd from 'exupery-core-data'

import {
    types,
    text,
    n,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {

        "Directory": type(t.dictionary(
            t.component("Node")
        )),

        "Node": type(t.state_group({
            "file": tstate(t.component("Block")),
            "directory": tstate(t.component_cyclic("Directory")),
        })),

        "Block": type(t.list(t.component("Block Part"))),

        "Block Part": type(t.state_group({
            "nested line": tstate(t.component("Line")),
            "line": tstate(t.text_global("Output")),
            "sub block": tstate(t.component_cyclic("Block")),
            "optional": tstate(t.optional(t.component_cyclic("Block Part"))),
            "nothing": tstate(t.nothing()),
        })),

        "Line": type(t.list(t.component("Line Part"))),

        "Line Part": type(t.state_group({
            "snippet": tstate(t.text_global("Output")),
            "indent": tstate(t.component_cyclic("Block")),
            "sub line": tstate(t.component_cyclic("Line")),
            "optional": tstate(t.optional(t.component_cyclic("Line Part"))),
            "nothing": tstate(t.nothing()),
        })),
    }
)


