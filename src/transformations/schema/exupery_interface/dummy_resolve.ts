import * as pd from 'exupery-core-data'
import * as pdev from 'exupery-core-dev'
import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as _in from "../../../generated/interface/schemas/schema/data_types/source"
import * as _out from "exupery/dist/generated/interface/schemas/interface/data_types/target"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import * as _migration_boilerplate_interface from "./migrate_boilerplate"
import * as _types from "./types"

import { pure } from "pareto-standard-operations"

const op = {
    'append element': pure.list['append element'],
}

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