import * as p_ from 'pareto-core/transformer'

import * as s_in from "../schema.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light/schema.js"

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

//shorthands
import * as sh from "../../../../typescript_light/schemas/typescript_light/shorthands/target.js"

//dependencies
import * as t_schema from "../../schema/transformers/typescript_light.js"
import * as t_command_interface from "../../command_interface/transformers/typescript_light.js"
import * as t_query_interface from "../../query_interface/transformers/typescript_light.js"
import * as t_transformer from "../../transformer/transformers/typescript_light.js"
import * as t_serializer from "../../serializer/transformers/typescript_light.js"
import * as t_deserializer from "../../deserializer/transformers/typescript_light.js"
import * as t_refiner from "../../refiner/transformers/typescript_light.js"
import * as t_query_implementation from "../../query_implementation/transformers/typescript_light.js"
import * as t_command_implementation from "../../command_implementation/transformers/typescript_light.js"

export const Root: declarations.Root = ($) => Module($)


export const Module: declarations.Module = ($) => ({
    'content': ['directories', p_.literal.dictionary<s_out.Directory>({
        "modules": sh.xdirectory_of_directories(p_.from.dictionary($.modules).map(
            ($) => Module($)
        )),
        "schemas": sh.xdirectory_of_directories(p_.from.dictionary($.schemas).map(
            ($) => sh.xmixed_directory(p_.literal.dictionary({
                "schema.ts": sh.n.file(t_schema.Schema($.schema)),
                "transformers": sh.n.directory_of_files(p_.from.dictionary($.transformers).map(
                    ($) => t_transformer.Root($)
                )),
                "serializers.ts": sh.n.file(t_serializer.Root($)),
                "refiners": sh.n.directory_of_files(p_.from.dictionary($.refiners).map(
                    ($) => t_refiner.Root($)
                )),
                "deserializers.ts": sh.n.file(t_deserializer.Root($))
            }))
        )),
        "commands": sh.xmixed_directory(p_.literal.dictionary({
            "implementations": sh.n.directory_of_files(p_.from.dictionary($.commands.implementations).map(
                ($) => t_command_implementation.Root($)
            )),
            "interfaces.ts": sh.n.file(t_command_interface.Root($.commands.interfaces)),
        })),
        "queries": sh.xmixed_directory(p_.literal.dictionary({
            "implementations": sh.n.directory_of_files(p_.from.dictionary($.queries.implementations).map(
                ($) => t_query_implementation.Root($)
            )),
            "interfaces.ts": sh.n.file(t_query_interface.Root($.queries.interfaces)),
        })),
    })]
})