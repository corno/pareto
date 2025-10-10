import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Document": type(t.component("Value")),

        "Value": type(t.state_group({
            "list": t.list(t.component_cyclic("Value")),
            "dictionary": t.dictionary(t.component_cyclic("Value")),
            "verbose group": t.dictionary(t.component_cyclic("Value")),
            "text": t.group({
                "value": prop(t.text_global("Text Value")),
                "delimiter": prop(t.state_group({
                    "none": t.nothing(),
                    "quote": t.nothing(),
                    "backtick": t.nothing(),
                })),
            }),
            "nothing": t.nothing(),
            "optional": t.state_group({
                "not set": t.nothing(),
                "set": t.component_cyclic("Value"),
            }),
            "state": t.group({
                "state": prop(t.text_global("Text Value")),
                "value": prop(t.component_cyclic("Value"))
            })
        })),
    }
)


