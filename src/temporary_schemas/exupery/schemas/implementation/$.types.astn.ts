import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"

import * as g_ from "../../../../generated/interface/schemas/schema/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Initialization": type(t.state_group({
            "block": t.group({
                "variables": t.component("Variables"),
                "temp ordered variables": t.list(t.group({ //FIXME: remove this as soon as the dependencies can be determined in the variables dictionary
                    "name": t.text_global("Identifier"),
                    "type": t.optional(t.component_external("interface", "Type")),
                    "initialization": t.component_cyclic("Initialization"),
                })),
                "initialization": t.component_cyclic("Initialization"),
            }),
            "change context": t.group({
                "new context": t.component_cyclic("Selection"),
                "initialization": t.component_cyclic("Initialization"),
            }),
            "literal": t.group({
                "value": t.component("Literal"),
            }),
            "selection": t.component_cyclic("Selection"),

            "transformation": t.group({
                "source": t.component_cyclic("Selection"),
                "type": t.state_group({
                    "array": t.state_group({
                        "map": t.component_cyclic("Initialization"),
                    }),
                    "boolean": t.state_group({
                        "not": t.nothing(),
                        "transform": t.group({
                            "if false": t.component_cyclic("Initialization"),
                            "if true": t.component_cyclic("Initialization"),
                        }),
                    }),
                    // "component": t.nothing(),
                    // "computed": t.nothing(),
                    "dictionary": t.state_group({
                        "map": t.component_cyclic("Initialization"),
                    }),
                    "function": t.state_group({
                        "call": t.group({
                            "context": t.component_cyclic("Initialization"),
                            "arguments": t.optional(t.dictionary(t.component_cyclic("Initialization"))),
                        }),
                    }),
                    // "group": t.nothing(),
                    // "null": t.nothing(),
                    // "number": t.state_group({
                    // }),
                    "optional": t.state_group({
                        "map": t.component_cyclic("Initialization"),
                        "transform": t.group({
                            "if not set": t.component_cyclic("Initialization"),
                            "if set": t.component_cyclic("Initialization"),
                            "temp resulting node": t.optional(t.component_external("interface", "Type")),
                        }),
                    }),
                    // "parameter": t.nothing(),
                    // "string": t.state_group({
                    //     "copy": t.nothing(),
                    // }),
                    "tagged union": t.state_group({
                        "switch": t.group({
                            "temp resulting node": t.optional(t.component_external("interface", "Type")),
                            "type": t.state_group({
                                "partial": t.group({
                                    "cases": t.dictionary(t.component_cyclic("Initialization")),
                                    "default": t.component_cyclic("Initialization"),
                                }),
                                "full": t.group({
                                    "cases": t.dictionary(t.component_cyclic("Initialization")),
                                })
                            }),
                        }),
                    }),
                }),
            }),
        })),
        "Literal": type(t.state_group({
            "array": t.list(t.component_cyclic("Initialization")),
            "boolean": t.state_group({
                "false": t.nothing(),
                "true": t.nothing(),
            }),
            "dictionary": t.dictionary(t.component_cyclic("Initialization")),
            "function": t.group({
                "initialization": t.component_cyclic("Initialization"),
                "temp has parameters": t.boolean(),
                "temp resulting node": t.optional(t.component_external("interface", "Type")),
            }),
            "group": t.dictionary(t.component_cyclic("Initialization")),
            "null": t.nothing(),
            "number": t.state_group({
                "floting point": t.number_local(n.approximation(10)),
                "integer": t.number_local(n.integer()),
                "signed integer": t.number_local(n.natural()),
            }),
            "optional": t.state_group({
                "not set": t.nothing(),
                "set": t.component_cyclic("Initialization"),
            }),
            "string": t.group({
                "delimiter": t.state_group({
                    "backtick": t.nothing(),
                    "quote": t.nothing(),
                }),
                "value": t.text_local(text('single line')),
            }),
            "tagged union": t.group({
                "case": t.text_global("Identifier"),
                "value": t.component_cyclic("Initialization"),
            }),
        })),
        "Module": type(t.group({
            "type imports": t.component_external("interface", "Imports"),
            "variable imports": t.dictionary(t.group({
                "tail": t.list(t.text_global("TBD")),
                "type": t.state_group({
                    "ancestor": t.group({
                        "dependency": t.text_global("TBD"),
                        "number of steps": t.number_local(n.natural()),
                    }),
                    "external": t.text_global("TBD"),
                    "sibling": t.text_global("TBD"),
                }),
            })),
            "variables": t.component("Variables"),
        })),
        "Module Set": type(t.dictionary(t.state_group({
            "module": t.component("Module"),
            "set": t.component_cyclic("Module Set"),
        }))),
        "Selection": type(t.group({
            "start": t.state_group({
                "abort": t.nothing(),
                "transform optional value": t.group({
                    "source": t.component_cyclic("Selection"),
                    "if not set": t.component_cyclic("Selection"),
                    "if set": t.component_cyclic("Selection"),
                }),
                "call": t.group({
                    "source": t.component_cyclic("Selection"),
                    "context": t.component_cyclic("Selection"),
                    "arguments": t.optional(t.dictionary(t.component_cyclic("Initialization"))),
                }),
                "implement me": t.nothing(),
                "argument": t.text_global("TBD"),
                "context": t.nothing(),
                "variable": t.text_global("TBD"),
                "parameter": t.text_global("TBD"),
                "imported variable": t.group({
                    "import": t.text_global("TBD"),
                    "variable": t.text_global("TBD"),
                })
            }),
            "tail": t.list(t.text_global("TBD")),
        })),
        "Type Parameters": type(t.dictionary(t.nothing())),
        "Variables": type(t.dictionary(t.group({
            "type": t.optional(t.component_external("interface", "Type")),
            "initialization": t.component_cyclic("Initialization"),
        }))),
    }
)