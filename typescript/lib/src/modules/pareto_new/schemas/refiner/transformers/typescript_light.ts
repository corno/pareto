import * as p_ from 'pareto-core/transformer'
import p_variables from 'pareto-core/transformer/specials/variables'

import * as s_in from "../schema.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light/schema.js"

namespace declarations {

    export type Expression = p_.Transformer<
        s_in.Expression,
        s_out.Expression
    >

    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Source_File
    >

    export type Value_Selection = p_.Transformer<
        s_in.Value_Selection,
        s_out.Expression
    >

    export type Value_Selection_Tail = p_.Transformer_With_Parameter<
        s_in.Value_Selection_Tail,
        s_out.Expression,
        {
            'start': s_out.Expression
        }
    >
}

//shorthands
import * as sh from "../../../../typescript_light/schemas/typescript_light/shorthands/target.js"

//dependencies
import * as t_schema_reference_to_typescript_light from "../../schema_reference/transformers/typescript_light.js"
import * as ser_path from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/path/serializers"

export const Root: declarations.Root = ($) => {
    const $v_source_schema_id = "FIXME_SSI"
    const $v_target_schema_id = "FIXME_TSI"
    const $v_error_schema_id = "FIXME_ESI"
    const $v_parameters_schema_id = "FIXME_PSI"
    return {
        'statements': p_.literal.segmented_list([
            p_.literal.list([
                sh.s.import_namespace(
                    sh.identifier_raw("p_"),
                    sh.string_literal("pareto-core/refiner", 'apostrophe')
                ),
            ]),
            $['development mode']
                ? p_.literal.list([
                    sh.s.import_default(
                        sh.identifier_raw("p_implement_me"),
                        sh.string_literal("pareto-core-dev/implement_me", 'apostrophe')
                    ),
                ])
                : p_.literal.list([]),
            p_.literal.list([
                sh.s.empty_line(),
                sh.s.line_comment("schemas"),
                sh.s.import_namespace(
                    sh.identifier_raw("s_target"),
                    sh.string_literal("../schema.js", 'quote')
                ),
                sh.s.import_namespace(
                    sh.identifier_raw("s_source"),
                    t_schema_reference_to_typescript_light.Schema_Reference($['source schema'])
                ),
            ]),
            p_.from.optional($['error schema']).decide(
                ($) => p_.literal.list([
                    sh.s.import_namespace(
                        sh.identifier_raw("s_error"),
                        t_schema_reference_to_typescript_light.Schema_Reference($)
                    ),
                ]),
                () => p_.literal.list([])
            ),
            p_.from.optional($['parameters schema']).decide(
                ($) => p_.literal.list([
                    sh.s.import_namespace(
                        sh.identifier_raw("s_parameters"),
                        t_schema_reference_to_typescript_light.Schema_Reference($)
                    ),
                ]),
                () => p_.literal.list([])
            ),
            p_.from.dictionary($.dependencies).on_has_entries(
                ($) => p_.literal.segmented_list([
                    p_.literal.list([
                        sh.s.empty_line(),
                        sh.s.line_comment("dependencies"),

                    ]),
                    p_.from.dictionary($).convert_to_list(
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped("r " + id),
                            sh.string_literal(
                                p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'external': return p_.option($, ($) => ser_path.Name($.package) + "/modules/" + ser_path.Name($.module) + "/schemas/" + ser_path.Name($.schema) + "/refiners/" + ser_path.Name($.refiner))
                                            case 'cousin': return p_.option($, ($) => "../../" + ser_path.Name($.schema) + "/refiners/" + ser_path.Name($.refiner) + ".js")
                                            case 'sibling': return p_.option($, ($) => "./" + ser_path.Name($.refiner) + ".js")
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ),
                                'quote'
                            )
                        )
                    )
                ]),
                () => p_.literal.list([])
            ),
            p_.literal.list<s_out.Statements.L>([
                sh.s.empty_line(),
                sh.s.namespace(
                    true,
                    sh.identifier_raw("declarations"),
                    p_.from.list(
                        p_.from.dictionary($.declarations).convert_to_list( //create a type alias for each Pareto type
                            ($, id): s_out.Statements => p_.literal.list([
                                sh.s.empty_line(),
                                sh.s.type_alias(
                                    true,
                                    sh.identifier_escaped(id),
                                    p_.literal.list([]),
                                    sh.t.type_reference(
                                        sh.identifier_raw("p_"),
                                        p_.literal.list([
                                            sh.identifier_raw(
                                                "Refiner"

                                                + p_.from.optional($.error).decide(
                                                    ($) => "",
                                                    () => "_Without_Error"
                                                )
                                                + p_.from.optional($.parameters).decide(
                                                    ($) => "_With_Parameter",
                                                    () => ""
                                                )
                                            )
                                        ]),
                                        p_.literal.segmented_list([
                                            p_.literal.list([
                                                sh.t.type_reference(
                                                    sh.identifier_raw("s_target"),
                                                    p_.literal.segmented_list([
                                                        p_.literal.list([
                                                            sh.identifier_escaped(id)
                                                        ]),
                                                        // p_.from.list($['target value']['sub selection']).map(
                                                        //     ($) => p_.from.state($).decide(
                                                        //         ($) => {
                                                        //             switch ($[0]) {
                                                        //                 case 'dictionary': return p_.option($, ($) => sh.identifier_raw("D"))
                                                        //                 case 'group': return p_.option($, ($) => sh.identifier_escaped($.property))
                                                        //                 case 'list': return p_.option($, ($) => sh.identifier_raw("L"))
                                                        //                 case 'optional': return p_.option($, ($) => sh.identifier_raw("O"))
                                                        //                 case 'state': return p_.option($, ($) => sh.identifier_escaped($.option))
                                                        //                 default: return p_.exhaustive($[0])
                                                        //             }
                                                        //         }
                                                        //     )
                                                        // )
                                                    ]),
                                                    p_.literal.list([]),
                                                ),
                                            ]),
                                            p_.from.optional($.error).decide(
                                                ($) => p_.literal.list([
                                                    t_schema_reference_to_typescript_light.Type_Reference(
                                                        $,
                                                        {
                                                            'schema': sh.identifier_raw("s_error")
                                                        }
                                                    )
                                                ]),
                                                () => p_.literal.list([])
                                            ),
                                            p_.literal.list([
                                                p_.from.state($.source).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'value': return p_.option($, ($) => t_schema_reference_to_typescript_light.Type_Reference(
                                                                $,
                                                                {
                                                                    'schema': sh.identifier_raw("s_source")
                                                                }
                                                            ))
                                                            case 'iterator': return p_.option($, ($) => t_schema_reference_to_typescript_light.Type_Reference(
                                                                $,
                                                                {
                                                                    'schema': sh.identifier_raw("FIXME ITERATOR")
                                                                }
                                                            ))
                                                            default: return p_.exhaustive($[0])
                                                        }
                                                    }
                                                ),
                                            ]),
                                            p_.from.optional($.parameters).decide(
                                                ($) => p_.literal.list([
                                                    t_schema_reference_to_typescript_light.Type_Reference(
                                                        $,
                                                        {
                                                            'schema': sh.identifier_raw("s_parameters")
                                                        }
                                                    )
                                                ]),
                                                () => p_.literal.list([])
                                            ),
                                        ])
                                    )
                                )
                            ])
                        )
                    ).flatten(
                        ($) => $
                    )
                ),
                sh.s.empty_line(),
                sh.s.line_comment("implementations"),
            ]),
            p_.from.list(
                p_.from.dictionary($.implementations).convert_to_list( //create a variable for each type transformer
                    ($, id): s_out.Statements => p_.literal.list([
                        sh.s.empty_line(),
                        sh.s.variable(
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
                            sh.e.arrow_function_with_expression(
                                p_.literal.segmented_list([
                                    p_.literal.list([
                                        sh.parameter(
                                            sh.identifier_raw("$"),
                                            null
                                        ),
                                    ]),
                                    $['temp has error']
                                        ? p_.literal.list([
                                            sh.parameter(
                                                sh.identifier_raw("abort"),
                                                null
                                            ),
                                        ])
                                        : p_.literal.list([]),
                                    $['temp has parameters']
                                        ? p_.literal.list([
                                            sh.parameter(
                                                sh.identifier_raw("$p"),
                                                null
                                            ),
                                        ])
                                        : p_.literal.list([]),

                                ]),
                                null,
                                Expresssion($.expression)
                            )
                        )
                    ])
                )
            ).flatten(
                ($) => $
            ),
        ])
    }
}

