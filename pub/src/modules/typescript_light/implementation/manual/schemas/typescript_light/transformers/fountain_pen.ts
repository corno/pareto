import * as _p from 'pareto-core/dist/assign'
import * as _pdev from 'pareto-core-dev'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
import * as d_in from "../../../../../../../interface/generated/liana/schemas/typescript_light/data"

import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed_string"
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted_string"
import { $$ as s_number_default } from "../../../primitives/integer/serializers/decimal"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Directory = ($: d_in.Directory): d_out.Directory => {
    return $.__d_map(($, id) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'file': return _p.ss($, ($) => ['file', Statements(
                $['statements'],
                { 'replace empty type literals by null': true }
            )])
            case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
            default: return _p.au($[0])
        }
    }))
}

export const Identifier = (
    $: d_in.Identifier
): d_out.Phrase => {
    return sh.ph.literal($.value)
}


export const String_Literal_pseudo = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out.Phrase => {
    return sh.ph.serialize($p.delimiter === "quote" ? s_quoted($) : s_apostrophed($))
}

export const String_Literal = (
    $: d_in.String_Literal,
): d_out.Phrase => {
    return sh.ph.serialize($.delimiter[0] === "quote" ? s_quoted($.value) : s_apostrophed($.value))
}

export const Statements = (
    $: d_in.Statements,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Paragraph => sh.pg.composed($.__l_map(($) =>
    _p.decide.state($, ($): d_out.Paragraph => {
        switch ($[0]) {
            case 'block': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([]),
                    sh.sentence([
                        sh.ph.literal("{"),
                        sh.ph.indent(
                            Statements($, $p),
                        ),
                        sh.ph.literal("}"),
                ])
            ]))
            case 'export': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([]),
                sh.sentence([
                        sh.ph.literal("export "),
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'named exports': return _p.ss($, ($) => sh.ph.composed([
                                    sh.ph.literal("{ "),
                                    sh.ph.indent(
                                        sh.pg.sentences($.specifiers.__l_map(($) => sh.sentence([
                                            Identifier($.name),
                                            $.as.__decide(
                                                ($) => sh.ph.composed([
                                                    sh.ph.literal(" as "),
                                                    Identifier($),
                                                ]),
                                                () => sh.ph.nothing(),
                                            ),
                                            sh.ph.literal(", ")
                                        ]))),
                                    ),
                                    sh.ph.literal("}"),
                                    $.from.__decide(
                                        ($) => sh.ph.composed([
                                            sh.ph.literal(" from "),
                                            String_Literal($),
                                        ]),
                                        () => sh.ph.nothing()
                                    )
                                ]))
                                default: return _p.au($[0])
                            }
                        }),
                ])
            ]))
            case 'expression': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([
                    Expression(
                        $,
                        {
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                            'object literal needs parentheses': true,
                        }
                    )
                ])
            ]))
            case 'import': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([]),
                sh.sentence([
                    sh.ph.literal("import "),
                    _p.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'default': return _p.ss($, ($) => sh.ph.composed([
                                Identifier($),
                            ]))
                            case 'named': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("{"),
                                sh.ph.indent(
                                    sh.pg.sentences($.specifiers.__l_map(($) => sh.sentence([
                                        Identifier($.name),
                                        $.as.__decide(
                                            ($) => sh.ph.composed([
                                                sh.ph.literal(" as "),
                                                Identifier($),
                                            ]),
                                            () => sh.ph.nothing(),
                                        ),
                                        sh.ph.literal(",")
                                    ]))),
                                ),
                                sh.ph.literal("}"),
                            ]))
                            case 'namespace': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("* as "),
                                Identifier($),
                            ]))
                            default: return _p.au($[0])
                        }
                    }),
                    sh.ph.literal(" from "),
                    String_Literal($.from),
                ])
            ]))
            case 'module declaration': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([]),
                sh.sentence([
                    $.export ? sh.ph.literal("export ") : sh.ph.nothing(),
                    sh.ph.literal("namespace "),
                    Identifier($['name']),
                    sh.ph.literal(" "),
                    sh.ph.composed([
                        sh.ph.literal("{"),
                        sh.ph.indent(sh.pg.composed([
                            Statements($.block, $p),
                            sh.pg.sentences([
                                sh.sentence([]),
                            ])
                        ])),
                        sh.ph.literal("}"),
                    ])
                ])
            ]))
            case 'return': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("return "),
                    $.__decide(
                        ($) => Expression(
                            $,
                            {
                                'replace empty type literals by null': $p['replace empty type literals by null'],
                                'object literal needs parentheses': false,
                            }
                        ),
                        () => sh.ph.nothing(),
                    )

                ]),
            ]))
            case 'switch': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("switch ("),
                    Expression(
                        $.expression,
                        {
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                            'object literal needs parentheses': false,
                        }
                    ),
                    sh.ph.literal(") {"),
                    sh.ph.indent(sh.pg.sentences(
                        $.clauses.__l_map(($) => sh.sentence([
                            _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'case': return _p.ss($, ($) => sh.ph.composed([
                                        sh.ph.literal("case "),
                                        Expression(
                                            $,
                                            {
                                                'replace empty type literals by null': $p['replace empty type literals by null'],
                                                'object literal needs parentheses': true,
                                            }
                                        ),
                                        sh.ph.literal(":"),
                                    ]))
                                    case 'default': return _p.ss($, ($) => sh.ph.literal("default:"))
                                    default: return _p.au($[0])
                                }
                            }),
                            sh.ph.indent(
                                Statements($.statements, $p)
                            ),
                        ])),
                    )),
                    sh.ph.literal("}"),
                ]),
            ]))
            case 'type alias declaration': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([]),
                sh.sentence([
                    $.export ? sh.ph.literal("export ") : sh.ph.nothing(),
                    sh.ph.literal("type "),
                    Identifier($['name']),
                    sh.ph.rich(
                        $['parameters'].__l_map(($) => Identifier($)),
                        sh.ph.nothing(),
                        sh.ph.literal("<"),
                        sh.ph.literal(", "),
                        sh.ph.literal(">"),
                    ),
                    sh.ph.literal(" = "),
                    Type($['type'], $p),
                ])
            ]))
            case 'variable': return _p.ss($, ($) => sh.pg.sentences([
                sh.sentence([]),
                sh.sentence([
                    $.export ? sh.ph.literal("export ") : sh.ph.nothing(),
                    $.const ? sh.ph.literal("const ") : sh.ph.literal("let "),
                    Identifier($['name']),
                    $.type.__decide(
                        ($) => sh.ph.composed([
                            sh.ph.literal(": "),
                            Type($, $p)
                        ]),
                        () => sh.ph.nothing(),
                    ),
                    $.expression.__decide(
                        ($) => sh.ph.composed([
                            sh.ph.literal(" = "),
                            Expression(
                                $,
                                {
                                    'replace empty type literals by null': $p['replace empty type literals by null'],
                                    'object literal needs parentheses': false,
                                }
                            )
                        ]),
                        () => sh.ph.nothing(),
                    ),
                ])
            ]))
            default: return _p.au($[0])
        }
    })
))

