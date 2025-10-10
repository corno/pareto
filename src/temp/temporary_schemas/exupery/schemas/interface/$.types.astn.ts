import * as pd from 'exupery-core-data'

import {
    text,
    types,
    n,
    t,
    tr,
    type,
    prop,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Module Set": type(t.dictionary(t.state_group({
            "module": t.component("Module"),
            "set": t.component_cyclic("Module Set"),
        }))),

        "Type Parameters": type(t.dictionary(t.nothing())),

        "Module": type(t.group({
            "imports": prop(t.component("Imports")),
            "type parameters": prop(t.component("Type Parameters")),
            "types": prop(t.dictionary(t.group({
                "parameters": prop(t.component("Type Parameters")),
                "type": prop(t.component_cyclic("Type")),
            }))),
        })),

        "Imports": type(t.dictionary(t.group({
            "type": prop(t.state_group({
                "external": t.text_global("TBD"),
                "ancestor": t.group({
                    "number of steps": prop(t.number_local(n.natural())),
                    "dependency": prop(t.text_global("TBD")),
                }),
                "sibling": t.text_global("TBD"),
            })),
            "tail": prop(t.list(t.text_global("TBD"))),
            "type arguments": prop(t.component("Type Arguments")),
        }))),

        "Type Arguments": type(t.dictionary(t.component_cyclic("Type"))),

        "Type Parameter Selection": type(t.group({
            "location": prop(t.state_group({
                "module": t.nothing(),
                "type": t.nothing(),
                "function": t.nothing(),
            })),
            "parameter": prop(t.text_global("TBD")),
        })),

        "Type": type(t.state_group({
            "boolean": t.nothing(),
            "component": t.group({
                "location": prop(t.state_group({
                    "import": t.group({
                        "import": prop(t.text_global("TBD")),
                        "type": prop(t.text_global("TBD")),
                    }),
                    "sibling": t.text_global("TBD"),
                })),
                "type arguments": prop(t.component("Type Arguments")),
                "sub selection": prop(t.list(t.state_group({
                    "dictionary": t.nothing(),
                    "group": t.text_global("TBD"),
                    "list": t.nothing(),
                    "optional": t.nothing(),
                    "state group": t.text_global("TBD"),
                }))),
            }),
            "computed": t.component_cyclic("Type"),
            "dictionary": t.component_cyclic("Type"),
            "function": t.group({
                "type parameters": prop(t.component("Type Parameters")),
                "context": prop(t.component_cyclic("Type")),
                "parameters": prop(t.dictionary(t.component_cyclic("Type"))),
                "return": prop(t.component_cyclic("Type")),
            }),
            "group": t.dictionary(t.component_cyclic("Type")),
            "array": t.component_cyclic("Type"),
            "null": t.nothing(),
            "number": t.state_group({
                "integer": t.group({
                    "signed": prop(t.boolean())
                }),
                "float": t.nothing(),
            }),
            "optional": t.component_cyclic("Type"),
            "parameter": t.component("Type Parameter Selection"),
            "tagged union": t.dictionary(t.component_cyclic("Type")),
            "string": t.nothing(),
        })),

    }
)