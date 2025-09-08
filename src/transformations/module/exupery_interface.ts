import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import { wrap_dictionary } from 'exupery-core-data/dist/shorthands/unresolved'

import * as _in from "../../generated/interface/schemas/module/data_types/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/interface/data_types/unresolved"

import { m, t, type, import_ } from "exupery/dist/shorthands/interface"
import * as t_exupery_interface_main from "../schema/exupery_interface/main"
import * as t_exupery_interface_types from "../schema/exupery_interface/types"

export const Operations = ($: _in.Operations): _out.Type<pd.Source_Location> => {
    return t.group($.map(($) => pa.cc($, ($) => {
        switch ($[0]) {
            case 'operation': return pa.ss($, ($) => t.function_(
                $['type parameters'].map(($) => null),
                t_exupery_interface_types.Type_Node($.context),
                $.parameters.map(($) => pa.cc($, ($) => t_exupery_interface_types.Type_Node($))),
                t_exupery_interface_types.Type_Node($.result),
            ))
            case 'set': return pa.ss($, ($) => Operations($))
            default: return pa.au($[0])
        }
    })))
}

export const Module = ($: _in.Module): _out.Module_Set<pd.Source_Location> => {
    return wrap_dictionary(0, {
        "core": m.set({
            "unresolved.ts": m.module(
                {},
                { "Source": null },
                {

                    "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "location": t.parameter_module("Source"),
                    })),

                    "Derived Reference": type({ "Type": null }, t.null_()),

                    "Dictionary": type({ "D": null }, t.group({
                        "location": t.parameter_module("Source"),
                        "dictionary": t.dictionary(t.group({
                            "location": t.parameter_module("Source"),
                            "entry": t.parameter_type("D"),
                        })),
                    })),

                    "Ordered Dictionary": type({ "D": null }, t.group({
                        "location": t.parameter_module("Source"),
                        "dictionary": t.dictionary(t.group({
                            "location": t.parameter_module("Source"),
                            "entry": t.parameter_type("D"),
                        })),
                    })),

                    "List": type({ "L": null }, t.group({
                        "location": t.parameter_module("Source"),
                        "list": t.array(t.group({
                            "location": t.parameter_module("Source"),
                            "element": t.parameter_type("L"),
                        })),
                    })),

                    "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "location": t.parameter_module("Source"),
                    })),

                    "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "location": t.parameter_module("Source"),
                    })),

                    "State Group": type({ "SG": null }, t.group({
                        "location": t.parameter_module("Source"), //needed for state constraints
                        "state group": t.parameter_type("SG"),
                    })),
                },
            ),
            "resolved.ts": m.module(
                {},
                { "Source": null },
                {
                    "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "entry": t.computed_value(t.parameter_type("Dictionary Entry")),
                    })),

                    "Derived Reference": type({ "Type": null }, t.parameter_type("Type")),

                    "Dictionary": type({ "D": null }, t.dictionary(t.parameter_type("D"))),

                    "Ordered Dictionary": type({ "D": null }, t.group({
                        "dictionary": t.dictionary(t.parameter_type("D")),
                        "ordered list": t.array(t.key_value_pair(t.parameter_type("D"))),
                    })),

                    "List": type({ "L": null }, t.array(t.parameter_type("L"))),

                    "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "entry": t.parameter_type("Dictionary Entry"),
                    })),

                    "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "up steps": t.integer('unsigned'),
                        "entry": t.parameter_type("Dictionary Entry"),
                    })),

                    "State Group": type({ "SG": null }, t.parameter_type("SG")),
                },
            ),
            "unconstrained.ts": m.module(
                {},
                { "Source": null },
                {
                    "Dictionary": type({ "D": null }, t.dictionary(t.parameter_type("D"))),

                    "List": type({ "L": null }, t.array(t.parameter_type("L"))),

                    "State Group": type({ "SG": null }, t.parameter_type("SG")),
                },
            ),
            // "unresolved.ts": m.module(
            //     {},
            //     { "Source": null },
            //     {

            //         "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.string()),

            //         "Derived Reference": type({ "Type": null }, t.null_()),

            //         "Dictionary": type({ "D": null }, t.dictionary(t.parameter_type("D"))),

            //         "Ordered Dictionary": type({ "D": null }, t.dictionary(t.parameter_type("D"))),

            //         "List": type({ "L": null }, t.array(t.parameter_type("L"))),

            //         "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.string()),

            //         "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.string()),

            //         "State Group": type({ "SG": null }, t.parameter_type("SG")),
            //     },
            // ),
        }),
        // "operations": m.module(
        //     {
        //         "core": i.sibling(
        //             "core",
        //             [
        //                 "resolved"
        //             ],
        //             {
        //                 "Source": pa.cc($, ($) => t.null_()),
        //             },
        //         )
        //     },
        //     {},
        //     {
        //         "operations": type({}, Operations($.operations))
        //     },
        // ),
        "schemas": t_exupery_interface_main.Schema_Tree($['schema tree']),
    })
}