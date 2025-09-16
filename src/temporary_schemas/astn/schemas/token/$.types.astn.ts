import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Tokenizer Result": type(t.group({
            "leading trivia": t.component("Trivia"),
            "tokens": t.list(t.component("Annotated Token")),
            "end": t.component("Location"),
        })),

        "Token Type": type(t.state_group({
            "{": t.nothing(), //open dictionary
            "}": t.nothing(), //close dictionary
            "[": t.nothing(), //open list
            "]": t.nothing(), //close list
            "(": t.nothing(), //open verbose group
            ")": t.nothing(), //close verbose group
            "<": t.nothing(), //open terse group
            ">": t.nothing(), //close terse group

            "!": t.nothing(), //header
            "@": t.nothing(), //include
            "~": t.nothing(), //nothing / not set
            "*": t.nothing(), //set
            ",": t.nothing(), //comma
            ":": t.nothing(), //colon
            "|": t.nothing(), //state
            "#": t.nothing(), //missing data

            "string": t.group({
                "value": t.component("Delimited String"),
                "type": t.component("String Type"),
            }),
        })),

        "Delimited String": type(t.text_local(text('single line'))),

        "Annotated Token": type(t.group({
            "start": t.component("Location"),
            "type": t.component("Token Type"),
            "end": t.component("Location"),
            "trailing trivia": t.component("Trivia"),
        })),

        "Whitespace": type(t.group({
            "range": t.component("Range"),
            "value": t.text_local(text('single line')),
        })),

        "Range": type(t.group({
            "start": t.component("Location"),
            "end": t.component("Location"),
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

        "String Type": type(t.state_group({
            "quoted": t.nothing(),
            "apostrophed": t.nothing(),
            "undelimited": t.nothing(),
            "backticked": t.nothing(),
        })),

        "Location": type(t.group({
            "relative": t.component("Relative Location"),
            "absolute": t.number_local(n.natural()),
        })),

        "Relative Location": type(t.group({
            "line": t.number_local(n.natural()),
            "column": t.number_local(n.natural()), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),
    }
)