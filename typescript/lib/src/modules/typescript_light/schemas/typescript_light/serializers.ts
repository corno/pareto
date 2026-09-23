import * as p_ from 'pareto-core/serializer'
import type * as p_di from 'pareto-core/schema'
import p_list_from_text from 'pareto-core/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/refiner/specials/list_build_deprecated'
import p_unreachable_code_path from 'pareto-core/transformer/specials/unreachable_code_path'
import type * as p_schema from 'pareto-core/schema'
import p_implement_me from 'pareto-core-dev/implement_me'

//schemas
import type * as s_in from "./schema.js"


namespace declarations {

    export type Escaped_Text = p_.Serializer<
        string
    >

    export type Apostrophed_Text = p_.Serializer<
        string
    >

    export type Backticked_Text = p_.Serializer<
        string
    >

    export type Quoted_Text = p_.Serializer<
        string
    >

    export type Decimal = p_.Serializer<
        number
    >

    export type Float = p_.Serializer<
        number
    >

    export type Identifier = p_.Serializer<
        s_in.Identifier
    >


}

export const Escaped_Text: declarations.Escaped_Text = ($) => p_.ph.list_of_characters(
    p_.from.list(
        p_list_from_text(
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
                default: return p_.literal.list([
                    $,
                ])
            }
        }
    )
)

export const Apostrophed_Text: declarations.Apostrophed_Text = ($) => p_.ph.composed([
    p_.ph.literal("'"),
    Escaped_Text(
        $,
    ),
    p_.ph.literal("'"),
])

export const Backticked_Text: declarations.Backticked_Text = ($) => p_.ph.composed([
    p_.ph.literal("`"),
    Escaped_Text(
        $,
    ),
    p_.ph.literal("`"),
])

export const Quoted_Text: declarations.Quoted_Text = ($) => p_.ph.composed([
    p_.ph.literal("\""),
    Escaped_Text(
        $,
    ),
    p_.ph.literal("\""),
])


export const Decimal: declarations.Decimal = ($) => p_.ph.list_of_characters(
    p_list_build_deprecated(
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
        }
    )
)


