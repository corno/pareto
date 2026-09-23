import * as p_ from 'pareto-core/transformer'
import p_variables from 'pareto-core/transformer/specials/variables'

namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Source_File
    >
    export type Expression = p_.Transformer<
        s_in.Expression,
        s_out.Expression
    >

    export type Select_Value = p_.Transformer<
        s_in.Select_Value,
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

import * as s_in from "../schema.js"
import * as s_out from "../../../../typescript_light/schemas/typescript_light/schema.js"

//shorthands
import * as sh from "../../../../typescript_light/schemas/typescript_light/shorthands/target.js"

//dependencies
import * as t_schema_reference_to_typescript_light from "../../schema_reference/transformers/typescript_light.js"
import * as ser_path from "pareto-filesystem-unrestricted-api/modules/helpers/schemas/path/serializers"



export const Expresssion: declarations.Expression = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'change context': return p_.option($, ($) => sh.e.call(
                sh.e.property_access(
                    sh.e.identifier_raw("p_"),
                    sh.identifier_raw("change_context"),
                ),
                true,
                p_.literal.list([
                    Select_Value($.select),
                    sh.e.arrow_function_with_expression(
                        p_.literal.list([
                            sh.parameter(
                                sh.identifier_raw("$"), null)
                        ]),
                        null,
                        Expresssion($.callback)
                    )
                ])
            ))
            case 'convert': return p_.option($, ($) => p_variables(
                () => {
                    const $v_selection = $.select
                    return p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'component': return p_.option($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'transform': return p_.option($, ($) => sh.e.call(
                                                p_.from.state($.scope).decide(
                                                    ($) => {
                                                        switch ($[0]) {
                                                            case 'external': return p_.option($, ($) => sh.e.property_access(
                                                                sh.e.identifier_escaped("t " + $.transformer),
                                                                sh.identifier_escaped($.function)
                                                            ))
                                                            case 'local': return p_.option($, ($) => sh.e.identifier_escaped($.function))
                                                            default: return p_.exhaustive($[0])
                                                        }
                                                    }
                                                ),
                                                true,
                                                p_.literal.segmented_list([
                                                    p_.literal.list([
                                                        Select_Value($v_selection),
                                                    ]),
                                                    p_.from.state($.arguments).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'omit': return p_.option($, ($) => p_.literal.list([]))
                                                                case 'pass through': return p_.option($, ($) => p_.literal.list([
                                                                    sh.e.identifier_raw("$p")
                                                                ]))
                                                                case 'initialize': return p_.option($, ($) => p_.literal.list([
                                                                    Expresssion($.expression)
                                                                ]))
                                                                default: return p_.exhaustive($[0])
                                                            }
                                                        }
                                                    )
                                                ])
                                            ))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ))
                                case 'dictionary': return p_.option($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'map': return p_.option($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("p_"),
                                                                sh.identifier_raw("from"),
                                                            ),
                                                            sh.identifier_raw("dictionary"),
                                                        ),
                                                        false,
                                                        p_.literal.list([
                                                            Select_Value($v_selection),
                                                        ])
                                                    ),
                                                    sh.identifier_raw("map"),
                                                ),
                                                true,
                                                p_.literal.list([
                                                    sh.e.arrow_function_with_expression(
                                                        p_.literal.list([
                                                            sh.parameter(
                                                                sh.identifier_raw("$"), null),
                                                            sh.parameter(
                                                                sh.identifier_raw("id"), null),
                                                        ]),
                                                        null,
                                                        Expresssion($['on entry'])
                                                    )
                                                ])
                                            ))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ))
                                case 'list': return p_.option($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'map': return p_.option($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("p_"),
                                                                sh.identifier_raw("from"),
                                                            ),
                                                            sh.identifier_raw("list"),
                                                        ),
                                                        false,
                                                        p_.literal.list([
                                                            Select_Value($v_selection),
                                                        ])
                                                    ),
                                                    sh.identifier_raw("map"),
                                                ),
                                                true,
                                                p_.literal.list([
                                                    sh.e.arrow_function_with_expression(
                                                        p_.literal.list([
                                                            sh.parameter(
                                                                sh.identifier_raw("$"), null)
                                                        ]),
                                                        null,
                                                        Expresssion($['on item'])
                                                    )
                                                ])
                                            ))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ))
                                case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'decide': return p_.option($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("p_"),
                                                                sh.identifier_raw("from"),
                                                            ),
                                                            sh.identifier_raw("optional"),
                                                        ),
                                                        false,
                                                        p_.literal.list([
                                                            Select_Value($v_selection),
                                                        ])
                                                    ),
                                                    sh.identifier_raw("decide"),
                                                ),
                                                true,
                                                p_.literal.list([
                                                    sh.e.arrow_function_with_expression(
                                                        p_.literal.list([
                                                            sh.parameter(
                                                                sh.identifier_raw("$"),
                                                                null
                                                            )
                                                        ]),

                                                        p_.from.optional($['temp return type']).decide(
                                                            ($) => t_schema_reference_to_typescript_light.Value_Reference(
                                                                $,
                                                                {
                                                                    'schema': sh.identifier_raw("s_target")
                                                                }
                                                            ),
                                                            () => null
                                                        ),
                                                        Expresssion($['on set'])
                                                    ),
                                                    sh.e.arrow_function_with_expression(
                                                        p_.literal.list([
                                                        ]),
                                                        p_.from.optional($['temp return type']).decide(
                                                            ($) => t_schema_reference_to_typescript_light.Value_Reference(
                                                                $,
                                                                {
                                                                    'schema': sh.identifier_raw("s_target")
                                                                }
                                                            ),
                                                            () => null
                                                        ),
                                                        Expresssion($['on not set'])
                                                    ),
                                                ])
                                            ))
                                            case 'map': return p_.option($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("p_"),
                                                                sh.identifier_raw("from"),
                                                            ),
                                                            sh.identifier_raw("optional"),
                                                        ),
                                                        false,
                                                        p_.literal.list([
                                                            Select_Value($v_selection),
                                                        ])
                                                    ),
                                                    sh.identifier_raw("map"),
                                                ),
                                                true,
                                                p_.literal.list([
                                                    sh.e.arrow_function_with_expression(
                                                        p_.literal.list([
                                                            sh.parameter(
                                                                sh.identifier_raw("$"), null)
                                                        ]),
                                                        null,
                                                        Expresssion($['on set'])
                                                    ),
                                                ])
                                            ))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ))
                                case 'state': return p_.option($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'decide': return p_.option($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("p_"),
                                                                sh.identifier_raw("from"),
                                                            ),
                                                            sh.identifier_raw("state"),
                                                        ),
                                                        false,
                                                        p_.literal.list([
                                                            Select_Value($v_selection),
                                                        ])
                                                    ),
                                                    sh.identifier_raw("decide"),
                                                ),
                                                true,
                                                p_.literal.list([
                                                    sh.e.arrow_function_with_block(
                                                        p_.literal.list([
                                                            sh.parameter(
                                                                sh.identifier_raw("$"), null)
                                                        ]),
                                                        p_.from.optional($['temp return type']).decide(
                                                            ($) => t_schema_reference_to_typescript_light.Value_Reference(
                                                                $,
                                                                {
                                                                    'schema': sh.identifier_raw("s_target")
                                                                }
                                                            ),
                                                            () => null
                                                        ),
                                                        p_.literal.list([
                                                            sh.s.switch_(
                                                                sh.e.element_access(
                                                                    sh.e.identifier_raw("$"),
                                                                    sh.e.number_literal(0)
                                                                ),
                                                                p_.literal.chain(
                                                                    p_.from.dictionary(
                                                                        $.options
                                                                        // p_.from.state($.type).decide(
                                                                        //     ($): s_in.Expression.from_source.type_.state.decide.options => {
                                                                        //         switch ($[0]) {
                                                                        //             case 'partial': return p_.option($, ($) => $.options)
                                                                        //             case 'full': return p_.option($, ($) => $.options)
                                                                        //             case 'single': return p_.option($, ($) => single_entry_dictionary($.option, $['if true']))
                                                                        //             default: return p_.exhaustive($[0])
                                                                        //         }
                                                                        //     }
                                                                        // )
                                                                    ).convert_to_list(
                                                                        ($, id) => sh.sw.case_(
                                                                            sh.e.string_literal(
                                                                                sh.string_literal(id, 'apostrophe')
                                                                            ),
                                                                            sh.s.return_(
                                                                                sh.e.call(
                                                                                    sh.e.property_access(
                                                                                        sh.e.identifier_raw("p_"),
                                                                                        sh.identifier_raw("option"),
                                                                                    ),
                                                                                    false,
                                                                                    p_.literal.list([
                                                                                        sh.e.identifier_raw("$"),
                                                                                        sh.e.arrow_function_with_expression(
                                                                                            p_.literal.list([
                                                                                                sh.parameter(
                                                                                                    sh.identifier_raw("$"), null)
                                                                                            ]),
                                                                                            null,
                                                                                            Expresssion($)
                                                                                        )
                                                                                    ])
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    sh.sw.default_(
                                                                        // sh.s.return_(p_.from.state($.type).decide(
                                                                        //     ($) => {
                                                                        //         switch ($[0]) {
                                                                        //             case 'partial': return p_.option($, ($) => Assign($.default))
                                                                        //             case 'full': return p_.option($, ($) => sh.e.call(
                                                                        //                 sh.e.property_access(
                                                                        //                     sh.e.identifier_raw("pt"),
                                                                        //                     sh.identifier_raw('au'),
                                                                        //                 ),
                                                                        //                 p_.literal.list([
                                                                        //                     sh.e.element_access(
                                                                        //                         sh.e.identifier_raw("$"),
                                                                        //                         sh.e.number_literal(0)
                                                                        //                     )
                                                                        //                 ])
                                                                        //             ))
                                                                        //             case 'single': return p_.option($, ($) => Assign($['if false']))
                                                                        //             default: return p_.exhaustive($[0])
                                                                        //         }
                                                                        //     }
                                                                        // ))
                                                                        sh.s.return_(
                                                                            sh.e.call(
                                                                                sh.e.property_access(
                                                                                    sh.e.identifier_raw("p_"),
                                                                                    sh.identifier_raw("exhaustive"),
                                                                                ),
                                                                                false,
                                                                                p_.literal.list([
                                                                                    sh.e.element_access(
                                                                                        sh.e.identifier_raw("$"),
                                                                                        sh.e.number_literal(0)
                                                                                    )
                                                                                ])
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        ])
                                                    )
                                                ])
                                            ))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                ))
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
            case 'initialize': return p_.option($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return p_.option($, ($) => sh.e.call(
                        sh.e.property_access(
                            sh.e.property_access(
                                sh.e.identifier_raw("p_"),
                                sh.identifier_raw("literal"),
                            ),
                            sh.identifier_raw("dictionary"),
                        ),
                        false,
                        p_.literal.list([
                            sh.e.object_literal(p_.from.dictionary($).convert_to_list(
                                ($, id) => ({
                                    'key': ['string literal', sh.string_literal(id, 'quote')],
                                    'value': Expresssion($)
                                })
                            ))
                        ])
                    ))
                    case 'group': return p_.option($, ($) => sh.e.object_literal(p_.from.dictionary($).convert_to_list(
                        ($, id) => ({
                            'key': ['string literal', sh.string_literal(id, 'apostrophe')],
                            'value': Expresssion($)
                        })
                    )))
                    case 'list': return p_.option($, ($) => sh.e.array_literal(p_.from.list($).map(
                        ($) => Expresssion($)
                    )))
                    case 'nothing': return p_.option($, ($) => sh.e.null_())
                    case 'number': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'integer': return p_.option($, ($) => sh.e.number_literal($))
                                case 'natural': return p_.option($, ($) => sh.e.number_literal($))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'boolean': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'false': return p_.option($, ($) => sh.e.false_())
                                case 'true': return p_.option($, ($) => sh.e.true_())
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'not set': return p_.option($, ($) => sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.identifier_raw("p_"),
                                            sh.identifier_raw("literal"),
                                        ),
                                        sh.identifier_raw("not_set"),
                                    ),
                                    false,
                                    p_.literal.list([])
                                ))
                                case 'set': return p_.option($, ($) => sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.identifier_raw("p_"),
                                            sh.identifier_raw("literal"),
                                        ),
                                        sh.identifier_raw("set"),
                                    ),
                                    false,
                                    p_.literal.list([
                                        Expresssion($),
                                    ])
                                ))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    case 'reference': return p_.option($, ($) => sh.e.string_literal(
                        sh.string_literal($, 'apostrophe')
                    ))
                    case 'state': return p_.option($, ($) => sh.e.array_literal(p_.literal.list([
                        sh.e.string_literal(
                            sh.string_literal($.option, 'apostrophe')
                        ),
                        Expresssion($.data),
                    ])))
                    case 'text': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'literal': return p_.option($, ($) => sh.e.string_literal(
                                    sh.string_literal($, 'quote')
                                ))
                                case 'serialize': return p_.option($, ($) => sh.e.call(
                                    p_.from.state($.scope).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'external': return p_.option($, ($) => sh.e.property_access(
                                                    sh.e.identifier_escaped("ser " + $.serializer),
                                                    sh.identifier_escaped($.function)
                                                ))
                                                case 'local': return p_.option($, ($) => sh.e.identifier_escaped($.function))
                                                default: return p_.exhaustive($[0])
                                            }
                                        }
                                    ),
                                    true,
                                    p_.literal.segmented_list([
                                        p_.literal.list([
                                            Expresssion($.context),
                                        ]),
                                        p_.from.state($.arguments).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'omit': return p_.option($, ($) => p_.literal.list([]))
                                                    case 'pass through': return p_.option($, ($) => p_.literal.list([
                                                        sh.e.identifier_raw("$p")
                                                    ]))
                                                    case 'initialize': return p_.option($, ($) => p_.literal.list([
                                                        Expresssion($)
                                                    ]))
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }
                                        )
                                    ])
                                ))

                                default: return p_.exhaustive($[0])
                            }
                        }
                    ))
                    default: return p_.exhaustive($[0])
                }
            })
            case 'select': return p_.option($, ($) => Select_Value($))
            default: return p_.exhaustive($[0])
        }
    }
)

