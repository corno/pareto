import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/target"

import { $ as x_ast } from "./schemas/results/$.module.astn"
import { $ as x_atn } from "./schemas/parameters/$.module.astn"
import { $ as x_errors } from "./schemas/errors/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "results": x_ast,
    "parameters": x_atn,
    "errors": x_errors,
})