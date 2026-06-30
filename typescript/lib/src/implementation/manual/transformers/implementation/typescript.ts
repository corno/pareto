import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_implement_me from 'pareto-core-dev/dist/implement_me'
import p_variables from 'pareto-core/dist/implementation/transformer/specials/variables'
import * as p_ri from 'pareto-core/dist/interface/refiner'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out from "../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_function from "../../../../interface/data/pareto_to_typescript"

//shorthands
import * as sh from "../../../../modules/typescript_light/shorthands/typescript_light/target"

//dependencies
import { temp_create_file_path } from '../interface/typescript'

const join = ($: p_di.List<string>): string => {
    let out = ""
    p_.from.list($).map(
        ($) => {
            out += $
            return null
        })
    return out
}

const temp_rename: p_ri.Refiner<
    d_in.Package_Set,
    d_function.Error,
    d_in.Package_Set
> = (
    $,
    abort
) => {
        const renamed: { [id: string]: d_in.Package_Set.D } = {}
        p_.from.dictionary($).map(
            ($, id) => {
                const new_id: string = p_.from.state($).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'package': return p_.option($, ($) => id + ".ts")
                            case 'set': return p_.option($, ($) => {
                                const ends_with_ts = ($s: string): boolean => {
                                    return false //implement properly later
                                }
                                if (ends_with_ts(id)) {
                                    abort(['directory name ending with ts', { 'directory name': id }])
                                }
                                return id
                            })
                            default: return p_.au($[0])
                        }
                    })
                renamed[new_id] = $
                return null
            })
        return p_.literal.dictionary(renamed)
    }


export const Package_Set: p_ri.Refiner<
    d_out.Directory,
    d_function.Error,
    d_in.Package_Set
