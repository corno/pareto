import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'
import * as _ps from 'pareto-core-serializer'

import * as d_in from "../../../../../interface/generated/pareto/schemas/interface/data/resolved"
import * as d_out from "../../../../../interface/generated/pareto/schemas/typescript_light/data"

//dependencies
import { $$ as s_file_name } from "../../../primitives/text/serializers/filename"

const s_repeated: _pi.Text_Serializer_With_Parameters<{ 'count': number }> = ($, $p) => _ps.text.deprecated_build(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i['add snippet']($)
    }
})
const s_list_of_texts: _pi.Serializer<_pi.List<string>> = ($) => _ps.text.deprecated_build(($i) => {
    $.__for_each(($) => {
        $i['add snippet']($)
    })
})

//shorthands
import * as sh from "../../../../../modules/typescript_light/shorthands/typescript_light"


export const Module_Set = ($: d_in.Module_Set): d_out.Directory => {
    return $.__d_map(($) => _p.sg($, ($) => {
        switch ($[0]) {
            case 'module': return _p.ss($, ($) => {

                const valid_file_name = ($: string): string => {
                    return s_file_name($)
                }
                return sh.n.file(_p.list.nested_literal<d_out.Statements_.L>([
                    [
                        sh.s.import_namespace(" pi", "pareto-core-interface"),
                    ],

                    _p.list.from_dictionary($.imports, ($, key): d_out.Statements_.L => sh.s.import_namespace(
                        `i ${key}`,
                        _p.sg($.type, ($): string => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => valid_file_name($))
                                case 'ancestor': return _p.ss($, ($) => `${s_repeated("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                case 'sibling': return _p.ss($, ($) => `./${valid_file_name($)}`)
                                default: return _p.au($[0])
                            }
                        }) + s_list_of_texts(
                            $.tail.__l_map(($) => `/${valid_file_name($)}`),
                        )
                    )),

                    _p.list.flatten(
                        _p.list.from_dictionary($['types'], ($, key): d_out.Statements => _p.sg($, ($) => {
                            const name = key + ` `
                            switch ($[0]) {
                                case 'data': return _p.ss($, ($) => Type(
                                    $,
                                    {
                                        'name': name,
                                        //'temp imports': x_imports,
                                    }
                                ))

                                case 'algorithm': return _p.ss($, ($): d_out.Statements_ => _p.list.literal([
                                    sh.s.namespace(
                                        true,
                                        name,
                                        _p.list.nested_literal<d_out.Statements_.L>([
                                            Type(
                                                $.context,
                                                {
                                                    'name': "I",
                                                }
                                            ),
                                            Type(
                                                $.result,
                                                {
                                                    'name': "O",
                                                }
                                            ),
                                            _p.sg($.type, ($): d_out.Statements => {
                                                switch ($[0]) {
                                                    case 'transformer': return _p.ss($, ($) => _p.list.literal([]))
                                                    case 'refiner': return _p.ss($, ($): d_out.Statements => _p.list.nested_literal<d_out.Statements.L>([

                                                        $.error.__decide<d_out.Statements>(
                                                            ($) => {
                                                                return Type(
                                                                    $,
                                                                    {
                                                                        'name': "E",
                                                                    }
                                                                )
                                                            },
                                                            () => {
                                                                return _p.list.literal([])
                                                            }
                                                        ),

                                                        $.lookups.__decide<d_out.Statements>(
                                                            ($) => {
                                                                return _p.list.from_dictionary(
                                                                    $,
                                                                    ($, key) => sh.s.namespace(
                                                                        true,
                                                                        "L",
                                                                        Type(
                                                                            _p.sg($, ($) => {
                                                                                switch ($[0]) {
                                                                                    case 'acyclic': return _p.ss($, ($) => $)
                                                                                    case 'cyclic': return _p.ss($, ($) => $)
                                                                                    case 'stack': return _p.ss($, ($) => $)
                                                                                    default: return _p.au($[0])
                                                                                }
                                                                            }),
                                                                            {
                                                                                'name': key,
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            },
                                                            () => {
                                                                return _p.list.literal([])
                                                            }
                                                        ),
                                                    ]))
                                                    default: return _p.au($[0])
                                                }
                                            }),
                                            [
                                                sh.s.namespace(
                                                    true,
                                                    "P",
                                                    $.parameters.__decide(
                                                        ($) => _p.list.flatten(
                                                            _p.list.from_dictionary($, ($, key) => Type(
                                                                $,
                                                                {
                                                                    'name': key,
                                                                }
                                                            )),
                                                            ($) => $
                                                        ),
                                                        () => _p.list.literal<d_out.Statements_.L>([])
                                                    )
                                                )
                                            ]
                                        ])
                                    ),
                                    sh.s.type_alias(
                                        true,
                                        name,
                                        [],
                                        sh.t.function_(
                                            [],
                                            _p.list.nested_literal([
                                                [
                                                    sh.parameter(
                                                        "$",
                                                        sh.t.type_reference(name, ["I"], []),
                                                    ),
                                                ],

                                                _p.sg($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'transformer': return _p.ss($, ($): d_out.Type._function.parameters => _p.list.literal([]))
                                                        case 'refiner': return _p.ss($, ($): d_out.Type._function.parameters => _p.list.nested_literal([

                                                            $.error.__decide(
                                                                ($) => [

                                                                    sh.parameter(
                                                                        "$error",
                                                                        sh.t.type_reference(name, ["E"], []),
                                                                    ),
                                                                ],
                                                                () => []
                                                            ),

                                                            $.lookups.__decide(
                                                                ($) => [

                                                                    sh.parameter(
                                                                        "$lookups",
                                                                        sh.t.type_literal(
                                                                            $.__d_map(($, key) => sh.tl_propery(
                                                                                true,
                                                                                sh.t.type_reference(
                                                                                    " pi",
                                                                                    [
                                                                                        _p.sg($, ($) => {
                                                                                            switch ($[0]) {
                                                                                                case 'acyclic': return _p.ss($, ($) => "Acyclic Lookup")
                                                                                                case 'cyclic': return _p.ss($, ($) => "Cyclic Lookup")
                                                                                                case 'stack': return _p.ss($, ($) => "Stack Lookup")
                                                                                                default: return _p.au($[0])
                                                                                            }
                                                                                        })
                                                                                    ],
                                                                                    [
                                                                                        sh.t.type_reference(name, ["L", key], [])
                                                                                    ]
                                                                                )
                                                                            ))
                                                                        ),
                                                                    )

                                                                ],
                                                                () => []
                                                            )
                                                        ]))
                                                        default: return _p.au($[0])
                                                    }
                                                }),
                                                $.parameters.__decide(
                                                    ($) => _p.list.literal([

                                                        sh.parameter(
                                                            "$p",
                                                            sh.t.type_literal(
                                                                $.__d_map(($, key) => ({
                                                                    'readonly': true,
                                                                    'type': sh.t.type_reference(name, ["P", key], []),
                                                                })),
                                                            )
                                                        ),

                                                    ]),
                                                    () => _p.list.literal([])
                                                ),
                                            ]),
                                            sh.t.type_reference(name, ["O"], []),
                                        )
                                    )
                                ]))
                                default: return _p.au($[0])
                            }
                        })),
                        ($) => $
                    ),

                    [
                        sh.s.export_(
                            _p.list.from_dictionary(
                                $['types'],
                                ($, key) => sh.specifier(key + ` `, key)
                            ),
                            null,
                        )
                    ]


                ]))
            })
            case 'set': return _p.ss($, ($) => ['directory', Module_Set($)])
            default: return _p.au($[0])
        }
    }))
}


export const Identifier = (
    $: _pi.List<string>
): string => {
    return s_list_of_texts($)
}

export const Type = (
    $: d_in.Type,
    $p: {
        'name': string
    }
): d_out.Statements => {
    return _p.sg($, ($): d_out.Statements => {
        switch ($[0]) {



            case 'boolean': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.boolean()
                )
            ]))
            case 'component': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    _p.sg($.location, ($) => {
                        switch ($[0]) {
                            case 'import': return _p.ss($, ($) => sh.t.type_reference(
                                Identifier(_p.list.literal(["i ", $.import])),
                                _p.list.nested_literal<string>([
                                    [
                                        Identifier(_p.list.literal([$.type]))
                                    ],
                                ]),
                                []
                            ))
                            case 'sibling': return _p.ss($, ($) => sh.t.type_reference(
                                Identifier(_p.list.literal([$, " "])),
                                //tail
                                _p.list.nested_literal<string>([]),
                                []
                            ))
                            default: return _p.au($[0])
                        }
                    })
                )
            ]))
            case 'dictionary': return _p.ss($, ($) => _p.list.literal([
                sh.s.namespace(
                    true,
                    $p.name,
                    _p.list.nested_literal<d_out.Statements_.L>([
                        Type(
                            $,
                            {
                                'name': "D",
                            }
                        )
                    ])
                ),
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.type_reference(" pi", ["Dictionary"], [
                        sh.t.type_reference($p.name, ["D"], [])
                    ])
                )
            ]))
            case 'group': return _p.ss($, ($) => _p.list.nested_literal([
                [
                    sh.s.namespace(
                        true,
                        $p.name,
                        _p.list.flatten(
                            _p.list.from_dictionary(
                                $,
                                ($, key) => Type(
                                    $,
                                    {
                                        'name': key,
                                    }
                                )
                            ),
                            ($) => $
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        $p.name,
                        _p.list.literal([]),
                        sh.t.type_literal($.__d_map(($, key) => sh.tl_propery(true, sh.t.type_reference($p.name, [key], []))))
                    )
                ]
            ]))
            case 'list': return _p.ss($, ($) => _p.list.literal([
                sh.s.namespace(
                    true,
                    $p.name,
                    _p.list.nested_literal<d_out.Statements_.L>([
                        Type(
                            $,
                            {
                                'name': "L",
                            }
                        )
                    ])
                ),
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.type_reference(" pi", ["List"], [
                        sh.t.type_reference($p.name, ["L"], [])
                    ])
                )
            ]))
            case 'nothing': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.null_()
                )
            ]))
            case 'number': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.number()
                )
            ]))
            case 'optional': return _p.ss($, ($) => _p.list.literal([
                sh.s.namespace(
                    true,
                    $p.name,
                    _p.list.nested_literal<d_out.Statements_.L>([
                        Type(
                            $,
                            {
                                'name': "O",
                            }
                        )
                    ])
                ),
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.type_reference(" pi", ["Optional Value"], [
                        sh.t.type_reference($p.name, ["O"], [])
                    ])
                )
            ]))
            case 'reference': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.type_reference(
                        //start
                        _p.sg($.location, ($): string => {
                            switch ($[0]) {
                                case 'import': return _p.ss($, ($) => Identifier(_p.list.literal(["i ", $.import])))
                                case 'sibling': return _p.ss($, ($) => Identifier(_p.list.literal([$.sibling, " "]))) //FIXME circular dependency!
                                // $['circular dependent']
                                // ? sh.t.type_reference(
                                //     " pi",
                                //     ["Circular Dependency"],
                                //     [
                                //         sh.t.type_reference(
                                //             Identifier(_p.list.literal([$, " "])),
                                //             //tail
                                //             _p.list.nested_literal<string>([]),
                                //             []
                                //         )
                                //     ]
                                // )
                                // : sh.t.type_reference(
                                //     Identifier(_p.list.literal([$, " "])),
                                //     //tail
                                //     _p.list.nested_literal<string>([]),
                                //     []
                                // ))
                                default: return _p.au($[0])
                            }
                        }),
                        //tail
                        _p.list.nested_literal<string>([
                            _p.sg($.location, ($) => {
                                switch ($[0]) {
                                    case 'import': return _p.ss($, ($) => _p.list.literal([
                                        Identifier(_p.list.literal([$.type, " "]))
                                    ]))
                                    case 'sibling': return _p.ss($, ($) => _p.list.literal([]))
                                    default: return _p.au($[0])
                                }
                            }),
                            _p.list.flatten(
                                $['sub selection'],
                                ($) => _p.sg($, ($): _pi.List<string> => {
                                    switch ($[0]) {
                                        case 'dictionary': return _p.ss($, ($) => _p.list.literal(["D"]))
                                        case 'group': return _p.ss($, ($) => _p.list.literal([$]))
                                        case 'list': return _p.ss($, ($) => _p.list.literal(["L"]))
                                        case 'optional': return _p.ss($, ($) => _p.list.literal(["O"]))
                                        case 'state group': return _p.ss($, ($) => _p.list.literal([$]))
                                        default: return _p.au($[0])
                                    }
                                }),
                            ),
                        ]),
                        []
                    )
                )
            ]))
            case 'state group': return _p.ss($, ($) => _p.list.nested_literal([
                [
                    sh.s.namespace(
                        true,
                        $p.name,
                        _p.list.flatten(
                            _p.list.from_dictionary(
                                $,
                                ($, key) => Type(
                                    $,
                                    {
                                        'name': key,
                                    }
                                )
                            ),
                            ($) => $
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        $p.name,
                        _p.list.literal([]),
                        sh.t.union(
                            $.__to_list(
                                ($, key) => sh.t.tuple('readonly', [
                                    sh.t.literal_type(key, 'apostrophe'),
                                    sh.t.type_reference($p.name, [key], [])
                                ])
                            )
                        )
                    )
                ]
            ]))
            case 'text': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    $p.name,
                    _p.list.literal([]),
                    sh.t.string()
                )
            ]))
            default: return _p.au($[0])
        }
    })
}