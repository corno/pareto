import * as pd from 'exupery-core-data'
import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../generated/interface/schemas/schema/data_types/source"
import * as _out from "exupery/dist/generated/interface/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/generated/interface/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/pure/dictionary/flatten"
import { $$ as op_append_element } from "pareto-standard-operations/dist/pure/list/append_element"


export const Types = (
    $: _in.Types,
    $p: {
        'key': string,
        'imports': _in.Imports,
        'constrained': boolean
    }
): _out.Module_Set.D<pd.Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            pa.dictionary_literal({
                "": pa.dictionary_literal({
                    "signatures": import_.ancestor(3, "interface", ["schemas", $p.key, "migration boilerplate"], {}),
                    "out": import_.ancestor(3, "interface", ["schemas", $p.key, $p.constrained ? "unresolved" : "unconstrained"], $p.constrained ? { "Source": t.null_() } : {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["migration boilerplate"], {}))
            }),
            {
                'separator': "",
            }
        ),
        {},
        $.dictionary.map(($, key) => variable(
            t.component_imported("signatures", key, {}, []),
            i.function_(
                false,
                Type_Node(
                    $.node,
                    {
                        'type': key,
                        'subselection': pa.array_literal([])
                    }
                ),
            ),

        )),
    )
}

export const Type_Node = (
    $: _in.Type_Node,
    $p: {
        'type': string
        'subselection': pt.Array<_out_interface.Type.SG.component.sub_selection.L<pd.Source_Location>>
    },
): _out.Initialization<pd.Source_Location> => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'number': return pa.ss($, ($) => i.select_from_context([]))
            case 'boolean': return pa.ss($, ($) => i.select_from_context([]))
            case 'nothing': return pa.ss($, ($) => i.null_())
            case 'reference': return pa.ss($, ($) => pa.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return pa.ss($, ($) => i.null_())
                    case 'selected': return pa.ss($, ($) => i.select_from_context(["key"]))
                    default: return pa.au($[0])
                }
            }))
            case 'text': return pa.ss($, ($) => i.select_from_context([]))
            case 'component': return pa.ss($, ($) => i.call(
                pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'external': return pa.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return pa.ss($, ($) => s.from_variable($.key, []))
                        case 'internal cyclic': return pa.ss($, ($) => s.from_variable($.key, []))
                        default: return pa.au($[0])
                    }
                }),
                i.select_from_context([]),
                pa.dictionary_literal({}),
            ))
            case 'dictionary': return pa.ss($, ($) => i.dictionary_map(
                $.ordered ? s.from_context(["dictionary"]) : s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': op_append_element(
                            $p.subselection,
                            {
                                'element': sub.dictionary(),
                            },
                        ),
                    }
                )
            ))
            case 'group': return pa.ss($, ($) => i.group($.dictionary.map(($, key) => i.change_context(
                s.from_context([key]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': op_append_element(
                            $p.subselection,
                            {
                                'element': sub.group(key),
                            },
                        ),
                    }
                )
            ))))
            case 'list': return pa.ss($, ($) => i.array_map(
                s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': op_append_element(
                            $p.subselection,
                            {
                                'element': sub.list(),
                            },
                        ),
                    }
                )
            ))
            case 'optional': return pa.ss($, ($) => i.optional_map(
                s.from_context([]),
                Type_Node(
                    $,
                    {
                        'type': $p.type,
                        'subselection': op_append_element(
                            $p.subselection,
                            {
                                'element': sub.optional(),
                            },
                        ),
                    }
                )
            ))
            case 'state group': return pa.ss($, ($) => i.switch_(
                s.from_context([]),
                $.map(($, key) => i.case_(key, Type_Node(
                    $,
                    {
                        'type': $p.type,
                        'subselection': op_append_element(
                            $p.subselection,
                            {
                                'element': sub.state_group(key),
                            },
                        ),
                    }
                ))),
                t.component_imported(
                    "out",
                    $p.type,
                    {},
                    $p.subselection,
                ),
            ))
            // case 'type parameter': return pa.ss($, ($) => _edev.implement_me())
            default: return pa.au($[0])
        }
    })
}
