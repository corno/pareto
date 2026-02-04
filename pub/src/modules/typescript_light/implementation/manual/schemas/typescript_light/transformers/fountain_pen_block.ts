import * as _p from 'pareto-core/dist/expression'
import * as _pdev from 'pareto-core-dev'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
import * as d_in from "../../../../../../../interface/generated/liana/schemas/typescript_light/data"

import { $$ as op_enrich_list_items_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"
import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed_string"
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted_string"
import { $$ as s_number_default } from "../../../primitives/integer/serializers/decimal"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Directory = ($: d_in.Directory): d_out.Directory => {
    return $.__d_map(($, id) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'file': return _p.ss($, ($) => ['file', sh.group([
                Statements($['statements'], { 'replace empty type literals by null': true })
            ])])
            case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
            default: return _p.au($[0])
        }
    }))
}

export const Identifier = (
    $: d_in.Identifier
): d_out.Block_Part => {
    return sh.b.literal($.value)
}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out.Block_Part => {
    return sh.b.text($p.delimiter === "quote" ? s_quoted($) : s_apostrophed($))
}

export const Statements = (
    $: d_in.Statements,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Group_Part => sh.g.sub($.__l_map(($) =>
    _p.decide.state($, ($): d_out.Group_Part => {
        switch ($[0]) {
            case 'block': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([
                    sh.b.sub([
                        sh.b.literal("{"),
                        sh.b.indent([
                            Statements($, $p),
                        ]),
                        sh.b.literal("}"),
                    ])
                ])
            ]))
            case 'export': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([
                    sh.b.sub([
                        sh.b.literal("export "),
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'named exports': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.literal("{ "),
                                    sh.b.indent([
                                        sh.g.list($.specifiers.__l_map(($) => sh.g.nested_block([
                                            Identifier($.name),
                                            $.as.__decide(
                                                ($) => sh.b.sub([
                                                    sh.b.literal(" as "),
                                                    Identifier($),
                                                ]),
                                                () => sh.b.nothing(),
                                            ),
                                            sh.b.literal(", ")
                                        ]))),
                                    ]),
                                    sh.b.literal("}"),
                                    $.from.__decide(
                                        ($) => sh.b.sub([
                                            sh.b.literal(" from "),
                                            String_Literal($, { 'delimiter': "quote" }),
                                        ]),
                                        () => sh.b.nothing()
                                    )
                                ]))
                                default: return _p.au($[0])
                            }
                        }),
                    ])
                ])
            ]))
            case 'expression': return _p.ss($, ($) => sh.g.nested_block([
                Expression(
                    $,
                    {
                        'replace empty type literals by null': $p['replace empty type literals by null'],
                        'object literal needs parentheses': true,
                    }
                )
            ]))
            case 'import': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([
                    sh.b.sub([
                        sh.b.literal("import "),
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'named': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.literal("{"),
                                    sh.b.indent([
                                        sh.g.list($.specifiers.__l_map(($) => sh.g.nested_block([
                                            Identifier($.name),
                                            $.as.__decide(
                                                ($) => sh.b.sub([
                                                    sh.b.literal(" as "),
                                                    Identifier($),
                                                ]),
                                                () => sh.b.nothing(),
                                            ),
                                            sh.b.literal(",")
                                        ]))),
                                    ]),
                                    sh.b.literal("}"),
                                ]))
                                case 'namespace': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.literal("* as "),
                                    Identifier($),
                                ]))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.b.literal(" from "),
                        String_Literal($.from, { 'delimiter': "quote" }),
                    ])
                ])
            ]))
            case 'module declaration': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([sh.b.sub([
                    $.export ? sh.b.literal("export ") : sh.b.nothing(),
                    sh.b.literal("namespace "),
                    Identifier($['name']),
                    sh.b.literal(" "),
                    sh.b.sub([
                        sh.b.literal("{"),
                        sh.b.indent([
                            Statements($.block, $p),
                            sh.g.simple_block(``),
                        ]),
                        sh.b.literal("}"),
                    ])
                ])])
            ]))
            case 'return': return _p.ss($, ($) => sh.g.nested_block([
                sh.b.literal("return "),
                $.__decide(
                    ($) => Expression(
                        $,
                        {
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                            'object literal needs parentheses': false,
                        }
                    ),
                    () => sh.b.nothing(),
                )
            ]))
            case 'switch': return _p.ss($, ($) => sh.g.nested_block([
                sh.b.literal("switch ("),
                Expression(
                    $.expression,
                    {
                        'replace empty type literals by null': $p['replace empty type literals by null'],
                        'object literal needs parentheses': false,
                    }
                ),
                sh.b.literal(") {"),
                sh.b.indent([
                    sh.g.list($.clauses.__l_map(($) => sh.g.nested_block([
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'case': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.literal("case "),
                                    Expression(
                                        $,
                                        {
                                            'replace empty type literals by null': $p['replace empty type literals by null'],
                                            'object literal needs parentheses': true,
                                        }
                                    ),
                                    sh.b.literal(":"),
                                ]))
                                case 'default': return _p.ss($, ($) => sh.b.literal("default:"))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.b.indent([
                            Statements($.statements, $p)
                        ]),
                    ]))),
                ]),
                sh.b.literal("}"),
            ]))
            case 'type alias declaration': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([sh.b.sub([
                    $.export ? sh.b.literal("export ") : sh.b.nothing(),
                    sh.b.literal("type "),
                    Identifier($['name']),
                    _p.boolean.list_is_empty($['parameters'])
                        ? sh.b.nothing()
                        : sh.b.sub([
                            sh.b.literal("<"),
                            sh.b.sub(op_enrich_list_items_with_position_information($['parameters']).__l_map(($) => sh.b.sub([
                                Identifier($.value),
                                $['is last'] ? sh.b.nothing() : sh.b.literal(", ")
                            ]))),
                            sh.b.literal(">"),
                        ]),
                    sh.b.literal(" = "),
                    Type($['type'], $p),
                ])])
            ]))
            case 'variable': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([sh.b.sub([
                    $.export ? sh.b.literal("export ") : sh.b.nothing(),
                    $.const ? sh.b.literal("const ") : sh.b.literal("let "),
                    Identifier($['name']),
                    $.type.__decide(
                        ($) => sh.b.sub([
                            sh.b.literal(": "),
                            Type($, $p)
                        ]),
                        () => sh.b.nothing(),
                    ),
                    $.expression.__decide(
                        ($) => sh.b.sub([
                            sh.b.literal(" = "),
                            Expression(
                                $,
                                {
                                    'replace empty type literals by null': $p['replace empty type literals by null'],
                                    'object literal needs parentheses': false,
                                }
                            )
                        ]),
                        () => sh.b.nothing(),
                    ),
                ])])
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
): d_out.Block_Part => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'assignment': return _p.ss($, ($) => sh.b.sub([
            Expression($.left, $p),
            sh.b.literal(" = "),
            Expression($.right, {
                'object literal needs parentheses': false,
                'replace empty type literals by null': $p['replace empty type literals by null'],
            }),
        ]))
        case 'array literal': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("["),
            sh.b.sub(op_enrich_list_items_with_position_information($).__l_map(($) => sh.b.sub([
                Expression($.value, {
                    'object literal needs parentheses': false,
                    'replace empty type literals by null': $p['replace empty type literals by null'],
                }),
                $['is last'] ? sh.b.nothing() : sh.b.literal(", ")
            ]))),
            sh.b.literal("]"),
        ]))
        case 'arrow function': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("("),
            sh.b.sub(op_enrich_list_items_with_position_information($.parameters).__l_map(($) => sh.b.sub([
                Identifier($.value.name),
                $.value.type.__decide(
                    ($) => sh.b.sub([
                        sh.b.literal(": "),
                        Type($, $p)
                    ]),
                    () => sh.b.nothing(),
                ),
                $['is last'] ? sh.b.nothing() : sh.b.literal(", ")
            ]))),
            sh.b.literal(")"),
            $['return type'].__decide(
                ($) => sh.b.sub([
                    sh.b.literal(": "),
                    Type($, $p)
                ]),
                () => sh.b.nothing(),
            ),
            sh.b.literal(" => "),
            _p.decide.state($.body, ($) => {
                switch ($[0]) {
                    case 'block': return _p.ss($, ($) => sh.b.sub([
                        sh.b.literal("{"),
                        sh.b.indent([
                            Statements($, $p),
                        ]),
                        sh.b.literal("}"),
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
        case 'call': return _p.ss($, ($) => sh.b.sub([
            Expression($['function selection'], $p),
            sh.b.literal("("),
            sh.b.indent([
                sh.g.sub(op_enrich_list_items_with_position_information($['arguments']).__l_map(($) => sh.g.nested_block([
                    Expression(
                        $.value,
                        {
                            'object literal needs parentheses': false,
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                        }
                    ),
                    $['is last'] ? sh.b.nothing() : sh.b.literal(",")
                ]))),
            ]),
            sh.b.literal(")"),
        ]))
        case 'compare': return _p.ss($, ($) => sh.b.sub([
            Expression($.left, $p),
            sh.b.literal(" "),
            _p.decide.state($.operator, ($) => {
                switch ($[0]) {
                    case 'loosely equal': return _p.ss($, ($) => sh.b.literal("=="))
                    case 'strictly equal': return _p.ss($, ($) => sh.b.literal("==="))
                    case 'loosely not equal': return _p.ss($, ($) => sh.b.literal("!="))
                    case 'strictly not equal': return _p.ss($, ($) => sh.b.literal("!=="))
                    case 'smaller than': return _p.ss($, ($) => sh.b.literal("<"))
                    case 'smaller than or equal': return _p.ss($, ($) => sh.b.literal("<="))
                    case 'greater than': return _p.ss($, ($) => sh.b.literal(">"))
                    case 'greater than or equal': return _p.ss($, ($) => sh.b.literal(">="))
                    default: return _p.au($[0])
                }
            }),
            sh.b.literal(" "),
            Expression($.right, {
                'object literal needs parentheses': false,
                'replace empty type literals by null': $p['replace empty type literals by null'],
            }),
        ]))
        case 'conditional': return _p.ss($, ($) => sh.b.sub([
            Expression($.condition, $p),
            sh.b.indent([
                sh.g.nested_block([
                    sh.b.literal("? "),
                    Expression($['if true'],
                        {
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                            'object literal needs parentheses': false,
                        }
                    ),
                ]),
                sh.g.nested_block([
                    sh.b.literal(": "),
                    Expression($['if false'], {
                        'replace empty type literals by null': $p['replace empty type literals by null'],
                        'object literal needs parentheses': false,
                    }),
                ]),
            ]),
        ]))
        case 'element access': return _p.ss($, ($) => sh.b.sub([
            Expression($.collection, $p),
            sh.b.literal("["),
            Expression($.index, $p),
            sh.b.literal("]"),
        ]))
        case 'false': return _p.ss($, ($) => sh.b.literal("false"))
        case 'identifier': return _p.ss($, ($) => Identifier($))
        case 'null': return _p.ss($, ($) => sh.b.literal("null"))
        case 'number literal': return _p.ss($, ($) => sh.b.text(s_number_default($)))
        case 'object literal': return _p.ss($, ($) => sh.b.sub([
            $p['object literal needs parentheses']
                ? sh.b.literal("(")
                : sh.b.nothing(),
            sh.b.literal("{"),
            sh.b.indent([
                sh.g.sub(_p.list.from_dictionary($.properties, ($, id) => sh.g.nested_block([
                    String_Literal(id, { 'delimiter': "apostrophe" }),
                    sh.b.literal(": "),
                    Expression(
                        $,
                        {
                            'object literal needs parentheses': false,
                            'replace empty type literals by null': $p['replace empty type literals by null'],
                        }
                    ),
                    sh.b.literal(",")
                ]))),
            ]),
            sh.b.literal("}"),
            $p['object literal needs parentheses']
                ? sh.b.literal(")")
                : sh.b.nothing(),
        ]))
        case 'parenthesized': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("("),
            Expression($, {
                'replace empty type literals by null': $p['replace empty type literals by null'],
                'object literal needs parentheses': false,
            }),
            sh.b.literal(")"),
        ]))
        case 'property access': return _p.ss($, ($) => sh.b.sub([
            Expression($.object, $p),
            sh.b.literal("."),
            Identifier($.property),
        ]))
        case 'string literal': return _p.ss($, ($) => sh.b.sub([
            sh.b.text($['delimiter'][0] === "quote" ? s_quoted($['value']) : s_apostrophed($['value']))
        ]))
        case 'true': return _p.ss($, ($) => sh.b.literal("true"))
        case 'unary operation': return _p.ss($, ($) => {
            const operand = $.operand
            return sh.b.sub([
                _p.decide.state($.operator, ($) => {
                    switch ($[0]) {
                        case 'negation': return _p.ss($, ($) => sh.b.literal("-"))
                        case 'logical not': return _p.ss($, ($) => sh.b.literal("!"))
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
): d_out.Block_Part => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.b.literal("boolean"))
        case 'function': return _p.ss($, ($) => sh.b.sub([
            _p.boolean.list_is_empty($['type parameters'])
                ? sh.b.nothing()
                : sh.b.sub([
                    sh.b.literal("<"),
                    sh.b.sub(op_enrich_list_items_with_position_information($['type parameters']).__l_map(($) => sh.b.sub([
                        Type($.value, $p),
                        $['is last'] ? sh.b.nothing() : sh.b.literal(", ")
                    ]))),
                    sh.b.literal(">"),
                ]), sh.b.literal("("),
            sh.b.indent([
                sh.g.sub($['parameters'].__l_map(($) => sh.g.nested_block([
                    Identifier($.name),
                    $.type.__decide(
                        ($) => sh.b.sub([
                            sh.b.literal(": "),
                            Type($, $p)
                        ]),
                        () => sh.b.nothing(),
                    ),
                    sh.b.literal(",")
                ]))),
            ]),
            sh.b.literal(") => "),
            Type($['return'], $p)
        ]))
        case 'literal type': return _p.ss($, ($) => String_Literal($.value, { 'delimiter': $.delimiter[0] })) //FIX, implement a switch for the delimiter
        case 'null': return _p.ss($, ($) => sh.b.literal("null"))
        case 'number': return _p.ss($, ($) => sh.b.literal("number"))
        case 'string': return _p.ss($, ($) => sh.b.literal("string"))
        case 'tuple': return _p.ss($, ($) => sh.b.sub([
            $.readonly ? sh.b.literal("readonly ") : sh.b.nothing(),
            sh.b.literal("["),
            sh.b.sub(op_enrich_list_items_with_position_information($['elements']).__l_map(($) => sh.b.sub([
                Type($.value, $p),
                $['is last']
                    ? sh.b.nothing()
                    : sh.b.literal(", ")
            ]))),
            sh.b.literal("]"),
        ]))
        case 'type literal': return _p.ss($, ($) => $p['replace empty type literals by null'] && _p.boolean.dictionary_is_empty($.properties)
            ? sh.b.literal("null")
            : sh.b.sub([
                sh.b.literal("{"),
                sh.b.indent([
                    sh.g.sub(_p.list.from_dictionary($.properties, ($, id) => sh.g.sub([
                        sh.g.nested_block([
                            $['readonly'] ? sh.b.literal("readonly ") : sh.b.nothing(),
                            String_Literal(id, { 'delimiter': "apostrophe" }),
                            sh.b.literal(": "),
                            Type($.type, $p),
                        ])
                    ]))),
                ]),
                sh.b.literal("}")
            ])
        )
        case 'type reference': return _p.ss($, ($) => sh.b.sub([
            Identifier($['start']),
            sh.b.sub($['tail'].__l_map(($) => sh.b.sub([
                sh.b.literal("."),
                Identifier($),
            ]))),
            _p.boolean.list_is_empty($['type arguments'])
                ? sh.b.nothing()
                : sh.b.sub([
                    sh.b.literal("<"),
                    sh.b.sub(op_enrich_list_items_with_position_information($['type arguments']).__l_map(($) => sh.b.sub([
                        Type($['value'], $p),
                        $['is last'] ? sh.b.nothing() : sh.b.literal(", "),
                    ]))),
                    sh.b.literal(">"),
                ]),
        ]))
        case 'union': return _p.ss($, ($) => sh.b.indent([
            sh.g.sub($.__l_map(($) => sh.g.nested_block([
                sh.b.literal("| "),
                Type($, $p),
            ])))
        ]))
        case 'void': return _p.ss($, ($) => sh.b.literal("void"))
        default: return _p.au($[0])
    }
})