export const Float: declarations.Float = ($) => p_.ph.list_of_characters(p_list_build_deprecated(
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
)


export const Identifier: declarations.Identifier = ($) => {
    return p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'raw': return p_.option($, ($) => $)
                case 'escaped': return p_.option($, ($) => {
                    const temp_literal_to_text = ($: string): p_schema.List<number> => p_list_from_text(
                        $,
                        ($) => $
                    )
                    const the_string = $
                    if (the_string === "") {
                        return "_empty"
                    }
                    const $v_reserved_keywords = p_.literal.dictionary({
                        //Reserved Words
                        "arguments": null,
                        "break": null,
                        "case": null,
                        "catch": null,
                        "class": null,
                        "const": null,
                        "continue": null,
                        "debugger": null,
                        "default": null,
                        "delete": null,
                        "do": null,
                        "else": null,
                        "enum": null,
                        "export": null,
                        "extends": null,
                        "false": null,
                        "finally": null,
                        "for": null,
                        "function": null,
                        "if": null,
                        "import": null,
                        "in": null,
                        "instanceof": null,
                        "new": null,
                        "null": null,
                        "return": null,
                        "super": null,
                        "switch": null,
                        "this": null,
                        "throw": null,
                        "true": null,
                        "try": null,
                        "typeof": null,
                        "undefined": null,
                        "var": null,
                        "void": null,
                        "while": null,
                        "with": null,
                        //Strict Mode Reserved Words
                        "as": null,
                        "implements": null,
                        "interface": null,
                        "let": null,
                        "package": null,
                        "private": null,
                        "protected": null,
                        "public": null,
                        "static": null,
                        "yield": null,
                        //Contextual Keywords
                        "any": null,
                        "boolean": null,
                        "constructor": null,
                        "declare": null,
                        "get": null,
                        "module": null,
                        "require": null,
                        "number": null,
                        "set": null,
                        "string": null,
                        "symbol": null,
                        "type": null,
                        "from": null,
                        "of": null,
                        //???
                        "unknown": null,
                        "object": null,
                        "never": null,
                    })
                    return p_.from.dictionary($v_reserved_keywords).get_possible_entry(
                        the_string,
                        ($): string => p_.ph.list_of_characters(p_list_build_deprecated(
                            ($i) => {
                                $i['add list'](temp_literal_to_text(the_string))
                                $i['add item'](95) //_
                            }
                        )
                        ),
                        () => p_.ph.list_of_characters(p_list_build_deprecated(
                            ($i) => {
                                const $v_characters = p_list_from_text(
                                    the_string,
                                    ($) => $
                                )
                                const length = p_.from.list($v_characters).amount_of_items()

                                let position = 0

                                const discard_character = () => {
                                    position += 1
                                }

                                while (true) {

                                    const get_current_character = (): null | number => {
                                        if (position === length) {
                                            return null
                                        }
                                        return p_.from.optional($v_characters.__deprecated_get_possible_item_at(position)).decide(
                                            ($) => $,
                                            () => null
                                        )
                                    }
                                    const current_character = get_current_character()
                                    if (current_character === null) {
                                        return
                                    }

                                    if (position === 0) {
                                        //first character
                                        if (current_character >= 48 && current_character <= 57) {
                                            //begins with 0-9

                                            $i['add item'](95) //_
                                            $i['add item'](current_character)
                                        }
                                    }
                                    if (false
                                        || (current_character >= 48 && current_character <= 57) //0-9
                                        || (current_character >= 65 && current_character <= 90) //A-Z
                                        || (current_character >= 97 && current_character <= 122)//a-z
                                    ) {
                                        //normal character
                                        $i['add item'](current_character)
                                        discard_character()
                                    } else {
                                        const consume_and_add = ($: string) => {
                                            discard_character()
                                            $i['add list'](temp_literal_to_text($))
                                        }
                                        switch (current_character) {
                                            case 32: consume_and_add("_"); break; // Space
                                            case 33: consume_and_add("$ex_"); break; // Exclamation (!)
                                            case 34: consume_and_add("$qo_"); break; // Double Quote (")
                                            case 35: consume_and_add("$ha_"); break; // Hash (#)
                                            case 36: consume_and_add("$$_"); break; // Dollar ($)
                                            case 37: consume_and_add("$pt_"); break; // Percent (%)
                                            case 38: consume_and_add("$am_"); break; // Ampersand (&)
                                            case 39: consume_and_add("$ap_"); break; // Apostrophe (')
                                            case 40: consume_and_add("$po_"); break; // Open Parenthesis (()
                                            case 41: consume_and_add("$pc_"); break; // Close Parenthesis ())
                                            case 42: consume_and_add("$sr_"); break; // Asterisk (*)
                                            case 43: consume_and_add("$pl_"); break; // Plus (+)
                                            case 44: consume_and_add("$cm_"); break; // Comma (,)
                                            case 45: consume_and_add("$mi_"); break; // Minus (-)
                                            case 46: consume_and_add("$pe_"); break; // Period (.)
                                            case 47: consume_and_add("$sl_"); break; // Slash (/)
                                            case 58: consume_and_add("$cl_"); break; // Colon (:)
                                            case 59: consume_and_add("$sc_"); break; // Semicolon (;)
                                            case 60: consume_and_add("$st_"); break; // Less Than (<)
                                            case 61: consume_and_add("$eq_"); break; // Equals (=)
                                            case 62: consume_and_add("$gt_"); break; // Greater Than (>)
                                            case 63: consume_and_add("$qu_"); break; // Question Mark (?)
                                            case 64: consume_and_add("$at_"); break; // At (@)
                                            case 91: consume_and_add("$bo_"); break; // Open Bracket ([)
                                            case 92: consume_and_add("$bs_"); break; // Backslash (\)
                                            case 93: consume_and_add("$bc_"); break; // Close Bracket (])
                                            case 94: consume_and_add("$ca_"); break; // Caret (^)
                                            case 95: consume_and_add("$_"); break; // Underscore (_)
                                            case 96: consume_and_add("$bt_"); break; // Backtick (`)
                                            case 123: consume_and_add("$co_"); break; // Open Curly Brace ({)
                                            case 124: consume_and_add("$vb_"); break; // Vertical Bar (|)
                                            case 125: consume_and_add("$cc_"); break; // Close Curly Brace (})
                                            case 126: consume_and_add("$ti_"); break; // Tilde (~)
                                            default: p_implement_me(`unhandled character: \"${current_character}\"`);
                                        }
                                    }
                                }
                            }),
                        )
                    )
                })
                default: return p_.exhaustive($[0])
            }
        }
    )
}


// export const String_Literal_pseudo: declarations.String_Literal_pseudo = ($, $p) => {
//     return sh.ph.serialize($p.delimiter === "quote"
//         ? quoted_text($)
//         : apostrophed_text($))
// }

// export const String_Literal: declarations.String_Literal = ($) => {
//     return sh.ph.serialize($.delimiter[0] === "quote"
//         ? quoted_text($.value)
//         : apostrophed_text($.value))
// }
