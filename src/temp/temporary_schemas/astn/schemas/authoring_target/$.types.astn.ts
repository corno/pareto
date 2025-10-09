import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Document": type(t.component("Value")),

        "Value": type(t.group({
            "type": t.state_group({
                "list": t.list(t.component_cyclic("Value")),
                "concise group": t.list(t.component_cyclic("Value")),
                "dictionary": t.list(t.group({
                    "key": t.text_global("Text Value"),
                    "value": t.component_cyclic("Value"),
                })),
                "verbose group": t.list(t.group({
                    "key": t.text_global("Text Value"),
                    "value": t.component_cyclic("Value"),
                })),
                "text": t.group({
                    "value": t.text_global("Text Value"),
                    "delimiter": t.state_group({
                        "none": t.nothing(),
                        "quote": t.nothing(),
                        "backtick": t.nothing(),
                    }),
                }),
                "nothing": t.nothing(),
                "optional": t.state_group({
                    "not set": t.nothing(),
                    "set": t.component_cyclic("Value"),
                }),
                "state": t.state_group({
                    "missing data": t.nothing(),
                    "set": t.group({
                        "state": t.text_global("Text Value"),
                        "value": t.component_cyclic("Value")
                    })
                })
            })
        })),

        //"Comments": type(t.)
    }
)


