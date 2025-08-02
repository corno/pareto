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

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Token Type": type(t.state_group({
            "{": t.nothing(),
            "}": t.nothing(),
            "[": t.nothing(),
            "]": t.nothing(),
            "(": t.nothing(),
            ")": t.nothing(),
            "<": t.nothing(),
            ">": t.nothing(),

            "!": t.nothing(),
            "@": t.nothing(),
            "~": t.nothing(),
            "*": t.nothing(),
            ",": t.nothing(),
            ":": t.nothing(),
            "|": t.nothing(),

            "string": t.group({
                "value": t.text_local(text('single line')),
                "type": t.component_external("ast", "String Type"),
            }),
        })),

        "Parse Error": type(t.group({
            "type": t.state_group({
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
                    "expected": t.list(t.state_group({
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
                    })),
                    "cause": t.state_group({
                        "missing token": t.nothing(),
                        "unexpected token": t.group({
                            "found": t.component("Token Type"),
                        }),
                    }),
                }),
            }),
            "range": t.component_external("ast", "Range"),
        })),

        "Parse Result": type(t.state_group({
            "failure": t.component("Parse Error"),
            "success": t.component_external("ast", "Document"),
        })),

        "Annotated Token": type(t.group({
            "start": t.component_external("ast", "Location"),
            "type": t.component("Token Type"),
            "end": t.component_external("ast", "Location"),
            "trailing trivia": t.component_external("ast", "Trivia"),
        })),

        "Tokenizer Result": type(t.group({
            "leading trivia": t.component_external("ast", "Trivia"),
            "tokens": t.list(t.component("Annotated Token")),
            "end": t.component_external("ast", "Location"),
        })),
    }
)