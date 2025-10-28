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
        "Decision": type(t.group({
            "decision number": prop(t.number_local(n.integer())),
            "atn decision state": prop(t.number_local(n.integer())),
            "alternatives": prop(t.dictionary(t.group({
                "alternative number": prop(t.number_local(n.integer())),
                "token sets": prop(t.dictionary(t.group({
                    "context depth": prop(t.number_local(n.integer())),
                    "intervals": prop(t.dictionary(t.group({
                        "min": prop(t.number_local(n.integer())),
                        "max": prop(t.number_local(n.integer())),
                    }))),
                }))),
            }))),
        })),
    }
)
