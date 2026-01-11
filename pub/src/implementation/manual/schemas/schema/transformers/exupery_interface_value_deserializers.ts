import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'imports': d_in.Imports
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => sh.m.module(
    {
        "out": sh.import_.ancestor(
            2,
            "core",
            [
                "astn target"
            ],
            {},
        ),
        "in": sh.import_.sibling(
            "data types",
            [
                "source",
            ],
            {},
        )
    },
    {},
    {
        "Value Deserializers": sh.type({}, sh.t.group({
            "default number": sh.t.deprecated_function_({}, sh.t.text(), {}, sh.t.integer(), null),
            "boolean": sh.t.deprecated_function_({}, sh.t.text(), {}, sh.t.boolean(), null),
            "custom numbers": sh.t.group($.globals['number types'].__d_map(
                ($) => sh.t.deprecated_function_(
                    {},
                    sh.t.text(),
                    {},
                    _p.sg($.precision, ($) => {
                        switch ($[0]) {
                            case 'approximation': return _p.ss($, ($) => sh.t.number_approximation())
                            case 'exact': return _p.ss($, ($) => sh.t.integer())
                            default: return _p.au($[0])
                        }
                    }),
                    null,
                )
            ))
        })),
    }
)
