import * as pd from 'exupery-core-data'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../generated/interface/schemas/schema/data_types/target"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "M3": type(t.group({
            "id": prop(t.component("ID")),
            "version": prop(t.text_local(text('single line'))),
            "dependencies": prop(t.component("Raw References")),
            "entities": prop(t.dictionary(t.group({
                "id": prop(t.component("ID")),
                "type": prop(t.state_group({
                    "classifier": tstate(t.group({
                        "type": prop(t.state_group({
                            "concept": tstate(t.group({
                                "abstract": prop(t.text_local(text('single line'))),
                                "partition": prop(t.text_local(text('single line'))),
                                "extends": prop(t.component("Raw References")),
                                "implements": prop(t.component("Raw References")),
                            })),
                            "interface": tstate(t.group({
                                "extends": prop(t.component("Raw References")),
                            })),
                            //annotation needs to be implemented
                        })),
                        "features": prop(t.dictionary(t.group({
                            "id": prop(t.component("ID")),
                            "optional": prop(t.text_local(text('single line'))),
                            "type": prop(t.state_group({
                                "property": tstate(t.group({
                                    "type": prop(t.component("Raw References")),
                                })),
                                "link": tstate(t.group({
                                    "multiple": prop(t.text_local(text('single line'))),
                                    "type": prop(t.component("Raw References")),
                                })),
                            })),
                        }))),
                    })),
                    "datatype": tstate(t.state_group({
                        "enumeration": tstate(t.dictionary(t.component("ID"))),
                        // structured data type and primitive type need to be implemented
                    })),
                })),
            }))),
        })),
        "ID": type(t.group({
            "key": prop(t.text_local(text('single line'))),
            "name": prop(t.text_local(text('single line'))),
        })),
        "Raw References": type(t.list(t.group({
            "resolveInfo": prop(t.text_local(text('single line'))),
            "reference": prop(t.optional(t.text_local(text('single line')))),
        }))),
    }
)