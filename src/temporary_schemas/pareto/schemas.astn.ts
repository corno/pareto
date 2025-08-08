import * as pd from 'exupery-core-data'

import { schemas } from "../../shorthands/schema"
import * as g_ from "../../generated/interface/schemas/schema/data_types/unresolved"

import { $ as x_module } from "./schemas/module/$.module.astn"
import { $ as x_schema } from "./schemas/schema/$.module.astn"
import { $ as x_unmarshall_errors } from "./schemas/unmarshall_errors/$.module.astn"
import { $ as x_unmarshall_result } from "./schemas/unmarshall_result/$.module.astn"

export const $: g_.Schemas<pd.Source_Location> = schemas({
    "module": x_module,
    "schema": x_schema,
    "unmarshall result": x_unmarshall_result,
    "unmarshall errors": x_unmarshall_errors
})