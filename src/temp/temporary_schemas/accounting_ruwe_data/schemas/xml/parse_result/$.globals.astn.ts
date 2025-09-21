import * as pd from 'exupery-core-data'

import {
    globals,
    n,
    text,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Globals<pd.Source_Location> = globals(
         'unconstrained',
    {
        "Text Value": text("single line"),
    },
    {
        "Position": n.natural(),
    },
)


