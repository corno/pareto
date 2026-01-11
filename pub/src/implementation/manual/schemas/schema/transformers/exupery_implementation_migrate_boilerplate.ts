import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, e, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Types = (
    $: d_in.Types,
    $p: {
        'key': string,
        'imports': d_in.Imports,
        'constrained': boolean
    }
): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
    return m.module(
        'refiner',
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "signatures": import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, "migration boilerplate"], {}),
                    "out": import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, $p.constrained ? "unresolved" : "unconstrained"], $p.constrained ? { "Source": t.nothing() } : {}),
                }),
                "r ": $p.imports.__d_map(($, key) => import_.ancestor(1, $['schema set child'].key, ["migration boilerplate"], {}))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        {},
        $.dictionary.__d_map(($, key) => variable(
            t.component_imported("signatures", key, {}, []),
            e.function_(
                false,
                Type_Node(
                    $.node,
                    {
                        'type': key,
                        'subselection': _p.list.literal([])
                    }
                ),
            ),

        )),
    )
}

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'type': string
        'subselection': _pi.List<d_out_interface.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>>
    },
): d_out.Expression<_pi.Deprecated_Source_Location> => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => e.select_from_context_deprecated([]))
            case 'boolean': return _p.ss($, ($) => e.select_from_context_deprecated([]))
            case 'nothing': return _p.ss($, ($) => e.null_())
            case 'reference': return _p.ss($, ($) => _p.sg($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => e.null_())
                    case 'selected': return _p.ss($, ($) => e.select_from_context_deprecated(["key"]))
                    default: return _p.au($[0])
                }
            }))
            case 'text': return _p.ss($, ($) => e.select_from_context_deprecated([]))
            case 'component': return _p.ss($, ($) => e.call(
                _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return _p.ss($, ($) => s.from_variable($.key, []))
                        case 'internal cyclic': return _p.ss($, ($) => s.from_variable($.key, []))
                        default: return _p.au($[0])
                    }
                }),
                e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({}),
            ))
            case 'dictionary': return _p.ss($, ($) => e.dictionary_map(
                $.ordered ? s.from_context(["dictionary"]) : s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sub.dictionary()
                            ]
                        ]),
                    }
                )
            ))
            case 'group': return _p.ss($, ($) => e.group($.dictionary.__d_map(($, key) => e.change_context(
                s.from_context([key]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sub.group(key)
                            ]
                        ]),
                    }
                )
            ))))
            case 'list': return _p.ss($, ($) => e.list_map(
                s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sub.list()
                            ]
                        ]),
                    }
                )
            ))
            case 'optional': return _p.ss($, ($) => e.optional_map(
                s.from_context([]),
                Type_Node(
                    $,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sub.optional()
                            ]
                        ]),
                    }
                )
            ))
            case 'state group': return _p.ss($, ($) => e.decide_state_group(
                s.from_context([]),
                $.__d_map(($, key) => e.case_(key, Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sub.state_group(key)
                            ]
                        ]),
                    }
                ))),
                t.component_imported(
                    "out",
                    $p.type,
                    {},
                    $p.subselection,
                ),
            ))
            // case 'type parameter': return pa.ss($, ($) => _pdev.implement_me("xx"))
            default: return _p.au($[0])
        }
    })
}
