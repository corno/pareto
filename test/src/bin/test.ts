#!/usr/bin/env node

import * as _pdev from 'pareto-core-dev'

import * as t_typescript_to_fp from "pub/dist/modules/typescript_light/implementation/manual/transformers/typescript_light/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/text"

import * as sh from "pub/dist/modules/typescript_light/shorthands/typescript_light"

let found_errors = false

function test_number_serialization(number: number, expected: string) {
    const actual = t_fp_to_text.Phrase(

        t_typescript_to_fp.Expression(
            sh.e.number_literal(number),
            {
                'object literal needs parentheses': false,
                'replace empty type literals by null': false
            }
        ),
        {
            'indentation': "    ",
            'newline': "\n",
        }
    )

    if (actual !== expected) {
        found_errors = true
        _pdev.log_debug_message(
            `Expected: '${expected}', Actual: '${actual}'`,
            () => { }
        )
    }
}

test_number_serialization(1, "1")
test_number_serialization(10, "10")
test_number_serialization(42, "42")
test_number_serialization(1.5, "1.5")
test_number_serialization(-1, "-1")
test_number_serialization(-1.5, "-1.5")
test_number_serialization(0, "0")
test_number_serialization(0.234230000, "0.23423")

if (found_errors) {
    _pdev.implement_me("number serialization does not match expected output")
}