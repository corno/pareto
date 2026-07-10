import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import type * as p_ri from 'pareto-core/interface/refiner'
import p_variables from 'pareto-core/implementation/refiner/specials/variables'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import type * as interface_ from "../../../declarations/transformers/interface/typescript.js"

import type * as d_in from "../../../modules/interface/interface/data/resolved.js"
import type * as d_out from "../../../interface/data/typescript_light.js"
import type * as d_function from "../../../interface/data/pareto_to_typescript.js"

//dependencies
import { Text as s_file_name } from "../text/filename.js"

//shorthands
import * as sh from "../../../modules/typescript_light/shorthands/typescript_light/target.js"


export const temp_create_file_path = (
    $: d_in.Imports.D,
    $p: {
        'delimiter':
        | ['apostrophe', null]
        | ['quote', null]
    },
): d_out.String_Literal => {
    const valid_file_name = ($: string): string => {
        return p_text_from_list(
            s_file_name($),
            ($) => $
        )
    }
    const do_tail = (): string => {
        return p_text_from_list(
            p_.from.list(
                p_.from.list($.tail).map(
                    ($) => `/${valid_file_name($)}`),
            ).flatten(
                ($) => p_list_from_text(
                    $,
                    ($) => $
                )
            ),
            ($) => $
        )
    }
    return {
        'value': p_.from.state($.type).decide(
            ($): string => {
                switch ($[0]) {
                    case 'external': return p_.option($, ($) => valid_file_name($) + do_tail())
                    case 'ancestor': return p_.option($, ($) => p_text_from_list(
                        p_.from.list(p_.from.number($['number of steps']).repeat(
                            p_list_from_text(
                                "../",
                                ($) => $
                            ),

                        ),
                        ).flatten(
                            ($) => $
                        ),
                        ($) => $
                    ) + valid_file_name($.dependency) + do_tail())
                    case 'sibling': return p_.option($, ($) => `./${valid_file_name($)}` + do_tail())
                    default: return p_.exhaustive($[0])
                }
            }),
        'delimiter': $p.delimiter
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
                            default: return p_.exhaustive($[0])
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
) => p_.from.dictionary(temp_rename($, abort)).map(
    ($) => p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'package': return p_.option($, ($) => sh.n.file(p_.literal.segmented_list<d_out.Statements_.L>([
                    p_.literal.list([
                        sh.s.import_namespace(
                            sh.identifier_raw("p_di"), sh.string_literal("pareto-core/data/interface", 'apostrophe')),
                    ]),

                    p_.from.dictionary($.imports,).convert_to_list(
                        ($, id): d_out.Statements_.L => sh.s.import_namespace(
                            sh.identifier_escaped(`i ${id}`),
                            temp_create_file_path(
                                $,
                                {
                                    'delimiter': ['apostrophe', null]
                                }
                            )
                        )),

                    p_.from.state($.content).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'data modules': return p_.option($, ($) => p_.from.dictionary($).flatten_to_list(
                                    ($, id): d_out.Statements => Value(
                                        $,
                                        {
                                            'name': id + " ",
                                            //'temp imports': x_imports,
                                        }
                                    )
                                ))
                                case 'functions': return p_.option($, ($) => p_.from.dictionary($).flatten_to_list(
                                    ($, id): d_out.Statements => {
                                        const name = id + " "
                                        return p_.literal.list([
                                            sh.s.namespace(
                                                true,
                                                sh.identifier_escaped(name),
                                                p_.literal.segmented_list<d_out.Statements_.L>([
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
                                                    p_.from.state($.type).decide(
                                                        ($): d_out.Statements => {
                                                            switch ($[0]) {
                                                                case 'transformer': return p_.option($, ($) => p_.literal.list([]))
                                                                case 'refiner': return p_.option($, ($): d_out.Statements => p_.literal.segmented_list<d_out.Statements.L>([

                                                                    p_.from.optional($.error).decide<d_out.Statements>(
                                                                        ($) => {
                                                                            return Value(
                                                                                $,
                                                                                {
                                                                                    'name': "E",
                                                                                }
                                                                            )
                                                                        },
                                                                        () => {
                                                                            return p_.literal.list([])
                                                                        }
                                                                    ),

                                                                    p_.from.optional($.lookups).decide<d_out.Statements>(
                                                                        ($) => {
                                                                            return p_.from.dictionary($).convert_to_list(
                                                                                ($, id) => sh.s.namespace(
                                                                                    true,
                                                                                    sh.identifier_raw("L"),
                                                                                    Value(
                                                                                        p_.from.state($).decide(
                                                                                            ($) => {
                                                                                                switch ($[0]) {
                                                                                                    case 'acyclic': return p_.option($, ($) => $)
                                                                                                    case 'cyclic': return p_.option($, ($) => $)
                                                                                                    case 'stack': return p_.option($, ($) => $)
                                                                                                    default: return p_.exhaustive($[0])
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
                                                                            return p_.literal.list([])
                                                                        }
                                                                    ),
                                                                ]))
                                                                default: return p_.exhaustive($[0])
                                                            }
                                                        }),
                                                    p_.literal.list([
                                                        sh.s.namespace(
                                                            true,
                                                            sh.identifier_raw("P"),
                                                            p_.from.optional($.parameters).decide(
                                                                ($) => p_.from.dictionary($).flatten_to_list(
                                                                    ($, id) => Value(
                                                                        $,
                                                                        {
                                                                            'name': id,
                                                                        }
                                                                    )
                                                                ),
                                                                () => p_.literal.list<d_out.Statements_.L>([])
                                                            )
                                                        )
                                                    ])
                                                ])
                                            ),
                                            sh.s.type_alias(
                                                true,
                                                sh.identifier_escaped(name),
                                                p_.literal.list([]),
                                                sh.t.function_(
                                                    p_.literal.list([]),
                                                    p_.literal.segmented_list([
                                                        p_.literal.list([
                                                            sh.parameter(
                                                                sh.identifier_raw("context"),
                                                                sh.t.type_reference(
                                                                    sh.identifier_escaped(name),
                                                                    p_.literal.list([sh.identifier_raw("I")]),
                                                                    p_.literal.list([])
                                                                ),
                                                            ),
                                                        ]),

                                                        p_.from.state($.type).decide(
                                                            ($) => {
                                                                switch ($[0]) {
                                                                    case 'transformer': return p_.option($, ($): d_out.Type.function_.parameters => p_.literal.list([]))
                                                                    case 'refiner': return p_.option($, ($): d_out.Type.function_.parameters => p_.literal.segmented_list([

                                                                        p_.from.optional($.error).decide(
                                                                            ($) => p_.literal.list([

                                                                                sh.parameter(
                                                                                    sh.identifier_raw("abort"),
                                                                                    sh.t.type_reference(
                                                                                        sh.identifier_raw("pi"),
                                                                                        p_.literal.list([sh.identifier_raw("Abort")]),
                                                                                        p_.literal.list([
                                                                                            sh.t.type_reference(
                                                                                                sh.identifier_escaped(name), p_.literal.list([sh.identifier_raw("E")]), p_.literal.list([])),
                                                                                        ])
                                                                                    ),

                                                                                ),
                                                                            ]),
                                                                            () => p_.literal.list([])
                                                                        ),

                                                                        p_.from.optional($.lookups).decide(
                                                                            ($) => p_.literal.list([

                                                                                sh.parameter(
                                                                                    sh.identifier_raw("lookups"),
                                                                                    sh.t.type_literal(
                                                                                        p_.from.dictionary($).convert_to_list(
                                                                                            ($, id) => sh.tl_propery(
                                                                                                id,
                                                                                                'apostrophized string literal',
                                                                                                true,
                                                                                                sh.t.type_reference(
                                                                                                    sh.identifier_raw("pi"),
                                                                                                    p_.literal.list([
                                                                                                        sh.identifier_raw(p_.from.state($).decide(
                                                                                                            ($) => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'acyclic': return p_.option($, ($) => "static_lookup.Acyclic")
                                                                                                                    case 'cyclic': return p_.option($, ($) => "static_lookup.Cyclic")
                                                                                                                    case 'stack': return p_.option($, ($) => "static_lookup.Stack")
                                                                                                                    default: return p_.exhaustive($[0])
                                                                                                                }
                                                                                                            }))
                                                                                                    ]),
                                                                                                    p_.literal.list([
                                                                                                        sh.t.type_reference(
                                                                                                            sh.identifier_escaped(name), p_.literal.list([sh.identifier_raw("L"), sh.identifier_escaped(id)]), p_.literal.list([]))
                                                                                                    ])
                                                                                                )
                                                                                            ))
                                                                                    ),
                                                                                )

                                                                            ]),
                                                                            () => p_.literal.list([])
                                                                        )
                                                                    ]))
                                                                    default: return p_.exhaustive($[0])
                                                                }
                                                            }),
                                                        p_.from.optional($.parameters).decide(
                                                            ($) => p_.literal.list([

                                                                sh.parameter(
                                                                    sh.identifier_raw("parameters"),
                                                                    sh.t.type_literal(
                                                                        p_.from.dictionary($).convert_to_list(
                                                                            ($, id) => sh.tl_propery(
                                                                                id,
                                                                                'apostrophized string literal',
                                                                                true,
                                                                                sh.t.type_reference(
                                                                                    sh.identifier_escaped(name), p_.literal.list([sh.identifier_raw("P"), sh.identifier_escaped(id)]), p_.literal.list([]))
                                                                            )),
                                                                    )
                                                                ),

                                                            ]),
                                                            () => p_.literal.list([])
                                                        ),
                                                    ]),
                                                    sh.t.type_reference(
                                                        sh.identifier_escaped(name), p_.literal.list([sh.identifier_raw("O")]), p_.literal.list([])),
                                                )
                                            )
                                        ])
                                    }
                                ))
                                default: return p_.exhaustive($[0])
                            }
                        }),

                    p_.literal.list([
                        sh.s.export_(
                            p_.from.state($.content).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'data modules': return p_.option($, ($) => p_.from.dictionary($).convert_to_list(
                                            ($, id) => sh.specifier(
                                                sh.identifier_escaped(id + " "), sh.identifier_escaped(id))
                                        ))
                                        case 'functions': return p_.option($, ($) => p_.from.dictionary($).convert_to_list(
                                            ($, id) => sh.specifier(
                                                sh.identifier_escaped(id + " "), sh.identifier_escaped(id))
                                        ))
                                        default: return p_.exhaustive($[0])
                                    }
                                }),
                            null,
                        )
                    ])


                ])))
                case 'set': return p_.option($, ($) => ['directory', Package_Set($, abort)])
                default: return p_.exhaustive($[0])
            }
        }))

