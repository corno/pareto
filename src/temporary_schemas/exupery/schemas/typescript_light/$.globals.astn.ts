import * as pd from 'exupery-core-data'

import {
    globals,
    n,
    text,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/unresolved"

export const $: g_.Globals<pd.Source_Location> = globals(
    'unconstrained',
    {
        "Identifier": text('single line'),
        "Output": text("single line"),
    },
    {},
)


