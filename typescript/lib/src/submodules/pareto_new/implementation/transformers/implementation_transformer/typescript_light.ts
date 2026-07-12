import * as p_ from 'pareto-core/implementation/transformer'

import * as interface_ from "../../../declarations/transformers/implementation_transformer/typescript_light.js"

import * as s_in from "../../../interface/schemas/implementation_transformer.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: interface_.Root = ($) => ['directory', p_.from.dictionary($.schemas).map( //create a directory for each source schema
    ($, id) => {
        const $v_source_schema_id = id
        return sh.n.directory(
            p_.from.dictionary($['target schemas']).map( //create a file for each source schema
                ($, id) => {
                    const $v_target_schema_id = id
                    return sh.n.file(
                        p_.literal.segmented_list([
                            p_.literal.list([
                                sh.s.import_namespace(
                                    sh.identifier_escaped("p_"),
                                    sh.string_literal("pareto-core/implementation/transformer", 'apostrophe')
                                ),
                                sh.s.import_namespace(
                                    sh.identifier_escaped("interface_"),
                                    sh.string_literal("../../../declarations/transformers/" + $v_source_schema_id + "/" + $v_target_schema_id + ".js", 'quote')
                                ),
                                sh.s.import_namespace(
                                    sh.identifier_escaped("s_source"),
                                    sh.string_literal("../../../interface/schemas/" + $v_source_schema_id + ".js", 'quote')
                                ),
                                sh.s.import_namespace(
                                    sh.identifier_escaped("s_target"),
                                    sh.string_literal("../../../../typescript_light/interface/schemas/" + $v_target_schema_id + ".js", 'quote')
                                ),
                            ]),
                            p_.from.dictionary($['types']).convert_to_list( //create a variable for each type transformer
                                ($, id) => sh.s.variable(
                                    true,
                                    true,
                                    sh.identifier_escaped(id),
                                    sh.t.type_reference(
                                        sh.identifier_escaped("interface_"),
                                        p_.literal.list([
                                            sh.identifier_escaped(
                                                id
                                            )
                                        ]),
                                        p_.literal.segmented_list([
                                        ])
                                    ),
                                    Expresssion($.expression)
                                )
                            )
                        ])
                    )
                }
            )
        )
    }
)]

export const Expresssion: interface_.Expression = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'implement me': return p_.option($, ($) => sh.e.call(
                sh.e.property_access(
                    sh.e.identifier_raw("_pdev"),
                    sh.identifier_raw("implement_me")
                ),
                p_.literal.list([
                    sh.e.string_literal(
                        sh.string_literal($.remark, 'quote'))
                ])
            ))
            default: return p_.au($[0])
        }
    }
)