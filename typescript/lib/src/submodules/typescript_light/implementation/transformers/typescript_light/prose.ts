import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/data'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//data types
import type * as d_out from "pareto-fountain-pen/interface/data/prose"
import type * as d_loc from "pareto-fountain-pen/interface/data/list_of_characters"
import type * as d_out_fs from "pareto-fountain-pen-file-structure/interface/data/file-system"
import type * as d_in from "../../../interface/schemas/typescript_light.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export namespace interface_ {

    export type escaped_text = p_i.Transformer<
        string,
        d_loc.List_of_Characters
    >

    export type apostrophed_text = p_i.Transformer<
        string,
        d_loc.List_of_Characters
    >

    export type backticked_text = p_i.Transformer<
        string,
        d_loc.List_of_Characters
    >

    export type quoted_text = p_i.Transformer<
        string,
        d_loc.List_of_Characters
    >

    export type decimal = p_i.Transformer<
        number,
        d_loc.List_of_Characters
    >

    export type float = p_i.Transformer<
        number,
        d_loc.List_of_Characters
    >

    export type Directory = p_i.Transformer<
        d_in.Directory,
        d_out_fs.Directory
    >

    export type Identifier = p_i.Transformer<
        d_in.Identifier,
        d_out.Phrase
    >

    export type String_Literal_pseudo = p_i.Transformer_With_Parameter<
        string,
        d_out.Phrase,
        {
            'delimiter': "quote" | "apostrophe"
        }
    >

    export type String_Literal = p_i.Transformer<
        d_in.String_Literal,
        d_out.Phrase
    >

    export type Statements = p_i.Transformer_With_Parameter<
        d_in.Statements,
        d_out.Paragraph,
        {
            'replace empty type literals by symbol': boolean
        }
    >

    export type Expression = p_i.Transformer_With_Parameter<
        d_in.Expression_,
        d_out.Phrase.composed,
        {
            'replace empty type literals by symbol': boolean
            'object literal needs parentheses': boolean
        }
    >

    export type Type = p_i.Transformer_With_Parameter<
        d_in.Type,
        d_out.Phrase,
        {
            'replace empty type literals by symbol': boolean
        }
    >

}

export const escaped_text: interface_.escaped_text = ($) => p_.from.list(p_list_from_text(
    $,
    ($) => $
),
).flatten(
    ($): p_di.List<number> => {
        switch ($) {
            // case 0x2F: // slash (\/)
            //     return p_.literal.list([
            //         0x5c, // \
            //         0x2f, // /
            //     ])
            case 0x22: // " (\")
                return p_.literal.list([
                    0x5C, // \
                    0x22, // "
                ])
            case 0x5C: // \ (\\)
                return p_.literal.list([
                    0x5C, // \
                    0x5C, // \
                ])
            case 0x08: // backspace (\b)
                return p_.literal.list([
                    0x5C, // \
                    0x62, // b
                ])
            case 0x0C: // form feed (\f)
                return p_.literal.list([
                    0x5C, // \
                    0x66, // f
                ])
            case 0x0A: // line feed (\n)
                return p_.literal.list([
                    0x5C, // \
                    0x6E, // n
                ])
            case 0x0D: // carriage return (\r)
                return p_.literal.list([
                    0x5C, // \
                    0x72, // r
                ])
            case 0x09: // horizontal tab (\t)
                return p_.literal.list([
                    0x5C, // \
                    0x74, // t
                ])
            case 0x0B: // vertical tab (\v)
                return p_.literal.list([
                    0x5C, // \
                    0x76, // v
                ])
            default: {
                return p_.literal.list([
                    $,
                ])
            }
        }
    }
)

export const apostrophed_text: interface_.apostrophed_text = ($) => p_.literal.segmented_list([
    p_.literal.list([
        0x27, // '
    ]),
    escaped_text(
        $,
    ),
    p_.literal.list([
        0x27, // '
    ])
])

export const backticked_text: interface_.backticked_text = ($) => p_.literal.segmented_list([
    p_.literal.list([
        0x60, // `
    ]),
    escaped_text(
        $,
    ),
    p_.literal.list([
        0x60, // `
    ])
])

