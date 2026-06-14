import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import p_implement_me from 'pareto-core-dev/dist/implement_me'
import p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import p_variables from 'pareto-core/dist/_p_variables'
import p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out from "../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_function from "../../../../interface/to_be_generated/pareto_to_typescript"

//shorthands
import * as sh from "../../../../modules/typescript_light/shorthands/typescript_light"

//dependencies
import { temp_create_file_path } from '../interface/typescript'

const join = ($: pi.List<string>): string => {
    let out = ""
    $.__l_map(($) => {
        out += $
        return null
    })
    return out
}

const temp_rename = (
    $: d_in.Package_Set,
    abort: pi.Abort<d_function.Error>
): d_in.Package_Set => {
    const renamed: { [id: string]: d_in.Package_Set.D } = {}
    $.__d_map(($, id) => {
        const new_id: string = pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'package': return pt.ss($, ($) => id + ".ts")
                case 'set': return pt.ss($, ($) => {
                    const ends_with_ts = ($s: string): boolean => {
                        return false //implement properly later
                    }
                    if (ends_with_ts(id)) {
                        abort(['directory name ending with ts', { 'directory name': id }])
                    }
                    return id
                })
                default: return pt.au($[0])
            }
        })
        renamed[new_id] = $
        return null
    })
    return pt.dictionary.literal(renamed)
}


export const Package_Set = (
    $: d_in.Package_Set,
    abort: pi.Abort<d_function.Error>
): d_out.Directory => {
    return temp_rename($, abort).__d_map(($, id) => pt.decide.state($, ($) => {
        switch ($[0]) {
            case 'package': return pt.ss($, ($): d_out.Directory.D => {

                const y: d_out.Statements = pt.list.nested_literal_old([
                    [
                        sh.s.import_namespace(
                            sh.identifier_raw("pt"),
                            sh.string_literal("pareto-core/dist/assign", 'apostrophe')
                        ),
                    ],
                    $.specials['change context']
                        ? [sh.s.import_default(
                            sh.identifier_raw("p_change_context"),
                            sh.string_literal("pareto-core/dist/_p_change_context", 'apostrophe')
                        )]
                        : [],
                    $.specials['implement me']
                        ? [sh.s.import_namespace(
                            sh.identifier_raw("_pdev"),
                            sh.string_literal("pareto-core-dev", 'apostrophe')
                        )]
                        : [],
                    $.specials['iterate']
                        ? [sh.s.import_named(
                            [
                                sh.specifier(sh.identifier_raw("p_change_context"), null),
                            ],
                            sh.string_literal("pareto-core/dist/iterate", 'apostrophe')
                        )]
                        : [],
                    $.specials['list from text']
                        ? [sh.s.import_default(
                            sh.identifier_raw("p_list_from_text"),
                            sh.string_literal("pareto-core/dist/_p_list_from_text", 'apostrophe')
                        )]
                        : [],
                    $.specials.lookups
                        ? [sh.s.import_namespace(
                            sh.identifier_raw("_p_sl"),
                            sh.string_literal("pareto-core/dist/select_static_lookup", 'apostrophe')
                        )]
                        : [],
                    $.specials['text from list']
                        ? [sh.s.import_default(
                            sh.identifier_raw("p_text_from_list"),
                            sh.string_literal("pareto-core/dist/_p_text_from_list", 'apostrophe')
                        )]
                        : [],
                    $.specials['unreachable code path']
                        ? [sh.s.import_default(
                            sh.identifier_raw("p_unreachable_code_path"),
                            sh.string_literal("pareto-core/dist/_p_unreachable_code_path", 'apostrophe')
                        )]
                        : [],
                    $.specials['variables']
                        ? [sh.s.import_default(
                            sh.identifier_raw("p_variables"),
                            sh.string_literal("pareto-core/dist/_p_variables", 'apostrophe')
                        )]
                        : [],
                    pt.list.from.dictionary(
                        $['type imports'],
                    ).convert(
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped(join(pt.list.literal(["t ", id]))),
                            temp_create_file_path($, 'quote')
                        )
                    ),
                    pt.list.from.dictionary(
                        $['variable imports'],
                    ).convert(
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped(join(pt.list.literal(["v ", id]))),
                            temp_create_file_path($, 'quote')
                        )
                    ),
                    pt.list.from.dictionary(
                        $.functions,
                    ).convert(
                        ($, id): d_out.Statements.L => sh.s.variable(
                            true,
                            true,
                            sh.identifier_escaped(id),
                            sh.t.type_reference(
                                sh.identifier_escaped("t " + $.type.import),
                                pt.list.literal([
                                    sh.identifier_escaped($.type.type)
                                ]),
                                []
                            ),
                            sh.e.arrow_function_with_expression(
                                pt.list.nested_literal_old([
                                    [
                                        sh.parameter(sh.identifier_raw("$"), null),
                                    ],
                                    $['temp has abort']
                                        ? [
                                            sh.parameter(sh.identifier_raw("abort"), null),
                                        ]
                                        : [],
                                    $['temp has lookups']
                                        ? [
                                            sh.parameter(sh.identifier_raw("$l"), null),
                                        ]
                                        : [],
                                    $['temp has parameters']
                                        ? [
                                            sh.parameter(sh.identifier_raw("$p"), null),
                                        ]
                                        : []
                                ]),
                                null,
                                Assign($.expression)
                            )
                        )
                    )
                ])

                return sh.n.file(y)
            })
            case 'set': return pt.ss($, ($) => ['directory', Package_Set($, abort)])
            default: return pt.au($[0])
        }
    }))
}

