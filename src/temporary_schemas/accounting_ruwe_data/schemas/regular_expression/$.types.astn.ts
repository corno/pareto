import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Regular Expression": type(t.group({
            "characters": t.dictionary(t.number_local(n.positive_natural())),
            "sequence": t.component_cyclic("Sequence"),
        })),

        "Sequence": type(t.list(t.group({
            "type": t.state_group({
                "literal": t.text_global("Text Value"),
                "character class": t.group({
                    "negated": t.boolean(),
                    "ranges": t.list(t.state_group({
                        "literal": t.number_global("Character"), //should be a reference to a character in the dictionary
                        "range": t.group({
                            "from": t.number_global("Character"),
                            "to": t.number_global("Character"),
                        }),
                    })),
                }),
                "group": t.group({
                    "expression": t.component_cyclic("Sequence"),
                }),
                "alternation": t.list(t.component_cyclic("Sequence")),
            }),
            "quantifier": t.optional(t.state_group({
                "optional": t.nothing(), // ?
                "multiple": t.nothing(), // *
                "one or more": t.nothing(), // +
                // "exact": t.number_local(n.natural()), // {n}
                // "between": t.group({
                //     "min": t.number_local(n.natural()), // {n,m}
                //     "max": t.number_local(n.natural()),
                // }),

            })),
        }))),
    }
)


