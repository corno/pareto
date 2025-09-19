import * as pd from 'exupery-core-data'

import { st } from "../../shorthands/schema"
import * as g_ from "../../generated/interface/schemas/schema/data_types/unresolved"

import { $ as x_boekhouding } from "./schemas/boekhouding/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "boekhouding": x_boekhouding,
})