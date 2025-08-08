import * as pd from 'exupery-core-data'

import { signatures, sig } from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Resolve_Logic.signatures<pd.Source_Location>  = signatures(
    {
        "Initialization": sig.local({}, {}),
        "Literal": sig.local({}, {}),
        "Module": sig.local({}, {}),
        "Module Set": sig.local({}, {}),
        "Selection": sig.local({}, {}),
        "Type Parameters": sig.local({}, {}),
        "Variables": sig.local({}, {}),
    },
)