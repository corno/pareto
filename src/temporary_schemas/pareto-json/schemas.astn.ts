import * as pd from 'exupery-core-data'

import { schemas } from "../../shorthands/schema"
import * as g_ from "../../generated/interface/schemas/schema/data_types/unresolved"

import { $ as x_json } from "./schemas/json/$.module.astn"

export const $: g_.Schemas<pd.Source_Location> = schemas({
    "json": x_json,
})