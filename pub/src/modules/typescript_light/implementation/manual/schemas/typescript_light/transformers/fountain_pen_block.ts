import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"
import * as d_in from "../../../../../../../interface/generated/liana/schemas/typescript_light/data"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"
import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed_string"
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted_string"
import { $$ as s_number_default } from "../../../primitives/approximate_number/serializers/default"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Directory = ($: d_in.Directory): d_out.Directory => {
    return $.__d_map(($, key) => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'file': return _p.ss($, ($) => ['file', sh.group([
                Statements($['statements'], { 'replace empty type literals by null': true })
            ])])
            case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
            default: return _p.au($[0])
        }
    }))
}

export const Group = ($: d_in.Group_): d_out.Group => {
    return $.__l_map(($) => Group_Part($))
}

export const Group_Part = ($: d_in.Group_Part_): d_out.Group_Part => {
    return _p.decide.state($, ($): d_out.Group_Part => {
        switch ($[0]) {
            case 'block': return _p.ss($, ($) => ['block', $])
            case 'nothing': return _p.ss($, ($) => ['nothing', null])
            case 'optional': return _p.ss($, ($) => ['optional', $.__o_map(($) => Group_Part($))])
            case 'nested block': return _p.ss($, ($) => ['nested block', Block($)])
            case 'sub group': return _p.ss($, ($) => ['sub group', Group($)])
            default: return _p.au($[0])
        }
    })
}

export const Block = (
    $: d_in.Block_
): d_out.Block => {
    return $.__l_map(($) => Block_Part($))
}

export const Block_Part = (
    $: d_in.Block_Part_
): d_out.Block_Part => {
    return _p.decide.state($, ($): d_out.Block_Part => {
        switch ($[0]) {
            case 'snippet': return _p.ss($, ($) => sh.b.snippet($))
            case 'nothing': return _p.ss($, ($) => ['nothing', null])
            case 'optional': return _p.ss($, ($) => ['optional', $.__o_map(($): d_out.Block_Part => Block_Part($))])
            case 'indent': return _p.ss($, ($) => ['indent', Group($)])
            case 'sub block': return _p.ss($, ($) => ['sub block', Block($)])
            default: return _p.au($[0])
        }
    })
}

export const Identifier = (
    $: string //FIX should have been a schema type
): d_out.Block_Part => {
    return sh.b.snippet($)
}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out.Block_Part => {
    return sh.b.snippet($p.delimiter === "quote" ? s_quoted($) : s_apostrophed($))
}

