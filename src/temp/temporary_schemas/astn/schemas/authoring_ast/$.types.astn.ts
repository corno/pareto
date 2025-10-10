import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

import * as _et from 'exupery-core-types'


export const $: g_.Types<pd.Source_Location> = types(
    {



        "Document": type(t.group({
            "header": prop(t.optional(t.group({
                "!": prop(t.component("Structural Token")),
                "value": prop(t.component("Value")),
            }))),
            "content": prop(t.component("Value")),
        })),

        "Concrete Value": type(t.state_group({
            "string": t.component("String"),
            "indexed collection": t.state_group({
                "dictionary": t.group({
                    "{": prop(t.component("Structural Token")),
                    "entries": prop(t.component("Key Value Pairs")),
                    "}": prop(t.component("Structural Token")),
                }),
                "verbose group": t.group({
                    "(": prop(t.component("Structural Token")),
                    "entries": prop(t.component("Key Value Pairs")),
                    ")": prop(t.component("Structural Token")),
                }),
            }),
            "ordered collection": t.state_group({
                "list": t.group({
                    "[": prop(t.component("Structural Token")),
                    "elements": prop(t.component("Elements")),
                    "]": prop(t.component("Structural Token")),
                }),
                "concise group": t.group({
                    "<": prop(t.component("Structural Token")),
                    "elements": prop(t.component("Elements")),
                    ">": prop(t.component("Structural Token")),
                }),
            }),
            "tagged value": t.group({
                "|": prop(t.component("Structural Token")),
                "status": prop(t.state_group({
                    "missing data": t.group({
                        "#": prop(t.component("Structural Token")),
                    }),
                    "set": t.group({
                        "state": prop(t.component("String")),
                        "value": prop(t.component_cyclic("Value")),
                    })
                })),
            }),
            "not set": t.group({
                "~": prop(t.component("Structural Token")),
            }),
            "set optional value": t.group({
                "*": prop(t.component("Structural Token")),
                "value": prop(t.component_cyclic("Value")),
            }),
        })),

        "Value": type(t.group({
            "type": prop(t.state_group({
                "concrete": t.component("Concrete Value"),
                "include": t.group({
                    "@": prop(t.component("Structural Token")),
                    "path": prop(t.component("String")),
                }),
                "missing data": t.group({
                    "#": prop(t.component("Structural Token")),
                }),
            })),
        })),

        "String": type(t.group({
            "trailing trivia": prop(t.component_external("token", "Trivia")),
            "range": prop(t.component_external("token", "Range")),
            "value": prop(t.text_local(text('single line'))),
            "type": prop(t.component_external("token", "String Type")),
        })),

        "Key Value Pairs": type(t.list(t.group({
            "key": prop(t.component("String")),
            "value": prop(t.optional(t.group({
                ":": prop(t.component("Structural Token")),
                "value": prop(t.component_cyclic("Value")),
            }))),
            ",": prop(t.optional(t.component("Structural Token"))),
        }))),

        "Elements": type(t.list(t.group({
            "value": prop(t.component_cyclic("Value")),
        }))),

        "Structural Token": type(t.group({
            "trailing trivia": prop(t.component_external("token", "Trivia")),
            "range": prop(t.component_external("token", "Range")),
        })),
    },
)