export const Expression = (
    $: d_in.Expression_,
    $p: {
        'replace empty type literals by null': boolean
        'object literal needs parentheses': boolean
    }
): d_out.Phrase => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'assignment': return _p.ss($, ($) => sh.ph.composed([
            Expression($.left, $p),
            sh.ph.literal(" = "),
            Expression($.right, {
                'object literal needs parentheses': false,
                'replace empty type literals by null': $p['replace empty type literals by null'],
            }),
        ]))
        case 'array literal': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("["),
            sh.ph.rich(
                $.__l_map(($) => Expression($, {
                    'object literal needs parentheses': false,
                    'replace empty type literals by null': $p['replace empty type literals by null'],
                })),
                sh.ph.nothing(),
                sh.ph.nothing(),
                sh.ph.literal(", "),
                sh.ph.nothing(),
            ),
            sh.ph.literal("]"),
        ]))
        case 'arrow function': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("("),
            sh.ph.rich(
                $.parameters.__l_map(($) => sh.ph.composed([
                    Identifier($.name),
                    $.type.__decide(
                        ($) => sh.ph.composed([
                            sh.ph.literal(": "),
                            Type($, $p)
                        ]),
                        () => sh.ph.nothing(),
                    ),
                ])),
                sh.ph.nothing(),
                sh.ph.nothing(),
                sh.ph.literal(", "),
                sh.ph.nothing(),
            ),
            sh.ph.literal(")"),
            $['return type'].__decide(
                ($) => sh.ph.composed([
                    sh.ph.literal(": "),
                    Type($, $p)
                ]),
                () => sh.ph.nothing(),
            ),
            sh.ph.literal(" => "),
            _p.decide.state($.body, ($) => {
                switch ($[0]) {
                    case 'block': return _p.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("{"),
                        sh.ph.indent(
                            Statements($, $p),
                        ),
                        sh.ph.literal("}"),
                    ]))
                    case 'expression': return _p.ss($, ($) => Expression(
                        $,
                        {
                            'object literal needs parentheses': true,
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                        }
                    ))
                    default: return _p.au($[0])
                }
            }),
        ]))
        case 'call': return _p.ss($, ($) => sh.ph.composed([
            Expression($['function selection'], $p),
            sh.ph.literal("("),
            sh.ph.indent(
                sh.pg.sentences($['arguments'].__l_map(($) => sh.sentence([
                    Expression(
                        $,
                        {
                            'object literal needs parentheses': false,
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                        }
                    ),
                    sh.ph.literal(",")
                ])))
            ),
            sh.ph.literal(")"),
        ]))
        case 'compare': return _p.ss($, ($) => sh.ph.composed([
            Expression($.left, $p),
            sh.ph.literal(" "),
            _p.decide.state($.operator, ($) => {
                switch ($[0]) {
                    case 'loosely equal': return _p.ss($, ($) => sh.ph.literal("=="))
                    case 'strictly equal': return _p.ss($, ($) => sh.ph.literal("==="))
                    case 'loosely not equal': return _p.ss($, ($) => sh.ph.literal("!="))
                    case 'strictly not equal': return _p.ss($, ($) => sh.ph.literal("!=="))
                    case 'smaller than': return _p.ss($, ($) => sh.ph.literal("<"))
                    case 'smaller than or equal': return _p.ss($, ($) => sh.ph.literal("<="))
                    case 'greater than': return _p.ss($, ($) => sh.ph.literal(">"))
                    case 'greater than or equal': return _p.ss($, ($) => sh.ph.literal(">="))
                    default: return _p.au($[0])
                }
            }),
            sh.ph.literal(" "),
            Expression($.right, {
                'object literal needs parentheses': false,
                'replace empty type literals by null': $p['replace empty type literals by null'],
            }),
        ]))
        case 'conditional': return _p.ss($, ($) => sh.ph.composed([
            Expression($.condition, $p),
            sh.ph.indent(sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("? "),
                    Expression($['if true'],
                        {
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                            'object literal needs parentheses': false,
                        }
                    ),
                ]),
                sh.sentence([
                    sh.ph.literal(": "),
                    Expression($['if false'], {
                        'replace empty type literals by null': $p['replace empty type literals by null'],
                        'object literal needs parentheses': false,
                    }),
                ]),
            ])),
        ]))
        case 'element access': return _p.ss($, ($) => sh.ph.composed([
            Expression($.collection, $p),
            sh.ph.literal("["),
            Expression($.index, $p),
            sh.ph.literal("]"),
        ]))
        case 'false': return _p.ss($, ($) => sh.ph.literal("false"))
        case 'identifier': return _p.ss($, ($) => Identifier($))
        case 'null': return _p.ss($, ($) => sh.ph.literal("null"))
        case 'number literal': return _p.ss($, ($) => sh.ph.serialize(s_number_default($)))
        case 'object literal': return _p.ss($, ($) => sh.ph.composed([
            $p['object literal needs parentheses']
                ? sh.ph.literal("(")
                : sh.ph.nothing(),
            sh.ph.literal("{"),
            sh.ph.indent(
                sh.pg.sentences(_p.list.from.list(
                    $.properties,
                ).map(
                    ($) => sh.sentence([
                        _p.decide.state($.key, ($) => {
                            switch ($[0]) {
                                case 'identifier': return _p.ss($, ($) => Identifier($))
                                case 'string literal': return _p.ss($, ($) => String_Literal($))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.ph.literal(": "),
                        Expression(
                            $.value,
                            {
                                'object literal needs parentheses': false,
                                'replace empty type literals by null': $p['replace empty type literals by null'],
                            }
                        ),
                        sh.ph.literal(",")
                    ]))),
            ),
            sh.ph.literal("}"),
            $p['object literal needs parentheses']
                ? sh.ph.literal(")")
                : sh.ph.nothing(),
        ]))
        case 'parenthesized': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("("),
            Expression($, {
                'replace empty type literals by null': $p['replace empty type literals by null'],
                'object literal needs parentheses': false,
            }),
            sh.ph.literal(")"),
        ]))
        case 'property access': return _p.ss($, ($) => sh.ph.composed([
            Expression($.object, $p),
            sh.ph.literal("."),
            Identifier($.property),
        ]))
        case 'string literal': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.serialize($['delimiter'][0] === "quote" ? s_quoted($['value']) : s_apostrophed($['value']))
        ]))
        case 'true': return _p.ss($, ($) => sh.ph.literal("true"))
        case 'unary operation': return _p.ss($, ($) => {
            const operand = $.operand
            return sh.ph.composed([
                _p.decide.state($.operator, ($) => {
                    switch ($[0]) {
                        case 'negation': return _p.ss($, ($) => sh.ph.literal("-"))
                        case 'logical not': return _p.ss($, ($) => sh.ph.literal("!"))
                        default: return _p.au($[0])
                    }
                }),
                Expression(operand, $p)
            ])
        })
        default: return _p.au($[0])
    }
})

