import * as p_ from 'pareto-core/implementation/serializer'
import type * as p_di from 'pareto-core/interface/schema'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//schemas
import type * as s_in from "../../schemas/typescript_light.js"
import type * as s_out from "../../schemas/paragraph.js"


namespace declarations {

    export type escaped_text = p_.Serializer<
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

export const escaped_text: declarations.escaped_text = ($) => p_.ph.list_of_characters(
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
                default: {
                    return p_.literal.list([
                        $,
                    ])
                }
            }
        }
    )
)

export const Apostrophed_Text: declarations.Apostrophed_Text = ($) => p_.ph.composed([
    p_.ph.literal("'"),
    escaped_text(
        $,
    ),
    p_.ph.literal("'"),
])

export const Backticked_Text: declarations.Backticked_Text = ($) => p_.ph.composed([
    p_.ph.literal("`"),
    escaped_text(
        $,
    ),
    p_.ph.literal("`"),
])

export const Quoted_Text: declarations.Quoted_Text = ($) => p_.ph.composed([
    p_.ph.literal("\""),
    escaped_text(
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
    return p_.ph.literal($.value)
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
