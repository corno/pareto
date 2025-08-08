import * as pd from 'exupery-core-data'

import { resolvers, r, resolver, sig, state } from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Resolvers<pd.Source_Location> = resolvers(
    {
        "Module Set": resolver(r.dictionary(r.state_group({
            "module": state(r.component("Module", {}, {})),
            "set": state(r.component("Module Set", {}, {})),
        }))),

        "Type Parameters": resolver(r.dictionary(r.nothing())),

        "Module": resolver(r.group({
            "imports": r.component("Imports", {}, {}),
            "type parameters": r.component("Type Parameters", {}, {}),
            "types": r.dictionary(r.group({
                "parameters": r.component("Type Parameters", {}, {}),
                "type": r.component("Type", {}, {}),
            })),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "type": r.state_group({
                "external": state(r.text()),
                "ancestor": state(r.group({
                    "number of steps": r.number(),
                    "dependency": r.text(),
                })),
                "sibling": state(r.text()),
            }),
            "tail": r.list(r.text()),
            "type arguments": r.component("Type Arguments", {}, {}),
        }))),

        "Type Arguments": resolver(r.dictionary(r.component("Type", {}, {}))),

        "Type Parameter Selection": resolver(r.group({
            "location": r.state_group({
                "module": state(r.nothing()),
                "type": state(r.nothing()),
            }),
            "parameter": r.text(),
        })),

        "Type": resolver(r.state_group({
            "boolean": state(r.nothing()),
            "component": state(r.group({
                "location": r.state_group({
                    "import": state(r.group({
                        "import": r.text(),
                        "type": r.text(),
                    })),
                    "sibling": state(r.text()),
                }),
                "type arguments": r.component("Type Arguments", {}, {}),
                "sub selection": r.list(r.state_group({
                    "dictionary": state(r.nothing()),
                    "group": state(r.text()),
                    "list": state(r.nothing()),
                    "optional": state(r.nothing()),
                    "state group": state(r.text()),
                })),
            })),
            "computed": state(r.component("Type", {}, {})),
            "dictionary": state(r.component("Type", {}, {})),
            "function": state(r.group({
                "type parameters": r.component("Type Parameters", {}, {}),
                "context": r.component("Type", {}, {}),
                "parameters": r.dictionary(r.component("Type", {}, {})),
                "return": r.component("Type", {}, {}),
            })),
            "group": state(r.dictionary(r.component("Type", {}, {}))),
            "array": state(r.component("Type", {}, {})),
            "key value pair": state(r.component("Type", {}, {})),
            "null": state(r.nothing()),

            "number": state(r.state_group({
                "integer": state(r.group({
                    "signed": r.boolean()
                })),
                "float": state(r.nothing()),
            })),
            "optional": state(r.component("Type", {}, {})),
            "parameter": state(r.component("Type Parameter Selection", {}, {})),
            "tagged union": state(r.dictionary(r.component("Type", {}, {}))),
            "string": state(r.nothing()),
        })),

    })