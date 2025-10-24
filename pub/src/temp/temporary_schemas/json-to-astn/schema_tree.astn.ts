import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/target"

import { $ as x_legacy_json_ } from "./schemas/legacy_json_schema/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "legacy json schema": x_legacy_json_,
})