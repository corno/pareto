import * as _edata from 'exupery-core-data'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Globals<_edata.Source_Location> = globals(
         'unconstrained',
    {
        "Text Value": text("single line"),
        "Multi Line Text": text("multi line"),
    },
    {
        "Integer": n.integer(),
    },
)