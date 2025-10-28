import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Document": type(t.component("Value")),

        "Value": type(t.group({
            "type": prop(t.state_group({
                "list": tstate(t.list(t.component_cyclic("Value"))),
                "concise group": tstate(t.list(t.component_cyclic("Value"))),
                "dictionary": tstate(t.list(t.group({
                    "key": prop(t.text_global("Text Value")),
                    "value": prop(t.component_cyclic("Value")),
                }))),
                /**
                 * verbose groups are always ordered
                 */
                "verbose group": tstate(t.list(t.group({
                    "key": prop(t.text_global("Text Value")),
                    "value": prop(t.component_cyclic("Value")),
                }))),
                "text": tstate(t.group({
                    "value": prop(t.text_global("Text Value")),
                    "delimiter": prop(t.state_group({
                        "none": tstate(t.nothing()),
                        "quote": tstate(t.nothing()),
                        "backtick": tstate(t.nothing()),
                    })),
                })),
                "nothing": tstate(t.nothing()),
                "optional": tstate(t.state_group({
                    "not set": tstate(t.nothing()),
                    "set": tstate(t.component_cyclic("Value")),
                })),
                "state": tstate(t.state_group({
                    "missing data": tstate(t.nothing()),
                    "set": tstate(t.group({
                        "state": prop(t.text_global("Text Value")),
                        "value": prop(t.component_cyclic("Value"))
                    }))
                }))
            })),
        })),

        //"Comments": type(t.)
    }
)


