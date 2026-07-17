import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../schemas/typescript_light.js"
import type * as s_out from "../../../schemas/paragraph.js"
import type * as s_serialization from "../../../schemas/serialization.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

//dependencies
import * as ser_primitives from "../../serializers/primitives.js"

namespace declarations {

    export type Identifier = p_i.Transformer<
        s_in.Identifier,
        s_out.Phrase
    >

    export type String_Literal_pseudo = p_i.Transformer_With_Parameter<
        string,
        s_out.Phrase,
        {
            'delimiter': "quote" | "apostrophe"
        }
    >

    export type String_Literal = p_i.Transformer<
        s_in.String_Literal,
        s_out.Phrase
    >

    export type Source_File = p_i.Transformer_With_Parameter<
        s_in.Source_File,
        s_out.Paragraph,
        s_serialization.TypeScript_Parameters
    >

    export type Statements = p_i.Transformer_With_Parameter<
        s_in.Statements,
        s_out.Paragraph,
        s_serialization.TypeScript_Parameters
    >

    export type Expression = p_i.Transformer_With_Parameter<
        s_in.Expression_,
        s_out.Phrase.composed,
        {
            'replace empty type literals by symbol': boolean
            'object literal needs parentheses': boolean
        }
    >

    export type Type = p_i.Transformer_With_Parameter<
        s_in.Type,
        s_out.Phrase,
        s_serialization.TypeScript_Parameters
    >

}

export const Source_File: declarations.Source_File = ($, $p) => Statements($.statements, $p)


export const Identifier: declarations.Identifier = ($) => {
    return sh.ph.text($.value)
}


export const String_Literal_pseudo: declarations.String_Literal_pseudo = ($, $p) => {
    return sh.ph.text($p.delimiter === "quote"
            ? ser_primitives.Quoted_Text($)
            : ser_primitives.Apostrophed_Text($))
}

export const String_Literal: declarations.String_Literal = ($) => {
    return sh.ph.text($.delimiter[0] === "quote"
        ? ser_primitives.Quoted_Text($.value)
        : ser_primitives.Apostrophed_Text($.value))
}

