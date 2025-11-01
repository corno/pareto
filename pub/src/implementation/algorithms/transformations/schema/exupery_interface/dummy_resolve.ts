import * as pd from 'exupery-core-data'
import * as _edev from 'exupery-core-dev'
import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import * as _migration_boilerplate_interface from "./migrate_boilerplate"
import * as _types from "./types"
import { Signature } from "../../../../../interface/algorithms/transformations/schema/exupery_interface/dummy_resolve"


export const Signatures = (
): _out.Module_Set.D<pd.Source_Location> => {
    return m.module(
        {
            "resolve": import_.ancestor(3, "core", ["resolve"], {}),
            "resolved": import_.sibling("source", [], {}),
            "unresolved": import_.sibling("target", [], {}),
        },
        {},
        {},
    )
}