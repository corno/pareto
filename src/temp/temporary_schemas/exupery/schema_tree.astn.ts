import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/unresolved"


import { $ as x_interface } from "./schemas/interface/$.module.astn"
import { $ as x_implementation } from "./schemas/implementation/$.module.astn"
import { $ as x_typescript_light } from "./schemas/typescript_light/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "implementation": x_implementation,
    "interface": x_interface,
    "typescript light": x_typescript_light,
})