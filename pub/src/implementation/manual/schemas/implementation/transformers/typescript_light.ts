import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _ps from 'pareto-core/dist/serializer'
import * as _pdev from 'pareto-core-dev'

//data types
import * as d_in from "../../../../../interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_pareto_to_typescript from "../../../../../interface/to_be_generated/pareto_to_typescript"

//shorthands
import * as sh from "../../../../../modules/typescript_light/shorthands/typescript_light"

//dependencies
import { $$ as s_file_name } from "../../../primitives/text/serializers/filename"

const join = ($: _pi.List<string>): string => {
    let out = ""
    $.__for_each(($) => {
        out += $
    })
    return out
}

const s_repeated: _pi.Text_Serializer_With_Parameters<{ 'count': number }> = ($, $p) => _ps.text.deprecated_build(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i.add_snippet($)
    }
})
const s_list_of_texts: _pi.Serializer<_pi.List<string>> = ($) => _ps.text.deprecated_build(($i) => {
    $.__for_each(($) => {
        $i.add_snippet($)
    })
})


const temp_rename = (
    $: d_in.Module_Set,
    abort: _pi.Abort<d_pareto_to_typescript.Error>
): d_in.Module_Set => {
    const renamed: { [id: string]: d_in.Module_Set.D } = {}
    $.__d_map(($, id) => {
        const new_id: string = _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'module': return _p.ss($, ($) => id + `.ts`)
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


export const Module_Set = (
    $: d_in.Module_Set,
    abort: _pi.Abort<d_pareto_to_typescript.Error>
): d_out.Directory => {
    return temp_rename($, abort).__d_map(($, id) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'module': return _p.ss($, ($): d_out.Directory.D => {
                const valid_file_name = ($: string): string => {
                    return s_file_name($)
                }

                const y: d_out.Statements = _p.list.nested_literal_old([
                    [
                        sh.s.import_namespace(
                            sh.identifier_raw(`_p`),
                            `pareto-core/dist/` + _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'serializer': return _p.ss($, ($) => `serializer`)
                                    case 'deserializer': return _p.ss($, ($) => `deserializer`)
                                    case 'transformer': return _p.ss($, ($) => `transformer`)
                                    case 'refiner': return _p.ss($, ($) => `refiner`)
                                    default: return _p.au($[0])
                                }
                            })
                        ),


                    ],
                    _p.list.from_dictionary(
                        $['type imports'],
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped(join(_p.list.literal(["t ", id]))),
                            _p.decide.state($.type, ($): string => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => valid_file_name($))
                                    case 'ancestor': return _p.ss($, ($) => `${s_repeated("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                    case 'sibling': return _p.ss($, ($) => `./${valid_file_name($)}`)
                                    default: return _p.au($[0])
                                }
                            })
                            + s_list_of_texts(
                                $.tail.__l_map(($) => `/${valid_file_name($)}`),
                            )
                        )
                    ),
                    _p.list.from_dictionary(
                        $['variable imports'],
                        ($, id) => sh.s.import_namespace(
                            sh.identifier_escaped(join(_p.list.literal(["v ", id]))),
                            _p.decide.state($.type, ($): string => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => valid_file_name($))
                                    case 'ancestor': return _p.ss($, ($) => `${s_repeated("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                    case 'sibling': return _p.ss($, ($) => `./${valid_file_name($)}`)
                                    default: return _p.au($[0])
                                }
                            })
                            + s_list_of_texts(
                                $.tail.__l_map(($) => `/${valid_file_name($)}`),
                            )
                        )
                    ),
                    _p.list.from_dictionary(
                        $.algorithms,
                        ($, id): d_out.Statements.L => sh.s.variable(
                            true,
                            true,
                            sh.identifier_escaped(id),
                            Type_Reference($.type),
                            sh.e.arrow_function_with_expression(
                                _p.list.nested_literal_old([
                                    [
                                        sh.parameter(sh.identifier_raw("$"), null),
                                    ],
                                    $['temp has parameters']
                                        ? [
                                            sh.parameter(sh.identifier_raw("$p"), null),
                                        ]
                                        : []
                                ]),
                                null,
                                Expression($.expression)
                            )
                        )
                    )
                ])

                return sh.n.file(y)
            })
            case 'set': return _p.ss($, ($) => ['directory', Module_Set($, abort)])
            default: return _p.au($[0])
        }
    }))
}


export const Type_Reference = (
    $: d_in.Type_Reference,
): d_out.Type => {
    return sh.t.type_reference(
        sh.identifier_escaped("t " + $.import),
        _p.list.literal([
            sh.identifier_escaped($.type)
        ]),
        []
    )
}

