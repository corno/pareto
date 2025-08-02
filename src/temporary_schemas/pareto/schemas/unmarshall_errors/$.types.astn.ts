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


export const $: g_.Types<pd.Source_Location> = types(
    {
        "Errors": type(t.list(t.group({
            "range": t.component("Range"),
            "type": t.state_group({
                "error": t.state_group({
                    "invalid value type": t.group({
                        "expected": t.state_group({
                            "text": t.nothing(),
                            "group": t.nothing(),
                            "dictionary": t.nothing(),
                        }),
                    }),
                    "duplicate property": t.group({
                        "name": t.text_local(text('single line')),
                    }),
                    "missing property": t.group({
                        "name": t.text_local(text('single line')),
                    }),
                    "state": t.state_group({
                        "more than 2 elements": t.nothing(),
                        "missing state name": t.nothing(),
                        "state is not a string": t.nothing(),
                        "missing value": t.nothing(),
                        "unknown state": t.group({
                            "found": t.text_local(text('single line')),
                            "expected": t.dictionary(t.nothing()),
                        }),
                    }),
                }),
                "warning": t.state_group({
                    "expected apostrophed string": t.nothing(),
                    "expected quoted string": t.nothing(),
                    "expected backticked string": t.nothing(),
                    "expected undelimited string": t.nothing(),
                }),
            }),
        }))),
        
        "Location": type(t.group({
            "relative": t.component("Relative Location"),
            "absolute": t.number_local(n.natural()),
        })),

        "Relative Location": type(t.group({
            "line": t.number_local(n.natural()),
            "column": t.number_local(n.natural()), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

        "Range": type(t.group({
            "start": t.component("Location"),
            "end": t.component("Location"),
        })),

    }
)