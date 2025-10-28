import * as pd from 'exupery-core-data'
import * as _edev from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as _in from "../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"

export const Schema = (
    $: _in.Schema,
    $p: {
        'imports': _in.Imports
    }
): _out.Module_Set.D<pd.Source_Location> => {
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
                "custom numbers": sh.t.group($.globals['number types'].map(($) => sh.t.function_({}, sh.t.string(), {}, _ea.cc($.precision, ($) => {
                    switch ($[0]) {
                        case 'approximation': return _ea.ss($, ($) => sh.t.float())
                        case 'exact': return _ea.ss($, ($) => sh.t.integer())
                        default: return _ea.au($[0])
                    }
                }))))
            })),
        }
    )
}
