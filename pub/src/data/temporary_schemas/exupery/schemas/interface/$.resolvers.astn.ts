import * as _pi from 'pareto-core-interface'

import { resolvers, r, resolver, sig, state } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Resolvers<_pi.Deprecated_Source_Location> = resolvers(
    {
        "Module Set": resolver(r.dictionary(r.state_group({
            "module": state(r.component("Module", {}, {})),
            "set": state(r.component("Module Set", {}, {})),
        }))),

        "Type Parameters": resolver(r.dictionary(r.nothing())),

        "Module": resolver(r.group({
            "imports": r.component("Imports", {}, {}),
            "type parameters": r.component("Type Parameters", {}, {}),
            "data types": r.dictionary(r.group({
                "deprecated parameters": r.component("Type Parameters", {}, {}),
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
                "function": state(r.nothing()),
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
            "circular dependent": state(r.component("Type", {}, {})),
            "dictionary": state(r.component("Type", {}, {})),
            "deprecated function": state(r.group({
                "type parameters": r.component("Type Parameters", {}, {}),
                "context": r.component("Type", {}, {}),
                "parameters": r.dictionary(r.component("Type", {}, {})),
                "return": r.component("Type", {}, {}),
                "abort": r.optional(r.component("Type", {}, {})),
            })),
            "group": state(r.dictionary(r.component("Type", {}, {}))),
            "list": state(r.component("Type", {}, {})),
            "nothing": state(r.nothing()),

            "number": state(r.state_group({
                "exact": state(r.state_group({
                    "natural": state(r.nothing()),
                    "integer": state(r.nothing()),
                })),
                "approximation": state(r.nothing()),
            })),
            "optional": state(r.component("Type", {}, {})),
            "deprecated parameter": state(r.component("Type Parameter Selection", {}, {})),
            "state group": state(r.dictionary(r.component("Type", {}, {}))),
            "text": state(r.nothing()),
        })),

    })