import * as pd from 'exupery-core-data'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Globals<pd.Source_Location> = globals(
         'unconstrained',
    {
        "url": text("single line"),
        "text value": text("single line"),
        "regex": text("single line"),
        "identifier": text("single line"),
    },
    {
        "amount": n.natural(),
    },
)


