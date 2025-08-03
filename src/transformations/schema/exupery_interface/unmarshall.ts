import * as pd from 'exupery-core-data'
import * as pdev from 'exupery-core-dev'
import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as _in from "../../../generated/interface/schemas/schema/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/interface/unresolved"

import * as sh from "exupery/dist/shorthands/interface"

import { pure } from "pareto-standard-operations"

const op = {
    'flatten list': pure.list.flatten,
    'flatten dictionary': pure.dictionary.flatten,
}


export const Schema = (
    $: _in.Schema,
    $p: {
        'imports': _in.Imports
        'constrained': boolean
    }
): _out.Module_Set.D<pd.Source_Location> => {
    return sh.m.module(
        {
            "out": sh.import_.sibling(
                $p.constrained ? "unresolved" : "unconstrained",
                [

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
            {},
            sh.t.component_imported(
                "out",
                key,
                $p.constrained ? {
                    "annotation": sh.t.null_()
                } : {},
                []
            ),
        ),
        )),
    )
}
