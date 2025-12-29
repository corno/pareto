import * as _pi from 'pareto-core-interface'

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

import { schema_, import_, constrained } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"
import { $ as signatures } from "./$.signatures.astn"
import { $ as resolver } from "./$.resolvers.astn"

export const $: g_.Schemas.D<_pi.Deprecated_Source_Location> = schema_(
    {
        "interface": import_("interface"),
    },
    globals,
    schema,
    constrained(
        signatures,
        resolver,
    ),
)