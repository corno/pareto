import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_loc from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_out_fs from "pareto-fountain-pen-file-structure/dist/interface/to_be_generated/file-system"

import * as d_in from "../../../../../../interface/generated/liana/schemas/typescript_light/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"



export const escaped_text = (
    $: string,
): d_loc.List_of_Characters => _p.list.from.list(
    _p_list_from_text(
        $,
        ($) => $
    ),
).flatten(
    ($): _pi.List<number> => {
        switch ($) {
            // case 0x2F: // slash (\/)
            //     return _p.list.literal([
            //         0x5c, // \
            //         0x2f, // /
            //     ])
            case 0x22: // " (\")
                return _p.list.literal([
                    0x5C, // \
                    0x22, // "
                ])
            case 0x5C: // \ (\\)
                return _p.list.literal([
                    0x5C, // \
                    0x5C, // \
                ])
            case 0x08: // backspace (\b)
                return _p.list.literal([
                    0x5C, // \
                    0x62, // b
                ])
            case 0x0C: // form feed (\f)
                return _p.list.literal([
                    0x5C, // \
                    0x66, // f
                ])
            case 0x0A: // line feed (\n)
                return _p.list.literal([
                    0x5C, // \
                    0x6E, // n
                ])
            case 0x0D: // carriage return (\r)
                return _p.list.literal([
                    0x5C, // \
                    0x72, // r
                ])
            case 0x09: // horizontal tab (\t)
                return _p.list.literal([
                    0x5C, // \
                    0x74, // t
                ])
            case 0x0B: // vertical tab (\v)
                return _p.list.literal([
                    0x5C, // \
                    0x76, // v
                ])
            default: {
                return _p.list.literal([
                    $,
                ])
            }
        }
    }
)

export const apostrophed_text: _pi.Transformer<string, d_loc.List_of_Characters> = ($) => _p.list.nested_literal_old([
    [
        0x27, // '
    ],
    escaped_text(
        $,
    ),
    [
        0x27, // '
    ]
])

export const backticked_text: _pi.Transformer<string, d_loc.List_of_Characters> = ($) => _p.list.nested_literal_old([
    [
        0x60, // `
    ],
    escaped_text(
        $,
    ),
    [
        0x60, // `
    ]
])

export const quoted_text: _pi.Transformer<string, d_loc.List_of_Characters> = ($) => _p.list.nested_literal_old([
    [
        0x22, // "
    ],
    escaped_text(
        $,
    ),
    [
        0x22, // "
    ]
])


export const decimal: _pi.Transformer<number, d_loc.List_of_Characters> = ($) => _p_list_build_deprecated(($i) => {
    if ($ < 0) {
        $i['add item'](45) // '-'
        $ = -$
    }
    const digits = _p_list_build_deprecated<number>(($i) => {
        do {
            const digit = $ % 10
            $i['add item'](digit)
            $ = _p.number.integer.divide(
                $,
                10,
                {
                    divided_by_zero: () => _p_unreachable_code_path("the divisor is hardcoded to 10")
                }
            )
        } while ($ > 0)

    })

    for (let j = digits.__get_number_of_items() - 1; j >= 0; j--) {
        $i['add item'](48 + digits.__deprecated_get_possible_item_at(j).__decide(
            ($) => $,
            () => _p_unreachable_code_path("index cannot be out of bounds")
        ))
    }
})