export const Statements = (
    $: d_in.Statements_,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Group_Part => sh.g.sub($.__l_map(($) =>
    _p.decide.state($, ($): d_out.Group_Part => {
        switch ($[0]) {
            case 'raw': return _p.ss($, ($) => sh.g.sub(Group($)))

            case 'block': return _p.ss($, ($) => sh.g.nested_block([
                sh.b.snippet("{"),
                sh.b.indent([
                    Statements($, $p),
                ]),
                sh.b.snippet("}"),
            ]))
            case 'export': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([
                    sh.b.sub([
                        sh.b.snippet("export "),
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'named exports': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.snippet("{ "),
                                    sh.b.indent([
                                        sh.g.list($.specifiers.__l_map(($) => sh.g.nested_block([
                                            Identifier($.name),
                                            $.as.__decide(
                                                ($) => sh.b.sub([
                                                    sh.b.snippet(" as "),
                                                    Identifier($),
                                                ]),
                                                () => sh.b.nothing(),
                                            ),
                                            sh.b.snippet(", ")
                                        ]))),
                                    ]),
                                    sh.b.snippet("}"),
                                    $.from.__decide(
                                        ($) => sh.b.sub([
                                            sh.b.snippet(" from "),
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
                Expression($, $p)
            ]))
            case 'import': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([
                    sh.b.sub([
                        sh.b.snippet("import "),
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'named': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.snippet("{ "),
                                    sh.b.indent([
                                        sh.g.list($.specifiers.__l_map(($) => sh.g.nested_block([
                                            Identifier($.name),
                                            $.as.__decide(
                                                ($) => sh.b.sub([
                                                    sh.b.snippet(" as "),
                                                    Identifier($),
                                                ]),
                                                () => sh.b.nothing(),
                                            ),
                                            sh.b.snippet(", ")
                                        ]))),
                                    ]),
                                    sh.b.snippet("}"),
                                ]))
                                case 'namespace': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.snippet("* as "),
                                    Identifier($),
                                ]))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.b.snippet(" from "),
                        String_Literal($.from, { 'delimiter': "quote" }),
                    ])
                ])
            ]))
            case 'module declaration': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([sh.b.sub([
                    $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                    sh.b.snippet("namespace "),
                    Identifier($['name']),
                    sh.b.snippet(" {"),
                    sh.b.indent([
                        Statements($['block'], $p),
                        sh.g.simple_block(``)
                    ]),
                    sh.b.snippet("}"),
                ])])
            ]))
            case 'return': return _p.ss($, ($) => sh.g.nested_block([
                sh.b.snippet(`return `),
                $.__decide(
                    ($) => Expression($, $p),
                    () => sh.b.nothing(),
                )
            ]))
            case 'switch': return _p.ss($, ($) => sh.g.nested_block([
                sh.b.snippet("switch ("),
                Expression($.expression, $p),
                sh.b.snippet(") {"),
                sh.b.indent([
                    sh.g.list($.clauses.__l_map(($) => sh.g.nested_block([
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'case': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.snippet("case "),
                                    Expression($, $p),
                                    sh.b.snippet(":"),
                                ]))
                                case 'default': return _p.ss($, ($) => sh.b.snippet("default:"))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.b.indent([
                            Statements($.statements, $p)
                        ]),
                    ]))),
                ])
            ]))
            case 'type alias declaration': return _p.ss($, ($) => sh.g.sub([
                sh.g.simple_block(``),
                sh.g.nested_block([sh.b.sub([
                    $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                    sh.b.snippet("type "),
                    Identifier($['name']),
                    _p.boolean.list_is_empty($['parameters'])
                        ? sh.b.nothing()
                        : sh.b.sub([
                            sh.b.snippet("<"),
                            sh.b.sub(op_enrich_list_elements_with_position_information($['parameters']).__l_map(($) => sh.b.sub([
                                Identifier($.value),
                                $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                            ]))),
                            sh.b.snippet(">"),
                        ]),
                    sh.b.snippet(" = "),
                    Type($['type'], $p),
                ])])
            ]))
            case 'variable': return _p.ss($, ($) => sh.g.nested_block([sh.b.sub([
                $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                $.const ? sh.b.snippet("const ") : sh.b.snippet("let "),
                Identifier($['name']),
                $.type.__decide(
                    ($) => sh.b.sub([
                        sh.b.snippet(": "),
                        Type($, $p)
                    ]),
                    () => sh.b.nothing(),
                ),
                $.expression.__decide(
                    ($) => sh.b.sub([
                        sh.b.snippet("= "),
                        Expression($, $p)
                    ]),
                    () => sh.b.nothing(),
                ),
            ])]))
            default: return _p.au($[0])
        }
    })
))