export const Type_Node_Reference = (
    $: d_in.Type_Node_Reference,
): d_out.Type => {
    return sh.t.type_reference(
        sh.identifier_escaped("t " + $.type.import),
        //tail
        _p.list.nested_literal_old([
            _p.list.literal([
                sh.identifier_escaped($.type.type)
            ]),
            _p.list.flatten(
                $['sub selection'],
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

export const Expression = (
    $: d_in.Expression
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'decide': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'boolean': return _p.ss($, ($) => sh.e.conditional(
                    Selection($.source),
                    Expression($['if true']),
                    Expression($['if false']),
                ))
                case 'optional': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        Selection($.source),
                        sh.identifier_raw("__decide"),
                    ),
                    [
                        sh.e.arrow_function_with_expression(
                            [
                                sh.parameter(sh.identifier_raw("$"), null)
                            ],
                            $['temp resulting node'].__decide(
                                ($) => Type_Node_Reference($),
                                () => null
                            ),
                            Expression($['if set']),

                        ),
                        sh.e.arrow_function_with_expression(
                            [
                            ],
                            null,
                            Expression($['if not set']),

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
                        Selection($.source),
                        sh.e.arrow_function_with_block(
                            [
                                sh.parameter(sh.identifier_raw("$"), null)
                            ],
                            $['temp resulting node'].__decide(
                                ($) => Type_Node_Reference($),
                                () => null
                            ),
                            [
                                sh.s.switch_(
                                    sh.e.element_access(
                                        sh.e.identifier_raw("$"),
                                        sh.e.number_literal(0)
                                    ),
                                    _p.list.nested_literal_old([
                                        _p.decide.state($.type, ($): d_in.Expression.decide.type_.state.type_.partial.cases => {
                                            switch ($[0]) {
                                                case 'partial': return _p.ss($, ($) => $.cases)
                                                case 'full': return _p.ss($, ($) => $.cases)
                                                default: return _p.au($[0])
                                            }
                                        }).__to_list(
                                            ($, id) => sh.sw.case_(
                                                sh.e.string_literal(id, 'apostrophe'),
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
                                                                Expression($)
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
                                                        case 'partial': return _p.ss($, ($) => Expression($.default))
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
                default: return _p.au($[0])
            }
        }))
        case 'initialize': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'boolean': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'false': return _p.ss($, ($) => sh.e.false_())
                                case 'true': return _p.ss($, ($) => sh.e.true_())
                                default: return _p.au($[0])
                            }
                        }))
                        case 'not': return _p.ss($, ($) => sh.e.not(Selection($)))
                        default: return _p.au($[0])
                    }
                }))
                case 'component': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'call': return _p.ss($, ($) => sh.e.call(
                            Selection($.source),
                            _p.list.nested_literal_old([
                                [
                                    Expression($.context),
                                ],
                                $.abort
                                    ? [
                                        sh.e.identifier_raw("abort")
                                    ]
                                    : [],
                                $.arguments.__decide(
                                    ($) => _p.boolean.dictionary_is_empty($)
                                        ? [
                                            sh.e.null_(),
                                        ]
                                        : [
                                            sh.e.object_literal(
                                                $.__d_map(($) => Expression($))
                                            )
                                        ],
                                    () => []
                                )
                            ]),
                        ))
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
                                sh.e.object_literal($.__d_map(($, id) => Expression($)))
                            ]
                        ))
                        case 'map': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                Selection($.source),
                                sh.identifier_raw("__d_map"),
                            ),
                            [
                                sh.e.arrow_function_with_expression(
                                    [
                                        sh.parameter(sh.identifier_raw("$"), null),
                                        sh.parameter(sh.identifier_raw("id"), null),
                                    ],
                                    null,
                                    Expression($['entry handler'])
                                )
                            ]
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'group': return _p.ss($, ($) => $.__get_number_of_entries() === 0
                    ? sh.e.null_()
                    : sh.e.object_literal($.__d_map(($, id) => Expression($)))
                )
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
                                sh.e.array_literal($.__l_map(($) => Expression($)))
                            ]
                        ))
                        case 'map': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                Selection($.source),
                                sh.identifier_raw("__l_map"),
                            ),
                            [
                                sh.e.arrow_function_with_expression(
                                    [
                                        sh.parameter(sh.identifier_raw("$"), null)
                                    ],
                                    null,
                                    Expression($['item handler'])
                                )
                            ]
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'nothing': return _p.ss($, ($) => sh.e.null_())
                case 'number': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'approximation': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'literal': return _p.ss($, ($) => sh.e.number_literal($))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'integer': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'literal': return _p.ss($, ($) => sh.e.number_literal($))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'natural': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'literal': return _p.ss($, ($) => sh.e.number_literal($))
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
                                    sh.e.identifier_raw("_p"),
                                    [
                                        sh.e.string_literal("IMPLEMENT OPTIONAL", 'quote')
                                    ]
                                ))
                                case 'set': return _p.ss($, ($) => sh.e.call(
                                    sh.e.identifier_raw("_p"),
                                    [
                                        sh.e.string_literal("IMPLEMENT OPTIONAL", 'quote')

                                    ]
                                ))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'map': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                Selection($.source),
                                sh.identifier_raw("__o_map"),
                            ),
                            [
                                sh.e.arrow_function_with_expression(
                                    [
                                        sh.parameter(sh.identifier_raw("$"), null)
                                    ],
                                    null,
                                    Expression($['set handler'])
                                ),
                            ]
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => sh.e.array_literal([
                            sh.e.string_literal($.option, 'apostrophe'),
                            Expression($.value)
                        ]))
                        default: return _p.au($[0])
                    }
                }))
                case 'text': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => sh.e.string_literal($.value, _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'freeform': return _p.ss($, ($) => 'quote')
                                case 'identifier': return _p.ss($, ($) => 'apostrophe')
                                default: return _p.au($[0])
                            }
                        })))
                        default: return _p.au($[0])
                    }
                }))
                default: return _p.au($[0])
            }
        }))
        case 'special': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'abort': return _p.ss($, ($) => sh.e.call(
                    sh.e.identifier_raw("abort"),
                    [
                        Expression($)
                    ]
                ))
                case 'block': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("_p"),
                        sh.identifier_raw("block"),
                    ),
                    [
                        Expression($.expression),
                        sh.e.arrow_function_with_expression(
                            [
                                sh.parameter(sh.identifier_raw("$"), null)
                            ],
                            null,
                            Expression($.expression)
                        )
                    ]
                ))
                case 'change context': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("_p"),
                        sh.identifier_raw("deprecated_cc"),
                    ),
                    [
                        Selection($['new context']),
                        sh.e.arrow_function_with_expression(
                            [
                                sh.parameter(sh.identifier_raw("$"), null)
                            ],
                            null,
                            Expression($['expression'])
                        )
                    ]
                ))
                case 'implement me': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("pdev"),
                        sh.identifier_raw("implement_me")
                    ),
                    [
                        sh.e.string_literal($, 'quote')
                    ]
                ))
                case 'selection deprecated': return _p.ss($, ($) => Selection($))
                case 'unreachable': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("_p"),
                        sh.identifier_raw("unreachable_code_path")
                    ),
                    [
                        //sh.e.string_literal("UNREACHABLE", 'quote')
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
    $.__for_each(($) => {
        current_state = update_state($, current_state)
    })
    return current_state
}

