import * as _pi from 'pareto-core-interface'

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

import { schema_, constrained, import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.D<_pi.Deprecated_Source_Location> = schema_(
    {
        "graphviz": import_("graphviz high level"),
        //"railroad diagram": import_("railroad diagram"),
    },
    globals,
    schema,
    null,
)