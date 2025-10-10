import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Document": type(t.component("Value")),

        "Value": type(t.state_group({
            "array": tstate(t.list(t.component_cyclic("Value"))),
            "object": tstate(t.state_group({
                "key value array": tstate(t.list(t.group({
                    "key": prop(t.text_global("Text Value")),
                    "value": prop(t.component_cyclic("Value"))
                }))),
                "dictionary": tstate(t.dictionary(t.component_cyclic("Value"))),
            })),
            "number": tstate(t.state_group({
                "integer": tstate(t.number_local(n.integer())),
                "float": tstate(t.number_local(n.approximation(16))),
            })),
            "string": tstate(t.text_global("Text Value")),
            "boolean": tstate(t.boolean()),
            "null": tstate(t.nothing()),
        })),
    }
)


