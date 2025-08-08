import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,

} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

/**
 * dit schema gebruik ik voor het parsen van de oude boekhoudingen.
 * Het enige verschil met de normale alan_light is het ontbreken van de key van de collection
 * In deze versie werd de data nog als objecten opgeslagen ipv arrays
 */
export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Path": type(t.group({
            "up steps": t.list(t.group({})),
            "context": t.group({
                "sibling": t.group({}),
                "state constraint": t.group({
                    "name": t.text_global("Pseudo Reference"),
                }),
            }),
            "selection steps": t.list(t.group({
                // "dictionary": t.group({
                //     "name": t.basic_local(b.text()),
                // }),
                "group": t.group({
                    "name": t.text_global("Pseudo Reference"),
                }),
                "state constraint": t.group({
                    "name": t.text_global("Pseudo Reference"),
                }),
                "reference": t.group({
                    "name": t.text_global("Pseudo Reference"),
                }),
            }))
        })),
        "Node": type(t.group({
            "properties": t.dictionary(t.group({
                "type": t.state_group({
                    "collection": t.group({
                        "node": t.component_cyclic("Node"),
                    }),
                    "file": t.nothing(),
                    "group": t.group({
                        "node": t.component_cyclic("Node"),
                    }),
                    "natural": t.text_local(text('single line')), //why is this not a number?
                    "text": t.nothing(),
                    "reference": t.nothing(),
                    "state group": t.group({
                        "states": t.dictionary(t.group({
                            // "constraints": t.dictionary(t.group({
                            //     "path": t.component("Path")
                            // })),
                            "node": t.component_cyclic("Node")
                        }))
                    })
                })
            }))
        })),
        "Root": type(t.group({
            "numerical types": t.dictionary(t.group({

            })),
            "root": t.component("Node"),
        }))
    }
)


