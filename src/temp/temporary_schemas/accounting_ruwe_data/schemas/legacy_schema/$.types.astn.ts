import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Array Definition": type(t.component_cyclic("Definition")),
        "Boolean Definition": type(t.nothing()),
        "Null Definition": type(t.nothing()),
        "Number Definition": type(t.nothing()),
        "Object Definition": type(t.group({
            "type": t.state_group({
                "static": t.group({
                    "properties": t.dictionary(t.group({
                        "definition": t.component_cyclic("Definition"),
                        "optional": t.boolean(),
                    })),
                }),
                "dynamic": t.component_cyclic("Definition"),
            }),
        })),
        "String Definition": type(t.state_group({
            "any": t.nothing(),
            "enum": t.dictionary(t.nothing()),
        })),
        "Definition": type(t.state_group({
            "any": t.nothing(),
            "any of": t.group({
                "array": t.optional(t.component("Array Definition")),
                "boolean": t.optional(t.component("Boolean Definition")),
                "null": t.optional(t.component("Null Definition")),
                "number": t.optional(t.component("Number Definition")),
                "object": t.optional(t.component("Object Definition")),
                "string": t.optional(t.component("String Definition")),

                "else": t.optional(t.text_local(text("single line"))),//reference to a definition
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
            "definitions": t.dictionary(t.component("Definition")),
            "root": t.text_local(text("single line")),
        })),

        "Errors": type(t.list(t.group({
            "path": t.text_local(text("single line")),
            "type": t.state_group({
                "not the right type": t.group({
                    "expected": t.component("Value Type"),
                    "actual": t.component("Value Type"),
                }),
                "type not allowed": t.group({
                    "type": t.component("Value Type"),
                }),
                "missing property": t.text_local(text("single line")),
                "superfluous property": t.group({
                    "name": t.text_local(text("single line")),
                    "type" : t.component("Value Type"),
                }),
            })
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


