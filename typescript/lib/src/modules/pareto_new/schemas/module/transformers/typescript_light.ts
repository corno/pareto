import * as p_ from 'pareto-core/transformer'

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

import * as s_in from "../schema.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light/schema.js"

//shorthands
import * as sh from "../../../../typescript_light/schemas/typescript_light/shorthands/target.js"

//dependencies
import * as t_schema from "../../schema/transformers/typescript_light.js"
import * as t_command_interface from "../../command_interface/transformers/typescript_light.js"
import * as t_query_interface from "../../query_interface/transformers/typescript_light.js"
import * as t_transformer from "../../transformer/transformers/typescript_light.js"
import * as t_refiner from "../../refiner/transformers/typescript_light.js"
import * as t_query_implementation from "../../query_implementation/transformers/typescript_light.js"
import * as t_command_implementation from "../../command_implementation/transformers/typescript_light.js"

export const Root: declarations.Root = ($) => Module($)


export const Module: declarations.Module = ($) => ({
    'content': ['directories', p_.literal.dictionary<s_out.Directory>({
        // "modules": sh.n.directory(t_schema.Root($.modules)),
        // "schemas": sh.n.directory(sh.xdirectory_of_files),
        // "commands": sh.n.directory_of_files(
        //     p_.literal.dictionary({})
        // ),
        // "queries": sh.n.directory({
        // }),
        // "interface": sh.mixed_directory(
        //     p_.literal.dictionary({
        //         "schemas": sh.n.directory(t_schema.Root($.schemas)),
        //         "commands.ts": ['file', t_command_interface.Root($.interface.commands)],
        //         "queries.ts": ['file', t_query_interface.Root($.interface.queries)],
        //     })
        // ),
        // "implementation": sh.directory_of_directories(
        //     p_.literal.dictionary({
        //         "transformers": t_transformer.Root($.implementation.transformers),
        //         "refiners": t_refiner.Root($.implementation.refiners),
        //         "queries": t_query_implementation.Root($.implementation.queries),
        //         "commands": t_command_implementation.Root($.implementation.commands),
        //     })
        // ),
    })]
})