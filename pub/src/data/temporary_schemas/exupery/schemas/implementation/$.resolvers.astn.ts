import * as _pi from 'pareto-core-interface'

import { resolvers, r, resolver, sig, state, st } from "../../../../../shorthands/schema"
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
            "initialization": r.component("Expression", {}, {}),
        }))),

        "Expression": resolver(r.state_group({
            "abort": state(r.component("Expression", {}, {})),
            "block": state(r.group({
                "variables": r.component("Variables", {}, {}),
                "temp ordered variables": r.list(r.group({
                    "name": r.text(),
                    "type": r.optional(r.component_external("interface", "Type", {}, {})),
                    "initialization": r.component("Expression", {}, {}),
                })),
                "initialization": r.component("Expression", {}, {}),
            })),
            "change context": state(r.group({
                "new context": r.component("Selection", {}, {}),
                "initialization": r.component("Expression", {}, {}),
            })),
            "initialize": state(r.state_group({
                "list": state(r.state_group({
                    "literal": state(r.list(r.component("Expression", {}, {}))),
                })),
                "boolean": state(r.state_group({
                    "literal": state(r.state_group({
                        "false": state(r.nothing()),
                        "true": state(r.nothing()),
                    }))
                })),
                "dictionary": state(r.state_group({
                    "literal": state(r.dictionary(r.component("Expression", {}, {})))
                })),
                "deprecated function": state(r.group({
                    "initialization": r.component("Expression", {}, {}),
                    "temp has parameters": r.boolean(),
                    "temp resulting node": r.optional(r.component_external("interface", "Type", {}, {})),
                })),
                "group": state(r.dictionary(r.component("Expression", {}, {}))),
                "nothing": state(r.nothing()),
                "number": state(r.state_group({
                    "approximation": state(r.state_group({
                        "literal": state(r.number())
                    })),
                    "integer": state(r.state_group({
                        "literal": state(r.number())
                    })),
                    "natural": state(r.state_group({
                        "literal": state(r.number())
                    })),
                })),
                "optional": state(r.state_group({
                    "literal": state(r.state_group({
                        "not set": state(r.nothing()),
                        "set": state(r.component("Expression", {}, {})),
                    })),
                })),
                "text": state(r.state_group({
                    "literal": state(r.group({
                        "delimiter": r.state_group({
                            "backtick": state(r.nothing()),
                            "quote": state(r.nothing()),
                        }),
                        "value": r.text(),
                    }))
                })),
                "state group": state(r.state_group({
                    "literal": state(r.group({
                        "state": r.text(),
                        "value": r.component("Expression", {}, {}),
                    })),
                })),
            })),
            "selection": state(r.component("Selection", {}, {})),
            "transformation": state(r.group({
                "source": r.component("Selection", {}, {}),
                "type": r.state_group({
                    "list": state(r.state_group({
                        "map": state(r.component("Expression", {}, {})),
                    })),
                    "boolean": state(r.state_group({
                        "not": state(r.nothing()),
                        "transform": state(r.group({
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                    })),
                    "dictionary": state(r.state_group({
                        "map": state(r.component("Expression", {}, {})),
                    })),
                    "function": state(r.state_group({
                        "call": state(r.group({
                            "context": r.component("Expression", {}, {}),
                            "arguments": r.optional(r.dictionary(r.component("Expression", {}, {}))),
                            "abort": r.boolean()
                        })),
                    })),
                    "optional": state(r.state_group({
                        "map": state(r.component("Expression", {}, {})),
                        "transform": state(r.group({
                            "if not set": r.component("Expression", {}, {}),
                            "if set": r.component("Expression", {}, {}),
                            "temp resulting node": r.optional(r.component_external("interface", "Type", {}, {})),
                        })),
                    })),
                    "state group": state(r.state_group({
                        "switch": state(r.group({
                            "temp resulting node": r.optional(r.component_external("interface", "Type", {}, {})),
                            "type": r.state_group({
                                "partial": state(r.group({
                                    "cases": r.dictionary(r.component("Expression", {}, {})),
                                    "default": r.component("Expression", {}, {}),
                                })),
                                "full": state(r.group({
                                    "cases": r.dictionary(r.component("Expression", {}, {})),
                                }))
                            }),
                        })),
                    })),
                }),
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
                    "arguments": r.optional(r.dictionary(r.component("Expression", {}, {}))),
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