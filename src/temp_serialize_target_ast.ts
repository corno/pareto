import * as _ea from 'exupery-core-alg'

/**
 * this file should be in /generated/implementation/core
 * and there should be no dependencies on pareto-standard-operations
 */

import * as s_in from "./generated/interface/core/astn_target"
import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import {
    b, l, block,
} from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_apostrophe_delimiter } from "pareto-standard-operations/dist/impure/text/serialize_with_apostrophe_delimiter"
import { $$ as op_serialize_with_quote_delimiter } from "pareto-standard-operations/dist/impure/text/serialize_with_quote_delimiter"
import { $$ as op_serialize_with_grave_delimiter } from "pareto-standard-operations/dist/impure/text/serialize_with_grave_delimiter"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"

export const Value = (
    $: s_in.Value,
): s_out.Line_Part => {
    return l.sub([
        _ea.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => l.sub([
                    l.snippet("{"),
                    l.indent([
                        b.sub_decorated(op_dictionary_to_list($).map(($) => b.nested_line([
                            l.snippet(op_serialize_with_grave_delimiter($.key)),
                            l.snippet(": "),
                            Value($.value),
                        ]))),
                    ]),
                    l.snippet("}"),
                ]))
                case 'verbose group': return _ea.ss($, ($) => l.sub([
                    _ea.block(() => {
                        const entries = $
                        return l.sub([
                            l.snippet("("),
                            l.indent([
                                b.sub_decorated(op_dictionary_to_list(entries).map(($) => b.nested_line([
                                    l.snippet(op_serialize_with_apostrophe_delimiter($.key)),
                                    l.snippet(": "),
                                    Value($.value),
                                ]))),
                            ]),
                            l.snippet(")"),
                        ])
                    })
                ]))
                case 'list': return _ea.ss($, ($) => l.sub([
                    l.snippet("["),
                    l.sub_decorated($.map(($) => l.sub([
                        l.snippet(" "),
                        Value($),
                    ]))),
                    l.snippet(" ]"),
                ]))
                case 'state': return _ea.ss($, ($) => l.sub([
                    l.snippet("| "),
                    l.snippet(op_serialize_with_apostrophe_delimiter($.state)),
                    l.snippet(" "),
                    Value($.value),
                ]))
                case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _ea.ss($, ($) => l.snippet("~"))
                        case 'set': return _ea.ss($, ($) => l.sub([
                            l.snippet("* "),
                            Value($),
                        ]))

                        default: return _ea.au($[0])
                    }
                }))
                case 'nothing': return _ea.ss($, ($) => l.snippet("~"))
                case 'text': return _ea.ss($, ($) => {
                    const value = $.value
                    return _ea.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _ea.ss($, ($) => l.snippet(op_serialize_with_grave_delimiter(value)))
                            case 'quote': return _ea.ss($, ($) => l.snippet(op_serialize_with_quote_delimiter(value)))
                            case 'none': return _ea.ss($, ($) => l.snippet(value))
                            default: return _ea.au($[0])
                        }
                    })
                })
                default: return _ea.au($[0])
            }
        })
    ])
}

export const Document = (
    $: s_in.Document,
    $p: {
    }

): s_out.Block => block([b.nested_line([
    Value($),
])])
