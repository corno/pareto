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

        "Document": type(t.group({
            "declaration": prop(t.optional(t.group({
                "attributes": prop(t.component("Attributes")),
            }))),
            "children": prop(t.component("Children")),
        })),
        "Attributes": type(t.dictionary(t.text_global("Text Value"))),
        "Children": type(t.list(t.state_group({
            "cdata": t.text_global("Text Value"),
            "comment": t.text_global("Text Value"),
            "element": t.component_cyclic("Element"),
            "processing instruction": t.group({
                "target": prop(t.text_global("Text Value")),
                "data": prop(t.text_global("Text Value")),
            }),
            "text": t.text_global("Text Value"),
            "entity reference": t.text_global("Text Value"),
        }))),
        "Element": type(t.group({
            "name": prop(t.text_global("Text Value")),
            "attributes": prop(t.component("Attributes")),
            //"mixed": t.boolean(),
            "children": prop(t.component_cyclic("Children")),
        })),
    }
)


