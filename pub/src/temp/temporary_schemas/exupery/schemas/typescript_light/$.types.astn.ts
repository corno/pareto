import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {



        "String Literal": type(t.group({
            "delimiter": prop(t.state_group({
                "quote": tstate(t.nothing()),
                "apostrophe": tstate(t.nothing()),
            })),
            "value": prop(t.text_local(text('single line')))
        })),
        "Expression": type(t.state_group({
            "number literal": tstate(t.number_local(n.approximation(10))),
            "true": tstate(t.nothing()),
            "false": tstate(t.nothing()),
            "null": tstate(t.nothing()),
            "string literal": tstate(t.component("String Literal")),
            "object literal": tstate(t.group({
                "properties": prop(t.dictionary(t.component_cyclic("Expression"))),
            })),
            "array literal": tstate(t.list(t.component_cyclic("Expression"))),
            "arrow function": tstate(t.group({
                "parameters": prop(t.list(t.group({
                    "name": prop(t.text_local(text('single line'))),
                    "type": prop(t.optional(t.component_cyclic("Type"))),
                }))),
                "return type": prop(t.optional(t.component_cyclic("Type"))),
                "type": prop(t.state_group({
                    "block": tstate(t.component("Statements")),
                    "expression": tstate(t.component_cyclic("Expression")),
                })),
            })),
            "call": tstate(t.group({
                "function selection": prop(t.component_cyclic("Expression")),
                "arguments": prop(t.list(t.component_cyclic("Expression"))),
            }))

        })),
        // "Selection": type(t.group({
        //     "start": t.text_local(text('single line')),
        //     "tail": t.list(t.text_local(text('single line'))),
        // })),
        "Type": type(t.state_group({
            "boolean": tstate(t.nothing()),
            "function": tstate(t.group({
                "type parameters": prop(t.list(t.text_local(text('single line')))),
                "parameters": prop(t.list(t.group({
                    "name": prop(t.text_local(text('single line'))),
                    "type": prop(t.optional(t.component_cyclic("Type"))),
                }))),
                "return": prop(t.component_cyclic("Type")),
            })),
            "literal type": tstate(t.component("String Literal")),
            "null": tstate(t.nothing()),
            "number": tstate(t.nothing()),
            "string": tstate(t.nothing()),
            "tuple": tstate(t.group({
                "readonly": prop(t.boolean()),
                "elements": prop(t.list(t.component_cyclic("Type"))),
            })),
            "type literal": tstate(t.group({
                "properties": prop(t.dictionary(t.group({
                    "readonly": prop(t.boolean()),
                    "type": prop(t.component_cyclic("Type")),
                }))),
            })),
            "type reference": tstate(t.group({
                "start": prop(t.text_local(text('single line'))),
                "tail": prop(t.list(t.text_local(text('single line')))),
                "type arguments": prop(t.list(t.component_cyclic("Type"))),
            })),
            "union": tstate(t.list(t.component_cyclic("Type"))),
            "void": tstate(t.nothing()),
        })),
        "Statements": type(t.list(t.state_group({
            "import": tstate(t.group({
                "type": prop(t.state_group({
                    "namespace": tstate(t.text_local(text('single line'))),
                    "named": tstate(t.group({
                        "specifiers": prop(t.dictionary(t.text_local(text('single line')))),
                    })),
                })),
                "from": prop(t.text_local(text('single line'))),
            })),
            "module declaration": tstate(t.group({ //namespace
                "export": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "block": prop(t.component_cyclic("Statements")),
            })),
            "type alias declaration": tstate(t.group({
                "export": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "parameters": prop(t.list(t.text_local(text('single line')))),
                "type": prop(t.component_cyclic("Type")),
            })),
            "variable": tstate(t.group({
                "export": prop(t.boolean()),
                "const": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "type": prop(t.optional(t.component_cyclic("Type"))),
                "expression": prop(t.optional(t.component_cyclic("Expression"))),
            })),
        }))),

        /**
         * these are all temporary fountain pen types, they should be replaced with the actual types
         */

        "Group": type(t.list(t.component_cyclic("Group Part"))),

        "Group Part": type(t.state_group({
            "nested line": tstate(t.component("Line")),
            "line": tstate(t.text_global("Output")),
            "sub block": tstate(t.component("Group")),
            "optional": tstate(t.optional(t.component_cyclic("Group Part"))),
            "nothing": tstate(t.nothing()),
        })),

        "Line": type(t.list(t.component_cyclic("Line Part"))),

        "Line Part": type(t.state_group({
            "snippet": tstate(t.text_global("Output")),
            "indent": tstate(t.component("Group")),
            "sub line": tstate(t.component("Line")),
            "optional": tstate(t.optional(t.component_cyclic("Line Part"))),
            "nothing": tstate(t.nothing()),
        })),

        "Lines": type(t.list(t.group({
            "indentation": prop(t.number_local(n.natural())),
            "text": prop(t.text_global("Output")),
        }))),

        "Directory": type(t.dictionary(
            t.state_group({
                "file": tstate(t.component("Group")),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),
    }
)


