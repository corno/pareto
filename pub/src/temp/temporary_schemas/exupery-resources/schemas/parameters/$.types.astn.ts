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
        "Log": type(t.group({
            "lines": prop(t.list(t.text_local(text('single line')))),
        })),

        "Copy": type(t.group({
            "source": prop(t.component("Path")),
            "target": prop(t.component("Path")),
            "options": prop(t.group({
                "recursive": prop(t.optional(t.boolean())),
                "force": prop(t.optional(t.boolean())),
                "errorOnExist": prop(t.optional(t.boolean())),
            })),
        })),

        "Remove": type(t.group({
            "path": prop(t.component("Path")),
            "error if not exists": prop(t.boolean()),
        })),

        "Path": type(t.group({
            "path": prop(t.text_local(text('single line'))),
            "escape spaces in path": prop(t.boolean()),
        })),

        "Write File": type(t.group({
            "path": prop(t.component("Path")),
            "data": prop(t.text_local(text('multi line'))),
        })),
    }
)


