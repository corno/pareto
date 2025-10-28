import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as x_client } from "./schemas/client/$.module.astn"
import { $ as x_server } from "./schemas/server/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "client": x_client,
    "server": x_server,
})