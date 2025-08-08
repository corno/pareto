import * as pd from 'exupery-core-data'

import {
    types,
    t,
    n,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        // "Possible Token List": type(t.optional(t.component("Tokens"))),

        "Key Value Pair": type(t.group({
            "key": t.text_global("Text Value"),
            "value": t.component_cyclic("Value"),
        })),


        "Tokenizer Result": type(t.group({
            "leading whitespace": t.text_global("Text Value"),
            "tokens": t.list(t.component("Annotated Token")),
        })),

        "Token": type(t.state_group({
            "[": t.nothing(),
            "]": t.nothing(),
            "{": t.nothing(),
            "}": t.nothing(),
            "false": t.nothing(),
            "null": t.nothing(),
            "number": t.text_global("Text Value"), //this is a text by choice. The parsing of the number is up to the caller
            "string": t.text_global("Text Value"),
            "true": t.nothing(),
            ":": t.nothing(),
            ",": t.nothing(),
            "invalid": t.nothing(),
        })),

        "Annotated Token": type(t.group({
            "type": t.component("Token"),
            "annotation": t.component("Annotation"),
            "trailing whitespace": t.text_global("Text Value"),
        })),

        "Annotation": type(t.group({
            "position": t.number_local(n.natural()),
            "line": t.number_local(n.natural()),
            "column": t.number_local(n.natural()),
        })),

        "Document": type(t.component("Value")),

        "Value": type(t.group({
            "type": t.state_group({
                "array": t.list(t.component_cyclic("Value")),
                "false": t.nothing(),
                "null": t.nothing(),
                "number": t.text_global("Text Value"), //this is a text by choice. The parsing of the number is up to the caller
                "object": t.list(t.component("Key Value Pair")),
                "string": t.text_global("Text Value"),
                "true": t.nothing(),
            }),
            "annotation": t.component("Annotation")
        }))
    }
)


