import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _ps from 'pareto-core/dist/serializer'
import * as _pdev from 'pareto-core-dev'

//data types
import * as d_in from "../../../../../interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_fp_block from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
import * as d_pareto_to_typescript from "../../../../../interface/to_be_generated/pareto_to_typescript"

//shorthands
import * as sh from "../../../../../modules/typescript_light/shorthands/typescript_light"

//dependencies
import * as t_tl_2_fp from "../../../../../modules/typescript_light/implementation/manual/schemas/typescript_light/transformers/fountain_pen_block"
import { $$ as s_apostrophed } from "../../../../../modules/typescript_light/implementation/manual/primitives/text/serializers/apostrophed_string"
import { $$ as s_quoted } from "../../../../../modules/typescript_light/implementation/manual/primitives/text/serializers/quoted_string"
import { $$ as s_backticked } from "../../../../../modules/typescript_light/implementation/manual/primitives/text/serializers/backticked_string"

import { $$ as s_file_name } from "../../../primitives/text/serializers/filename"

import { $$ as s_identifier } from "../../../../../modules/typescript_light/implementation/manual/primitives/text/serializers/identifier"
import { $$ as s_number_default } from "../../../../../modules/typescript_light/implementation/manual/primitives/approximate_number/serializers/default"

namespace fp_to_temp_fp {

    export const Block = ($: d_fp_block.Block): d_out.Block => $.__l_map(($) => Block_Part($))

    export const Block_Part = ($: d_fp_block.Block_Part_): d_out.Block_Part_ => _p.decide.state($, ($): d_out.Block_Part_ => {
        switch ($[0]) {
            case 'snippet': return _p.ss($, ($) => ['snippet', $])
            case 'indent': return _p.ss($, ($) => ['indent', Group($)])
            case 'sub block': return _p.ss($, ($) => ['sub block', $.__l_map(($) => Block_Part($))])
            case 'optional': return _p.ss($, ($) => ['optional', $.__o_map(($) => Block_Part($))])
            case 'nothing': return _p.ss($, ($) => ['nothing', null])
            case 'rich list': return _p.ss($, ($) => _pdev.implement_me("RL"))
            default: return _p.au($[0])
        }
    })

    export const Group = ($: d_fp_block.Group): d_out.Group => $.__l_map(($) => Group_Part($))

    export const Group_Part = ($: d_fp_block.Group_Part_): d_out.Group_Part_ => _p.decide.state($, ($): d_out.Group_Part_ => {
        switch ($[0]) {
            case 'block': return _p.ss($, ($) => ['block', $])
            case 'nested block': return _p.ss($, ($) => ['nested block', Block($)])
            case 'sub group': return _p.ss($, ($) => ['sub group', Group($)])
            case 'optional': return _p.ss($, ($) => ['optional', $.__o_map(($) => Group_Part($))])
            case 'nothing': return _p.ss($, ($) => ['nothing', null])
            case 'rich list': return _p.ss($, ($) => _pdev.implement_me("RL"))
            default: return _p.au($[0])
        }
    })


}


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


export const temp_fp_line_list = (
    $: _pi.List<d_out.Block_Part_>,
    if_empty: d_out.Block_Part_,
    prefix: d_out.Block_Part_,
    suffix: d_out.Block_Part_,
    add_commas: boolean
): d_out.Block_Part_ => {

    if ($.__get_number_of_elements() === 0) {
        return if_empty
    } else {
        let is_first = true
        const x: d_out.Block_Part_ = sh.b.sub([
            prefix,
            sh.b.sub($.__l_map(($): d_out.Block_Part_ => {

                const out = sh.b.sub([
                    is_first ?
                        sh.b.nothing()
                        : add_commas
                            ? sh.b.snippet(", ")
                            : sh.b.nothing()
                    ,
                    $,
                ])
                is_first = false
                return out
            })),
            suffix,
        ])
        return x
    }

}

const temp_rename = (
    $: d_in.Module_Set,
    abort: _pi.Abort<d_pareto_to_typescript.Error>
): d_in.Module_Set => {
    const renamed: { [key: string]: d_in.Module_Set.D } = {}
    $.__d_map(($, key) => {
        const new_key: string = _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'module': return _p.ss($, ($) => key + `.ts`)
                case 'set': return _p.ss($, ($) => {
                    const ends_with_ts = ($s: string): boolean => {
                        return false //implement properly later
                    }
                    if (ends_with_ts(key)) {
                        abort(['directory name ending with ts', { 'directory name': key }])
                    }
                    return key
                })
                default: return _p.au($[0])
            }
        })
        renamed[new_key] = $
    })
    return _p.dictionary.literal(renamed)
}


