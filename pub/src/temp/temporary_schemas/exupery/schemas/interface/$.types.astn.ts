import * as pd from 'exupery-core-data'

import {
    text,
    types,
    n,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Module Set": type(t.dictionary(t.state_group({
            "module": tstate(t.component("Module")),
            "set": tstate(t.component_cyclic("Module Set")),
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
                "external": tstate(t.text_global("TBD")),
                "ancestor": tstate(t.group({
                    "number of steps": prop(t.number_local(n.natural())),
                    "dependency": prop(t.text_global("TBD")),
                })),
                "sibling": tstate(t.text_global("TBD")),
            })),
            "tail": prop(t.list(t.text_global("TBD"))),
            "type arguments": prop(t.component("Type Arguments")),
        }))),

        "Type Arguments": type(t.dictionary(t.component_cyclic("Type"))),

        "Type Parameter Selection": type(t.group({
            "location": prop(t.state_group({
                "module": tstate(t.nothing()),
                "type": tstate(t.nothing()),
                "function": tstate(t.nothing()),
            })),
            "parameter": prop(t.text_global("TBD")),
        })),

        "Type": type(t.state_group({
            "boolean": tstate(t.nothing()),
            "component": tstate(t.group({
                "location": prop(t.state_group({
                    "import": tstate(t.group({
                        "import": prop(t.text_global("TBD")),
                        "type": prop(t.text_global("TBD")),
                    })),
                    "sibling": tstate(t.text_global("TBD")),
                })),
                "type arguments": prop(t.component("Type Arguments")),
                "sub selection": prop(t.list(t.state_group({
                    "dictionary": tstate(t.nothing()),
                    "group": tstate(t.text_global("TBD")),
                    "list": tstate(t.nothing()),
                    "optional": tstate(t.nothing()),
                    "state group": tstate(t.text_global("TBD")),
                }))),
            })),
            "computed": tstate(t.component_cyclic("Type")),
            "dictionary": tstate(t.component_cyclic("Type")),
            "function": tstate(t.group({
                "type parameters": prop(t.component("Type Parameters")),
                "context": prop(t.component_cyclic("Type")),
                "parameters": prop(t.dictionary(t.component_cyclic("Type"))),
                "return": prop(t.component_cyclic("Type")),
            })),
            "group": tstate(t.dictionary(t.component_cyclic("Type"))),
            "array": tstate(t.component_cyclic("Type")),
            "null": tstate(t.nothing()),
            "number": tstate(t.state_group({
                "integer": tstate(t.group({
                    "signed": prop(t.boolean())
                })),
                "float": tstate(t.nothing()),
            })),
            "optional": tstate(t.component_cyclic("Type")),
            "parameter": tstate(t.component("Type Parameter Selection")),
            "tagged union": tstate(t.dictionary(t.component_cyclic("Type"))),
            "string": tstate(t.nothing()),
        })),

    }
)