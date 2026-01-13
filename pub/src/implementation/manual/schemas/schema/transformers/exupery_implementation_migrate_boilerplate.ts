import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data_types/source"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data_types/source"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data_types/source"

import * as sh from "exupery/dist/shorthands/implementation"
import * as sh_i from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"


export const Types = (
    $: d_in.Types,
    $p: {
        'key': string,
        'imports': d_in.Imports,
        'constrained': boolean
    }
): d_out.Module_Set.D => {
    return sh.m.module(
        'refiner',
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "signatures": sh_i.import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, "migration boilerplate"]),
                    "out": sh_i.import_.ancestor(5, "interface", ["generated", "pareto", "schemas", $p.key, 
                        $p.constrained ? "unresolved" : "unconstrained"], ),
                }),
                "r ": $p.imports.__d_map(($, key) => sh_i.import_.ancestor(1, $['schema set child'].key, ["migration boilerplate"]))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        {},
        $.dictionary.__d_map(($, key) => sh.algorithm(
            sh.type_reference("signatures", key),
            false,
            false,
            false,
            Type_Node(
                $.node,
                {
                    'type': key,
                    'subselection': _p.list.literal([])
                }
            ),
        )),
    )
}

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'type': string
        'subselection': _pi.List<d_out_interface.Type.reference.sub_selection.L>
    },
): d_out.Expression => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            case 'boolean': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            case 'nothing': return _p.ss($, ($) => sh.e.null_())
            case 'reference': return _p.ss($, ($) => _p.sg($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => sh.e.null_())
                    case 'selected': return _p.ss($, ($) => sh.e.select_from_context_deprecated(["key"]))
                    default: return _p.au($[0])
                }
            }))
            case 'text': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            case 'component': return _p.ss($, ($) => sh.e.call(
                _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => sh.s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                        case 'internal cyclic': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                        default: return _p.au($[0])
                    }
                }),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({}),
            ))
            case 'dictionary': return _p.ss($, ($) => sh.e.dictionary_map(
                $.ordered ? sh.s.from_context(["dictionary"]) : sh.s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sh_i.sub.dictionary()
                            ]
                        ]),
                    }
                )
            ))
            case 'group': return _p.ss($, ($) => sh.e.group($.dictionary.__d_map(($, key) => sh.e.change_context(
                sh.s.from_context([key]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sh_i.sub.group(key)
                            ]
                        ]),
                    }
                )
            ))))
            case 'list': return _p.ss($, ($) => sh.e.list_map(
                sh.s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sh_i.sub.list()
                            ]
                        ]),
                    }
                )
            ))
            case 'optional': return _p.ss($, ($) => sh.e.optional_map(
                sh.s.from_context([]),
                Type_Node(
                    $,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sh_i.sub.optional()
                            ]
                        ]),
                    }
                )
            ))
            case 'state group': return _p.ss($, ($) => sh.e.decide_state_group(
                sh.s.from_context([]),
                $.__d_map(($, key) => sh.e.case_(key, Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal([
                            $p.subselection,
                            [
                                sh_i.sub.state_group(key)
                            ]
                        ]),
                    }
                ))),
                sh.type_node_reference(
                    "out",
                    $p.type,
                    $p.subselection,
                ),
            ))
            // case 'type parameter': return pa.ss($, ($) => _pdev.implement_me("xx"))
            default: return _p.au($[0])
        }
    })
}
