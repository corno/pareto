import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_variables from 'pareto-core/dist/_p_variables'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

//data types
import * as d_in from "../../../../../interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_function from "../../../../../interface/to_be_generated/pareto_to_typescript"

//shorthands
import * as sh from "../../../../../modules/typescript_light/shorthands/typescript_light"

//dependencies
import { temp_create_file_path } from '../../interface/transformers/typescript'

const join = ($: _pi.List<string>): string => {
    let out = ""
    $.__l_map(($) => {
        out += $
    })
    return out
}

const temp_rename = (
    $: d_in.Package_Set,
    abort: _pi.Abort<d_function.Error>
): d_in.Package_Set => {
    const renamed: { [id: string]: d_in.Package_Set.D } = {}
    $.__d_map(($, id) => {
        const new_id: string = _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'package': return _p.ss($, ($) => id + ".ts")
                case 'set': return _p.ss($, ($) => {
                    const ends_with_ts = ($s: string): boolean => {
                        return false //implement properly later
                    }
                    if (ends_with_ts(id)) {
                        abort(['directory name ending with ts', { 'directory name': id }])
                    }
                    return id
                })
                default: return _p.au($[0])
            }
        })
        renamed[new_id] = $
    })
    return _p.dictionary.literal(renamed)
}


export const Package_Set = (
    $: d_in.Package_Set,
    abort: _pi.Abort<d_function.Error>
): d_out.Directory => {
    return temp_rename($, abort).__d_map(($, id) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'package': return _p.ss($, ($): d_out.Directory.D => {

                const y: d_out.Statements = _p.list.nested_literal_old([
                    [
                        sh.s.import_namespace(
                            sh.identifier_raw("_p"),
                            sh.string_literal("pareto-core/dist/assign", 'apostrophe')
                        ),
                    ],
                    $.specials['change context']
                        ? [sh.s.import_default(
                            sh.identifier_raw("_p_change_context"),
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
                                sh.specifier(sh.identifier_raw("_p_change_context"), null),
                            ],
                            sh.string_literal("pareto-core/dist/iterate", 'apostrophe')
                        )]
                        : [],
                    $.specials['list from text']
                        ? [sh.s.import_default(
                            sh.identifier_raw("_p_list_from_text"),
                            sh.string_literal("pareto-core/dist/_p_list_from_text", 'apostrophe')
                        )]
                        : [],
                    $.specials.lookups
                        ? [sh.s.import_namespace(
                            sh.identifier_raw("_p_sl"),
                            sh.string_literal("pareto-core/dist/select_lookup", 'apostrophe')
                        )]
                        : [],
                    $.specials['text from list']
                        ? [sh.s.import_default(
                            sh.identifier_raw("_p_text_from_list"),
                            sh.string_literal("pareto-core/dist/_p_text_from_list", 'apostrophe')
                        )]
                        : [],
                    $.specials['unreachable code path']
                        ? [sh.s.import_named(
                            [
                                sh.specifier(sh.identifier_raw("_p_unreachable_code_path"), null),
                            ],
                            sh.string_literal("pareto-core/dist/unreachable_code_path", 'apostrophe')
                        )]
                        : [],
                    $.specials['variables']
                        ? [sh.s.import_default(
                            sh.identifier_raw("_p_variables"),
                            sh.string_literal("pareto-core/dist/_p_variables", 'apostrophe')
                        )]
                        : [],
                    _p.list.from.dictionary(
                        $['type imports'],
                    ).convert(
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped(join(_p.list.literal(["t ", id]))),
                            temp_create_file_path($, 'quote')
                        )
                    ),
                    _p.list.from.dictionary(
                        $['variable imports'],
                    ).convert(
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped(join(_p.list.literal(["v ", id]))),
                            temp_create_file_path($, 'quote')
                        )
                    ),
                    _p.list.from.dictionary(
                        $.functions,
                    ).convert(
                        ($, id): d_out.Statements.L => sh.s.variable(
                            true,
                            true,
                            sh.identifier_escaped(id),
                            sh.t.type_reference(
                                sh.identifier_escaped("t " + $.type.import),
                                _p.list.literal([
                                    sh.identifier_escaped($.type.type)
                                ]),
                                []
                            ),
                            sh.e.arrow_function_with_expression(
                                _p.list.nested_literal_old([
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
            case 'set': return _p.ss($, ($) => ['directory', Package_Set($, abort)])
            default: return _p.au($[0])
        }
    }))
}

export const Temp_Value_Type_Specification = (
    $: d_in.Temp_Value_Type_Specification,
): d_out.Type => {
    return sh.t.type_reference(
        sh.identifier_escaped("t " + $.type.import),
        //tail
        _p.list.nested_literal_old([
            _p.list.literal([
                sh.identifier_escaped($.type.type)
            ]),
            _p.list.from.list(
                $['sub selection'],
            ).flatten(
                ($) => _p.decide.state($, ($): _pi.List<d_out.Identifier> => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => _p.list.literal([sh.identifier_raw("D")]))
                        case 'group': return _p.ss($, ($) => _p.list.literal([sh.identifier_escaped($)]))
                        case 'list': return _p.ss($, ($) => _p.list.literal([sh.identifier_raw("L")]))
                        case 'optional': return _p.ss($, ($) => _p.list.literal([sh.identifier_raw("O")]))
                        case 'state': return _p.ss($, ($) => _p.list.literal([sh.identifier_escaped($)]))
                        default: return _p.au($[0])
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
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'decide': return _p.ss($, ($) => _p_variables(() => {
            const selection = Select_Value($.source)
            return _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'boolean': return _p.ss($, ($) => sh.e.conditional(
                        selection,
                        Assign($['if true']),
                        Assign($['if false']),
                    ))
                    case 'optional': return _p.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            sh.e.property_access(
                                sh.e.identifier_raw("_p"),
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
                    case 'state': return _p.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            sh.e.property_access(
                                sh.e.identifier_raw("_p"),
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
                                        _p.list.nested_literal_old([
                                            _p.decide.state($.type, ($): d_in.Assign.decide.type_.state.type_.partial.options => {
                                                switch ($[0]) {
                                                    case 'partial': return _p.ss($, ($) => $.options)
                                                    case 'full': return _p.ss($, ($) => $.options)
                                                    case 'single': return _p.ss($, ($) => {
                                                        const temp: { [id: string]: d_in.Assign.decide.type_.state.type_.partial.options.D } = {}
                                                        temp[$.option] = $['if true']
                                                        return _p.dictionary.literal(temp)
                                                    })
                                                    default: return _p.au($[0])
                                                }
                                            }).__to_list(
                                                ($, id) => sh.sw.case_(
                                                    sh.e.string_literal(sh.string_literal(id, 'apostrophe')),
                                                    [
                                                        sh.s.return_(sh.e.call(
                                                            sh.e.property_access(
                                                                sh.e.identifier_raw("_p"),
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
                                                    sh.s.return_(_p.decide.state($.type, ($) => {
                                                        switch ($[0]) {
                                                            case 'partial': return _p.ss($, ($) => Assign($.default))
                                                            case 'full': return _p.ss($, ($) => sh.e.call(
                                                                sh.e.property_access(
                                                                    sh.e.identifier_raw("_p"),
                                                                    sh.identifier_raw('au'),
                                                                ),
                                                                [
                                                                    sh.e.element_access(
                                                                        sh.e.identifier_raw("$"),
                                                                        sh.e.number_literal(0)
                                                                    )
                                                                ]
                                                            ))
                                                            case 'single': return _p.ss($, ($) => Assign($['if false']))
                                                            default: return _p.au($[0])
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
                    case 'text': return _p.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            sh.e.property_access(
                                sh.e.identifier_raw("_p"),
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
                                        _p.list.nested_literal_old([
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
                    default: return _p.au($[0])
                }
            })
        }))
        case 'construct': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'boolean': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'from': return _p.ss($, ($) => _p_variables(() => {
                            const selection = Select_Value($.selection)
                            return _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'boolean': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'not': return _p.ss($, ($) => sh.e.not(selection))
                                            case 'copy': return _p.ss($, ($) => selection)
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    case 'dictionary': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'is empty': return _p.ss($, ($) => _pdev.implement_me("X1"))
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    case 'list': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'is empty': return _p.ss($, ($) => _pdev.implement_me("X2"))
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        }))
                        case 'literal': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'false': return _p.ss($, ($) => sh.e.false_())
                                case 'true': return _p.ss($, ($) => sh.e.true_())
                                default: return _p.au($[0])
                            }
                        }))
                        default: return _p.au($[0])
                    }
                }))
                case 'dictionary': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("_p"),
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
                        case 'from': return _p.ss($, ($) => _p_variables(() => {
                            const selection = Select_Value($.selection)
                            return _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'dictionary': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'filter': return _p.ss($, ($) => _pdev.implement_me("X5"))
                                            case 'map': return _p.ss($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.property_access(
                                                                    sh.e.identifier_raw("_p"),
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
                                            case 'resolve': return _p.ss($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.property_access(
                                                                    sh.e.identifier_raw("_p"),
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
                                                    sh.identifier_raw("resolve"),
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
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    case 'list': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'convert': return _p.ss($, ($) => _pdev.implement_me("X6"))
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        }))
                        default: return _p.au($[0])
                    }
                }))
                case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => $['have dependencies']
                            ? $.properties.__get_number_of_entries() === 0
                                ? sh.e.null_()
                                : sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.property_access(
                                                sh.e.identifier_raw("_p"),
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
                                            _p.list.nested_literal_old([
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
                        default: return _p.au($[0])
                    }
                }))
                case 'list': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier_raw("_p"),
                                    sh.identifier_raw("list"),
                                ),
                                sh.identifier_raw("literal"),
                            ),
                            [
                                sh.e.array_literal($.__l_map(($) => Assign($)))
                            ]
                        ))
                        case 'from': return _p.ss($, ($) => _p_variables(() => {
                            const selection = Select_Value($.selection)
                            return _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'dictionary': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'convert': return _p.ss($, ($) => _pdev.implement_me("X9"))
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    case 'list': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'filter': return _p.ss($, ($) => _pdev.implement_me("X8"))
                                            case 'map': return _p.ss($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.property_access(
                                                                    sh.e.identifier_raw("_p"),
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
                                            case 'map with state': return _p.ss($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.property_access(
                                                        sh.e.identifier_raw("_p"),
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
                                            case 'reduce': return _p.ss($, ($) => _pdev.implement_me("X11"))
                                            case 'reverse': return _p.ss($, ($) => _pdev.implement_me("X12"))
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        }))
                        default: return _p.au($[0])
                    }
                }))
                case 'nothing': return _p.ss($, ($) => sh.e.null_())
                case 'number': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'approximation': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'literal': return _p.ss($, ($) => sh.e.number_literal($))
                                case 'copy': return _p.ss($, ($) => Select_Value($))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'integer': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'copy': return _p.ss($, ($) => Select_Value($))
                                case 'divide': return _p.ss($, ($) => _pdev.implement_me("X17"))
                                case 'literal': return _p.ss($, ($) => sh.e.number_literal($))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'natural': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'copy': return _p.ss($, ($) => Select_Value($))
                                case 'literal': return _p.ss($, ($) => sh.e.number_literal($))
                                case 'number of dictionary entries': return _p.ss($, ($) => _pdev.implement_me("X13"))
                                case 'number of list items': return _p.ss($, ($) => _pdev.implement_me("X14"))
                                case 'source column': return _p.ss($, ($) => _pdev.implement_me("X15"))
                                case 'source line': return _p.ss($, ($) => _pdev.implement_me("X16"))
                                default: return _p.au($[0])
                            }
                        }))
                        default: return _p.au($[0])
                    }
                }))
                case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'not set': return _p.ss($, ($) => sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.property_access(
                                                sh.e.identifier_raw("_p"),
                                                sh.identifier_raw("optional"),
                                            ),
                                            sh.identifier_raw("literal"),
                                        ),
                                        sh.identifier_raw("not_set"),
                                    ),
                                    [
                                    ]
                                ))
                                case 'set': return _p.ss($, ($) => sh.e.call(
                                    sh.e.property_access(
                                        sh.e.property_access(
                                            sh.e.property_access(
                                                sh.e.identifier_raw("_p"),
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
                                default: return _p.au($[0])
                            }
                        }))
                        case 'from': return _p.ss($, ($) => _p_variables(() => {
                            const selection = Select_Value($.selection)
                            return _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'boolean': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'convert': return _p.ss($, ($) => _pdev.implement_me("X18"))
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'map': return _p.ss($, ($) => sh.e.call(
                                                sh.e.property_access(
                                                    sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.property_access(
                                                                sh.e.property_access(
                                                                    sh.e.identifier_raw("_p"),
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
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        }))
                        default: return _p.au($[0])
                    }
                }))
                case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => sh.e.array_literal([
                            sh.e.string_literal(sh.string_literal($.option, 'apostrophe')),
                            Assign($['assign option'])
                        ]))
                        default: return _p.au($[0])
                    }
                }))
                case 'text': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => sh.e.string_literal(sh.string_literal($.value, _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'freeform': return _p.ss($, ($) => 'quote')
                                case 'identifier': return _p.ss($, ($) => 'apostrophe')
                                default: return _p.au($[0])
                            }
                        }))))
                        case 'from': return _p.ss($, ($) => _p_variables(() => {
                            const selection = Select_Value($.selection)
                            return _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'text': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'copy': return _p.ss($, ($) => selection)

                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        }))
                        case 'source document': return _p.ss($, ($) => _pdev.implement_me("X20"))
                        default: return _p.au($[0])
                    }
                }))
                default: return _p.au($[0])
            }
        }))
        case 'select': return _p.ss($, ($) => Select_Value($))
        case 'special': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'assert': return _p.ss($, ($) => _pdev.implement_me("X22"))
                case 'abort': return _p.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("abort"),
                    [
                        Assign($)
                    ]
                ))
                case 'change context': return _p.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("_p_change_context"),
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
                case 'implement me': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("_pdev"),
                        sh.identifier_raw("implement_me")
                    ),
                    [
                        sh.e.string_literal(sh.string_literal($, 'quote'))
                    ]
                ))
                case 'iterate': return _p.ss($, ($) => _pdev.implement_me("X23"))
                case 'unreachable': return _p.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("_p_unreachable_code_path"),
                    [
                        //sh.e.string_literal("UNREACHABLE", 'quote')
                    ]
                ))
                case 'variables': return _p.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("_p_variables"),
                    [
                        sh.e.arrow_function_with_block(
                            [
                            ],
                            null,
                            _p.list.nested_literal_old([
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
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})

export const reduce = <Item, Result_Type>(
    $: _pi.List<Item>,
    initial_state: Result_Type,
    update_state: (
        value: Item,
        current: Result_Type
    ) => Result_Type,
): Result_Type => {
    let current_state = initial_state
    $.__l_map(($) => {
        current_state = update_state($, current_state)
    })
    return current_state
}

export const Select_Value = (
    $: d_in.Select_Value,
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'implement me': return _p.ss($, ($) => sh.e.call(
            sh.e.property_access(
                sh.e.identifier_raw("_pdev"),
                sh.identifier_raw("implement_me")
            ),
            [
                sh.e.string_literal(sh.string_literal($, 'quote'))
            ]
        ))
        case 'regular': return _p.ss($, ($) => reduce(
            $.tail,
            _p.decide.state($.start, ($) => {
                switch ($[0]) {
                    case 'call': return _p.ss($, ($) => sh.e.call(
                        _p.decide.state($.source, ($) => {
                            switch ($[0]) {
                                case 'local': return _p.ss($, ($) => sh.e.identifier_escaped($))
                                case 'imported': return _p.ss($, ($) => sh.e.property_access(
                                    sh.e.identifier_escaped(join(_p.list.literal(["v ", $.import]))),
                                    sh.identifier_escaped($.variable)
                                ))
                                default: return _p.au($[0])
                            }
                        }),
                        _p.list.nested_literal_old([
                            [
                                Assign($.context),
                            ],
                            $.abort.__decide(
                                ($) => [
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
                                ],
                                () => []
                            ),
                            $.lookups.__decide(
                                ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'initialize': return _p.ss($, ($) => _p.boolean.from.dictionary($).is_empty()
                                            ? [
                                                sh.e.null_(),
                                            ]
                                            : [
                                                sh.e.object_literal(
                                                    $.__to_list(($, id) => sh.object_property(
                                                        id,
                                                        'apostrophized string literal',
                                                        Select_Lookup($)
                                                    ))
                                                )
                                            ])
                                        case 'pass through': return _p.ss($, ($) => [
                                            sh.e.identifier_raw("$l")
                                        ])
                                        default: return _p.au($[0])
                                    }
                                }),
                                () => []
                            ),
                            $.arguments.__decide(
                                ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'initialize': return _p.ss($, ($) => _p.boolean.from.dictionary($).is_empty()
                                            ? [
                                                sh.e.null_(),
                                            ]
                                            : [
                                                sh.e.object_literal(
                                                    $.__to_list(($, id) => sh.object_property(
                                                        id,
                                                        'apostrophized string literal',
                                                        Assign($)
                                                    ))
                                                )
                                            ])
                                        case 'pass through': return _p.ss($, ($) => [
                                            sh.e.identifier_raw("$p")
                                        ])
                                        default: return _p.au($[0])
                                    }
                                }),
                                () => []
                            ),
                        ]),

                    ))
                    case 'context': return _p.ss($, ($) => sh.e.identifier_raw("$"))
                    case 'dictionary entry': return _p.ss($, ($) => sh.e.call(
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
                    case 'list from text': return _p.ss($, ($) => sh.e.call(
                        sh.e.identifier_raw("_p_list_from_text"),
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
                    case 'lookup entry': return _p.ss($, ($) => sh.e.call(
                        sh.e.property_access(
                            Select_Lookup($.lookup),
                            sh.identifier_raw("get_entry")
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
                    case 'lookup entry depth': return _p.ss($, ($) => sh.e.call(
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
                    case 'parameter': return _p.ss($, ($) => sh.e.element_access(
                        sh.e.identifier_raw("$p"),
                        sh.e.string_literal(sh.string_literal($, 'apostrophe'))
                    ))
                    case 'parent sibling': return _p.ss($, ($) => sh.e.identifier_escaped("parent.prop " + $))
                    case 'sibling': return _p.ss($, ($) => sh.e.identifier_escaped("prop " + $))
                    case 'state': return _p.ss($, ($) => sh.e.identifier_raw("state"))
                    case 'text from list': return _p.ss($, ($) => sh.e.call(
                        sh.e.identifier_raw("_p_text_from_list"),
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
                    case 'variable': return _p.ss($, ($) => sh.e.identifier_escaped("var " + $))
                    default: return _p.au($[0])
                }
            }),
            ($, current_expression) => {
                return sh.e.element_access(
                    current_expression,
                    sh.e.string_literal(sh.string_literal($, 'apostrophe'))
                )
            }
        ))
        default: return _p.au($[0])
    }
})

export const Select_Lookup = (
    $: d_in.Select_Lookup,
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'implement me': return _p.ss($, ($) => sh.e.call(
            sh.e.property_access(
                sh.e.identifier_raw("_pdev"),
                sh.identifier_raw("implement_me")
            ),
            [
                sh.e.string_literal(sh.string_literal($, 'quote'))
            ]
        ))
        case 'acyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'not set': return _p.ss($, ($) => sh.e.call(
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
                case 'siblings': return _p.ss($, ($) => sh.e.identifier_raw("$a"))
                case 'resolved dictionary': return _p.ss($, ($) => sh.e.call(
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
                default: return _p.au($[0])
            }
        }))
        case 'from parameter': return _p.ss($, ($) => sh.e.element_access(
            sh.e.identifier_raw("$l"),
            sh.e.string_literal(sh.string_literal($, 'apostrophe'))
        ))
        case 'stack': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'empty': return _p.ss($, ($) => sh.e.call(
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
                case 'push': return _p.ss($, ($) => sh.e.call(
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
                default: return _p.au($[0])
            }
        }))
        case 'cyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'not set': return _p.ss($, ($) => sh.e.call(
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
                case 'siblings': return _p.ss($, ($) => sh.e.identifier_raw("$c"))
                default: return _p.au($[0])
            }
        }))

        default: return _p.au($[0])
    }
})