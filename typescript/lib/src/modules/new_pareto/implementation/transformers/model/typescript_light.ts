import * as p_ from 'pareto-core/implementation/transformer'

import * as interface_ from "../../../declarations/transformers/model/typescript_light.js"

import * as d_in from "../../../interface/data/model.js"
import * as d_out from "../../../../typescript_light/interface/data/typescript_light.js"

import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

export const Module: interface_.Module = ($) => p_.literal.dictionary({
    "interface": sh.n.directory(
        p_.literal.dictionary({
            // "data": p_.from.dictionary($.interface.data)
        })
    )
})

// export const Type: interface_.Type = xxx