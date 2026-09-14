import * as p_ from 'pareto-core/transformer'

namespace declarations {

    export type Schema_Reference = p_.Transformer<
        s_in.Schema_Reference,
        s_out.String_Literal
    >

    export type Type_Reference = p_.Transformer_With_Parameter<
        s_in.Type_Reference,
        s_out.Type,
        {
            'schema': s_out.Identifier
        }
    >

    export type Value_Reference = p_.Transformer_With_Parameter<
        s_in.Value_Reference,
        s_out.Type,
        {
            'schema': s_out.Identifier
        }
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
                case 'external': return p_.option($, ($) => ser_path.Name($.package) + "/modules/" + ser_path.Name($.module) + "/schemas/" + ser_path.Name($.schema) + "/schema")
                case 'sibling': return p_.option($, ($) => "../../" + ser_path.Name($) + "/schema.js")
                default: return p_.exhaustive($[0])
            }
        }
    )
})

export const Type_Reference: declarations.Type_Reference = ($, $p) => sh.t.type_reference(
    $p.schema,
    p_.literal.segmented_list([
        p_.literal.list([
            sh.identifier_escaped($.type)
        ]),
    ]),
    p_.literal.list([]),
)

export const Value_Reference: declarations.Value_Reference = ($, $p) => sh.t.type_reference(
    $p.schema,
    p_.literal.segmented_list([
        p_.literal.list([
            sh.identifier_escaped($.type)
        ]),
        p_.from.list($['sub selection']).map(
            ($) => p_.from.state($).decide(
                ($): s_out.Type.type_reference.tail.L => {
                    switch ($[0]) {
                        case 'dictionary': return p_.option($, ($) => sh.identifier_raw("D"))
                        case 'group': return p_.option($, ($) => sh.identifier_escaped($.property))
                        case 'list': return p_.option($, ($) => sh.identifier_raw("L"))
                        case 'optional': return p_.option($, ($) => sh.identifier_raw("O"))
                        case 'state': return p_.option($, ($) => sh.identifier_escaped($.option))
                        default: return p_.exhaustive($[0])
                    }
                }
            )
        ),
    ]),
    p_.literal.list([]),
)