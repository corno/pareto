import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _psh from 'pareto-core-internals/dist/algorithm_types/transformer/deprecated_shorthands_for_unresolved'


import * as d_in from "../../../../../interface/generated/pareto/schemas/module/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, t, type, import_ } from "exupery/dist/shorthands/interface"
import * as t_exupery_interface_main from "../../../../manual/schemas/schema/transformers/exupery_interface_main"
import * as t_exupery_interface_types from "../../../../manual/schemas/schema/transformers/exupery_interface_types"


export const Operations = ($: d_in.Operations): d_out.Type<_pi.Deprecated_Source_Location> => {
    return t.group($.__d_map(($) => _p.sg($, ($) => {
        switch ($[0]) {
            case 'operation': return _p.ss($, ($) => t.deprecated_function_(
                $['type parameters'].__d_map(($) => null),
                t_exupery_interface_types.Type_Node($.context),
                $.parameters.__d_map(($) => _p.sg($, ($) => t_exupery_interface_types.Type_Node($))),
                t_exupery_interface_types.Type_Node($.result),
                null,
            ))
            case 'set': return _p.ss($, ($) => Operations($))
            default: return _p.au($[0])
        }
    })))
}

export const Module = ($: d_in.Module): d_out.Module_Set<_pi.Deprecated_Source_Location> => {
    return _psh.wrap_dictionary({
        "core": m.set({
            "unresolved.ts": m.module(
                {},
                { "Source": null },
                {

                    "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.group({
                        "key": t.text(),
                        "location": t.deprecated_parameter_module("Source"),
                    })),

                    "Derived Reference": type({ "Type": null }, t.nothing()),

                    "Dictionary": type({ "D": null }, t.group({
                        "location": t.deprecated_parameter_module("Source"),
                        "dictionary": t.dictionary(t.group({
                            "location": t.deprecated_parameter_module("Source"),
                            "entry": t.deprecated_parameter_type("D"),
                        })),
                    })),

                    "Ordered Dictionary": type({ "D": null }, t.group({
                        "location": t.deprecated_parameter_module("Source"),
                        "dictionary": t.dictionary(t.group({
                            "location": t.deprecated_parameter_module("Source"),
                            "entry": t.deprecated_parameter_type("D"),
                        })),
                    })),

                    "List": type({ "L": null }, t.group({
                        "location": t.deprecated_parameter_module("Source"),
                        "list": t.list(t.group({
                            "location": t.deprecated_parameter_module("Source"),
                            "element": t.deprecated_parameter_type("L"),
                        })),
                    })),

                    "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.text(),
                        "location": t.deprecated_parameter_module("Source"),
                    })),

                    "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.text(),
                        "location": t.deprecated_parameter_module("Source"),
                    })),

                    "State Group": type({ "SG": null }, t.group({
                        "location": t.deprecated_parameter_module("Source"), //needed for state constraints
                        "state group": t.deprecated_parameter_type("SG"),
                    })),
                },
            ),
            "resolved.ts": m.module(
                {},
                { "Source": null },
                {
                    "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.group({
                        "key": t.text(),
                        "entry": t.computed_value(t.deprecated_parameter_type("Dictionary Entry")),
                    })),

                    "Derived Reference": type({ "Type": null }, t.deprecated_parameter_type("Type")),

                    "Dictionary": type({ "D": null }, t.dictionary(t.deprecated_parameter_type("D"))),

                    "Ordered Dictionary": type({ "D": null }, t.group({
                        "dictionary": t.dictionary(t.deprecated_parameter_type("D")),
                        "ordered list": t.list(t.group({
                            "key": t.text(),
                            "value": t.deprecated_parameter_type("D")
                        })),
                    })),

                    "List": type({ "L": null }, t.list(t.deprecated_parameter_type("L"))),

                    "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.text(),
                        "entry": t.deprecated_parameter_type("Dictionary Entry"),
                    })),

                    "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.group({
                        "key": t.text(),
                        "up steps": t.natural(),
                        "entry": t.deprecated_parameter_type("Dictionary Entry"),
                    })),

                    "State Group": type({ "SG": null }, t.deprecated_parameter_type("SG")),
                },
            ),
            "unconstrained.ts": m.module(
                {},
                { "Source": null },
                {
                    "Dictionary": type({ "D": null }, t.dictionary(t.deprecated_parameter_type("D"))),

                    "List": type({ "L": null }, t.list(t.deprecated_parameter_type("L"))),

                    "State Group": type({ "SG": null }, t.deprecated_parameter_type("SG")),
                },
            ),
            // "unresolved.ts": m.module(
            //     {},
            //     { "Source": null },
            //     {

            //         "Reference To Circular Dependent Sibling": type({ "Dictionary Entry": null }, t.text()),

            //         "Derived Reference": type({ "Type": null }, t.null_()),

            //         "Dictionary": type({ "D": null }, t.dictionary(t.deprecated_parameter_type("D"))),

            //         "Ordered Dictionary": type({ "D": null }, t.dictionary(t.deprecated_parameter_type("D"))),

            //         "List": type({ "L": null }, t.list(t.deprecated_parameter_type("L"))),

            //         "Reference To Normal Dictionary Entry": type({ "Dictionary Entry": null }, t.text()),

            //         "Reference To Stacked Dictionary Entry": type({ "Dictionary Entry": null }, t.text()),

            //         "State Group": type({ "SG": null }, t.deprecated_parameter_type("SG")),
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
        //                 "Source": pa.sg($, ($) => t.null_()),
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