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
            "file": tstate(t.component("Group")),
            "directory": tstate(t.component_cyclic("Directory")),
        })),

        "Group": type(t.list(t.component("Group Part"))),

        "Group Part": type(t.state_group({
            "nested line": tstate(t.component("Line")),
            "line": tstate(t.text_global("Output")),
            "sub group": tstate(t.component_cyclic("Group")),
            "optional": tstate(t.optional(t.component_cyclic("Group Part"))),
            "nothing": tstate(t.nothing()),
        })),

        "Line": type(t.list(t.component("Line Part"))),

        "Line Part": type(t.state_group({
            "snippet": tstate(t.text_global("Output")),
            "indent": tstate(t.component_cyclic("Group")),
            "sub line": tstate(t.component_cyclic("Line")),
            "optional": tstate(t.optional(t.component_cyclic("Line Part"))),
            "nothing": tstate(t.nothing()),
        })),
    }
)


