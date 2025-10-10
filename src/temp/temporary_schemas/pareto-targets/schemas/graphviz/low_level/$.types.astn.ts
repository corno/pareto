import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Graph": type(t.group({
            "strict": prop(t.boolean()),
            "type": prop(t.state_group({
                "graph": t.nothing(),
                "digraph": t.nothing(),
            })),
            "name": prop(t.optional(t.component("ID"))),
            "statements": prop(t.component("Statement List")),
        })),
        "Statement List": type(t.list(t.state_group({
            "node": t.group({
                "node": prop(t.component("Node ID")),
                "attribute list": prop(t.component("Attribute List")),
            }),
            "edge": t.group({
                "left": prop(t.state_group({
                    "node": t.component("Node ID"),
                    "subgraph": t.component("Subgraph"),
                })),
                //the operator (-- or ->) can be derived from the graph type
                "right": prop(t.list(t.state_group({
                    "node": t.component("Node ID"),
                    "subgraph": t.component("Subgraph"),
                }))),
                "attributes": prop(t.component("Attribute List")),
            }),
            "attribute list": t.group({
                "type": prop(t.state_group({
                    "graph": t.nothing(),
                    "node": t.nothing(),
                    "edge": t.nothing(),
                })),
                "attributes": prop(t.component("Attribute List")),
            }),
            "attribute assignment": t.group({
                "name": prop(t.component("ID")),
                "value": prop(t.component("ID")),
            }),
            "subgraph": t.component("Subgraph"),
        }))),
        "Attribute List": type(t.list(t.group({
            "name": prop(t.component("ID")),
            "value": prop(t.component("ID")),
        }))),
        "Node ID": type(t.group({
            "id": prop(t.component("ID")),
            "port": prop(t.optional(t.group({
                "port": prop(t.component("ID")),
                "compass point": prop(t.optional(t.component("ID"))),
            })))
        })),
        "ID": type(t.state_group({
            "id": t.text_global("id"),
            "string": t.text_global("Text Value"),
            "html": t.text_global("Text Value"),
            "number": t.number_local(n.integer()),
        })),
        "Subgraph": type(t.group({
            "subgraph": prop(t.optional(t.optional(t.component("ID")))), // is it a subgraph? and if yes, does it have a name?
            "statements": prop(t.component_cyclic("Statement List")),
        })),
    }
)


