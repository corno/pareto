import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {

        "Annotation": type(t.group({
            "position": prop(t.number_local(n.natural())),
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())),
        })),

        "Data Set": type(t.group({
            "lines": prop(t.list(t.group({
                "fields": prop(t.list(t.group({
                    "annotation": prop(t.component("Annotation")),
                    "value": prop(t.text_local(text("single line"))),
                })))
            }))),
            "ends with unterminated string": prop(t.boolean()),
        })),
    }
)


