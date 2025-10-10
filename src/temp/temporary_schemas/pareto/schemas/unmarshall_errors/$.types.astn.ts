import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"


export const $: g_.Types<pd.Source_Location> = types(
    {
        "Errors": type(t.list(t.group({
            "range": prop(t.component("Range")),
            "type": prop(t.state_group({
                "error": t.state_group({
                    "invalid value type": t.group({
                        "expected": prop(t.list(t.state_group({
                            "text": t.nothing(),
                            "verbose group": t.nothing(),
                            "concise group": t.nothing(),
                            "dictionary": t.nothing(),
                            "not set": t.nothing(),
                            "set": t.nothing(),
                            "list": t.nothing(),
                            "state": t.nothing(),
                        }))),
                    }),
                    "duplicate property": t.group({
                        "name": prop(t.text_local(text('single line'))),
                    }),
                    "missing property": t.group({
                        "name": prop(t.text_local(text('single line'))),
                    }),
                    "superfluous property": t.group({
                        "name": prop(t.text_local(text('single line'))),
                    }),
                    "state": t.state_group({
                        "more than 2 elements": t.nothing(),
                        "missing state name": t.nothing(),
                        "state is not a string": t.nothing(),
                        "missing value": t.nothing(),
                        "unknown state": t.group({
                            "found": prop(t.text_local(text('single line'))),
                            "expected": prop(t.dictionary(t.nothing())),
                        }),
                        "missing data marker": t.nothing(),
                    }),
                }),
                "warning": t.state_group({
                    "expected apostrophed string": t.nothing(),
                    "expected quoted string": t.nothing(),
                    "expected backticked string": t.nothing(),
                    "expected undelimited string": t.nothing(),
                }),
            })),
        }))),
        
        "Location": type(t.group({
            "relative": prop(t.component("Relative Location")),
            "absolute": prop(t.number_local(n.natural())),
        })),

        "Relative Location": type(t.group({
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

        // "Document Range": type(t.group({
        //     "document": t.text_local(text('single line')),
        //     "range": t.component("Range"),
        // })),

        "Range": type(t.group({
            "start": prop(t.component("Location")),
            "end": prop(t.component("Location")),
        })),

    }
)