export const Type = (
    $: d_in.Type,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Phrase => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.ph.literal("boolean"))
        case 'function': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.rich(
                $['type parameters'].__l_map(($) => Type($, $p)),
                sh.ph.nothing(),
                sh.ph.literal("<"),
                sh.ph.literal(", "),
                sh.ph.literal(">"),
            ),
            sh.ph.literal("("),
            sh.ph.indent(
                sh.pg.sentences($['parameters'].__l_map(($) => sh.sentence([
                    Identifier($.name),
                    $.type.__decide(
                        ($) => sh.ph.composed([
                            sh.ph.literal(": "),
                            Type($, $p)
                        ]),
                        () => sh.ph.nothing(),
                    ),
                    sh.ph.literal(",")
                ]))),
            ),
            sh.ph.literal(") => "),
            Type($['return'], $p)
        ]))
        case 'literal type': return _p.ss($, ($) => String_Literal($)) //FIX, implement a switch for the delimiter
        case 'never': return _p.ss($, ($) => sh.ph.literal("never"))
        case 'null': return _p.ss($, ($) => sh.ph.literal("null"))
        case 'number': return _p.ss($, ($) => sh.ph.literal("number"))
        case 'string': return _p.ss($, ($) => sh.ph.literal("string"))
        case 'tuple': return _p.ss($, ($) => sh.ph.composed([
            $.readonly ? sh.ph.literal("readonly ") : sh.ph.nothing(),
            sh.ph.literal("["),
            sh.ph.rich(
                $.elements.__l_map(($) => Type($, $p)),
                sh.ph.nothing(),
                sh.ph.nothing(),
                sh.ph.literal(", "),
                sh.ph.nothing(),
            ),
            sh.ph.literal("]"),
        ]))
        case 'type literal': return _p.ss($, ($) => $p['replace empty type literals by null'] && _p.boolean.from.list($.properties).is_empty()
            ? sh.ph.literal("null")
            : sh.ph.composed([
                sh.ph.literal("{"),
                sh.ph.indent(
                    sh.pg.sentences(_p.list.from.list(
                        $.properties,
                    ).map(
                        ($) => sh.sentence([
                            sh.ph.composed([
                                $['readonly'] ? sh.ph.literal("readonly ") : sh.ph.nothing(),
                                _p.decide.state($.key, ($) => {
                                    switch ($[0]) {
                                        case 'identifier': return _p.ss($, ($) => Identifier($))
                                        case 'string literal': return _p.ss($, ($) => String_Literal($))
                                        default: return _p.au($[0])
                                    }
                                }),
                                sh.ph.literal(": "),
                                Type($.type, $p),
                            ])
                        ]))),
                ),
                sh.ph.literal("}")
            ])
        )
        case 'type reference': return _p.ss($, ($) => sh.ph.composed([
            Identifier($['start']),
            sh.ph.composed($['tail'].__l_map(($) => sh.ph.composed([
                sh.ph.literal("."),
                Identifier($),
            ]))),
            _p.boolean.from.list($['type arguments']).is_empty()
                ? sh.ph.nothing()
                : sh.ph.composed([
                    sh.ph.literal("<"),
                    sh.ph.rich(
                        $['type arguments'].__l_map(($) => Type($, $p)),
                        sh.ph.nothing(),
                        sh.ph.nothing(),
                        sh.ph.literal(", "),
                        sh.ph.nothing(),
                    ),
                    sh.ph.literal(">"),
                ]),
        ]))
        case 'union': return _p.ss($, ($) => sh.ph.indent(
            sh.pg.sentences($.__l_map(($) => sh.sentence([
                sh.ph.literal("| "),
                Type($, $p),
            ])))
        ))
        case 'void': return _p.ss($, ($) => sh.ph.literal("void"))
        default: return _p.au($[0])
    }
})