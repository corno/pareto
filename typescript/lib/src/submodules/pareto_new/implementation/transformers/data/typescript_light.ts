import * as p_ from 'pareto-core/implementation/transformer'

import * as interface_ from "../../../declarations/transformers/data/typescript_light.js"

import * as d_in from "../../../interface/data/data.js"
import * as d_out from "../../../../typescript_light/interface/data/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: interface_.Root = ($) => ['file', {
    'statements': p_.literal.list([])
}]
