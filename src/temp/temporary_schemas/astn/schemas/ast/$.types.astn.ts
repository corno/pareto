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



        "Document": type(t.group({
            "header": t.optional(t.group({
                "!": t.component("Structural Token"),
                "value": t.component("Value"),
            })),
            "content": t.component("Value"),
        })),

        "Concrete Value": type(t.state_group({
            "string": t.component("String"),
            "indexed collection": t.state_group({
                "dictionary": t.group({
                    "{": t.component("Structural Token"),
                    "entries": t.component("Key Value Pairs"),
                    "}": t.component("Structural Token"),
                }),
                "verbose group": t.group({
                    "(": t.component("Structural Token"),
                    "entries": t.component("Key Value Pairs"),
                    ")": t.component("Structural Token"),
                }),
            }),
            "ordered collection": t.state_group({
                "list": t.group({
                    "[": t.component("Structural Token"),
                    "elements": t.component("Elements"),
                    "]": t.component("Structural Token"),
                }),
                "concise group": t.group({
                    "<": t.component("Structural Token"),
                    "elements": t.component("Elements"),
                    ">": t.component("Structural Token"),
                }),
            }),
            "tagged value": t.group({
                "|": t.component("Structural Token"),
                "state": t.component("String"),
                "value": t.component_cyclic("Value"),
            }),
            "not set": t.group({
                "~": t.component("Structural Token"),
            }),
            "set optional value": t.group({
                "*": t.component("Structural Token"),
                "value": t.component_cyclic("Value"),
            }),
            "missing data": t.group({
                "#": t.component("Structural Token"),
            }),
        })),

        "Value": type(t.group({
            "type": t.state_group({
                "concrete": t.component("Concrete Value"),
                "include": t.group({
                    "@": t.component("Structural Token"),
                    "path": t.component("String"),
                }),
            }),
        })),

        "String": type(t.group({
            "trailing trivia": t.component_external("token", "Trivia"),
            "range": t.component_external("token", "Range"),
            "value": t.text_local(text('single line')),
            "type": t.component_external("token", "String Type"),
        })),

        "Key Value Pairs": type(t.list(t.group({
            "key": t.component("String"),
            "value": t.optional(t.group({
                ":": t.component("Structural Token"),
                "value": t.component_cyclic("Value"),
            })),
            ",": t.optional(t.component("Structural Token")),
        }))),

        "Elements": type(t.list(t.group({
            "value": t.component_cyclic("Value"),
        }))),

        "Structural Token": type(t.group({
            "trailing trivia": t.component_external("token", "Trivia"),
            "range": t.component_external("token", "Range"),
        })),
    },
)


