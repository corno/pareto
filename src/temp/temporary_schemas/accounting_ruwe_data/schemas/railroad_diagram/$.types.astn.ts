import * as pd from 'exupery-core-data'

import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

import {
    n,
    types,
    text,
    t,
    tr,
    type,
} from "../../../../../shorthands/schema"

export const $: g_.Types<pd.Source_Location> = types(
    {

        "Grammar": type(t.group({
            "productions": t.component("Productions"),
            //"main rule": t.text_local(text('single line'))
        })),
        "Production": type(t.state_group({
            "choice": t.component("Choice"),
            "link": t.text_global("url"),
        })),
        "Choice": type(t.list(t.component("Composite Expression"))),
        "Composite Expression": type(t.state_group({
            "item list": t.list(t.component("Item")),
            "special": t.group({
                "preceding item": t.component("Item"),
                "character": t.state_group({
                    "minus": t.nothing(), //matches any string that matches the preceding item, but does not the succeeding item
                    "double star": t.nothing(), //shorthand: 'A ** B' becomes '(A ( B A )* )?'
                    "double plus": t.nothing(), //shorthand: 'A ++ B' becomes 'A ( B A )*'
                }),
                "succeeding item": t.component("Item"),
            }),
        })),
        "Item": type(t.group({
            "primary": t.component("Primary"),
            "occurence": t.state_group({
                "once": t.nothing(),
                "zero or more": t.nothing(),
                "one or more": t.nothing(),
                "optional": t.nothing(),
            }),
        })),
        "Primary": type(t.state_group({
            // "reference": t.reference("Productions", []), FIXME: make schema constrained first
            "literal": t.text_local(text('single line')),
            "character code": t.number_local(n.natural()),
            // "character class": t.group({
            //     "negated": t.boolean(),
            //     "type" : t.state_group({
            //         "char": t.nothing(),
            //     }),
            // }),
            "choice": t.component_cyclic("Choice"),

        })),
        "Productions": type(t.dictionary(t.component_cyclic("Production"))),


    }
)


