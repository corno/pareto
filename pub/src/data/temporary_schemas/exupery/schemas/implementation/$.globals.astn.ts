import * as _pi from 'pareto-core-interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Globals<_pi.Deprecated_Source_Location> = globals(
         'unconstrained',
    {
        "TBD": text('single line'),
        "Identifier": text('single line'),
        "Text Value": text('multi line'),
    },
    {},
)


