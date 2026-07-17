import * as p_ from 'pareto-core/implementation/transformer'


import * as s_in from "../../../interface/schemas/refiner.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light.js"

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Directory
    >
}

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"

//dependencies

export const Root: declarations.Root = ($) => ({
    'content': ['directories', p_.from.dictionary($.schemas).map( //create a directory for each source schema
        ($, id): s_out.Directory  => {
            const $v_target_schema_id = id
            return sh.directory_of_files(
                p_.from.dictionary($['source schemas']).map( //create a file for each source schema
                    ($, id) => {
                        const $v_source_schema_id = id
                        return {
                            'statements': p_.literal.segmented_list([
                                p_.literal.list([
                                    sh.s.import_namespace(
                                        sh.identifier_escaped("p_"),
                                        sh.string_literal("pareto-core/interface/refiner", 'apostrophe')
                                    ),
                                    sh.s.import_namespace(
                                        sh.identifier_escaped("s_source"),
                                        sh.string_literal("../../../interface/schemas/" + $v_source_schema_id + ".js", 'quote')
                                    ),
                                    sh.s.import_namespace(
                                        sh.identifier_escaped("s_target"),
                                        sh.string_literal("../../../../typescript_light/interface/schemas/" + $v_target_schema_id + ".js", 'quote')
                                    ),
                                    sh.s.import_namespace(
                                        sh.identifier_escaped("s_error"),
                                        sh.string_literal("../../../../typescript_light/interface/schemas/" + $['error schema'] + ".js", 'quote')
                                    )
                                ]),
                                p_.from.optional($['parameters schema']).decide(
                                    ($) => p_.literal.list([
                                        sh.s.import_namespace(
                                            sh.identifier_escaped("s_parameters"),
                                            sh.string_literal("../../../../typescript_light/interface/schemas/" + $ + ".js", 'quote')
                                        )
                                    ]),
                                    () => p_.literal.list([])
                                ),
                                p_.from.dictionary($['types']).convert_to_list( //create a variable for each type
                                    ($, id) => sh.s.type_alias(
                                        true,
                                        sh.identifier_escaped(id),
                                        p_.literal.list([]),
                                        sh.t.type_reference(
                                            sh.identifier_escaped("p_"),
                                            p_.literal.list([
                                                sh.identifier_raw(
                                                    p_.from.state($.source).decide(
                                                        ($): string => {
                                                            switch ($[0]) {
                                                                case 'value': return p_.ss($, ($) => "Refiner")
                                                                case 'iterator': return p_.ss($, ($) => "Production")
                                                                default: return p_.au($[0])
                                                            }
                                                        }
                                                    )
                                                    + p_.from.optional($.error).decide(
                                                        ($) => "",
                                                        () => "_Without_Error"
                                                    )
                                                    + p_.from.optional($.parameter).decide(
                                                        ($) => "_With_Parameter",
                                                        () => ""
                                                    )
                                                )
                                            ]),
                                            p_.literal.segmented_list([
                                                p_.literal.list([
                                                    sh.t.type_reference(
                                                        sh.identifier_escaped($v_target_schema_id),
                                                        p_.literal.list([]),
                                                        p_.literal.list([]),
                                                    ),
                                                    sh.t.type_reference(
                                                        sh.identifier_escaped($v_target_schema_id),
                                                        p_.literal.list([]),
                                                        p_.literal.list([]),
                                                    ),
                                                ]),
                                                p_.from.optional($.error).decide(
                                                    ($) => p_.literal.list([
                                                        sh.t.type_reference(
                                                            sh.identifier_escaped($v_target_schema_id),
                                                            p_.literal.list([]),
                                                            p_.literal.list([
                                                                sh.t.type_reference(
                                                                    sh.identifier_escaped("s_error"),
                                                                    p_.literal.list([]),
                                                                    p_.literal.list([])
                                                                )
                                                            ])
                                                        )
                                                    ]),
                                                    () => p_.literal.list([])
                                                ),
                                                p_.from.optional($.parameter).decide(
                                                    ($) => p_.literal.list([
                                                        sh.t.type_reference(
                                                            sh.identifier_escaped($v_target_schema_id),
                                                            p_.literal.list([]),
                                                            p_.literal.list([
                                                                sh.t.type_reference(
                                                                    sh.identifier_escaped("s_parameters"),
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
                            ])
                        }
                    }
                )
            )
        }
    )
    ]
})