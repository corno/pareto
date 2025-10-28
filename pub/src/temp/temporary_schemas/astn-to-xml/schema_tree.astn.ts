import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as x_xml } from "./schemas/xml/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "xml": x_xml,
})