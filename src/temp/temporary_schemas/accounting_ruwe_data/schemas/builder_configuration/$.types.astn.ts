import * as _edata from 'exupery-core-data'

import {
    types,
    n,
    t,
    tr,
    type,

} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<_edata.Source_Location>  = types(
    {
        "Configuration": type(t.group({
            //the tasks that can be executed
            "tasks": t.dictionary(t.component("Configuration__Task")),
            //the root node of the tree
            "tree": t.component("Directory"),
            //shorthands for the used programs
            "shorthands": t.dictionary(t.group({
                //         'program': $.Dictionary_Entry_Reference<Configuration__Used_Program<Source>, Source>
                //         'common parameters': pt.Array<Action__Parameter<Source>>

                //         'change working directory to context': boolean
                //         'silent': boolean
            })),
            //programs that need to be installed on the host system
            "used programs": t.dictionary(t.nothing()),
        })),
        "Directory": type(t.group({
            "children": t.dictionary(t.component("Node")),
        })),

        "Node": type(t.group({
            "optional": t.boolean(),
            "type": t.state_group({
                "automatic": t.component("Target"),
                "directory": t.group({
                    "dependencies": t.dictionary(t.group({
                        "start": t.component("Dependency Start"),
                        "tail": t.component("Node Selection Tail"),
                    })),
                }),
                "manual": t.group({
                    "boilerplate": t.component("Target")
                })
            })
        })),

        "Dependency Start": type(t.state_group({
            "ancestor": t.reference("Directory Dependency", []),
            "sibling": t.reference("Directory", [tr.g("children")]),
        })),

        "Directory Dependency": type(t.group({
            "start": t.component("Dependency Start"),
            "tail": t.component("Node Selection Tail"),
        }))

    }
)