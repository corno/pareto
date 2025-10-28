import * as _edata from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as x_boekhouding } from "./schemas/boekhouding/$.module.astn"
import { $ as x_boekhouding_oude_model } from "./schemas/boekhouding_oude_model/$.module.astn"


export const $: g_.Schema_Tree<_edata.Source_Location> = st.set({
    "boekhouding": x_boekhouding,
    "boekhouding oude model": x_boekhouding_oude_model,
})