export const Temp_Value_Type_Specification = (
    $: d_in.Temp_Value_Type_Specification,
): d_out.Type => {
    return sh.t.type_reference(
        sh.identifier_escaped("t " + $.type.import),
        //tail
        pt.list.nested_literal_old([
            pt.list.literal([
                sh.identifier_escaped($.type.type)
            ]),
            pt.list.from.list(
                $['sub selection'],
            ).flatten(
                ($) => pt.decide.state($, ($): pi.List<d_out.Identifier> => {
                    switch ($[0]) {
                        case 'dictionary': return pt.ss($, ($) => pt.list.literal([sh.identifier_raw("D")]))
                        case 'group': return pt.ss($, ($) => pt.list.literal([sh.identifier_escaped($)]))
                        case 'list': return pt.ss($, ($) => pt.list.literal([sh.identifier_raw("L")]))
                        case 'optional': return pt.ss($, ($) => pt.list.literal([sh.identifier_raw("O")]))
                        case 'state': return pt.ss($, ($) => pt.list.literal([sh.identifier_escaped($)]))
                        default: return pt.au($[0])
                    }
                }),
            ),
        ]),
        //type arguments
        []
    )
}

export const Assign = (
    $: d_in.Assign
): d_out.Expression => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'decide': return pt.ss($, ($) => p_variables(() => {
            const selection = Select_Value($.source)
            return pt.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'boolean': return pt.ss($, ($) => sh.e.conditional(
                        selection,
                        Assign($['if true']),
                        Assign($['if false']),
                    ))
                    case 'optional': return pt.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            sh.e.property_access(
                                sh.e.identifier_raw("pt"),
                                sh.identifier_raw("decide"),
                            ),
                            sh.identifier_raw("optional"),
                        ),
                        [
                            selection,
                            sh.e.arrow_function_with_expression(
                                [
                                    sh.parameter(sh.identifier_raw("$"), null)
                                ],
                                $['temp resulting node'].__decide(
                                    ($) => Temp_Value_Type_Specification($),
                                    () => null
                                ),
                                Assign($['if set']),

                            ),
                            sh.e.arrow_function_with_expression(
                                [
                                ],
                                null,
                                Assign($['if not set']),

                            ),
                        ]
                    ))
                    case 'state': return pt.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            sh.e.property_access(
                                sh.e.identifier_raw("pt"),
                                sh.identifier_raw("decide"),
                            ),
                            sh.identifier_raw("state"),
                        ),
                        [
                            selection,
                            sh.e.arrow_function_with_block(
                                [
                                    sh.parameter(sh.identifier_raw("$"), null)
                                ],
                                $['temp resulting node'].__decide(
                                    ($) => Temp_Value_Type_Specification($),
                                    () => null
                                ),
                                [
                                    sh.s.switch_(
                                        sh.e.element_access(
                                            sh.e.identifier_raw("$"),
                                            sh.e.number_literal(0)
                                        ),
                                        pt.list.nested_literal_old([
                                            pt.decide.state($.type, ($): d_in.Assign.decide.type_.state.type_.partial.options => {
                                                switch ($[0]) {
                                                    case 'partial': return pt.ss($, ($) => $.options)
                                                    case 'full': return pt.ss($, ($) => $.options)
                                                    case 'single': return pt.ss($, ($) => {
                                                        const temp: { [id: string]: d_in.Assign.decide.type_.state.type_.partial.options.D } = {}
                                                        temp[$.option] = $['if true']
                                                        return pt.dictionary.literal(temp)
                                                    })
                                                    default: return pt.au($[0])
                                                }
                                            }).__to_list(
                                                ($, id) => sh.sw.case_(
                                                    sh.e.string_literal(sh.string_literal(id, 'apostrophe')),
                                                    [
                                                        sh.s.return_(sh.e.call(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("pt"),
                                                                sh.identifier_raw('ss'),
                                                            ),
                                                            [
                                                                sh.e.identifier_raw("$"),
                                                                sh.e.arrow_function_with_expression(
                                                                    [
                                                                        sh.parameter(sh.identifier_raw("$"), null)
                                                                    ],
                                                                    null,
                                                                    Assign($)
                                                                )
                                                            ]
                                                        ))
                                                    ]
                                                )
                                            ),
                                            [
                                                sh.sw.default_([
                                                    sh.s.return_(pt.decide.state($.type, ($) => {
                                                        switch ($[0]) {
                                                            case 'partial': return pt.ss($, ($) => Assign($.default))
                                                            case 'full': return pt.ss($, ($) => sh.e.call(
                                                                sh.e.property_access(
                                                                    sh.e.identifier_raw("pt"),
                                                                    sh.identifier_raw('au'),
                                                                ),
                                                                [
                                                                    sh.e.element_access(
                                                                        sh.e.identifier_raw("$"),
                                                                        sh.e.number_literal(0)
                                                                    )
                                                                ]
                                                            ))
                                                            case 'single': return pt.ss($, ($) => Assign($['if false']))
                                                            default: return pt.au($[0])
                                                        }
                                                    }))
                                                ])
                                            ]
                                        ])
                                    )
                                ]

                            )
                        ]
                    ))
                    case 'text': return pt.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            sh.e.property_access(
                                sh.e.identifier_raw("pt"),
                                sh.identifier_raw("decide"),
                            ),
                            sh.identifier_raw("text"),
                        ),
                        [
                            selection,
                            sh.e.arrow_function_with_block(
                                [
                                    sh.parameter(sh.identifier_raw("$t"), null)
                                ],
                                $['temp resulting node'].__decide(
                                    ($) => Temp_Value_Type_Specification($),
                                    () => null
                                ),
                                [
                                    sh.s.switch_(
                                        sh.e.identifier_raw("$t"),
                                        pt.list.nested_literal_old([
                                            $.cases.__to_list(
                                                ($, id) => sh.sw.case_(
                                                    sh.e.string_literal(sh.string_literal(id, 'apostrophe')),
                                                    [
                                                        sh.s.return_(Assign($))
                                                    ]
                                                )
                                            ),

                                            [
                                                sh.sw.default_([
                                                    sh.s.return_(Assign($.default))
                                                ])
                                            ]
                                        ])
                                    )
                                ]

                            )
                        ]
                    ))
                    default: return pt.au($[0])
                }
            })
        }))
        case 'construct': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'boolean': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'from': return pt.ss($, ($) => p_variables(() => {
                            const selection = Select_Value($.selection)
                            return pt.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'boolean': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'not': return pt.ss($, ($) => sh.e.not(selection))
                                            case 'copy': return pt.ss($, ($) => selection)
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    case 'dictionary': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'is empty': return pt.ss($, ($) => p_implement_me("X1"))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    case 'list': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'is empty': return pt.ss($, ($) => p_implement_me("X2"))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    default: return pt.au($[0])
                                }
                            })
                        }))
                        case 'literal': return pt.ss($, ($) => pt.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'false': return pt.ss($, ($) => sh.e.false_())
                                case 'true': return pt.ss($, ($) => sh.e.true_())
                                default: return pt.au($[0])
                            }
                        }))
                        default: return pt.au($[0])
                    }
                }))
                case 'dictionary': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return pt.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("pt"),
                                    sh.identifier_raw("dictionary"),
                                ),
                                sh.identifier_raw("literal"),
                            ),
                            [
                                sh.e.object_literal($.__to_list(($, id) => sh.object_property(
                                    id,
                                    'quoted string literal',
                                    Assign($),
                                )))
                            ]
                        ))
                        case 'from': return pt.ss($, ($) => p_variables(() => {
                            const selection = Select_Value($.selection)
                            return pt.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'dictionary': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'filter': return pt.ss($, ($) => p_implement_me("X5"))
                                            case 'map': return pt.ss($, ($) => sh.e.call(
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
                                                        [
                                                            selection,
                                                        ]
                                                    ),
                                                    sh.identifier_raw("map"),
                                                ),
                                                [
                                                    sh.e.arrow_function_with_expression(
                                                        [
                                                            sh.parameter(sh.identifier_raw("$"), null),
                                                            sh.parameter(sh.identifier_raw("id"), null),
                                                        ],
                                                        null,
                                                        Assign($['assign entry'])
                                                    )
                                                ]
                                            ))
                                            case 'resolve': return pt.ss($, ($) => sh.e.call(
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
                                                        [
                                                            selection,
                                                        ]
                                                    ),
                                                    sh.identifier_raw("resolve_static"),
                                                ),
                                                [
                                                    sh.e.arrow_function_with_expression(
                                                        [
                                                            sh.parameter(sh.identifier_raw("$"), null),
                                                            sh.parameter(sh.identifier_raw("id"), null),
                                                            sh.parameter(sh.identifier_raw("$a"), null),
                                                            sh.parameter(sh.identifier_raw("$c"), null),
                                                        ],
                                                        Temp_Value_Type_Specification($['temp resulting entry node']),
                                                        Assign($['assign entry'])
                                                    )
                                                ]
                                            ))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    case 'list': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'convert': return pt.ss($, ($) => p_implement_me("X6"))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    default: return pt.au($[0])
                                }
                            })
                        }))
                        default: return pt.au($[0])
                    }
                }))
                case 'group': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return pt.ss($, ($) => $['have dependencies']
                            ? $.properties.__get_number_of_entries() === 0
                                ? sh.e.null_()
                                : sh.e.call(
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
                                    [
                                        sh.e.arrow_function_with_block(
                                            [],
                                            null,
                                            pt.list.nested_literal_old([
                                                $.properties.__to_list(($, id) => sh.s.variable(
                                                    false,
                                                    true,
                                                    sh.identifier_escaped("prop " + id),
                                                    null,
                                                    Assign($)
                                                )),
                                                [
                                                    sh.s.return_(sh.e.object_literal(
                                                        $.properties.__to_list(($, id) => sh.object_property(
                                                            id,
                                                            'apostrophized string literal',
                                                            sh.e.identifier_escaped("prop " + id)
                                                        ))
                                                    ))
                                                ]

                                            ])
                                        )
                                    ]
                                )
                            : $.properties.__get_number_of_entries() === 0
                                ? sh.e.null_()
                                : sh.e.object_literal($.properties.__to_list(($, id) => sh.object_property(
                                    id,
                                    'apostrophized string literal',
                                    Assign($),
                                )))
                        )
                        default: return pt.au($[0])
                    }
                }))
                case 'list': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return pt.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("pt"),
                                    sh.identifier_raw("list"),
                                ),
                                sh.identifier_raw("literal"),
                            ),
                            [
                                sh.e.array_literal($.__l_map(($) => Assign($)))
                            ]
                        ))
                        case 'from': return pt.ss($, ($) => p_variables(() => {
                            const selection = Select_Value($.selection)
                            return pt.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'dictionary': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'convert': return pt.ss($, ($) => p_implement_me("X9"))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    case 'list': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'filter': return pt.ss($, ($) => p_implement_me("X8"))
                                            case 'map': return pt.ss($, ($) => sh.e.call(
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
                                                        [
                                                            selection,
                                                        ]
                                                    ),
                                                    sh.identifier_raw("map"),
                                                ),
                                                [
                                                    sh.e.arrow_function_with_expression(
                                                        [
                                                            sh.parameter(sh.identifier_raw("$"), null)
                                                        ],
                                                        null,
                                                        Assign($['assign item'])
                                                    )
                                                ]
                                            ))
                                            case 'map with state': return pt.ss($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.property_access(
                                                        sh.e.identifier_raw("pt"),
                                                        sh.identifier_raw("list"),
                                                    ),
                                                    sh.identifier_raw("map_with_state"),
                                                ),
                                                [
                                                    selection,
                                                    Assign($['initialize state']),
                                                    sh.e.arrow_function_with_expression(
                                                        [
                                                            sh.parameter(sh.identifier_raw("$"), null)
                                                        ],
                                                        null,
                                                        Assign($['assign item'])
                                                    ),
                                                    sh.e.arrow_function_with_expression(
                                                        [
                                                            sh.parameter(sh.identifier_raw("$"), null),
                                                            sh.parameter(sh.identifier_raw("state"), null),
                                                        ],
                                                        null,
                                                        Assign($['update state'])
                                                    ),
                                                    sh.e.arrow_function_with_expression(
                                                        [
                                                            sh.parameter(sh.identifier_raw("$"), null),
                                                            sh.parameter(sh.identifier_raw("state"), null),
                                                        ],
                                                        null,
                                                        Assign($['wrap up'])
                                                    ),
                                                ]
                                            ))
                                            case 'reduce': return pt.ss($, ($) => p_implement_me("X11"))
                                            case 'reverse': return pt.ss($, ($) => p_implement_me("X12"))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    default: return pt.au($[0])
                                }
                            })
                        }))
                        default: return pt.au($[0])
                    }
                }))
                case 'nothing': return pt.ss($, ($) => sh.e.null_())
                case 'number': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'approximation': return pt.ss($, ($) => pt.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'literal': return pt.ss($, ($) => sh.e.number_literal($))
                                case 'copy': return pt.ss($, ($) => Select_Value($))
                                default: return pt.au($[0])
                            }
                        }))
                        case 'integer': return pt.ss($, ($) => pt.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'copy': return pt.ss($, ($) => Select_Value($))
                                case 'divide': return pt.ss($, ($) => p_implement_me("X17"))
                                case 'literal': return pt.ss($, ($) => sh.e.number_literal($))
                                default: return pt.au($[0])
                            }
                        }))
                        case 'natural': return pt.ss($, ($) => pt.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'copy': return pt.ss($, ($) => Select_Value($))
                                case 'literal': return pt.ss($, ($) => sh.e.number_literal($))
                                case 'number of dictionary entries': return pt.ss($, ($) => p_implement_me("X13"))
                                case 'number of list items': return pt.ss($, ($) => p_implement_me("X14"))
                                case 'source column': return pt.ss($, ($) => p_implement_me("X15"))
                                case 'source line': return pt.ss($, ($) => p_implement_me("X16"))
                                default: return pt.au($[0])
                            }
                        }))
                        default: return pt.au($[0])
                    }
                }))
                case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return pt.ss($, ($) => pt.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'not set': return pt.ss($, ($) => sh.e.call(
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
                                    [
                                    ]
                                ))
                                case 'set': return pt.ss($, ($) => sh.e.call(
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
                                    [
                                        Assign($),
                                    ]
                                ))
                                default: return pt.au($[0])
                            }
                        }))
                        case 'from': return pt.ss($, ($) => p_variables(() => {
                            const selection = Select_Value($.selection)
                            return pt.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'boolean': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'convert': return pt.ss($, ($) => p_implement_me("X18"))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'map': return pt.ss($, ($) => sh.e.call(
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
                                                        [
                                                            selection,
                                                        ]
                                                    ),
                                                    sh.identifier_raw("map"),
                                                ),
                                                [
                                                    sh.e.arrow_function_with_expression(
                                                        [
                                                            sh.parameter(sh.identifier_raw("$"), null)
                                                        ],
                                                        null,
                                                        Assign($['assign set'])
                                                    ),
                                                ]
                                            ))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    default: return pt.au($[0])
                                }
                            })
                        }))
                        default: return pt.au($[0])
                    }
                }))
                case 'state': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return pt.ss($, ($) => sh.e.array_literal([
                            sh.e.string_literal(sh.string_literal($.option, 'apostrophe')),
                            Assign($['assign option'])
                        ]))
                        default: return pt.au($[0])
                    }
                }))
                case 'text': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return pt.ss($, ($) => sh.e.string_literal(sh.string_literal($.value, pt.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'freeform': return pt.ss($, ($) => 'quote')
                                case 'identifier': return pt.ss($, ($) => 'apostrophe')
                                default: return pt.au($[0])
                            }
                        }))))
                        case 'from': return pt.ss($, ($) => p_variables(() => {
                            const selection = Select_Value($.selection)
                            return pt.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'text': return pt.ss($, ($) => pt.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'copy': return pt.ss($, ($) => selection)

                                            default: return pt.au($[0])
                                        }
                                    }))
                                    default: return pt.au($[0])
                                }
                            })
                        }))
                        case 'source document': return pt.ss($, ($) => p_implement_me("X20"))
                        case 'entry id': return pt.ss($, ($) => sh.e.identifier_raw("id"))
                        case 'option name': return pt.ss($, ($) => sh.e.identifier_raw("$[0]"))
                        default: return pt.au($[0])
                    }
                }))
                default: return pt.au($[0])
            }
        }))
        case 'select': return pt.ss($, ($) => Select_Value($))
        case 'special': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'assert': return pt.ss($, ($) => p_implement_me("X22"))
                case 'abort': return pt.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("abort"),
                    [
                        Assign($)
                    ]
                ))
                case 'change context': return pt.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("p_change_context"),
                    [
                        Select_Value($['new context']),
                        sh.e.arrow_function_with_expression(
                            [
                                sh.parameter(sh.identifier_raw("$"), null)
                            ],
                            null,
                            Assign($['expression'])
                        )
                    ]
                ))
                case 'implement me': return pt.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("_pdev"),
                        sh.identifier_raw("implement_me")
                    ),
                    [
                        sh.e.string_literal(sh.string_literal($, 'quote'))
                    ]
                ))
                case 'iterate': return pt.ss($, ($) => p_implement_me("X23"))
                case 'unreachable': return pt.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("p_unreachable_code_path"),
                    [
                        sh.e.string_literal(sh.string_literal($.explanation, 'quote'))
                    ]
                ))
                case 'variables': return pt.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("p_variables"),
                    [
                        sh.e.arrow_function_with_block(
                            [
                            ],
                            null,
                            pt.list.nested_literal_old([
                                $.variables.__to_list(
                                    ($, id) => sh.s.variable(
                                        false,
                                        true,
                                        sh.identifier_escaped("var " + id),
                                        null,
                                        Assign($)
                                    ),
                                ),
                                [
                                    sh.s.return_(
                                        Assign($.assign)
                                    )
                                ]

                            ])
                        )
                    ]
                ))
                default: return pt.au($[0])
            }
        }))
        default: return pt.au($[0])
    }
})

