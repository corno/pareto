import * as pd from 'exupery-core-data'

import {
    types,
    n,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Text Type": type(t.group({
            "type": t.state_group({
                "multi line": t.nothing(),
                "single line": t.nothing(),
            }),
        })),

        "Number Type": type(t.group({
            /**
             * is the number an approximation or the exact value?
             * 'variable' is similar to floating point (in programming languages) or scientific notation
             * 'fixed' is similar to integers/positive integers
             */
            "precision": t.state_group({
                /**
                 * variable is similar to scientific notation or floating point (in programming languages)
                 */
                "approximation": t.group({
                    /**
                     * the total number of digits in the number
                     */
                    "significant digits": t.number_local(n.natural()),
                }),
                /**
                 * fixed is similar to integers/signed integers
                 */
                "exact": t.group({
                    /**
                     * the number of digits after the decimal point
                     * in the strict mathematical sense, a natural or an integer is a whole number,
                     * but in this context, there can be decimals. However, because the number of decimals (the 'scale') is fixed,
                     * it is trivial to convert these to a whole number; just multiply by 10^offset.
                     */
                    "decimal separator offset": t.optional(t.number_local(n.natural())),

                    /**
                     * can the number be negative? > 'integer'
                     * can the number be zero? > 'natural'
                     * else > 'positive natural'
                     */
                    "type": t.state_group({
                        "integer": t.nothing(),
                        "natural": t.nothing(),
                        "positive natural": t.nothing(),
                    }),
                }),
            })
        })),

        "Globals": type(t.group({
            "complexity": t.state_group({
                "constrained": t.nothing(),
                "unconstrained": t.nothing(),
            }),
            "text types": t.dictionary(t.component("Text Type")),
            "number types": t.dictionary(t.component("Number Type")),
        })),

        "Presence": type(t.state_group({ //FIXME: inline
            "optional": t.nothing(),
            "required": t.nothing(),
        })),

        "Type Parameters": type(t.dictionary(t.nothing())),

        "Type": type(t.group({
            "type parameters": t.component("Type Parameters"),
            "node": t.component_cyclic("Type Node")
        })),

        "Types": type(t.dictionary(t.component("Type"), 'ordered')),

        "Dictionary": type(t.group({
            "node": t.component_cyclic("Type Node"),
            "ordered": t.boolean(),
        })),

        "Signatures": type(t.dictionary(t.component_cyclic("Signature"), 'ordered')),

        "Resolvers": type(t.dictionary(t.group({
            "signature": t.reference_derived("Signatures", [tr.d()]),
            "type resolver": t.component_cyclic("Node Resolver"),
        }), 'ordered')),

        "Resolve Logic": type(t.group({ //FIXME: inline
            "signatures": t.group({ //this is a group because this data is in the file $.signatures.astn.ts
                "types": t.component_cyclic("Signatures")
            }),
            "resolvers": t.component_cyclic("Resolvers"),
        })),

        "Group": type(t.dictionary(t.component_cyclic("Type Node"))),

        "Type Node Reference": type(t.group({ //FIXME: inline
            "type location": t.component("Type Reference"),
            "tail": t.list(
                t.state_group({
                    "dictionary": t.nothing(),
                    "group": t.reference("Group", []),
                    "identifier value pair": t.nothing(),
                    "list": t.nothing(),
                    "optional": t.nothing(),
                    "state group": t.reference("Type Node", [tr.s("state group")])
                }),
            ),
            "resulting node": t.reference_derived("Type Node", []),
        })),

        "Type Reference": type(t.group({
            "location": t.state_group({
                "internal": t.reference("Types", []),
                "external": t.group({
                    "import": t.reference("Imports", []),
                    "type": t.reference("Types", []),
                }),
            }),
            "resulting node": t.reference_derived("Type Node", []),
        })),

        "Signature Parameters": type(t.group({ //FIME: inline
            "values": t.dictionary(t.group({
                "data type": t.component("Type Reference"),
                "presence": t.component("Presence"),
            })),
            "lookups": t.dictionary(t.group({
                "referent": t.component("Type Reference"),
                "dictionary": t.reference_derived("Dictionary", []),
                "type": t.state_group({
                    "cyclic": t.nothing(),
                    "acyclic": t.nothing(),
                    "stack": t.nothing(),
                }),
                "presence": t.component("Presence"),
            }))
        })),
        "Signature": type(t.group({
            "type": t.reference_derived("Type", []),
            "parameters": t.state_group({
                "local": t.component("Signature Parameters"),
                "same as": t.reference("Signatures", []),
            }),
            "resolved parameters": t.reference_derived("Signature Parameters", []),
        })),

        "Relative Value Selection": type(t.group({
            "path": t.list(
                t.state_group({
                    "component": t.nothing(),
                    "group": t.reference("Group", []),
                    "reference": t.group({
                        "definition": t.reference_derived("Type Node", [tr.s("reference")]),
                    }),
                }),
            ),
            "resulting node": t.reference_derived("Type Node", []),
        })),

        //FIXME: there has to be a guaranteed lookup selection and a possible lookup selection
        "Lookup Selection": type(t.group({
            "type": t.state_group({
                "dictionary": t.group({
                    "selection": t.component_cyclic("Guaranteed Value Selection"),
                    "selected dictionary": t.reference_derived("Dictionary", []),
                }),
                "parameter": t.reference("Signature Parameters", [tr.g("lookups")]),
                "not circular dependent siblings": t.reference_derived("Dictionary", []),
                "possibly circular dependent siblings": t.reference_derived("Dictionary", []),
            }),
            "resulting dictionary": t.reference_derived("Dictionary", []),
        })),

        "Constraint": type(t.group({ //FIXME: inline
            "selection": t.component("Relative Value Selection"),
            "type": t.state_group({ //maybe this is reusable
                "state": t.group({
                    "selected state group": t.reference_derived("Type Node", [tr.s("state group")]),
                    "state": t.reference("Type Node", [tr.s("state group")]),
                }),
                "optional value": t.group({
                    "selected optional value": t.reference_derived("Type Node", [tr.s("optional")]),
                }),
            }),
        })),

        "Option Constraints": type(t.dictionary(t.state_group({
            "state": t.group({
                "selection": t.component_cyclic("Guaranteed Value Selection"),
                "selected state group": t.reference_derived("Type Node", [tr.s("state group")]),
                "state": t.reference("Type Node", [tr.s("state group")]),
            }),
            "assert is set": t.component_cyclic("Possible Value Selection"),
        }))),

        "Property Constraints": type(t.dictionary(t.component_cyclic("Property Constraint"), 'ordered')),

        "Reference To Property Constraint": type(t.reference("Property Constraints", [])), //FIXME : inline

        "Property Constraint": type(t.group({
            "start": t.state_group({
                "property": t.nothing(),
                "sibling": t.component("Reference To Property Constraint"),
            }),
            "constraint": t.component("Constraint"),
        })),

        "Optional Value Initialization": type(t.state_group({
            "not set": t.nothing(),
            "set": t.component_cyclic("Guaranteed Value Selection"),
            "selection": t.component_cyclic("Possible Value Selection"),
        })),

        "Node Resolver Group": type(t.dictionary(t.group({
            "definition": t.reference_derived("Group", [tr.d()]),
            "resolver": t.component_cyclic("Node Resolver"),
        }), 'ordered')),

        "Node Resolver List Result": type(t.component("Type Reference")),

        "Benchmark": type(t.group({
            "selection": t.component_cyclic("Guaranteed Value Selection"),
            "resulting dictionary": t.reference_derived("Dictionary", []),
            "dense": t.boolean(),
        })),

        "Schemas": type(t.dictionary(t.state_group({
            "schema": t.component("Schema"),
            "set": t.component_cyclic("Schemas")
        }), 'ordered')),

        "Schema": type(t.group({
            "imports": t.component_cyclic("Imports"),
            "globals": t.component("Globals"),
            "types": t.component("Types"),
            "complexity": t.state_group({
                "constrained": t.component("Resolve Logic"),
                "unconstrained": t.nothing(),
            }),
        })),

        "Imports": type(t.dictionary(t.group({
            "schema set child": t.reference_stack("Schemas", []),
            "schema": t.reference_derived("Schemas", [tr.d(), tr.s("schema")]),
        }))),

        "Type Node": type(t.state_group({
            "boolean": t.nothing(),
            "component": t.state_group({
                "external": t.group({
                    "import": t.reference("Imports", []),
                    "type": t.reference("Types", []),
                }),
                "internal": t.reference("Types", []),
                "internal cyclic": t.reference("Types", [], 'cyclic'),
            }),
            "dictionary": t.component("Dictionary"),
            "group": t.component("Group"),
            "identifier value pair": t.component_cyclic("Type Node"),
            "list": t.group({
                "node": t.component_cyclic("Type Node"),
            }),
            "nothing": t.nothing(),
            "number": t.state_group({
                "global": t.reference("Globals", [tr.g("number types")]),
                "local": t.component("Number Type"),
            }),
            "optional": t.component_cyclic("Type Node"),
            "reference": t.group({
                "referent": t.component_cyclic("Type Node Reference"),
                "type": t.state_group({
                    "derived": t.nothing(),
                    "selected": t.group({
                        "dictionary": t.reference_derived("Dictionary", []),
                        "dependency": t.state_group({
                            "acyclic": t.nothing(),
                            "cyclic": t.nothing(),
                            "stack": t.nothing(),
                        })
                    }),
                }),
            }),
            "state group": t.dictionary(t.component_cyclic("Type Node")),
            "text": t.state_group({
                "global": t.reference("Globals", [tr.g("text types")]),
                "local": t.component("Text Type"),
            }),
            "type parameter": t.reference("Type Parameters", []),
        })),

        "Node Resolver": type(t.state_group({
            "boolean": t.nothing(),
            "component": t.group({
                "location": t.state_group({
                    "external": t.group({
                        "import": t.reference("Imports", []),
                        "type": t.reference("Signatures", []),
                    }),
                    "internal": t.reference("Signatures", []),
                }),
                "signature": t.reference_derived("Signatures", [tr.d()]),
                "arguments": t.optional(t.group({
                    "values": t.optional(t.dictionary(t.state_group({
                        "optional": t.component("Optional Value Initialization"),
                        "required": t.component_cyclic("Guaranteed Value Selection"),
                        "parameter": t.reference("Signature Parameters", [tr.g("values")]),
                    }))),
                    "lookups": t.optional(t.dictionary(t.state_group({
                        "empty stack": t.nothing(),
                        "not set": t.nothing(),
                        "selection": t.component("Lookup Selection"),
                        "stack": t.group({
                            "stack": t.component("Lookup Selection"),
                            "element": t.component("Lookup Selection"),
                        }),
                    }))),
                })),
                "constraints": t.component("Property Constraints"),
            }),
            "dictionary": t.group({
                "definition": t.reference_derived("Dictionary", []),
                "resolver": t.component_cyclic("Node Resolver"),
                "benchmark": t.optional(t.component("Benchmark"))
            }),
            "group": t.component("Node Resolver Group"),
            "identifier value pair": t.component_cyclic("Node Resolver"),
            "list": t.group({
                "definition": t.reference_derived("Type Node", [tr.s("list")]),
                "resolver": t.component_cyclic("Node Resolver"),
                "result": t.optional(t.component("Node Resolver List Result")),
            }),
            "nothing": t.nothing(),
            "number": t.nothing(),
            "optional": t.group({
                "constraints": t.component("Option Constraints"),
                "resolver": t.component_cyclic("Node Resolver"),
            }),
            "reference": t.group({
                "definition": t.reference_derived("Type Node", [tr.s("reference")]),
                "type": t.state_group({
                    "derived": t.group({
                        "value": t.component_cyclic("Guaranteed Value Selection"),
                    }),
                    "selected": t.group({
                        "definition": t.reference_derived("Type Node", [tr.s("reference"), tr.g("type"), tr.s("selected")]),
                        "lookup": t.component("Lookup Selection"),
                        "constraints": t.component("Property Constraints"),
                    }),
                }),
            }),
            "state group": t.group({
                "definition": t.reference_derived("Type Node", [tr.s("state group")]),
                "states": t.dictionary(t.group({
                    "constraints": t.component("Option Constraints"),
                    "resolver": t.component_cyclic("Node Resolver"),
                })),
            }),
            "text": t.nothing(),
            "type parameter": t.nothing(),
        })),

        "Guaranteed Value Selection": type(t.group({
            "start": t.state_group({
                //stack
                "sibling": t.reference("Node Resolver Group", []),
                "parent sibling": t.reference("Node Resolver Group", []),
                "option constraint": t.reference("Option Constraints", []),
                "list cursor": t.nothing(),
                "linked entry": t.nothing(),

                //siblings
                "constraint": t.state_group({
                    "component": t.group({
                        "property": t.reference("Node Resolver Group", []),
                        "constraint": t.reference("Property Constraints", []),
                    }),
                    "reference": t.group({
                        "property": t.reference("Node Resolver Group", []),
                        "constraint": t.reference("Property Constraints", []),
                    }),

                }),
                "parameter": t.reference("Signature Parameters", [tr.g("values")]), //FIXME: validate that presence is 'required'
                "result": t.state_group({
                    "list": t.group({
                        "property": t.reference("Node Resolver Group", []),
                        "list result": t.reference_derived("Node Resolver", [tr.s("list"), tr.g("result"), tr.o()]),
                    }),
                    "state group": t.group({
                        "property": t.reference("Node Resolver Group", []),
                        "state group": t.reference_derived("Node Resolver", [tr.s("state group")]),
                        "result": t.component("Type Reference"),
                    }),
                    "optional value": t.group({
                        "property": t.reference("Node Resolver Group", []),
                        "optional value": t.reference_derived("Node Resolver", [tr.s("optional")]),
                        "result": t.component("Type Reference"),
                    }),
                })
            }),
            "tail": t.component("Relative Value Selection"),
            "resulting node": t.reference_derived("Type Node", []),
        })),

        "Possible Value Selection": type(t.state_group({
            "parameter": t.reference("Signature Parameters", [tr.g("values")]), //FIXME: validate that presence is 'optional'
            "result": t.state_group({
                "state group": t.group({
                    "property": t.reference("Node Resolver Group", []),
                    "state group": t.reference_derived("Node Resolver", [tr.s("state group")]),
                    "result": t.component("Type Reference"),
                }),
                "optional value": t.group({
                    "property": t.reference("Node Resolver Group", []),
                    "optional value": t.reference_derived("Node Resolver", [tr.s("optional")]),
                    "result": t.component("Type Reference"),
                }),
            })
        })),

    }
)