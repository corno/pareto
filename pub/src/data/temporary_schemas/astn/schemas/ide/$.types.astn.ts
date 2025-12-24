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

import * as _et from 'exupery-core-types'

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Text Edits": type(t.list(t.state_group({
            "insert": tstate(t.group({
                "location": prop(t.component_external("token", "Relative Location")),
                "text": prop(t.text_local(text('single line'))),
            })),
            "replace": tstate(t.group({
                "range": prop(t.component("Relative Range")),
                "text": prop(t.text_local(text('single line'))),
            })),
            "delete": tstate(t.group({
                "range": prop(t.component("Relative Range")),
            })),
        }))),

        "Relative Range": type(t.group({
            "start": prop(t.component_external("token", "Relative Location")),
            "end": prop(t.component_external("token", "Relative Location")),
        })),

        "Key Value Pairs To Be Sorted": type(t.dictionary(t.text_local(text('single line')))),
    },
)


