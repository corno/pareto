import * as _pdev from 'pareto-core-dev'
import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'imports': d_in.Imports
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return sh.m.module(

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
                "default number": sh.t.function_({}, sh.t.string(), {}, sh.t.integer()),
                "boolean": sh.t.function_({}, sh.t.string(), {}, sh.t.boolean()),
                "custom numbers": sh.t.group($.globals['number types'].map(($) => sh.t.function_({}, sh.t.string(), {}, _pt.cc($.precision, ($) => {
                    switch ($[0]) {
                        case 'approximation': return _pt.ss($, ($) => sh.t.float())
                        case 'exact': return _pt.ss($, ($) => sh.t.integer())
                        default: return _pt.au($[0])
                    }
                }))))
            })),
        }
    )
}
