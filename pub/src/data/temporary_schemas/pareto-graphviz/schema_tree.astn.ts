import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as x_graphviz } from "./schemas/graphviz/$.module.astn"

export const $: g_.Schema_Tree<_pi.Deprecated_Source_Location> = st.set({
    "graphviz": x_graphviz,
})