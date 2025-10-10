import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Tokenizer Result": type(t.group({
            "leading trivia": prop(t.component("Trivia")),
            "tokens": prop(t.list(t.component("Annotated Token"))),
            "end": prop(t.component("Location")),
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
            ":": t.nothing(), //colon
            "|": t.nothing(), //state
            "#": t.nothing(), //missing data

            "string": tstate(t.group({
                "value": prop(t.component("Delimited String")),
                "type": prop(t.component("String Type")),
            })),
        })),

        "Delimited String": type(t.text_local(text('single line'))),

        "Annotated Token": type(t.group({
            "start": prop(t.component("Location")),
            "type": prop(t.component("Token Type")),
            "end": prop(t.component("Location")),
            "trailing trivia": prop(t.component("Trivia")),
        })),

        "Whitespace": type(t.group({
            "range": prop(t.component("Range")),
            "value": prop(t.text_local(text('single line'))),
        })),

        "Range": type(t.group({
            "start": prop(t.component("Location")),
            "end": prop(t.component("Location")),
        })),
        
        "Trivia": type(t.group({
            "leading whitespace": prop(t.component("Whitespace")),
            "comments": prop(t.list(t.group({
                "type": prop(t.state_group({
                    "line": tstate(t.nothing()),
                    "block": tstate(t.nothing()),
                })),
                "content": prop(t.text_local(text('single line'))),
                "range": prop(t.component("Range")),
                "trailing whitespace": prop(t.component("Whitespace")),
            }))),
        })),

        "String Type": type(t.state_group({
            "quoted": tstate(t.nothing()),
            "apostrophed": tstate(t.nothing()),
            "undelimited": tstate(t.nothing()),
            "backticked": tstate(t.nothing()),
        })),

        "Location": type(t.group({
            "relative": prop(t.component("Relative Location")),
            "absolute": prop(t.number_local(n.natural())),
        })),

        "Relative Location": type(t.group({
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),
    }
)