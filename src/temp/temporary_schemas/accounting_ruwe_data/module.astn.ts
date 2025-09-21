import * as pd from 'exupery-core-data'

import * as g_ from "../../../generated/interface/schemas/module/data_types/unresolved"

import { module_ } from "../../../shorthands/module"

import { $ as operations } from "./operations.astn"
import { $ as schema_tree } from "./schema_tree.astn"

export const $: g_.Module<pd.Source_Location> = module_(
    operations,
    schema_tree,
)