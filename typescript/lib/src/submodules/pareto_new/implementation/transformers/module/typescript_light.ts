import * as p_ from 'pareto-core/implementation/transformer'

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Directory
    >
    export type Module = p_.Transformer<
        s_in.Module,
        s_out.Directory
    >
}

import * as s_in from "../../../interface/schemas/module.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies
import * as t_schemas from "../schema/typescript_light.js"
import * as t_interface_command from "../interface_command/typescript_light.js"
import * as t_interface_query from "../interface_query/typescript_light.js"
import * as t_transformer from "../transformer/typescript_light.js"
import * as t_refiner from "../refiner/typescript_light.js"
import * as t_query from "../query/typescript_light.js"
import * as t_command from "../command/typescript_light.js"

export const Root: declarations.Root = ($) => Module($)


export const Module: declarations.Module = ($) => p_.literal.dictionary({
    "interface": sh.n.directory_raw(
        p_.literal.dictionary({
            "schemas": t_schemas.Root($.interface.schemas),
            "commands.ts": ['file', t_interface_command.Root($.interface.commands)],
            "queries.ts": ['file', t_interface_query.Root($.interface.queries)],
        })
    ),
    "implementation": sh.n.directory_raw(
        p_.literal.dictionary({
            "transformers": ['directory', t_transformer.Root($.implementation.transformers)],
            "refiners": ['directory', t_refiner.Root($.implementation.refiners)],
            "queries": ['directory', t_query.Root($.implementation.queries)],
            "commands": ['directory', t_command.Root($.implementation.commands)],
        })
    ),
})