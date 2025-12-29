import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as x_lioncore } from "./schemas/lioncore/$.module.astn"
import { $ as x_serialization_chunk } from "./schemas/serialization_chunk/$.module.astn"
import { $ as x_serialization_tree } from "./schemas/serialization_tree/$.module.astn"

export const $: g_.Schema_Tree<_pi.Deprecated_Source_Location> = st.set({
    "lioncore": x_lioncore,
    "serialization chunk": x_serialization_chunk,
    "serialization tree": x_serialization_tree,
})