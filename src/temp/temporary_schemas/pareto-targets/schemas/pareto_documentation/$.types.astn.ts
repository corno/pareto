import * as pd from 'exupery-core-data'

import {
    types,
    text,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {
        // "Railroad Directory": type(t.dictionary(
        //     t.state_group({
        //         "file": t.component_external("railroad diagram", "Grammar"),
        //         "directory": t.component_cyclic("Railroad Directory"),
        //     })
        // )),
        "Graphviz Directory": type(t.dictionary(
            t.state_group({
                "file": t.component_external("graphviz", "Graph"),
                "directory": t.component_cyclic("Graphviz Directory"),
            })
        )),
    }
)


