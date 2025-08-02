import * as pd from 'exupery-core-data'

import * as g_ from "../../generated/interface/schemas/module/unresolved"

import { module_ } from "../../shorthands/module"

import { $ as operations } from "./operations.astn"
import { $ as schemas } from "./schemas.astn"

export const $: g_.Module<pd.Source_Location> = module_(
    operations,
    schemas,
)