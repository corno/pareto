import * as pd from 'exupery-core-data'

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

import { schema_, constrained, import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.D<pd.Source_Location> = schema_(
    {
        "path": import_("path")
    },
    globals,
    schema,
    null,
)