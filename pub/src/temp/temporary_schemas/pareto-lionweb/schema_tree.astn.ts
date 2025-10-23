import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/target"

import { $ as x_lioncore } from "./schemas/lioncore/$.module.astn"
import { $ as x_m3_normalized } from "./schemas/m3_normalized/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "lioncore": x_lioncore,
    "m3-normalized": x_m3_normalized,
})