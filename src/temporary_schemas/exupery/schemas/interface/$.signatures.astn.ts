import * as pd from 'exupery-core-data'

import { signatures, sig } from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Resolve_Logic.signatures<pd.Source_Location>  = signatures(
    {
        "Module": sig.local({}, {}),
        "Type Parameters": sig.local({}, {}),
        "Module Set": sig.local({}, {}),
        "Imports": sig.local({}, {}),
        "Type Arguments": sig.local({}, {}),
        "Type Parameter Selection": sig.local({}, {}),
        "Type": sig.local({}, {}),
    },
)