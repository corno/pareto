import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {


        "Tokenizer Result": type(t.group({
            "leading whitespace": prop(t.text_global("Text Value")),
            "tokens": prop(t.list(t.component("Annotated Token"))),
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
            "position": prop(t.number_local(n.natural())),
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())),
        })),


        "Annotated Token": type(t.group({
            "type": prop(t.component("Token")),
            "annotation": prop(t.component("Annotation")),
            "trailing whitespace": prop(t.text_global("Text Value")),
        })),

        "Document": type(t.group({
            "declaration": prop(t.optional(t.group({
                "attributes": prop(t.component("Attributes")),
            }))),
            "children": prop(t.component("Content")),
        })),
        "Attributes": type(t.dictionary(t.text_global("Text Value"))),
        "Content": type(t.group({
            "preceding chardata": prop(t.optional(t.text_global("Text Value"))),
            "nodes": prop(t.list(t.group({
                "type": prop(t.state_group({
                    "cdata": t.text_global("Text Value"),
                    "comment": t.text_global("Text Value"),
                    "element": t.component_cyclic("Element"),
                    "processing instruction": t.group({
                        "target": prop(t.text_global("Text Value")),
                        "data": prop(t.text_global("Text Value")),
                    }),
                    "entity reference": t.text_global("Text Value"),
                })),
                "trailing chardata": prop(t.optional(t.text_global("Text Value"))),
            })))
        })),
        "Element": type(t.group({
            "name": prop(t.text_global("Text Value")),
            "attributes": prop(t.component("Attributes")),
            //"mixed": t.boolean(),
            "children": prop(t.component_cyclic("Content")),
        })),
    }
)