export const Statements: declarations.Statements = ($, $p) => sh.pg.deprecated_composed(p_.from.list($).map(
    ($) =>
        p_.from.state($).decide(
            ($): s_out.Paragraph => {
                switch ($[0]) {
                    case 'block': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            sh.ph.text("{"),
                            sh.ph.indent(
                                Statements($, $p),
                            ),
                            sh.ph.text("}"),
                        ])
                    ]))
                    case 'export': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            sh.ph.text("export "),
                            p_.from.state($.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'named exports': return p_.option($, ($) => sh.ph.composed([
                                            sh.ph.text("{ "),
                                            sh.ph.indent(
                                                sh.pg.sentences(p_.from.list($.specifiers).map(
                                                    ($) => sh.sentence([
                                                        Identifier($.name),
                                                        p_.from.optional($.as).decide(
                                                            ($) => sh.ph.composed([
                                                                sh.ph.text(" as "),
                                                                Identifier($),
                                                            ]),
                                                            () => sh.ph.nothing(),
                                                        ),
                                                        sh.ph.text(", ")
                                                    ]))),
                                            ),
                                            sh.ph.text("}"),
                                            p_.from.optional($.from).decide(
                                                ($) => sh.ph.composed([
                                                    sh.ph.text(" from "),
                                                    String_Literal($),
                                                ]),
                                                () => sh.ph.nothing()
                                            )
                                        ]))
                                        default: return p_.exhaustive($[0])
                                    }
                                }),
                        ])
                    ]))
                    case 'expression': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence(
                            Expression(
                                $,
                                {
                                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                    'object literal needs parentheses': true,
                                }
                            )
                        )
                    ]))
                    case 'import': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            sh.ph.text("import "),
                            p_.from.state($.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'default': return p_.option($, ($) => sh.ph.composed([
                                            Identifier($),
                                        ]))
                                        case 'named': return p_.option($, ($) => sh.ph.composed([
                                            sh.ph.text("{"),
                                            sh.ph.indent(
                                                sh.pg.sentences(p_.from.list($.specifiers).map(
                                                    ($) => sh.sentence([
                                                        Identifier($.name),
                                                        p_.from.optional($.as).decide(
                                                            ($) => sh.ph.composed([
                                                                sh.ph.text(" as "),
                                                                Identifier($),
                                                            ]),
                                                            () => sh.ph.nothing(),
                                                        ),
                                                        sh.ph.text(",")
                                                    ]))),
                                            ),
                                            sh.ph.text("}"),
                                        ]))
                                        case 'namespace': return p_.option($, ($) => sh.ph.composed([
                                            sh.ph.text("* as "),
                                            Identifier($),
                                        ]))
                                        default: return p_.exhaustive($[0])
                                    }
                                }),
                            sh.ph.text(" from "),
                            String_Literal($.from),
                        ])
                    ]))
                    case 'module declaration': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            $.export ?
                                sh.ph.text("export ")
                                : sh.ph.nothing(),
                            sh.ph.text("namespace "),
                            Identifier($['name']),
                            sh.ph.text(" "),
                            sh.ph.composed([
                                sh.ph.text("{"),
                                sh.ph.indent(
                                    sh.pg.deprecated_composed([
                                        Statements($.block, $p),
                                        sh.pg.sentences([
                                            sh.sentence([]),
                                        ])
                                    ])),
                                sh.ph.text("}"),
                            ])
                        ])
                    ]))
                    case 'return': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence(
                            p_.literal.segmented_list<s_out.Phrase.composed.L>([
                                p_.literal.list([
                                    sh.ph.text("return "),
                                ]),
                                p_.from.optional($).decide(
                                    ($) => Expression(
                                        $,
                                        {
                                            'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                            'object literal needs parentheses': false,
                                        }
                                    ),
                                    () => p_.literal.list([]),
                                )
                            ])
                        ),
                    ]))
                    case 'switch': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence(p_.literal.segmented_list([
                            p_.literal.list([
                                sh.ph.text("switch ("),
                            ]),
                            Expression(
                                $.expression,
                                {
                                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                    'object literal needs parentheses': false,
                                }
                            ),
                            p_.literal.list([
                                sh.ph.text(") {"),
                                sh.ph.indent(
                                    sh.pg.sentences(
                                        p_.from.list($.clauses).map(
                                            ($) => sh.sentence(
                                                p_.literal.segmented_list([
                                                    p_.from.state($.type).decide(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case 'case': return p_.option($, ($) => p_.literal.segmented_list([
                                                                    p_.literal.list([
                                                                        sh.ph.text("case "),
                                                                    ]),
                                                                    Expression(
                                                                        $,
                                                                        {
                                                                            'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                                                            'object literal needs parentheses': true,
                                                                        }
                                                                    ),
                                                                    p_.literal.list([
                                                                        sh.ph.text(":"),
                                                                    ]),
                                                                ]))
                                                                case 'default': return p_.option($, ($) => p_.literal.list([
                                                                    sh.ph.text("default:")
                                                                ]))
                                                                default: return p_.exhaustive($[0])
                                                            }
                                                        })
                                                    ,
                                                    p_.literal.list([
                                                        sh.ph.indent(
                                                            Statements($.statements, $p)
                                                        )
                                                    ]),
                                                ])
                                            )
                                        ),
                                    )
                                ),
                                sh.ph.text("}"),
                            ])
                        ])),
                    ]))
                    case 'type alias declaration': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            $.export ? sh.ph.text("export ") : sh.ph.nothing(),
                            sh.ph.text("type "),
                            Identifier($['name']),
                            sh.ph.rich_phrase(
                                p_.from.list($['parameters']).map(
                                    ($) => Identifier($)),
                                sh.ph.nothing(),
                                sh.ph.text("<"),
                                sh.ph.text(", "),
                                sh.ph.text(">"),
                            ),
                            sh.ph.text(" = "),
                            Type($['type'], $p),
                        ])
                    ]))
                    case 'variable': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            $.export ? sh.ph.text("export ") : sh.ph.nothing(),
                            $.const ? sh.ph.text("const ") : sh.ph.text("let "),
                            Identifier($['name']),
                            p_.from.optional($.type).decide(
                                ($) => sh.ph.composed([
                                    sh.ph.text(": "),
                                    Type($, $p)
                                ]),
                                () => sh.ph.nothing(),
                            ),
                            sh.ph.composed(p_.from.optional($.expression).decide(
                                ($) => p_.literal.segmented_list([
                                    p_.literal.list([
                                        sh.ph.text(" = "),
                                    ]),
                                    Expression(
                                        $,
                                        {
                                            'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                            'object literal needs parentheses': false,
                                        }
                                    )
                                ]),
                                () => p_.literal.list([]),
                            )),
                        ])
                    ]))
                    default: return p_.exhaustive($[0])
                }
            })
))

