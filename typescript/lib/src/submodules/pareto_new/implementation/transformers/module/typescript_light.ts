import * as p_ from 'pareto-core/implementation/transformer'

import * as interface_ from "../../../declarations/transformers/module/typescript_light.js"

import * as s_in from "../../../interface/schemas/module.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies
import * as t_data from "../data/typescript_light.js"
import * as t_interface_command from "../interface_command/typescript_light.js"
import * as t_interface_query from "../interface_query/typescript_light.js"
import * as t_declarations_transformer from "../declarations_transformer/typescript_light.js"
import * as t_declarations_refiner from "../declarations_refiner/typescript_light.js"
import * as t_declarations_query from "../declarations_query/typescript_light.js"
import * as t_declarations_command from "../declarations_command/typescript_light.js"
import * as t_implementation_transformer from "../implementation_transformer/typescript_light.js"
import * as t_implementation_refiner from "../implementation_refiner/typescript_light.js"
import * as t_implementation_query from "../implementation_query/typescript_light.js"
import * as t_implementation_command from "../implementation_command/typescript_light.js"

export const Root: interface_.Root = ($) => Module($)


export const Module: interface_.Module = ($) => ['directory', p_.literal.dictionary({
    "interface": sh.n.directory(
        p_.literal.dictionary({
            "data": t_data.Root($.interface.data),
            "commands": t_interface_command.Root($.interface.commands),
            "query": t_interface_query.Root($.interface.query),
        })
    ),
    "declarations": sh.n.directory(
        p_.literal.dictionary({
            "transformers": t_declarations_transformer.Root($.declarations.transformers),
            "refiners": t_declarations_refiner.Root($.declarations.refiners),
            "queries": t_declarations_query.Root($.declarations.queries),
            "commands": t_declarations_command.Root($.declarations.commands),
        })
    ),
    "implementation": sh.n.directory(
        p_.literal.dictionary({
            "transformers": t_implementation_transformer.Root($.implementation.transformers),
            "refiners": t_implementation_refiner.Root($.implementation.refiners),
            "queries": t_implementation_query.Root($.implementation.queries),
            "commands": t_implementation_command.Root($.implementation.commands),
        })
    ),
})]
