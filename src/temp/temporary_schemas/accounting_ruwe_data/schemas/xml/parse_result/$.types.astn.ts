import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {


        "Tokenizer Result": type(t.group({
            "leading whitespace": t.text_global("Text Value"),
            "tokens": t.list(t.component("Annotated Token")),
        })),

        "Token": type(t.state_group({
            "<": t.nothing(),
            "/": t.nothing(),
            ">": t.nothing(),
            "/>": t.nothing(),
            "?": t.nothing(),
            "=": t.nothing(),
            "string": t.text_global("Text Value"),
            "comment": t.text_global("Text Value"),
            "identifier": t.text_global("Text Value"),
            "text node": t.text_global("Text Value"),
            "invalid": t.nothing(),

        })),

        "Annotation": type(t.group({
            "position": t.number_local(n.natural()),
            "line": t.number_local(n.natural()),
            "column": t.number_local(n.natural()),
        })),


        "Annotated Token": type(t.group({
            "type": t.component("Token"),
            "annotation": t.component("Annotation"),
            "trailing whitespace": t.text_global("Text Value"),
        })),

        "Document": type(t.group({
            "declaration": t.optional(t.group({
                "attributes": t.component("Attributes"),
            })),
            "children": t.component("Content"),
        })),
        "Attributes": type(t.dictionary(t.text_global("Text Value"))),
        "Content": type(t.group({
            "preceding chardata": t.optional(t.text_global("Text Value")),
            "nodes": t.list(t.group({
                "type": t.state_group({
                    "cdata": t.text_global("Text Value"),
                    "comment": t.text_global("Text Value"),
                    "element": t.component_cyclic("Element"),
                    "processing instruction": t.group({
                        "target": t.text_global("Text Value"),
                        "data": t.text_global("Text Value"),
                    }),
                    "entity reference": t.text_global("Text Value"),
                }),
                "trailing chardata": t.optional(t.text_global("Text Value")),
            }))
        })),
        "Element": type(t.group({
            "name": t.text_global("Text Value"),
            "attributes": t.component("Attributes"),
            //"mixed": t.boolean(),
            "children": t.component_cyclic("Content"),
        })),
    }
)


