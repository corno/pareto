import * as p_ from 'pareto-core/implementation/transformer'

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Directory
    >
    export type Expression = p_.Transformer<
        s_in.Expression,
        s_out.Expression
    >
}

import * as s_in from "../../../interface/schemas/transformer.js"
import * as s_out from "../../../../typescript_light/interface/schemas/typescript_light.js"

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: declarations.Root = ($) => p_.from.dictionary($.schemas).map( //create a directory for each source schema
    ($, id) => {
        const $v_source_schema_id = id
        return sh.n.directory_of_files(
            p_.from.dictionary($['target schemas']).map( //create a file for each source schema
                ($, id) => {
                    const $v_target_schema_id = id
                    return {
                        'statements': p_.literal.segmented_list([
                            p_.literal.list([
                                sh.s.import_namespace(
                                    sh.identifier_raw("p_"),
                                    sh.string_literal("pareto-core/implementation/transformer", 'apostrophe')
                                ),
                                sh.s.import_namespace(
                                    sh.identifier_raw("s_source"),
                                    sh.string_literal("../../../interface/schemas/" + $v_source_schema_id + ".js", 'quote')
                                ),
                                sh.s.import_namespace(
                                    sh.identifier_raw("s_target"),
                                    sh.string_literal("../../../interface/schemas/" + $v_target_schema_id + ".js", 'quote')
                                ),
                            ]),
                            p_.from.optional($['parameters schema']).decide(
                                ($) => p_.literal.list([
                                    sh.s.import_namespace(
                                        sh.identifier_raw("s_parameters"),
                                        sh.string_literal("../../../interface/schemas/" + $ + ".js", 'quote')
                                    )
                                ]),
                                () => p_.literal.list([])
                            ),
                            p_.literal.list([
                                sh.s.namespace(
                                    true,
                                    sh.identifier_raw("declarations"),
                                    p_.from.dictionary($.declarations['types']).convert_to_list( //create a type alias for each Pareto type
                                        ($, id) => sh.s.type_alias(
                                            true,
                                            sh.identifier_escaped(id),
                                            p_.literal.list([]),
                                            sh.t.type_reference(
                                                sh.identifier_raw("p_"),
                                                p_.literal.list([
                                                    sh.identifier_raw(
                                                        "Transformer"
                                                        + p_.from.optional($.parameter).decide(
                                                            ($) => "_With_Parameter",
                                                            () => ""
                                                        )
                                                    )
                                                ]),
                                                p_.literal.segmented_list([
                                                    p_.literal.list([
                                                        sh.t.type_reference(
                                                            sh.identifier_raw("s_source"),
                                                            p_.literal.list([
                                                                sh.identifier_escaped(id)
                                                            ]),
                                                            p_.literal.list([]),
                                                        ),
                                                        sh.t.type_reference(
                                                            sh.identifier_raw("s_target"),
                                                            p_.literal.segmented_list([
                                                                p_.literal.list([
                                                                    sh.identifier_escaped($['target value'].type)
                                                                ]),
                                                                p_.from.list($['target value']['sub selection']).map(
                                                                    ($) => p_.from.state($).decide(
                                                                        ($) => {
                                                                            switch ($[0]) {
                                                                                case 'dictionary': return p_.ss($, ($) => sh.identifier_raw("D"))
                                                                                case 'group': return p_.ss($, ($) => sh.identifier_escaped($.property))
                                                                                case 'list': return p_.ss($, ($) => sh.identifier_raw("L"))
                                                                                case 'optional': return p_.ss($, ($) => sh.identifier_raw("O"))
                                                                                case 'state': return p_.ss($, ($) => sh.identifier_escaped($.option))
                                                                                default: return p_.au($[0])
                                                                            }
                                                                        }
                                                                    )
                                                                )
                                                            ]),
                                                            p_.literal.list([]),
                                                        ),
                                                    ]),
                                                    p_.from.optional($.parameter).decide(
                                                        ($) => p_.literal.list([
                                                            sh.t.type_reference(
                                                                sh.identifier_escaped($v_target_schema_id),
                                                                p_.literal.list([]),
                                                                p_.literal.list([
                                                                    sh.t.type_reference(
                                                                        sh.identifier_raw("s_parameters"),
                                                                        p_.literal.list([]),
                                                                        p_.literal.list([])
                                                                    )
                                                                ])
                                                            )
                                                        ]),
                                                        () => p_.literal.list([])
                                                    )
                                                ])
                                            )
                                        )
                                    )
                                ),
                                sh.s.namespace(
                                    true,
                                    sh.identifier_raw("implementations"),
                                    p_.from.dictionary($.implementations['types']).convert_to_list( //create a variable for each type transformer
                                        ($, id) => sh.s.variable(
                                            true,
                                            true,
                                            sh.identifier_escaped(id),
                                            sh.t.type_reference(
                                                sh.identifier_raw("declarations"),
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
                                ),
                            ])
                        ])
                    }
                }
            )
        )
    }
)

export const Expresssion: declarations.Expression = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'implement me': return p_.option($, ($) => sh.e.call(
                sh.e.property_access(
                    sh.e.identifier_raw("p_dev"),
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
