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



        "String Literal": type(t.group({
            "delimiter": prop(t.state_group({
                "quote": t.nothing(),
                "apostrophe": t.nothing(),
            })),
            "value": prop(t.text_local(text('single line')))
        })),
        "Expression": type(t.state_group({
            "number literal": t.number_local(n.approximation(10)),
            "true": t.nothing(),
            "false": t.nothing(),
            "null": t.nothing(),
            "string literal": t.component("String Literal"),
            "object literal": t.group({
                "properties": prop(t.dictionary(t.component_cyclic("Expression"))),
            }),
            "array literal": t.list(t.component_cyclic("Expression")),
            "arrow function": t.group({
                "parameters": prop(t.list(t.group({
                    "name": prop(t.text_local(text('single line'))),
                    "type": prop(t.optional(t.component_cyclic("Type"))),
                }))),
                "return type": prop(t.optional(t.component_cyclic("Type"))),
                "type": prop(t.state_group({
                    "block": t.component("Statements"),
                    "expression": t.component_cyclic("Expression"),
                })),
            }),
            "call": t.group({
                "function selection": prop(t.component_cyclic("Expression")),
                "arguments": prop(t.list(t.component_cyclic("Expression"))),
            })

        })),
        // "Selection": type(t.group({
        //     "start": t.text_local(text('single line')),
        //     "tail": t.list(t.text_local(text('single line'))),
        // })),
        "Type": type(t.state_group({
            "boolean": t.nothing(),
            "function": t.group({
                "type parameters": prop(t.list(t.text_local(text('single line')))),
                "parameters": prop(t.list(t.group({
                    "name": prop(t.text_local(text('single line'))),
                    "type": prop(t.optional(t.component_cyclic("Type"))),
                }))),
                "return": prop(t.component_cyclic("Type")),
            }),
            "literal type": t.component("String Literal"),
            "null": t.nothing(),
            "number": t.nothing(),
            "string": t.nothing(),
            "tuple": t.group({
                "readonly": prop(t.boolean()),
                "elements": prop(t.list(t.component_cyclic("Type"))),
            }),
            "type literal": t.group({
                "properties": prop(t.dictionary(t.group({
                    "readonly": prop(t.boolean()),
                    "type": prop(t.component_cyclic("Type")),
                }))),
            }),
            "type reference": t.group({
                "start": prop(t.text_local(text('single line'))),
                "tail": prop(t.list(t.text_local(text('single line')))),
                "type arguments": prop(t.list(t.component_cyclic("Type"))),
            }),
            "union": t.list(t.component_cyclic("Type")),
            "void": t.nothing(),
        })),
        "Statements": type(t.list(t.state_group({
            "import": t.group({
                "type": prop(t.state_group({
                    "namespace": t.text_local(text('single line')),
                    "named": t.group({
                        "specifiers": prop(t.dictionary(t.text_local(text('single line')))),
                    }),
                })),
                "from": prop(t.text_local(text('single line'))),
            }),
            "module declaration": t.group({ //namespace
                "export": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "block": prop(t.component_cyclic("Statements")),
            }),
            "type alias declaration": t.group({
                "export": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "parameters": prop(t.list(t.text_local(text('single line')))),
                "type": prop(t.component_cyclic("Type")),
            }),
            "variable": t.group({
                "export": prop(t.boolean()),
                "const": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "type": prop(t.optional(t.component_cyclic("Type"))),
                "expression": prop(t.optional(t.component_cyclic("Expression"))),
            }),
        }))),

        /**
         * these are all temporary fountain pen types, they should be replaced with the actual types
         */

        "Block": type(t.list(t.component_cyclic("Block Part"))),

        "Block Part": type(t.state_group({
            "nested line": t.component("Line"),
            "line": t.text_global("Output"),
            "sub block": t.component("Block"),
            "optional": t.optional(t.component_cyclic("Block Part")),
            "nothing": t.nothing(),
        })),

        "Line": type(t.list(t.component_cyclic("Line Part"))),

        "Line Part": type(t.state_group({
            "snippet": t.text_global("Output"),
            "indent": t.component("Block"),
            "sub line": t.component("Line"),
            "optional": t.optional(t.component_cyclic("Line Part")),
            "nothing": t.nothing(),
        })),

        "Lines": type(t.list(t.group({
            "indentation": prop(t.number_local(n.natural())),
            "text": prop(t.text_global("Output")),
        }))),

        "Directory": type(t.dictionary(
            t.state_group({
                "file": t.component("Block"),
                "directory": t.component_cyclic("Directory"),
            })
        )),
    }
)


