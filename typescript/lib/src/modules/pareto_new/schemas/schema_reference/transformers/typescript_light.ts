import * as p_ from 'pareto-core/transformer'

namespace declarations {

    export type Schema_Reference = p_.Transformer<
        s_in.Schema_Reference,
        s_out.String_Literal
    >
}

import * as s_in from "../schema.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light/schema.js"

//shorthands
import * as sh from "../../../../typescript_light/schemas/typescript_light/shorthands/target.js"

//dependencies
import * as ser_path from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/path/serializers"

export const Schema_Reference: declarations.Schema_Reference = ($) => ({
    'delimiter': ['quote', null],
    'value': p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'child': return p_.option($, ($) => "../modules/" + ser_path.Name($.module) + "/schemas/" + ser_path.Name($.schema) + "/schema.js")
                case 'external': return p_.option($, ($) => ser_path.Name($.package) + "/" + ser_path.Name($.schema))
                case 'sibling': return p_.option($, ($) => "../../" + ser_path.Name($) + "/schema.js")
                default: return p_.exhaustive($[0])
            }
        }
    )
})