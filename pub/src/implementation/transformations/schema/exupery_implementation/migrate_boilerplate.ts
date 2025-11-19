import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as _in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as _out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/target"
import * as _out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/target"

import { m, variable, i, s } from "exupery/dist/shorthands/implementation"
import { t, import_, sub } from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/flatten"
import { $$ as op_append_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/append_element"
import { Signature } from "../../../../../interface/algorithms/transformations/schema/exupery_implementation/migrate_boilerplate"



export const Types = (
    $: _in.Types,
    $p: {
        'key': string,
        'imports': _in.Imports,
        'constrained': boolean
    }
): _out.Module_Set.D<_edata.Source_Location> => {
    return m.module(
        op_flatten_dictionary(
            _ea.dictionary_literal({
                "": _ea.dictionary_literal({
                    "signatures": import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, "migration boilerplate"], {}),
                    "out": import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, $p.constrained ? "unresolved" : "unconstrained"], $p.constrained ? { "Source": t.null_() } : {}),
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
                        'subselection': _ea.list_literal([])
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
        'subselection': _et.List<_out_interface.Type.SG.component.sub_selection.L<_edata.Source_Location>>
    },
): _out.Initialization<_edata.Source_Location> => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($) => i.select_from_context([]))
            case 'boolean': return _ea.ss($, ($) => i.select_from_context([]))
            case 'nothing': return _ea.ss($, ($) => i.null_())
            case 'reference': return _ea.ss($, ($) => _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _ea.ss($, ($) => i.null_())
                    case 'selected': return _ea.ss($, ($) => i.select_from_context(["key"]))
                    default: return _ea.au($[0])
                }
            }))
            case 'text': return _ea.ss($, ($) => i.select_from_context([]))
            case 'component': return _ea.ss($, ($) => i.call(
                _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'external': return _ea.ss($, ($) => s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return _ea.ss($, ($) => s.from_variable($.key, []))
                        case 'internal cyclic': return _ea.ss($, ($) => s.from_variable($.key, []))
                        default: return _ea.au($[0])
                    }
                }),
                i.select_from_context([]),
                _ea.dictionary_literal({}),
            ))
            case 'dictionary': return _ea.ss($, ($) => i.dictionary_map(
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
            case 'group': return _ea.ss($, ($) => i.group($.dictionary.map(($, key) => i.change_context(
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
            case 'list': return _ea.ss($, ($) => i.array_map(
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
            case 'optional': return _ea.ss($, ($) => i.optional_map(
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
            case 'state group': return _ea.ss($, ($) => i.switch_(
                s.from_context([]),
                $.map(($, key) => i.case_(key, Type_Node(
                    $.node,
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
            default: return _ea.au($[0])
        }
    })
}
