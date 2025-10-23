import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/target"


import { $ as x_railroad_diagram } from "./schemas/railroad_diagram/$.module.astn"
import { $ as x_rex } from "./schemas/rex/$.module.astn"
import { $ as x_rex_wrapper } from "./schemas/rex_wrapper/$.module.astn"

export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "railroad diagram": x_railroad_diagram,
    "rex": x_rex,
    "rex wrapper": x_rex_wrapper,
    //"builder configuration": x_builder_configuration,
})