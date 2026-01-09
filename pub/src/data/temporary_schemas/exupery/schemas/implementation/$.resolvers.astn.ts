import * as _pi from 'pareto-core-interface'

import { resolvers, r, resolver, sig, state } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Resolvers<_pi.Deprecated_Source_Location> = resolvers(
    {

        "Module Set": resolver(r.dictionary(r.state_group({
            "module": state(r.component("Module", {}, {})),
            "set": state(r.component("Module Set", {}, {})),
        }))),

        "Module": resolver(r.group({
            "type": r.state_group({
                "serializer": state(r.nothing()),
                "deserializer": state(r.nothing()),
                "transformer": state(r.nothing()),
                "refiner": state(r.nothing()),
            }),
            "type imports": r.component_external("interface", "Imports", {}, {}),
            "variable imports": r.dictionary(r.group({
                "tail": r.list(r.text()),
                "type": r.state_group({
                    "ancestor": state(r.group({
                        "dependency": r.text(),
                        "number of steps": r.number(),
                    })),
                    "external": state(r.text()),
                    "sibling": state(r.text()),
                }),
            })),
            "variables": r.component("Variables", {}, {}),
        })),

        "Variables": resolver(r.dictionary(r.group({
            "type": r.optional(r.component_external("interface", "Type", {}, {})),
            "initialization": r.component("Initialization", {}, {}),
        }))),

        "Initialization": resolver(r.state_group({
            "block": state(r.group({
                "variables": r.component("Variables", {}, {}),
                "temp ordered variables": r.list(r.group({
                    "name": r.text(),
                    "type": r.optional(r.component_external("interface", "Type", {}, {})),
                    "initialization": r.component("Initialization", {}, {}),
                })),
                "initialization": r.component("Initialization", {}, {}),
            })),
            "change context": state(r.group({
                "new context": r.component("Selection", {}, {}),
                "initialization": r.component("Initialization", {}, {}),
            })),
            "literal": state(r.group({
                "value": r.component("Literal", {}, {}),
            })),
            "selection": state(r.component("Selection", {}, {})),
            "transformation": state(r.group({
                "source": r.component("Selection", {}, {}),
                "type": r.state_group({
                    "array": state(r.state_group({
                        "map": state(r.component("Initialization", {}, {})),
                    })),
                    "boolean": state(r.state_group({
                        "not": state(r.nothing()),
                        "transform": state(r.group({
                            "if false": r.component("Initialization", {}, {}),
                            "if true": r.component("Initialization", {}, {}),
                        })),
                    })),
                    "dictionary": state(r.state_group({
                        "map": state(r.component("Initialization", {}, {})),
                    })),
                    "function": state(r.state_group({
                        "call": state(r.group({
                            "context": r.component("Initialization", {}, {}),
                            "arguments": r.optional(r.dictionary(r.component("Initialization", {}, {}))),
                        })),
                    })),
                    "optional": state(r.state_group({
                        "map": state(r.component("Initialization", {}, {})),
                        "transform": state(r.group({
                            "if not set": r.component("Initialization", {}, {}),
                            "if set": r.component("Initialization", {}, {}),
                            "temp resulting node": r.optional(r.component_external("interface", "Type", {}, {})),
                        })),
                    })),
                    "tagged union": state(r.state_group({
                        "switch": state(r.group({
                            "temp resulting node": r.optional(r.component_external("interface", "Type", {}, {})),
                            "type": r.state_group({
                                "partial": state(r.group({
                                    "cases": r.dictionary(r.component("Initialization", {}, {})),
                                    "default": r.component("Initialization", {}, {}),
                                })),
                                "full": state(r.group({
                                    "cases": r.dictionary(r.component("Initialization", {}, {})),
                                }))
                            }),
                        })),
                    })),
                }),
            })),
        })),

        "Literal": resolver(r.state_group({
            "array": state(r.list(r.component("Initialization", {}, {}))),
            "boolean": state(r.state_group({
                "false": state(r.nothing()),
                "true": state(r.nothing()),
            })),
            "dictionary": state(r.dictionary(r.component("Initialization", {}, {}))),
            "function": state(r.group({
                "initialization": r.component("Initialization", {}, {}),
                "temp has parameters": r.boolean(),
                "temp resulting node": r.optional(r.component_external("interface", "Type", {}, {})),
            })),
            "group": state(r.dictionary(r.component("Initialization", {}, {}))),
            "null": state(r.nothing()),
            "number": state(r.state_group({
                "floting point": state(r.number()),
                "integer": state(r.number()),
                "signed integer": state(r.number()),
            })),
            "optional": state(r.state_group({
                "not set": state(r.nothing()),
                "set": state(r.component("Initialization", {}, {})),
            })),
            "string": state(r.group({
                "delimiter": r.state_group({
                    "backtick": state(r.nothing()),
                    "quote": state(r.nothing()),
                }),
                "value": r.text(),
            })),
            "tagged union": state(r.group({
                "case": r.text(),
                "value": r.component("Initialization", {}, {}),
            })),
        })),

        "Selection": resolver(r.group({
            "start": r.state_group({
                "abort": state(r.nothing()),
                "transform optional value": state(r.group({
                    "source": r.component("Selection", {}, {}),
                    "if not set": r.component("Selection", {}, {}),
                    "if set": r.component("Selection", {}, {}),
                })),

                "call": state(r.group({
                    "source": r.component("Selection", {}, {}),
                    "context": r.component("Selection", {}, {}),
                    "arguments": r.optional(r.dictionary(r.component("Initialization", {}, {}))),
                })),
                "implement me": state(r.nothing()),
                "argument": state(r.text()),
                "context": state(r.nothing()),
                "variable": state(r.text()),
                "parameter": state(r.text()),
                "imported variable": state(r.group({
                    "import": r.text(),
                    "variable": r.text(),
                })),
            }),
            "tail": r.list(r.text()),
        })),

    })