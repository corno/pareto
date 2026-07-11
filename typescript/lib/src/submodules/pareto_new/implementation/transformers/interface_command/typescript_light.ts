import * as p_ from 'pareto-core/implementation/transformer'

import * as interface_ from "../../../declarations/transformers/interface_command/typescript_light.js"

import * as s_in from "../../../interface/schemas/interface_command.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: interface_.Root = ($) => ['file', {
    'statements': p_.literal.list([])
}]

// export const Type: interface_.Type = xxx