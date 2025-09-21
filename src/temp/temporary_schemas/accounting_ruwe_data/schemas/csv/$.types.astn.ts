import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {

        "Annotation": type(t.group({
            "position": t.number_local(n.natural()),
            "line": t.number_local(n.natural()),
            "column": t.number_local(n.natural()),
        })),

        "Data Set": type(t.group({
            "lines": t.list(t.group({
                "fields": t.list(t.group({
                    "annotation": t.component("Annotation"),
                    "value": t.text_local(text("single line")),
                }))
            })),
            "ends with unterminated string": t.boolean(),
        })),
    }
)


