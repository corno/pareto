import * as _pdev from 'pareto-core-dev'
import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"


export const Schema = (
    $: _in.Schema,
    $p: {
        'imports': _in.Imports
    }
): _out.Module_Set.D<_pi.Deprecated_Source_Location> => {
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
        $.types.dictionary.map(($, key) => sh.type({}, sh.t.function_(
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
