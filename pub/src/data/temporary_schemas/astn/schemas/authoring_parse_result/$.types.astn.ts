import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data_types/target"

export const $: g_.Types<_pi.Deprecated_Source_Location> = types(
    {

        "Error": type(t.group({
            "type": prop(t.state_group({
                "lexer": tstate(t.state_group({
                    "unexpected control character": tstate(t.number_local(n.natural())),
                    "missing character after escape": tstate(t.nothing()),
                    "unexpected end of line in delimited string": tstate(t.nothing()),
                    "unexpected character": tstate(t.number_local(n.natural())),
                    "unterminated string": tstate(t.nothing()),
                    "unterminated block comment": tstate(t.nothing()),
                    "unterminated unicode escape sequence": tstate(t.nothing()),
                    "invalid unicode escape sequence": tstate(t.nothing()),
                    "unknown escape character": tstate(t.nothing()),
                    "unexpected end of input": tstate(t.nothing()),
                    "dangling slash": tstate(t.nothing()),
                })),
                "parser": tstate(t.group({
                    "expected": prop(t.list(t.state_group({
                        "a string": tstate(t.nothing()),
                        "a value": tstate(t.nothing()),
                        "!": tstate(t.nothing()),
                        ">": tstate(t.nothing()),
                        "}": tstate(t.nothing()),
                        "@": tstate(t.nothing()),
                        ",": tstate(t.nothing()),
                        ":": tstate(t.nothing()),
                        ")": tstate(t.nothing()),
                        "]": tstate(t.nothing()),
                        "#": tstate(t.nothing()),
                    }))),
                    "cause": prop(t.state_group({
                        "missing token": tstate(t.nothing()),
                        "unexpected token": tstate(t.group({
                            "found": prop(t.component_external("token", "Token Type")),
                        })),
                    })),
                })),
            })),
            "range": prop(t.optional(t.component_external("token", "Range"))),
        })),
    }
)