export const Selection = (
    $: d_in.Selection,
): d_out.Expression => {
    return reduce(
        $.tail,
        _p.decide.state($.start, ($) => {
            switch ($[0]) {
                case 'implement me': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("_pdev"),
                        sh.identifier_raw("implement_me")
                    ),
                    [
                        sh.e.string_literal($, "apostrophe")
                    ]
                ))
                case 'abort deprecated': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier_raw("_p"),
                        sh.identifier_raw("fixme_abort"),
                    ),
                    [
                        sh.e.string_literal("ABORT SELECTION", "apostrophe")
                    ]
                ))
                case 'argument': return _p.ss($, ($) => sh.e.identifier_raw("FIXME ARGUMENT"))
                case 'call': return _p.ss($, ($) => sh.e.call(
                    Selection($.source),
                    _p.list.nested_literal_old([
                        [
                            Selection($.context),
                        ],
                        $.arguments.__decide(
                            ($) => _p.boolean.dictionary_is_empty($)
                                ? [
                                    sh.e.null_(),
                                ]
                                : [
                                    sh.e.object_literal(
                                        $.__d_map(($) => Expression($))
                                    )
                                ],
                            () => []
                        ),
                    ]),

                ))
                case 'context': return _p.ss($, ($) => sh.e.identifier_raw("$"))
                case 'entry': return _p.ss($, ($) => sh.e.identifier_raw("FIXME_ENTRY"))
                case 'variable': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'local': return _p.ss($, ($) => sh.e.identifier_escaped($))
                        case 'imported': return _p.ss($, ($) => sh.e.property_access(
                            sh.e.identifier_escaped(join(_p.list.literal(["v ", $.import]))),
                            sh.identifier_escaped($.variable)
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'parameter': return _p.ss($, ($) => sh.e.element_access(
                    sh.e.identifier_raw("$p"),
                    sh.e.string_literal($, 'apostrophe')
                ))
                default: return _p.au($[0])
            }
        }),
        ($, current_expression) => {
            return sh.e.element_access(
                current_expression,
                sh.e.string_literal($, 'apostrophe')
            )
        }
    )
}