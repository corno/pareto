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

export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Identifier": type(t.text_global("Pseudo Reference")),

        "Path": type(t.group({
            "up steps": t.list(t.group({})),
            "context": t.group({
                "sibling": t.group({}),
                "state constraint": t.group({
                    "name": t.component("Identifier"),
                }),
            }),
            "selection steps": t.list(t.group({
                "group": t.group({
                    "name": t.component("Identifier"),
                }),
                "state constraint": t.group({
                    "name": t.component("Identifier"),
                }),
                "reference": t.group({
                    "name": t.component("Identifier"),
                }),
            }))
        })),

        "Node": type(t.group({
            "properties": t.dictionary(t.group({
                "type": t.state_group({
                    "collection": t.group({
                        "node": t.component_cyclic("Node"),
                        "key": t.component("Identifier"),
                    }),
                    "group": t.group({
                        "node": t.component_cyclic("Node"),
                    }),
                    "text": t.group({
                        "constraint": t.optional(t.group({
                            "path": t.component("Path"),
                            "dictionary": t.component("Identifier"),
                        })),
                    }),
                    "state group": t.group({
                        "states": t.dictionary(t.group({
                            "constraints": t.dictionary(t.group({
                                "path": t.component("Path")
                            })),
                            "node": t.component_cyclic("Node")
                        }))
                    }),
                }),
            })),
        })),
        
        "Root": type(t.group({
            "numerical types": t.dictionary(t.group({

            })),
            "root": t.component("Node"),
        }))
    }
)