export const Expression = (
    $: d_in.Expression_,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Block_Part => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'raw': return _p.ss($, ($) => sh.b.sub([$]))


        case 'assignment': return _p.ss($, ($) => sh.b.sub([
            Expression($.left, $p),
            sh.b.snippet(" = "),
            Expression($.right, $p),
        ]))
        case 'array literal': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet("["),
            sh.b.indent([
                sh.g.sub(op_enrich_list_elements_with_position_information($).__l_map(($) => sh.g.nested_block([
                    Expression($.value, $p),
                    $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                ]))),
            ]),
            sh.b.snippet("]"),
        ]))
        case 'arrow function': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet("("),
            sh.b.indent([
                sh.g.sub($.parameters.__l_map(($) => sh.g.nested_block([
                    Identifier($.name),
                    $.type.__decide(
                        ($) => sh.b.sub([
                            sh.b.snippet(": "),
                            Type($, $p)
                        ]),
                        () => sh.b.nothing(),
                    ),
                    sh.b.snippet(",")
                ]))),
            ]),
            sh.b.snippet(")"),
            $['return type'].__decide(
                ($) => sh.b.sub([
                    sh.b.snippet(": "),
                    Type($, $p)
                ]),
                () => sh.b.nothing(),
            ),
            sh.b.snippet(" => "),
            _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'block': return _p.ss($, ($) => sh.b.sub([
                        sh.b.snippet("{"),
                        sh.b.indent([
                            Statements($, $p),
                        ]),
                        sh.b.snippet("}"),
                    ]))
                    case 'expression': return _p.ss($, ($) => Expression($, $p))
                    default: return _p.au($[0])
                }
            }),
        ]))
        case 'call': return _p.ss($, ($) => sh.b.sub([
            Expression($['function selection'], $p),
            sh.b.snippet("("),
            sh.b.indent([
                sh.g.sub(op_enrich_list_elements_with_position_information($['arguments']).__l_map(($) => sh.g.nested_block([
                    Expression($.value, $p),
                    $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                ]))),
            ]),
            sh.b.snippet(")"),
        ]))
        case 'compare': return _p.ss($, ($) => sh.b.sub([
            Expression($.left, $p),
            sh.b.snippet(` `),
            _p.decide.state($.operator, ($) => {
                switch ($[0]) {
                    case 'loosely equal': return _p.ss($, ($) => sh.b.snippet(`==`))
                    case 'strictly equal': return _p.ss($, ($) => sh.b.snippet(`===`))
                    case 'loosely not equal': return _p.ss($, ($) => sh.b.snippet(`!=`))
                    case 'strictly not equal': return _p.ss($, ($) => sh.b.snippet(`!==`))
                    case 'smaller than': return _p.ss($, ($) => sh.b.snippet(`<`))
                    case 'smaller than or equal': return _p.ss($, ($) => sh.b.snippet(`<=`))
                    case 'greater than': return _p.ss($, ($) => sh.b.snippet(`>`))
                    case 'greater than or equal': return _p.ss($, ($) => sh.b.snippet(`>=`))
                    default: return _p.au($[0])
                }
            }),
            sh.b.snippet(` `),
            Expression($.right, $p),
        ]))
        case 'conditional': return _p.ss($, ($) => sh.b.sub([
            Expression($.condition, $p),
            sh.b.indent([
                sh.g.nested_block([
                    sh.b.snippet("? "),
                    Expression($['if true'], $p),
                ]),
                sh.g.nested_block([
                    sh.b.snippet(": "),
                    Expression($['if false'], $p),
                ]),
            ]),
        ]))
        case 'element access': return _p.ss($, ($) => sh.b.sub([
            Expression($.collection, $p),
            sh.b.snippet("["),
            Expression($.index, $p),
            sh.b.snippet("]"),
        ]))
        case 'false': return _p.ss($, ($) => sh.b.snippet("false"))
        case 'identifier': return _p.ss($, ($) => Identifier($))
        case 'null': return _p.ss($, ($) => sh.b.snippet("null"))
        case 'number literal': return _p.ss($, ($) => sh.b.snippet(s_number_default($)))
        case 'object literal': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet("{"),
            sh.b.indent([
                sh.g.sub(_p.list.from_dictionary($.properties, ($, key) => sh.g.nested_block([
                    String_Literal(key, { 'delimiter': "apostrophe" }),
                    sh.b.snippet(": "),
                    Expression($, $p),
                    sh.b.snippet(",")
                ]))),
            ]),
            sh.b.snippet("}"),
        ]))
        case 'parenthesized': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet("("),
            Expression($, $p),
            sh.b.snippet(")"),
        ]))
        case 'property access': return _p.ss($, ($) => sh.b.sub([
            Expression($.object, $p),
            sh.b.snippet("."),
            Identifier($.property),
        ]))
        case 'string literal': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet($['delimiter'][0] === "quote" ? s_quoted($['value']) : s_apostrophed($['value']))
        ]))
        case 'true': return _p.ss($, ($) => sh.b.snippet("true"))
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
        case 'boolean': return _p.ss($, ($) => sh.b.snippet("boolean"))
        case 'function': return _p.ss($, ($) => sh.b.sub([
            _p.boolean.list_is_empty($['type parameters'])
                ? sh.b.nothing()
                : sh.b.sub([
                    sh.b.snippet("<"),
                    sh.b.sub(op_enrich_list_elements_with_position_information($['type parameters']).__l_map(($) => sh.b.sub([
                        Type($.value, $p),
                        $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                    ]))),
                    sh.b.snippet(">"),
                ]), sh.b.snippet("("),
            sh.b.indent([
                sh.g.sub($['parameters'].__l_map(($) => sh.g.nested_block([
                    Identifier($.name),
                    $.type.__decide(
                        ($) => sh.b.sub([
                            sh.b.snippet(": "),
                            Type($, $p)
                        ]),
                        () => sh.b.nothing(),
                    ),
                    sh.b.snippet(",")
                ]))),
            ]),
            sh.b.snippet(") => "),
            Type($['return'], $p)
        ]))
        case 'literal type': return _p.ss($, ($) => String_Literal($.value, { 'delimiter': $.delimiter[0] })) //FIX, implement a switch for the delimiter
        case 'null': return _p.ss($, ($) => sh.b.snippet("null"))
        case 'number': return _p.ss($, ($) => sh.b.snippet("number"))
        case 'string': return _p.ss($, ($) => sh.b.snippet("string"))
        case 'tuple': return _p.ss($, ($) => sh.b.sub([
            $.readonly ? sh.b.snippet("readonly ") : sh.b.nothing(),
            sh.b.snippet("["),
            sh.b.sub(op_enrich_list_elements_with_position_information($['elements']).__l_map(($) => sh.b.sub([
                Type($.value, $p),
                $['is last']
                    ? sh.b.nothing()
                    : sh.b.snippet(", ")
            ]))),
            sh.b.snippet("]"),
        ]))
        case 'type literal': return _p.ss($, ($) => $p['replace empty type literals by null'] && _p.boolean.dictionary_is_empty($.properties)
            ? sh.b.snippet("null")
            : sh.b.sub([
                sh.b.snippet("{"),
                sh.b.indent([
                    sh.g.sub(_p.list.from_dictionary($.properties, ($, key) => sh.g.sub([
                        sh.g.nested_block([
                            $['readonly'] ? sh.b.snippet("readonly ") : sh.b.nothing(),
                            String_Literal(key, { 'delimiter': "apostrophe" }),
                            sh.b.snippet(": "),
                            Type($.type, $p),
                        ])
                    ]))),
                ]),
                sh.b.snippet("}")
            ])
        )
        case 'type reference': return _p.ss($, ($) => sh.b.sub([
            Identifier($['start']),
            sh.b.sub($['tail'].__l_map(($) => sh.b.sub([
                sh.b.snippet("."),
                Identifier($),
            ]))),
            _p.boolean.list_is_empty($['type arguments'])
                ? sh.b.nothing()
                : sh.b.sub([
                    sh.b.snippet("<"),
                    sh.b.sub(op_enrich_list_elements_with_position_information($['type arguments']).__l_map(($) => sh.b.sub([
                        Type($['value'], $p),
                        $['is last'] ? sh.b.nothing() : sh.b.snippet(", "),
                    ]))),
                    sh.b.snippet(">"),
                ]),
        ]))
        case 'union': return _p.ss($, ($) => sh.b.indent([
            sh.g.sub($.__l_map(($) => sh.g.nested_block([
                sh.b.snippet("| "),
                Type($, $p),
            ])))
        ]))
        case 'void': return _p.ss($, ($) => sh.b.snippet("void"))
        default: return _p.au($[0])
    }
})