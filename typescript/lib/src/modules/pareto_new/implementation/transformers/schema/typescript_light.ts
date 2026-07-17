import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import type * as s_out from "../../../../typescript_light/schemas/typescript_light.js"
namespace declarations {
    export type Root = p_.Transformer<
        s_in.Root,
        s_out.Directory
    >
}

//schemas
import type * as s_in from "../../../interface/schemas/schema.js"

//dependencies

//shorthands
import * as sh from "../../../../typescript_light/shorthands/typescript_light/target.js"


export const Root: declarations.Root = ($) => sh.directory_of_files(p_.from.dictionary($['schemas']).map( //create a file for each source schema
    ($, id) => {
        return {
            'statements': p_.literal.segmented_list([
                p_.literal.list([
                    sh.s.import_namespace(
                        sh.identifier_escaped("p "),
                        sh.string_literal("pareto-core/interface/data", 'apostrophe')
                    ),
                ]),
                p_.from.dictionary($['types']).flatten_to_list( //create a variable for each type
                    ($, id) => Value(
                        $.root,
                        {
                            'name': id + " ",
                            'export': false, //don't export these root types directly, because they contain a trailing underscore
                            //the trailing underscore is used to avoid clashes in the namespace hierarchy; references to TypeScript types ending in an underscore
                            //will always refer to type aliases at the root (representingPareto types as opposed to Pareto values)
                            //we will export these root types separately, with the underscore removed
                        }
                    )
                ),
                p_.literal.list([
                    //export the root types, with the trailing underscore removed
                    sh.s.export_(
                        p_.from.dictionary($.types).convert_to_list(
                            ($, id) => sh.specifier(
                                sh.identifier_escaped(id + " "), sh.identifier_escaped(id))
                        ),
                        null,
                    )
                ])
            ])
        }
    }
))

export const Value: p_i.Transformer_With_Parameter<
    s_in.Value,
    s_out.Statements,
    {
        'export': boolean
        'name': string
    }