export const Expresssion: declarations.Expression = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'from': return p_.option($, ($) => p_variables(
                () => {
                    const $v_selection = $.selection
                    return p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'dictionary map': return sh.e.false_()
                                default: return p_.exhaustive($[0])
                            }
                        }
                    )
                }
            ))
            case 'implement me': return p_.option($, ($) => sh.e.call(
                sh.e.identifier_raw("p_implement_me"),
                false,
                p_.literal.list([
                    sh.e.string_literal(
                        sh.string_literal($.remark, 'quote'))
                ])
            ))
            case 'literal': return p_.option($, ($) => {
                switch ($[0]) {
                    case 'state': return p_.option($, ($) => sh.e.array_literal(p_.literal.list([
                        sh.e.string_literal(
                            sh.string_literal($.option, 'apostrophe')
                        ),
                        Expresssion($.data),
                    ])))
                    default: return p_.exhaustive($[0])
                }
            })
            case 'selection': return p_.option($, ($) => Value_Selection($))
            default: return p_.exhaustive($[0])
        }
    }
)

export const Value_Selection: declarations.Value_Selection = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'context value': return p_.option($, ($) => Value_Selection_Tail(
                $.tail,
                {
                    'start': sh.e.identifier_raw("$"),
                }
            ))
            case 'call': return p_.option($, ($) => Value_Selection_Tail(
                $.tail,
                {
                    'start': sh.e.call(
                        sh.e.property_access(
                            sh.e.identifier_escaped("r " + $.refiner),
                            sh.identifier_escaped($.type)
                        ),
                        false,
                        p_.literal.segmented_list([
                            p_.literal.list([
                                Value_Selection($.context),
                            ]),
                            p_.from.state($.error).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'omitted': return p_.option($, ($) => p_.literal.list([]))
                                        case 'pass through': return p_.option($, ($) => p_.literal.list([
                                            sh.e.identifier_raw("abort")
                                        ]))
                                        case 'handler': return p_.option($, ($) => p_.literal.list([
                                            sh.e.arrow_function_with_expression(
                                                p_.literal.list([
                                                    sh.parameter(sh.identifier_raw("$"), null)
                                                ]),
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    false,
                                                    p_.literal.list([
                                                        Expresssion($.expression)
                                                    ]),
                                                )
                                            )
                                        ]))
                                        default: return p_.exhaustive($[0])
                                    }
                                }
                            ),
                            p_.from.state($.parameters).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'omitted': return p_.option($, ($) => p_.literal.list([]))
                                        case 'pass through': return p_.option($, ($) => p_.literal.list([
                                            sh.e.identifier_raw("$p")
                                        ]))
                                        case 'handler': return p_.option($, ($) => p_.literal.list([
                                            sh.e.arrow_function_with_expression(
                                                p_.literal.list([
                                                    sh.parameter(
                                                        sh.identifier_raw("$"),
                                                        null
                                                    )
                                                ]),
                                                null,
                                                Expresssion($.expression)
                                            )
                                        ]))
                                        default: return p_.exhaustive($[0])
                                    }
                                }
                            )
                        ])
                    )
                }
            ))
            default: return p_.exhaustive($[0])
        }
    }
)

export const Value_Selection_Tail: declarations.Value_Selection_Tail = ($, $p) => p_.from.list(
    $
).reduce_to_any_value(
    $p.start,
    ($, current) => sh.e.element_access(
        current,
        sh.e.string_literal(sh.string_literal($, 'apostrophe')),
    )
)