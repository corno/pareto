import * as pd from 'exupery-core-data'
import * as pdev from 'exupery-core-dev'
import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as _in from "../../../generated/interface/schemas/schema/resolved"
import * as _out from "exupery/dist/generated/interface/schemas/interface/unresolved"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import { pure } from "pareto-standard-operations"

const op = {
    'flatten list': pure.list.flatten,
    'flatten dictionary': pure.dictionary.flatten,
}


export const Types = (
    $: _in.Types,
    $p: {
        'imports': _in.Imports
        'constrained': boolean
    }
): _out.Module_Set.D<pd.Source_Location> => {
    const context = $
    return m.module(

        {
            "out": import_.sibling(
                $p.constrained ? "unresolved" : "unconstrained",
                [

                ],
                {},
            ),
            "in": import_.sibling(
                $p.constrained ? "resolved" : "unconstrained",
                [

                ],
                {},
            )
        },
        {},
        context.dictionary.map(($, key) => ({
            'parameters': {
                'location': pd.get_location_info(1),
                'dictionary': pa.dictionary_literal({}),
            },
            'type': t.function_(
                {},
                t.component_imported(
                    "in",
                    key,
                    {},
                    []
                ),
                {},
                t.component_imported(
                    "out",
                    key,
                    $p.constrained ? {
                        "annotation": t.null_()
                    } : {},
                    []
                ),
            ),
        })),
    )
}