export const Expression: declarations.Expression = ($, $p) => p_.from.state($).decide(
    ($): s_out.Phrase.composed => {
        switch ($[0]) {
            case 'assignment': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.left, $p),
                p_.literal.list([
                    sh.ph.text(" = "),
                ]),
                Expression($.right, {
                    'object literal needs parentheses': false,
                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                }),
            ]))
            case 'array literal': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.text("["),
                    sh.ph.rich_phrase(
                        p_.from.list($).flatten(
                            ($) => Expression($, {
                                'object literal needs parentheses': false,
                                'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                            })),
                        sh.ph.nothing(),
                        sh.ph.nothing(),
                        sh.ph.text(", "),
                        sh.ph.nothing(),
                    )
                ]),
                p_.literal.list([
                    sh.ph.text("]"),
                ]),
            ]))
            case 'arrow function': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.text("("),
                    sh.ph.rich_phrase(
                        p_.from.list($.parameters).map(
                            ($) => sh.ph.composed([
                                Identifier($.name),
                                p_.from.optional($.type).decide(
                                    ($) => sh.ph.composed([
                                        sh.ph.text(": "),
                                        Type($, $p)
                                    ]),
                                    () => sh.ph.nothing(),
                                ),
                            ])),
                        sh.ph.nothing(),
                        sh.ph.nothing(),
                        sh.ph.text(", "),
                        sh.ph.nothing(),
                    ),
                    sh.ph.text(")"),
                ]),
                p_.from.optional($['return type']).decide(
                    ($) => p_.literal.segmented_list([
                        p_.literal.list([
                            sh.ph.text(": "),
                        ]),
                        p_.literal.list([
                            Type($, $p)
                        ])
                    ]),
                    () => p_.literal.list([]),
                ),
                p_.literal.list([
                    sh.ph.text(" => "),
                ]),
                p_.from.state($.body).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'block': return p_.option($, ($) => p_.literal.list([
                                sh.ph.text("{"),
                                sh.ph.indent(
                                    Statements($, $p),
                                ),
                                sh.ph.text("}"),
                            ]))
                            case 'expression': return p_.option($, ($) => Expression(
                                $,
                                {
                                    'object literal needs parentheses': true,
                                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                }
                            ))
                            default: return p_.exhaustive($[0])
                        }
                    }),
            ]))
            case 'call': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($['function selection'], $p),
                p_.literal.list([
                    sh.ph.text("("),
                    sh.ph.indent(
                        sh.pg.sentences(
                            p_.from.list($['arguments']).map(
                                ($) => sh.sentence(
                                    p_.literal.segmented_list([
                                        Expression(
                                            $,
                                            {
                                                'object literal needs parentheses': false,
                                                'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                            }
                                        ),
                                        p_.literal.list([
                                            sh.ph.text(",")
                                        ]),
                                    ])
                                )
                            )
                        ),
                    ),
                    sh.ph.text(")"),
                ])
            ]))
            case 'compare': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.left, $p),
                p_.literal.list([
                    sh.ph.text(" "),
                    p_.from.state($.operator).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'loosely equal': return p_.option($, ($) => sh.ph.text("=="))
                                case 'strictly equal': return p_.option($, ($) => sh.ph.text("==="))
                                case 'loosely not equal': return p_.option($, ($) => sh.ph.text("!="))
                                case 'strictly not equal': return p_.option($, ($) => sh.ph.text("!=="))
                                case 'smaller than': return p_.option($, ($) => sh.ph.text("<"))
                                case 'smaller than or equal': return p_.option($, ($) => sh.ph.text("<="))
                                case 'greater than': return p_.option($, ($) => sh.ph.text(">"))
                                case 'greater than or equal': return p_.option($, ($) => sh.ph.text(">="))
                                default: return p_.exhaustive($[0])
                            }
                        }),
                    sh.ph.text(" "),
                ]),
                Expression($.right, {
                    'object literal needs parentheses': false,
                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                }),
            ]))
            case 'conditional': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.condition, $p),
                p_.literal.list([
                    sh.ph.indent(
                        sh.pg.sentences(
                            p_.literal.list([
                                sh.sentence(p_.literal.segmented_list([
                                    p_.literal.list([
                                        sh.ph.text("? "),
                                    ]),
                                    Expression($['if true'],
                                        {
                                            'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                            'object literal needs parentheses': false,
                                        }
                                    ),
                                ])),
                                sh.sentence(p_.literal.segmented_list([
                                    p_.literal.list([
                                        sh.ph.text(": "),
                                    ]),
                                    Expression($['if false'], {
                                        'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                        'object literal needs parentheses': false,
                                    }),
                                ])),
                            ])
                        )
                    ),
                ])
            ]))
            case 'element access': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.collection, $p),
                p_.literal.list([
                    sh.ph.text("["),
                ]),
                Expression($.index, $p),
                p_.literal.list([
                    sh.ph.text("]"),
                ])
            ]))
            case 'false': return p_.option($, ($) => p_.literal.list([
                sh.ph.text("false")
            ]))
            case 'identifier': return p_.option($, ($) => p_.literal.list([
                Identifier($)
            ]))
            case 'null': return p_.option($, ($) => p_.literal.list([
                sh.ph.text("null")
            ]))
            case 'number literal': return p_.option($, ($) => p_.literal.list([
                sh.ph.text(ser_primitives.Float($))
            ]))
            case 'object literal': return p_.option($, ($) => p_.literal.list([
                $p['object literal needs parentheses']
                    ? sh.ph.text("(")
                    : sh.ph.nothing(),
                sh.ph.text("{"),
                sh.ph.indent(
                    sh.pg.sentences(
                        p_.from.list($.properties).map(
                            ($) => sh.sentence(p_.literal.segmented_list([
                                p_.literal.list([
                                    p_.from.state($.key).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'identifier': return p_.option($, ($) => Identifier($))
                                                case 'string literal': return p_.option($, ($) => String_Literal($))
                                                default: return p_.exhaustive($[0])
                                            }
                                        }
                                    ),
                                    sh.ph.text(": ")
                                ]),
                                Expression(
                                    $.value,
                                    {
                                        'object literal needs parentheses': false,
                                        'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                    }
                                ),
                                p_.literal.list([
                                    sh.ph.text(",")
                                ])
                            ]))
                        )),
                ),
                sh.ph.text("}"),
                $p['object literal needs parentheses']
                    ? sh.ph.text(")")
                    : sh.ph.nothing(),
            ]))
            case 'parenthesized': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.text("("),
                ]),
                Expression($, {
                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                    'object literal needs parentheses': false,
                }),
                p_.literal.list([
                    sh.ph.text(")"),
                ])
            ]))
            case 'property access': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.object, $p),
                p_.literal.list([
                    sh.ph.text("."),
                    Identifier($.property),
                ])
            ]))
            case 'string literal': return p_.option($, ($) => p_.literal.list([
                sh.ph.text($['delimiter'][0] === "quote" 
                    ? ser_primitives.Quoted_Text($['value']) 
                    : ser_primitives.Apostrophed_Text($['value']))
            ]))
            case 'true': return p_.option($, ($) => p_.literal.list([
                sh.ph.text("true")
            ]))
            case 'unary operation': return p_.option($, ($) => {
                const operand = $.operand
                return p_.literal.segmented_list([
                    p_.literal.list([
                        p_.from.state($.operator).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'negation': return p_.option($, ($) => sh.ph.text("-"))
                                    case 'logical not': return p_.option($, ($) => sh.ph.text("!"))
                                    default: return p_.exhaustive($[0])
                                }
                            }
                        )
                    ]),
                    Expression(operand, $p)
                ])
            })
            default: return p_.exhaustive($[0])
        }
    })

