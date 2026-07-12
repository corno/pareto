import * as p_ from 'pareto-core/implementation/transformer'

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Directory.D
    >
}

import * as s_in from "../../../interface/schemas/interface_command.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: declarations.Root = ($) => ['file', {
    'statements': p_.literal.list([])
}]

// export const Type: declarations.Type = xxx