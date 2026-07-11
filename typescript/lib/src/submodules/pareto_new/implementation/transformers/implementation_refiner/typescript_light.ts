import * as p_ from 'pareto-core/implementation/transformer'

import * as interface_ from "../../../declarations/transformers/implementation_refiner/typescript_light.js"

import * as d_in from "../../../interface/schemas/implementation_refiner.js"
import * as d_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: interface_.Root = ($) => ['file', {
    'statements': p_.literal.list([])
}]