export const Type: declarations.Type = ($, $p) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'boolean': return p_.option($, ($) => sh.ph.text("boolean"))
            case 'function': return p_.option($, ($) => sh.ph.composed([
                sh.ph.rich_phrase(
                    p_.from.list($['type parameters']).map(
                        ($) => Type($, $p)),
                    sh.ph.nothing(),
                    sh.ph.text("<"),
                    sh.ph.text(", "),
                    sh.ph.text(">"),
                ),
                sh.ph.text("("),
                sh.ph.indent(
                    sh.pg.sentences(p_.from.list($['parameters']).map(
                        ($) => sh.sentence(p_.literal.list([
                            Identifier($.name),
                            p_.from.optional($.type).decide(
                                ($) => sh.ph.composed([
                                    sh.ph.text(": "),
                                    Type($, $p)
                                ]),
                                () => sh.ph.nothing(),
                            ),
                            sh.ph.text(",")
                        ])))
                    ),
                ),
                sh.ph.text(") => "),
                Type($['return'], $p)
            ]))
            case 'literal type': return p_.option($, ($) => String_Literal($)) //FIX, implement a switch for the delimiter
            case 'never': return p_.option($, ($) => sh.ph.text("never"))
            case 'null': return p_.option($, ($) => sh.ph.text("null"))
            case 'number': return p_.option($, ($) => sh.ph.text("number"))
            case 'string': return p_.option($, ($) => sh.ph.text("string"))
            case 'tuple': return p_.option($, ($) => sh.ph.composed([
                $.readonly ? sh.ph.text("readonly ") : sh.ph.nothing(),
                sh.ph.text("["),
                sh.ph.rich_phrase(
                    p_.from.list($.elements).map(
                        ($) => Type($, $p)),
                    sh.ph.nothing(),
                    sh.ph.nothing(),
                    sh.ph.text(", "),
                    sh.ph.nothing(),
                ),
                sh.ph.text("]"),
            ]))
            case 'type literal': return p_.option($, ($) => $p['replace empty type literals by symbol'] && p_.from.list($.properties).on_has_items(
                () => true,
                () => false,
            )
                ? sh.ph.text("symbol")
                : sh.ph.composed([
                    sh.ph.text("{"),
                    sh.ph.indent(
                        sh.pg.sentences(
                            p_.from.list($.properties).map(
                                ($) => sh.sentence([
                                    sh.ph.composed([
                                        $['readonly'] ? sh.ph.text("readonly ") : sh.ph.nothing(),
                                        p_.from.state($.key).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'identifier': return p_.option($, ($) => Identifier($))
                                                    case 'string literal': return p_.option($, ($) => String_Literal($))
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }),
                                        sh.ph.text(": "),
                                        Type($.type, $p),
                                    ])
                                ])
                            )
                        ),
                    ),
                    sh.ph.text("}")
                ])
            )
            case 'type reference': return p_.option($, ($) => sh.ph.composed([
                Identifier($['start']),
                sh.ph.composed(p_.from.list($['tail']).map(
                    ($) => sh.ph.composed([
                        sh.ph.text("."),
                        Identifier($),
                    ]))),
                p_.from.list($['type arguments']).on_has_items(
                    ($) => sh.ph.composed([
                        sh.ph.text("<"),
                        sh.ph.rich_paragraph(
                            p_.from.list($).map(
                                ($) => sh.sentence(p_.literal.list([
                                    Type($, $p)
                                ]))
                            ),
                            sh.ph.nothing(),
                            sh.ph.nothing(),
                            sh.ph.text(","),
                            sh.ph.nothing(),
                        ),
                        sh.ph.text(">"),
                    ]),
                    () => sh.ph.nothing()
                ),
            ]))
            case 'union': return p_.option($, ($) => sh.ph.indent(
                sh.pg.sentences(p_.from.list($).map(
                    ($) => sh.sentence(
                        p_.literal.list([
                            sh.ph.text("| "),
                            Type($, $p),
                        ])
                    )
                ))
            ))
            case 'void': return p_.option($, ($) => sh.ph.text("void"))
            default: return p_.exhaustive($[0])
        }
    })