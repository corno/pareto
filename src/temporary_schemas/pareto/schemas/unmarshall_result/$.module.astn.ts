import * as pd from 'exupery-core-data'

import * as g_ from "../../../../generated/interface/schemas/schema/unresolved"

import { schema_, constrained, import_ } from "../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.D<pd.Source_Location> = schema_(
    {
        "schema": import_(0, "schema")
    },
    globals,
    schema,
    null,
)