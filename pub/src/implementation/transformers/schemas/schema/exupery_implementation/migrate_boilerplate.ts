import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
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
        op_flatten_dictionary(
            _pt.dictionary_literal({
                "": _pt.dictionary_literal({
                    "signatures": import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, "migration boilerplate"], {}),
                    "out": import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, $p.constrained ? "unresolved" : "unconstrained"], $p.constrained ? { "Source": t.null_() } : {}),
                }),
                "r ": $p.imports.map(($, key) => import_.ancestor(1, $['schema set child'].key, ["migration boilerplate"], {}))
            }),
            {
                'separator': "",
            },
            () => _pt.unreachable_code_path(),
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
                        'subselection': _pt.list_literal([])
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
        'subselection': _pi.List<_out_interface.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>>
    },
): d_out.Initialization<_pi.Deprecated_Source_Location> => {
    return _pt.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _pt.ss($, ($) => i.select_from_context([]))
            case 'boolean': return _pt.ss($, ($) => i.select_from_context([]))
            case 'nothing': return _pt.ss($, ($) => i.null_())
            case 'reference': return _pt.ss($, ($) => _pt.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _pt.ss($, ($) => i.null_())
                    case 'selected': return _pt.ss($, ($) => i.select_from_context(["key"]))
                    default: return _pt.au($[0])
                }
            }))
            case 'text': return _pt.ss($, ($) => i.select_from_context([]))
            case 'component': return _pt.ss($, ($) => i.call(
                _pt.cc($, ($) => {
                    switch ($[0]) {
                        case 'external': return _pt.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return _pt.ss($, ($) => s.from_variable($.key, []))
                        case 'internal cyclic': return _pt.ss($, ($) => s.from_variable($.key, []))
                        default: return _pt.au($[0])
                    }
                }),
                i.select_from_context([]),
                _pt.dictionary_literal({}),
            ))
            case 'dictionary': return _pt.ss($, ($) => i.dictionary_map(
                $.ordered ? s.from_context(["dictionary"]) : s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': $p.subselection.append_element(sub.dictionary()),
                    }
                )
            ))
            case 'group': return _pt.ss($, ($) => i.group($.dictionary.map(($, key) => i.change_context(
                s.from_context([key]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': $p.subselection.append_element(sub.group(key)),
                    }
                )
            ))))
            case 'list': return _pt.ss($, ($) => i.array_map(
                s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': $p.subselection.append_element(sub.list()),
                    }
                )
            ))
            case 'optional': return _pt.ss($, ($) => i.optional_map(
                s.from_context([]),
                Type_Node(
                    $,
                    {
                        'type': $p.type,
                        'subselection': $p.subselection.append_element(sub.optional()),
                    }
                )
            ))
            case 'state group': return _pt.ss($, ($) => i.switch_(
                s.from_context([]),
                $.map(($, key) => i.case_(key, Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': $p.subselection.append_element(sub.state_group(key)),
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
            default: return _pt.au($[0])
        }
    })
}
