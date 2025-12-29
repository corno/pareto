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
        'constrained': boolean
    }
): _out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return sh.m.module(
        {
            "out": sh.import_.sibling(
                "data types",
                [
                    "target",
                ],
                {},
            ),
            "in": sh.import_.ancestor(
                2,
                "core",
                [
                    "astn source"
                ],
                {},
            ),
            "vd": sh.import_.sibling(
                "value deserializers",
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
                "Value",
                {},
                []
            ),
            {
                "value deserializers": sh.t.component_imported("vd", "Value Deserializers", {}, []),
            },
            sh.t.component_imported(
                "out",
                key,
                $p.constrained ? {
                    "annotation": sh.t.component_imported("in", "Range", {}, []),
                } : {},
                []
            ),
        ),
        )),
    )
}
