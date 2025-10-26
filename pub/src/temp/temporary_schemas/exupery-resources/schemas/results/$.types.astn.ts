import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Node Type": type(t.state_group({
            "file": tstate(t.nothing()),
            "directory": tstate(t.nothing()),
        })),

        "Read Directory": type(t.dictionary(t.component("Node Type"))),
    }
)


