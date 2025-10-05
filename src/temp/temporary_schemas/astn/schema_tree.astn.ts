import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../generated/interface/schemas/schema/data_types/target"

import { $ as x_ast } from "./schemas/ast/$.module.astn"
import { $ as x_ide } from "./schemas/ide/$.module.astn"
import { $ as x_parse_result } from "./schemas/parse_result/$.module.astn"
import { $ as x_token } from "./schemas/token/$.module.astn"
import { $ as x_authoring_target } from "./schemas/authoring_target/$.module.astn"
import { $ as x_sealed_target } from "./schemas/sealed_target/$.module.astn"


export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "ast": x_ast,
    "ide": x_ide,
    "parse result": x_parse_result,
    "token": x_token,
    "authoring target": x_authoring_target,
    "sealed target": x_sealed_target,
})