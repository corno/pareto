import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/source"

import { m, t, import_, type, sub } from "exupery/dist/shorthands/interface"

import * as t_migration_boilerplate_interface from "./exupery_interface_migrate_boilerplate"
import * as t_types from "./exupery_interface_types"


export const Signatures = (
): d_out.Module_Set.D => {
    return m.module(
        {
            "resolve": import_.external("pareto-core-internals", ["dist", "algorithm types", "refiner", "resolve"]),
            "resolved": import_.sibling("source", []),
            "unresolved": import_.sibling("target", []),
        },
        {},
    )
}