import * as pd from 'exupery-core-data'

import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

import { schema_, constrained, import_ } from "../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.D<pd.Source_Location> = schema_(
    {
        "graphviz": import_(0, "graphviz high level"),
        //"railroad diagram": import_(0, "railroad diagram"),
    },
    globals,
    schema,
    null,
)