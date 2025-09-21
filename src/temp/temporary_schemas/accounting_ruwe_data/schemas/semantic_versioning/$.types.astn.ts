import * as pd from 'exupery-core-data'

import {
    types,
    text,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Semantic Version": type(t.group({
            "major": t.text_global("Text Value"),
            "minor": t.text_global("Text Value"),
            "patch": t.text_global("Text Value"),
            "pre-release identifiers": t.list(t.component("Number or Text")),
            "build identifiers": t.list(t.text_global("Text Value")),
        })),
        "Number or Text": type(t.state_group({
            "numeric": t.text_global("Text Value"), //is this correct?
            "alphanumeric": t.text_global("Text Value")
        })),
    }
)


