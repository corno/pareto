import * as pd from 'exupery-core-data'

import { schemas } from "../../shorthands/schema"
import * as g_ from "../../generated/interface/schemas/schema/data_types/unresolved"

import { $ as x_ast } from "./schemas/ast/$.module.astn"
import { $ as x_ide } from "./schemas/ide/$.module.astn"
import { $ as x_parse_result } from "./schemas/parse_result/$.module.astn"
import { $ as x_token } from "./schemas/token/$.module.astn"
import { $ as x_target } from "./schemas/target/$.module.astn"

export const $: g_.Schemas<pd.Source_Location> = schemas({
    "ast": x_ast,
    "ide": x_ide,
    "parse result": x_parse_result,
    "token": x_token,
    "target": x_target,
})