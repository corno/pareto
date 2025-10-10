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

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Parse Result": type(t.state_group({
            "failure": t.component("Parse Error"),
            "success": t.component_external("ast", "Document"),
        })),

        "Parse Error": type(t.group({
            "type": prop(t.state_group({
                "lexer": t.state_group({
                    "unexpected control character": t.number_local(n.natural()),
                    "missing character after escape": t.nothing(),
                    "unexpected end of line in delimited string": t.nothing(),
                    "unexpected character": t.number_local(n.natural()),
                    "unterminated string": t.nothing(),
                    "unterminated block comment": t.nothing(),
                    "unterminated unicode escape sequence": t.nothing(),
                    "invalid unicode escape sequence": t.nothing(),
                    "unknown escape character": t.nothing(),
                    "unexpected end of input": t.nothing(),
                    "dangling slash": t.nothing(),
                }),
                "parser": t.group({
                    "expected": prop(t.list(t.state_group({
                        "a string": t.nothing(),
                        "a value": t.nothing(),
                        "!": t.nothing(),
                        ">": t.nothing(),
                        "}": t.nothing(),
                        "@": t.nothing(),
                        ",": t.nothing(),
                        ":": t.nothing(),
                        ")": t.nothing(),
                        "]": t.nothing(),
                        "#": t.nothing(),
                    }))),
                    "cause": prop(t.state_group({
                        "missing token": t.nothing(),
                        "unexpected token": t.group({
                            "found": prop(t.component_external("token", "Token Type")),
                        }),
                    })),
                }),
            })),
            "range": prop(t.component_external("token", "Range")),
        })),
    }
)