export const quoted_text: interface_.quoted_text = ($) => p_.literal.segmented_list([
    p_.literal.list([
        0x22, // "
    ]),
    escaped_text(
        $,
    ),
    p_.literal.list([
        0x22, // "
    ])
])


export const decimal: interface_.decimal = ($) => p_list_build_deprecated(
    ($i) => {
        if ($ < 0) {
            $i['add item'](45) // '-'
            $ = -$
        }
        const digits = p_list_build_deprecated<number>(
            ($i) => {
                do {
                    const digit = $ % 10
                    $i['add item'](digit)
                    $ = p_.from.number($).divide(
                        10,
                        ['towards zero', null],
                        {
                            divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10"),
                        }
                    )
                } while ($ > 0)

            })

        for (let j = p_.from.list(digits).amount_of_items() - 1; j >= 0; j--) {
            $i['add item'](48 + p_.from.optional(digits.__deprecated_get_possible_item_at(j)).decide(
                ($) => $,
                () => p_unreachable_code_path("index cannot be out of bounds")
            ))
        }
    })


export const float: interface_.float = ($) => {
    return p_list_build_deprecated(
        ($i) => {
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

            const mantissa_scaled = p_.from.number(mantissa * scale_factor + 0.5,).divide(
                1,
                ['towards zero', null],
                {
                    divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 1"),
                }
            )

            // Extract all digits
            const digits = p_list_build_deprecated<number>(
                ($i) => {
                    let $v_t = mantissa_scaled
                    do {
                        const digit = $v_t % 10
                        $i['add item'](digit)
                        $v_t = p_.from.number($v_t).divide(
                            10,
                            ['towards zero', null],
                            {
                                divided_by_zero: () => p_unreachable_code_path("the divisor is hardcoded to 10"),
                            }
                        )
                    } while ($v_t > 0)
                })

            if (use_exponential) {
                // OUTPUT IN EXPONENTIAL NOTATION
                const first_digit = p_.from.optional(digits.__deprecated_get_possible_item_at(p_.from.list(digits).amount_of_items() - 1)).decide(
                    ($) => $,
                    () => p_unreachable_code_path("index cannot be out of bounds")
                )
                $i['add item'](48 + first_digit)

                // Find first non-zero digit in fractional part
                let first_nonzero_index = -1
                if (p_.from.list(digits).amount_of_items() > 1) {
                    for (let j = 0; j < p_.from.list(digits).amount_of_items() - 1; j++) {
                        const digit = p_.from.optional(digits.__deprecated_get_possible_item_at(j)).decide(
                            ($) => $,
                            () => p_unreachable_code_path("index cannot be out of bounds")
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
                    for (let j = p_.from.list(digits).amount_of_items() - 2; j >= first_nonzero_index; j--) {
                        const digit = p_.from.optional(digits.__deprecated_get_possible_item_at(j)).decide(
                            ($) => $,
                            () => p_unreachable_code_path("index cannot be out of bounds")
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

                const exp_digits = p_list_build_deprecated<number>(
                    ($i) => {
                        if (exp === 0) {
                            $i['add item'](0)
                        } else {
                            do {
                                const digit = exp % 10
                                $i['add item'](digit)
                                exp = p_.from.number(exp).divide(
                                    10,
                                    ['towards zero', null],
                                    {
                                        divided_by_zero: () => p_unreachable_code_path("hardcoded 10"),
                                    }
                                )
                            } while (exp > 0)
                        }
                    })

                for (let j = p_.from.list(exp_digits).amount_of_items() - 1; j >= 0; j--) {
                    const digit = p_.from.optional(exp_digits.__deprecated_get_possible_item_at(j)).decide(
                        ($) => $,
                        () => p_unreachable_code_path("index cannot be out of bounds")
                    )
                    $i['add item'](48 + digit)
                }
            } else {
                // OUTPUT IN FIXED-POINT NOTATION
                let digit_count = p_.from.list(digits).amount_of_items()

                // Find first (lowest index) nonzero digit to know when to stop
                let first_nonzero = digit_count  // Initialize beyond range
                for (let j = 0; j < digit_count; j++) {
                    const d = p_.from.optional(digits.__deprecated_get_possible_item_at(j)).decide(
                        ($) => $,
                        () => p_unreachable_code_path("index cannot be out of bounds")
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
                        const d = p_.from.optional(digits.__deprecated_get_possible_item_at(i)).decide(
                            ($) => $,
                            () => p_unreachable_code_path("index cannot be out of bounds")
                        )
                        $i['add item'](48 + d)
                    }
                } else {
                    // Like 123 or 123.45
                    let digits_output = 0

                    // Output all digits from highest, but ensure we output at least decimal_pos digits before decimal
                    // let min_digits_needed = decimal_pos

                    for (let i = digit_count - 1; i >= 0; i--) {
                        // Stop after we've output all significant fractional digits
                        if (i < first_nonzero && digits_output >= decimal_pos) {
                            break
                        }

                        const d = p_.from.optional(digits.__deprecated_get_possible_item_at(i)).decide(
                            ($) => $,
                            () => p_unreachable_code_path("index cannot be out of bounds")
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


export const Directory: interface_.Directory = ($) => {
    return p_.from.dictionary($).map(
        ($, id) => p_.from.state($).decide(
            ($) => {
                switch ($[0]) {
                    case 'file': return p_.option($, ($) => ['file', Statements(
                        $['statements'],
                        { 'replace empty type literals by symbol': true }
                    )])
                    case 'directory': return p_.option($, ($) => ['directory', Directory($)])
                    default: return p_.exhaustive($[0])
                }
            }))
}

export const Identifier: interface_.Identifier = ($) => {
    return sh.ph.literal($.value)
}


export const String_Literal_pseudo: interface_.String_Literal_pseudo = ($, $p) => {
    return sh.ph.serialize($p.delimiter === "quote"
        ? quoted_text($)
        : apostrophed_text($))
}

export const String_Literal: interface_.String_Literal = ($) => {
    return sh.ph.serialize($.delimiter[0] === "quote"
        ? quoted_text($.value)
        : apostrophed_text($.value))
}

export const Statements: interface_.Statements = ($, $p) => sh.pg.deprecated_composed(p_.from.list($).map(
    ($) =>
        p_.from.state($).decide(
            ($): d_out.Paragraph => {
                switch ($[0]) {
                    case 'block': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            sh.ph.literal("{"),
                            sh.ph.indent(
                                Statements($, $p),
                            ),
                            sh.ph.literal("}"),
                        ])
                    ]))
                    case 'export': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            sh.ph.literal("export "),
                            p_.from.state($.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'named exports': return p_.option($, ($) => sh.ph.composed([
                                            sh.ph.literal("{ "),
                                            sh.ph.indent(
                                                sh.pg.sentences(p_.from.list($.specifiers).map(
                                                    ($) => sh.sentence([
                                                        Identifier($.name),
                                                        p_.from.optional($.as).decide(
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
                                            p_.from.optional($.from).decide(
                                                ($) => sh.ph.composed([
                                                    sh.ph.literal(" from "),
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
                            sh.ph.literal("import "),
                            p_.from.state($.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'default': return p_.option($, ($) => sh.ph.composed([
                                            Identifier($),
                                        ]))
                                        case 'named': return p_.option($, ($) => sh.ph.composed([
                                            sh.ph.literal("{"),
                                            sh.ph.indent(
                                                sh.pg.sentences(p_.from.list($.specifiers).map(
                                                    ($) => sh.sentence([
                                                        Identifier($.name),
                                                        p_.from.optional($.as).decide(
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
                                        case 'namespace': return p_.option($, ($) => sh.ph.composed([
                                            sh.ph.literal("* as "),
                                            Identifier($),
                                        ]))
                                        default: return p_.exhaustive($[0])
                                    }
                                }),
                            sh.ph.literal(" from "),
                            String_Literal($.from),
                        ])
                    ]))
                    case 'module declaration': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            $.export ?
                                sh.ph.literal("export ")
                                : sh.ph.nothing(),
                            sh.ph.literal("namespace "),
                            Identifier($['name']),
                            sh.ph.literal(" "),
                            sh.ph.composed([
                                sh.ph.literal("{"),
                                sh.ph.indent(
                                    sh.pg.deprecated_composed([
                                        Statements($.block, $p),
                                        sh.pg.sentences([
                                            sh.sentence([]),
                                        ])
                                    ])),
                                sh.ph.literal("}"),
                            ])
                        ])
                    ]))
                    case 'return': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence(
                            p_.literal.segmented_list<d_out.Phrase.composed.L>([
                                p_.literal.list([
                                    sh.ph.literal("return "),
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
                                sh.ph.literal("switch ("),
                            ]),
                            Expression(
                                $.expression,
                                {
                                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                    'object literal needs parentheses': false,
                                }
                            ),
                            p_.literal.list([
                                sh.ph.literal(") {"),
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
                                                                        sh.ph.literal("case "),
                                                                    ]),
                                                                    Expression(
                                                                        $,
                                                                        {
                                                                            'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                                                            'object literal needs parentheses': true,
                                                                        }
                                                                    ),
                                                                    p_.literal.list([
                                                                        sh.ph.literal(":"),
                                                                    ]),
                                                                ]))
                                                                case 'default': return p_.option($, ($) => p_.literal.list([
                                                                    sh.ph.literal("default:")
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
                                sh.ph.literal("}"),
                            ])
                        ])),
                    ]))
                    case 'type alias declaration': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            $.export ? sh.ph.literal("export ") : sh.ph.nothing(),
                            sh.ph.literal("type "),
                            Identifier($['name']),
                            sh.ph.rich(
                                p_.from.list($['parameters']).map(
                                    ($) => Identifier($)),
                                sh.ph.nothing(),
                                sh.ph.literal("<"),
                                sh.ph.literal(", "),
                                sh.ph.literal(">"),
                            ),
                            sh.ph.literal(" = "),
                            Type($['type'], $p),
                        ])
                    ]))
                    case 'variable': return p_.option($, ($) => sh.pg.sentences([
                        sh.sentence([]),
                        sh.sentence([
                            $.export ? sh.ph.literal("export ") : sh.ph.nothing(),
                            $.const ? sh.ph.literal("const ") : sh.ph.literal("let "),
                            Identifier($['name']),
                            p_.from.optional($.type).decide(
                                ($) => sh.ph.composed([
                                    sh.ph.literal(": "),
                                    Type($, $p)
                                ]),
                                () => sh.ph.nothing(),
                            ),
                            sh.ph.composed(p_.from.optional($.expression).decide(
                                ($) => p_.literal.segmented_list([
                                    p_.literal.list([
                                        sh.ph.literal(" = "),
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

export const Expression: interface_.Expression = ($, $p) => p_.from.state($).decide(
    ($): d_out.Phrase.composed => {
        switch ($[0]) {
            case 'assignment': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.left, $p),
                p_.literal.list([
                    sh.ph.literal(" = "),
                ]),
                Expression($.right, {
                    'object literal needs parentheses': false,
                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                }),
            ]))
            case 'array literal': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.literal("["),
                    sh.ph.rich(
                        p_.from.list($).flatten(
                            ($) => Expression($, {
                                'object literal needs parentheses': false,
                                'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                            })),
                        sh.ph.nothing(),
                        sh.ph.nothing(),
                        sh.ph.literal(", "),
                        sh.ph.nothing(),
                    )
                ]),
                p_.literal.list([
                    sh.ph.literal("]"),
                ]),
            ]))
            case 'arrow function': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.literal("("),
                    sh.ph.rich(
                        p_.from.list($.parameters).map(
                            ($) => sh.ph.composed([
                                Identifier($.name),
                                p_.from.optional($.type).decide(
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
                ]),
                p_.from.optional($['return type']).decide(
                    ($) => p_.literal.segmented_list([
                        p_.literal.list([
                            sh.ph.literal(": "),
                        ]),
                        p_.literal.list([
                            Type($, $p)
                        ])
                    ]),
                    () => p_.literal.list([]),
                ),
                p_.literal.list([
                    sh.ph.literal(" => "),
                ]),
                p_.from.state($.body).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'block': return p_.option($, ($) => p_.literal.list([
                                sh.ph.literal("{"),
                                sh.ph.indent(
                                    Statements($, $p),
                                ),
                                sh.ph.literal("}"),
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
                    sh.ph.literal("("),
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
                                            sh.ph.literal(",")
                                        ]),
                                    ])
                                )
                            )
                        ),
                    ),
                    sh.ph.literal(")"),
                ])
            ]))
            case 'compare': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.left, $p),
                p_.literal.list([
                    sh.ph.literal(" "),
                    p_.from.state($.operator).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'loosely equal': return p_.option($, ($) => sh.ph.literal("=="))
                                case 'strictly equal': return p_.option($, ($) => sh.ph.literal("==="))
                                case 'loosely not equal': return p_.option($, ($) => sh.ph.literal("!="))
                                case 'strictly not equal': return p_.option($, ($) => sh.ph.literal("!=="))
                                case 'smaller than': return p_.option($, ($) => sh.ph.literal("<"))
                                case 'smaller than or equal': return p_.option($, ($) => sh.ph.literal("<="))
                                case 'greater than': return p_.option($, ($) => sh.ph.literal(">"))
                                case 'greater than or equal': return p_.option($, ($) => sh.ph.literal(">="))
                                default: return p_.exhaustive($[0])
                            }
                        }),
                    sh.ph.literal(" "),
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
                                        sh.ph.literal("? "),
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
                                        sh.ph.literal(": "),
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
                    sh.ph.literal("["),
                ]),
                Expression($.index, $p),
                p_.literal.list([
                    sh.ph.literal("]"),
                ])
            ]))
            case 'false': return p_.option($, ($) => p_.literal.list([
                sh.ph.literal("false")
            ]))
            case 'identifier': return p_.option($, ($) => p_.literal.list([
                Identifier($)
            ]))
            case 'null': return p_.option($, ($) => p_.literal.list([
                sh.ph.literal("null")
            ]))
            case 'number literal': return p_.option($, ($) => p_.literal.list([
                sh.ph.serialize(float($))
            ]))
            case 'object literal': return p_.option($, ($) => p_.literal.list([
                $p['object literal needs parentheses']
                    ? sh.ph.literal("(")
                    : sh.ph.nothing(),
                sh.ph.literal("{"),
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
                                    sh.ph.literal(": ")
                                ]),
                                Expression(
                                    $.value,
                                    {
                                        'object literal needs parentheses': false,
                                        'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                                    }
                                ),
                                p_.literal.list([
                                    sh.ph.literal(",")
                                ])
                            ]))
                        )),
                ),
                sh.ph.literal("}"),
                $p['object literal needs parentheses']
                    ? sh.ph.literal(")")
                    : sh.ph.nothing(),
            ]))
            case 'parenthesized': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.literal("("),
                ]),
                Expression($, {
                    'replace empty type literals by symbol': $p['replace empty type literals by symbol'],
                    'object literal needs parentheses': false,
                }),
                p_.literal.list([
                    sh.ph.literal(")"),
                ])
            ]))
            case 'property access': return p_.option($, ($) => p_.literal.segmented_list([
                Expression($.object, $p),
                p_.literal.list([
                    sh.ph.literal("."),
                    Identifier($.property),
                ])
            ]))
            case 'string literal': return p_.option($, ($) => p_.literal.list([
                sh.ph.serialize($['delimiter'][0] === "quote" ? quoted_text($['value']) : apostrophed_text($['value']))
            ]))
            case 'true': return p_.option($, ($) => p_.literal.list([
                sh.ph.literal("true")
            ]))
            case 'unary operation': return p_.option($, ($) => {
                const operand = $.operand
                return p_.literal.segmented_list([
                    p_.literal.list([
                        p_.from.state($.operator).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'negation': return p_.option($, ($) => sh.ph.literal("-"))
                                    case 'logical not': return p_.option($, ($) => sh.ph.literal("!"))
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

export const Type: interface_.Type = ($, $p) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'boolean': return p_.option($, ($) => sh.ph.literal("boolean"))
            case 'function': return p_.option($, ($) => sh.ph.composed([
                sh.ph.rich(
                    p_.from.list($['type parameters']).map(
                        ($) => Type($, $p)),
                    sh.ph.nothing(),
                    sh.ph.literal("<"),
                    sh.ph.literal(", "),
                    sh.ph.literal(">"),
                ),
                sh.ph.literal("("),
                sh.ph.indent(
                    sh.pg.sentences(p_.from.list($['parameters']).map(
                        ($) => sh.sentence(p_.literal.list([
                            Identifier($.name),
                            p_.from.optional($.type).decide(
                                ($) => sh.ph.composed([
                                    sh.ph.literal(": "),
                                    Type($, $p)
                                ]),
                                () => sh.ph.nothing(),
                            ),
                            sh.ph.literal(",")
                        ])))
                    ),
                ),
                sh.ph.literal(") => "),
                Type($['return'], $p)
            ]))
            case 'literal type': return p_.option($, ($) => String_Literal($)) //FIX, implement a switch for the delimiter
            case 'never': return p_.option($, ($) => sh.ph.literal("never"))
            case 'null': return p_.option($, ($) => sh.ph.literal("null"))
            case 'number': return p_.option($, ($) => sh.ph.literal("number"))
            case 'string': return p_.option($, ($) => sh.ph.literal("string"))
            case 'tuple': return p_.option($, ($) => sh.ph.composed([
                $.readonly ? sh.ph.literal("readonly ") : sh.ph.nothing(),
                sh.ph.literal("["),
                sh.ph.rich(
                    p_.from.list($.elements).map(
                        ($) => Type($, $p)),
                    sh.ph.nothing(),
                    sh.ph.nothing(),
                    sh.ph.literal(", "),
                    sh.ph.nothing(),
                ),
                sh.ph.literal("]"),
            ]))
            case 'type literal': return p_.option($, ($) => $p['replace empty type literals by symbol'] && p_.from.list($.properties).on_has_items(
                () => true,
                () => false,
            )
                ? sh.ph.literal("symbol")
                : sh.ph.composed([
                    sh.ph.literal("{"),
                    sh.ph.indent(
                        sh.pg.sentences(
                            p_.from.list($.properties).map(
                                ($) => sh.sentence([
                                    sh.ph.composed([
                                        $['readonly'] ? sh.ph.literal("readonly ") : sh.ph.nothing(),
                                        p_.from.state($.key).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'identifier': return p_.option($, ($) => Identifier($))
                                                    case 'string literal': return p_.option($, ($) => String_Literal($))
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }),
                                        sh.ph.literal(": "),
                                        Type($.type, $p),
                                    ])
                                ])
                            )
                        ),
                    ),
                    sh.ph.literal("}")
                ])
            )
            case 'type reference': return p_.option($, ($) => sh.ph.composed([
                Identifier($['start']),
                sh.ph.composed(p_.from.list($['tail']).map(
                    ($) => sh.ph.composed([
                        sh.ph.literal("."),
                        Identifier($),
                    ]))),
                p_.from.list($['type arguments']).on_has_items(
                    ($) => sh.ph.composed([
                        sh.ph.literal("<"),
                        sh.ph.rich(
                            p_.from.list($).map(
                                ($) => Type($, $p)),
                            sh.ph.nothing(),
                            sh.ph.nothing(),
                            sh.ph.literal(", "),
                            sh.ph.nothing(),
                        ),
                        sh.ph.literal(">"),
                    ]),
                    () => sh.ph.nothing()
                ),
            ]))
            case 'union': return p_.option($, ($) => sh.ph.indent(
                sh.pg.sentences(p_.from.list($).map(
                    ($) => sh.sentence(
                        p_.literal.list([
                            sh.ph.literal("| "),
                            Type($, $p),
                        ])
                    )
                ))
            ))
            case 'void': return p_.option($, ($) => sh.ph.literal("void"))
            default: return p_.exhaustive($[0])
        }
    })