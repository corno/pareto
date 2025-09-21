import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/unresolved"

import * as _et from 'exupery-core-types'

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Text Edits": type(t.list(t.state_group({
            "insert": t.group({
                "location": t.component_external("token", "Relative Location"),
                "text": t.text_local(text('single line')),
            }),
            "replace": t.group({
                "range": t.component("Relative Range"),
                "text": t.text_local(text('single line')),
            }),
            "delete": t.group({
                "range": t.component("Relative Range"),
            }),
        }))),

        "Relative Range": type(t.group({
            "start": t.component_external("token", "Relative Location"),
            "end": t.component_external("token", "Relative Location"),
        })),

        "Key Value Pairs To Be Sorted": type(t.dictionary(t.text_local(text('single line')))),
    },
)