> = (
    $,
    abort
) => {
        return p_.from.dictionary(temp_rename($, abort)).map(
            ($, id) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'package': return p_.option($, ($): d_out.Directory.D => {

                            const y: d_out.Statements = p_.literal.segmented_list([
                                p_.literal.list([
                                    sh.s.import_namespace(
                                        sh.identifier_raw("pt"),
                                        sh.string_literal("pareto-core/dist/assign", 'apostrophe')
                                    ),
                                ]),
                                $.specials['change context']
                                    ? p_.literal.list([
                                        sh.s.import_default(
                                            sh.identifier_raw("p_change_context"),
                                            sh.string_literal("pareto-core/dist/specials/change_context", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                $.specials['implement me']
                                    ? p_.literal.list([
                                        sh.s.import_namespace(
                                            sh.identifier_raw("_pdev"),
                                            sh.string_literal("pareto-core-dev", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                $.specials['iterate']
                                    ? p_.literal.list([
                                        sh.s.import_named(
                                            p_.literal.list([
                                                sh.specifier(
                                                    sh.identifier_raw("p_change_context"), null),
                                            ]),
                                            sh.string_literal("pareto-core/dist/iterate", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                $.specials['list from text']
                                    ? p_.literal.list([
                                        sh.s.import_default(
                                            sh.identifier_raw("p_list_from_text"),
                                            sh.string_literal("pareto-core/dist/specials/list_from_text", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                $.specials.lookups
                                    ? p_.literal.list([
                                        sh.s.import_namespace(
                                            sh.identifier_raw("p_sl"),
                                            sh.string_literal("pareto-core/dist/select_static_lookup", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                $.specials['text from list']
                                    ? p_.literal.list([
                                        sh.s.import_default(
                                            sh.identifier_raw("p_text_from_list"),
                                            sh.string_literal("pareto-core/dist/specials/text_from_list", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                $.specials['unreachable code path']
                                    ? p_.literal.list([
                                        sh.s.import_default(
                                            sh.identifier_raw("p_unreachable_code_path"),
                                            sh.string_literal("pareto-core/dist/specials/unreachable_code_path", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                $.specials['variables']
                                    ? p_.literal.list([
                                        sh.s.import_default(
                                            sh.identifier_raw("p_variables"),
                                            sh.string_literal("pareto-core/dist/specials/variables", 'apostrophe')
                                        )
                                    ])
                                    : p_.literal.list([]),
                                p_.from.dictionary($['type imports']).convert_to_list(
                                    ($, id) => sh.s.import_namespace(
                                        sh.identifier_escaped(join(p_.literal.list(["t ", id]))),
                                        temp_create_file_path(
                                            $,
                                            {
                                                'delimiter': ['quote', null]
                                            }
                                        )
                                    )
                                ),
                                p_.from.dictionary($['variable imports']).convert_to_list(
                                    ($, id) => sh.s.import_namespace(
                                        sh.identifier_escaped(join(p_.literal.list(["v ", id]))),
                                        temp_create_file_path(
                                            $,
                                            {
                                                'delimiter': ['quote', null]
                                            }
                                        )
                                    )
                                ),
                                p_.from.dictionary($.functions).convert_to_list(
                                    ($, id): d_out.Statements.L => sh.s.variable(
                                        true,
                                        true,
                                        sh.identifier_escaped(id),
                                        sh.t.type_reference(
                                            sh.identifier_escaped("t " + $.type.import),
                                            p_.literal.list([
                                                sh.identifier_escaped($.type.type)
                                            ]),
                                            p_.literal.list([])
                                        ),
                                        sh.e.arrow_function_with_expression(
                                            p_.literal.segmented_list([
                                                p_.literal.list([
                                                    sh.parameter(
                                                        sh.identifier_raw("$"), null),
                                                ]),
                                                $['temp has abort']
                                                    ? p_.literal.list([
                                                        sh.parameter(
                                                            sh.identifier_raw("abort"), null),
                                                    ])
                                                    : p_.literal.list([]),
                                                $['temp has lookups']
                                                    ? p_.literal.list([
                                                        sh.parameter(
                                                            sh.identifier_raw("$l"), null),
                                                    ])
                                                    : p_.literal.list([]),
                                                $['temp has parameters']
                                                    ? p_.literal.list([
                                                        sh.parameter(
                                                            sh.identifier_raw("$p"), null),
                                                    ])
                                                    : p_.literal.list([])
                                            ]),
                                            null,
                                            Assign($.expression)
                                        )
                                    )
                                )
                            ])

                            return sh.n.file(y)
                        })
                        case 'set': return p_.option($, ($) => ['directory', Package_Set($, abort)])
                        default: return p_.au($[0])
                    }
                }))
    }

export const Temp_Value_Type_Specification = (
    $: d_in.Temp_Value_Type_Specification,
): d_out.Type => {
    return sh.t.type_reference(
        sh.identifier_escaped("t " + $.type.import),
        //tail
        p_.literal.segmented_list([
            p_.literal.list([
                sh.identifier_escaped($.type.type)
            ]),
            p_.from.list($['sub selection']).flatten(
                ($) => p_.from.state($).decide(
                    ($): p_di.List<d_out.Identifier> => {
                        switch ($[0]) {
                            case 'dictionary': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("D")]))
                            case 'group': return p_.option($, ($) => p_.literal.list([sh.identifier_escaped($)]))
                            case 'list': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("L")]))
                            case 'optional': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("O")]))
                            case 'state': return p_.option($, ($) => p_.literal.list([sh.identifier_escaped($)]))
                            default: return p_.au($[0])
                        }
                    }),
            ),
        ]),
        //type arguments
        p_.literal.list([])
    )
}

export const Assign: p_i.Transformer<
    d_in.Assign,
    d_out.Expression
> = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'decide': return p_.option($, ($) => p_variables(
                () => {
                    const $v_source = $.source
                    return p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'boolean': return p_.option($, ($) => sh.e.conditional(
                                    Select_Value($v_source),
                                    Assign($['if true']),
                                    Assign($['if false']),
                                ))
                                case 'optional': return p_.option($, ($) => sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.identifier_raw("pt"),
                                            sh.identifier_raw("decide"),
                                        ),
                                        sh.identifier_raw("optional"),
                                    ),
                                    p_.literal.list([
                                        Select_Value($v_source),
                                        sh.e.arrow_function_with_expression(
                                            p_.literal.list([
                                                sh.parameter(
                                                    sh.identifier_raw("$"), null)
                                            ]),
                                            p_.from.optional($['temp resulting node']).decide(
                                                ($) => Temp_Value_Type_Specification($),
                                                () => null
                                            ),
                                            Assign($['if set']),

                                        ),
                                        sh.e.arrow_function_with_expression(
                                            p_.literal.list([]),
                                            null,
                                            Assign($['if not set']),

                                        ),
                                    ])
                                ))
                                case 'state': return p_.option($, ($) => sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.identifier_raw("pt"),
                                            sh.identifier_raw("decide"),
                                        ),
                                        sh.identifier_raw("state"),
                                    ),
                                    p_.literal.list([
                                        Select_Value($v_source),
                                        sh.e.arrow_function_with_block(
                                            p_.literal.list([
                                                sh.parameter(
                                                    sh.identifier_raw("$"), null)
                                            ]),
                                            p_.from.optional($['temp resulting node']).decide(
                                                ($) => Temp_Value_Type_Specification($),
                                                () => null
                                            ),
                                            p_.literal.list([
                                                sh.s.switch_(
                                                    sh.e.element_access(
                                                        sh.e.identifier_raw("$"),
                                                        sh.e.number_literal(0)
                                                    ),
                                                    p_.literal.chain(
                                                        p_.from.dictionary(p_.from.state($.type).decide(
                                                            ($): d_in.Assign.decide.type_.state.type_.partial.options => {
                                                                switch ($[0]) {
                                                                    case 'partial': return p_.option($, ($) => $.options)
                                                                    case 'full': return p_.option($, ($) => $.options)
                                                                    case 'single': return p_.option($, ($) => {
                                                                        const temp: { [id: string]: d_in.Assign.decide.type_.state.type_.partial.options.D } = {}
                                                                        temp[$.option] = $['if true']
                                                                        return p_.literal.dictionary(temp)
                                                                    })
                                                                    default: return p_.au($[0])
                                                                }
                                                            })
                                                        ).convert_to_list(
                                                            ($, id) => sh.sw.case_(
                                                                sh.e.string_literal(
                                                                    sh.string_literal(id, 'apostrophe')),
                                                                p_.literal.list([
                                                                    sh.s.return_(
                                                                        sh.e.call(
                                                                            sh.e.property_access(
                                                                                sh.e.identifier_raw("pt"),
                                                                                sh.identifier_raw('ss'),
                                                                            ),
                                                                            p_.literal.list([
                                                                                sh.e.identifier_raw("$"),
                                                                                sh.e.arrow_function_with_expression(
                                                                                    p_.literal.list([
                                                                                        sh.parameter(
                                                                                            sh.identifier_raw("$"), null)
                                                                                    ]),
                                                                                    null,
                                                                                    Assign($)
                                                                                )
                                                                            ])
                                                                        ))
                                                                ])
                                                            )
                                                        ),
                                                        sh.sw.default_(
                                                            p_.literal.list([
                                                                sh.s.return_(p_.from.state($.type).decide(
                                                                    ($) => {
                                                                        switch ($[0]) {
                                                                            case 'partial': return p_.option($, ($) => Assign($.default))
                                                                            case 'full': return p_.option($, ($) => sh.e.call(
                                                                                sh.e.property_access(
                                                                                    sh.e.identifier_raw("pt"),
                                                                                    sh.identifier_raw('au'),
                                                                                ),
                                                                                p_.literal.list([
                                                                                    sh.e.element_access(
                                                                                        sh.e.identifier_raw("$"),
                                                                                        sh.e.number_literal(0)
                                                                                    )
                                                                                ])
                                                                            ))
                                                                            case 'single': return p_.option($, ($) => Assign($['if false']))
                                                                            default: return p_.au($[0])
                                                                        }
                                                                    }))

                                                            ])
                                                        )
                                                    )
                                                )
                                            ])
                                        )
                                    ])
                                ))
                                case 'text': return p_.option($, ($) => sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.identifier_raw("pt"),
                                            sh.identifier_raw("decide"),
                                        ),
                                        sh.identifier_raw("text"),
                                    ),
                                    p_.literal.list([
                                        Select_Value($v_source),
                                        sh.e.arrow_function_with_block(
                                            p_.literal.list([
                                                sh.parameter(
                                                    sh.identifier_raw("$t"), null)
                                            ]),
                                            p_.from.optional($['temp resulting node']).decide(
                                                ($) => Temp_Value_Type_Specification($),
                                                () => null
                                            ),
                                            p_.literal.list([
                                                sh.s.switch_(
                                                    sh.e.identifier_raw("$t"),
                                                    p_.literal.chain(
                                                        p_.from.dictionary($.cases).convert_to_list(
                                                            ($, id) => sh.sw.case_(
                                                                sh.e.string_literal(
                                                                    sh.string_literal(id, 'apostrophe')),
                                                                p_.literal.list([
                                                                    sh.s.return_(Assign($))
                                                                ])
                                                            )),
                                                        sh.sw.default_(
                                                            p_.literal.list([
                                                                sh.s.return_(Assign($.default))
                                                            ])
                                                        )
                                                    )
                                                )
                                            ])

                                        )
                                    ])
                                ))
                                default: return p_.au($[0])
                            }
                        })
                }))
            case 'construct': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'boolean': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'from': return p_.option($, ($) => p_variables(
                                        () => {
                                            const $v_selection = $.selection
                                            return p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'boolean': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'not': return p_.option($, ($) => sh.e.not(Select_Value($v_selection)))
                                                                    case 'copy': return p_.option($, ($) => Select_Value($v_selection))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        case 'dictionary': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'is empty': return p_.option($, ($) => p_implement_me("X1"))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        case 'list': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'is empty': return p_.option($, ($) => p_implement_me("X2"))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        default: return p_.au($[0])
                                                    }
                                                })
                                        }))
                                    case 'literal': return p_.option($, ($) => p_.from.state($).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'false': return p_.option($, ($) => sh.e.false_())
                                                case 'true': return p_.option($, ($) => sh.e.true_())
                                                default: return p_.au($[0])
                                            }
                                        }))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'dictionary': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'literal': return p_.option($, ($) => sh.e.call(
                                        sh.e.property_access(
                                            sh.e.property_access(
                                                sh.e.identifier_raw("pt"),
                                                sh.identifier_raw("dictionary"),
                                            ),
                                            sh.identifier_raw("literal"),
                                        ),
                                        p_.literal.list([
                                            sh.e.object_literal(p_.from.dictionary($).convert_to_list(
                                                ($, id) => sh.object_property(
                                                    id,
                                                    'quoted string literal',
                                                    Assign($),
                                                )))
                                        ])
                                    ))
                                    case 'from': return p_.option($, ($) => p_variables(
                                        () => {
                                            const $v_selection = $.selection
                                            return p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'dictionary': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'filter': return p_.option($, ($) => p_implement_me("X5"))
                                                                    case 'map': return p_.option($, ($) => sh.e.call(
                                                                        sh.e.property_access(
                                                                            sh.e.call(
                                                                                sh.e.property_access(
                                                                                    sh.e.property_access(
                                                                                        sh.e.property_access(
                                                                                            sh.e.identifier_raw("pt"),
                                                                                            sh.identifier_raw("dictionary"),
                                                                                        ),
                                                                                        sh.identifier_raw("from"),
                                                                                    ),
                                                                                    sh.identifier_raw("dictionary"),
                                                                                ),
                                                                                p_.literal.list([
                                                                                    Select_Value($v_selection),
                                                                                ])
                                                                            ),
                                                                            sh.identifier_raw("map"),
                                                                        ),
                                                                        p_.literal.list([
                                                                            sh.e.arrow_function_with_expression(
                                                                                p_.literal.list([
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$"), null),
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("id"), null),
                                                                                ]),
                                                                                null,
                                                                                Assign($['assign entry'])
                                                                            )
                                                                        ])
                                                                    ))
                                                                    case 'resolve': return p_.option($, ($) => sh.e.call(
                                                                        sh.e.property_access(
                                                                            sh.e.call(
                                                                                sh.e.property_access(
                                                                                    sh.e.property_access(
                                                                                        sh.e.property_access(
                                                                                            sh.e.identifier_raw("pt"),
                                                                                            sh.identifier_raw("dictionary"),
                                                                                        ),
                                                                                        sh.identifier_raw("from"),
                                                                                    ),
                                                                                    sh.identifier_raw("dictionary"),
                                                                                ),
                                                                                p_.literal.list([
                                                                                    Select_Value($v_selection),
                                                                                ])
                                                                            ),
                                                                            sh.identifier_raw("resolve_refiner"),
                                                                        ),
                                                                        p_.literal.list([
                                                                            sh.e.arrow_function_with_expression(
                                                                                p_.literal.list([
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$"), null),
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("id"), null),
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$a"), null),
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$c"), null),
                                                                                ]),
                                                                                Temp_Value_Type_Specification($['temp resulting entry node']),
                                                                                Assign($['assign entry'])
                                                                            )
                                                                        ])
                                                                    ))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        case 'list': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'convert': return p_.option($, ($) => p_implement_me("X6"))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        default: return p_.au($[0])
                                                    }
                                                })
                                        }))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'group': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'literal': return p_.option($, ($) => $['have dependencies']
                                        ? p_.from.dictionary($.properties).on_has_entries(
                                            ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.property_access(
                                                        sh.e.property_access(
                                                            sh.e.identifier_raw("pt"),
                                                            sh.identifier_raw("group"),
                                                        ),
                                                        sh.identifier_raw("literal"),
                                                    ),
                                                    sh.identifier_raw("resolve"),
                                                ),
                                                p_.literal.list([
                                                    sh.e.arrow_function_with_block(
                                                        p_.literal.list([]),
                                                        null,
                                                        p_.literal.chain(
                                                            p_.from.dictionary($).convert_to_list(
                                                                ($, id) => sh.s.variable(
                                                                    false,
                                                                    true,
                                                                    sh.identifier_escaped("prop " + id),
                                                                    null,
                                                                    Assign($)
                                                                )),
                                                            sh.s.return_(
                                                                sh.e.object_literal(
                                                                    p_.from.dictionary($).convert_to_list(
                                                                        ($, id) => sh.object_property(
                                                                            id,
                                                                            'apostrophized string literal',
                                                                            sh.e.identifier_escaped("prop " + id)
                                                                        ))
                                                                ))
                                                        )
                                                    )
                                                ])
                                            ),
                                            () => sh.e.null_(),
                                        )
                                        : p_.from.dictionary($.properties).on_has_entries(
                                            ($) => sh.e.object_literal(p_.from.dictionary($).convert_to_list(
                                                ($, id) => sh.object_property(
                                                    id,
                                                    'apostrophized string literal',
                                                    Assign($),
                                                ))),
                                            () => sh.e.null_()
                                        )
                                    )
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'list': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'literal': return p_.option($, ($) => sh.e.call(
                                        sh.e.property_access(
                                            sh.e.property_access(
                                                sh.e.identifier_raw("pt"),
                                                sh.identifier_raw("list"),
                                            ),
                                            sh.identifier_raw("literal"),
                                        ),
                                        p_.literal.list([
                                            sh.e.array_literal(p_.from.list($).map(
                                                ($) => Assign($)))
                                        ])
                                    ))
                                    case 'from': return p_.option($, ($) => p_variables(
                                        () => {
                                            const $v_selection = Select_Value($.selection)
                                            return p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'dictionary': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'convert': return p_.option($, ($) => p_implement_me("X9"))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        case 'list': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'filter': return p_.option($, ($) => p_implement_me("X8"))
                                                                    case 'map': return p_.option($, ($) => sh.e.call(
                                                                        sh.e.property_access(
                                                                            sh.e.call(
                                                                                sh.e.property_access(
                                                                                    sh.e.property_access(
                                                                                        sh.e.property_access(
                                                                                            sh.e.identifier_raw("pt"),
                                                                                            sh.identifier_raw("list"),
                                                                                        ),
                                                                                        sh.identifier_raw("from"),
                                                                                    ),
                                                                                    sh.identifier_raw("list"),
                                                                                ),
                                                                                p_.literal.list([
                                                                                    $v_selection,
                                                                                ])
                                                                            ),
                                                                            sh.identifier_raw("map"),
                                                                        ),
                                                                        p_.literal.list([
                                                                            sh.e.arrow_function_with_expression(
                                                                                p_.literal.list([
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$"), null)
                                                                                ]),
                                                                                null,
                                                                                Assign($['assign item'])
                                                                            )
                                                                        ])
                                                                    ))
                                                                    case 'map with state': return p_.option($, ($) => sh.e.call(
                                                                        sh.e.property_access(
                                                                            sh.e.property_access(
                                                                                sh.e.identifier_raw("pt"),
                                                                                sh.identifier_raw("list"),
                                                                            ),
                                                                            sh.identifier_raw("map_with_state"),
                                                                        ),
                                                                        p_.literal.list([
                                                                            $v_selection,
                                                                            Assign($['initialize state']),
                                                                            sh.e.arrow_function_with_expression(
                                                                                p_.literal.list([
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$"), null)
                                                                                ]),
                                                                                null,
                                                                                Assign($['assign item'])
                                                                            ),
                                                                            sh.e.arrow_function_with_expression(
                                                                                p_.literal.list([
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$"), null),
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("state"), null),
                                                                                ]),
                                                                                null,
                                                                                Assign($['update state'])
                                                                            ),
                                                                            sh.e.arrow_function_with_expression(
                                                                                p_.literal.list([
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$"), null),
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("state"), null),
                                                                                ]),
                                                                                null,
                                                                                Assign($['wrap up'])
                                                                            ),
                                                                        ])
                                                                    ))
                                                                    case 'reduce': return p_.option($, ($) => p_implement_me("X11"))
                                                                    case 'reverse': return p_.option($, ($) => p_implement_me("X12"))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        default: return p_.au($[0])
                                                    }
                                                })
                                        }))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'nothing': return p_.option($, ($) => sh.e.null_())
                        case 'number': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'approximation': return p_.option($, ($) => p_.from.state($).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'literal': return p_.option($, ($) => sh.e.number_literal($))
                                                case 'copy': return p_.option($, ($) => Select_Value($))
                                                default: return p_.au($[0])
                                            }
                                        }))
                                    case 'integer': return p_.option($, ($) => p_.from.state($).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'copy': return p_.option($, ($) => Select_Value($))
                                                case 'divide': return p_.option($, ($) => p_implement_me("X17"))
                                                case 'literal': return p_.option($, ($) => sh.e.number_literal($))
                                                default: return p_.au($[0])
                                            }
                                        }))
                                    case 'natural': return p_.option($, ($) => p_.from.state($).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'copy': return p_.option($, ($) => Select_Value($))
                                                case 'literal': return p_.option($, ($) => sh.e.number_literal($))
                                                case 'number of dictionary entries': return p_.option($, ($) => p_implement_me("X13"))
                                                case 'number of list items': return p_.option($, ($) => p_implement_me("X14"))
                                                case 'source column': return p_.option($, ($) => p_implement_me("X15"))
                                                case 'source line': return p_.option($, ($) => p_implement_me("X16"))
                                                default: return p_.au($[0])
                                            }
                                        }))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'literal': return p_.option($, ($) => p_.from.state($).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'not set': return p_.option($, ($) => sh.e.call(
                                                    sh.e.property_access(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("pt"),
                                                                sh.identifier_raw("optional"),
                                                            ),
                                                            sh.identifier_raw("literal"),
                                                        ),
                                                        sh.identifier_raw("not_set"),
                                                    ),
                                                    p_.literal.list([])
                                                ))
                                                case 'set': return p_.option($, ($) => sh.e.call(
                                                    sh.e.property_access(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("pt"),
                                                                sh.identifier_raw("optional"),
                                                            ),
                                                            sh.identifier_raw("literal"),
                                                        ),
                                                        sh.identifier_raw("set"),
                                                    ),
                                                    p_.literal.list([
                                                        Assign($),
                                                    ])
                                                ))
                                                default: return p_.au($[0])
                                            }
                                        }))
                                    case 'from': return p_.option($, ($) => p_variables(
                                        () => {
                                            const $v_selection = $.selection
                                            return p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'boolean': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'convert': return p_.option($, ($) => p_implement_me("X18"))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'map': return p_.option($, ($) => sh.e.call(
                                                                        sh.e.property_access(
                                                                            sh.e.call(
                                                                                sh.e.property_access(
                                                                                    sh.e.property_access(
                                                                                        sh.e.property_access(
                                                                                            sh.e.identifier_raw("pt"),
                                                                                            sh.identifier_raw("optional"),
                                                                                        ),
                                                                                        sh.identifier_raw("from"),
                                                                                    ),
                                                                                    sh.identifier_raw("optional"),
                                                                                ),
                                                                                p_.literal.list([
                                                                                    Select_Value($v_selection),
                                                                                ])
                                                                            ),
                                                                            sh.identifier_raw("map"),
                                                                        ),
                                                                        p_.literal.list([
                                                                            sh.e.arrow_function_with_expression(
                                                                                p_.literal.list([
                                                                                    sh.parameter(
                                                                                        sh.identifier_raw("$"), null)
                                                                                ]),
                                                                                null,
                                                                                Assign($['assign set'])
                                                                            ),
                                                                        ])
                                                                    ))
                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        default: return p_.au($[0])
                                                    }
                                                })
                                        }))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'state': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'literal': return p_.option($, ($) => sh.e.array_literal(
                                        p_.literal.list([
                                            sh.e.string_literal(
                                                sh.string_literal($.option, 'apostrophe')),
                                            Assign($['assign option'])
                                        ])
                                    ))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'text': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'literal': return p_.option($, ($) => sh.e.string_literal(
                                        sh.string_literal($.value, p_.from.state($.type).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'freeform': return p_.option($, ($) => 'quote')
                                                    case 'identifier': return p_.option($, ($) => 'apostrophe')
                                                    default: return p_.au($[0])
                                                }
                                            }))))
                                    case 'from': return p_.option($, ($) => p_variables(
                                        () => {
                                            const $v_selection = $.selection
                                            return p_.from.state($.type).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'text': return p_.option($, ($) => p_.from.state($).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'copy': return p_.option($, ($) => Select_Value($v_selection))

                                                                    default: return p_.au($[0])
                                                                }
                                                            }))
                                                        default: return p_.au($[0])
                                                    }
                                                })
                                        }))
                                    case 'source document': return p_.option($, ($) => p_implement_me("X20"))
                                    case 'entry id': return p_.option($, ($) => sh.e.identifier_raw("id"))
                                    case 'option name': return p_.option($, ($) => sh.e.identifier_raw("$[0]"))
                                    default: return p_.au($[0])
                                }
                            }))
                        default: return p_.au($[0])
                    }
                }))
            case 'select': return p_.option($, ($) => Select_Value($))
            case 'special': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'assert': return p_.option($, ($) => p_implement_me("X22"))
                        case 'abort': return p_.option($, ($) => sh.e.call(
                            sh.e.identifier_raw("abort"),
                            p_.literal.list([
                                Assign($)
                            ])
                        ))
                        case 'change context': return p_.option($, ($) => sh.e.call(
                            sh.e.identifier_raw("p_change_context"),
                            p_.literal.list([
                                Select_Value($['new context']),
                                sh.e.arrow_function_with_expression(
                                    p_.literal.list([
                                        sh.parameter(
                                            sh.identifier_raw("$"), null)
                                    ]),
                                    null,
                                    Assign($['expression'])
                                )
                            ])
                        ))
                        case 'implement me': return p_.option($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.identifier_raw("_pdev"),
                                sh.identifier_raw("implement_me")
                            ),
                            p_.literal.list([
                                sh.e.string_literal(
                                    sh.string_literal($, 'quote'))
                            ])
                        ))
                        case 'iterate': return p_.option($, ($) => p_implement_me("X23"))
                        case 'unreachable': return p_.option($, ($) => sh.e.call(
                            sh.e.identifier_raw("p_unreachable_code_path"),
                            p_.literal.list([
                                sh.e.string_literal(
                                    sh.string_literal($.explanation, 'quote'))
                            ])
                        ))
                        case 'variables': return p_.option($, ($) => sh.e.call(
                            sh.e.identifier_raw("p_variables"),
                            p_.literal.list([
                                sh.e.arrow_function_with_block(
                                    p_.literal.list([]),
                                    null,
                                    p_.literal.chain(
                                        p_.from.dictionary($.variables).convert_to_list(
                                            ($, id) => sh.s.variable(
                                                false,
                                                true,
                                                sh.identifier_escaped("var " + id),
                                                null,
                                                Assign($)
                                            ),
                                        ),
                                        sh.s.return_(
                                            Assign($.assign)
                                        )
                                    )
                                )
                            ])
                        ))
                        default: return p_.au($[0])
                    }
                }))
            default: return p_.au($[0])
        }
    })

