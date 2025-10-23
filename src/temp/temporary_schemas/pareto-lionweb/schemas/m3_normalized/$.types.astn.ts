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
        // "M3": type(t.group({
        //     "name": prop(t.text_local(text('single line'))),
        //     "version": prop(t.text_local(text('single line'))),
        //     "dependencies": prop(t.component("Raw References")),
        //     "entities": prop(t.dictionary(t.group({
        //         "type": prop(t.state_group({
        //             "concept": tstate(t.group({
        //                 "abstract": prop(t.text_local(text('single line'))),
        //                 "partition": prop(t.text_local(text('single line'))),
        //                 "features": prop(t.component("Features")),
        //                 "extends": prop(t.component("Raw References")),
        //                 "implements": prop(t.component("Raw References")),
        //             })),
        //             "interface": tstate(t.group({
        //                 "extends": prop(t.component("Raw References")),
        //                 "features": prop(t.component("Features")),
        //             })),
        //             "enumeration": tstate(t.dictionary(t.nothing())),
        //         })),
        //     }))),
        // })),
        // "Features": type(t.dictionary(t.group({
        //     "optional": prop(t.text_local(text('single line'))),
        //     "multiple": prop(t.optional(t.text_local(text('single line')))),
        //     "property type": prop(t.optional(t.component("Raw References"))),
        //     "feature type": prop(t.optional(t.component("Raw References"))),
        // }))),
        // "Raw References": type(t.list(t.group({
        //     "resolveInfo": prop(t.text_local(text('single line'))),
        //     "reference": prop(t.text_local(text('single line'))),
        // }))),
    }
)