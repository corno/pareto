import * as pd from 'exupery-core-data'
import * as pa from 'exupery-core-alg'

import { wrap_dictionary } from 'exupery-core-data/dist/shorthands/unresolved'

import * as _in from "../../generated/interface/schemas/module/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/interface/unresolved" //FIXME... should be 'unresolved'

import { m, t, type, import_ } from "exupery/dist/shorthands/interface"
import { Schemas } from "../schema/exupery_interface/main"
import * as t_pareto_interface_types from "../schema/exupery_interface/types"

export const Operations = ($: _in.Operations): _out.Type<pd.Source_Location> => {
    return t.group($.map(($) => pa.cc($, ($) => {
        switch ($[0]) {
            case 'operation': return pa.ss($, ($) => t.function_(
                $['type parameters'].map(($) => null),
                t_pareto_interface_types.Type_Node($.context),
                $.parameters.map(($) => pa.cc($, ($) => t_pareto_interface_types.Type_Node($))),
                t_pareto_interface_types.Type_Node($.result),
            ))
            case 'set': return pa.ss($, ($) => Operations($))
            default: return pa.au($[0])
        }
    })))
}

export const Module = ($: _in.Module): _out.Module_Set<pd.Source_Location> => {
    return wrap_dictionary({
        "core": m.set({
            "unresolved.ts": m.module(
                {},
                { "Source": null },
                {

                    "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "location": t.module_parameter("Source"),
                    })),

                    "Derived Reference": type({ "Type": null }, t.null_()),

                    "Dictionary": type({ "D": null }, t.group({
                        "location": t.module_parameter("Source"),
                        "dictionary": t.dictionary(t.group({
                            "location": t.module_parameter("Source"),
                            "entry": t.type_parameter("D"),
                        })),
                    })),

                    "Ordered Dictionary": type({ "D": null }, t.group({
                        "location": t.module_parameter("Source"),
                        "dictionary": t.dictionary(t.group({
                            "location": t.module_parameter("Source"),
                            "entry": t.type_parameter("D"),
                        })),
                    })),

                    "List": type({ "L": null }, t.group({
                        "location": t.module_parameter("Source"),
                        "list": t.array(t.group({
                            "location": t.module_parameter("Source"),
                            "element": t.type_parameter("L"),
                        })),
                    })),

                    "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "location": t.module_parameter("Source"),
                    })),

                    "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "up steps": t.integer('unsigned'),
                        "location": t.module_parameter("Source"),
                    })),

                    "State Group": type({ "SG": null }, t.group({
                        "location": t.module_parameter("Source"), //needed for state constraints
                        "state group": t.type_parameter("SG"),
                    })),
                },
            ),
            "resolved.ts": m.module(
                {},
                { "Source": null },
                {
                    "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "entry": t.computed_value(t.type_parameter("Dictionary Entry")),
                    })),

                    "Derived Reference": type({ "Type": null }, t.type_parameter("Type")),

                    "Dictionary": type({ "D": null }, t.dictionary(t.type_parameter("D"))),

                    "Ordered Dictionary": type({ "D": null }, t.group({
                        "dictionary": t.dictionary(t.type_parameter("D")),
                        "ordered list": t.array(t.key_value_pair(t.type_parameter("D"))),
                    })),

                    "List": type({ "L": null }, t.array(t.type_parameter("L"))),

                    "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "entry": t.type_parameter("Dictionary Entry"),
                    })),

                    "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.string(),
                        "up steps": t.integer('unsigned'),
                        "entry": t.type_parameter("Dictionary Entry"),
                    })),

                    "State Group": type({ "SG": null }, t.type_parameter("SG")),
                },
            ),
            "unconstrained.ts": m.module(
                {},
                { "Source": null },
                {
                    "Dictionary": type({ "D": null }, t.dictionary(t.type_parameter("D"))),

                    "List": type({ "L": null }, t.array(t.type_parameter("L"))),

                    "State Group": type({ "SG": null }, t.type_parameter("SG")),
                },
            ),
            // "unresolved.ts": m.module(
            //     {},
            //     { "Source": null },
            //     {

            //         "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.string()),

            //         "Derived Reference": type({ "Type": null }, t.null_()),

            //         "Dictionary": type({ "D": null }, t.dictionary(t.type_parameter("D"))),

            //         "Ordered Dictionary": type({ "D": null }, t.dictionary(t.type_parameter("D"))),

            //         "List": type({ "L": null }, t.array(t.type_parameter("L"))),

            //         "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.string()),

            //         "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.string()),

            //         "State Group": type({ "SG": null }, t.type_parameter("SG")),
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
        "schemas": Schemas($.schemas),
    })
}