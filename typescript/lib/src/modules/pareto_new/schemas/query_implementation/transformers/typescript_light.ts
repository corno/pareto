import * as p_ from 'pareto-core/implementation/transformer'

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Directory
    >
}

import * as s_in from "../schema.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light/schema.js"

//shorthands
import * as sh from "../../../../typescript_light/schemas/typescript_light/shorthands/target.js"

//dependencies

export const Root: declarations.Root = ($): s_out.Directory => sh.directory_of_directories(
    p_.literal.dictionary({})
)