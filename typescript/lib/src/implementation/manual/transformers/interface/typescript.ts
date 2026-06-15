import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_ri from 'pareto-core/dist/refiner/interface'
import p_change_context from 'pareto-core/dist/specials/change_context'
import p_text_from_list from 'pareto-core/dist/specials/text_from_list'
import p_list_from_text from 'pareto-core/dist/specials/list_from_text'

import * as d_in from "../../../../interface/generated/liana/schemas/interface/data/resolved"
import * as d_out from "../../../../interface/generated/liana/schemas/typescript_light/data"
import * as d_function from "../../../../interface/to_be_generated/pareto_to_typescript"


//dependencies
import { $$ as s_file_name } from "../text/filename"

//shorthands
import * as sh from "../../../../modules/typescript_light/shorthands/typescript_light"


export const temp_create_file_path = (
    $: d_in.Imports.D,
    delimiter: 'apostrophe' | 'quote',
): d_out.String_Literal => {
    const valid_file_name = ($: string): string => {
        return p_text_from_list(
            s_file_name($),
            ($) => $
        )
    }
    const do_tail = (): string => {
        return p_text_from_list(
            pt.list.from.list(
                $.tail.__l_map(($) => `/${valid_file_name($)}`),
            ).flatten(
                ($) => p_list_from_text($, ($) => $)
            ),
            ($) => $
        )
    }
    return {
        'value': pt.decide.state($.type, ($): string => {
            switch ($[0]) {
                case 'external': return pt.ss($, ($) => valid_file_name($) + do_tail())
                case 'ancestor': return pt.ss($, ($) => p_text_from_list(
                    pt.list.from.list(
                        pt.list.repeat(p_list_from_text("../", ($) => $), $['number of steps']),
                    ).flatten(
                        ($) => $
                    ),
                    ($) => $
                ) + valid_file_name($.dependency) + do_tail())
                case 'sibling': return pt.ss($, ($) => `./${valid_file_name($)}` + do_tail())
                default: return pt.au($[0])
            }
        }),
        'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
    }
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


export const Package_Set: p_ri.Refiner<
    d_out.Directory,
    d_function.Error,
    d_in.Package_Set
> = (
    $,
    abort
) => {
    return temp_rename($, abort).__d_map(($) => pt.decide.state($, ($) => {
        switch ($[0]) {
            case 'package': return pt.ss($, ($) => {

                return sh.n.file(pt.list.nested_literal_old<d_out.Statements_.L>([
                    [
                        sh.s.import_namespace(sh.identifier_raw("p_di"), sh.string_literal("pareto-core/dist/data/interface", 'apostrophe')),
                    ],

                    pt.list.from.dictionary($.imports,).convert(($, id): d_out.Statements_.L => sh.s.import_namespace(
                        sh.identifier_escaped(`i ${id}`),
                        temp_create_file_path($, 'quote')
                    )),

                    pt.decide.state($.content, ($) => {
                        switch ($[0]) {
                            case 'data modules': return pt.ss($, ($) => pt.list.from.dictionary(
                                $,
                            ).flatten(
                                ($, id): d_out.Statements => Value(
                                    $,
                                    {
                                        'name': id + " ",
                                        //'temp imports': x_imports,
                                    }
                                )
                            ))
                            case 'functions': return pt.ss($, ($) => pt.list.from.dictionary(
                                $
                            ).flatten(
                                ($, id): d_out.Statements => {
                                    const name = id + " "
                                    return pt.list.literal([
                                        sh.s.namespace(
                                            true,
                                            sh.identifier_escaped(name),
                                            pt.list.nested_literal_old<d_out.Statements_.L>([
                                                Value(
                                                    $.context,
                                                    {
                                                        'name': "I",
                                                    }
                                                ),
                                                Value(
                                                    $.result,
                                                    {
                                                        'name': "O",
                                                    }
                                                ),
                                                pt.decide.state($.type, ($): d_out.Statements => {
                                                    switch ($[0]) {
                                                        case 'transformer': return pt.ss($, ($) => pt.list.literal([]))
                                                        case 'refiner': return pt.ss($, ($): d_out.Statements => pt.list.nested_literal_old<d_out.Statements.L>([

                                                            $.error.__decide<d_out.Statements>(
                                                                ($) => {
                                                                    return Value(
                                                                        $,
                                                                        {
                                                                            'name': "E",
                                                                        }
                                                                    )
                                                                },
                                                                () => {
                                                                    return pt.list.literal([])
                                                                }
                                                            ),

                                                            $.lookups.__decide<d_out.Statements>(
                                                                ($) => {
                                                                    return pt.list.from.dictionary(
                                                                        $,
                                                                    ).convert(
                                                                        ($, id) => sh.s.namespace(
                                                                            true,
                                                                            sh.identifier_raw("L"),
                                                                            Value(
                                                                                pt.decide.state($, ($) => {
                                                                                    switch ($[0]) {
                                                                                        case 'acyclic': return pt.ss($, ($) => $)
                                                                                        case 'cyclic': return pt.ss($, ($) => $)
                                                                                        case 'stack': return pt.ss($, ($) => $)
                                                                                        default: return pt.au($[0])
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
                                                                    return pt.list.literal([])
                                                                }
                                                            ),
                                                        ]))
                                                        default: return pt.au($[0])
                                                    }
                                                }),
                                                [
                                                    sh.s.namespace(
                                                        true,
                                                        sh.identifier_raw("P"),
                                                        $.parameters.__decide(
                                                            ($) => pt.list.from.dictionary(
                                                                $,
                                                            ).flatten(
                                                                ($, id) => Value(
                                                                    $,
                                                                    {
                                                                        'name': id,
                                                                    }
                                                                )
                                                            ),
                                                            () => pt.list.literal<d_out.Statements_.L>([])
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
                                                pt.list.nested_literal_old([
                                                    [
                                                        sh.parameter(
                                                            sh.identifier_raw("context"),
                                                            sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("I")], []),
                                                        ),
                                                    ],

                                                    pt.decide.state($.type, ($) => {
                                                        switch ($[0]) {
                                                            case 'transformer': return pt.ss($, ($): d_out.Type.function_.parameters => pt.list.literal([]))
                                                            case 'refiner': return pt.ss($, ($): d_out.Type.function_.parameters => pt.list.nested_literal_old([

                                                                $.error.__decide(
                                                                    ($) => pt.list.literal([

                                                                        sh.parameter(
                                                                            sh.identifier_raw("abort"),
                                                                            sh.t.type_reference(
                                                                                sh.identifier_raw("pi"),
                                                                                [sh.identifier_raw("Abort")],
                                                                                [
                                                                                    sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("E")], []),
                                                                                ]
                                                                            ),

                                                                        ),
                                                                    ]),
                                                                    () => pt.list.literal([])
                                                                ),

                                                                $.lookups.__decide(
                                                                    ($) => pt.list.literal([

                                                                        sh.parameter(
                                                                            sh.identifier_raw("lookups"),
                                                                            sh.t.type_literal(
                                                                                $.__to_list(($, id) => sh.tl_propery(
                                                                                    id,
                                                                                    'apostrophized string literal',
                                                                                    true,
                                                                                    sh.t.type_reference(
                                                                                        sh.identifier_raw("pi"),
                                                                                        [
                                                                                            sh.identifier_raw(pt.decide.state($, ($) => {
                                                                                                switch ($[0]) {
                                                                                                    case 'acyclic': return pt.ss($, ($) => "static_lookup.Acyclic")
                                                                                                    case 'cyclic': return pt.ss($, ($) => "static_lookup.Cyclic")
                                                                                                    case 'stack': return pt.ss($, ($) => "static_lookup.Stack")
                                                                                                    default: return pt.au($[0])
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

                                                                    ]),
                                                                    () => pt.list.literal([])
                                                                )
                                                            ]))
                                                            default: return pt.au($[0])
                                                        }
                                                    }),
                                                    $.parameters.__decide(
                                                        ($) => pt.list.literal([

                                                            sh.parameter(
                                                                sh.identifier_raw("parameters"),
                                                                sh.t.type_literal(
                                                                    $.__to_list(($, id) => sh.tl_propery(
                                                                        id,
                                                                        'apostrophized string literal',
                                                                        true,
                                                                        sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("P"), sh.identifier_escaped(id)], [])
                                                                    )),
                                                                )
                                                            ),

                                                        ]),
                                                        () => pt.list.literal([])
                                                    ),
                                                ]),
                                                sh.t.type_reference(sh.identifier_escaped(name), [sh.identifier_raw("O")], []),
                                            )
                                        )
                                    ])
                                }
                            ))
                            default: return pt.au($[0])
                        }
                    }),

                    [
                        sh.s.export_(
                            pt.decide.state($.content, ($) => {
                                switch ($[0]) {
                                    case 'data modules': return pt.ss($, ($) => pt.list.from.dictionary(
                                        $,
                                    ).convert(
                                        ($, id) => sh.specifier(sh.identifier_escaped(id + " "), sh.identifier_escaped(id))
                                    ))
                                    case 'functions': return pt.ss($, ($) => pt.list.from.dictionary(
                                        $,
                                    ).convert(
                                        ($, id) => sh.specifier(sh.identifier_escaped(id + " "), sh.identifier_escaped(id))
                                    ))
                                    default: return pt.au($[0])
                                }
                            }),
                            null,
                        )
                    ]


                ]))
            })
            case 'set': return pt.ss($, ($) => ['directory', Package_Set($, abort)])
            default: return pt.au($[0])
        }
    }))
}

export const Value = (
    $: d_in.Value,
    $p: {
        'name': string
    }
): d_out.Statements => {
    return pt.decide.state($, ($): d_out.Statements => {
        switch ($[0]) {



            case 'boolean': return pt.ss($, ($) => pt.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.literal([]),
                    sh.t.boolean()
                )
            ]))
            case 'component': return pt.ss($, ($) => pt.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.literal([]),
                    pt.decide.state($.location, ($) => {
                        switch ($[0]) {
                            case 'import': return pt.ss($, ($) => sh.t.type_reference(
                                sh.identifier_escaped("i " + $.import),
                                pt.list.nested_literal_old([
                                    [
                                        sh.identifier_escaped($.type)
                                    ],
                                ]),
                                []
                            ))
                            case 'local': return pt.ss($, ($) => sh.t.type_reference(
                                sh.identifier_escaped($ + " "),
                                //tail
                                pt.list.nested_literal_old([]),
                                []
                            ))
                            default: return pt.au($[0])
                        }
                    })
                )
            ]))
            case 'dictionary': return pt.ss($, ($) => pt.list.literal([
                sh.s.namespace(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.nested_literal_old<d_out.Statements_.L>([
                        Value(
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
                    pt.list.literal([]),
                    sh.t.type_reference(sh.identifier_raw("pi"), [sh.identifier_raw("Dictionary")], [
                        sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_raw("D")], [])
                    ])
                )
            ]))
            case 'group': return pt.ss($, ($) => pt.list.nested_literal_old([
                [
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        pt.list.from.dictionary(
                            $
                        ).flatten(
                            ($, id) => Value(
                                $,
                                {
                                    'name': id,
                                }
                            )
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        pt.list.literal([]),
                        sh.t.type_literal($.__to_list(($, id) => sh.tl_propery(
                            id,
                            'apostrophized string literal',
                            true,
                            sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_escaped(id)], [])
                        )))
                    )
                ]
            ]))
            case 'list': return pt.ss($, ($) => pt.list.literal([
                sh.s.namespace(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.nested_literal_old<d_out.Statements_.L>([
                        Value(
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
                    pt.list.literal([]),
                    sh.t.type_reference(sh.identifier_raw("pi"), [sh.identifier_raw("List")], [
                        sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_raw("L")], [])
                    ])
                )
            ]))
            case 'nothing': return pt.ss($, ($) => pt.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.literal([]),
                    sh.t.null_()
                )
            ]))
            case 'number': return pt.ss($, ($) => pt.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.literal([]),
                    sh.t.number()
                )
            ]))
            case 'optional': return pt.ss($, ($) => pt.list.literal([
                sh.s.namespace(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.nested_literal_old<d_out.Statements_.L>([
                        Value(
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
                    pt.list.literal([]),
                    sh.t.type_reference(sh.identifier_raw("pi"), [sh.identifier_raw("Optional_Value")], [
                        sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_raw("O")], [])
                    ])
                )
            ]))
            case 'reference': return pt.ss($, ($) => pt.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.literal([]),
                    p_change_context($, ($) => {
                        const foo = sh.t.type_reference(

                            //start
                            pt.decide.state($.location, ($) => {
                                switch ($[0]) {
                                    case 'import': return pt.ss($, ($) => sh.identifier_escaped("i " + $.import))
                                    case 'local': return pt.ss($, ($) => sh.identifier_escaped($ + " "))
                                    default: return pt.au($[0])
                                }
                            }),
                            //tail
                            pt.list.nested_literal_old([
                                pt.decide.state($.location, ($) => {
                                    switch ($[0]) {
                                        case 'import': return pt.ss($, ($) => pt.list.literal([
                                            sh.identifier_escaped($.type + " ")
                                        ]))
                                        case 'local': return pt.ss($, ($) => pt.list.literal([]))
                                        default: return pt.au($[0])
                                    }
                                }),
                                pt.list.from.list(
                                    $['sub selection'],
                                ).flatten(
                                    ($) => pt.decide.state($, ($) => {
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
                            []
                        )
                        return $.cyclic
                            ? sh.t.type_reference(
                                sh.identifier_raw("pi"),
                                [sh.identifier_raw("Circular_Dependency")],
                                [foo]
                            )
                            : foo
                    })

                )
            ]))
            case 'state': return pt.ss($, ($) => pt.list.nested_literal_old([
                [
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        pt.list.from.dictionary(
                            $,
                        ).flatten(
                            ($, id) => Value(
                                $,
                                {
                                    'name': id,
                                }
                            )
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        pt.list.literal([]),
                        pt.boolean.from.dictionary($).is_empty()
                            ? sh.t.never()
                            : sh.t.union(
                                $.__to_list(
                                    ($, id) => sh.t.tuple('readonly', [
                                        sh.t.literal_type(sh.string_literal(id, 'apostrophe')),
                                        sh.t.type_reference(sh.identifier_escaped($p.name), [sh.identifier_escaped(id)], [])
                                    ])
                                )
                            )
                    )
                ]
            ]))
            case 'text': return pt.ss($, ($) => pt.list.literal([
                sh.s.type_alias(
                    true,
                    sh.identifier_escaped($p.name),
                    pt.list.literal([]),
                    sh.t.string()
                )
            ]))
            default: return pt.au($[0])
        }
    })
}