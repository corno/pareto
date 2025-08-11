import * as pd from 'exupery-core-data'

import {
    text,
    types,
    n,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"

import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Module Set": type(t.dictionary(t.state_group({
            "module": t.component("Module"),
            "set": t.component_cyclic("Module Set"),
        }))),

        "Type Parameters": type(t.dictionary(t.nothing())),

        "Module": type(t.group({
            "imports": t.component("Imports"),
            "type parameters": t.component("Type Parameters"),
            "types": t.dictionary(t.group({
                "parameters": t.component("Type Parameters"),
                "type": t.component_cyclic("Type"),
            })),
        })),

        "Imports": type(t.dictionary(t.group({
            "type": t.state_group({
                "external": t.text_global("TBD"),
                "ancestor": t.group({
                    "number of steps": t.number_local(n.natural()),
                    "dependency": t.text_global("TBD"),
                }),
                "sibling": t.text_global("TBD"),
            }),
            "tail": t.list(t.text_global("TBD")),
            "type arguments": t.component("Type Arguments"),
        }))),

        "Type Arguments": type(t.dictionary(t.component_cyclic("Type"))),

        "Type Parameter Selection": type(t.group({
            "location": t.state_group({
                "module": t.nothing(),
                "type": t.nothing(),
                "function": t.nothing(),
            }),
            "parameter": t.text_global("TBD"),
        })),

        "Type": type(t.state_group({
            "boolean": t.nothing(),
            "component": t.group({
                "location": t.state_group({
                    "import": t.group({
                        "import": t.text_global("TBD"),
                        "type": t.text_global("TBD"),
                    }),
                    "sibling": t.text_global("TBD"),
                }),
                "type arguments": t.component("Type Arguments"),
                "sub selection": t.list(t.state_group({
                    "dictionary": t.nothing(),
                    "group": t.text_global("TBD"),
                    "list": t.nothing(),
                    "optional": t.nothing(),
                    "state group": t.text_global("TBD"),
                })),
            }),
            "computed": t.component_cyclic("Type"),
            "dictionary": t.component_cyclic("Type"),
            "function": t.group({
                "type parameters": t.component("Type Parameters"),
                "context": t.component_cyclic("Type"),
                "parameters": t.dictionary(t.component_cyclic("Type")),
                "return": t.component_cyclic("Type"),
            }),
            "group": t.dictionary(t.component_cyclic("Type")),
            "array": t.component_cyclic("Type"),
            "key value pair": t.component_cyclic("Type"),
            "null": t.nothing(),
            "number": t.state_group({
                "integer": t.group({
                    "signed": t.boolean()
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