export const reduce = <Item extends p_di.Value, Result_Type extends p_di.Value>(
    $: p_di.List<Item>,
    initial_state: Result_Type,
    update_state: (
        value: Item,
        current: Result_Type
    ) => Result_Type,
): Result_Type => {
    let current_state = initial_state
    p_.from.list($).map(
        ($) => {
            current_state = update_state($, current_state)
            return null
        })
    return current_state
}

export const Select_Value = (
    $: d_in.Select_Value,
): d_out.Expression => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'implement me': return p_.option($, ($) => sh.e.call(
                sh.e.property_access(
                    sh.e.identifier_raw("_pdev"),
                    sh.identifier_raw("implement_me")
                ),
                p_.literal.list([
                    sh.e.string_literal(
                        sh.string_literal($, 'quote'))
                ])
            ))
            case 'regular': return p_.option($, ($) => reduce(
                $.tail,
                p_.from.state($.start).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'call': return p_.option($, ($) => sh.e.call(
                                p_.from.state($.source).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'local': return p_.option($, ($) => sh.e.identifier_escaped($))
                                            case 'imported': return p_.option($, ($) => sh.e.property_access(
                                                sh.e.identifier_escaped(join(p_.literal.list(["v ", $.import]))),
                                                sh.identifier_escaped($.variable)
                                            ))
                                            default: return p_.au($[0])
                                        }
                                    }),
                                p_.literal.segmented_list([
                                    p_.literal.list([
                                        Assign($.context),
                                    ]),
                                    p_.from.optional($.abort).decide(
                                        ($) => p_.literal.list([
                                            sh.e.arrow_function_with_expression(
                                                p_.literal.list([
                                                    sh.parameter(
                                                        sh.identifier_raw("$"), null)
                                                ]),
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    p_.literal.list([
                                                        Assign($)
                                                    ])
                                                )
                                            )
                                        ]),
                                        () => p_.literal.list([])
                                    ),
                                    p_.from.optional($.lookups).decide(
                                        ($) => p_.from.state($).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'initialize': return p_.option($, ($) => p_.from.dictionary($).on_has_entries(
                                                        ($) => p_.literal.list([
                                                            sh.e.object_literal(
                                                                p_.from.dictionary($).convert_to_list(
                                                                    ($, id) => sh.object_property(
                                                                        id,
                                                                        'apostrophized string literal',
                                                                        Select_Lookup($)
                                                                    ))
                                                            )
                                                        ]),
                                                        () => p_.literal.list([
                                                            sh.e.null_(),
                                                        ])
                                                    ))
                                                    case 'pass through': return p_.option($, ($) => p_.literal.list([
                                                        sh.e.identifier_raw("$l")
                                                    ]))
                                                    default: return p_.au($[0])
                                                }
                                            }),
                                        () => p_.literal.list([])
                                    ),
                                    p_.from.optional($.arguments).decide(
                                        ($) => p_.from.state($).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'initialize': return p_.option($, ($) => p_.from.dictionary($).on_has_entries(
                                                        ($) => p_.literal.list([
                                                            sh.e.object_literal(
                                                                p_.from.dictionary($).convert_to_list(
                                                                    ($, id) => sh.object_property(
                                                                        id,
                                                                        'apostrophized string literal',
                                                                        Assign($)
                                                                    ))
                                                            )
                                                        ]),
                                                        () => p_.literal.list([
                                                            sh.e.null_(),
                                                        ]),
                                                    ))
                                                    case 'pass through': return p_.option($, ($) => p_.literal.list([
                                                        sh.e.identifier_raw("$p")
                                                    ]))
                                                    default: return p_.au($[0])
                                                }
                                            }),
                                        () => p_.literal.list([])
                                    ),
                                ]),

                            ))
                            case 'context': return p_.option($, ($) => sh.e.identifier_raw("$"))
                            case 'dictionary entry': return p_.option($, ($) => sh.e.call(
                                sh.e.property_access(
                                    Select_Value($.dictionary),
                                    sh.identifier_raw("__get_entry_deprecated")
                                ),
                                p_.literal.list([
                                    Assign($.id),
                                    sh.e.object_literal(
                                        p_.literal.list([
                                            sh.object_property(
                                                "no_such_entry",
                                                'identifier',
                                                sh.e.arrow_function_with_expression(
                                                    p_.literal.list([
                                                        sh.parameter(
                                                            sh.identifier_raw("$"),
                                                            null,
                                                        )
                                                    ]),
                                                    null,
                                                    sh.e.call(
                                                        sh.e.identifier_raw("abort"),
                                                        p_.literal.list([
                                                            Assign($['no such entry handler'])
                                                        ])
                                                    )
                                                )
                                            )
                                        ])
                                    )
                                ])
                            ))
                            case 'list from text': return p_.option($, ($) => sh.e.call(
                                sh.e.identifier_raw("p_list_from_text"),
                                p_.literal.list([
                                    Select_Value($.source),
                                    sh.e.arrow_function_with_expression(
                                        p_.literal.list([
                                            sh.parameter(
                                                sh.identifier_raw("$"),
                                                null,
                                            )
                                        ]),
                                        null,
                                        Assign($['assign item'])
                                    )
                                ])
                            ))
                            case 'lookup entry': return p_.option($, ($) => sh.e.call(
                                sh.e.property_access(
                                    Select_Lookup($.lookup),
                                    sh.identifier_raw("get_entry")
                                ),
                                p_.literal.list([
                                    Assign($.id),
                                    p_.from.state($.type).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'acyclic': return p_.option($, ($) => sh.e.object_literal(
                                                    p_.literal.list([

                                                        sh.object_property(
                                                            "no_such_entry",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['no such entry'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                        sh.object_property(
                                                            "no_context_lookup",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['no context lookup'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                        sh.object_property(
                                                            "cycle_detected",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['cycle detected'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                    ])
                                                ))
                                                case 'cyclic': return p_.option($, ($) => sh.e.object_literal(
                                                    p_.literal.list([

                                                        sh.object_property(
                                                            "no_such_entry",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['no such entry'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                        sh.object_property(
                                                            "no_context_lookup",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['no context lookup'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                        sh.object_property(
                                                            "accessing_cyclic_sibling_before_it_is_resolved",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['accessing cyclic sibling before it is resolved'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                    ])
                                                ))
                                                case 'stack': return p_.option($, ($) => sh.e.object_literal(
                                                    p_.literal.list([

                                                        sh.object_property(
                                                            "no_such_entry",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['no such entry'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                        sh.object_property(
                                                            "no_context_lookup",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['no context lookup'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                        sh.object_property(
                                                            "cycle_detected",
                                                            'identifier',
                                                            sh.e.arrow_function_with_expression(
                                                                p_.literal.list([]),
                                                                null,
                                                                sh.e.call(
                                                                    sh.e.identifier_raw("abort"),
                                                                    p_.literal.list([
                                                                        Assign($['abort handlers']['cycle detected'])
                                                                    ])
                                                                )
                                                            )
                                                        ),
                                                    ])
                                                ))
                                                default: return p_.au($[0])
                                            }
                                        }),
                                ])
                            ))
                            case 'lookup entry depth': return p_.option($, ($) => sh.e.call(
                                sh.e.property_access(
                                    Select_Lookup($.lookup),
                                    sh.identifier_raw("get_entry_depth")
                                ),
                                p_.literal.list([
                                    Assign($.id),
                                    sh.e.object_literal(
                                        p_.literal.list([
                                            sh.object_property(
                                                "no_such_entry",
                                                'identifier',
                                                sh.e.arrow_function_with_expression(
                                                    p_.literal.list([]),
                                                    null,
                                                    sh.e.call(
                                                        sh.e.identifier_raw("abort"),
                                                        p_.literal.list([
                                                            Assign($['abort handlers']['no such entry'])
                                                        ])
                                                    )
                                                )
                                            ),
                                            sh.object_property(
                                                "no_context_lookup",
                                                'identifier',
                                                sh.e.arrow_function_with_expression(
                                                    p_.literal.list([]),
                                                    null,
                                                    sh.e.call(
                                                        sh.e.identifier_raw("abort"),
                                                        p_.literal.list([
                                                            Assign($['abort handlers']['no context lookup'])
                                                        ])
                                                    )
                                                )
                                            ),
                                            sh.object_property(
                                                "cycle_detected",
                                                'identifier',
                                                sh.e.arrow_function_with_expression(
                                                    p_.literal.list([]),
                                                    null,
                                                    sh.e.call(
                                                        sh.e.identifier_raw("abort"),
                                                        p_.literal.list([
                                                            Assign($['abort handlers']['cycle detected'])
                                                        ])
                                                    )
                                                )
                                            ),
                                        ])
                                    ),
                                ])
                            ))
                            case 'parameter': return p_.option($, ($) => sh.e.element_access(
                                sh.e.identifier_raw("$p"),
                                sh.e.string_literal(
                                    sh.string_literal($, 'apostrophe'))
                            ))
                            case 'parent sibling': return p_.option($, ($) => sh.e.identifier_escaped("parent.prop " + $))
                            case 'sibling': return p_.option($, ($) => sh.e.identifier_escaped("prop " + $))
                            case 'state': return p_.option($, ($) => sh.e.identifier_raw("state"))
                            case 'text from list': return p_.option($, ($) => sh.e.call(
                                sh.e.identifier_raw("p_text_from_list"),
                                p_.literal.list([
                                    Select_Value($.source),
                                    sh.e.arrow_function_with_expression(
                                        p_.literal.list([
                                            sh.parameter(
                                                sh.identifier_raw("$"),
                                                null,
                                            )
                                        ]),
                                        null,
                                        Assign($['assign character'])
                                    )
                                ])
                            ))
                            case 'variable': return p_.option($, ($) => sh.e.identifier_escaped("var " + $))
                            default: return p_.au($[0])
                        }
                    }),
                ($, current_expression) => {
                    return sh.e.element_access(
                        current_expression,
                        sh.e.string_literal(
                            sh.string_literal($, 'apostrophe'))
                    )
                }
            ))
            default: return p_.au($[0])
        }
    })

export const Select_Lookup = (
    $: d_in.Select_Lookup,
): d_out.Expression => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'implement me': return p_.option($, ($) => sh.e.call(
                sh.e.property_access(
                    sh.e.identifier_raw("_pdev"),
                    sh.identifier_raw("implement_me")
                ),
                p_.literal.list([
                    sh.e.string_literal(
                        sh.string_literal($, 'quote'))
                ])
            ))
            case 'acyclic': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'not set': return p_.option($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("p_sl"),
                                    sh.identifier_raw("acyclic")
                                ),
                                sh.identifier_raw("not_set")
                            ),
                            p_.literal.list([])
                        ))
                        case 'siblings': return p_.option($, ($) => sh.e.identifier_raw("$a"))
                        case 'resolved dictionary': return p_.option($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("p_sl"),
                                    sh.identifier_raw("acyclic")
                                ),
                                sh.identifier_raw("from_resolved_dictionary")
                            ),
                            p_.literal.list([
                                Select_Value($)
                            ])
                        ))
                        default: return p_.au($[0])
                    }
                }))
            case 'from parameter': return p_.option($, ($) => sh.e.element_access(
                sh.e.identifier_raw("$l"),
                sh.e.string_literal(
                    sh.string_literal($, 'apostrophe'))
            ))
            case 'stack': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'empty': return p_.option($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("p_sl"),
                                    sh.identifier_raw("stack")
                                ),
                                sh.identifier_raw("empty")
                            ),
                            p_.literal.list([])
                        ))
                        case 'push': return p_.option($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("p_sl"),
                                    sh.identifier_raw("stack")
                                ),
                                sh.identifier_raw("push")
                            ),
                            p_.literal.list([
                                Select_Lookup($.stack),
                                Select_Lookup($.acyclic)
                            ])
                        ))
                        default: return p_.au($[0])
                    }
                }))
            case 'cyclic': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'not set': return p_.option($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("p_sl"),
                                    sh.identifier_raw("cyclic")
                                ),
                                sh.identifier_raw("not_set")
                            ),
                            p_.literal.list([])
                        ))
                        case 'siblings': return p_.option($, ($) => sh.e.identifier_raw("$c"))
                        default: return p_.au($[0])
                    }
                }))

            default: return p_.au($[0])
        }
    })