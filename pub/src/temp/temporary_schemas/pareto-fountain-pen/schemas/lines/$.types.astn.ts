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
        "Lines": type(t.list(t.text_global("Output"))),

        "Directory": type(t.dictionary(
            t.state_group({
                "file": tstate(t.component("Lines")),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),
    }
)


