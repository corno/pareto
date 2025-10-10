import * as pd from 'exupery-core-data'

import {
    types,
    text,
    t,
    tr,
    type,
    prop,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Semantic Version": type(t.group({
            "major": prop(t.text_global("Text Value")),
            "minor": prop(t.text_global("Text Value")),
            "patch": prop(t.text_global("Text Value")),
            "pre-release identifiers": prop(t.list(t.component("Number or Text"))),
            "build identifiers": prop(t.list(t.text_global("Text Value"))),
        })),
        "Number or Text": type(t.state_group({
            "numeric": t.text_global("Text Value"), //is this correct?
            "alphanumeric": t.text_global("Text Value")
        })),
    }
)


