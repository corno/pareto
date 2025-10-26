import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Parameters": type(t.group({
            "source": prop(t.component("Path")),
            "target": prop(t.component("Path")),
            "options": prop(t.group({
                "recursive": prop(t.optional(t.boolean())),
                "force": prop(t.optional(t.boolean())),
                "errorOnExist": prop(t.optional(t.boolean())),
            })),
        })),

        "Errors": type(t.state_group({
            "source does not exist": tstate(t.nothing()),
            "node is not a file": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
            "file too large": tstate(t.nothing()),
            "device not ready": tstate(t.nothing()),
        })),

        "Path": type(t.group({
            "path": prop(t.text_local(text('single line'))),
            "escape spaces in path": prop(t.boolean()),
        })),
    }
)


