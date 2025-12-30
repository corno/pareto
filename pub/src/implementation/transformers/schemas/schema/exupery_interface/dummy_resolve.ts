import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import * as _migration_boilerplate_interface from "./migrate_boilerplate"
import * as _types from "./types"


export const Signatures = (
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
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