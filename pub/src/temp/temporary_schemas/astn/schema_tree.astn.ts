import * as pd from 'exupery-core-data'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data_types/target"

import { $ as x_astn_schema } from "./schemas/astn_schema/$.module.astn"
import { $ as x_authoring_parse_tree } from "./schemas/authoring_parse_tree/$.module.astn"
import { $ as x_authoring_parse_result } from "./schemas/authoring_parse_result/$.module.astn"
import { $ as x_authoring_target } from "./schemas/authoring_target/$.module.astn"
import { $ as x_ide } from "./schemas/ide/$.module.astn"
import { $ as x_sealed_ast } from "./schemas/sealed_ast/$.module.astn"
import { $ as x_sealed_parse_result } from "./schemas/sealed_parse_result/$.module.astn"
import { $ as x_sealed_target } from "./schemas/sealed_target/$.module.astn"
import { $ as x_token } from "./schemas/token/$.module.astn"


export const $: g_.Schema_Tree<pd.Source_Location> = st.set({
    "astn schema": x_astn_schema,
    "authoring parse tree": x_authoring_parse_tree,
    "authoring parse result": x_authoring_parse_result,
    "authoring target": x_authoring_target,
    "ide": x_ide,
    "sealed ast": x_sealed_ast,
    "sealed parse result": x_sealed_parse_result,
    "sealed target": x_sealed_target,
    "token": x_token,
})