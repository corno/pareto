import * as pd from 'exupery-core-data'

import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

import { schema_, import_, constrained } from "../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"
import { $ as signatures } from "./$.signatures.astn"
import { $ as resolver } from "./$.resolvers.astn"

export const $: g_.Schemas.D<pd.Source_Location> = schema_(
    {
        "interface": import_(0, "interface"),
    },
    globals,
    schema,
    constrained(
        signatures,
        resolver,
    ),
)