export const float: _pi.Transformer<number, d_loc.List_of_Characters> = ($) => {
    return _p_list_build_deprecated(($i) => {
        // Handle special case for zero
        if ($ === 0) {
            $i['add item'](48) // '0'
            return
        }

        // Handle negative numbers
        if ($ < 0) {
            $i['add item'](45) // '-'
            $ = -$
        }

        // Calculate exponent (power of 10)
        let exponent = 0
        let mantissa = $

        // Normalize to range [1, 10)
        if (mantissa >= 10) {
            while (mantissa >= 10) {
                mantissa = mantissa / 10
                exponent++
            }
        } else if (mantissa < 1) {
            while (mantissa < 1) {
                mantissa = mantissa * 10
                exponent--
            }
        }

        // Use exponential notation only if exponent < -6 or >= 21
        const use_exponential = exponent < -6 || exponent >= 21

        const fixme_digits = 16
        
        // Create scale factor
        let scale_factor = 1
        for (let i = 0; i < fixme_digits - 1; i++) {
            scale_factor = scale_factor * 10
        }

        const mantissa_scaled = _p.number.integer.divide(
            mantissa * scale_factor + 0.5,
            1,
            {
                divided_by_zero: () => _p_unreachable_code_path("the divisor is hardcoded to 1")
            }
        )

        // Extract all digits
        const digits = _p_list_build_deprecated<number>(($i) => {
            let t = mantissa_scaled
            do {
                const digit = t % 10
                $i['add item'](digit)
                t = _p.number.integer.divide(
                    t,
                    10,
                    {
                        divided_by_zero: () => _p_unreachable_code_path("the divisor is hardcoded to 10")
                    }
                )
            } while (t > 0)
        })

        if (use_exponential) {
            // OUTPUT IN EXPONENTIAL NOTATION
            const first_digit = digits.__deprecated_get_possible_item_at(digits.__get_number_of_items() - 1).__decide(
                ($) => $,
                () => _p_unreachable_code_path("index cannot be out of bounds")
            )
            $i['add item'](48 + first_digit)

            // Find first non-zero digit in fractional part
            let first_nonzero_index = -1
            if (digits.__get_number_of_items() > 1) {
                for (let j = 0; j < digits.__get_number_of_items() - 1; j++) {
                    const digit = digits.__deprecated_get_possible_item_at(j).__decide(
                        ($) => $,
                        () => _p_unreachable_code_path("index cannot be out of bounds")
                    )
                    if (digit !== 0) {
                        if (first_nonzero_index === -1) {
                            first_nonzero_index = j
                        }
                    }
                }
            }

            if (first_nonzero_index >= 0) {
                $i['add item'](46) // '.'
                for (let j = digits.__get_number_of_items() - 2; j >= first_nonzero_index; j--) {
                    const digit = digits.__deprecated_get_possible_item_at(j).__decide(
                        ($) => $,
                        () => _p_unreachable_code_path("index cannot be out of bounds")
                    )
                    $i['add item'](48 + digit)
                }
            }

            // Add exponent
            $i['add item'](101) // 'e'
            let exp = exponent
            if (exp < 0) {
                $i['add item'](45) // '-'
                exp = -exp
            } else {
                $i['add item'](43) // '+'
            }

            const exp_digits = _p_list_build_deprecated<number>(($i) => {
                if (exp === 0) {
                    $i['add item'](0)
                } else {
                    do {
                        const digit = exp % 10
                        $i['add item'](digit)
                        exp = _p.number.integer.divide(
                            exp,
                            10,
                            {
                                divided_by_zero: () => _p_unreachable_code_path("hardcoded 10")
                            }
                        )
                    } while (exp > 0)
                }
            })

            for (let j = exp_digits.__get_number_of_items() - 1; j >= 0; j--) {
                const digit = exp_digits.__deprecated_get_possible_item_at(j).__decide(
                    ($) => $,
                    () => _p_unreachable_code_path("index cannot be out of bounds")
                )
                $i['add item'](48 + digit)
            }
        } else {
            // OUTPUT IN FIXED-POINT NOTATION
            let digit_count = digits.__get_number_of_items()
            
            // Find first (lowest index) nonzero digit to know when to stop
            let first_nonzero = digit_count  // Initialize beyond range
            for (let j = 0; j < digit_count; j++) {
                const d = digits.__deprecated_get_possible_item_at(j).__decide(
                    ($) => $,
                    () => _p_unreachable_code_path("index cannot be out of bounds")
                )
                if (d !== 0) {
                    first_nonzero = j
                    break
                }
            }

            const decimal_pos = exponent + 1  // Number of digits to the left of decimal
            
            if (first_nonzero === digit_count) {
                // All zeros
                $i['add item'](48) // '0'
            } else if (decimal_pos <= 0) {
                // Like 0.00123 - need leading zeros
                $i['add item'](48) // '0'
                $i['add item'](46) // '.'
                
                for (let z = 0; z < -decimal_pos; z++) {
                    $i['add item'](48)
                }

                // Output digits from highest to first_nonzero
                for (let i = digit_count - 1; i >= first_nonzero; i--) {
                    const d = digits.__deprecated_get_possible_item_at(i).__decide(
                        ($) => $,
                        () => _p_unreachable_code_path("index cannot be out of bounds")
                    )
                    $i['add item'](48 + d)
                }
            } else {
                // Like 123 or 123.45
                let digits_output = 0
                
                // Output all digits from highest, but ensure we output at least decimal_pos digits before decimal
                let min_digits_needed = decimal_pos
                
                for (let i = digit_count - 1; i >= 0; i--) {
                    // Stop after we've output all significant fractional digits
                    if (i < first_nonzero && digits_output >= decimal_pos) {
                        break
                    }

                    const d = digits.__deprecated_get_possible_item_at(i).__decide(
                        ($) => $,
                        () => _p_unreachable_code_path("index cannot be out of bounds")
                    )
                    
                    // Check if we need to insert decimal before this digit
                    if (digits_output === decimal_pos && digits_output > 0) {
                        $i['add item'](46) // '.'
                    }

                    $i['add item'](48 + d)
                    digits_output++
                }
            }
        }
    })
}


export const Directory = ($: d_in.Directory): d_out_fs.Directory => {
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
    return sh.ph.serialize($p.delimiter === "quote" ? quoted_text($) : apostrophed_text($))
}

export const String_Literal = (
    $: d_in.String_Literal,
): d_out.Phrase => {
    return sh.ph.serialize($.delimiter[0] === "quote" ? quoted_text($.value) : apostrophed_text($.value))
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
        case 'number literal': return _p.ss($, ($) => sh.ph.serialize(float($)))
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
            sh.ph.serialize($['delimiter'][0] === "quote" ? quoted_text($['value']) : apostrophed_text($['value']))
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