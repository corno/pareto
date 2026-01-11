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
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return sh.m.module(

        {
            "in": sh.import_.sibling(
                "data types",
                [
                    "source",
                ],
                {},
            ),
            "vs": sh.import_.sibling(
                "value serializers",
                [
                ],
                {},
            ),
        },
        {},
        $.types.dictionary.__d_map(($, key) => sh.type({}, sh.t.function_(
            {},
            sh.t.component_imported(
                "in",
                key,
                {},
                []
            ),
            {
                "value serializers": sh.t.component_imported("vs", "Value Serializers", {}, []),
            },
            sh.t.string(),
        ))),
    )
}
