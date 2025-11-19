import * as _edata from 'exupery-core-data'
import * as _edev from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import * as sh from "exupery/dist/shorthands/interface"
import { Signature } from "../../../../../interface/algorithms/transformations/schema/exupery_interface/marshall"


export const Schema = (
    $: _in.Schema,
    $p: {
        'imports': _in.Imports
    }
): _out.Module_Set.D<_edata.Source_Location> => {
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
