import * as pd from 'exupery-core-data'

import { signatures, sig, value_parameter_external, } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Resolve_Logic.signatures<pd.Source_Location> = signatures(
    {
        "Module": sig.local({}, {}),
        "Operations": sig.local({
            //"globals": value_parameter_external("schema", "Globals"),
        }, {}),
    },
)