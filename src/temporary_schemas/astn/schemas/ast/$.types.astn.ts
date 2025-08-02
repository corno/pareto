import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/unresolved"

import * as _et from 'exupery-core-types'


export const $: g_.Types<pd.Source_Location> = types(
    {
        "Location": type(t.group({
            "relative": t.component("Relative Location"),
            "absolute": t.number_local(n.natural()),
        })),

        "Relative Location": type(t.group({
            "line": t.number_local(n.natural()),
            "column": t.number_local(n.natural()), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

        "Range": type(t.group({
            "start": t.component("Location"),
            "end": t.component("Location"),
        })),

        "Relative Range": type(t.group({
            "start": t.component("Relative Location"),
            "end": t.component("Relative Location"),
        })),

        "Document": type(t.group({
            "header": t.optional(t.group({
                "!": t.component("Structural Token"),
                "value": t.component("Value"),
            })),
            "content": t.component("Value"),
        })),

        "Value": type(t.group({
            "range": t.component("Range"), //can be derived
            "type": t.state_group({
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
                "include": t.group({
                    "@": t.component("Structural Token"),
                    "path": t.component("String"),
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
            }),
        })),

        "String": type(t.group({
            "trailing trivia": t.component("Trivia"),
            "range": t.component("Range"),
            "value": t.text_local(text('single line')),
            "type": t.component("String Type"),
        })),

        "String Type": type(t.state_group({
            "quoted": t.nothing(),
            "apostrophed": t.nothing(),
            "undelimited": t.nothing(),
            "backticked": t.nothing(),
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
            ",": t.optional(t.component("Structural Token")),
        }))),

        "Structural Token": type(t.group({
            "trailing trivia": t.component("Trivia"),
            "range": t.component("Range"),
        })),

        "Whitespace": type(t.group({
            "range": t.component("Range"),
            "value": t.text_local(text('single line')),
        })),
        
        "Trivia": type(t.group({
            "leading whitespace": t.component("Whitespace"),
            "comments": t.list(t.group({
                "type": t.state_group({
                    "line": t.nothing(),
                    "block": t.nothing(),
                }),
                "content": t.text_local(text('single line')),
                "range": t.component("Range"),
                "trailing whitespace": t.component("Whitespace"),
            })),
        })),
    },
)


