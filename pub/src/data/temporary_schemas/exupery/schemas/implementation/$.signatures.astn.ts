import * as _pi from 'pareto-core-interface'

import { signatures, sig } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Resolve_Logic.signatures<_pi.Deprecated_Source_Location>  = signatures(
    {
        "Initialization": sig.local({}, {}),
        "Literal": sig.local({}, {}),
        "Module": sig.local({}, {}),
        "Module Set": sig.local({}, {}),
        "Selection": sig.local({}, {}),
        "Variables": sig.local({}, {}),
    },
)