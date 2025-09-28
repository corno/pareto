import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/target"

import { $ as x_module } from "./schemas/module/$.module.astn"
import { $ as x_schema } from "./schemas/schema/$.module.astn"
import { $ as x_unmarshall_errors } from "./schemas/unmarshall_errors/$.module.astn"
import { $ as x_unmarshall_result } from "./schemas/unmarshall_result/$.module.astn"
import { $ as x_astn_ast } from "../astn/schemas/ast/$.module.astn"
import { $ as x_astn_token } from "../astn/schemas/token/$.module.astn"


export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "ast": x_astn_ast,
    "token": x_astn_token,
    "module": x_module,
    "schema": x_schema,
    "unmarshall result": x_unmarshall_result,
    "unmarshall errors": x_unmarshall_errors
})