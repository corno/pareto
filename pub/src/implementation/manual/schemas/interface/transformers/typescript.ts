import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import * as _ps from 'pareto-core/dist/serializer'
import { _p_cc } from 'pareto-core/dist/change_context'

import * as d_in from "../../../../../interface/generated/liana/schemas/interface/data/resolved"
import * as d_out from "../../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_pareto_to_typescript from "../../../../../interface/to_be_generated/pareto_to_typescript"


//dependencies
import { $$ as s_file_name } from "../../../primitives/text/serializers/filename"

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

//shorthands
import * as sh from "../../../../../modules/typescript_light/shorthands/typescript_light"

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
    return temp_rename($, abort).__d_map(($) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'module': return _p.ss($, ($) => {

                const valid_file_name = ($: string): string => {
                    return s_file_name($)
                }
                return sh.n.file(_p.list.nested_literal_old<d_out.Statements_.L>([
                    [
                        sh.s.import_namespace(sh.identifier_raw("_pi"), "pareto-core/dist/interface"),
                    ],

                    _p.list.from_dictionary($.imports, ($, id): d_out.Statements_.L => sh.s.import_namespace(
                        sh.identifier_escaped(`i ${id}`),
                        _p.decide.state($.type, ($): string => {
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
                        _p.list.from_dictionary($['types'], ($, id): d_out.Statements => _p.decide.state($, ($) => {
                            const name = id + ` `
                            switch ($[0]) {
                                case 'data': return _p.ss($, ($) => Type_Node(
                                    $,
                                    {
                                        'name': name,
                                        //'temp imports': x_imports,
                                    }
                                ))

                                case 'algorithm': return _p.ss($, ($): d_out.Statements_ => _p.list.literal([
                                    sh.s.namespace(
                                        true,
                                        sh.identifier_escaped(name),
                                        _p.list.nested_literal_old<d_out.Statements_.L>([
                                            Type_Node(
                                                $.context,
                                                {
                                                    'name': "I",
                                                }
                                            ),
                                            Type_Node(
                                                $.result,
                                                {
                                                    'name': "O",
                                                }
                                            ),
                                            _p.decide.state($.type, ($): d_out.Statements => {
                                                switch ($[0]) {
                                                    case 'transformer': return _p.ss($, ($) => _p.list.literal([]))
                                                    case 'refiner': return _p.ss($, ($): d_out.Statements => _p.list.nested_literal_old<d_out.Statements.L>([

                                                        $.error.__decide<d_out.Statements>(
                                                            ($) => {
                                                                return Type_Node(
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
                                                                    ($, id) => sh.s.namespace(
                                                                        true,
                                                                        sh.identifier_raw("L"),
                                                                        Type_Node(
                                                                            _p.decide.state($, ($) => {
                                                                                switch ($[0]) {
                                                                                    case 'acyclic': return _p.ss($, ($) => $)
                                                                                    case 'cyclic': return _p.ss($, ($) => $)
                                                                                    case 'stack': return _p.ss($, ($) => $)
                                                                                    default: return _p.au($[0])
                                                                                }
                                                                            }),
                                                                            {
                                                                                'name': id,
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
                                                    sh.identifier_raw("P"),
                                                    $.parameters.__decide(
                                                        ($) => _p.list.flatten(
                                                            _p.list.from_dictionary($, ($, id) => Type_Node(
                                                                $,
                                                                {
                                                                    'name': id,
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
                                        sh.identifier_escaped(name),
                                        [],
                                        sh.t.function_(
                                            [],
                                            _p.list.nested_literal_old([
                                                [
                                                    sh.parameter(
                                                        sh.identifier_raw("context"),
                                                        sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("I")], []),
                                                    ),
                                                ],

                                                _p.decide.state($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'transformer': return _p.ss($, ($): d_out.Type.function_.parameters => _p.list.literal([]))
                                                        case 'refiner': return _p.ss($, ($): d_out.Type.function_.parameters => _p.list.nested_literal_old([

                                                            $.error.__decide(
                                                                ($) => [

                                                                    sh.parameter(
                                                                        sh.identifier_raw("abort"),
                                                                        sh.t.type_reference(
                                                                            sh.identifier_raw("_pi"),
                                                                            [sh.identifier_raw("Abort")],
                                                                            [
                                                                                sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("E")], []),
                                                                            ]
                                                                        ),

                                                                    ),
                                                                ],
                                                                () => []
                                                            ),

                                                            $.lookups.__decide(
                                                                ($) => [

                                                                    sh.parameter(
                                                                        sh.identifier_raw("lookups"),
                                                                        sh.t.type_literal(
                                                                            $.__d_map(($, id) => sh.tl_propery(
                                                                                true,
                                                                                sh.t.type_reference(
                                                                                    sh.identifier_raw("_pi"),
                                                                                    [
                                                                                        sh.identifier_raw(_p.decide.state($, ($) => {
                                                                                            switch ($[0]) {
                                                                                                case 'acyclic': return _p.ss($, ($) => "Acyclic_Lookup")
                                                                                                case 'cyclic': return _p.ss($, ($) => "Cyclic_Lookup")
                                                                                                case 'stack': return _p.ss($, ($) => "Stack_Lookup")
                                                                                                default: return _p.au($[0])
                                                                                            }
                                                                                        }))
                                                                                    ],
                                                                                    [
                                                                                        sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("L"), sh.identifier_escaped(id)], [])
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
                                                            sh.identifier_raw("parameters"),
                                                            sh.t.type_literal(
                                                                $.__d_map(($, id) => ({
                                                                    'readonly': true,
                                                                    'type': sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("P"), sh.identifier_escaped(id)], []),
                                                                })),
                                                            )
                                                        ),

                                                    ]),
                                                    () => _p.list.literal([])
                                                ),
                                            ]),
                                            sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("O")], []),
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
                                ($, id) => sh.specifier(sh.identifier_escaped(id + ` `), sh.identifier_escaped(id))
                            ),
                            null,
                        )
                    ]


                ]))
            })
            case 'set': return _p.ss($, ($) => ['directory', Module_Set($, abort)])
            default: return _p.au($[0])
        }
    }))
}

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'name': string
    }
): d_out.Statements => {
    return _p.decide.state($, ($): d_out.Statements => {
        switch ($[0]) {



            case 'boolean': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    sh.t.boolean()
                )
            ]))
            case 'component': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    _p.decide.state($.location, ($) => {
                        switch ($[0]) {
                            case 'import': return _p.ss($, ($) => sh.t.type_reference(
                                sh.identifier_escaped("i " + $.import),
                                _p.list.nested_literal_old([
                                    [
                                        sh.identifier_escaped($.type)
                                    ],
                                ]),
                                []
                            ))
                            case 'local': return _p.ss($, ($) => sh.t.type_reference(
                                sh.identifier_escaped($ + " "),
                                //tail
                                _p.list.nested_literal_old([]),
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
                    sh.identifier_escaped($p.name),
                    _p.list.nested_literal_old<d_out.Statements_.L>([
                        Type_Node(
                            $,
                            {
                                'name': "D",
                            }
                        )
                    ])
                ),
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    sh.t.type_reference(sh.identifier_raw("_pi"), [sh.identifier_raw("Dictionary")], [
                        sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_raw("D")], [])
                    ])
                )
            ]))
            case 'group': return _p.ss($, ($) => _p.list.nested_literal_old([
                [
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        _p.list.flatten(
                            _p.list.from_dictionary(
                                $,
                                ($, id) => Type_Node(
                                    $,
                                    {
                                        'name': id,
                                    }
                                )
                            ),
                            ($) => $
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        _p.list.literal([]),
                        sh.t.type_literal($.__d_map(($, id) => sh.tl_propery(true, sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_escaped(id)], []))))
                    )
                ]
            ]))
            case 'list': return _p.ss($, ($) => _p.list.literal([
                sh.s.namespace(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.nested_literal_old<d_out.Statements_.L>([
                        Type_Node(
                            $,
                            {
                                'name': "L",
                            }
                        )
                    ])
                ),
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    sh.t.type_reference(sh.identifier_raw("_pi"), [sh.identifier_raw("List")], [
                        sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_raw("L")], [])
                    ])
                )
            ]))
            case 'nothing': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    sh.t.null_()
                )
            ]))
            case 'number': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    sh.t.number()
                )
            ]))
            case 'optional': return _p.ss($, ($) => _p.list.literal([
                sh.s.namespace(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.nested_literal_old<d_out.Statements_.L>([
                        Type_Node(
                            $,
                            {
                                'name': "O",
                            }
                        )
                    ])
                ),
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    sh.t.type_reference(sh.identifier_raw("_pi"), [sh.identifier_raw("Optional_Value")], [
                        sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_raw("O")], [])
                    ])
                )
            ]))
            case 'reference': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    _p_cc($, ($) => {
                        const foo = sh.t.type_reference(

                            //start
                            _p.decide.state($.location, ($) => {
                                switch ($[0]) {
                                    case 'import': return _p.ss($, ($) => sh.identifier_escaped("i " + $.import))
                                    case 'local': return _p.ss($, ($) => sh.identifier_escaped($ + " "))
                                    default: return _p.au($[0])
                                }
                            }),
                            //tail
                            _p.list.nested_literal_old([
                                _p.decide.state($.location, ($) => {
                                    switch ($[0]) {
                                        case 'import': return _p.ss($, ($) => _p.list.literal([
                                            sh.identifier_escaped($.type + " ")
                                        ]))
                                        case 'local': return _p.ss($, ($) => _p.list.literal([]))
                                        default: return _p.au($[0])
                                    }
                                }),
                                _p.list.flatten(
                                    $['sub selection'],
                                    ($) => _p.decide.state($, ($) => {
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
                            []
                        )
                        return $.cyclic
                            ? sh.t.type_reference(
                                sh.identifier_raw("_pi"),
                                [sh.identifier_raw("Circular_Dependency")],
                                [foo]
                            )
                            : foo
                    })

                )
            ]))
            case 'state': return _p.ss($, ($) => _p.list.nested_literal_old([
                [
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        _p.list.flatten(
                            _p.list.from_dictionary(
                                $,
                                ($, id) => Type_Node(
                                    $,
                                    {
                                        'name': id,
                                    }
                                )
                            ),
                            ($) => $
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        _p.list.literal([]),
                        sh.t.union(
                            $.__to_list(
                                ($, id) => sh.t.tuple('readonly', [
                                    sh.t.literal_type(id, 'apostrophe'),
                                    sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_escaped(id)], [])
                                ])
                            )
                        )
                    )
                ]
            ]))
            case 'text': return _p.ss($, ($) => _p.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    _p.list.literal([]),
                    sh.t.string()
                )
            ]))
            default: return _p.au($[0])
        }
    })
}