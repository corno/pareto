import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

import * as _et from 'exupery-core-types'


export const $: g_.Types<pd.Source_Location> = types(
    {



        "Document": type(t.group({
            "header": t.optional(t.group({
                "!": t.component("Structural Token"), //throw this one away!
                "value": t.component("Value"),
            })),
            "content": t.component("Value"),
        })),

        "Value": type(t.state_group({
            "string": t.component("String"),
            "indexed collection": t.state_group({
                "dictionary": t.group({
                    "{": t.component("Structural Token"), //throw this one away!
                    "entries": t.component("Key Value Pairs"),
                    "}": t.component("Structural Token"), //throw this one away!
                }),
                "verbose group": t.group({
                    "(": t.component("Structural Token"), //throw this one away!
                    "entries": t.component("Key Value Pairs"),
                    ")": t.component("Structural Token"), //throw this one away!
                }),
            }),
            "ordered collection": t.state_group({
                "list": t.group({
                    "[": t.component("Structural Token"), //throw this one away!
                    "elements": t.component("Elements"),
                    "]": t.component("Structural Token"), //throw this one away!
                }),
                "concise group": t.group({
                    "<": t.component("Structural Token"), //throw this one away!
                    "elements": t.component("Elements"),
                    ">": t.component("Structural Token"), //throw this one away!
                }),
            }),
            "tagged value": t.group({
                "|": t.component("Structural Token"), //throw this one away!
                "state": t.component("String"),
                "value": t.component_cyclic("Value"),
            }),
            "not set": t.group({
                "~": t.component("Structural Token"), //throw this one away!
            }),
            "set optional value": t.group({
                "*": t.component("Structural Token"), //throw this one away!
                "value": t.component_cyclic("Value"),
            }),
        })),

        "String": type(t.group({
            "trailing trivia": t.component_external("token", "Trivia"), //throw this one away!
            "range": t.component_external("token", "Range"), //throw this one away!
            "value": t.text_local(text('single line')),
            "type": t.component_external("token", "String Type"),
        })),

        "Key Value Pairs": type(t.list(t.group({
            "key": t.component("String"),
            "value": t.optional(t.group({
                ":": t.component("Structural Token"), //throw this one away!
                "value": t.component_cyclic("Value"),
            })),
            ",": t.optional(t.component("Structural Token")), //throw this one away!
        }))),

        "Elements": type(t.list(t.group({
            "value": t.component_cyclic("Value"),
        }))),

        "Structural Token": type(t.group({
            "trailing trivia": t.component_external("token", "Trivia"), //throw this one away!
            "range": t.component_external("token", "Range"), //throw this one away!
        })),
    },
)