export const Root: declarations.Root = ($) => {
    return {
        'statements': p_.literal.segmented_list<s_out.Statements.L>([
            p_.literal.list([
                sh.s.import_namespace(
                    sh.identifier_raw("p_"),
                    sh.string_literal("pareto-core/transformer", 'apostrophe')
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
                    sh.identifier_raw("s_source"),
                    sh.string_literal("../schema.js", 'quote')
                ),
                sh.s.import_namespace(
                    sh.identifier_raw("s_target"),
                    t_schema_reference_to_typescript_light.Schema_Reference($['target schema'])
                ),
            ]),
            p_.from.optional($['parameters schema']).decide(
                ($) => p_.literal.list([
                    sh.s.import_namespace(
                        sh.identifier_raw("s_parameters"),
                        t_schema_reference_to_typescript_light.Schema_Reference($)
                    )
                ]),
                () => p_.literal.list([])
            ),
            p_.from.dictionary($.dependencies.serializers).on_has_entries(
                ($) => p_.literal.segmented_list([
                    p_.literal.list([
                        sh.s.empty_line(),
                        sh.s.line_comment("serializer dependencies"),

                    ]),
                    p_.from.dictionary($).convert_to_list(
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped("ser " + id),
                            sh.string_literal(
                                p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'external': return p_.option($, ($) => ser_path.Name($.package) + "/modules/" + ser_path.Name($.module) + "/schemas/" + ser_path.Name($.schema) + "/serializers")
                                            case 'cousin': return p_.option($, ($) => "../../" + ser_path.Name($.schema) + "/serializers.js")
                                            case 'this schema': return p_.option($, ($) => "../serializers.js")
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
            p_.from.dictionary($.dependencies.transformers).on_has_entries(
                ($) => p_.literal.segmented_list([
                    p_.literal.list([
                        sh.s.empty_line(),
                        sh.s.line_comment("transformer dependencies"),

                    ]),
                    p_.from.dictionary($).convert_to_list(
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped("t " + id),
                            sh.string_literal(
                                p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'external': return p_.option($, ($) => ser_path.Name($.package) + "/modules/" + ser_path.Name($.module) + "/schemas/" + ser_path.Name($.schema) + "/transformers/" + ser_path.Name($.transformer))
                                            case 'cousin': return p_.option($, ($) => "../../" + ser_path.Name($.schema) + "/transformers/" + ser_path.Name($.transformer) + ".js")
                                            case 'sibling': return p_.option($, ($) => "./" + ser_path.Name($.transformer) + ".js")
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
                                                "Transformer"
                                                + p_.from.optional($.parameters).decide(
                                                    ($) => "_With_Parameter",
                                                    () => ""
                                                )
                                            )
                                        ]),
                                        p_.literal.segmented_list([
                                            p_.literal.list([
                                                t_schema_reference_to_typescript_light.Type_Reference(
                                                    {
                                                        'type': id
                                                    },
                                                    {
                                                        'schema': sh.identifier_raw("s_source")
                                                    }
                                                ),
                                                t_schema_reference_to_typescript_light.Value_Reference(
                                                    $.target,
                                                    {
                                                        'schema': sh.identifier_raw("s_target")
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
                                    $['temp has parameters']
                                        ? p_.literal.list([
                                            sh.parameter(
                                                sh.identifier_raw("$p"),
                                                null
                                            ),
                                        ])
                                        : p_.literal.list([])
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

export const Select_Value: declarations.Select_Value = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'call': return p_.option($, ($) => sh.e.call(
                p_.from.state($.scope).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'external': return p_.option($, ($) => sh.e.property_access(
                                sh.e.identifier_escaped("t " + $.transformer),
                                sh.identifier_escaped($.function)
                            ))
                            case 'local': return p_.option($, ($) => sh.e.identifier_escaped($.function))
                            default: return p_.exhaustive($[0])
                        }
                    }
                ),
                true,
                p_.literal.segmented_list([
                    p_.literal.list([
                        Select_Value($.context),
                    ]),
                    p_.from.state($.arguments).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'omit': return p_.option($, ($) => p_.literal.list([]))
                                case 'pass through': return p_.option($, ($) => p_.literal.list([
                                    sh.e.identifier_raw("$p")
                                ]))
                                case 'initialize': return p_.option($, ($) => p_.literal.list([
                                    sh.e.arrow_function_with_expression(
                                        p_.literal.list([
                                            sh.parameter(
                                                sh.identifier_raw("$"),
                                                null
                                            )
                                        ]),
                                        null,
                                        Expresssion($)
                                    )
                                ]))
                                default: return p_.exhaustive($[0])
                            }
                        }
                    )
                ])
            ))
            case 'context value': return p_.option($, ($) => Value_Selection_Tail(
                $.tail,
                {
                    'start': sh.e.identifier_raw("$"),
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