export const Value: p_i.Transformer_With_Parameter<
    d_in.Value,
    d_out.Statements,
    { 'name': string }
> = ($, $p) => {
    return p_.from.state($).decide(
        ($): d_out.Statements => {
            switch ($[0]) {



                case 'boolean': return p_.option($, ($) => p_.literal.list([
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        sh.t.boolean()
                    )
                ]))
                case 'component': return p_.option($, ($) => p_.literal.list([
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        p_.from.state($.location).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'import': return p_.option($, ($) => sh.t.type_reference(
                                        sh.identifier_escaped("i " + $.import),
                                        p_.literal.list([
                                            sh.identifier_escaped($.type)
                                        ]),
                                        p_.literal.list([])
                                    ))
                                    case 'local': return p_.option($, ($) => sh.t.type_reference(
                                        sh.identifier_escaped($ + " "),
                                        //tail
                                        p_.literal.list([]),
                                        p_.literal.list([])
                                    ))
                                    default: return p_.exhaustive($[0])
                                }
                            })
                    )
                ]))
                case 'dictionary': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        Value(
                            $,
                            {
                                'name': "D",
                            }
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        sh.t.type_reference(
                            sh.identifier_raw("pi"),
                            p_.literal.list([
                                sh.identifier_raw("Dictionary")
                            ]),
                            p_.literal.list([
                                sh.t.type_reference(
                                    sh.identifier_escaped($p.name),
                                    p_.literal.list([sh.identifier_raw("D")]),
                                    p_.literal.list([])
                                )
                            ])
                        )
                    )
                ]))
                case 'group': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.from.dictionary($).flatten_to_list(
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
                        p_.literal.list([]),
                        sh.t.type_literal(p_.from.dictionary($).convert_to_list(
                            ($, id) => sh.tl_propery(
                                id,
                                'apostrophized string literal',
                                true,
                                sh.t.type_reference(
                                    sh.identifier_escaped($p.name),
                                    p_.literal.list([sh.identifier_escaped(id)]),
                                    p_.literal.list([])
                                )
                            )))
                    )
                ]))
                case 'list': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        Value(
                            $,
                            {
                                'name': "L",
                            }
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        sh.t.type_reference(
                            sh.identifier_raw("pi"),
                            p_.literal.list([
                                sh.identifier_raw("List")
                            ]),
                            p_.literal.list([
                                sh.t.type_reference(
                                    sh.identifier_escaped($p.name),
                                    p_.literal.list([
                                        sh.identifier_raw("L")
                                    ]),
                                    p_.literal.list([])
                                )
                            ])
                        )
                    )
                ]))
                case 'nothing': return p_.option($, ($) => p_.literal.list([
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        sh.t.null_()
                    )
                ]))
                case 'number': return p_.option($, ($) => p_.literal.list([
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        sh.t.number()
                    )
                ]))
                case 'optional': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        Value(
                            $,
                            {
                                'name': "O",
                            }
                        )
                    ),
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        sh.t.type_reference(
                            sh.identifier_raw("pi"),
                            p_.literal.list([
                                sh.identifier_raw("Optional_Value")
                            ]),
                            p_.literal.list([
                                sh.t.type_reference(
                                    sh.identifier_escaped($p.name),
                                    p_.literal.list([
                                        sh.identifier_raw("O")
                                    ]),
                                    p_.literal.list([])
                                )
                            ])
                        )
                    )
                ]))
                case 'reference': return p_.option($, ($) => p_.literal.list([
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        p_variables(() => {
                            const Reference = ($: d_in.Value.reference) => sh.t.type_reference(
                                //start
                                p_.from.state($.location).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'import': return p_.option($, ($) => sh.identifier_escaped("i " + $.import))
                                            case 'local': return p_.option($, ($) => sh.identifier_escaped($ + " "))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }),
                                //tail
                                p_.literal.segmented_list([
                                    p_.from.state($.location).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'import': return p_.option($, ($) => p_.literal.list([
                                                    sh.identifier_escaped($.type + " ")
                                                ]))
                                                case 'local': return p_.option($, ($) => p_.literal.list([]))
                                                default: return p_.exhaustive($[0])
                                            }
                                        }),
                                    p_.from.list($['sub selection']).flatten(
                                        ($) => p_.from.state($).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'dictionary': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("D")]))
                                                    case 'group': return p_.option($, ($) => p_.literal.list([sh.identifier_escaped($)]))
                                                    case 'list': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("L")]))
                                                    case 'optional': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("O")]))
                                                    case 'state': return p_.option($, ($) => p_.literal.list([sh.identifier_escaped($)]))
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }),
                                    ),
                                ]),
                                p_.literal.list([])
                            )
                            return $.cyclic
                                ? sh.t.type_reference(
                                    sh.identifier_raw("pi"),
                                    p_.literal.list([
                                        sh.identifier_raw("Circular_Dependency")
                                    ]),
                                    p_.literal.list([
                                        Reference($)
                                    ])
                                )
                                : Reference($)
                        })

                    )
                ]))
                case 'state': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.from.dictionary($).flatten_to_list(
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
                        p_.literal.list([]),
                        p_.from.dictionary($).on_has_entries(
                            ($) => sh.t.union(
                                p_.from.dictionary($).convert_to_list(
                                    ($, id) => sh.t.tuple(
                                        'readonly',
                                        p_.literal.list([
                                            sh.t.literal_type(
                                                sh.string_literal(id, 'apostrophe')
                                            ),
                                            sh.t.type_reference(
                                                sh.identifier_escaped($p.name),
                                                p_.literal.list([
                                                    sh.identifier_escaped(id)
                                                ]),
                                                p_.literal.list([])
                                            )
                                        ])
                                    )
                                )
                            ),
                            () => sh.t.never()
                        )
                    )
                ]))
                case 'text': return p_.option($, ($) => p_.literal.list([
                    sh.s.type_alias(
                        true,
                        sh.identifier_escaped($p.name),
                        p_.literal.list([]),
                        sh.t.string()
                    )
                ]))
                default: return p_.exhaustive($[0])
            }
        })
}