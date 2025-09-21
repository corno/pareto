import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Document": type(t.group({
            "declaration": t.optional(t.group({
                "attributes": t.component("Attributes"),
            })),
            "children": t.component("Children"),
        })),
        "Attributes": type(t.dictionary(t.text_global("Text Value"))),
        "Children": type(t.list(t.state_group({
                "cdata": t.text_global("Text Value"),
                "comment": t.text_global("Text Value"),
                "element": t.component_cyclic("Element"),
                "processing instruction": t.group({
                    "target": t.text_global("Text Value"),
                    "data": t.text_global("Text Value"),
                }),
                "text": t.text_global("Text Value"),
                "entity reference": t.text_global("Text Value"),
            }))),
        "Element": type(t.group({
            "name": t.text_global("Text Value"),
            "attributes": t.component("Attributes"),
            //"mixed": t.boolean(),
            "children": t.component_cyclic("Children"),
        })),
    }
)


