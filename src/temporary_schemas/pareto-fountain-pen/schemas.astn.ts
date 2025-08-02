import * as pd from 'exupery-core-data'

import { schemas } from "../../shorthands/schema"
import * as g_ from "../../generated/interface/schemas/schema/unresolved"

import { $ as x_block } from "./schemas/block/$.module.astn"
import { $ as x_lines } from "./schemas/lines/$.module.astn"
import { $ as x_text } from "./schemas/text/$.module.astn"
import { $ as x_semi_lines } from "./schemas/semi_lines/$.module.astn"


export const $: g_.Schemas<pd.Source_Location> = schemas({
    "block": x_block,
    "lines": x_lines,
    "semi lines": x_semi_lines,
    "text": x_text,
})