export const Module_Set = (
    $: d_in.Module_Set,
    abort: _pi.Abort<d_pareto_to_typescript.Error>
    // $p: {
    //     // 'phase': 'development' | 'production',
    //     // 'algorithm type': 
    //     // | ['tranformer', null]
    //     // | ['refiner', null]
    //     // | ['serializer', null]
    //     // | ['deserializer', null]
    // }
): d_out.Directory => {
    return temp_rename($, abort).__d_map(($, key) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'module': return _p.ss($, ($): d_out.Directory.D => {
                const valid_file_name = ($: string): string => {
                    return s_file_name($)
                }

                const y: d_out.Statements = _p.list.nested_literal_old([
                    [
                        sh.s.import_namespace(
                            ` p`,
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
                    // $p.phase === 'development'
                    //     ? [
                    //         sh.s.import_namespace(
                    //             ` pdev`,
                    //             `pareto-core-dev`
                    //         )
                    //     ]
                    //     : undefined,
                    _p.list.from_dictionary(
                        $['type imports'],
                        ($, key) => sh.s.import_namespace(
                            join(_p.list.literal(["t ", key])),
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
                        ($, key) => sh.s.import_namespace(
                            join(_p.list.literal(["v ", key])),
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
                        ($, key): d_out.Statements.L => sh.s.variable(
                            true,
                            true,
                            key,
                            Type_Reference($.type),
                            sh.e.arrow_function_with_expression(
                                _p.list.nested_literal_old([
                                    [
                                        sh.parameter("$", null),
                                    ],
                                    $['temp has parameters']
                                        ? [
                                            sh.parameter("$p", null),
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




export const Identifier = (
    $: _pi.List<string>
): string => {
    return s_list_of_texts($)
}

export const Type_Reference = (
    $: d_in.Type_Reference,
): d_out.Type => {
    return sh.t.type_reference(
        Identifier(_p.list.literal(["t ", $.import])),
        _p.list.literal([
            Identifier(_p.list.literal([$.type]))
        ]),
        []
    )
}

export const Type_Node_Reference = (
    $: d_in.Type_Node_Reference,
): d_out.Type => {
    return sh.t.type_reference(
        Identifier(_p.list.literal(["t ", $.type.import])),
        //tail
        _p.list.nested_literal_old<string>([
            _p.list.literal([
                Identifier(_p.list.literal([$.type.type]))
            ]),
            _p.list.flatten(
                $['sub selection'],
                ($) => _p.decide.state($, ($): _pi.List<string> => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => _p.list.literal(["D"]))
                        case 'group': return _p.ss($, ($) => _p.list.literal([$]))
                        case 'list': return _p.ss($, ($) => _p.list.literal(["L"]))
                        case 'optional': return _p.ss($, ($) => _p.list.literal(["O"]))
                        case 'state': return _p.ss($, ($) => _p.list.literal([$]))
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
                    Selection($.source),
                    [
                        sh.e.arrow_function_with_expression(
                            [
                                sh.parameter(sh.identifier("$", 'raw'), null)
                            ],
                            null,
                            Expression($['if set']),

                        ),
                        sh.e.arrow_function_with_expression(
                            [
                            ],
                            null,
                            Expression($['if set']),

                        ),
                    ]
                ))
                case 'state': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.property_access(
                            sh.e.identifier("_p", 'raw'),
                            "decide",
                            'raw'
                        ),
                        "state",
                        'raw'
                    ),
                    [
                        Selection($.source),
                        sh.e.arrow_function_with_block(
                            [
                                sh.parameter("$", null)
                            ],
                            $['temp resulting node'].__decide(
                                ($) => Type_Node_Reference($),
                                () => null
                            ),
                            [
                                sh.s.switch_(
                                    sh.e.element_access(
                                        sh.e.identifier("$", 'raw'),
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
                                            ($, key) => sh.sw.case_(
                                                sh.e.string_literal(key, 'apostrophe'),
                                                [
                                                    sh.s.return_(sh.e.call(
                                                        sh.e.property_access(
                                                            sh.e.identifier("_p", 'raw'),
                                                            'ss',
                                                            'raw'
                                                        ),
                                                        [
                                                            sh.e.identifier("$", 'raw'),
                                                            sh.e.arrow_function_with_expression(
                                                                [
                                                                    sh.parameter("$", null)
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
                                                                sh.e.identifier("_p", 'raw'),
                                                                'au',
                                                                'raw'
                                                            ),
                                                            [
                                                                sh.e.element_access(
                                                                    sh.e.identifier("$", 'raw'),
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
                                        sh.e.identifier("abort", 'raw')
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
                                    sh.e.identifier("_p", 'raw'),
                                    "dictionary",
                                    'raw'
                                ),
                                "literal",
                                'raw'
                            ),
                            [
                                sh.e.object_literal($.__d_map(($, key) => Expression($)))
                            ]
                        ))
                        case 'map': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                Selection($.source),
                                "__d_map",
                                'raw'
                            ),
                            [
                                sh.e.arrow_function_with_expression(
                                    [
                                        sh.parameter(sh.identifier("$", 'raw'), null),
                                        sh.parameter(sh.identifier("key", 'raw'), null),
                                    ],
                                    null,
                                    Expression($['entry handler'])
                                )
                            ]
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'group': return _p.ss($, ($) => sh.e.object_literal($.__d_map(($, key) => Expression($))))
                case 'list': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'literal': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                sh.e.property_access(
                                    sh.e.identifier("_p", 'raw'),
                                    "list",
                                    'raw'
                                ),
                                "literal",
                                'raw'
                            ),
                            [
                                sh.e.array_literal($.__l_map(($) => Expression($)))
                            ]
                        ))
                        case 'map': return _p.ss($, ($) => sh.e.call(
                            sh.e.property_access(
                                Selection($.source),
                                "__l_map",
                                'raw'
                            ),
                            [
                                sh.e.arrow_function_with_expression(
                                    [
                                        sh.parameter(sh.identifier("$", 'raw'), null)
                                    ],
                                    null,
                                    Expression($['element handler'])
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
                                    sh.e.identifier("_p", 'raw'),
                                    [
                                        sh.e.string_literal("IMPLEMENT OPTIONAL", 'quote')
                                    ]
                                ))
                                case 'set': return _p.ss($, ($) => sh.e.call(
                                    sh.e.identifier("_p", 'raw'),
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
                                "__o_map",
                                'raw'
                            ),
                            [
                                sh.e.arrow_function_with_expression(
                                    [
                                        sh.parameter(sh.identifier("$", 'raw'), null)
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
                        case 'literal': return _p.ss($, ($) => sh.e.string_literal($.value, _p.decide.state($.delimiter, ($) => {
                            switch ($[0]) {
                                case 'quote': return _p.ss($, ($) => 'quote')
                                case 'backtick': return _p.ss($, ($) => 'quote')
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
                    sh.e.identifier("abort", 'raw'),
                    [
                        Expression($)
                    ]
                ))
                case 'block': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier("_p", 'raw'),
                        "block",
                        'raw'
                    ),
                    [
                        Expression($.expression),
                        sh.e.arrow_function_with_expression(
                            [
                                sh.parameter(sh.identifier("$", 'raw'), null)
                            ],
                            null,
                            Expression($.expression)
                        )
                    ]
                ))
                case 'change context': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier("_p", 'raw'),
                        "deprecated_cc",
                        'raw'
                    ),
                    [
                        Selection($['new context']),
                        sh.e.arrow_function_with_expression(
                            [
                                sh.parameter(sh.identifier("$", 'raw'), null)
                            ],
                            null,
                            Expression($['expression'])
                        )
                    ]
                ))
                // case 'deprecated function': return _p.ss($, ($) => sh.e.string_literal("IMPLEMENT DEPRECATED FUNCTION", 'quote'))
                case 'implement me': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier("pdev", 'raw'),
                        "implement_me",
                        'raw'
                    ),
                    [
                        sh.e.string_literal("FIXME IMPLEMENTME", 'quote')
                    ]
                ))
                case 'selection deprecated': return _p.ss($, ($) => Selection($))
                case 'unreachable': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier("_p", 'raw'),
                        "unreachable_code_path",
                        'raw'
                    ),
                    [
                        sh.e.string_literal("UNREACHABLE", 'quote')
                    ]
                ))
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})

// export const Expression_old = (
//     $: d_in.Expression
// ): d_out.Block_Part_ => {
//     const String_Literal = (
//         $: string,
//         $p: {
//             'delimiter': "quote" | "apostrophe"
//         }
//     ): d_out.Block_Part_ => {
//         return sh.b.snippet($p.delimiter === "quote" ? s_quoted($) : s_apostrophed($))
//     }
//     return _p.decide.state($, ($) => {
//         switch ($[0]) {

//             case 'decide': return _p.ss($, ($) => {
//                 return sh.b.sub([
//                     _p.decide.state($.type, ($) => {
//                         switch ($[0]) {
//                             case 'boolean': return _p.ss($, ($) => sh.b.sub([
//                                 Selection_Old($.source),
//                                 sh.b.indent([
//                                     sh.g.nested_block([
//                                         sh.b.snippet("? "),
//                                         Expression_old($['if true']),
//                                     ]),
//                                     sh.g.nested_block([
//                                         sh.b.snippet(": "),
//                                         Expression_old($['if false']),
//                                     ]),
//                                 ])
//                             ]))

//                             case 'optional': return _p.ss($, ($) => sh.b.sub([
//                                 Selection_Old($.source),
//                                 sh.b.snippet(".__decide("),
//                                 sh.b.indent([
//                                     sh.g.nested_block([
//                                         sh.b.snippet("($)"),
//                                         $['temp resulting node'].__decide(
//                                             ($) => sh.b.sub([
//                                                 sh.b.snippet(": "),
//                                                 fp_to_temp_fp.Block_Part(t_tl_2_fp.Type(
//                                                     Type_Node_Reference($,),
//                                                     {
//                                                         'replace empty type literals by null': true
//                                                     }
//                                                 )),
//                                             ]),
//                                             () => sh.b.nothing()
//                                         ),
//                                         sh.b.snippet(" => "),
//                                         Expression_old($['if set']),
//                                         sh.b.snippet(","),
//                                     ]),
//                                     sh.g.nested_block([
//                                         sh.b.snippet("() => "),
//                                         Expression_old($['if not set']),
//                                     ]),
//                                 ]),
//                                 sh.b.snippet(")"),
//                             ]))

//                             case 'state': return _p.ss($, ($) => sh.b.sub([
//                                 sh.b.snippet("_p.deprecated_cc("),
//                                 Selection_Old($.source),
//                                 sh.b.snippet(", ($)"),
//                                 $['temp resulting node'].__decide(
//                                     ($) => sh.b.sub([
//                                         sh.b.snippet(": "),
//                                         fp_to_temp_fp.Block_Part(t_tl_2_fp.Type(
//                                             Type_Node_Reference($,),
//                                             {
//                                                 'replace empty type literals by null': true
//                                             }
//                                         )),
//                                     ]),
//                                     () => sh.b.nothing()
//                                 ),
//                                 sh.b.snippet(" => {"),
//                                 sh.b.indent([
//                                     sh.g.nested_block([
//                                         _p.decide.state($.type, ($) => {
//                                             switch ($[0]) {
//                                                 case 'full': return _p.ss($, ($) => sh.b.sub([
//                                                     sh.b.snippet("switch ($[0]) {"),
//                                                     sh.b.indent([
//                                                         sh.g.sub(_p.list.from_dictionary($.cases, ($, key) => sh.g.sub([
//                                                             sh.g.nested_block([
//                                                                 sh.b.snippet("case "),
//                                                                 String_Literal(key, { 'delimiter': "apostrophe" }),
//                                                                 sh.b.snippet(": return _p.ss($, ($) => "),
//                                                                 Expression_old($),
//                                                                 sh.b.snippet(")"),
//                                                             ])
//                                                         ]))),
//                                                         sh.g.simple_line("default: return _p.au($[0])")
//                                                     ]),
//                                                     sh.b.snippet("}"),
//                                                 ]))
//                                                 case 'partial': return _p.ss($, ($) => sh.b.sub([
//                                                     sh.b.snippet("switch ($[0]) {"),
//                                                     sh.b.indent([
//                                                         sh.g.sub(_p.list.from_dictionary($.cases, ($, key) => sh.g.sub([
//                                                             sh.g.nested_block([
//                                                                 sh.b.snippet("case "),
//                                                                 String_Literal(key, { 'delimiter': "apostrophe" }),
//                                                                 sh.b.snippet(": return _p.ss($, ($) => "),
//                                                                 Expression_old($),
//                                                                 sh.b.snippet(")"),
//                                                             ])
//                                                         ]))),
//                                                         sh.g.nested_block([
//                                                             sh.b.snippet("default: return "),
//                                                             //Expression($.default, $p),
//                                                         ])
//                                                     ]),
//                                                     sh.b.snippet("}"),
//                                                 ]))
//                                                 default: return _p.au($[0])
//                                             }
//                                         }),
//                                     ]),
//                                 ]),
//                                 sh.b.snippet("})"),
//                             ]))
//                             default: return _p.au($[0])
//                         }
//                     })
//                 ])
//             })

//             case 'initialize': return _p.ss($, ($) => sh.b.sub([
//                 _p.decide.state($, ($): d_out.Block_Part_ => {
//                     switch ($[0]) {
//                         case 'boolean': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                     switch ($[0]) {
//                                         case 'true': return sh.b.snippet("true")
//                                         case 'false': return sh.b.snippet("false")
//                                         default: return _p.au($[0])
//                                     }
//                                 }))
//                                 case 'not': return _p.ss($, ($) => sh.b.sub([sh.b.snippet("FIXME BOOLEAN NOT")]))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'component': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {

//                                 case 'call': return _p.ss($, ($) => sh.b.sub([
//                                     Selection_Old($.source),
//                                     sh.b.snippet("("),
//                                     sh.b.indent([
//                                         sh.g.nested_block([
//                                             Expression_old($.context), $.arguments.__decide(
//                                                 ($) => sh.b.snippet(","),
//                                                 () => sh.b.nothing()
//                                             ),
//                                         ]),
//                                         $.arguments.__decide(
//                                             ($) => sh.g.nested_block([
//                                                 _p.boolean.dictionary_is_empty($)
//                                                     ? sh.b.snippet("null")
//                                                     : sh.b.sub([
//                                                         sh.b.snippet("{"),
//                                                         sh.b.indent([
//                                                             sh.g.sub(_p.list.from_dictionary($, ($, key) => sh.g.sub([
//                                                                 sh.g.nested_block([
//                                                                     String_Literal(key, { 'delimiter': "apostrophe" }),
//                                                                     sh.b.snippet(": "),
//                                                                     Expression_old($),
//                                                                     sh.b.snippet(","),
//                                                                 ]),
//                                                             ]))),
//                                                         ]),
//                                                         sh.b.snippet("}")
//                                                     ]),
//                                             ]),
//                                             () => sh.g.nothing()
//                                         ),
//                                     ]),
//                                     sh.b.snippet(")"),
//                                 ]))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'dictionary': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => sh.b.sub([
//                                     sh.b.snippet("_p.dictionary.literal({"),
//                                     sh.b.indent([
//                                         sh.g.sub(_p.list.from_dictionary($, ($, key) => sh.g.nested_block([
//                                             String_Literal(key, { 'delimiter': "apostrophe" }),
//                                             sh.b.snippet(": "),
//                                             Expression_old($),
//                                             sh.b.snippet(","),
//                                         ])
//                                         )),
//                                     ]),
//                                     sh.b.snippet("})"),
//                                 ]))
//                                 case 'map': return _p.ss($, ($) => sh.b.sub([
//                                     Selection_Old($.source),
//                                     sh.b.snippet(".__d_map(($) => "),
//                                     Expression_old($['entry handler']),
//                                     sh.b.snippet(")"),
//                                 ]))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'group': return _p.ss($, ($) => temp_fp_line_list(
//                             $.__to_list(($, key) => sh.b.indent([
//                                 sh.g.nested_block([
//                                     String_Literal(key, { 'delimiter': "apostrophe" }),
//                                     sh.b.snippet(": "),
//                                     Expression_old($),
//                                     sh.b.snippet(","),
//                                 ])
//                             ])),
//                             sh.b.snippet("null"),
//                             sh.b.snippet("({"),
//                             sh.b.snippet("})"),
//                             false
//                         ))

//                         case 'list': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => sh.b.sub([
//                                     sh.b.snippet("_p.list.literal(["),
//                                     sh.b.indent([
//                                         sh.g.sub($.__l_map(($) => sh.g.nested_block([
//                                             Expression_old($),
//                                             sh.b.snippet(","),
//                                         ])
//                                         )),
//                                     ]),
//                                     sh.b.snippet("])"),
//                                 ]))
//                                 case 'map': return _p.ss($, ($) => sh.b.sub([
//                                     Selection_Old($.source),
//                                     sh.b.snippet(".__l_map(($) => "),
//                                     Expression_old($['element handler']),
//                                     sh.b.snippet(")"),
//                                 ]))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'nothing': return _p.ss($, ($) => sh.b.snippet("null"))
//                         case 'number': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {
//                                 case 'approximation': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                     switch ($[0]) {
//                                         case 'literal': return _p.ss($, ($) => sh.b.snippet(s_number_default($)))
//                                         default: return _p.au($[0])
//                                     }
//                                 }))
//                                 case 'integer': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                     switch ($[0]) {
//                                         case 'literal': return _p.ss($, ($) => sh.b.snippet(s_number_default($)))
//                                         default: return _p.au($[0])
//                                     }
//                                 }))
//                                 case 'natural': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                     switch ($[0]) {
//                                         case 'literal': return _p.ss($, ($) => sh.b.snippet(s_number_default($)))
//                                         default: return _p.au($[0])
//                                     }
//                                 }))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                                     switch ($[0]) {
//                                         case 'not set': return sh.b.snippet("_p.optional.not_set()")
//                                         case 'set': return _p.ss($, ($) => sh.b.sub([
//                                             sh.b.snippet("_p.optional.set("),
//                                             Expression_old($),
//                                             sh.b.snippet(")"),
//                                         ]))
//                                         default: return _p.au($[0])
//                                     }
//                                 }))
//                                 case 'map': return _p.ss($, ($) => sh.b.sub([
//                                     Selection_Old($.source),
//                                     sh.b.snippet(".__o_map(($) => "),
//                                     Expression_old($['set handler']),
//                                     sh.b.snippet(")"),
//                                 ]))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => sh.b.sub([
//                                     sh.b.snippet("["),
//                                     String_Literal($.option, { 'delimiter': "apostrophe" }),
//                                     sh.b.snippet(", "),
//                                     Expression_old($.value),
//                                     sh.b.snippet("]"),
//                                 ]))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'text': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                             switch ($[0]) {
//                                 case 'literal': return _p.ss($, ($) => {
//                                     const value = $.value
//                                     return _p.decide.state($.delimiter, ($) => {
//                                         switch ($[0]) {
//                                             case 'quote': return _p.ss($, ($) => String_Literal(value, { 'delimiter': "quote" }))
//                                             case 'backtick': return _p.ss($, ($) => sh.b.snippet(s_backticked(value)))
//                                             default: return _p.au($[0])
//                                         }
//                                     })
//                                 })
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         default: return _p.au($[0])
//                     }
//                 })
//             ]))
//             case 'special': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                 switch ($[0]) {
//                     case 'abort': return _p.ss($, ($) => sh.b.sub([
//                         sh.b.snippet("abort("),
//                         Expression_old($),
//                         sh.b.snippet(")"),
//                     ]))
//                     case 'block': return _p.ss($, ($) => sh.b.sub([
//                         sh.b.snippet("_p.deprecated_block("),
//                         sh.b.snippet("() => {"),
//                         sh.b.indent([
//                             //temp variables
//                             sh.g.sub($['temp ordered variables'].__l_map(($) => sh.g.nested_block([
//                                 sh.b.snippet("const "),
//                                 sh.b.snippet(s_identifier($.name)),
//                                 $.type.__decide(
//                                     ($) => sh.b.sub([
//                                         sh.b.snippet(": "),
//                                         fp_to_temp_fp.Block_Part(t_tl_2_fp.Type(
//                                             Type_Node_Reference($),
//                                             {
//                                                 'replace empty type literals by null': true
//                                             }
//                                         )),
//                                     ]),
//                                     () => sh.b.nothing()
//                                 ),
//                                 sh.b.snippet(" = "),
//                                 Expression_old($.expression)
//                             ]))),
//                             sh.g.sub(_p.list.from_dictionary($.variables, ($, key) => sh.g.sub([
//                                 sh.g.nested_block([
//                                     sh.b.snippet("const "),
//                                     sh.b.snippet(s_identifier(key)),
//                                     $.type.__decide(
//                                         ($) => sh.b.sub([
//                                             sh.b.snippet(": "),
//                                             fp_to_temp_fp.Block_Part(t_tl_2_fp.Type(
//                                                 Type_Node_Reference($),
//                                                 {
//                                                     'replace empty type literals by null': true
//                                                 }
//                                             )),
//                                         ]),
//                                         () => sh.b.nothing()
//                                     ),
//                                     sh.b.snippet(" = "),
//                                     Expression_old($.expression)
//                                 ])

//                             ]))),
//                             sh.g.nested_block([
//                                 sh.b.snippet("return "),
//                                 Expression_old($.expression),
//                             ])
//                         ]),
//                         sh.b.snippet("})"),
//                     ]))
//                     case 'change context': return _p.ss($, ($) => sh.b.sub([
//                         sh.b.snippet("_p.deprecated_cc("),
//                         Selection_Old($['new context']),
//                         sh.b.snippet(", ($) => "),
//                         Expression_old($.expression),
//                         sh.b.snippet(")"),
//                     ]))
//                     // case 'deprecated function': return _p.ss($, ($) => sh.b.sub([
//                     //     sh.b.snippet("($"),
//                     //     $['temp has parameters'] ? sh.b.snippet(", $p") : sh.b.nothing(),
//                     //     sh.b.snippet(")"),
//                     //     $['temp resulting node'].__decide(
//                     //         ($) => sh.b.sub([
//                     //             sh.b.snippet(": "),
//                     //             fp_to_temp_fp.Block_Part(t_tl_2_fp.Type(
//                     //                 Type_Node_Reference($,),
//                     //                 {
//                     //                     'replace empty type literals by null': true
//                     //                 }
//                     //             )),
//                     //         ]),
//                     //         () => sh.b.nothing()
//                     //     ),
//                     //     sh.b.snippet(" => "),
//                     //     Expression_old($.expression),
//                     // ]))
//                     case 'implement me': return _p.ss($, ($) => sh.b.snippet("_pdev.implement_me(\"marker tbd\")"))
//                     case 'selection deprecated': return _p.ss($, ($) => Selection_Old($))
//                     case 'unreachable': return _p.ss($, ($) => sh.b.snippet("_p.unreachable_code_path()"))

//                     default: return _p.au($[0])
//                 }
//             }))
//             default: return _p.au($[0])
//         }
//     })
// }


export const reduce = <Element, Result_Type>(
    $: _pi.List<Element>,
    initial_state: Result_Type,
    update_state: (
        value: Element,
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
                        sh.e.identifier("_pdev", 'raw'),
                        "implement_me",
                        'raw'
                    ),
                    [
                        sh.e.string_literal("marker tbd", "apostrophe")
                    ]
                ))
                case 'abort deprecated': return _p.ss($, ($) => sh.e.call(
                    sh.e.property_access(
                        sh.e.identifier("_p", 'raw'),
                        "fixme_abort",
                        'raw'
                    ),
                    [
                        sh.e.string_literal("ABORT SELECTION", "apostrophe")
                    ]
                ))
                case 'argument': return _p.ss($, ($) => sh.e.identifier("FIXME ARGUMENT", 'raw'))
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
                case 'context': return _p.ss($, ($) => sh.e.identifier("$", 'raw'))
                case 'entry': return _p.ss($, ($) => sh.e.identifier("FIXME_ENTRY", 'raw'))
                case 'variable': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'local': return _p.ss($, ($) => sh.e.identifier($, 'escape'))
                        case 'imported': return _p.ss($, ($) => sh.e.property_access(
                            sh.e.identifier(join(_p.list.literal(["v ", $.import])), 'escape'),
                            $.variable,
                            'escape'
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'parameter': return _p.ss($, ($) => sh.e.element_access(
                    sh.e.identifier("$p", 'raw'),
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

// export const Selection_Old = (
//     $: d_in.Selection,
// ): d_out.Block_Part_ => {
//     return sh.b.sub([
//         fp_to_temp_fp.Block_Part(
//             t_tl_2_fp.Expression(
//                 Selection($),
//                 {
//                     'replace empty type literals by null': true,
//                     'needs parentheses in certain contexts': false,
//                 }
//             ),
//         )
//     ])
// }