> = ($, $p) => p_.literal.segmented_list([
    //first; if the value contains sub values, define them in a namespace
    p_.from.state($).decide(
        ($): s_out.Statements => {
            switch ($[0]) {
                case 'boolean': return p_.option($, ($) => p_.literal.list([
                ]))
                case 'component': return p_.option($, ($) => p_.literal.list([
                ]))
                case 'dictionary': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        $p.export,
                        sh.identifier_escaped($p.name),
                        Value(
                            $,
                            {
                                'name': "D",
                                'export': true,
                            }
                        )
                    ),
                ]))
                case 'group': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        $p.export,
                        sh.identifier_escaped($p.name),
                        p_.from.dictionary($).flatten_to_list(
                            ($, id) => Value(
                                $,
                                {
                                    'name': id,
                                    'export': true,
                                }
                            )
                        )
                    ),
                ]))
                case 'list': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        $p.export,
                        sh.identifier_escaped($p.name),
                        Value(
                            $,
                            {
                                'name': "L",
                                'export': true,
                            }
                        )
                    ),
                ]))
                case 'nothing': return p_.option($, ($) => p_.literal.list([
                ]))
                case 'number': return p_.option($, ($) => p_.literal.list([
                ]))
                case 'optional': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        $p.export,
                        sh.identifier_escaped($p.name),
                        Value(
                            $,
                            {
                                'name': "O",
                                'export': true,
                            }
                        )
                    ),
                ]))
                case 'reference': return p_.option($, ($) => p_.literal.list([
                ]))
                case 'state': return p_.option($, ($) => p_.literal.list([
                    sh.s.namespace(
                        $p.export,
                        sh.identifier_escaped($p.name),
                        p_.from.dictionary($.options).flatten_to_list(
                            ($, id) => Value(
                                $,
                                {
                                    'name': id,
                                    'export': true,
                                }
                            )
                        )
                    ),
                ]))
                case 'text': return p_.option($, ($) => p_.literal.list([
                ]))
                default: return p_.exhaustive($[0])
            }
        }
    ),
    //then; create a type alias for the actual value
    p_.literal.list([
        sh.s.type_alias(
            $p.export,
            sh.identifier_escaped($p.name),
            p_.literal.list([]),
            p_.from.state($).decide(
                ($): s_out.Type => {
                    switch ($[0]) {
                        case 'boolean': return p_.option($, ($) => sh.t.boolean())
                        case 'component': return p_.option($, ($) => p_.from.state($['type location']).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'import': return p_.option($, ($) => sh.t.type_reference(
                                        sh.identifier_escaped("i " + $['schema']),
                                        p_.literal.list([
                                            sh.identifier_escaped($.type)
                                        ]),
                                        p_.literal.list([])
                                    ))
                                    case 'this schema': return p_.option($, ($) => sh.t.type_reference(
                                        sh.identifier_escaped($p.name),
                                        //tail
                                        p_.literal.list([]),
                                        p_.literal.list([])
                                    ))
                                    default: return p_.exhaustive($[0])
                                }
                            }
                        ))
                        case 'dictionary': return p_.option($, ($) => sh.t.type_reference(
                            sh.identifier_raw("p_"),
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
                        ))
                        case 'group': return p_.option($, ($) => sh.t.type_literal(
                            p_.from.dictionary($).convert_to_list(
                                ($, id) => sh.tl_propery(
                                    id,
                                    'apostrophized string literal',
                                    true,
                                    sh.t.type_reference(
                                        sh.identifier_escaped($p.name),
                                        p_.literal.list([sh.identifier_escaped(id)]),
                                        p_.literal.list([])
                                    )
                                )
                            )
                        ))
                        case 'list': return p_.option($, ($) => sh.t.type_reference(
                            sh.identifier_raw("p_"),
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
                        ))
                        case 'nothing': return p_.option($, ($) => sh.t.null_())
                        case 'number': return p_.option($, ($) => sh.t.number())
                        case 'optional': return p_.option($, ($) => sh.t.type_reference(
                            sh.identifier_raw("p_"),
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
                        ))
                        case 'reference': return p_.option($, ($) => p_variables(() => {
                            const Reference = ($: s_in.Value.reference) => sh.t.type_reference(
                                //start
                                p_.from.state($['type location']).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'import': return p_.option($, ($) => sh.identifier_escaped("i " + $['schema']))
                                            case 'this schema': return p_.option($, ($) => sh.identifier_escaped($p.name))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }),
                                //tail
                                p_.literal.segmented_list([
                                    p_.from.state($['type location']).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'import': return p_.option($, ($) => p_.literal.list([
                                                    sh.identifier_escaped($.type + " ")
                                                ]))
                                                case 'this schema': return p_.option($, ($) => p_.literal.list([]))
                                                default: return p_.exhaustive($[0])
                                            }
                                        }),
                                    p_.from.list($['sub selection']).flatten(
                                        ($) => p_.from.state($).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'dictionary': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("D")]))
                                                    case 'group': return p_.option($, ($) => p_.literal.list([sh.identifier_escaped($.property)]))
                                                    case 'list': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("L")]))
                                                    case 'optional': return p_.option($, ($) => p_.literal.list([sh.identifier_raw("O")]))
                                                    case 'state': return p_.option($, ($) => p_.literal.list([sh.identifier_escaped($.option)]))
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }),
                                    ),
                                ]),
                                p_.literal.list([])
                            )
                            return $.cyclic
                                ? sh.t.type_reference(
                                    sh.identifier_raw("p_"),
                                    p_.literal.list([
                                        sh.identifier_raw("Circular_Dependency")
                                    ]),
                                    p_.literal.list([
                                        Reference($)
                                    ])
                                )
                                : Reference($)
                        }))
                        case 'state': return p_.option($, ($) => p_.from.dictionary($.options).on_has_entries(
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
                            () => sh.t.never() //if there are no options, the state can not be initialized.
                            //this is definitely a design flaw, but nevertheless, the tooling should be able to handle it gracefully, and produce valid TypeScript code, even if it is not very useful
                        ))
                        case 'text': return p_.option($, ($) => sh.t.string())
                        default: return p_.exhaustive($[0])
                    }
                }
            )
        ),
    ]),
])