import * as pd from 'exupery-core-data'

import { schemas } from "../../shorthands/schema"
import * as g_ from "../../generated/interface/schemas/schema/unresolved"

import { $ as x_alan_light } from "./schemas/alan_light/$.module.astn"
import { $ as x_pareto_documentation } from "./schemas/pareto_documentation/$.module.astn"
import { $ as x_grapviz_low_level } from "./schemas/graphviz/low_level/$.module.astn"
import { $ as x_grapviz_high_level } from "./schemas/graphviz/high_level/$.module.astn"
import { $ as x_lionweb } from "./schemas/lionweb/$.module.astn"

export const $: g_.Schemas<pd.Source_Location> = schemas({
    "alan light": x_alan_light,
    "pareto documentation": x_pareto_documentation,
    "graphviz low level": x_grapviz_low_level,
    "graphviz high level": x_grapviz_high_level,
    "lionweb": x_lionweb,
})