export const reduce = <Item extends pi.Value, Result_Type extends pi.Value>(
    $: pi.List<Item>,
    initial_state: Result_Type,
    update_state: (
        value: Item,
        current: Result_Type
    ) => Result_Type,
): Result_Type => {
    let current_state = initial_state
    $.__l_map(($) => {
        current_state = update_state($, current_state)
        return null
    })
    return current_state
}

export const Select_Value = (
    $: d_in.Select_Value,
): d_out.Expression => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'implement me': return pt.ss($, ($) => sh.e.call(
            sh.e.property_access(
                sh.e.identifier_raw("_pdev"),
                sh.identifier_raw("implement_me")
            ),
            [
                sh.e.string_literal(sh.string_literal($, 'quote'))
            ]
        ))
        case 'regular': return pt.ss($, ($) => reduce(
            $.tail,
            pt.decide.state($.start, ($) => {
                switch ($[0]) {
                    case 'call': return pt.ss($, ($) => sh.e.call(
                        pt.decide.state($.source, ($) => {
                            switch ($[0]) {
                                case 'local': return pt.ss($, ($) => sh.e.identifier_escaped($))
                                case 'imported': return pt.ss($, ($) => sh.e.property_access(
                                    sh.e.identifier_escaped(join(pt.list.literal(["v ", $.import]))),
                                    sh.identifier_escaped($.variable)
                                ))
                                default: return pt.au($[0])
                            }
                        }),
                        pt.list.nested_literal_old([
                            [
                                Assign($.context),
                            ],
                            $.abort.__decide(
                                ($) => pt.list.literal([
                                    sh.e.arrow_function_with_expression(
                                        [
                                            sh.parameter(sh.identifier_raw("$"), null)
                                        ],
                                        null,
                                        sh.e.call(
                                            sh.e.identifier_raw("abort"),
                                            [
                                                Assign($)
                                            ]
                                        )
                                    )
                                ]),
                                () => pt.list.literal([])
                            ),
                            $.lookups.__decide(
                                ($) => pt.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'initialize': return pt.ss($, ($) => pt.boolean.from.dictionary($).is_empty()
                                            ? pt.list.literal([
                                                sh.e.null_(),
                                            ])
                                            : pt.list.literal([
                                                sh.e.object_literal(
                                                    $.__to_list(($, id) => sh.object_property(
                                                        id,
                                                        'apostrophized string literal',
                                                        Select_Lookup($)
                                                    ))
                                                )
                                            ]))
                                        case 'pass through': return pt.ss($, ($) => pt.list.literal([
                                            sh.e.identifier_raw("$l")
                                        ]))
                                        default: return pt.au($[0])
                                    }
                                }),
                                () => pt.list.literal([])
                            ),
                            $.arguments.__decide(
                                ($) => pt.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'initialize': return pt.ss($, ($) => pt.boolean.from.dictionary($).is_empty()
                                            ? pt.list.literal([
                                                sh.e.null_(),
                                            ])
                                            : pt.list.literal([
                                                sh.e.object_literal(
                                                    $.__to_list(($, id) => sh.object_property(
                                                        id,
                                                        'apostrophized string literal',
                                                        Assign($)
                                                    ))
                                                )
                                            ]))
                                        case 'pass through': return pt.ss($, ($) => pt.list.literal([
                                            sh.e.identifier_raw("$p")
                                        ]))
                                        default: return pt.au($[0])
                                    }
                                }),
                                () => pt.list.literal([])
                            ),
                        ]),

                    ))
                    case 'context': return pt.ss($, ($) => sh.e.identifier_raw("$"))
                    case 'dictionary entry': return pt.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            Select_Value($.dictionary),
                            sh.identifier_raw("__get_entry_deprecated")
                        ),
                        [
                            Assign($.id),
                            sh.e.object_literal([
                                sh.object_property(
                                    "no_such_entry",
                                    'identifier',
                                    sh.e.arrow_function_with_expression(
                                        [
                                            sh.parameter(
                                                sh.identifier_raw("$"),
                                                null,
                                            )
                                        ],
                                        null,
                                        sh.e.call(
                                            sh.e.identifier_raw("abort"),
                                            [
                                                Assign($['no such entry handler'])
                                            ]
                                        )
                                    )
                                )
                            ])
                        ]
                    ))
                    case 'list from text': return pt.ss($, ($) => sh.e.call(
                        sh.e.identifier_raw("p_list_from_text"),
                        [
                            Select_Value($.source),
                            sh.e.arrow_function_with_expression(
                                [
                                    sh.parameter(
                                        sh.identifier_raw("$"),
                                        null,
                                    )
                                ],
                                null,
                                Assign($['assign item'])
                            )
                        ]
                    ))
                    case 'lookup entry': return pt.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            Select_Lookup($.lookup),
                            sh.identifier_raw("get_entry")
                        ),
                        [
                            Assign($.id),
                            pt.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'acyclic': return pt.ss($, ($) => sh.e.object_literal([

                                        sh.object_property(
                                            "no_such_entry",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['no such entry'])
                                                    ]
                                                )
                                            )
                                        ),
                                        sh.object_property(
                                            "no_context_lookup",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['no context lookup'])
                                                    ]
                                                )
                                            )
                                        ),
                                        sh.object_property(
                                            "cycle_detected",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['cycle detected'])
                                                    ]
                                                )
                                            )
                                        ),
                                    ]))
                                    case 'cyclic': return pt.ss($, ($) => sh.e.object_literal([

                                        sh.object_property(
                                            "no_such_entry",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['no such entry'])
                                                    ]
                                                )
                                            )
                                        ),
                                        sh.object_property(
                                            "no_context_lookup",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['no context lookup'])
                                                    ]
                                                )
                                            )
                                        ),
                                        sh.object_property(
                                            "accessing_cyclic_sibling_before_it_is_resolved",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['accessing cyclic sibling before it is resolved'])
                                                    ]
                                                )
                                            )
                                        ),
                                    ]))
                                    case 'stack': return pt.ss($, ($) => sh.e.object_literal([

                                        sh.object_property(
                                            "no_such_entry",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['no such entry'])
                                                    ]
                                                )
                                            )
                                        ),
                                        sh.object_property(
                                            "no_context_lookup",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['no context lookup'])
                                                    ]
                                                )
                                            )
                                        ),
                                        sh.object_property(
                                            "cycle_detected",
                                            'identifier',
                                            sh.e.arrow_function_with_expression(
                                                [],
                                                null,
                                                sh.e.call(
                                                    sh.e.identifier_raw("abort"),
                                                    [
                                                        Assign($['abort handlers']['cycle detected'])
                                                    ]
                                                )
                                            )
                                        ),
                                    ]))
                                    default: return pt.au($[0])
                                }
                            }),
                        ]
                    ))
                    case 'lookup entry depth': return pt.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            Select_Lookup($.lookup),
                            sh.identifier_raw("get_entry_depth")
                        ),
                        [
                            Assign($.id),
                            sh.e.object_literal([
                                sh.object_property(
                                    "no_such_entry",
                                    'identifier',
                                    sh.e.arrow_function_with_expression(
                                        [],
                                        null,
                                        sh.e.call(
                                            sh.e.identifier_raw("abort"),
                                            [
                                                Assign($['abort handlers']['no such entry'])
                                            ]
                                        )
                                    )
                                ),
                                sh.object_property(
                                    "no_context_lookup",
                                    'identifier',
                                    sh.e.arrow_function_with_expression(
                                        [],
                                        null,
                                        sh.e.call(
                                            sh.e.identifier_raw("abort"),
                                            [
                                                Assign($['abort handlers']['no context lookup'])
                                            ]
                                        )
                                    )
                                ),
                                sh.object_property(
                                    "cycle_detected",
                                    'identifier',
                                    sh.e.arrow_function_with_expression(
                                        [],
                                        null,
                                        sh.e.call(
                                            sh.e.identifier_raw("abort"),
                                            [
                                                Assign($['abort handlers']['cycle detected'])
                                            ]
                                        )
                                    )
                                ),
                            ]),
                        ]
                    ))
                    case 'parameter': return pt.ss($, ($) => sh.e.element_access(
                        sh.e.identifier_raw("$p"),
                        sh.e.string_literal(sh.string_literal($, 'apostrophe'))
                    ))
                    case 'parent sibling': return pt.ss($, ($) => sh.e.identifier_escaped("parent.prop " + $))
                    case 'sibling': return pt.ss($, ($) => sh.e.identifier_escaped("prop " + $))
                    case 'state': return pt.ss($, ($) => sh.e.identifier_raw("state"))
                    case 'text from list': return pt.ss($, ($) => sh.e.call(
                        sh.e.identifier_raw("p_text_from_list"),
                        [
                            Select_Value($.source),
                            sh.e.arrow_function_with_expression(
                                [
                                    sh.parameter(
                                        sh.identifier_raw("$"),
                                        null,
                                    )
                                ],
                                null,
                                Assign($['assign character'])
                            )
                        ]
                    ))
                    case 'variable': return pt.ss($, ($) => sh.e.identifier_escaped("var " + $))
                    default: return pt.au($[0])
                }
            }),
            ($, current_expression) => {
                return sh.e.element_access(
                    current_expression,
                    sh.e.string_literal(sh.string_literal($, 'apostrophe'))
                )
            }
        ))
        default: return pt.au($[0])
    }
})

