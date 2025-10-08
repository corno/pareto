import * as pd from 'exupery-core-data'

import {
    types,
    n,
    t,
    tr,
    type,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Schema Tree": type(t.state_group({
            "set": t.component("Schemas"),
            "schema": t.component("Schema"),
        })),

        "Schemas": type(t.dictionary(t.component_cyclic("Schema Tree"), 'ordered')),

        "Schema": type(t.group({
            "imports": t.component_cyclic("Imports"),
            "globals": t.component("Globals"),
            "types": t.component("Types"),
        })),

        "Imports": type(t.dictionary(t.group({
            "schema set child": t.reference_stack("Schemas", []),
            "schema": t.reference_derived("Schema", []),
        }))),

        "Globals": type(t.group({
            "text types": t.dictionary(t.component("Text Type")),
            // "number types": t.dictionary(t.component("Number Type")),
        })),

        "Types": type(t.dictionary(t.component("Type"), 'ordered')),

        "Type": type(t.group({
            // "type parameters": t.component("Type Parameters"),
            "node": t.component_cyclic("Type Node")
        })),

        "Type Node": type(t.state_group({
            //"boolean": t.nothing(),
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
            "list": t.group({
                "node": t.component_cyclic("Type Node"),
            }),
            "nothing": t.nothing(),
            // "number": t.state_group({
            //     "global": t.reference("Globals", [tr.g("number types")]),
            //     "local": t.component("Number Type"),
            // }),
            "optional": t.component_cyclic("Type Node"),
            "reference": t.group({
                "type": t.state_group({
                    "derived": t.nothing(),
                    "selected": t.nothing(),
                }),
            }),
            "state group": t.dictionary(t.component_cyclic("Type Node")),
            "text": t.state_group({
                "global": t.reference("Globals", [tr.g("text types")]),
                "local": t.component("Text Type"),
            }),
        })),

        "Text Type": type(t.group({
            "type": t.state_group({
                "multi line": t.nothing(),
                "single line": t.nothing(),
            }),
        })),

        "Group": type(t.dictionary(t.component_cyclic("Type Node"))),

        "Dictionary": type(t.group({
            "node": t.component_cyclic("Type Node"),
            "ordered": t.boolean(),
        })),

    }
)