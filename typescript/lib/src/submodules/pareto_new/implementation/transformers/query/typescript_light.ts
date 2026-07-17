import * as p_ from 'pareto-core/implementation/transformer'

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Directory
    >
}

import * as s_in from "../../../interface/schemas/query.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: declarations.Root = ($): s_out.Directory => sh.directory_of_directories(
    p_.literal.dictionary({})
)