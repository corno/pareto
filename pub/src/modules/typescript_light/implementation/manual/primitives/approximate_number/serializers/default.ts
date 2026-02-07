import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

export const $$: _pi.Transformer<number, d_out.List_of_Characters> = ($) => {
    return _p_list_build_deprecated(($i) => {
        const fixme_digits = 16 // Number of significant digits to serialize
        // Handle special case for zero in scientific notation
        if ($ === 0) {
            $i['add item'](48) // '0'

            // Add decimal point if we have more than 1 digit
            //FIXME: do this only when the number is not an integer number
            $i['add item'](46) // '.'

            // Add the required number of zeros after decimal point
            for (let i = 0; i < 16; i++) {
                $i['add item'](48) // '0'
            }


            // Add exponent part for zero: e+0
            $i['add item'](101) // 'e'
            $i['add item'](43)  // '+'
            $i['add item'](48)  // '0'
            return
        }

        // Handle negative numbers
        if ($ < 0) {
            $i['add item'](45) // '-'
            $ = -$
        }

        // Calculate exponent and mantissa for scientific notation
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

        // Create scale factor by multiplying
        let scale_factor = 1
        for (let i = 0; i < fixme_digits - 1; i++) {
            scale_factor = scale_factor * 10
        }

        // Simple rounding using integer operations
        const mantissa_scaled = _p.number.integer.divide(mantissa * scale_factor + 0.5, 1, () => _p_unreachable_code_path("the divisor is hardcoded to 1"))

        // Convert mantissa to string
        const digits = _p_list_build_deprecated<number>(($i) => {
            let temp = mantissa_scaled
            // temp is always > 0 here since mantissa_scaled = integer_division(mantissa * scale_factor + 0.5, 1)
            // where mantissa >= 1.0 (normalized) and scale_factor >= 1, so result >= 1
            do {
                const digit = temp % 10
                $i['add item'](digit)
                temp = _p.number.integer.divide(temp, 10, () => _p_unreachable_code_path("the divisor is hardcoded to 10"))
            } while (temp > 0)
        })

        // Add leading digit
        const first_digit = digits.__deprecated_get_possible_item_at(digits.__get_number_of_items() - 1).__decide(
            ($) => $,
            () => _p_unreachable_code_path("index cannot be out of bounds")
        )
        $i['add item'](48 + first_digit) // First digit

        // Add decimal point if we have more digits
        if (fixme_digits > 1 && digits.__get_number_of_items() > 1) {
            $i['add item'](46) // '.'

            // Add remaining digits in reverse order
            for (let j = digits.__get_number_of_items() - 2; j >= 0; j--) {
                const digit = digits.__deprecated_get_possible_item_at(j).__decide(
                    ($) => $,
                    () => _p_unreachable_code_path("index cannot be out of bounds")
                )
                $i['add item'](48 + digit)
            }
        }

        // Add exponent part
        $i['add item'](101) // 'e'
        if (exponent < 0) {
            $i['add item'](45) // '-'
            exponent = -exponent
        } else {
            $i['add item'](43) // '+'
        }

        // Convert exponent to string
        const exp_digits = _p_list_build_deprecated<number>(($i) => {
            if (exponent === 0) {
                $i['add item'](0)
            } else {
                do {
                    const digit = exponent % 10
                    $i['add item'](digit)
                    exponent = _p.number.integer.divide(exponent, 10, () => _p_unreachable_code_path("the divisor is hardcoded to 10"))
                } while (exponent > 0)
            }
        })

        // Add exponent digits in reverse order
        for (let j = exp_digits.__get_number_of_items() - 1; j >= 0; j--) {
            const digit = exp_digits.__deprecated_get_possible_item_at(j).__decide(
                ($) => $,
                () => _p_unreachable_code_path("index cannot be out of bounds")
            )
            $i['add item'](48 + digit)
        }
    })
}