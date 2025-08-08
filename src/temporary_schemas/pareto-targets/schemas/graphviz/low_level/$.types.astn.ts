import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Graph": type(t.group({
            "strict": t.boolean(),
            "type": t.state_group({
                "graph": t.nothing(),
                "digraph": t.nothing(),
            }),
            "name": t.optional(t.component("ID")),
            "statements": t.component("Statement List"),
        })),
        "Statement List": type(t.list(t.state_group({
            "node": t.group({
                "node": t.component("Node ID"),
                "attribute list": t.component("Attribute List"),
            }),
            "edge": t.group({
                "left": t.state_group({
                    "node": t.component("Node ID"),
                    "subgraph": t.component("Subgraph"),
                }),
                //the operator (-- or ->) can be derived from the graph type
                "right": t.list(t.state_group({
                    "node": t.component("Node ID"),
                    "subgraph": t.component("Subgraph"),
                })),
                "attributes": t.component("Attribute List"),
            }),
            "attribute list": t.group({
                "type": t.state_group({
                    "graph": t.nothing(),
                    "node": t.nothing(),
                    "edge": t.nothing(),
                }),
                "attributes": t.component("Attribute List"),
            }),
            "attribute assignment": t.group({
                "name": t.component("ID"),
                "value": t.component("ID"),
            }),
            "subgraph": t.component("Subgraph"),
        }))),
        "Attribute List": type(t.list(t.group({
            "name": t.component("ID"),
            "value": t.component("ID"),
        }))),
        "Node ID": type(t.group({
            "id": t.component("ID"),
            "port": t.optional(t.group({
                "port": t.component("ID"),
                "compass point": t.optional(t.component("ID")),
            }))
        })),
        "ID": type(t.state_group({
            "id": t.text_global("id"),
            "string": t.text_global("Text Value"),
            "html": t.text_global("Text Value"),
            "number": t.number_local(n.integer()),
        })),
        "Subgraph": type(t.group({
            "subgraph": t.optional(t.optional(t.component("ID"))), // is it a subgraph? and if yes, does it have a name?
            "statements": t.component_cyclic("Statement List"),
        })),
    }
)