export const Select_Lookup = (
    $: d_in.Select_Lookup,
): d_out.Expression => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'implement me': return pt.ss($, ($) => sh.e.call(
            sh.e.property_access(
                sh.e.identifier_raw("_pdev"),
                sh.identifier_raw("implement_me")
            ),
            [
                sh.e.string_literal(sh.string_literal($, 'quote'))
            ]
        ))
        case 'acyclic': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'not set': return pt.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.property_access(
                            sh.e.identifier_raw("_p_sl"),
                            sh.identifier_raw("acyclic")
                        ),
                        sh.identifier_raw("not_set")
                    ),
                    [
                    ]
                ))
                case 'siblings': return pt.ss($, ($) => sh.e.identifier_raw("$a"))
                case 'resolved dictionary': return pt.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.property_access(
                            sh.e.identifier_raw("_p_sl"),
                            sh.identifier_raw("acyclic")
                        ),
                        sh.identifier_raw("from_resolved_dictionary")
                    ),
                    [
                        Select_Value($)
                    ]
                ))
                default: return pt.au($[0])
            }
        }))
        case 'from parameter': return pt.ss($, ($) => sh.e.element_access(
            sh.e.identifier_raw("$l"),
            sh.e.string_literal(sh.string_literal($, 'apostrophe'))
        ))
        case 'stack': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'empty': return pt.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.property_access(
                            sh.e.identifier_raw("_p_sl"),
                            sh.identifier_raw("stack")
                        ),
                        sh.identifier_raw("empty")
                    ),
                    [
                    ]
                ))
                case 'push': return pt.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.property_access(
                            sh.e.identifier_raw("_p_sl"),
                            sh.identifier_raw("stack")
                        ),
                        sh.identifier_raw("push")
                    ),
                    [
                        Select_Lookup($.stack),
                        Select_Lookup($.acyclic)
                    ]
                ))
                default: return pt.au($[0])
            }
        }))
        case 'cyclic': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'not set': return pt.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.property_access(
                            sh.e.identifier_raw("_p_sl"),
                            sh.identifier_raw("cyclic")
                        ),
                        sh.identifier_raw("not_set")
                    ),
                    [
                    ]
                ))
                case 'siblings': return pt.ss($, ($) => sh.e.identifier_raw("$c"))
                default: return pt.au($[0])
            }
        }))

        default: return pt.au($[0])
    }
})