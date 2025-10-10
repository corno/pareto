import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    text,
    prop,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Array Definition": type(t.component_cyclic("Definition")),
        "Boolean Definition": type(t.nothing()),
        "Null Definition": type(t.nothing()),
        "Number Definition": type(t.nothing()),
        "Object Definition": type(t.group({
            "type": prop(t.state_group({
                "static": t.group({
                    "properties": prop(t.dictionary(t.group({
                        "definition": prop(t.component_cyclic("Definition")),
                        "optional": prop(t.boolean()),
                    }))),
                }),
                "dynamic": t.component_cyclic("Definition"),
            })),
        })),
        "String Definition": type(t.state_group({
            "any": t.nothing(),
            "enum": t.dictionary(t.nothing()),
        })),
        "Definition": type(t.state_group({
            "any": t.nothing(),
            "any of": t.group({
                "array": prop(t.optional(t.component("Array Definition"))),
                "boolean": prop(t.optional(t.component("Boolean Definition"))),
                "null": prop(t.optional(t.component("Null Definition"))),
                "number": prop(t.optional(t.component("Number Definition"))),
                "object": prop(t.optional(t.component("Object Definition"))),
                "string": prop(t.optional(t.component("String Definition"))),

                "else": prop(t.optional(t.text_local(text("single line")))),//reference to a definition
            }),
            "definition reference": t.text_local(text("single line")),

            "array": t.component("Array Definition"),
            "boolean": t.component("Boolean Definition"),
            "null": t.component("Null Definition"),
            "number": t.component("Number Definition"),
            "object": t.component("Object Definition"),
            "string": t.component("String Definition"),
        })),
        "Schema": type(t.group({
            "definitions": prop(t.dictionary(t.component("Definition"))),
            "root": prop(t.text_local(text("single line"))),
        })),

        "Errors": type(t.list(t.group({
            "path": prop(t.text_local(text("single line"))),
            "type": prop(t.state_group({
                "not the right type": t.group({
                    "expected": prop(t.component("Value Type")),
                    "actual": prop(t.component("Value Type")),
                }),
                "type not allowed": t.group({
                    "type": prop(t.component("Value Type")),
                }),
                "missing property": t.text_local(text("single line")),
                "superfluous property": t.group({
                    "name": prop(t.text_local(text("single line"))),
                    "type": prop(t.component("Value Type")),
                }),
            })),
        }))),

        "Value Type": type(t.state_group({
            "array": t.nothing(),
            "boolean": t.nothing(),
            "null": t.nothing(),
            "number": t.nothing(),
            "object": t.nothing(),
            "string": t.nothing(),
        })),
    }
)


