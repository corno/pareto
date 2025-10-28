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

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Initialization": type(t.state_group({
            "block": tstate(t.group({
                "variables": prop(t.component("Variables")),
                "temp ordered variables": prop(t.list(t.group({ //FIXME: remove this as soon as the dependencies can be determined in the variables dictionary
                    "name": prop(t.text_global("Identifier")),
                    "type": prop(t.optional(t.component_external("interface", "Type"))),
                    "initialization": prop(t.component_cyclic("Initialization")),
                }))),
                "initialization": prop(t.component_cyclic("Initialization")),
            })),
            "change context": tstate(t.group({
                "new context": prop(t.component_cyclic("Selection")),
                "initialization": prop(t.component_cyclic("Initialization")),
            })),
            "literal": tstate(t.group({
                "value": prop(t.component("Literal")),
            })),
            "selection": tstate(t.component_cyclic("Selection")),

            "transformation": tstate(t.group({
                "source": prop(t.component_cyclic("Selection")),
                "type": prop(t.state_group({
                    "array": tstate(t.state_group({
                        "map": tstate(t.component_cyclic("Initialization")),
                    })),
                    "boolean": tstate(t.state_group({
                        "not": tstate(t.nothing()),
                        "transform": tstate(t.group({
                            "if false": prop(t.component_cyclic("Initialization")),
                            "if true": prop(t.component_cyclic("Initialization")),
                        })),
                    })),
                    // "component": t.nothing(),
                    // "computed": t.nothing(),
                    "dictionary": tstate(t.state_group({
                        "map": tstate(t.component_cyclic("Initialization")),
                    })),
                    "function": tstate(t.state_group({
                        "call": tstate(t.group({
                            "context": prop(t.component_cyclic("Initialization")),
                            "arguments": prop(t.optional(t.dictionary(t.component_cyclic("Initialization")))),
                        })),
                    })),
                    // "group": t.nothing(),
                    // "null": t.nothing(),
                    // "number": t.state_group({
                    // }),
                    "optional": tstate(t.state_group({
                        "map": tstate(t.component_cyclic("Initialization")),
                        "transform": tstate(t.group({
                            "if not set": prop(t.component_cyclic("Initialization")),
                            "if set": prop(t.component_cyclic("Initialization")),
                            "temp resulting node": prop(t.optional(t.component_external("interface", "Type"))),
                        })),
                    })),
                    // "parameter": t.nothing(),
                    // "string": t.state_group({
                    //     "copy": t.nothing(),
                    // }),
                    "tagged union": tstate(t.state_group({
                        "switch": tstate(t.group({
                            "temp resulting node": prop(t.optional(t.component_external("interface", "Type"))),
                            "type": prop(t.state_group({
                                "partial": tstate(t.group({
                                    "cases": prop(t.dictionary(t.component_cyclic("Initialization"))),
                                    "default": prop(t.component_cyclic("Initialization")),
                                })),
                                "full": tstate(t.group({
                                    "cases": prop(t.dictionary(t.component_cyclic("Initialization"))),
                                }))
                            })),
                        })),
                    })),
                })),
            })),
        })),
        "Literal": type(t.state_group({
            "array": tstate(t.list(t.component_cyclic("Initialization"))),
            "boolean": tstate(t.state_group({
                "false": tstate(t.nothing()),
                "true": tstate(t.nothing()),
            })),
            "dictionary": tstate(t.dictionary(t.component_cyclic("Initialization"))),
            "function": tstate(t.group({
                "initialization": prop(t.component_cyclic("Initialization")),
                "temp has parameters": prop(t.boolean()),
                "temp resulting node": prop(t.optional(t.component_external("interface", "Type"))),
            })),
            "group": tstate(t.dictionary(t.component_cyclic("Initialization"))),
            "null": tstate(t.nothing()),
            "number": tstate(t.state_group({
                "floting point": tstate(t.number_local(n.approximation(10))),
                "integer": tstate(t.number_local(n.integer())),
                "signed integer": tstate(t.number_local(n.natural())),
            })),
            "optional": tstate(t.state_group({
                "not set": tstate(t.nothing()),
                "set": tstate(t.component_cyclic("Initialization")),
            })),
            "string": tstate(t.group({
                "delimiter": prop(t.state_group({
                    "backtick": tstate(t.nothing()),
                    "quote": tstate(t.nothing()),
                })),
                "value": prop(t.text_local(text('single line'))),
            })),
            "tagged union": tstate(t.group({
                "case": prop(t.text_global("Identifier")),
                "value": prop(t.component_cyclic("Initialization")),
            })),
        })),
        "Module": type(t.group({
            "type imports": prop(t.component_external("interface", "Imports")),
            "variable imports": prop(t.dictionary(t.group({
                "tail": prop(t.list(t.text_global("TBD"))),
                "type": prop(t.state_group({
                    "ancestor": tstate(t.group({
                        "dependency": prop(t.text_global("TBD")),
                        "number of steps": prop(t.number_local(n.natural())),
                    })),
                    "external": tstate(t.text_global("TBD")),
                    "sibling": tstate(t.text_global("TBD")),
                })),
            }))),
            "variables": prop(t.component("Variables")),
        })),
        "Module Set": type(t.dictionary(t.state_group({
            "module": tstate(t.component("Module")),
            "set": tstate(t.component_cyclic("Module Set")),
        }))),
        "Selection": type(t.group({
            "start": prop(t.state_group({
                "abort": tstate(t.nothing()),
                "transform optional value": tstate(t.group({
                    "source": prop(t.component_cyclic("Selection")),
                    "if not set": prop(t.component_cyclic("Selection")),
                    "if set": prop(t.component_cyclic("Selection")),
                })),
                "call": tstate(t.group({
                    "source": prop(t.component_cyclic("Selection")),
                    "context": prop(t.component_cyclic("Selection")),
                    "arguments": prop(t.optional(t.dictionary(t.component_cyclic("Initialization")))),
                })),
                "implement me": tstate(t.nothing()),
                "argument": tstate(t.text_global("TBD")),
                "context": tstate(t.nothing()),
                "variable": tstate(t.text_global("TBD")),
                "parameter": tstate(t.text_global("TBD")),
                "imported variable": tstate(t.group({
                    "import": prop(t.text_global("TBD")),
                    "variable": prop(t.text_global("TBD")),
                }))
            })),
            "tail": prop(t.list(t.text_global("TBD"))),
        })),
        "Type Parameters": type(t.dictionary(t.nothing())),
        "Variables": type(t.dictionary(t.group({
            "type": prop(t.optional(t.component_external("interface", "Type"))),
            "initialization": prop(t.component_cyclic("Initialization")),
        }))),
    }
)